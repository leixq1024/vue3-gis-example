// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutput ../../shaderModules/Integer2PassUniform ../../shaderModules/IntegerPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(e,k,l,m,c,f){e.OutputHighlight=function(g,h){const {fragment:b}=g;h.output!==k.ShaderOutput.Highlight?b.code.add(c.glsl`void calculateOcclusionAndOutputHighlight() {}`):(b.uniforms.add(new f.Texture2DPassUniform("depthTexture",(d,a)=>a.mainDepth),new f.Texture2DPassUniform("highlightTexture",(d,a)=>
a.highlightMixTexture),new m.IntegerPassUniform("highlightLevel",(d,a)=>a.highlightLevel),new l.Integer2PassUniform("highlightMixOrigin",(d,a)=>a.highlightMixOrigin)),g.outputs.add("fragHighlight","vec2",0),b.code.add(c.glsl`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),h.canHaveOverlay&&(b.constants.add("occlusionAndMask","int",85),b.code.add(c.glsl`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`)))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});