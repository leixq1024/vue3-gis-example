/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../core/lang.js";import{c as e,m as t,o as i}from"./mat4.js";import{I as r,c as s}from"./mat4f64.js";import{l as a,m as o,o as n,f as l,g as c,e as d,i as p,a as h,d as m,s as f,h as u}from"./vec3.js";import{f as v,c as g}from"./vec3f64.js";import{g as S,b as T}from"./sphere.js";import{e as _}from"./mathUtils2.js";import{O as y}from"./basicInterfaces.js";import{a as b,C as A,M as O,R}from"./Material.js";import{a2 as E,Y as C,I as L,J as D,K as x,a3 as P,B as I,c as w,g as j,h as N,F as z,S as F,X as U,D as W,d as M,b as V,t as B,j as k,o as J,C as H,k as G,l as $,E as Y,m as Z,p as X,q,r as Q,s as K,u as ee,v as te,U as ie,w as re,x as se,y as ae,z as oe,A as ne,i as le,a as ce,V as de}from"./StencilUtils.js";import{a as pe,i as he}from"./Util.js";import{a as me,V as fe}from"./VertexAttribute.js";import{a as ue,b as ve,f as ge}from"./sdfPrimitives.js";import Se from"../core/Evented.js";import Te from"../core/Handles.js";import{d as _e}from"./maybe.js";import{P as ye}from"../core/scheduling.js";import{O as be}from"./Octree.js";import{L as Ae}from"./Logger.js";import{c as Oe}from"./mathUtils.js";import{g as Re}from"./screenUtils.js";import{m as Ee}from"./vec2.js";import{Z as Ce,c as Le,O as De}from"./vec4f64.js";import{e as xe}from"./frustum.js";import{c as Pe,d as Ie,f as we,i as je}from"./lineSegment.js";import{c as Ne,l as ze,z as Fe,g as Ue}from"./plane.js";import{n as We}from"./InterleavedLayout.js";import{c as Me,F as Ve,a as Be,S as ke,h as Je,i as He,d as Ge,k as $e,g as Ye,o as Ze}from"./Matrix4PassUniform.js";import{a as Xe}from"./AlphaCutoff.js";import{_ as qe}from"./tslib.es6.js";import{p as Qe}from"./ShaderTechniqueConfiguration.js";import{g as Ke}from"./interfaces3.js";import{R as et}from"./RgbaFloatEncoding.glsl.js";import{p as tt}from"./floatRGBA.js";import{g as it}from"../core/Accessor.js";import{d as rt,T as st,k as at,l as ot}from"./enums.js";import{a as nt,T as lt}from"./Texture.js";import{s as ct}from"./vec4.js";import{m as dt,d as pt,p as ht}from"./renderState.js";class mt extends b{get geometries(){return this._geometries}get transformation(){return this._transformation??r}set transformation(t){this._transformation=e(this._transformation??s(),t),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?e(this._shaderTransformation??s(),t):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=A.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new ft),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){pe(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),me(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new E;for(const t of this._geometries)t.occludees=ue(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=ve(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new C(e);for(const e of this._geometries)e.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===y.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return t(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=s()){return t(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ut,this._validateBoundingVolume(this._bvWorldSpace,yt.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ut,this._validateBoundingVolume(this._bvObjectSpace,yt.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===yt.ObjectSpace;for(const t of this._geometries){const r=t.boundingInfo;r&&vt(r,e,i?t.transformation:this.getCombinedShaderTransformation(t))}a(S(e.bounds),e.min,e.max,.5);for(const t of this._geometries){const r=t.boundingInfo;if(null==r)continue;const s=i?t.transformation:this.getCombinedShaderTransformation(t),a=_(s);o(_t,r.center,s);const l=n(_t,S(e.bounds)),c=r.radius*a;e.bounds[3]=Math.max(e.bounds[3],l+c)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}}class ft{constructor(){this.min=v(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=v(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ut extends ft{constructor(){super(...arguments),this.bounds=T()}}function vt(e,t,r){const s=e.bbMin,a=e.bbMax;if(i(r)){const e=l(gt,r[12],r[13],r[14]);c(St,s,e),c(Tt,a,e);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],St[e]),t.max[e]=Math.max(t.max[e],Tt[e])}else if(o(St,s,r),d(s,a))for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],St[e]),t.max[e]=Math.max(t.max[e],St[e]);else{o(Tt,a,r);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],St[e],Tt[e]),t.max[e]=Math.max(t.max[e],St[e],Tt[e]);for(let e=0;e<3;++e){p(St,s),p(Tt,a),St[e]=a[e],Tt[e]=s[e],o(St,St,r),o(Tt,Tt,r);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],St[e],Tt[e]),t.max[e]=Math.max(t.max[e],St[e],Tt[e])}}}const gt=g(),St=g(),Tt=g(),_t=g();var yt,bt;!function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"}(yt||(yt={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(bt||(bt={}));const At=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];class Ot extends b{constructor(e,t,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=A.Layer,this.events=new Se,this.visible=!0,this.sliceable=!1,this._objectsAdded=new ye,this._handles=new Te,this._objects=new ye,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??bt.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const t of At)this._handles.add(this.events.on(t,(i=>e.handleEvent(t,i))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==bt.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new be((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=_e(this._octree),this._objectsAdded.clear()}}function Rt(e){return null!=e&&e.type===A.Layer}var Et,Ct;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(Et||(Et={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(Ct||(Ct={}));class Lt extends L{constructor(){super(...arguments),this.space=Et.Screen,this.anchor=Ct.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=D.None,this.emissionSource=x.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===Et.Draped}}function Dt(e,t){const i=e.vertex;i.uniforms.add(new Me("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(fe.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Ve("vvSizeMinSize",(e=>e.vvSize.minSize)),new Ve("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new Ve("vvSizeOffset",(e=>e.vvSize.offset)),new Ve("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(Ke`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(fe.SIZE,"float"),i.code.add(Ke`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(fe.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new P("vvOpacityValues",(e=>e.vvOpacity.values),8),new P("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),8)),i.code.add(Ke`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(Ke`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(I,t),e.attributes.add(fe.COLORFEATUREATTRIBUTE,"float"),i.code.add(Ke`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(fe.COLOR,"vec4"),i.code.add(Ke`vec4 getColor(){
return applyOpacity(color);
}`))}qe([Qe({count:Et.COUNT})],Lt.prototype,"space",void 0),qe([Qe({count:Ct.COUNT})],Lt.prototype,"anchor",void 0),qe([Qe()],Lt.prototype,"occluder",void 0),qe([Qe()],Lt.prototype,"hasSlicePlane",void 0),qe([Qe()],Lt.prototype,"writeDepth",void 0),qe([Qe()],Lt.prototype,"hideOnShortSegments",void 0),qe([Qe()],Lt.prototype,"hasCap",void 0),qe([Qe()],Lt.prototype,"hasTip",void 0),qe([Qe()],Lt.prototype,"vvSize",void 0),qe([Qe()],Lt.prototype,"vvColor",void 0),qe([Qe()],Lt.prototype,"vvOpacity",void 0),qe([Qe()],Lt.prototype,"hasOccludees",void 0),qe([Qe()],Lt.prototype,"terrainDepthTest",void 0),qe([Qe()],Lt.prototype,"cullAboveTerrain",void 0);class xt{constructor(e,t,i){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=i.newCache(`procedural-texture-repository:${it()}`,(e=>e.dispose()))}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const i=this._acquire(e);return this.release(t),i}release(e){if(null==e)return;const t=this._parametersKey(e),i=this._repository.get(t);if(i&&(i.refCount--,0===i.refCount)){this._repository.delete(t);const{texture:e}=i,r=e.usedMemory;this._orphanCache.put(t,e,r)}}_acquire(e){if(null==e)return null;const t=this._parametersKey(e),i=this._repository.get(t);if(i)return i.refCount++,i.texture;const r=this._orphanCache.pop(t)??this._createTexture(e),s=new Pt(r);return this._repository.set(t,s),r}}class Pt{constructor(e){this.texture=e,this.refCount=1}}function It(e,t){return new xt((t=>{const{encodedData:i,textureSize:r}=function(e){const t=wt(e),i=1/e.pixelRatio,r=jt(e),s=Nt(e),a=(Math.floor(.5*(s-1))+.5)*i,o=[];let n=1;for(const e of t){for(let t=0;t<e;t++){const r=n*(Math.min(t,e-1-t)+.5)*i/a*.5+.5;o.push(r)}n=-n}const l=Math.round(t[0]/2),c=[...o.slice(l),...o.slice(0,l)],d=new Uint8Array(4*r);let p=0;for(const e of c)tt(e,d,p),p+=4;return{encodedData:d,textureSize:r}}(t),s=new nt;return s.internalFormat=rt.RGBA,s.width=r,s.height=1,s.wrapMode=st.REPEAT,new lt(e,s,i)}),(e=>`${e.pattern.join(",")}-r${e.pixelRatio}`),t)}function wt(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function jt(e){if(null==e)return 1;const t=wt(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function Nt(e){return wt(e).reduce(((e,t)=>Math.max(e,t)))}const zt=Le();function Ft(e,t){t.stippleEnabled?function(e,t){const i=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:s}=e;s.include(et),t.draped||(w(r,t),r.uniforms.add(new Me("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),r.code.add(Ke`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),r.code.add(Ke`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${Wt};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(Ke`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(Ke`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),j(r),r.code.add(Ke`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),s.uniforms.add(new N("stipplePatternTexture",(e=>e.stippleTexture)),new Me("stipplePatternSDFNormalizer",(e=>{return(t=e.stipplePattern)?(Math.floor(.5*(Nt(t)-1))+.5)/t.pixelRatio:1;var t})),new Me("stipplePatternPixelSizeInv",(e=>1/Ut(e)))),s.code.add(Ke`float getStippleSDF(out bool isClamped) {
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
}`),t.stippleOffColorEnabled?(s.uniforms.add(new z("stippleOffColor",(e=>{return null==(t=e.stippleOffColor)?Ce:4===t.length?t:ct(zt,t[0],t[1],t[2],1);var t}))),s.code.add(Ke`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):s.code.add(Ke`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(Ke`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}function Ut(e){const t=e.stipplePattern;return t?jt(e.stipplePattern)/t.pixelRatio:1}const Wt=Ke.float(.4),Mt=64,Vt=32,Bt=10,kt=.25;function Jt(e,t){const i=ge(e,64,32,6.4),r=new nt;return r.internalFormat=rt.RGBA,r.width=64,r.height=64,r.wrapMode=st.CLAMP_TO_EDGE,new lt(t,r,i)}function Ht(e,t){const i=e.vertex;j(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",10).code.add(Ke`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===Et.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new Me("perRenderPixelRatio",((e,t)=>t.camera.perRenderPixelRatio))),i.code.add(Ke`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var Gt;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(Gt||(Gt={}));class $t extends L{constructor(){super(...arguments),this.capType=Gt.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=D.None,this.emissionSource=x.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}qe([Qe({count:Gt.COUNT})],$t.prototype,"capType",void 0),qe([Qe()],$t.prototype,"hasSlicePlane",void 0),qe([Qe()],$t.prototype,"hasPolygonOffset",void 0),qe([Qe()],$t.prototype,"writeDepth",void 0),qe([Qe()],$t.prototype,"draped",void 0),qe([Qe()],$t.prototype,"stippleEnabled",void 0),qe([Qe()],$t.prototype,"stippleOffColorEnabled",void 0),qe([Qe()],$t.prototype,"stipplePreferContinuous",void 0),qe([Qe()],$t.prototype,"roundJoins",void 0),qe([Qe()],$t.prototype,"applyMarkerOffset",void 0),qe([Qe()],$t.prototype,"vvSize",void 0),qe([Qe()],$t.prototype,"vvColor",void 0),qe([Qe()],$t.prototype,"vvOpacity",void 0),qe([Qe()],$t.prototype,"falloffEnabled",void 0),qe([Qe()],$t.prototype,"innerColorEnabled",void 0),qe([Qe()],$t.prototype,"hasOccludees",void 0),qe([Qe()],$t.prototype,"occluder",void 0),qe([Qe()],$t.prototype,"terrainDepthTest",void 0),qe([Qe()],$t.prototype,"cullAboveTerrain",void 0),qe([Qe()],$t.prototype,"wireframe",void 0),qe([Qe()],$t.prototype,"discardInvisibleFragments",void 0),qe([Qe()],$t.prototype,"objectAndLayerIdColorInstanced",void 0);const Yt=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new F,{attributes:i,varyings:r,vertex:s,fragment:a}=t,{applyMarkerOffset:o,draped:n,output:l,capType:c,stippleEnabled:d,falloffEnabled:p,roundJoins:h,wireframe:m,innerColorEnabled:f}=e;t.include(U),t.include(Dt,e),t.include(Ft,e),t.include(W,e);const u=o&&!n;u&&(s.uniforms.add(new Me("markerScale",(e=>e.markerScale))),t.include(Ht,{space:Et.World})),M(s,e),s.uniforms.add(new Be("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new V("nearFar",((e,t)=>t.camera.nearFar)),new Me("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new z("viewport",((e,t)=>t.camera.fullViewport))),s.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(fe.POSITION,"vec3"),i.add(fe.PREVPOSITION,"vec3"),i.add(fe.NEXTPOSITION,"vec3"),i.add(fe.SUBDIVISIONFACTOR,"float"),i.add(fe.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const v=e.terrainDepthTest&&l===ke.Color;v&&r.add("depth","float");const g=d;g&&r.add("vLineSizeInv","float");const S=c===Gt.ROUND,T=d&&S,_=p||T;_&&r.add("vLineDistanceNorm","float"),S&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),s.code.add(Ke`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(Ke`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(Ke`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${v?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),j(s),s.constants.add("aaWidth","float",d?0:1).main.add(Ke`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${g?Ke`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),u&&s.main.add(Ke`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),s.main.add(Ke`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||S)&&s.main.add(Ke`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${S?Ke`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(Ke`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),h?s.main.add(Ke`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?Ke`min(1.0, subdivisionFactor * ${Ke.float(1.5)})`:Ke`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):s.main.add(Ke`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const y=c!==Gt.BUTT;return s.main.add(Ke`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${y?Ke`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(Ke`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${_?Ke`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),S&&s.main.add(Ke`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(n?s.uniforms.add(new Me("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):s.main.add(Ke`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(Ke`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),n?s.main.add(Ke`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(Ke`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new Me("stipplePatternPixelSize",(e=>Ut(e)))),s.main.add(Ke`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),s.main.add(Ke`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${m&&!n?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),v&&t.include(B,e),t.include(k,e),t.include(J,e),a.include(H),a.main.add(Ke`
    discardBySlice(vpos);
    ${v?"terrainDepthTest(depth);":""}
  `),m?a.main.add(Ke`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(S&&a.main.add(Ke`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${Ke.float(Xe)}) {
          discard;
        }
      `),T?a.main.add(Ke`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${Ke.float(Xe)}, stippleCoverage);
      `):a.main.add(Ke`float stippleAlpha = getStippleAlpha();`),l!==ke.ObjectAndLayerIdColor&&a.main.add(Ke`discardByStippleAlpha(stippleAlpha, ${Ke.float(Xe)});`),a.uniforms.add(new z("intrinsicColor",(e=>e.color))),a.main.add(Ke`vec4 color = intrinsicColor * vColor;`),f&&(a.uniforms.add(new z("innerColor",(e=>e.innerColor??e.color)),new Me("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),a.main.add(Ke`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(Ke`vec4 finalColor = blendStipple(color, stippleAlpha);`),p&&(a.uniforms.add(new Me("falloff",(e=>e.falloff))),a.main.add(Ke`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(Ke`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(Ke`outputColorHighlightOID(finalColor, vpos);`),t},ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"}));class Zt extends G{constructor(e,t,i){super(e,t,new $(Yt,(()=>Promise.resolve().then((()=>Yt)))),i,qt),this.primitiveType=t.wireframe?at.LINES:at.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:s,hasPolygonOffset:a}=e,o=i===Y.NONE,n=i===Y.FrontFace;return dt({blending:e.output===ke.Color?Z(i):null,depthTest:{func:X(i)},depthWrite:q(e),drawBuffers:r===ke.Depth?{buffers:[ot.NONE]}:Q(i,r),colorWrite:pt,stencilWrite:s?K:null,stencilTest:s?t?ee:te:null,polygonOffset:o||n?a?Xt:null:ie})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Xt:null;this._occluderPipelineTransparent=dt({blending:ht,polygonOffset:t,depthTest:re,depthWrite:null,colorWrite:pt,stencilWrite:null,stencilTest:se,drawBuffers:e.output===ke.Depth?{buffers:[ot.NONE]}:null}),this._occluderPipelineOpaque=dt({blending:ht,polygonOffset:t,depthTest:re,depthWrite:null,colorWrite:pt,stencilWrite:ae,stencilTest:oe,drawBuffers:e.output===ke.Depth?{buffers:[ot.NONE]}:null}),this._occluderPipelineMaskWrite=dt({blending:null,polygonOffset:t,depthTest:ne,depthWrite:null,colorWrite:null,stencilWrite:K,stencilTest:ee,drawBuffers:e.output===ke.Depth?{buffers:[ot.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case le.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case le.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const Xt={factor:0,units:-4},qt=new Map([[fe.POSITION,0],[fe.PREVPOSITION,1],[fe.NEXTPOSITION,2],[fe.SUBDIVISIONFACTOR,3],[fe.UV0,4],[fe.COLOR,5],[fe.COLORFEATUREATTRIBUTE,5],[fe.SIZE,6],[fe.SIZEFEATUREATTRIBUTE,6],[fe.OPACITYFEATUREATTRIBUTE,7],[fe.OBJECTANDLAYERIDCOLOR,8]]);var Qt;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(Qt||(Qt={}));class Kt extends O{constructor(e){super(e,ti),this._configuration=new $t,this.vertexAttributeLocations=qt,this.produces=new Map([[le.OPAQUE_MATERIAL,e=>Je(e)||He(e)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[le.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>Ge(e)],[le.OCCLUDER_MATERIAL,e=>$e(e)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[le.TRANSPARENT_OCCLUDER_MATERIAL,e=>$e(e)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[le.TRANSPARENT_MATERIAL,e=>e===ke.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==R.OccludeAndTransparentStencil],[le.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>e===ke.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==R.OccludeAndTransparentStencil],[le.DRAPED_MATERIAL,e=>Ye(e)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===le.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==ke.Highlight;var r;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&(r=this.parameters.markerParameters).anchor===Ct.Tip&&r.hideOnShortSegments&&"begin-end"===r.placement&&r.worldSpace,this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===R.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=Xe||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>Xe}intersectDraped({attributes:e,screenToWorldRatio:t},i,r,s,a,o){if(!r.options.selectionMode)return;const n=e.get(fe.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const t=e.get(fe.SIZEFEATUREATTRIBUTE).data[0];l*=Oe(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else n&&(l*=n.data[0]);const c=s[0],d=s[1],p=(l/2+4)*t;let h=Number.MAX_VALUE,m=0;const f=e.get(fe.POSITION).data,u=si(this.parameters,e)?f.length-2:f.length-5;for(let e=0;e<u;e+=3){const t=f[e],i=f[e+1],r=(e+3)%f.length,s=c-t,a=d-i,o=f[r]-t,n=f[r+1]-i,l=Oe((o*s+n*a)/(o*o+n*n),0,1),p=o*l-s,u=n*l-a,v=p*p+u*u;v<h&&(h=v,m=e/3)}h<p*p&&a(o.dist,o.normal,m,!1)}intersect(e,t,i,r,s,a){if(!i.options.selectionMode||!e.visible)return;if(!he(t))return void Ae.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,d=o.get(fe.POSITION).data;let v=this.parameters.width;if(this.parameters.vvSize){const e=o.get(fe.SIZEFEATUREATTRIBUTE).data[0];v*=Oe(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(fe.SIZE)&&(v*=o.get(fe.SIZE).data[0]);const g=i.camera,S=ci;Ee(S,i.point);const T=v*g.pixelRatio/2+4*g.pixelRatio;l(Ti[0],S[0]-T,S[1]+T,0),l(Ti[1],S[0]+T,S[1]+T,0),l(Ti[2],S[0]+T,S[1]-T,0),l(Ti[3],S[0]-T,S[1]-T,0);for(let e=0;e<4;e++)if(!g.unprojectFromRenderScreen(Ti[e],_i[e]))return;ze(g.eye,_i[0],_i[1],yi),ze(g.eye,_i[1],_i[2],bi),ze(g.eye,_i[2],_i[3],Ai),ze(g.eye,_i[3],_i[0],Oi);let _=Number.MAX_VALUE,y=0;const b=si(this.parameters,o)?d.length-2:d.length-5;for(let e=0;e<b;e+=3){ai[0]=d[e]+t[12],ai[1]=d[e+1]+t[13],ai[2]=d[e+2]+t[14];const i=(e+3)%d.length;if(oi[0]=d[i]+t[12],oi[1]=d[i+1]+t[13],oi[2]=d[i+2]+t[14],Fe(yi,ai)<0&&Fe(yi,oi)<0||Fe(bi,ai)<0&&Fe(bi,oi)<0||Fe(Ai,ai)<0&&Fe(Ai,oi)<0||Fe(Oi,ai)<0&&Fe(Oi,oi)<0)continue;if(g.projectToRenderScreen(ai,di),g.projectToRenderScreen(oi,pi),di[2]<0&&pi[2]>0){h(ni,ai,oi);const e=g.frustum,t=-Fe(e[xe.NEAR],ai)/m(ni,Ue(e[xe.NEAR]));f(ni,ni,t),c(ai,ai,ni),g.projectToRenderScreen(ai,di)}else if(di[2]>0&&pi[2]<0){h(ni,oi,ai);const e=g.frustum,t=-Fe(e[xe.NEAR],oi)/m(ni,Ue(e[xe.NEAR]));f(ni,ni,t),c(oi,oi,ni),g.projectToRenderScreen(oi,pi)}else if(di[2]<0&&pi[2]<0)continue;di[2]=0,pi[2]=0;const r=Ie(we(di,pi,fi),S);r<_&&(_=r,p(hi,ai),p(mi,oi),y=e/3)}const A=i.rayBegin,O=i.rayEnd;if(_<T*T){let e=Number.MAX_VALUE;if(je(we(hi,mi,fi),we(A,O,ui),li)){h(li,li,A);const t=u(li);f(li,li,1/t),e=t/n(A,O)}a(e,li,y,!1)}}get _layout(){const e=We().vec3f(fe.POSITION).vec3f(fe.PREVPOSITION).vec3f(fe.NEXTPOSITION).f32(fe.SUBDIVISIONFACTOR).vec2f(fe.UV0);return this.parameters.vvSize?e.f32(fe.SIZEFEATUREATTRIBUTE):e.f32(fe.SIZE),this.parameters.vvColor?e.f32(fe.COLORFEATUREATTRIBUTE):e.vec4f(fe.COLOR),this.parameters.vvOpacity&&e.f32(fe.OPACITYFEATUREATTRIBUTE),Ze()&&e.vec4u8(fe.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new ii(this._layout,this.parameters)}createGLMaterial(e){return new ei(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class ei extends ce{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.acquireTechnique(Zt,e)}}class ti extends de{constructor(){super(...arguments),this.width=0,this.color=De,this.join="miter",this.cap=Gt.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class ii{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=1+i}}_isClosed(e){return si(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.get(fe.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,s,a){const c=vi,d=gi,h=Si,m=i.get(fe.POSITION),f=m.indices,u=m.data.length/3,v=i.get(fe.DISTANCETOSTART)?.data;f&&f.length!==2*(u-1)&&console.warn("RibbonLineMaterial does not support indices");const g=i.get(fe.SIZEFEATUREATTRIBUTE)?.data[0]??i.get(fe.SIZE)?.data[0]??1;let S=[1,1,1,1],T=0;const _=this.vertexBufferLayout.fields.has(fe.COLORFEATUREATTRIBUTE);_?T=i.get(fe.COLORFEATUREATTRIBUTE).data[0]:i.has(fe.COLOR)&&(S=i.get(fe.COLOR).data);const y=this.vertexBufferLayout.fields.has(fe.OPACITYFEATUREATTRIBUTE),b=y?i.get(fe.OPACITYFEATUREATTRIBUTE).data[0]:0,A=new Float32Array(s.buffer),O=Ze()?new Uint8Array(s.buffer):null,R=this.vertexBufferLayout.stride/4;let E=a*R;const C=E;let L=0;const D=v?(e,t,i)=>L=v[i]:(e,t,i)=>L+=n(e,t),x=(e,t,i,s,a,o,n)=>{if(A[E++]=t[0],A[E++]=t[1],A[E++]=t[2],A[E++]=e[0],A[E++]=e[1],A[E++]=e[2],A[E++]=i[0],A[E++]=i[1],A[E++]=i[2],A[E++]=s,A[E++]=n,A[E++]=a,A[E++]=g,_)A[E++]=T;else{const e=Math.min(4*o,S.length-4);A[E++]=S[e],A[E++]=S[e+1],A[E++]=S[e+2],A[E++]=S[e+3]}y&&(A[E++]=b),Ze()&&(r&&(O[4*E]=r[0],O[4*E+1]=r[1],O[4*E+2]=r[2],O[4*E+3]=r[3]),E++)};E+=R,l(d,m.data[0],m.data[1],m.data[2]),e&&o(d,d,e);const P=this._isClosed(i);if(P){const t=m.data.length-3;l(c,m.data[t],m.data[t+1],m.data[t+2]),e&&o(c,c,e)}else l(h,m.data[3],m.data[4],m.data[5]),e&&o(h,h,e),x(d,d,h,1,Qt.LEFT_CAP_START,0,0),x(d,d,h,1,Qt.RIGHT_CAP_START,0,0),p(c,d),p(d,h);const I=P?0:1,w=P?u:u-1;for(let t=I;t<w;t++){const i=(t+1)%u*3;l(h,m.data[i],m.data[i+1],m.data[i+2]),e&&o(h,h,e),D(c,d,t),x(c,d,h,0,Qt.LEFT_JOIN_END,t,L),x(c,d,h,0,Qt.RIGHT_JOIN_END,t,L);const r=this.numJoinSubdivisions;for(let e=0;e<r;++e){const i=(e+1)/(r+1);x(c,d,h,i,Qt.LEFT_JOIN_END,t,L),x(c,d,h,i,Qt.RIGHT_JOIN_END,t,L)}x(c,d,h,1,Qt.LEFT_JOIN_START,t,L),x(c,d,h,1,Qt.RIGHT_JOIN_START,t,L),p(c,d),p(d,h)}P?(l(h,m.data[3],m.data[4],m.data[5]),e&&o(h,h,e),L=D(c,d,w),x(c,d,h,0,Qt.LEFT_JOIN_END,I,L),x(c,d,h,0,Qt.RIGHT_JOIN_END,I,L)):(L=D(c,d,w),x(c,d,d,0,Qt.LEFT_CAP_END,w,L),x(c,d,d,0,Qt.RIGHT_CAP_END,w,L)),ri(A,C+R,A,C,R),E=ri(A,E-R,A,E,R),this._parameters.wireframe&&this._addWireframeVertices(s,C,E,R)}_addWireframeVertices(e,t,i,r){const s=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let o=0;const n=e=>o=ri(a,e,s,o,r);for(let e=0;e<a.length-1;e+=2*r)n(e),n(e+2*r),n(e+1*r),n(e+2*r),n(e+1*r),n(e+3*r)}}function ri(e,t,i,r,s){for(let a=0;a<s;a++)i[r++]=e[t++];return r}function si(e,t){return!!e.isClosed&&t.get(fe.POSITION).indices.length>2}const ai=g(),oi=g(),ni=g(),li=g(),ci=g(),di=Re(),pi=Re(),hi=g(),mi=g(),fi=Pe(),ui=Pe(),vi=g(),gi=g(),Si=g(),Ti=[Re(),Re(),Re(),Re()],_i=[g(),g(),g(),g()],yi=Ne(),bi=Ne(),Ai=Ne(),Oi=Ne();export{Gt as C,Et as L,Ht as M,mt as O,xt as P,Kt as R,bt as U,Ot as W,Dt as a,Ct as b,Vt as c,kt as d,Lt as e,Bt as f,Jt as g,It as h,Rt as i,Mt as m};
