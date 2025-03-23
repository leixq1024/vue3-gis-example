// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Color ../../intl ../../core/Accessor ../../core/asyncUtils ../../core/colorUtils ../../core/handleUtils ../../core/has ../../core/mathUtils ../../core/quantityFormatUtils ../../core/reactiveUtils ../../core/screenUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../chunks/vec32 ../../geometry/support/coordsUtils ../../geometry/support/vectorStacks ../../intl/messages ../../support/elevationInfoUtils ../../support/getDefaultUnitForView ../overlay/TextOverlayItem ../support/automaticLengthMeasurementUtils ../../intl/locale".split(" "),
function(h,l,L,ea,M,N,B,O,fa,P,Q,C,F,G,n,ha,ia,R,r,H,S,T,I,U,x,V,W,X,Y){function Z(a,b,d,f,g){const c=[];b.data.components[g].iterateVertices(m=>{c.push(f.toXYZ(m.pos,I.sv3d.get()))});0===g&&null!=d&&c.push(f.toXYZ(d,I.sv3d.get()));if(2>c.length)return c;b=c[0];d=c[c.length-1];"polygon"===a.type&&2<c.length&&!S.equals(b,d)&&c.push(b);return c}const aa={default:15,far:25};h.SegmentLabels=class extends M{constructor(a){super(a);this.stagedVertex=this.context=null;this.visible=!0;this.edgeDistance="default";
this._messageUnitsTask=null;this._labelInfos=[];this._nextLabelIndex=0}initialize(){this.addHandles([C.watch(()=>[null!=this.context&&this.getCameraOrExtent(this.context),this.visible,this._edgeDistancePixels,this.stagedVertex,this._messagesUnits],()=>this._update()),...["vertex-add","vertex-update","vertex-remove"].map(a=>C.on(()=>this.context?.editGeometryOperations,a,()=>this._update())),C.watch(()=>this._colors,a=>this._updateStyle(a)),Y.onLocaleChange(()=>this._refreshMessages()),O.makeHandle(()=>
this._messageUnitsTask?.abort())]);this._refreshMessages()}destroy(){for(this._nextLabelIndex=0;this._labelInfos.length;)this._destroyLabel(this._labelInfos.pop())}get updating(){return null==this._messagesUnits}get test(){}get _messagesUnits(){return this._messageUnitsTask?.value}get _edgeDistancePixels(){return aa[this.edgeDistance]}get _colors(){const a=this.context?.view.effectiveTheme.textColor??L.fromArray([255,255,255]),b=B.multiplyOpacity(B.getContrast(a,B.BrightnessThreshold.Low),.6);return{textColor:a,
backgroundColor:b}}_update(){if(!this.destroyed){this._nextLabelIndex=0;var {context:a,stagedVertex:b}=this;if(!a)return this._destroyUnusedLabels();var {editGeometryOperations:d}=a,{components:f,geometry:g,coordinateHelper:c}=d.data;if(!g)return this._destroyUnusedLabels();var m=f.length;for(let D=0;D<m;++D){const t=Z(g,d,b,c,D);var e;if(!(e=2>t.length)){a:{e=t;var q=a.view,u=a.elevationInfo,p=c.spatialReference;if("2d"===q.type)e=!0;else{var y=G.getMetersPerUnit(p)??1,z=G.getMetersPerVerticalUnitForSR(p);
for(let A=1;A<e.length;++A){var v=e[A-1];const E=e[A],J=(E[0]-v[0])*y,K=(E[1]-v[1])*y;v=((x.getConvertedElevationFromVector(q,E,p,u,x.absoluteHeightElevationInfo)??0)-(x.getConvertedElevationFromVector(q,v,p,u,x.absoluteHeightElevationInfo)??0))*z;if(Math.abs(v)/Math.sqrt(J*J+K*K)>ba){e=!1;break a}}e=!0}}e=!e}if(!e)for(e=1===m?!T.isClockwise(t):!1,q=ca,u=da,this.toScreenPointArray(a,t[0],q),p=1;p<t.length;++p)y=t[p-1],z=t[p],this.toScreenPointArray(a,z,u),this._addLabel(a,y,q,z,u,e),[q,u]=[u,q]}this._destroyUnusedLabels()}}_updateStyle({textColor:a,
backgroundColor:b}){const d=this._nextLabelIndex,f=this._labelInfos;for(let g=0;g<d;++g){const {label:c}=f[g];c.textColor=a;c.backgroundColor=b}}_addLabel(a,b,d,f,g,c){const {label:m}=this._getOrCreateLabel(a);if(!this.visible||3025>r.squaredDistance(d,g))m.visible=!1;else{var {spatialReference:e}=a.editGeometryOperations.data;b=X.autoDistance2D(b,f,e);f=this._messagesUnits;a=V.getDefaultUnitForView(a.view);m.text=null!=f&&null!=b?Q.formatLength(f,b,a):"";m.visible=!0;a=g[0]-d[0];b=g[1]-d[1];c?r.set(k,
-b,a):r.set(k,b,-a);r.normalize(k,k);r.scale(k,k,this._edgeDistancePixels);r.lerp(w,d,g,.5);r.add(w,w,k);m.position=[w[0],w[1]];m.anchor=Math.abs(k[0])>Math.abs(k[1])?0<k[0]?"left":"right":0>-k[1]?"top":"bottom"}}_getOrCreateLabel(a){var b=this._labelInfos.length>this._nextLabelIndex;const {textColor:d,backgroundColor:f}=this._colors;if(b)return a=this._labelInfos[this._nextLabelIndex++],{label:b}=a,b.textColor=d,b.backgroundColor=f,a;b=new W({anchor:"center",fontSize:8,textColor:d,backgroundColor:f});
a.view.overlay?.items.add(b);a={label:b};this._labelInfos.push(a);this._nextLabelIndex=this._labelInfos.length;return a}_destroyUnusedLabels(){for(;this._labelInfos.length>this._nextLabelIndex;)this._destroyLabel(this._labelInfos.pop())}_destroyLabel({label:a}){this.context?.view.overlay?.items.remove(a);a.destroy()}_refreshMessages(){this._messageUnitsTask?.abort();this._messageUnitsTask=N.createTask(()=>U.fetchMessageBundle("esri/core/t9n/Units"))}};l.__decorate([n.property()],h.SegmentLabels.prototype,
"context",void 0);l.__decorate([n.property()],h.SegmentLabels.prototype,"stagedVertex",void 0);l.__decorate([n.property()],h.SegmentLabels.prototype,"visible",void 0);l.__decorate([n.property()],h.SegmentLabels.prototype,"edgeDistance",void 0);l.__decorate([n.property()],h.SegmentLabels.prototype,"updating",null);l.__decorate([n.property()],h.SegmentLabels.prototype,"_messageUnitsTask",void 0);l.__decorate([n.property()],h.SegmentLabels.prototype,"_messagesUnits",null);l.__decorate([n.property()],
h.SegmentLabels.prototype,"_edgeDistancePixels",null);l.__decorate([n.property()],h.SegmentLabels.prototype,"_colors",null);h.SegmentLabels=l.__decorate([R.subclass("esri.views.interactive.SegmentLabels")],h.SegmentLabels);const ba=P.deg2rad(5),k=H.create(),w=H.create(),ca=F.createScreenPointArray(),da=F.createScreenPointArray();Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});