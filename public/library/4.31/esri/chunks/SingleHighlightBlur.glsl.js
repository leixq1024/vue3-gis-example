// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform".split(" "),function(b,g,h,k,d,l,m){function e(){const a=new l.ShaderBuilder;a.include(h.HighlightCellGridScreenSpacePass);
a.fragment.uniforms.add(new k.Float2DrawUniform("blurSize",c=>c.blurSize),new m.Texture2DDrawUniform("blurInput",c=>c.blurInput));a.outputs.add("fragSingleHighlight","vec2",0);a.fragment.main.add(d.glsl`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`);return a}class f extends d.NoParameters{constructor(){super(...arguments);this.blurSize=g.create()}}const n=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:f,build:e},Symbol.toStringTag,{value:"Module"}));b.SingleHighlightBlur=n;b.SingleHighlightBlurDrawParameters=f;b.build=e});