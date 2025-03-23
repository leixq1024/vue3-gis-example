// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/compilerUtils ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/FloatDrawUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Texture2DDrawUniform ./EdgeUtil.glsl ./UnpackAttributes.glsl".split(" "),function(h,m,n,k,a,l,d,p){class q extends a.NoParameters{}h.LineOffset=function(e,g){e.include(p.UnpackAttributes,g);const {vertex:c,fragment:f}=e;d.usesSketchLogic(g.type)&&(c.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",
b=>b.strokesTexture.texture)),c.uniforms.add(new k.FloatDrawUniform("strokesLog2Resolution",b=>Math.log2(b.strokesTexture.resolution)),new k.FloatDrawUniform("strokeVariants",b=>b.strokesTexture.variants)),e.varyings.add("vStrokeUV","vec2"),f.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",b=>b.strokesTexture.texture),new k.FloatDrawUniform("strokesNormalizationScale",b=>b.strokesTexture.normalizationScale)),c.code.add(a.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),e.fragment.include(n.RgbaFloatEncoding),f.code.add(a.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`));switch(g.type){case d.EdgeType.Solid:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`);f.code.add(a.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case d.EdgeType.Sketch:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`);f.code.add(a.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case d.EdgeType.Mixed:e.varyings.add("vType","float");c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`);f.code.add(a.glsl`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`);break;case d.EdgeType.COUNT:break;default:m.neverReached(g.type)}};h.LineOffsetDrawParameters=q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});