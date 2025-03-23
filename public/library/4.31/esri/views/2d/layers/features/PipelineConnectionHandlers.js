// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/workers/utils"],function(b,c){class d{constructor(a){this._client=a;this.layerView=this._client.createInvokeProxy("");this.container=this._client.createInvokeProxy("container");this._eventLog=this._client.createInvokeProxy("eventLog")}onEvent(a){c.ignoreConnectionErrors(this._eventLog.onEvent(a))}}b.PipelineConnectionHandlers=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});