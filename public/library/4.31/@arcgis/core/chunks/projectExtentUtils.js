/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{project as e}from"../geometry/support/webMercatorUtils.js";import{projectGeometry as t}from"./geometryServiceUtils.js";async function r(r){const l=r.view.spatialReference,n=r.layer.fullExtent,u=null!=n&&n.spatialReference;if(null==n||!u)return null;if(u.equals(l))return n.clone();const o=e(n,l);if(null!=o)return o;if(r.view.state.isLocal)try{const e=await t(n,l,r.layer.portalItem);return r.destroyed||null==e?null:e}catch{return null}return null}export{r as t};
