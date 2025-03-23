// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../analysis/DimensionAnalysis ../analysis/DimensionSimpleStyle ../analysis/LengthDimension ../core/Collection ../core/MultiOriginJSONSupport ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Layer ./mixins/OperationalLayer".split(" "),function(c,h,l,m,n,b,k,d,w,x,y,p,q,r,t){b=class extends t.OperationalLayer(b.MultiOriginJSONMixin(r)){constructor(a){super(a);
this.type="dimension";this.operationalLayerType="ArcGISDimensionLayer";this.source=new h;this.opacity=1;if(a){const {source:e,style:f}=a;e&&f&&(e.style=f)}}initialize(){this.addHandles([k.watch(()=>this.source,(a,e)=>{null!=e&&e.parent===this&&(e.parent=null);null!=a&&(a.parent=this)},k.syncAndInitial)])}async load(){this.addResolvingPromise(this.source.waitComputeExtent());return this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(a){this.source.style=
a}get fullExtent(){return this.source.extent}releaseAnalysis(a){this.source===a&&(this.source=new h)}get analysis(){return this.source}set analysis(a){this.source=a}get dimensions(){return this.source.dimensions}set dimensions(a){this.source.dimensions=a}writeDimensions(a,e,f,u){e.dimensions=a.filter(({startPoint:g,endPoint:v})=>null!=g&&null!=v).map(g=>g.toJSON(u)).toJSON()}};c.__decorate([d.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:["ArcGISDimensionLayer"]})],
b.prototype,"operationalLayerType",void 0);c.__decorate([d.property({nonNullable:!0})],b.prototype,"source",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"spatialReference",null);c.__decorate([d.property({types:{key:"type",base:null,typeMap:{simple:l}},json:{write:{ignoreOrigin:!0}}})],b.prototype,"style",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"fullExtent",null);c.__decorate([d.property({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,
write:!1},"web-document":{read:!1,write:!1}}}})],b.prototype,"opacity",void 0);c.__decorate([d.property({type:["show","hide"]})],b.prototype,"listMode",void 0);c.__decorate([d.property({type:n.ofType(m),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],b.prototype,"dimensions",null);c.__decorate([q.writer("web-scene","dimensions")],b.prototype,"writeDimensions",null);return b=c.__decorate([p.subclass("esri.layers.DimensionLayer")],b)});