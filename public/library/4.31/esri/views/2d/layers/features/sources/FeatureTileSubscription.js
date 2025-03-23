// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){class b{constructor(c,d){this.tile=c;this.version=d;this._abortController=new AbortController}get key(){return this.tile.key}get signal(){return this._abortController.signal}abort(){this._abortController.abort()}}a.FeatureTileSubscription=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});