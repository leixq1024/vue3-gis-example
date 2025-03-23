/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../intl.js";import{s as i}from"./substitute.js";function t(i){return i.icon?i.icon:"image"in i&&i.image||i.className?void 0:"question"}function n(i){return i?{backgroundImage:`url(${i})`}:{}}function a({action:t,feature:n}){const a=n?.attributes,e="image"in t?t.image:void 0;return e&&a?i(e,a):e??""}export{n as a,t as g,a as s};
