// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/HighlightReadBitmap.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./HighlightDownsample.glsl".split(" "),
function(f,h,k,l,m,n,p,q,c,d){function g(){const b=new q.ShaderBuilder;b.include(h.HighlightCellGridScreenSpacePass);const {fragment:e}=b;e.uniforms.add(new c.Texture2DPassUniform("blurInput",a=>a.singleHighlightBlurTexture),new l.Float2DrawUniform("blurSize",a=>a.blurSize),new c.Texture2DPassUniform("highlightTexture",a=>a.highlightTexture),new c.Texture2DPassUniform("highlightOptionsTexture",a=>a.highlightOptionsTexture),new n.IntegerPassUniform("highlightLevel",a=>a.highlightLevel),new m.FloatPassUniform("occludedIntensityFactor",
a=>a.occludedFactor));e.constants.add("inner","float",1-(d.outlineSize-d.blurSize)/d.outlineSize);b.include(k.HighlightReadBitmap);e.main.add(p.glsl`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`);return b}const r=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));f.SingleHighlightApply=r;f.build=g});