// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/mathUtils ./gx/operatorDensify ./gx/operatorMinimumBoundingCircle ./support/converterAPI".split(" "),function(a,g,h,k,e,c){function f(b,d={}){({merge:d=!1}=d);const l=b.map(c.fromGeometry),m=c.getSpatialReference(b);return k.executeMany(e.executeMany(l,d),0,0,h.deg2rad(1)).map(n=>c.toPolygon(n,m)).filter(g.isSome)}a.execute=function(b){return f([b])[0]};a.executeMany=f;a.supportsCurves=function(){return e.supportsCurves()};Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});