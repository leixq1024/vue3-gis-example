// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryBins","../support/BinsQuery","../support/FeatureSet"],function(b,c,d,e,f){b.executeBinsQuery=async function(a,g,h){({data:a}=await d.executeBinsQuery(c.parseUrl(a),e.from(g),h));return f.fromJSON(a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});