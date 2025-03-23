// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(e,g,h){e.toViewIfLocal=async function(b){const d=b.view.spatialReference,a=b.layer.fullExtent;var c=null!=a&&a.spatialReference;if(null==a||!c)return null;if(c.equals(d))return a.clone();c=g.project(a,d);if(null!=c)return c;if(b.view.state.isLocal)try{const f=await h.projectGeometry(a,d,b.layer.portalItem);return b.destroyed||null==f?null:f}catch{}return null};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});