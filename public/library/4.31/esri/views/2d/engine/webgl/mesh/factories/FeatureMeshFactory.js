// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./MeshFactory","../../util/createMatcher"],function(h,n,k){class l extends n.AMeshFactory{static async create(a,b){const c=await k.createMatcher(a,b.symbology);a=b.labels?await k.createMatcher(a,b.labels):null;return new l(c,a)}constructor(a,b){super();this._symbology=a;this._labels=b}destroy(){}async enqueueMatcherRequests(a,b){await Promise.all([this._symbology.fetchResources(a,b),this._labels?.fetchResources(a,b)])}enqueueWriterRequests(a,b,c){var d=this._symbology.match(b,c);
if(d){for(const e of d)e.enqueueRequest(a,b,c);if(this._labels&&(d=this._labels.match(b,c)))for(const e of d)e.enqueueRequest(a,b,c)}}write(a,b,c,d,e){const f=this._symbology.match(c,d);if(f){for(var g of f)g.write(a,b,c,d,e);if(1<=a.entityRecordCount()&&this._labels&&(g=this._labels.match(c,d)))for(const m of g)m.setReferences(f),m.write(a,b,c,d,e)}}getSortKey(a,b){return this._symbology.getSortKey(a,b)}}h.FeatureMeshFactory=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});