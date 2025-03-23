// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../core/arrayUtils ../../core/Logger ../../core/maybe ../../core/maybeUpdating ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/projection ./LayerView".split(" "),function(v,e,w,r,x,t,n,u,f,c,y,p,z){c=class extends z{constructor(){super(...arguments);this._geometryEngine=this.filter=this.layer=null;this._projectionEngineLoaded=!1;this._abortController=
new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(a){throw Error("Not implemented");}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return t.unwrapUpdating(this._layerFilter)}get _layerFilter(){const a=this.layer?.filter;if(null==a||1>a.geometries.length)return null;const d=this._geometryEngine;if(null==d||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return t.updating;const h=a.geometries.at(0).spatialReference,
A=a.geometries.toArray().map(b=>{try{b=d.simplify(b)}catch(l){return r.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==b)return null;if(b.spatialReference.equals(h))return b;try{return p.project(b,h)}catch(l){return r.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(w.isSome).sort((b,l)=>b.extent.xmin-l.extent.xmin),m=new Set,k=[],q=[];for(let b of A){const l=
b.extent.xmin;k.length=0;m.forEach(g=>{l>=g.extent.xmax?(q.push(g),m.delete(g)):b.extent.ymin<=g.extent.ymax&&b.extent.ymax>=g.extent.ymin&&d.intersects(b,g)&&k.push(g)});if(0<k.length){k.push(b);try{b=d.union(k)}catch(g){r.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}k.pop();k.forEach(g=>m.delete(g))}m.add(b)}m.forEach(b=>q.push(b));return 0<q.length?{spatialRelationship:a.spatialRelationship,geometries:q}:null}get _filterNeedsProjectionEngine(){const a=
this.layer.filter;if(null==a||1>=a.geometries.length)return!1;const d=a.geometries.at(0).spatialReference;return a.geometries.some(({spatialReference:h})=>!h.equals(d)&&!p.canProjectWithoutEngine(h,d))}get layerFilterUpdating(){return t.isUpdating(this._layerFilter)}initialize(){const {signal:a}=this._abortController;u.whenOnce(()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length,a).then(async()=>{n.throwIfAbortError(a);this._geometryEngine=await new Promise((d,h)=>v(["../../geometry/geometryEngine"],
d,h))}).catch(n.throwIfNotAbortError);this._projectionEngineLoaded=p.isLoaded();u.whenOnce(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,a).then(async()=>{n.throwIfAbortError(a);await p.load();this._projectionEngineLoaded=!0}).catch(n.throwIfNotAbortError)}destroy(){this._abortController=x.abortMaybe(this._abortController)}highlight(a){throw Error("Not implemented");}queryFeatures(a,d){throw Error("Not implemented");}queryObjectIds(a,d){throw Error("Not implemented");
}queryFeatureCount(a,d){throw Error("Not implemented");}createQuery(){throw Error("Not implemented");}queryExtent(a,d){throw Error("Not implemented");}};e.__decorate([f.property()],c.prototype,"layer",void 0);e.__decorate([f.property()],c.prototype,"availableFields",null);e.__decorate([f.property()],c.prototype,"maximumNumberOfFeatures",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null);e.__decorate([f.property()],c.prototype,"filter",void 0);e.__decorate([f.property({readOnly:!0})],
c.prototype,"layerFilter",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"_layerFilter",null);e.__decorate([f.property()],c.prototype,"_geometryEngine",void 0);e.__decorate([f.property()],c.prototype,"_projectionEngineLoaded",void 0);e.__decorate([f.property()],c.prototype,"_filterNeedsProjectionEngine",null);e.__decorate([f.property()],c.prototype,"layerFilterUpdating",null);return c=e.__decorate([y.subclass("esri.views.layers.SceneLayerView")],c)});