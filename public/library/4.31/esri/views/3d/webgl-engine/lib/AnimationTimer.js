// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/time"],function(d,a){class f{constructor(b,c){this._camera=b;this._dt=a.Milliseconds(0);this._time=a.Milliseconds(0);this._lastUpdate=a.Milliseconds(0);this._time=this._lastUpdate=c}advance(b,c,g){const e=a.Milliseconds(c-this._lastUpdate);this._dt=a.Milliseconds(e/g);this._time=a.Milliseconds(this._time+e);this._lastUpdate=c;this._camera=b}forceTime(b){this._lastUpdate=this._time=b;this._dt=a.Milliseconds(0)}get camera(){return this._camera}get dt(){return this._dt}get time(){return this._time}}
d.AnimationTimer=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});