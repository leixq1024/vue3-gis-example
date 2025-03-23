// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./Background","./ColorBackground"],function(e,a,g){a={base:a,key:"type",typeMap:{color:g}};a={types:a,json:{read:function(d){return(b,c,h)=>{if(!b)return b;for(const f in d.typeMap)if(b.type===f)return c=new d.typeMap[f],c.read(b,h),c}}(a),write:{overridePolicy:(d,b,c)=>({enabled:!c?.isPresentation})}}};e.backgroundProperty=a;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});