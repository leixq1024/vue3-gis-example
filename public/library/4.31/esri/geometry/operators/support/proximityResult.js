// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./converterAPI"],function(c,d){c.toProximityResult=function(a,b,e=!1){b=d.toPoint(a.m_coordinate,d.getSpatialReference(b));const f=a.m_distance,g=a.isEmpty(),h=a.m_bRightSide;return{coordinate:b,distance:f,isEmpty:g,...(e&&{isRightSide:h}),vertexIndex:a.m_vertexIndex}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});