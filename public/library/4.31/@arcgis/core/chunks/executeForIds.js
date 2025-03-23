/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as t}from"./utils9.js";import{b as r,c as a}from"./query.js";import o from"../rest/support/Query.js";async function s(a,s,n){const c=t(a),{data:u}=await r(c,o.from(s),n);return u.count}async function n(r,s,n){const c=t(r),{data:u}=await a(c,o.from(s),n);return u.objectIds}export{n as a,s as e};
