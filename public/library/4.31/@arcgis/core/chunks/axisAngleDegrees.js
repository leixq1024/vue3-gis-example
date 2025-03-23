/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{r as t,d as n}from"./mathUtils.js";import{g as r}from"./mat4.js";import{g as s,s as a,m as o}from"./quat.js";import{c as u}from"./quatf64.js";import{i as f,c,n as i,u as m}from"./vec3.js";import{U as e,b as p,d as j}from"./vec3f64.js";function d(t=w){return[t[0],t[1],t[2],t[3]]}function g(t,n,r=d()){return f(r,t),r[3]=n,r}function b(t,n,r){return c(r,t,n),i(r,r),r[3]=-m(t,n),r}function h(n,a=d()){const o=r(y,n);return k(a,t(s(a,o))),a}function q(n,r,u=d()){return a(y,n,x(n)),a(z,r,x(r)),o(y,z,y),k(u,t(s(u,y)))}function v(t,n,r,s=d()){return g(e,t,A),g(p,n,B),g(j,r,C),q(A,B,A),q(A,C,s),s}function U(t){return t}function l(t){return t[3]}function x(t){return n(t[3])}function k(t,n){return t[3]=n,t}const w=[0,0,1,0],y=u(),z=u();d();const A=d(),B=d(),C=d();export{U as a,l as b,x as c,d,h as e,g as f,v as g,b as h,w as u};
