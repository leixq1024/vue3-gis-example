/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{m as e,f as t}from"./normalizedPoint.js";import{D as r,E as n}from"./SnappingManager.js";import{V as a}from"./VertexSnappingCandidate.js";function o({x:e,y:r,z:n}){return t(e,r,n??0)}function d(t,d){switch(t.type){case"edge":return t.draped?new r({edgeStart:o(t.start),edgeEnd:o(t.end),targetPoint:e(o(t.target)),objectId:t.objectId,getGroundElevation:d}):new n({edgeStart:o(t.start),edgeEnd:o(t.end),targetPoint:e(o(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new a({targetPoint:e(o(t.target)),objectId:t.objectId,isDraped:!1})}}function i(e,t){return null!=e&&"3d"===e.type?(r,n)=>e.elevationProvider.getElevation(r,n,0,t,"ground"):()=>null}export{d as c,i as m};
