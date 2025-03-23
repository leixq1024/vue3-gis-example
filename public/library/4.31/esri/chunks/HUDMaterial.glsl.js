// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../core/libs/gl-matrix-2/factories/vec4f64 ../geometry/support/Ellipsoid ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/OITPass ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(q,r,u,A,F,l,G,H,I,J,K,L,M,N,m,O,P,v,Q,B,R,t,w,a,S,C,x,n){function D(b){const c=new S.ShaderBuilder;var f=b.signedDistanceFieldEnabled;c.include(J.HUD,b);c.include(G.SliceDraw,b);if(b.occlusionPass)return c.include(K.HUDOcclusionPass,b),c;const {vertex:g,fragment:h}=c;c.include(v.ScreenSizePerspective);c.include(N.VisualVariables,b);c.include(H.ObjectAndLayerIdColor,b);c.include(L.HUDVisibility);h.include(P.RgbaFloatEncoding);h.include(O.ColorConversion);c.varyings.add("vcolor","vec4");c.varyings.add("vtc",
"vec2");c.varyings.add("vsize","vec2");c.varyings.add("voccluded","float");g.uniforms.add(new t.Float4PassUniform("viewport",(d,e)=>e.camera.fullViewport),new B.Float2PassUniform("screenOffset",(d,e)=>r.set(E,2*d.screenOffset[0]*e.camera.pixelRatio,2*d.screenOffset[1]*e.camera.pixelRatio)),new B.Float2PassUniform("anchorPosition",d=>y(d)),new t.Float4PassUniform("materialColor",d=>d.color),new w.FloatPassUniform("materialRotation",d=>d.rotation));Q.addPixelRatio(g);f&&(g.uniforms.add(new t.Float4PassUniform("outlineColor",
d=>d.outlineColor)),h.uniforms.add(new t.Float4PassUniform("outlineColor",d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineColor:A.ZEROS),new w.FloatPassUniform("outlineSize",d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineSize:0)));b.horizonCullingEnabled&&g.uniforms.add(new R.Float4DrawUniform("pointDistanceSphere",(d,e)=>{e=e.camera.eye;d=d.origin;return A.fromValues(d[0]-e[0],d[1]-e[1],d[2]-e[2],F.earth.radius)}));b.pixelSnappingEnabled&&g.include(I.AlignPixel);b.hasScreenSizePerspective&&(v.addScreenSizePerspective(g),
v.addScreenSizePerspectiveAlignment(g));b.debugDrawLabelBorder&&c.varyings.add("debugBorderCoords","vec4");c.attributes.add(n.VertexAttribute.UV0,"vec2");c.attributes.add(n.VertexAttribute.COLOR,"vec4");c.attributes.add(n.VertexAttribute.SIZE,"vec2");c.attributes.add(n.VertexAttribute.ROTATION,"float");c.attributes.add(n.VertexAttribute.FEATUREATTRIBUTE,"vec4");g.code.add(b.horizonCullingEnabled?a.glsl`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:a.glsl`bool behindHorizon(vec3 posModel) { return false; }`);g.main.add(a.glsl`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${a.If(b.hasScreenSizePerspective,a.glsl`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,a.glsl`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${a.If(b.vvSize,a.glsl`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);var p=a.glsl`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${a.If(b.hasRotation,a.glsl`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,k=b.pixelSnappingEnabled?f?a.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:a.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:a.glsl`posProj += quadOffset;`;g.main.add(a.glsl`
    ${a.If(b.occlusionTestEnabled,a.glsl`
      if (!visible) {
        vtc = vec2(0.0);
        ${a.If(b.debugDrawLabelBorder,"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
    ${p}
    ${b.vvColor?"vcolor \x3d interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;"}

    ${a.If(b.output===l.ShaderOutput.ObjectAndLayerIdColor,a.glsl`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${a.glsl.float(m.alphaCutoff)};
    ${a.If(f,`alphaDiscard = alphaDiscard && outlineColor.a < ${a.glsl.float(m.alphaCutoff)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${k}
      gl_Position = posProj;
    }

    vtc = uv;

    ${a.If(b.debugDrawLabelBorder,a.glsl`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);h.uniforms.add(new C.Texture2DPassUniform("tex",d=>d.texture));b.occludedFragmentFade&&(h.uniforms.add(new C.Texture2DPassUniform("depthMap",(d,e)=>e.mainDepth)),h.uniforms.add(new w.FloatPassUniform("fadeFactor",()=>z.occludedFadeFactor)));p=b.debugDrawLabelBorder?a.glsl`(isBorder > 0.0 ? 0.0 : ${a.glsl.float(m.alphaCutoff)})`:a.glsl.float(m.alphaCutoff);k=b.output===l.ShaderOutput.Highlight;f=a.glsl`
    ${a.If(b.debugDrawLabelBorder,a.glsl`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${a.If(b.sampleSignedDistanceFieldTexelCenter,a.glsl`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,a.glsl`vec2 samplePos = vtc;`)}

    ${f?a.glsl`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${p} ||
          fillPixelColor.a + outlinePixelColor.a < ${a.glsl.float(m.alphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${a.If(!k,a.glsl`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${p}) {
          discard;
        }

        ${a.If(!k,a.glsl`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:a.glsl`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${p}) {
            discard;
          }
          ${a.If(!k,a.glsl`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${a.If(b.occludedFragmentFade&&!k,a.glsl`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= fadeFactor;
        }
        `)}

    ${a.If(!k&&b.debugDrawLabelBorder,a.glsl`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(b.output){case l.ShaderOutput.Color:b.oitPass===x.OITPass.ColorAlpha&&(c.outputs.add("fragColor","vec4",0),c.outputs.add("fragAlpha","float",1));h.main.add(a.glsl`
        ${f}
        ${a.If(b.oitPass===x.OITPass.FrontFace,a.glsl`fragColor.rgb /= fragColor.a;`)}
        ${a.If(b.oitPass===x.OITPass.ColorAlpha,a.glsl`fragAlpha = fragColor.a;`)}`);break;case l.ShaderOutput.ObjectAndLayerIdColor:h.main.add(a.glsl`
        ${f}
        outputObjectAndLayerIdColor();`);break;case l.ShaderOutput.Highlight:c.include(M.OutputHighlight,b),h.main.add(a.glsl`
        ${f}
        outputHighlight(voccluded == 1.0);`)}return c}function y(b,c=E){if(b.textureIsSignedDistanceField){var f=b.anchorPosition;b=b.distanceFieldBoundingBox;null!=b?r.set(c,f[0]*(b[2]-b[0])+b[0],f[1]*(b[3]-b[1])+b[1]):r.set(c,0,0)}else r.copy(c,b.anchorPosition);return c}const z={occludedFadeFactor:.6},E=u.create();u=Object.freeze(Object.defineProperty({__proto__:null,build:D,calculateAnchorPosForRendering:y,shaderSettings:z},Symbol.toStringTag,{value:"Module"}));q.HUDMaterial=u;q.build=D;q.calculateAnchorPosForRendering=
y;q.shaderSettings=z});