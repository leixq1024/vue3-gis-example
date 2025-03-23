// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/OperatorGeneralize"],function(b,f,g){const c=new g.OperatorGeneralize;b.execute=function(a,d,e){return c.execute(a,d,e,null)};b.executeMany=function(a,d,e){a=c.executeMany(new f.SimpleGeometryCursor(a),d,e,null);return Array.from(a)};b.supportsCurves=function(){return c.supportsCurves()};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});