// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/query","../support/Query"],function(c,d,e,f){c.executeForCount=async function(a,b,g){a=d.parseUrl(a);({data:b}=await e.executeQueryForCount(a,f.from(b),g));return b.count};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});