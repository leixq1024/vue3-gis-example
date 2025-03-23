/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{S as n,O as r}from"./converterAPI.js";import"./Transformation2D.js";const e=new r;function t(n,r,t,o){return e.execute(n,r,t,o,null)}function o(r,t,o,s){const u=e.executeMany(new n(r),t,o,s,null);return Array.from(u)}function s(){return e.supportsCurves()}export{o as a,t as e,s};
