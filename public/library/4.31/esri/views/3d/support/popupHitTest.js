// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/support/layerUtils","../terrain/LayerClass","../../support/hitTestSelectUtils"],function(n,t,p,u){function v(b,d){const e=new Set,c=[];var g=b.basemapTerrain.numLayers(p.LayerClass.MAP);for(--g;0<=g;g--){const f=b.basemapTerrain.layerViewByIndex(g,p.LayerClass.MAP);e.add(f.layer.uid);c.push(f)}b=b.basemapTerrain.overlayManager.renderer.layers;for(const {uid:f}of b)if(b=d.get(f))e.add(f),c.push(b);c.reverse();return{layerUids:e,layerViews:c}}function w(b){const d=
new Map;for(const e of b.allLayerViews)d.set(e.layer.uid,e);return d}const x={layerUids:new Set,layerViews:[]};n.popupHitTest=async function(b,d){const {results:e,ground:c}=await u.hitTestSelectSimilarDistance(b,d),g=(!c.layer||!t.isIntegratedMeshLayer(c.layer.type))&&c.mapPoint,f=[];d=w(b);const h=g?v(b,d):x;let k=0,l=0;const q=()=>{const a=h.layerViews[l];g&&a&&"fetchPopupFeaturesAtLocation"in a&&f.push({mapPoint:c.mapPoint,layerView:a});++l};let m=null;for(;k<e.length||l<h.layerViews.length;){const a=
e[k];if(a&&"graphic"!==a.type)++k;else if("scene"===a?.layer?.type&&a?.layer?.parent===b?.map?.basemap)++k;else if(a){const y=h.layerUids.has(a.layer?.uid)&&a.distance===c.distance,r=d.get(a.layer?.uid);m??=a.mapPoint;l<h.layerViews.length&&(y||(a.distance??0)>c.distance)&&h.layerViews[l]!==r?q():(f.push({graphic:a.graphic,layerView:r}),++k)}else q()}m??=c.mapPoint;return{hits:f,location:m}};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});