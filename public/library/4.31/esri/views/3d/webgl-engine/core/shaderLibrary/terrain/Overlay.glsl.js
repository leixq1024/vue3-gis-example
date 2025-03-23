// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../../../geometry/support/aaBoundingRect ../../../../terrain/interfaces ../../../../terrain/OverlayContent ../../renderPasses/AllRenderPasses ../ShaderOutput ../shading/MainLighting.glsl ../shading/PhysicallyBasedRenderingParameters.glsl ../shading/Water.glsl ../../shaderModules/Float4DrawUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../shaderModules/Uniform".split(" "),
function(h,A,d,n,p,q,t,u,r,B,v,C,k,w,D){function x(a,e){const l=e.pbrMode===r.PBRMode.Water||e.pbrMode===r.PBRMode.WaterOnIntegratedMesh||e.pbrMode===r.PBRMode.TerrainWithWater;l&&a.include(B.Water,e);const {vertex:m,fragment:b}=a;a.varyings.add("vtcOverlay","vec4");m.code.add(k.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`);b.code.add(k.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);b.code.add(k.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`);b.code.add(k.glsl`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);b.code.add(k.glsl`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = vec2(uvInner.x * 0.5,       uvInner.y);
vec2 texelCoordOuter = vec2(uvOuter.x * 0.5 + 0.5, uvOuter.y);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`);l&&(u.addMainLightDirection(b),u.addMainLightIntensity(b),b.code.add(k.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function y(a,e){return a.identifier===q.RenderPassIdentifier.Material&&a.output===t.ShaderOutput.Color?e.overlay?.getTexture(p.OverlayContent.ColorNoRasterImage):a.identifier===q.RenderPassIdentifier.Material&&a.output===t.ShaderOutput.ObjectAndLayerIdColor?e.overlay?.getTexture(p.OverlayContent.ObjectAndLayerIdColor):a.identifier===q.RenderPassIdentifier.Highlight?e.overlay?.getTexture(p.OverlayContent.Highlight):null}h.OverlayMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Enabled=
1]="Enabled";a[a.EnabledWithWater=2]="EnabledWithWater";a[a.COUNT=3]="COUNT"})(h.OverlayMode||(h.OverlayMode={}));const g=A.create();class z extends D.Uniform{constructor(a){super(a,"vec4")}}h.OverlayIM=function(a,e){const {vertex:l,fragment:m}=a;l.uniforms.add(new v.Float4DrawUniform("overlayTexOffset",(b,c)=>{const f=c.overlay?.overlays[n.OverlayIndex.INNER]?.extent;d.hasArea(f)&&(g[0]=b.toMapSpace[0]/d.width(f)-f[0]/d.width(f),g[1]=b.toMapSpace[1]/d.height(f)-f[1]/d.height(f));c=c.overlay?.overlays[n.OverlayIndex.OUTER]?.extent;
d.hasArea(c)&&(g[2]=b.toMapSpace[0]/d.width(c)-c[0]/d.width(c),g[3]=b.toMapSpace[1]/d.height(c)-c[1]/d.height(c));return g}),new v.Float4DrawUniform("overlayTexScale",(b,c)=>{const f=c.overlay?.overlays[n.OverlayIndex.INNER]?.extent;d.hasArea(f)&&(g[0]=b.toMapSpace[2]/d.width(f),g[1]=b.toMapSpace[3]/d.height(f));c=c.overlay?.overlays[n.OverlayIndex.OUTER]?.extent;d.hasArea(c)&&(g[2]=b.toMapSpace[2]/d.width(c),g[3]=b.toMapSpace[3]/d.height(c));return g}));m.constants.add("overlayOpacity","float",1);
m.uniforms.add(new w.Texture2DPassUniform("ovColorTex",(b,c)=>y(b,c)));x(a,e)};h.OverlayTerrain=function(a,e){const {vertex:l,fragment:m}=a;l.uniforms.add(new z("overlayTexOffset"),new z("overlayTexScale"));m.uniforms.add(new C.FloatPassUniform("overlayOpacity",b=>b.overlayOpacity),new w.Texture2DPassUniform("ovColorTex",(b,c)=>c.overlay?.getTexture(b.overlayContent)));x(a,e)};h.getIMColorTexture=y;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});