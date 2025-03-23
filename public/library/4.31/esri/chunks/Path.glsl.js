// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(r,t,d,h,k,A,B,C,D,E,l,F,G,u,m,v,H,I,n,p,J,c,K,L){function w(b){const a=new K.ShaderBuilder,{vertex:f,fragment:e}=a;n.addProjViewLocalOrigin(f,b);a.varyings.add("vpos","vec3");a.include(B.PathVertexPosition,b);const {output:q,spherical:x,pbrMode:y,receiveShadows:M}=b,z=d.isColorOrColorEmission(q);if(z||q===d.ShaderOutput.ObjectAndLayerIdColor)a.include(k.Transform,b),a.include(v.ReadShadowMapDraw,b),a.include(t.ForwardLinearDepth,b),a.include(A.ObjectAndLayerIdColor,b),a.varyings.add("vnormal",
"vec3"),a.varyings.add("vcolor","vec4"),b.terrainDepthTest&&a.varyings.add("depth","float"),f.main.add(c.glsl`
      vpos = calculateVPos();
      vnormal = normalize(localNormal());

      ${b.terrainDepthTest?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);

      ${z?"forwardLinearDepth();":""}
      forwardObjectAndLayerIdColor();

      vcolor = getColor();`);a.include(H.terrainDepthTest,b);switch(q){case d.ShaderOutput.ColorEmission:case d.ShaderOutput.Color:a.include(m.PhysicallyBasedRenderingParameters,b);a.include(l.EvaluateSceneLighting,b);a.include(E.EvaluateAmbientOcclusion,b);a.include(v.ReadShadowMapDraw,b);a.include(G.Normals,b);a.include(h.SliceDraw,b);a.include(L.outputColorHighlightOID,b);n.addCameraPosition(e,b);l.addAmbientBoostFactor(e);l.addLightingGlobalFactor(e);e.uniforms.add(f.uniforms.get("localOrigin"),
new p.Float3PassUniform("ambient",g=>g.ambient),new p.Float3PassUniform("diffuse",g=>g.diffuse),new p.Float3PassUniform("specular",g=>g.specular),new J.FloatPassUniform("opacity",g=>g.opacity));e.include(I.ColorConversion);F.addMainLightIntensity(e);e.main.add(c.glsl`
        discardBySlice(vpos);
        ${b.terrainDepthTest?c.glsl`terrainDepthTest(depth);`:""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${x?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = ${M?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth));":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale);":"0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        ${c.If(y===m.PBRMode.Schematic,"float additionalAmbientIrradiance \x3d additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           vec4 emission \x3d getEmissions();")}

        vec3 shadedColor = ${y===m.PBRMode.Schematic?"evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);":"evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);"}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOID(finalColor, vpos);`);break;case d.ShaderOutput.Depth:a.include(k.Transform,b);f.main.add(c.glsl`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`);a.include(h.SliceDraw,b);e.main.add(c.glsl`discardBySlice(vpos);`);break;case d.ShaderOutput.Shadow:case d.ShaderOutput.ShadowHighlight:case d.ShaderOutput.ShadowExcludeHighlight:case d.ShaderOutput.ViewshedShadow:a.include(k.Transform,b);t.addNearFar(a);a.varyings.add("depth","float");f.main.add(c.glsl`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`);a.include(h.SliceDraw,b);a.include(C.OutputDepth,b);e.main.add(c.glsl`discardBySlice(vpos);
outputDepth(depth);`);break;case d.ShaderOutput.ObjectAndLayerIdColor:a.include(h.SliceDraw,b);e.main.add(c.glsl`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case d.ShaderOutput.Normal:a.include(k.Transform,b);a.include(u.NormalUtils,b);n.addViewNormal(f);a.varyings.add("vnormal","vec3");f.main.add(c.glsl`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`);a.include(h.SliceDraw,b);e.main.add(c.glsl`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case d.ShaderOutput.Highlight:a.include(k.Transform,b),a.include(u.NormalUtils,b),a.varyings.add("vnormal","vec3"),f.main.add(c.glsl`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),a.include(h.SliceDraw,b),a.include(D.OutputHighlight,b),e.main.add(c.glsl`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return a}const N=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));r.Path=N;r.build=w});