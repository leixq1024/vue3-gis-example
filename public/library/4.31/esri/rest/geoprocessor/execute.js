// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./GPOptions","./utils","../support/GPMessage"],function(c,e,d,f){c.execute=async function(g,h,b,k){b=e.from(b||{});return d.constructRequest(g,"execute",b,h??{},k).then(async({data:a})=>{const l=await Promise.all(a.results?.map(d.decode)??[]);a=a.messages?.map(m=>f.fromJSON(m))??[];return{results:l,messages:a}})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});