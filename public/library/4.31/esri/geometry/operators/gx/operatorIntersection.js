// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/Geometry","../../../chunks/QuadraticBezier"],function(b,f,k,g){const d=new g.OperatorIntersection;b.accelerateGeometry=function(a,c){return d.accelerateGeometry(a,c,1)};b.execute=function(a,c,e){return d.execute(a,c,e,null)};b.executeMany=function(a,c,e,h){a=d.executeMany(new f.SimpleGeometryCursor(a),new f.SimpleGeometryCursor([c]),e,null,h);return Array.from(a)};b.supportsCurves=function(){return d.supportsCurves()};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});