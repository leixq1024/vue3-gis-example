// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./Version"],function(b,c){c=new c.Version(2,32);b.currentVersion=c;b.isWebMap=function(a){return null!=a&&"object"===typeof a&&"declaredClass"in a&&"esri.WebMap"===a.declaredClass};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});