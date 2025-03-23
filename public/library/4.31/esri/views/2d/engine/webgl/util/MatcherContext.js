// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){class d{constructor(a,b,e,f){this.storage=a;this.proxy=b;this.viewParams=e;this.registry=f}async createMeshWriters(a){a=a.map(b=>this.registry.createMeshWriter(this.storage,this.proxy,this.viewParams,b));return Promise.all(a)}}c.MatcherContext=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});