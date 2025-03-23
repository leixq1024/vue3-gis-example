// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./lineObjectVisualElementUtils","./manipulatedObjectUtils","./originGeometryVisualElementUtils"],function(b,c,d,e){b.createVisualElements=function(a){switch(d.manipulatedObjectGeometry(a.object)?.type){case "point":case "mesh":return e.createVisualElements(a);case "polygon":case "polyline":return c.createVisualElements(a);default:return null}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});