// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/has","../../../core/PooledArray"],function(e,g,f){class c{constructor(b,a){this._factoryCallback=b;this._lengthCallback=a;this._pool=new Map}acquire(b){if(!c.test.disabled){const a=this._pool.get(b);if(a&&0!==a.length)return a.pop()}try{return this._factoryCallback(b)}catch(a){throw a;}}release(b){if(!c.test.disabled){var a=this._lengthCallback(b),d=this._pool.get(a);d||(d=new f({shrink:!0}),this._pool.set(a,d));d.push(b)}}clear(){this._pool.clear()}get test(){}}c.test=
{disabled:!1};e.BufferPool=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});