/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{r}from"../core/lang.js";import{m as t}from"./lengthUtils.js";function n(r){return!!r&&null!=t[r]}function s(r){return 1/(t[r]||1)}const e=function(){const n=Object.keys(t);return r(n,"decimal-degrees"),n.sort(),n}();export{n as a,s as g,e as s};
