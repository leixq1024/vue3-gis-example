/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../core/lang.js";import{a as e,n as t,h as i,o as n,m as s,i as r,c as a,g as l,f as o}from"./vec3.js";import{c,f as h,a as d}from"./vec3f64.js";import{a as p,c as u,g as f,h as g}from"./lineSegment.js";import{V as m}from"./VisualElement.js";import{_}from"./tslib.es6.js";import{f as P}from"./maybe.js";import{property as v}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as b}from"../core/accessorSupport/decorators/subclass.js";import{c as w,f as D,a as E,g as V,b as x}from"./frustum.js";import{w as S}from"./ray.js";import{V as L}from"./ViewingMode.js";import{InternalRenderCategory as y}from"../views/3d/webgl.js";import C from"../views/3d/webgl/RenderNode.js";import{B as A,a as M}from"./Blit.js";import{h as T}from"./aaBoundingBox.js";import{g as R}from"./glUtil.js";import{n as j}from"./InterleavedLayout.js";import{R as U,h as q,S as I,F as O,b as N,k as z,l as B}from"./StencilUtils.js";import{d as W}from"./mathUtils.js";import{g as H,N as F,I as G}from"./interfaces3.js";import{g as X}from"./vec2.js";import{c as k}from"./vec2f64.js";import{t as $}from"./vec4.js";import{c as Z}from"./vec4f64.js";import{c as J,o as K}from"./plane.js";import{g as Q,b as Y}from"./sphere.js";import{C as ee}from"./CameraSpace.glsl.js";import{c as te,F as ie,a as ne}from"./Matrix4PassUniform.js";import{S as se}from"./ScreenSpacePass.glsl.js";import{V as re}from"./VertexAttribute.js";import{x as ae}from"./mat4.js";import{c as le}from"./mat4f64.js";import{V as oe}from"./VertexArrayObject2.js";import{B as ce}from"./BufferObject.js";import{k as he,U as de,j as pe}from"./enums.js";import{p as ue,S as fe}from"./ShaderTechniqueConfiguration.js";import{R as ge}from"./basicInterfaces.js";import{u as me}from"./Material.js";function _e(e,t){const i=e.fragment;i.include(U),e.include(ee),i.uniforms.add(new te("globalAlpha",(e=>e.globalAlpha)),new ie("glowColor",(e=>e.glowColor)),new te("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new te("glowFalloff",(e=>e.glowFalloff)),new ie("innerColor",(e=>e.innerColor)),new te("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new q("depthMap",((e,t)=>t.depth?.attachment)),new q("normalMap",(e=>e.normals))),i.code.add(H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
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
}`),t.contrastControlEnabled?(i.uniforms.add(new q("frameColor",((e,t)=>e.colors)),new te("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const Pe=W(6);function ve(e){return X(we,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-W(2))))}function be(e,t,i){return s(Se,e,i),r(Ee,t),Ee[3]=0,$(Ee,Ee,i),K(Se,Ee,Le)}const we=k(),De=c(),Ee=Z(),Ve=c(),xe=c(),Se=c(),Le=J(),ye=Y(),Ce=Object.freeze(Object.defineProperty({__proto__:null,build:function(o){const c=new I;c.include(se),c.include(_e,o);const h=c.fragment;if(o.lineVerticalPlaneEnabled||o.heightManifoldEnabled)if(h.uniforms.add(new te("maxPixelDistance",((e,t)=>o.heightManifoldEnabled?2*t.camera.computeScreenPixelSizeAt(e.heightManifoldTarget):2*t.camera.computeScreenPixelSizeAt(e.lineVerticalPlaneSegment.origin)))),h.code.add(H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),o.spherical){const r=(e,t,i)=>s(e,t.heightManifoldTarget,i.camera.viewMatrix),a=(e,t)=>s(e,[0,0,0],t.camera.viewMatrix);h.uniforms.add(new O("heightManifoldOrigin",((n,s)=>(r(De,n,s),a(xe,s),e(xe,xe,De),t(Ee,xe),Ee[3]=i(xe),Ee))),new ie("globalOrigin",((e,t)=>a(De,t))),new te("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,n(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/i(e.heightManifoldTarget)))),h.code.add(H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else h.code.add(H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(o.pointDistanceEnabled&&(h.uniforms.add(new te("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),h.code.add(H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),o.intersectsLineEnabled&&(h.uniforms.add(new te("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),h.code.add(H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(o.lineVerticalPlaneEnabled||o.intersectsLineEnabled)&&h.code.add(H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),h.main.add(H`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),o.heightManifoldEnabled){h.uniforms.add(new N("angleCutoff",(e=>ve(e))),new O("heightPlane",((e,t)=>be(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,De),t.camera.viewMatrix))));const e=o.spherical?H`normalize(globalOrigin - pos)`:H`heightPlane.xyz`;h.main.add(H`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${e})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return o.pointDistanceEnabled&&(h.uniforms.add(new N("angleCutoff",(e=>ve(e))),new O("pointDistanceSphere",((e,t)=>function(e,t){return s(Q(ye),e.pointDistanceOrigin,t.camera.viewMatrix),ye[3]=n(e.pointDistanceOrigin,e.pointDistanceTarget),ye}(e,t)))),h.main.add(H`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),o.lineVerticalPlaneEnabled&&(h.uniforms.add(new N("angleCutoff",(e=>ve(e))),new O("lineVerticalPlane",((e,i)=>function(e,i){const n=p(e.lineVerticalPlaneSegment,.5,De),s=e.renderCoordsHelper.worldUpAtPosition(n,Ve),r=t(xe,e.lineVerticalPlaneSegment.vector),l=a(De,s,r);return t(l,l),be(e.lineVerticalPlaneSegment.origin,l,i.camera.viewMatrix)}(e,i))),new ie("lineVerticalStart",((e,t)=>function(e,t){const i=r(De,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),s(i,i,t.camera.viewMatrix)}(e,t))),new ie("lineVerticalEnd",((e,t)=>function(e,t){const i=l(De,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),s(i,i,t.camera.viewMatrix)}(e,t)))),h.main.add(H`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),o.intersectsLineEnabled&&(h.uniforms.add(new N("angleCutoff",(e=>ve(e))),new ie("intersectsLineStart",((e,t)=>s(De,e.lineStartWorld,t.camera.viewMatrix))),new ie("intersectsLineEnd",((e,t)=>s(De,e.lineEndWorld,t.camera.viewMatrix))),new ie("intersectsLineDirection",((e,i)=>(r(Ee,e.intersectsLineSegment.vector),Ee[3]=0,t(De,$(Ee,Ee,i.camera.viewMatrix))))),new te("intersectsLineRadius",(e=>e.intersectsLineRadius))),h.main.add(H`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),h.main.add(H`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),c},defaultAngleCutoff:Pe},Symbol.toStringTag,{value:"Module"}));class Ae extends F{constructor(){super(...arguments),this.innerColor=h(1,1,1),this.innerWidth=1,this.glowColor=h(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=W(6),this.pointDistanceOrigin=c(),this.pointDistanceTarget=c(),this.lineVerticalPlaneSegment=u(),this.intersectsLineSegment=u(),this.intersectsLineRadius=3,this.heightManifoldTarget=c(),this.lineStartWorld=c(),this.lineEndWorld=c()}}class Me extends z{constructor(e,t,i){super(e,t,new B(Ce,(()=>Promise.resolve().then((()=>Ce)))),i)}}const Te=k(),Re=le(),je=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new I;t.include(_e,e);const{vertex:i,fragment:n}=t;i.uniforms.add(new ne("modelView",((e,{camera:t})=>ae(Re,t.viewMatrix,e.origin))),new ne("proj",((e,{camera:t})=>t.projectionMatrix)),new te("glowWidth",((e,{camera:t})=>e.glowWidth*t.pixelRatio)),new N("pixelToNDC",((e,{camera:t})=>X(Te,2/t.fullViewport[2],2/t.fullViewport[3])))),t.attributes.add(re.START,"vec3"),t.attributes.add(re.END,"vec3"),e.spherical&&(t.attributes.add(re.START_UP,"vec3"),t.attributes.add(re.END_UP,"vec3")),t.attributes.add(re.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewSegmentNormal","vec3"),t.varyings.add("vViewStartNormal","vec3"),t.varyings.add("vViewEndNormal","vec3");const s=!e.spherical;return i.main.add(H`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${G(s,H`vec3 startUp = vec3(0, 0, 1);`)}
    ${G(s,H`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),n.uniforms.add(new te("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),n.code.add(H`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),n.main.add(H`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),t}},Symbol.toStringTag,{value:"Module"}));class Ue extends Ae{constructor(){super(...arguments),this.origin=c()}}class qe extends z{constructor(e,t,i){super(e,t,new B(je,(()=>Promise.resolve().then((()=>je)))),i,Ie)}}const Ie=new Map([[re.START,0],[re.END,1],[re.EXTRUDE,2],[re.START_UP,3],[re.END_UP,4]]);class Oe{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=c(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=T(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);o(this._origin,e[t],e[t+1],e[t+2])}else o(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(he.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===L.Global?We:He}_ensureVAO(e){return null==this._buffers?null:(this._vao??=this._createVAO(e,this._buffers),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new oe(e,Ie,new Map([["data",R(this._layout)]]),new Map([["data",ce.createVertex(e,de.STATIC_DRAW,i)]]))}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.get("data")?.setData(i),this._dirty=!1}_createDataBuffer(t){const i=t.reduce(((e,t)=>e+Ne(t)),0);this._count=i;const n=this._layout.createBuffer(i),s=this._origin;let r=0,a=0;const l="startUp"in n?this._setUpVectors.bind(this,n):void 0;for(const i of t){for(let t=0;t<i.length;t+=3){const c=o(Be,i[t],i[t+1],i[t+2]);0===t?a=this._renderCoordsHelper.getAltitude(c):this._renderCoordsHelper.setAltitude(c,a);const h=r+2*t;l?.(t,h,i,c);const d=e(Be,c,s);if(t<i.length-3){for(let e=0;e<6;e++)n.start.setVec(h+e,d);n.extrude.setValues(h,0,-1),n.extrude.setValues(h+1,1,-1),n.extrude.setValues(h+2,1,1),n.extrude.setValues(h+3,0,-1),n.extrude.setValues(h+4,1,1),n.extrude.setValues(h+5,0,1)}if(t>0)for(let e=-6;e<0;e++)n.end.setVec(h+e,d)}r+=Ne(i)}return n.buffer}_setUpVectors(e,t,i,n,s){const r=this._renderCoordsHelper.worldUpAtPosition(s,ze);if(t<n.length-3)for(let t=0;t<6;t++)e.startUp.setVec(i+t,r);if(t>0)for(let t=-6;t<0;t++)e.endUp.setVec(i+t,r)}}function Ne(e){return 2*(e.length/3-1)*3}const ze=c(),Be=c(),We=j().vec3f(re.START).vec3f(re.END).vec2f(re.EXTRUDE).vec3f(re.START_UP).vec3f(re.END_UP),He=j().vec3f(re.START).vec3f(re.END).vec2f(re.EXTRUDE);class Fe extends fe{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}_([ue()],Fe.prototype,"contrastControlEnabled",void 0),_([ue()],Fe.prototype,"spherical",void 0);class Ge extends Fe{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}_([ue()],Ge.prototype,"heightManifoldEnabled",void 0),_([ue()],Ge.prototype,"pointDistanceEnabled",void 0),_([ue()],Ge.prototype,"lineVerticalPlaneEnabled",void 0),_([ue()],Ge.prototype,"intersectsLineEnabled",void 0);let Xe=class extends C{constructor(e){super(e),this.produces=y.LASERLINES,this.consumes={required:[y.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new Ge,this._pathTechniqueConfiguration=new Fe,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new Ue;const t=e.view._stage.renderView.techniques,i=new Fe;i.contrastControlEnabled=e.contrastControlEnabled,t.precompile(qe,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===L.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(qe,this._pathTechniqueConfiguration),this._blit=new A(this._techniques,M.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=P(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this.requestRender(ge.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){r(this._passParameters.heightManifoldTarget,e),this.requestRender(ge.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this.requestRender(ge.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){r(this._passParameters.pointDistanceTarget,e),this.requestRender(ge.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){r(this._passParameters.pointDistanceOrigin,e),this.requestRender(ge.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this.requestRender(ge.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){f(e,this._passParameters.lineVerticalPlaneSegment),this.requestRender(ge.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this.requestRender(ge.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){f(e,this._passParameters.intersectsLineSegment),this.requestRender(ge.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this.requestRender(ge.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this.requestRender(ge.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this.requestRender(ge.UPDATE))}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new Oe(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this.requestRender(ge.UPDATE)}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new Oe(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this.requestRender(ge.UPDATE)}setParameters(e){me(this._passParameters,e)&&this.requestRender(ge.UPDATE)}precompile(){this._acquireTechnique().release()}render(e){const t=e.find((({name:e})=>e===y.LASERLINES));if(!this.bindParameters.decorations||null==this._blit)return t;const i=this.renderingContext,n=e.find((({name:e})=>"normals"===e));this._passParameters.normals=n?.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(t.fbo),s(),t;this._passParameters.colors=t.getTexture();const r=this.fboCache.acquire(t.fbo.width,t.fbo.height,"laser lines");return i.bindFramebuffer(r.fbo),i.setClearColor(0,0,0,0),i.clear(pe.COLOR|pe.DEPTH),s(),i.unbindTexture(t.getTexture()),this._blit.blend(i,r,t,this.bindParameters)||this.requestRender(ge.UPDATE),r.release(),t}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===L.Global,this._techniques.acquire(Me,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const e=this._acquireTechnique();if(e.compiled){const t=this.renderingContext;t.bindTechnique(e,this.bindParameters,this._passParameters),t.screen.draw()}else this.requestRender(ge.UPDATE);e.release()}_renderPath(){if(null==this._pathVerticalPlaneData)return;const e=this._techniques.acquire(qe,this._pathTechniqueConfiguration);if(e.compiled){const t=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,t.bindTechnique(e,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(t)}else this.requestRender(ge.UPDATE);e.release()}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const e=this.bindParameters.camera,t=this._passParameters;if(this._intersectsLineInfinite){if(D(S(t.intersectsLineSegment.origin,t.intersectsLineSegment.vector),ke),ke.c0=-Number.MAX_VALUE,!E(e.frustum,ke))return!1;V(ke,t.lineStartWorld),x(ke,t.lineEndWorld)}else r(t.lineStartWorld,t.intersectsLineSegment.origin),l(t.lineEndWorld,t.intersectsLineSegment.origin,t.intersectsLineSegment.vector);return!0}get test(){}};_([v({constructOnly:!0})],Xe.prototype,"contrastControlEnabled",void 0),_([v({constructOnly:!0})],Xe.prototype,"isDecoration",void 0),_([v()],Xe.prototype,"produces",void 0),_([v()],Xe.prototype,"consumes",void 0),Xe=_([b("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],Xe);const ke=w();class $e extends m{constructor(e){super(e),this._angleCutoff=Pe,this._style={},this._heightManifoldTarget=c(),this._heightManifoldEnabled=!1,this._intersectsLine=u(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?(r(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,Ze);this.intersectsLine=g(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?(f(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?f(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:d(e.origin),target:e.target?d(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new Xe({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const Ze=c();export{$e as L};
