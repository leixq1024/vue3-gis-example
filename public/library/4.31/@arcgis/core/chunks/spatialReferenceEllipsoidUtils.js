/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{S as e,Q as t,R as s,W as n,T as a,U as o}from"./unitUtils.js";import i from"../geometry/SpatialReference.js";const r=new i(e),l=new i(t),p=new i(s),f=new i(n);function w(e){const t=c.get(e);if(t)return t;let s=r;if(e)if(e===l)s=l;else if(e===p)s=p;else{const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)a(t)||a(n)?s=l:(o(t)||o(n))&&(s=p);else{const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===u&&(s=p)}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),u=p.wkt.toUpperCase();export{l as S,f as W,p as a,w as g};
