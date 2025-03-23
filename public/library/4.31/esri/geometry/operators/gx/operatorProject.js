// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/SimpleGeometryCursor ../../../chunks/QuadraticBezier ../../../chunks/Geometry ../../../chunks/Transformation2D ../../../chunks/pe".split(" "),function(c,k,g,p,q,f){function h(){return!!d&&f.isLoaded()}let d;const l=Object.freeze(Object.defineProperty({__proto__:null,OperatorProject:g.OperatorProject},Symbol.toStringTag,{value:"Module"}));c.clipToSpatialReference=function(a,b,e){return d.clipToSpatialReference(a,b,null,e)};c.execute=function(a,b){return d.execute(a,
b,null)};c.executeMany=function(a,b){a=d.executeMany(new k.SimpleGeometryCursor(a),b,null);return Array.from(a)};c.foldInto360Range=function(a,b){return d.foldInto360Range(a,b)};c.foldInto360RangeGeodetic=function(a,b,e){return d.foldInto360RangeGeodetic(a,b,e)};c.isLoaded=h;c.load=async function(){if(!h()){const [a]=await Promise.all([Promise.resolve().then(()=>l),f.load()]);d=new a.OperatorProject;g.injectPe$1(f.pe)}};c.normalizeGeometry=function(a,b,e){return d.normalizeGeometry(a,b,e)};c.supportsCurves=
function(){return d.supportsCurves()};c.transform=function(a,b,e,m,n){return d.transform(a,b,e,m,n)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});