// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(b,h,e,k,c){function f(){const d=new k.ShaderBuilder;d.include(h.ScreenSpacePass);d.fragment.uniforms.add(new c.Texture2DPassUniform("colorTexture",a=>a.colorTexture),new c.Texture2DPassUniform("alphaTexture",a=>a.alphaTexture),
new c.Texture2DPassUniform("frontFaceTexture",a=>a.frontFaceTexture)).main.add(e.glsl`float srcAlpha = texture(alphaTexture, uv).r;
if(srcAlpha == 0.0){
fragColor = vec4(0.0);
return;
}
vec4 srcColor = texture(colorTexture, uv);
vec4 frontFace = texture(frontFaceTexture, uv);
fragColor = vec4(mix(srcColor.rgb / srcAlpha, frontFace.rgb, frontFace.a), 1.0 - srcColor.a);`);return d}class g extends e.NoParameters{}const l=Object.freeze(Object.defineProperty({__proto__:null,OITBlendPassParameters:g,build:f},Symbol.toStringTag,{value:"Module"}));b.OITBlend=l;b.OITBlendPassParameters=g;b.build=f});