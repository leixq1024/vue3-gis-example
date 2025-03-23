// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,h,k,d,l,e){function f(){const b=new l.ShaderBuilder;b.include(h.ScreenSpacePass);b.outputs.add("fragColor","vec4",0);b.fragment.uniforms.add(new e.Texture2DPassUniform("colorTexture",
a=>a.color),new e.Texture2DPassUniform("focusArea",a=>a.focusArea),new k.IntegerPassUniform("focusAreaEffectMode",a=>a.effect??1)).main.add(d.glsl`float mask = texture( focusArea, uv, 0.0 ).r;
vec4 color = texture( colorTexture, uv, 0.0 );
vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
if (focusAreaEffectMode == 1) {
fragColor = mask > 0.0 ? color : 0.55 * colorDeSaturate + 0.45;
} else {
fragColor = mask > 0.0 ? color : 0.33 * mix(color, colorDeSaturate, 0.);
}`);return b}class g extends d.NoParameters{}const m=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:g,build:f},Symbol.toStringTag,{value:"Module"}));c.FocusAreaColor=m;c.FocusAreaColorPassParameters=g;c.build=f});