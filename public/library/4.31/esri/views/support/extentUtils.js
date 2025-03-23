// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/quantityUtils","./automaticLengthMeasurementUtils"],function(d,e,b){d.autoSize2D=function({topLeft:a,topRight:f,bottomRight:g,bottomLeft:h,spatialReference:c}){const k=e.max(b.autoDistance2D(h,g,c),b.autoDistance2D(a,f,c));if(null==k)return null;a=e.max(b.autoDistance2D(g,f,c),b.autoDistance2D(h,a,c));return null==a?null:{xSize:k,ySize:a}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});