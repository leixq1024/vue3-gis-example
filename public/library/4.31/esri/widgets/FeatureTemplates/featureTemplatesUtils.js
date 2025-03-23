// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.isTemplateItemGroup=a=>"items"in a;d.loadLayerWithTemplates=async function(a,b){"subtype-sublayer"===a.type?await a.parent?.load(b):await a.load(b);return a};d.mapItemsByTemplate=function(a){const b=new Map,e=[];for(const c of a)if("items"in c){e.push(c);for(const f of c.items)b.set(f.template,f)}else b.set(c.template,c);return[b,e]};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});