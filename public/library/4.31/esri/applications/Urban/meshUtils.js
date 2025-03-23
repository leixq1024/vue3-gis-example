// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils"],function(c,a,d){a.convertVertexSpaceEllipsoid=async function(e,f,b){const {convertMeshVertexSpace:g}=await new Promise((h,k)=>c(["../../geometry/support/meshUtils/convertMeshVertexSpace"],h,k));d.throwIfAborted(b);return g(e,f,{...b,useEllipsoid:!0})};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});