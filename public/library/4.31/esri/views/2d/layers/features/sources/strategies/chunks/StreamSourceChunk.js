// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./ASourceChunk"],function(b,d){class e extends d.ASourceChunk{constructor(a){super();this._reader=a;this.normalizedChunkId=this.chunkId="stream-chunk"}get reader(){return this._reader}get first(){return!0}get end(){return!0}get queryInfo(){return{type:"stream",chunkId:this.chunkId,size:this.size(),end:this.end}}get isTiled(){return!1}getTileReader(a){const c=this.queryFeaturesInBounds(a.bounds);c.setTransformForDisplay(a.transform);return c}}b.StreamSourceChunk=e;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});