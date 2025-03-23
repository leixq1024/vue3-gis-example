/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{g as t}from"./centroid.js";import{O as e}from"./OptimizedFeature.js";import{O as r}from"./OptimizedGeometry.js";const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,r)=>new e(r,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(null==e.centroid&&(e.centroid=t(new r,e.geometry,o.hasZ,o.hasM)),e.centroid)};export{o};
