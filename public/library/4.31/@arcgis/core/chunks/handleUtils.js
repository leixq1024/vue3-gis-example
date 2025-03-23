/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n={remove:()=>{}};function r(r){return r?{remove(){r&&(r(),r=void 0)}}:n}function o(n){n.forEach((n=>n?.remove()))}function t(n){o(n),n.length=0}function e(n){return r((()=>o(n)))}function u(n){return r((()=>n()?.remove()))}function a(n){return r((()=>n?.abort()))}function c(n){return r(null!=n?()=>n.destroy():void 0)}export{a,t as b,u as c,c as d,e as h,r as m,o as r};
