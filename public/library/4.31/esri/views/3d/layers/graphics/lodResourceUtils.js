// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/lodRendering/LodResources"],function(e,d){function f(a,b){const c=a.stageResources.geometries.map(g=>new d.LodComponentResources(g,a.stageResources.textures));b=null==a.lodThreshold||0===a.lodThreshold&&0<b?h(c):a.lodThreshold;return new d.LodLevelResources(c,b,a.pivotOffset)}function h(a){a=a.reduce((b,c)=>b+c.numTriangles,0);return Math.sqrt(20*a/Math.PI)}e.makeLodResources=function(a){return new d.LodResources(a.map((b,c)=>f(b,c)))};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});