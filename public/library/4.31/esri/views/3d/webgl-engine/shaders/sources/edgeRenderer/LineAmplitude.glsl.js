// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/compilerUtils ../../../core/shaderModules/FloatDrawUniform ../../../core/shaderModules/interfaces ./EdgeUtil.glsl ./UnpackAttributes.glsl".split(" "),function(f,k,g,c,b,l){f.LineAmplitude=function(h,d){const a=h.vertex;h.include(l.UnpackAttributes,d);switch(d.type){case b.EdgeType.Solid:a.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case b.EdgeType.Sketch:a.uniforms.add(new g.FloatDrawUniform("strokesAmplitude",e=>e.strokesTexture.amplitude));a.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case b.EdgeType.Mixed:a.uniforms.add(new g.FloatDrawUniform("strokesAmplitude",e=>e.strokesTexture.amplitude));a.code.add(c.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
return 0.0;
}`);break;case b.EdgeType.COUNT:break;default:k.neverReached(d.type)}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});