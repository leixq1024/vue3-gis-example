// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../util/RgbaFloatEncoding.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../../materials/stippleTextureRepository ../../../shaders/ensureColor4".split(" "),function(g,n,k,p,h,c,q,l,r){function t(d,a){const u=!(a.draped&&a.stipplePreferContinuous),{vertex:e,fragment:f}=d;f.include(n.RgbaFloatEncoding);a.draped||(k.addCameraPosition(e,a),e.uniforms.add(new h.FloatPassUniform("worldToScreenPerDistanceRatio",
(b,v)=>1/v.camera.perScreenPixelRatio)),e.code.add(c.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));d.varyings.add("vStippleDistance","float");d.varyings.add("vStippleDistanceLimits","vec2");d.varyings.add("vStipplePatternStretch","float");e.code.add(c.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${w};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);e.code.add(c.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);e.code.add(c.glsl`
    if (segmentLengthPseudoScreen >= ${u?"patternLength":"1e4"}) {
  `);k.addPixelRatio(e);e.code.add(c.glsl`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`);f.uniforms.add(new q.Texture2DPassUniform("stipplePatternTexture",b=>b.stippleTexture),new h.FloatPassUniform("stipplePatternSDFNormalizer",b=>(b=b.stipplePattern)?(Math.floor(.5*(l.computeLongestPattern(b)-1))+.5)/b.pixelRatio:1),new h.FloatPassUniform("stipplePatternPixelSizeInv",b=>1/m(b)));f.code.add(c.glsl`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`);a.stippleOffColorEnabled?(f.uniforms.add(new p.Float4PassUniform("stippleOffColor",b=>r.ensureColor4(b.stippleOffColor))),f.code.add(c.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):f.code.add(c.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function m(d){const a=d.stipplePattern;return a?l.computeTextureSize(d.stipplePattern)/a.pixelRatio:1}const w=c.glsl.float(.4);g.LineStipple=function(d,a){a.stippleEnabled?t(d,a):d.fragment.code.add(c.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};g.computePixelSize=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});