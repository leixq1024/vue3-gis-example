// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../arcade"],function(b,c){const f=c.createArcadeProfile("form-calculation");class g{constructor(){this._executors=new Map;this._executorPromises=new Map}async getArcadeExecutor(a){return this._executors.has(a)?this._executors.get(a):this._executorPromises.has(a)?this._executorPromises.get(a):this._createExecutor(a)}async _createExecutor(a){try{const d=c.createArcadeExecutor(a,f);this._executorPromises.set(a,d);const e=await d;this._executors.set(a,e);return e}finally{this._executorPromises.delete(a)}}}
b.ArcadeExecutorProvider=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});