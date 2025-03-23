// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(t,F,G,H,I,J,K,h,L,M,N,O,P,Q,R,S,T,l,U,V,W,m,u,X,f,Y,Z,aa,ba,n,v,ca,w,c,da,ea,fa,ha){function x(a){const b=new da.ShaderBuilder,{vertex:g,fragment:e,varyings:k}=b,{output:ia,normalType:p,offsetBackfaces:y,instancedColor:z,spherical:A,receiveShadows:ja,snowCover:q,pbrMode:B,textureAlphaPremultiplied:ka,instancedDoublePrecision:la,hasVertexColors:C,hasVertexTangents:D,hasColorTexture:E,hasNormalTexture:ma,hasNormalTextureTransform:na,hasColorTextureTransform:oa}=a;n.addProjViewLocalOrigin(g,
a);b.include(L.PositionAttribute);k.add("vpos","vec3");b.include(Y.VisualVariables,a);b.include(K.InstancedDoublePrecision,a);b.include(Q.VerticalOffset,a);b.include(f.colorTextureUV,a);if(!H.isColorOrColorEmission(ia))return b.include(R.DefaultMaterialAuxiliaryPasses,a),b;b.include(f.normalTextureUV,a);b.include(f.emissiveTextureUV,a);b.include(f.occlusionTextureUV,a);b.include(f.metallicRoughnessTextureUV,a);n.addCameraPosition(g,a);b.include(h.NormalAttribute,a);b.include(J.Transform,a);const r=
p===h.NormalType.Attribute||p===h.NormalType.Compressed;r&&y&&b.include(G.Offset);b.include(S.ComputeNormalTexture,a);b.include(P.VertexNormal,a);z&&b.attributes.add(fa.VertexAttribute.INSTANCECOLOR,"vec4");k.add("vPositionLocal","vec3");b.include(N.TextureCoordinateAttribute,a);b.include(F.ForwardLinearDepth,a);b.include(M.SymbolColor,a);b.include(O.VertexColor,a);g.uniforms.add(new ca.Float4PassUniform("externalColor",d=>d.externalColor));k.add("vcolorExt","vec4");a.terrainDepthTest&&k.add("depth",
"float");g.main.add(c.glsl`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${c.If(z,"vcolorExt *\x3d instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${c.glsl.float(Z.alphaCutoff)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${c.If(r,"vNormalWorld \x3d dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${c.If(D,"vTangent \x3d dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${c.If(r&&y,"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${c.If(a.terrainDepthTest,"depth \x3d (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `);b.include(l.EvaluateSceneLighting,a);b.include(T.EvaluateAmbientOcclusion,a);b.include(aa.DiscardOrAdjustAlphaPass,a);b.include(la?u.ReadShadowMapPass:u.ReadShadowMapDraw,a);b.include(X.terrainDepthTest,a);b.include(I.SliceDraw,a);b.include(ha.outputColorHighlightOID,a);n.addCameraPosition(e,a);e.uniforms.add(g.uniforms.get("localOrigin"),new v.Float3PassUniform("ambient",d=>d.ambient),new v.Float3PassUniform("diffuse",d=>d.diffuse),new w.FloatPassUniform("opacity",d=>d.opacity),new w.FloatPassUniform("layerOpacity",
d=>d.layerOpacity));E&&e.uniforms.add(new ea.Texture2DPassUniform("tex",d=>d.texture));b.include(m.PhysicallyBasedRenderingParameters,a);b.include(W.PhysicallyBasedRendering,a);e.include(ba.MixExternalColor);b.include(V.Normals,a);l.addAmbientBoostFactor(e);l.addLightingGlobalFactor(e);U.addMainLightIntensity(e);e.main.add(c.glsl`
      discardBySlice(vpos);
      ${c.If(a.terrainDepthTest,"terrainDepthTest(depth);")}
      ${E?c.glsl`
              vec4 texColor = texture(tex, ${oa?"colorUV":"vuv0"});
              ${c.If(ka,"texColor.rgb /\x3d texColor.a;")}
              discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${p===h.NormalType.ScreenDerivative?c.glsl`vec3 normal = screenDerivativeNormal(vPositionLocal);`:c.glsl`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${ja?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":c.If(A,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${c.If(C,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${c.If(C,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${ma?`mat3 tangentSpace = computeTangentSpace(${D?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${na?"normalUV":"vuv0"});`:"vec3 shadingNormal \x3d normal;"}
      vec3 normalGround = ${A?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${c.If(q,c.glsl`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${B===m.PBRMode.Normal||B===m.PBRMode.Schematic?c.glsl`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${c.If(q,c.glsl`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${q?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:c.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `);return b}const pa=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}));t.DefaultMaterial=pa;t.build=x});