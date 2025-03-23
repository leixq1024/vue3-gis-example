/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{isSupported as o}from"../geometry/support/geodesicUtils.js";import{b as t}from"./unitUtils.js";function s(s){return o(s)||t(s)}function r(s,r,i,...n){return o(s)?r.apply(void 0,n):t(s)?i.apply(void 0,n):null}const i=1e5;export{i as a,r as g,s};
