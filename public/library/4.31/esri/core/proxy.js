// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./MapUtils","./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],function(d,e,f,g){const h=new WeakMap;class k{constructor(){this._observables=new Map}get(a,b,c){c=e.getOrCreateMapValue(this._observables,b,()=>new g.SimpleObservable);f.trackAccess(c);return Reflect.get(a,b)}set(a,b,c,l){Reflect.set(a,b,c);this._observables.get(b)?.notify();return!0}}d.createObservableProxy=function(a){return!a||"object"!==typeof a||"__accessor__"in a?a:e.getOrCreateMapValue(h,
a,()=>new Proxy(a,new k))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});