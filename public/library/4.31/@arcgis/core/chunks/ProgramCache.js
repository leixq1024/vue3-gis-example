/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../core/lang.js";import{N as s}from"./NestedMap.js";import{P as t}from"./Program.js";class r{constructor(t){this._rctx=t,this._store=new s}dispose(){this._store.forAll((s=>s.dispose())),this._store.clear()}acquire(s,r,e,o){const i=this._store.get(s,r);if(null!=i)return i.ref(),i;const c=new t(this._rctx,s,r,e,o);return c.ref(),this._store.set(s,r,c),c}get test(){}}export{r as P};
