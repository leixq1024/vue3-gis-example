// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorProject","./support/converterAPI"],function(a,g,c,b){a.execute=function(d,e){const f=b.getSpatialReference(d);return b.toGeometry(c.execute(b.fromGeometry(d),e),f)};a.executeMany=function(d,e){const f=d.map(b.fromGeometry),h=b.getSpatialReference(d);return c.executeMany(f,e).map(k=>b.toGeometry(k,h)).filter(g.isSome)};a.isLoaded=function(){return c.isLoaded()};a.load=function(){return c.load()};a.supportsCurves=function(){return c.supportsCurves()};
Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});