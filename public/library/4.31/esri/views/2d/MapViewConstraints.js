// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Accessor ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/support/LOD ./constraints/GeometryConstraint ./constraints/RotationConstraint ./constraints/ZoomConstraint ../../geometry/Extent ../../geometry/Polygon".split(" "),function(c,g,b,h,d,x,y,z,t,u,k,l,m,v,w){g={base:null,key:"type",typeMap:{extent:v,polygon:w}};
b=class extends b{constructor(a){super(a);this.lods=null;this.maxScale=this.minScale=0;this.maxZoom=this.minZoom=-1;this.snapToZoom=this.rotationEnabled=!0;this.customConstraints=new h}destroy(){this.view=null}get effectiveLODs(){return this._zoom.effectiveLODs}get effectiveMinScale(){return this._zoom.effectiveMinScale}get effectiveMaxScale(){return this._zoom.effectiveMaxScale}get effectiveMinZoom(){return this._zoom.effectiveMinZoom}get effectiveMaxZoom(){return this._zoom.effectiveMaxZoom}set geometry(a){a?
this._set("geometry",a):this._set("geometry",null)}get version(){return`${this._zoom?.uid}/${this._rotation?.uid}/${this._geometry?.uid}`}get _geometry(){const a=this._get("_geometry");return a&&this.geometry===a.geometry&&this.view?.constraintsInfo.spatialReference===a.spatialReference?a:new k.GeometryConstraint({geometry:this.geometry,spatialReference:this.view?.constraintsInfo.spatialReference})}get _rotation(){return new l({rotationEnabled:this.rotationEnabled})}get _zoom(){const a=this._get("_zoom"),
e=this.lods||this.view?.constraintsInfo.lods,f=this.minZoom,n=this.maxZoom,p=this.minScale,q=this.maxScale,r=this.snapToZoom;return a&&a.lods===e&&a.minZoom===f&&a.maxZoom===n&&a.minScale===p&&a.maxScale===q&&a.snapToZoom===r?a:new m({lods:e,minZoom:f,maxZoom:n,minScale:p,maxScale:q,snapToZoom:r})}canZoomInTo(a){const e=this.effectiveMaxScale;return 0===e||a>=e}canZoomOutTo(a){const e=this.effectiveMinScale;return 0===e||a<=e}constrain(a,e){this._zoom.constrain(a,e);this._rotation.constrain(a,e);
this._geometry.constrain(a,e);this.customConstraints.forEach(f=>f.constrain(a,e));return a}constrainByGeometry(a){this._geometry.constrain(a);this.customConstraints.forEach(e=>e.applyPanConstraint?.(a));return a}fit(a){return this._zoom.fit(a)}zoomToScale(a){return this._zoom.zoomToScale(a)}scaleToZoom(a){return this._zoom.scaleToZoom(a)}snapScale(a){return this._zoom.snapToClosestScale(a)}snapToNextScale(a){return this._zoom.snapToNextScale(a)}snapToPreviousScale(a){return this._zoom.snapToPreviousScale(a)}};
c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveLODs",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMinScale",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMaxScale",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMinZoom",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"effectiveMaxZoom",null);c.__decorate([d.property({types:g,value:null})],b.prototype,"geometry",null);c.__decorate([d.property({type:[u]})],
b.prototype,"lods",void 0);c.__decorate([d.property()],b.prototype,"minScale",void 0);c.__decorate([d.property()],b.prototype,"maxScale",void 0);c.__decorate([d.property()],b.prototype,"minZoom",void 0);c.__decorate([d.property()],b.prototype,"maxZoom",void 0);c.__decorate([d.property()],b.prototype,"rotationEnabled",void 0);c.__decorate([d.property()],b.prototype,"snapToZoom",void 0);c.__decorate([d.property({type:h})],b.prototype,"customConstraints",void 0);c.__decorate([d.property()],b.prototype,
"view",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"version",null);c.__decorate([d.property({type:k.GeometryConstraint,readOnly:!0})],b.prototype,"_geometry",null);c.__decorate([d.property({type:l})],b.prototype,"_rotation",null);c.__decorate([d.property({readOnly:!0,type:m})],b.prototype,"_zoom",null);return b=c.__decorate([t.subclass("esri.views.2d.MapViewConstraints")],b)});