// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(d,q,r,l,k,t,e,u,
f){function m(c){const h=new u.ShaderBuilder,b=h.fragment;h.include(r.ScreenSpacePass);switch(c.bloomStage){case d.BloomCompositionPass.BlurHorizontal:case d.BloomCompositionPass.BlurVertical:h.include(l.Gamma);b.uniforms.add(new f.Texture2DPassUniform("colorTexture",a=>a.colorTexture),new k.FloatPassUniform("blurRadius",a=>a.blurRadius));let n="";for(var g=0;15>g;g++)n+=`locations1D[${g}] = ${(g/14*2-1).toFixed(3).toString()};`;g="";for(let a=0;15>a;a++){const v=q.gauss(a-7,2);g+=`locations1DWeights[${a}] = ${v.toFixed(7).toString()};`}c=
c.bloomStage===d.BloomCompositionPass.BlurHorizontal;b.code.add(e.glsl`
      float locations1D[${e.glsl.int(15)}];
      float locations1DWeights[${e.glsl.int(15)}];

      vec4 blurUniformSamples(sampler2D toBlur) {
        vec4 res = vec4(0.0);
        vec2 size = vec2(textureSize(toBlur, 0));
        vec2 aspectCorrection = vec2(1.0, size.x / size.y);
        vec2 uvInPixel = uv * size;

        ${n}
        ${g}
        vec2 pixelCenterShift = 0.5 / size;

        for(int i=0;i < ${e.glsl.int(15)}; i++) {
          float uv1D = locations1D[i] + ${c?"pixelCenterShift.x":"pixelCenterShift.y"};
          vec2 uvOffset = ${c?"vec2(uv1D, 0.0)":"vec2(0.0, uv1D)"};

          vec2 uvDistorted = uv + uvOffset * blurRadius * aspectCorrection;
          vec4 sampleColor = texture(toBlur, uvDistorted);
          res += pow(sampleColor, vec4(2.2)) * locations1DWeights[i];
        }
        res = pow(res, vec4(1.0/2.2));
        res.a = 1.0;

        return res;
      }
    `);b.main.add(e.glsl`fragColor = blurUniformSamples(colorTexture);`);break;case d.BloomCompositionPass.Composite:h.include(l.Gamma),b.uniforms.add(new f.Texture2DPassUniform("colorTexture",a=>a.colorTexture)),b.uniforms.add(new f.Texture2DPassUniform("bloomTexture0",a=>a.bloomTexture0)),b.uniforms.add(new f.Texture2DPassUniform("bloomTexture1",a=>a.bloomTexture1)),b.uniforms.add(new f.Texture2DPassUniform("bloomTexture2",a=>a.bloomTexture2)),b.uniforms.add(new f.Texture2DPassUniform("bloomTexture3",
a=>a.bloomTexture3)),b.uniforms.add(new f.Texture2DPassUniform("bloomTexture4",a=>a.bloomTexture4)),b.uniforms.add(new k.FloatPassUniform("exposure",a=>a.exposure)),b.uniforms.add(new t.IntegerPassUniform("bloomLod",a=>a.bloomLod)),b.uniforms.add(new k.FloatPassUniform("blurRadius",a=>a.blurRadius)),b.code.add(e.glsl`float factors[5] = float[5]( 1.0, 0.8, 0.6, 0.4, 0.2 );`),b.code.add(e.glsl`vec3 simpleExposureTonemap(vec3 hdrColor, float exposure) {
vec3 mapped = vec3(1.0) - exp(-hdrColor * exposure);
return mapped;
}`),b.main.add(e.glsl`vec4 color = texture(colorTexture, uv);
color = vec4(linearizeGamma(color.rgb), color.w);
vec4 bloomLod0 = pow(texture(bloomTexture0, uv), vec4(2.2));
vec4 bloomLod1 = pow(texture(bloomTexture1, uv), vec4(2.2));
vec4 bloomLod2 = pow(texture(bloomTexture2, uv), vec4(2.2));
vec4 bloomLod3 = pow(texture(bloomTexture3, uv), vec4(2.2));
vec4 bloomLod4 = pow(texture(bloomTexture4, uv), vec4(2.2));
fragColor = factors[0] * bloomLod0 + factors[1] * bloomLod1 + factors[2] * bloomLod2 + factors[3] * bloomLod3 + factors[4] * bloomLod4;
fragColor = vec4(simpleExposureTonemap(fragColor.rgb, exposure), fragColor.w);
fragColor += color;
fragColor = vec4(pow(fragColor.rgb, vec3(1.0 / 2.2)), fragColor.a);`)}return h}d.BloomCompositionPass=void 0;(function(c){c[c.BlurHorizontal=0]="BlurHorizontal";c[c.BlurVertical=1]="BlurVertical";c[c.Composite=2]="Composite";c[c.COUNT=3]="COUNT"})(d.BloomCompositionPass||(d.BloomCompositionPass={}));class p extends e.NoParameters{constructor(){super(...arguments);this.exposure=25;this.blurRadius=.0033;this.bloomLod=-1}}const w=Object.freeze(Object.defineProperty({__proto__:null,get BloomCompositionPass(){return d.BloomCompositionPass},
BloomCompositionPassParameters:p,build:m},Symbol.toStringTag,{value:"Module"}));d.BloomComposition=w;d.BloomCompositionPassParameters=p;d.build=m});