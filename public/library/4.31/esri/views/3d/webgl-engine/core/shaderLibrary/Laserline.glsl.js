// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./output/ReadDepth.glsl ./util/CameraSpace.glsl ../shaderModules/Float3PassUniform ../shaderModules/FloatPassUniform ../shaderModules/interfaces ../shaderModules/Texture2DPassUniform".split(" "),function(g,l,m,h,e,c,f){g.Laserline=function(k,n){const b=k.fragment;b.include(l.ReadDepth);k.include(m.CameraSpace);b.uniforms.add(new e.FloatPassUniform("globalAlpha",a=>a.globalAlpha),new h.Float3PassUniform("glowColor",a=>a.glowColor),new e.FloatPassUniform("glowWidth",(a,d)=>a.glowWidth*
d.camera.pixelRatio),new e.FloatPassUniform("glowFalloff",a=>a.glowFalloff),new h.Float3PassUniform("innerColor",a=>a.innerColor),new e.FloatPassUniform("innerWidth",(a,d)=>a.innerWidth*d.camera.pixelRatio),new f.Texture2DPassUniform("depthMap",(a,d)=>d.depth?.attachment),new f.Texture2DPassUniform("normalMap",a=>a.normals));b.code.add(c.glsl`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`);b.code.add(c.glsl`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`);b.code.add(c.glsl`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`);b.code.add(c.glsl`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`);n.contrastControlEnabled?(b.uniforms.add(new f.Texture2DPassUniform("frameColor",(a,d)=>a.colors),new e.FloatPassUniform("globalAlphaContrastBoost",a=>null!=a.globalAlphaContrastBoost?a.globalAlphaContrastBoost:1)),b.code.add(c.glsl`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):b.code.add(c.glsl`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});