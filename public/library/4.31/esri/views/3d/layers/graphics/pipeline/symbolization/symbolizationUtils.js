// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../geometry/support/Indices"],function(c,f){c.attributesMapToInputAttributes=function(d){const a=[];for(const [e,b]of d)a.push([e,b]);return a};c.inputAttributesToAttributesMap=function(d){const a=new Map;for(const [e,b]of d)a.set(e,{...b,indices:f.compactIndices(b.indices)});return a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});