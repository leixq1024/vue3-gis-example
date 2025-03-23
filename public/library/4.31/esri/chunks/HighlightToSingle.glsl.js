// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/HighlightReadBitmap.glsl ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(c,h,d,e,k,l,m){function f(){const a=new l.ShaderBuilder;a.include(h.HighlightCellGridScreenSpacePass);
a.include(d.HighlightReadBitmap);const {fragment:g}=a;a.outputs.add("fragSingleHighlight","vec2",0);g.uniforms.add(new m.Texture2DPassUniform("highlightTexture",b=>b.highlightTexture),new e.IntegerPassUniform("maxHighlightLevel",b=>b.maxHighlightLevel),new e.IntegerPassUniform("highlightLevel",b=>b.highlightLevel));a.include(d.HighlightReadBitmap);g.main.add(k.glsl`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`);return a}const n=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));c.HighlightToSingle=n;c.build=f});