// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../geometry/support/Ellipsoid ../views/3d/terrain/OverlayContent ../views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration ../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl ../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeFragmentNormals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(x,r,I,y,z,J,K,f,L,M,N,O,P,Q,R,A,S,T,n,U,l,V,W,X,B,Y,Z,C,a,aa,D,ba){function E(c){const b=new aa.ShaderBuilder;b.include(P.VertexPosition,c);b.include(O.VertexNormal,c);b.include(N.VertexColor,c);b.include(M.TextureCoordinateAttribute,c);b.include(K.ForwardLinearDepth,c);b.include(z.ComponentData,c);b.include(Z.DiscardOrAdjustAlphaDraw,c);b.include(L.SlicePass,c);b.include(V.ReadBaseColorTexture,c);b.include(J.VertexDiscardByOpacity,c);const {vertex:t,fragment:d}=b,{output:g,pbrMode:p,hasNormalTexture:u,
snowCover:F,receiveShadows:v,spherical:e,ellipsoidMode:G}=c;var m=p===l.PBRMode.Normal||p===l.PBRMode.Schematic;m&&(b.include(l.PhysicallyBasedRenderingParameters,c),u&&b.include(T.ComputeNormalTexture,c));var q=g===f.ShaderOutput.Shadow||g===f.ShaderOutput.ShadowHighlight||g===f.ShaderOutput.ShadowExcludeHighlight;t.code.add(`#define discardShadows(castShadows) { ${a.If(q&&c.componentData===z.ComponentDataType.Varying,"if(!castShadows) { gl_Position \x3d vec4(vec3(1e38), 1.0); return; }")} }`);const h=
c.integratedMeshMode===y.IntegratedMeshMode.ColorOverlay||c.integratedMeshMode===y.IntegratedMeshMode.ColorOverlayWithWater;if(h){b.include(n.EvaluateSceneLighting,c);b.include(B.OverlayIM,c);var k=G===C.EllipsoidMode.Earth;t.code.add(`\n      ${a.If(e,`const float invRadius = ${a.glsl.float(1/(G===C.EllipsoidMode.Earth?r.earth.radius:k?r.mars.radius:r.moon.radius))};`)}\n      vec2 projectOverlay(vec3 pos) { return pos.xy ${a.If(e,"/ (1.0 + invRadius * pos.z);")}; }`)}if(k=h&&f.isColorOrColorEmission(g)&&
p===l.PBRMode.WaterOnIntegratedMesh)b.varyings.add("tbnTangent","vec3"),b.varyings.add("tbnBiTangent","vec3"),b.varyings.add("groundNormal","vec3");t.main.add(a.glsl`
    bool castShadows;
    vec4 externalColor = forwardExternalColor(castShadows);
    discardShadows(castShadows);

    vertexDiscardByOpacity(externalColor.a);

    ${g===f.ShaderOutput.ObjectAndLayerIdColor?a.glsl`externalColor.a = 1.0;`:""}

    if (externalColor.a < ${a.glsl.float(Y.alphaCutoff)}) {
      // Discard this vertex
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }

    forwardPosition(readElevationOffset());
    forwardNormal();
    forwardTextureCoordinates();
    forwardVertexColor();
    forwardLinearDepth();
    forwardObjectAndLayerIdColor();
    ${k?e?a.glsl`
              groundNormal = normalize(positionWorld());
              tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
              tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:a.glsl`
              groundNormal = vec3(0.0, 0.0, 1.0);
              tbnTangent = vec3(1.0, 0.0, 0.0);
              tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
    ${h?a.glsl`setOverlayVTC(projectOverlay(position));`:""}
  `);if(f.isColorOrColorEmission(g))return b.include(X.terrainDepthTest,c),b.include(S.ComputeMaterialColor,c),b.include(A.computeFragmentNormals,c),b.include(n.EvaluateSceneLighting,c),b.include(ba.outputColorHighlightOID,c),v&&b.include(W.ReadShadowMapPass,c),d.code.add(a.glsl`
      float evaluateShadow() {
        return ${v?"readShadowMap(vPositionWorldCameraRelative, linearDepth)":"0.0"};
      }`),h&&d.uniforms.add(new D.Texture2DPassUniform("ovColorTex",(H,w)=>B.getIMColorTexture(H,w))),d.main.add(a.glsl`
      discardBySlice(vPositionWorldCameraRelative);
      terrainDepthTest(vPosition_view.z);

      vec4 textureColor = readBaseColorTexture();
      discardOrAdjustAlpha(textureColor);

      vec4 externalColor;
      int externalColorMixMode;
      readExternalColor(externalColor, externalColorMixMode);

      vec4 materialColor = computeMaterialColor(textureColor, externalColor, externalColorMixMode);
      ${h?a.glsl`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),m?(U.addMainLightIntensity(d),e&&n.addLightingGlobalFactor(d),d.main.add(a.glsl`
        applyPBRFactors();
        ${a.If(p===l.PBRMode.Normal,a.glsl`if (externalColorMixMode == 3) {
              mrr = vec3(0.0, 0.6, 0.2);
            }`)}
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
        ${a.If(u,"mat3 tangentSpace \x3d computeTangentSpace(fragmentShadingNormal, vPositionWorldCameraRelative, vuv0);")}
        vec3 shadingNormal = ${u?"computeTextureNormal(tangentSpace, vuv0)":"fragmentShadingNormal"};
        vec3 normalGround = ${e?a.glsl`normalize(positionWorld())`:a.glsl`vec3(0.0, 0.0, 1.0)`};

        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * evaluateAmbientOcclusionInverse();
        ${a.If(F,a.glsl`float snow = smoothstep(0.5, 0.55, dot(fragmentFaceNormal, normalize(positionWorld())));
                 materialColor.rgb = mix(materialColor.rgb, vec3(1.1), snow);
                 ssao = mix(ssao, 0.5 * ssao, snow);
                 shadingNormal = mix(shadingNormal, fragmentFaceNormal, snow);`)}
        ${a.If(h,"materialColor \x3d materialColor * (1.0 - overlayColor.a) + overlayColor;")}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 emission = getEmissions();
        ${a.If(e,"float additionalAmbientScale \x3d additionalDirectedAmbientLight(positionWorld());")}
        ${e?a.glsl`float shadow = max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow());`:"float shadow \x3d evaluateShadow();"}
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, shadow, ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e&&n.addLightingGlobalFactor(d),k&&d.uniforms.add(new D.Texture2DPassUniform("ovNormalTex",(H,w)=>w.overlay?.getTexture(I.OverlayContent.WaterNormal))),d.main.add(a.glsl`
        ${a.If(e,"float additionalAmbientScale \x3d additionalDirectedAmbientLight(positionWorld());")}
        float shadow = ${v?e?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), evaluateShadow())":"evaluateShadow()":e?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        ${a.If(F,a.glsl`float snow = smoothstep(0.5, 0.55, dot(fragmentFaceNormal, normalize(positionWorld())));
               materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)}

        // At global scale we create some additional ambient light based on the main light to simulate global illumination
        float ssao = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());

        ${h?a.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(fragmentShadingNormal, materialColor.rgb, shadow, ssao, additionalLight), materialColor.a);
        ${a.If(k,a.glsl`vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
                 float waterNormalLength = length(overlayWaterMask);
                 if (waterNormalLength > 0.95) {
                   mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                   vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                   vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                   // un-gamma the ground color to mix in linear space
                   shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
                 }`)}
      `)),d.main.add(a.glsl`outputColorHighlightOID(shadedColor, vPositionWorldCameraRelative);`),b;m=g===f.ShaderOutput.Normal;k=g===f.ShaderOutput.ObjectAndLayerIdColor;const ca=g===f.ShaderOutput.Highlight;(q=q||g===f.ShaderOutput.ViewshedShadow)&&b.include(Q.OutputDepth,c);m&&b.include(A.computeFragmentNormals,c);b.include(R.OutputHighlight,c);d.main.add(a.glsl`
    discardBySlice(vPositionWorldCameraRelative);

    vec4 textureColor = readBaseColorTexture();
    discardOrAdjustAlpha(textureColor);

    ${a.If(q,"outputDepth(linearDepth);")}
    ${a.If(m,a.glsl`fragColor = vec4(vec3(0.5) + 0.5 * fragmentFaceNormalView, 1.0);`)}
    ${a.If(k,h?"fragColor \x3d getOverlayColorTexel(vtcOverlay);":"outputObjectAndLayerIdColor();")}
    ${a.If(ca,a.glsl`${a.If(h,a.glsl`
           vec2 overlayHighlightTexel = getAllOverlayHighlightValuesEncoded();
           outputAllHighlights(overlayHighlightTexel);`,a.glsl`calculateOcclusionAndOutputHighlight();`)}`)}`);return b}const da=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));x.ComponentShader=da;x.build=E});