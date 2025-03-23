// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutput","../util/RgbaFloat16Encoding.glsl","../../shaderModules/interfaces"],function(b,a,d,e){b.OutputDepth=function(c,f){switch(f.output){case a.ShaderOutput.Shadow:case a.ShaderOutput.ShadowHighlight:case a.ShaderOutput.ShadowExcludeHighlight:case a.ShaderOutput.ViewshedShadow:c.fragment.include(d.Rgba4FloatEncoding),c.fragment.code.add(e.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});