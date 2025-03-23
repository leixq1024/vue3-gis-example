// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/NormalFromDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/ShadowMap ../views/3d/webgl-engine/shaders/ReadShadowMapConfiguration".split(" "),
function(g,h,e,k,t,u,v,w,x,y,z,f,l,A,B,d,m,C){function n(){const c=new B.ShaderBuilder;c.include(w.ReadShadowMapPass,D);c.include(v.ScreenSpacePass);c.include(u.NormalFromDepth);const p=c.fragment;p.include(x.RgbaFloatEncoding);p.uniforms.add(new d.Texture2DPassUniform("defaultDepthTex",(a,b)=>b.shadowMap.getSnapshot(m.SnapshotSlot.ExcludeHighlight)),new d.Texture2DPassUniform("highlightDepthTex",(a,b)=>b.shadowMap.getSnapshot(m.SnapshotSlot.Highlight)),new d.Texture2DPassUniform("depthMap",(a,b)=>
b.depth?.attachment),new d.Texture2DPassUniform("highlightTexture",a=>a.highlight),new z.Float4PassUniform("uColor",a=>a.shadowColor),new f.FloatPassUniform("opacity",a=>a.shadowOpacity),new f.FloatPassUniform("occludedOpacity",a=>a.occludedShadowOpacity),new f.FloatPassUniform("terminationFactor",a=>a.opacityElevation*a.dayNightTerminator),new y.Float3PassUniform("lightingMainDirectionView",(a,b)=>k.normalize(q,k.transformMat4(q,b.lighting.mainLight.direction,b.camera.viewInverseTransposeMatrix))),
new A.Matrix4PassUniform("inverseViewMatrix",(a,b)=>h.invert(r,h.translate(r,b.camera.viewMatrix,b.camera.center)))).main.add(l.glsl`
    ivec2 highlightTextureSize = textureSize(highlightTexture, 0);
    ivec2 highlightIUV = ivec2(uv * vec2(highlightTextureSize));
    vec4 highlightInfo = texelFetch(highlightTexture, highlightIUV, 0);

    fragColor = vec4(0.0);

    // Calculate bit mask to check if pixel is highlit unoccluded at any level
    int ored =
         (int(highlightInfo.r*255.0) << 0)
       | (int(highlightInfo.g*255.0) << 8)
       | (int(highlightInfo.b*255.0) << 16)
       | (int(highlightInfo.a*255.0) << 24);
    bool visiblyHighlighted = ((ored & ~(ored >> 1)) & (1+4+16+64)) != 0;
    if (visiblyHighlighted) {
      return;
    }

    // 1.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
    float depth = depthFromTexture(depthMap, uv);
    if (depth >= 1.0 || depth <= 0.0) {
      return;
    }

    float currentPixelDepth = linearizeDepth(depth);
    vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
    vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

    mat4 shadowMatrix;
    float linearDepth = -currentPixelDepth;
    int i = chooseCascade(linearDepth, shadowMatrix);
    if (i >= numCascades) {
      return;
    }

    // vertex completely outside? -> no shadow
    vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
    if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
      return;
    }

    ivec2 texSize = textureSize(highlightDepthTex, 0);
    ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));

    float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
    bool shadowHighlight = depthHighlight < lvpos.z;
    if (!shadowHighlight) {
      return;
    }

    float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
    bool shadowDefault = depthDefault < lvpos.z;

    vec3 normal = normalFromDepth(depthMap, currentPixelPos.xyz, gl_FragCoord.xy, uv);
    bool shaded = dot(normal, lightingMainDirectionView) < ${l.glsl.float(.025)};

    float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
    fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
  `);return c}const r=e.create(),q=t.create(),D=new C.ReadShadowMapConfiguration;e=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));g.ShadowHighlight=e;g.build=n});