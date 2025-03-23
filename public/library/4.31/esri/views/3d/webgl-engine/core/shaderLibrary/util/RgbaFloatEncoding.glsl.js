// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces"],function(c,a){c.RgbaFloatEncoding=function(b){b.code.add(a.glsl`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`);b.code.add(a.glsl`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);b.code.add(a.glsl`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});