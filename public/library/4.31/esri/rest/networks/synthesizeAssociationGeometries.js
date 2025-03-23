// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","./support/AssociationGeometriesResult"],function(f,l,d,m){f.synthesizeAssociationGeometries=async function(b,g,a){b=d.parseUrl(b);var e={...g.toJSON(),f:"json"};e=d.encode({...b.query,...e});a?a.method="post":a={method:"post"};a=d.asValidOptions(e,a);return l(`${b.path}/synthesizeAssociationGeometries`,a).then(c=>{var h=g.outSpatialReference;({data:c}=c);if(h)for(const k of c.associations)k.geometry.spatialReference||(k.geometry.spatialReference=h.clone());
return m.fromJSON(c)})};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});