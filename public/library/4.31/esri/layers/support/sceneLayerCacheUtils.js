// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.cacheIsOutOfSync=function({associatedLayer:a,serviceUpdateTimeStamp:b}){const d=a?.editingInfo?.lastEditDate;a=a?.serverGens;const e=null!=d,f=null!=b;b=e&&f&&b.lastUpdate!==d.getTime();return e&&(b||!f&&a?.minServerGen!==a?.serverGen)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});