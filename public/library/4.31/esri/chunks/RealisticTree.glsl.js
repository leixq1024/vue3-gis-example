// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(p,D,E,q,F,G,H,I,J,K,L,M,N,O,P,k,r,Q,l,t,R,S,T,U,V,m,u,W,v,c,X,Y,Z,aa){function w(a){const b=new X.ShaderBuilder,{vertex:f,fragment:e,varyings:g}=b,{output:x,offsetBackfaces:y,instancedColor:z,pbrMode:A,snowCover:n,spherical:B}=a,C=A===l.PBRMode.Normal||A===l.PBRMode.Schematic;m.addProjViewLocalOrigin(f,a);b.include(J.PositionAttribute);g.add("vpos","vec3");b.include(S.VisualVariables,a);b.include(H.InstancedDoublePrecision,a);b.include(N.VerticalOffset,a);x===q.ShaderOutput.Color&&(m.addCameraPosition(b.vertex,
a),b.include(I.NormalAttribute,a),b.include(G.Transform,a),y&&b.include(E.Offset),z&&b.attributes.add(Z.VertexAttribute.INSTANCECOLOR,"vec4"),g.add("vNormalWorld","vec3"),g.add("localvpos","vec3"),a.terrainDepthTest&&g.add("depth","float"),b.include(L.TextureCoordinateAttribute,a),b.include(D.ForwardLinearDepth,a),b.include(K.SymbolColor,a),b.include(M.VertexColor,a),f.uniforms.add(new W.Float4PassUniform("externalColor",h=>h.externalColor)),g.add("vcolorExt","vec4"),f.main.add(c.glsl`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${c.If(z,"vcolorExt *\x3d instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${c.glsl.float(T.alphaCutoff)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${c.If(y,"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${c.If(a.terrainDepthTest,"depth \x3d (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`));if(x===q.ShaderOutput.Color){const {hasColorTexture:h,hasColorTextureTransform:ba,receiveShadows:ca}=a;b.include(k.EvaluateSceneLighting,a);b.include(P.EvaluateAmbientOcclusion,a);b.include(U.DiscardOrAdjustAlphaPass,a);b.include(a.instancedDoublePrecision?t.ReadShadowMapPass:t.ReadShadowMapDraw,a);b.include(R.terrainDepthTest,a);b.include(F.SliceDraw,a);b.include(aa.outputColorHighlightOID,a);m.addCameraPosition(b.fragment,a);r.addMainLightDirection(e);k.addAmbientBoostFactor(e);
k.addLightingGlobalFactor(e);e.uniforms.add(f.uniforms.get("localOrigin"),f.uniforms.get("view"),new u.Float3PassUniform("ambient",d=>d.ambient),new u.Float3PassUniform("diffuse",d=>d.diffuse),new v.FloatPassUniform("opacity",d=>d.opacity),new v.FloatPassUniform("layerOpacity",d=>d.layerOpacity));h&&e.uniforms.add(new Y.Texture2DPassUniform("tex",d=>d.texture));b.include(l.PhysicallyBasedRenderingParameters,a);b.include(Q.PhysicallyBasedRendering,a);e.include(V.MixExternalColor);r.addMainLightIntensity(e);
e.main.add(c.glsl`
      discardBySlice(vpos);
      ${c.If(a.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${h?`texture(tex, ${ba?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${c.If(h,`${c.If(a.textureAlphaPremultiplied,"texColor.rgb /\x3d texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${ca?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":B?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${a.hasVertexColors?c.glsl`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${c.If(n,"albedo \x3d mix(albedo, vec3(1), 0.9);")}
      ${c.glsl`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${c.If(C,`vec3 normalGround = ${B?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${C?c.glsl`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${c.If(n,c.glsl`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${n?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:c.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}b.include(O.DefaultMaterialAuxiliaryPasses,a);return b}const da=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));p.RealisticTree=da;p.build=w});