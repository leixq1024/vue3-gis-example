// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(n,p,k,q,v,w,x,y,z,A,l,m,r,b,B,C){function t(c){const e=new B.ShaderBuilder,{vertex:f,fragment:g}=e,{terrainDepthTest:h}=c;f.include(w.AlignPixel);e.include(x.HUD,c);e.include(v.SliceDraw,c);e.attributes.add(C.VertexAttribute.UV0,"vec2");f.uniforms.add(new m.Float4PassUniform("viewport",(a,d)=>d.camera.fullViewport),new r.FloatPassUniform("lineSize",(a,d)=>0<a.size?Math.max(1,a.size)*d.camera.pixelRatio:0),new l.Float2PassUniform("pixelToNDC",(a,d)=>p.set(u,2/d.camera.fullViewport[2],2/d.camera.fullViewport[3])),
new r.FloatPassUniform("borderSize",(a,d)=>a.borderColor?d.camera.pixelRatio:0),new l.Float2PassUniform("screenOffset",(a,d)=>p.set(u,a.horizontalScreenOffset*d.camera.pixelRatio,0)));e.varyings.add("coverageSampling","vec4");e.varyings.add("lineSizes","vec2");h&&e.varyings.add("depth","float");c.occlusionTestEnabled&&e.include(y.HUDVisibility);c.hasScreenSizePerspective&&A.addScreenSizePerspectiveAlignment(f);f.main.add(b.glsl`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${b.If(c.occlusionTestEnabled,b.glsl`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${c.hasScreenSizePerspective?b.glsl`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:"vec2 screenOffsetScaled \x3d screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${b.If(h,"depth \x3d posView.z;")}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${b.If(c.hudDepth,c.hudDepthAlignStart?"endAligned \x3d vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);":"startAligned \x3d vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${c.hasScreenSizePerspective?b.glsl`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);`:b.glsl`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`);g.uniforms.add(new m.Float4PassUniform("uColor",a=>a.color??q.ZEROS),new m.Float4PassUniform("borderColor",a=>a.borderColor??q.ZEROS));h&&(g.include(z.multipassGeometryTest,c),g.uniforms.add(new l.Float2PassUniform("inverseViewport",(a,d)=>d.inverseViewport)));g.main.add(b.glsl`
    ${b.If(h,"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }")}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${b.If(!c.hudDepth,b.glsl`vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
           fragColor = vec4(finalRgb, finalAlpha);`)}`);return e}const u=k.create();k=Object.freeze(Object.defineProperty({__proto__:null,build:t},Symbol.toStringTag,{value:"Module"}));n.LineCallout=k;n.build=t});