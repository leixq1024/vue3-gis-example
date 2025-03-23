/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(){this._names=new Map}begin(s){this._names.has(s)||(this._names.set(s,!1),(s=>s.includes("Brush"))(s)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${s}.Start`))}end(s){this._names.has(s)&&!this._names.get(s)&&(this._names.set(s,!0),performance.mark(`Esri.${s}.End`))}record(s){this._names.has(s)||(this._names.set(s,!0),performance.mark(`Esri.${s}`))}}export{s as T};
