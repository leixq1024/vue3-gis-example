// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/Geometry","../../../chunks/QuadraticBezier"],function(b,f,h,g){const e=new g.OperatorSimplify;b.execute=function(a,c,d){return e.execute(a,c,d,null)};b.executeMany=function(a,c,d){a=e.executeMany(new f.SimpleGeometryCursor(a),c,d,null);return Array.from(a)};b.isSimpleAsFeature=function(a,c,d){return e.isSimpleAsFeature(a,c,d,null,null)};b.supportsCurves=function(){return e.supportsCurves()};Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});