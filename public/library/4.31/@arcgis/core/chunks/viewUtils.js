/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{b as r}from"./screenUtils.js";import{s as o,i as e}from"./vec2.js";import{i as s}from"./vec3.js";import{c as t}from"./vec3f64.js";import{b as n}from"./elevationInfoUtils.js";function c(r,s,t,n){t.projectToRenderScreen(r,a),t.projectToRenderScreen(s,f),o(n,f,a),e(n,n)}function i(r,o,e,c,i=t()){const a=s(m,r);return a[2]=n(c,a,o,e)||0,c.renderCoordsHelper.toRenderCoords(a,o,i),i}const m=t(),a=r(),f=r();export{c as r,i as v};
