/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{O as t}from"./OptimizedGeometry.js";class s{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(e,h){const o=e.geometry?t.fromJSON(e.geometry):null,i=e.centroid?t.fromJSON(e.centroid):null,r=e.attributes[h];return new s(o,e.attributes,i,r)}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){const t=this.geometry?.clone(),e=new s(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function e(t){return!!t.geometry?.coords?.length}export{s as O,e as h};
