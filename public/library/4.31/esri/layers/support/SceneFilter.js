// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../request ../../core/JSONSupport ../../core/lang ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/persistable ./PolygonCollection ../../chunks/persistableUrlUtils".split(" "),function(d,l,b,m,h,k,w,x,n,p,q,e,r){var g;b=g=class extends b.JSONSupport{constructor(a){super(a);this.spatialRelationship=
"disjoint";this.geometries=new e;this._geometriesSource=null}initialize(){this.addHandles(h.on(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,h.sync))}readGeometries(a,f,c){Array.isArray(a)?this.geometries=e.fromJSON(a,c):this._geometriesSource={url:r.fromJSON(a,c),context:c}}async loadGeometries(a,f){if(null!=this._geometriesSource){var {url:c,context:t}=this._geometriesSource;f=await l(c,{responseType:"json",signal:f?.signal});var u=a.toJSON();a=f.data.map(v=>({...v,spatialReference:u}));
this.geometries=e.fromJSON(a,t);this._geometriesSource=null}}clone(){const a=new g({geometries:m.clone(this.geometries),spatialRelationship:this.spatialRelationship});a._geometriesSource=this._geometriesSource;return a}};d.__decorate([k.property({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],b.prototype,"spatialRelationship",void 0);d.__decorate([k.property({type:e,nonNullable:!0,json:{write:!0}}),q.persistable({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",
contentAddressed:!0})],b.prototype,"geometries",void 0);d.__decorate([n.reader(["web-scene","portal-item"],"geometries")],b.prototype,"readGeometries",null);return b=g=d.__decorate([p.subclass("esri.layers.support.SceneFilter")],b)});