/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as e}from"./vec3f64.js";import{e as s,a as t,b as n}from"./euclideanLengthMeasurementUtils.js";import{g as a,a as r,b as o}from"./geodesicLengthMeasurementUtils.js";function i(e){return r(e)??t(e)}function c(e,t){return a(e,t)??s(e,t)}function u(e,s,t){return m[0]=e[0],m[1]=e[1],m[2]=3===e.length?e[2]:0,f[0]=s[0],f[1]=s[1],f[2]=3===s.length?s[2]:0,o(m,f,t)??n(m,f,t)}const m=e(),f=e();export{c as a,u as b,i as c};
