// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/QuadraticBezier ../../../chunks/Geometry ../../../chunks/Transformation2D ../../../chunks/pe".split(" "),function(h,a,k,l,m,c){function g(){return!!b&&c.isLoaded()}let b;a.execute=function(d,e,f){return b.execute(d,e,f,null)};a.isLoaded=g;a.load=async function(){if(!g()){const [d]=await Promise.all([new Promise((e,f)=>h(["../../../chunks/OperatorGeodeticArea"],e,f)),c.load()]);b=new d.OperatorGeodeticArea;k.injectPe$1(c.pe)}};a.supportsCurves=function(){return b.supportsCurves()};
Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});