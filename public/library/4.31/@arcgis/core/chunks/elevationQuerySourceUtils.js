/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{i as l,w as r}from"../core/lang.js";import{g as t}from"./unitUtils.js";function u(l){if(null==l)return null;if(l instanceof n)return i(l);const r=l.tileInfo;if(null==r)return null;const u=r.lods?.at(-1);return null==u?null:u.resolution*t(r.spatialReference)}function i(n){if(null==n)return null;const t=n.layers.items.map(o).filter(l);return r(t)??null}function o(n){return n&&"tileInfo"in n?u(n):null}export{u as a,i as g};
