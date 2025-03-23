// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/HighlightReadBitmap.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(d,k,l,e,m,f,
n,g){function h(){const b=new n.ShaderBuilder;b.include(k.HighlightCellGridScreenSpacePass);const {fragment:c}=b;c.uniforms.add(new g.Texture2DPassUniform("highlightTexture",a=>a.highlightTexture),new g.Texture2DPassUniform("highlightOptionsTexture",a=>a.highlightOptionsTexture),new e.FloatPassUniform("pixelRatio",a=>a.pixelRatio),new e.FloatPassUniform("occludedIntensityFactor",a=>a.occludedFactor),new m.IntegerPassUniform("maxHighlightLevel",a=>a.maxHighlightLevel));c.constants.add("pixelSampleScale",
"float",1);b.include(l.HighlightReadBitmap);c.code.add(f.glsl`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`);c.main.add(f.glsl`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`);return b}const p=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));d.HighlightApply=p;d.build=h});