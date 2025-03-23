/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{f as t}from"./mathUtils.js";import{g as n,a3 as e}from"./unitUtils.js";function i(t,i){const r=i||t.extent,a=t.width,s=n(r?.spatialReference);return r&&a?r.width/a*s*e*96:0}function r(t,i){return t/(n(i)*e*96)}function a(t){return t/(96*e)}function s(t,i){return t*(n(i)*e*96)}function u(t,n){const e=t.extent,i=t.width-(t.padding?t.padding.left+t.padding.right:0),a=r(n,e.spatialReference);return e.clone().expand(a*i/e.width)}function o(n,e,i){return function(n,e){return 0===e||t(n,e)||n<e}(n,e)&&function(n,e){return 0===e||t(n,e)||n>e}(n,i)}export{s as a,a as b,u as c,r as d,i as g,o as i};
