/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";import{h as n}from"./elevationInfoUtils.js";function o(e,o){return function(e,o){return!!e&&"on-the-ground"!==o.mode&&!n(o)}(e?.data.coordinateHelper.hasZ(),o)}function t(n,o){let t=null;const r=n.events.on("grab-changed",(e=>{null!=t&&(t.remove(),t=null),"start"===e.action&&(t=n.disableDisplay())}));return e((()=>{t?.remove(),r.remove()}))}export{o as c,t as d};
