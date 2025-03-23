/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{s as e,e as n}from"./screenUtils.js";import{m as r}from"./vec2.js";import{n as o,a as t,i,f as s}from"./vec3.js";import{c}from"./ray.js";import{b as u}from"./plane.js";function a(n,r,t=c()){return m(n,e(r),t),o(t.direction,t.direction),t}function m(e,r,o){return f(e,e.screenToRender(r,n(u.get())),o)}function f(e,o,i){const s=n(r(u.get(),o));if(s[2]=0,!e.unprojectFromRenderScreen(s,i.origin))return null;const c=n(r(u.get(),o));c[2]=1;const a=e.unprojectFromRenderScreen(c,u.get());return null==a?null:(t(i.direction,a,i.origin),i)}function l(e,r,o){return g(e,e.screenToRender(r,n(u.get())),o)}function g(e,n,r){i(r.origin,e.eye);const o=s(u.get(),n[0],n[1],1),c=e.unprojectFromRenderScreen(o,u.get());return null==c?null:(t(r.direction,c,r.origin),r)}export{a,f as b,l as c,g as d,m as f};
