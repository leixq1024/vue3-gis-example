/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{h as s}from"./handleUtils.js";import{I as i,L as n,P as t,R as o}from"./RightAngleSnappingHint.js";import{P as a}from"./PointSnappingHint.js";class e{draw(e,r){const u=function(s){const i=[];for(const n of s){let s=!0;for(const t of i)if(n.equals(t)){s=!1;break}s&&i.push(n)}return i}(e),f=this.sortUniqueHints(u),h=[];for(const s of f)s instanceof i&&h.push(this.visualizeIntersectionPoint(s,r)),s instanceof n&&h.push(this.visualizeLine(s,r)),s instanceof t&&h.push(this.visualizeParallelSign(s,r)),s instanceof o&&h.push(this.visualizeRightAngleQuad(s,r)),s instanceof a&&h.push(this.visualizePoint(s,r));return s(h)}sortUniqueHints(s){return s}}export{e as S};
