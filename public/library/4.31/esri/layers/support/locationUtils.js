// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./fieldUtils"],function(f,g){const h="lat lat83 latitude latitude83 latdecdeg lat_dd y ycenter point_y".split(" "),k="lon lng lng83 long long83 longitude longitude83 longdecdeg long_dd x xcenter point_x".split(" ");f.inferLocationInfo=function(d,a,b){a=g.normalizeFieldName(a)?.toLowerCase();b=g.normalizeFieldName(b)?.toLowerCase();const c=d.map(e=>e.toLowerCase());a=a?d[c.indexOf(a)]:null;b=b?d[c.indexOf(b)]:null;return{longitudeFieldName:a||d[c.indexOf(k.find(e=>c.includes(e)))],
latitudeFieldName:b||d[c.indexOf(h.find(e=>c.includes(e)))]}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});