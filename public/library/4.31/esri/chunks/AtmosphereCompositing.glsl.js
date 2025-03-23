// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(b,h,c,k,d){function e(){const a=new k.ShaderBuilder;a.include(h.ScreenSpacePass);a.fragment.uniforms.add(new d.Texture2DPassUniform("colorTexture",f=>f.color),new d.Texture2DPassUniform("depthTexture",(f,l)=>l.mainDepth));
a.fragment.main.add(c.glsl`float depthSample = texture(depthTexture, uv).r;
if (depthSample != 1.0 ) {
fragColor = vec4(0);
return;
}
fragColor = texture(colorTexture, uv);`);return a}class g extends c.NoParameters{}const m=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:g,build:e},Symbol.toStringTag,{value:"Module"}));b.AtmosphereCompositing=m;b.AtmosphereCompositingPassParameters=g;b.build=e});