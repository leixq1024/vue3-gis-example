// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/terrain/OverlayContent ../views/3d/terrain/TransparencyMode ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(w,N,x,C,O,P,y,z,f,Q,R,S,T,U,V,W,X,Y,r,D,Z,m,aa,k,E,t,u,ba,a,ca,da,ea){function F(b){const c=new da.ShaderBuilder,{vertex:e,fragment:d,varyings:n}=c,{output:G,pbrMode:p,overlayMode:H,tileBorders:I,spherical:J,transparencyMode:A,screenSizePerspective:v}=b;c.include(T.PositionAttribute);c.include(S.NormalAttribute,b);c.include(U.TextureCoordinateAttribute,b);var q=()=>{c.include(Z.NormalUtils,b);e.code.add(a.glsl`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};u.addProjViewLocalOrigin(e,b);c.include(R.Transform,b);const K=A===y.TransparencyMode.InvisibleWithDraped||A===y.TransparencyMode.Invisible,h=H!==k.OverlayMode.Disabled;var g=h&&K;switch(G){case f.ShaderOutput.ColorEmission:case f.ShaderOutput.Color:c.include(E.TerrainTexture,b);c.include(r.EvaluateSceneLighting,b);h&&(b.pbrMode=p===m.PBRMode.Simplified?m.PBRMode.TerrainWithWater:m.PBRMode.Water,c.include(k.OverlayTerrain,b),b.pbrMode=p);(g=H===k.OverlayMode.EnabledWithWater)&&c.include(V.VertexTangent,
b);n.add("vnormal","vec3");n.add("vpos","vec3");n.add("vup","vec3");q();v&&u.addViewNormal(e);(q=b.receiveShadows&&!b.renderOccluded)&&c.include(z.ForwardLinearDepth,b);v&&(n.add("screenSizeDistanceToCamera","float"),n.add("screenSizeCosAngle","float"));e.main.add(a.glsl`
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);
          vnormal = getNormal();
          vup = getLocalUp(position, localOrigin);
          ${a.If(g,a.glsl`forwardVertexTangent(vnormal);`)}

          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${a.If(h,"setOverlayVTC(uv);")}
          ${a.If(I,"forwardTextureCoordinates();")}
          ${a.If(v,a.glsl`vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
                 screenSizeDistanceToCamera = length(viewPos);
                 vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
                 screenSizeCosAngle = abs(viewSpaceNormal.z);`)}
          ${a.If(q,"forwardLinearDepth();")}`);c.include(Q.SliceDraw,b);c.include(r.EvaluateSceneLighting,b);c.include(Y.EvaluateAmbientOcclusion,b);c.include(aa.ReadShadowMapDraw,b);u.addCameraPosition(d,b);r.addAmbientBoostFactor(d);r.addLightingGlobalFactor(d);d.uniforms.add(e.uniforms.get("localOrigin"),new ba.Float3PassUniform("viewDirection",(B,l)=>C.normalize(L,C.set(L,l.camera.viewMatrix[12],l.camera.viewMatrix[13],l.camera.viewMatrix[14]))));g&&d.uniforms.add(new ea.Texture2DPassUniform("ovWaterTex",
(B,l)=>l.overlay?.getTexture(P.OverlayContent.WaterNormal)),new ca.Matrix4DrawUniform("view",(B,l)=>N.translate(fa,l.camera.viewMatrix,B.origin)));d.code.add(a.glsl`float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`);D.addMainLightDirection(d);D.addMainLightIntensity(d);d.main.add(a.glsl`
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${q?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":J?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${a.If(h,a.glsl`vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
                   vec4 overlayColor = overlayOpacity * overlayColorOpaque;
                   ${a.If(K,`if (overlayColor.a < ${a.glsl.float(t.alphaCutoff)}) { discard; }`)}
                   vec4 groundColor = tileColor;
                   tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`)}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a < ${a.glsl.float(t.alphaCutoff)}) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= ${a.glsl.float(.2)};
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${p===m.PBRMode.Simplified||p===m.PBRMode.TerrainWithWater?a.glsl`fragColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:a.glsl`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${a.If(g,a.glsl`vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
                   float waterNormalLength = length(overlayWaterMask);
                   if (waterNormalLength > 0.95) {
                     mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                     vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                     vec4 viewPosition = view*vec4(vpos, 1.0);
                     vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                     vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                     float opacity = sliced ? ${a.glsl.float(.2)} : 1.0;
                     // un-gamma the ground color to mix in linear space
                     fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
                   }`)}
          ${a.If(v,a.glsl`float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0));
                   if (perspectiveScale <= 0.25) {
                     fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
                   } else if (perspectiveScale <= 0.5) {
                     fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
                   } else if (perspectiveScale >= 0.99) {
                     fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
                   } else {
                     fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
                   }`)}
          ${a.If(b.visualizeNormals,J?a.glsl`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);`:a.glsl`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);`)}
          ${a.If(I,a.glsl`vec2 dVuv = fwidth(vuv0);
                 vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
                 float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
                 fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`)}
          fragColor = highlightSlice(fragColor, vpos);`);break;case f.ShaderOutput.Depth:g&&c.include(k.OverlayTerrain,b);e.main.add(a.glsl`
        ${a.If(g,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);`);d.main.add(`${a.If(g,`if (getCombinedOverlayColor().a < ${a.glsl.float(t.alphaCutoff)}) discard;`)}`);break;case f.ShaderOutput.Shadow:case f.ShaderOutput.ShadowHighlight:case f.ShaderOutput.ShadowExcludeHighlight:case f.ShaderOutput.ViewshedShadow:c.include(W.OutputDepth,b);z.addLinearDepth(c);z.addNearFar(c);e.main.add(a.glsl`gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);`);d.main.add(a.glsl`outputDepth(linearDepth);`);
break;case f.ShaderOutput.Normal:g&&c.include(k.OverlayTerrain,b);n.add("vnormal","vec3");u.addViewNormal(e);q();e.main.add(a.glsl`
        ${a.If(g,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);
        vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);`);d.main.add(a.glsl`
        ${a.If(g,`if (getCombinedOverlayColor().a < ${a.glsl.float(t.alphaCutoff)}) discard;`)}
        vec3 normal = normalize(vnormal);
        if (gl_FrontFacing == false) {
          normal = -normal;
        }
        fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case f.ShaderOutput.Highlight:h&&c.include(k.OverlayTerrain,b),e.main.add(a.glsl`
        ${a.If(h,"setOverlayVTC(getUV0());")}
        gl_Position = transformPosition(proj, view, position);`),c.include(X.OutputHighlight,b),d.main.add(a.glsl`
        ${a.If(h,a.glsl`
           vec2 overlayHighlightTexel = getAllOverlayHighlightValuesEncoded();
           outputAllHighlights(overlayHighlightTexel);`,"calculateOcclusionAndOutputHighlight();")}
      `)}G===f.ShaderOutput.ObjectAndLayerIdColor&&(h?(b.pbrMode=m.PBRMode.Disabled,c.include(k.OverlayTerrain,b),b.pbrMode=p,e.main.add(a.glsl`gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());`),d.main.add(a.glsl`fragColor = getOverlayColorTexel(vtcOverlay);`)):(e.main.add(a.glsl`${a.If(A===y.TransparencyMode.Opaque,"gl_Position \x3d transformPosition(proj, view, position);")}`),d.main.add(a.glsl`fragColor = vec4(0.0);`)));return c}class M extends E.OverlayTerrainPassParameters{}const fa=x.create(),L=O.create();x=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:M,build:F},Symbol.toStringTag,{value:"Module"}));w.Terrain=x;w.TerrainPassParameters=
M;w.build=F});