// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/OperatorMultiPartToSinglePart"],function(a,d,e){const c=new e.OperatorMultiPartToSinglePart;a.executeMany=function(b,f,g){b=c.executeMany(new d.SimpleGeometryCursor(b),f,null,g);return Array.from(b)};a.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});