// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/Accessor ../../core/Error ../../core/has ../../core/Logger ../../core/reactiveUtils ../../core/screenUtils ../../core/Warning ../../core/accessorSupport/decorators/property ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../chunks/pe ../../geometry/Point ../../geometry/projection ../../geometry/support/spatialReferenceUtils ./PaddedViewState ./viewpointUtils ../../geometry/Extent".split(" "),function(f,
g,K,y,B,r,C,t,z,D,A,k,L,E,F,m,G,H,I,p,J){f.ViewStateManager=class extends B{constructor(a){super(a);this.constraints=null;this.ready=!1;this.resizeAlign="center";this.addHandles([z.watch(()=>this.constraints?.version,b=>{this.constraints&&b&&this.ready&&(this.state.viewpoint=this.constraints.fit(this.state.paddedViewState.viewpoint))},z.sync)])}get center(){if(!this.ready)return this._get("center");const {center:a,spatialReference:b}=this.state.paddedViewState;this.state.commitProperty("id");return new m({x:a[0],
y:a[1],spatialReference:b})}set center(a){if(null!=a)if(this.ready){try{var b=this._project(a,this.state.spatialReference)}catch(c){t.getLogger(this).error(new r("mapview:invalid-center","could not project the value in the view's spatial reference",{input:a,error:c}));return}a=this.viewpoint;p.centerAt(a,a,b);this.viewpoint=a}else this._set("center",a)}get extent(){if(!this.ready)return this._get("extent");this.state.commitProperty("id");return this.state.paddedViewState.extent.clone()}set extent(a){if(null!=
a)if(a.width&&a.height)if(this.ready){try{var b=this._project(a,this.state.spatialReference)}catch(c){t.getLogger(this).error(new r("mapview:invalid-extent","could not project the value in the view's spatial reference",{error:c}));return}a=this.viewpoint;p.setExtent(a,a,b,this.state.size,{constraints:this.constraints});this.viewpoint=a}else this._set("extent",a),this._set("center",void 0),this._set("viewpoint",void 0),this._set("scale",void 0),this._set("zoom",void 0);else t.getLogger(this).error(new r("mapview:invalid-extent",
"invalid extent size"))}get padding(){return this.ready?this.state.padding:this._get("padding")}set padding(a){this.ready?(this.state.padding=a,this._set("padding",this.state.padding)):this._set("padding",a)}get resolution(){if(!this.ready)return 0;this.state.commitProperty("id");return this.state.resolution}get rotation(){if(!this.ready)return this._get("rotation");this.state.commitProperty("id");return this.state.rotation}set rotation(a){if(!isNaN(a))if(this.ready){var b=this.viewpoint;p.rotateTo(b,
b,a);this.viewpoint=b}else this._set("rotation",a)}get scale(){if(!this.ready)return this._get("scale");this.state.commitProperty("id");return this.state.scale}set scale(a){if(a&&!isNaN(a))if(this.ready){var b=this.viewpoint;p.scaleTo(b,b,a);this.viewpoint=b}else if(this._set("scale",a),this._set("zoom",void 0),a=this._get("extent"))this._set("extent",void 0),this._set("center",a.center)}get viewpoint(){return this.ready?this.state.paddedViewState.viewpoint.clone():this._get("viewpoint")}set viewpoint(a){if(null!=
a)if(this.ready){var b;try{var c=this._project(a,this.state.spatialReference);!a.scale||isNaN(a.scale)?b=new r("mapview:invalid-viewpoint",`invalid scale value of ${a.scale}`):null==a.targetGeometry&&(b=new r("mapview:invalid-viewpoint","geometry not defined"))}catch(d){b=new r("mapview:invalid-viewpoint","could not project the value in the view's spatial reference",{error:d})}b?t.getLogger(this).error(b):(this._scaleBeforeChangingSpatialReference=null,a=new y({targetGeometry:new m,scale:0,rotation:0}),
p.copy(a,c),this.constraints?.constrain(a,this.state.paddedViewState.viewpoint),this.state.viewpoint=a,this._set("viewpoint",a))}else this._set("viewpoint",a),this._set("extent",void 0),this._set("center",void 0),this._set("zoom",void 0),this._set("scale",void 0)}get visibleArea(){return this.ready?this.state.visibleArea:null}get zoom(){return this.ready?this.constraints?.scaleToZoom(this.scale)??-1:this._get("zoom")}set zoom(a){if(0<=a)if(this.ready)if(a=this.constraints?.zoomToScale(a)??0){var b=
this.viewpoint;p.scaleTo(b,b,a);this.viewpoint=b;this._set("zoom",this.constraints?.scaleToZoom(this.scale)??-1)}else this._set("zoom",-1);else if(this._set("zoom",a),this._set("scale",void 0),a=this._get("extent"))this._set("extent",void 0),this._set("center",a.center)}getUserStartupOptions(a){if(!a[0]&&!a[1])return{center:void 0,rotation:void 0,scale:void 0};const {padding:b,constraints:c}=this;var d=this._get("center"),l=this._get("extent");const e=this._get("scale");var n=this._get("rotation");
const u=this._get("viewpoint");var h=this._get("zoom");h=null!=h&&null!=c?c.zoomToScale(h)||void 0:void 0;let w=void 0,x=void 0,v=void 0;const q=u?.targetGeometry;"extent"===q?.type?w=q:"point"===q?.type&&(x=q,v=u?.scale);l=l??w;d=d??x??l?.center;n=n??u?.rotation;a=(e??h??v??(l&&p.extentToScale(l,[a[0]-b.left-b.right,a[1]-b.top-b.bottom])))||void 0;return{center:d,rotation:n,scale:a}}startup(a,b,c,d){const l=a.targetGeometry;try{this._project(a,c)}catch(e){t.getLogger(this).warn(new A("mapview:startup-projection-error",
"projection of initial viewpoint to the view's spatial reference, defaulting to the initial viewpoint.",{center:l.toJSON(),spatialReference:c,error:e})),a.targetGeometry=d||new m({x:0,y:0,spatialReference:c})}this.constraints?.fit(a);this._set("state",new I({padding:this.padding,size:b,viewpoint:a}));this._set("ready",!0)}teardown(){this._set("ready",!1);const {center:[a,b],spatialReference:c,rotation:d,scale:l}=this.state.paddedViewState,e=new m({x:a,y:b,spatialReference:c});this._set("viewpoint",
null);this._set("extent",null);this._set("center",e);this._set("zoom",-1);this._set("rotation",d);this._set("scale",l);this._set("state",null)}changeSpatialReference(a){const b=this.state.paddedViewState.clone();if(null==this._scaleBeforeChangingSpatialReference)this._scaleBeforeChangingSpatialReference=b.scale;else{var c=b.viewpoint.clone();c.scale=this._scaleBeforeChangingSpatialReference;b.viewpoint=c}c=b.clone();const [d,l]=b.center;var e=null;try{e=this._project(new m({x:d,y:l,spatialReference:b.spatialReference}),
a)}catch(n){F.isLoaded()||t.getLogger(this).warn(new A("mapview:spatial-reference-change","could not project the view's center to the new spatial reference",{center:e?.toJSON(),spatialReference:a,error:n}))}e||=new m({x:0,y:0,spatialReference:a});e=p.centerAt(new y({targetGeometry:new m,scale:0,rotation:0}),b.viewpoint,e);c.viewpoint=e;try{const n=[b.size[0]/2,b.size[1]/2],u=[n[0]+20,n[1]],h=b.toMap([0,0],u),{x:w,y:x}=this._project(new m({x:h[0],y:h[1],spatialReference:b.spatialReference}),a);h[0]=
w;h[1]=x;c.toScreen(h,h);const v=p.angleBetween(n,h,u),q=Math.hypot(h[0]-n[0],h[1]-n[1])/20;!Number.isFinite(q)||4<Math.abs(q)?(e.rotation=0,e.targetGeometry=new m({x:0,y:0,spatialReference:a})):(e.scale*=q,e.scale>C("mapview-srswitch-adjust-rotation-scale-threshold")?e.rotation=0:e.rotation+=Number.isFinite(v)?v:0)}catch{}this._get("constraints")?.constrain(e,void 0);this._get("state").viewpoint=e}resize(a,b){if(this.ready){var c=this.state,d=this.state.paddedViewState.viewpoint,l=this.state.paddedViewState.size.slice();
c.size=[a,b];p.resize(d,d,l,this.state.paddedViewState.size,this.resizeAlign);d=this.constraints?.constrain(d,void 0)??d;this.state.viewpoint=d}}toMap(a){if(!this.ready)return null;const [b,c]=this.state.toMap([0,0],[a.x,a.y]);return new m({x:b,y:c,spatialReference:this.state.spatialReference})}toScreen(a,b){if(!this.ready)return null;a=this._project(a,this.state.spatialReference);a=[a.x,a.y];!1!==b?.pickClosestTarget&&this.state.paddedViewState.wrapMapCoordinate(a,a);this.state.toScreen(a,a);return D.createScreenPoint(a[0],
a[1])}_project(a,b){const c=a?.targetGeometry||a;if(!b)return a;if(!c)return null;if(b.imageCoordinateSystem||c.spatialReference?.imageCoordinateSystem||H.equals(b,c.spatialReference))return a;const d=G.project(c,b);if(!d)throw new r("mapview:projection-not-possible","projecting input geometry to target spatial reference returned a null value",{geometry:c,spatialReference:b});return"esri.Viewpoint"===a?.declaredClass?(a.targetGeometry=d,a):d}};g.__decorate([k.property({type:m})],f.ViewStateManager.prototype,
"center",null);g.__decorate([k.property()],f.ViewStateManager.prototype,"constraints",void 0);g.__decorate([k.property({type:J})],f.ViewStateManager.prototype,"extent",null);g.__decorate([k.property({value:{top:0,right:0,bottom:0,left:0},cast:a=>({top:0,right:0,bottom:0,left:0,...a})})],f.ViewStateManager.prototype,"padding",null);g.__decorate([k.property()],f.ViewStateManager.prototype,"ready",void 0);g.__decorate([k.property()],f.ViewStateManager.prototype,"resizeAlign",void 0);g.__decorate([k.property({readOnly:!0})],
f.ViewStateManager.prototype,"resolution",null);g.__decorate([k.property({type:Number})],f.ViewStateManager.prototype,"rotation",null);g.__decorate([k.property({type:Number})],f.ViewStateManager.prototype,"scale",null);g.__decorate([k.property({readOnly:!0})],f.ViewStateManager.prototype,"state",void 0);g.__decorate([k.property({type:y})],f.ViewStateManager.prototype,"viewpoint",null);g.__decorate([k.property({readOnly:!0})],f.ViewStateManager.prototype,"visibleArea",null);g.__decorate([k.property()],
f.ViewStateManager.prototype,"zoom",null);f.ViewStateManager=g.__decorate([E.subclass("esri.views.2d.ViewStateManager")],f.ViewStateManager);Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});