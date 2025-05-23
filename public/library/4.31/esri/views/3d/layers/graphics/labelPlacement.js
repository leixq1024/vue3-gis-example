// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/Logger ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/aaBoundingBox ./constants ./graphicSymbolUtils ./LabelParameters ../../webgl-engine/lib/TextRenderer ../../webgl-engine/materials/HUDMaterial".split(" "),function(m,n,w,p,q,r,x,u,y,z,A){function k(a){a=u.getGraphics3DSymbol(a.graphics3DGraphic.graphics3DSymbol);return null!=a?a.symbol.symbolLayers.at(0):null}function B(a,b){var c=b.graphics3DGraphic.graphic.geometry;
if(null==c)return null;if(null!=b.disablePlacement)return b.labelClass.labelPlacement?(g().warnOncePerTick(v(a?.placement,b.disablePlacement.logEntityDescription)),l(b)):a;c=c.type;switch(c){case "polyline":case "polygon":case "extent":case "multipoint":if(b.labelClass.labelPlacement)return g().warnOncePerTick(v(a?.placement,`'${c}' geometries`)),l(b)}return a}function v(a,b){return`the requested label placement '${a}' is currently unsupported for ${b} in SceneView.`}function l(a){const b=a.graphics3DGraphic.graphic.geometry;
if(null==b)return null;switch(b.type){case "polyline":case "extent":case "multipoint":return{placement:"center-center",normalizedOffset:q.ZEROS,anchor:"center"};case "polygon":return a=k(a),null!=a&&"extrude"===a.type?f["above-center"]:{placement:"center-center",normalizedOffset:q.ZEROS,anchor:"center"};case "point":return f["above-center"];case "mesh":return f["above-center"]}}function C(a,b=D){({graphics3DGraphic:a}=a);(a=a.layers[0]?.stageObject.geometries[0].material??null)&&a instanceof A.HUDMaterial?
(a=a.parameters.anchorPosition,b[0]=2*(a[0]-.5),b[1]=2*(a[1]-.5)):(b[0]=0,b[1]=0);return b}function t(a,b,c){c=null!=c?c.getBoundingBoxObjectSpace(h):h;c=q.fromValues(c[3]-c[0],c[4]-c[1],c[5]-c[2]);a.centerOffset[0]=Math.sqrt(c[0]*c[0]+c[1]*c[1])/2*b.normalizedOffset[0];const d=a.translation[2],e=c[2]/2*b.normalizedOffset[1];a.translation[2]=0;a.elevationOffset=d+e;c=p.length(c);a.centerOffset[2]=c/2*b.normalizedOffset[2]}function E(a){const b=a.labelClass.labelPlacement,{labelSymbol:c,graphics3DGraphic:d}=
a;var e=u.getGraphics3DSymbol(d.graphics3DSymbol);e="point-3d"===e?.symbol.type?e.symbol:null;a=f[b]||l(a);if(null!=e&&e.supportsCallout()&&e.hasVisibleVerticalOffset()&&!d.isDraped)return{placement:null,hasLabelVerticalOffset:!1,verticalOffset:e.verticalOffset.clone(),anchor:null,normalizedOffset:null};if(c&&c.hasVisibleVerticalOffset()&&(null==e||!e.supportsCallout()||!e.verticalOffset||d.isDraped)){if(!(e=!a)){a:switch(a.placement){case "above-center":e=!0;break a;default:e=!1}e=!e}return e?(g().errorOncePerTick("Callouts and vertical offset on labels are currently only supported with 'above-center' label placement (not with "+
b+" placement)"),null):{placement:"above-center",verticalOffset:c.verticalOffset.clone(),anchor:"bottom",normalizedOffset:[0,a.normalizedOffset[1],0],hasLabelVerticalOffset:!0}}return{placement:null,verticalOffset:null,anchor:null,normalizedOffset:null,hasLabelVerticalOffset:!1}}const g=()=>w.getLogger("esri.views.3d.layers.graphics.labelPlacement");class F{constructor(a,b,c,d=null){this.graphics3DGraphic=a;this.labelSymbol=b;this.labelClass=c;this.disablePlacement=d}}const f={"above-center":{placement:"above-center",
normalizedOffset:[0,1,0],anchor:"bottom"},"above-left":{placement:"above-left",normalizedOffset:[-1,1,0],anchor:"bottom-right"},"above-right":{placement:"above-right",normalizedOffset:[1,1,0],anchor:"bottom-left"},"below-center":{placement:"below-center",normalizedOffset:[0,-1,2],anchor:"top"},"below-left":{placement:"below-left",normalizedOffset:[-1,-1,0],anchor:"top-right"},"below-right":{placement:"below-right",normalizedOffset:[1,-1,0],anchor:"top-left"},"center-center":{placement:"center-center",
normalizedOffset:[0,0,1],anchor:"center"},"center-left":{placement:"center-left",normalizedOffset:[-1,0,0],anchor:"right"},"center-right":{placement:"center-right",normalizedOffset:[1,0,0],anchor:"left"}};n={"above-center":["default","esriServerPointLabelPlacementAboveCenter"],"above-left":["esriServerPointLabelPlacementAboveLeft"],"above-right":["esriServerPointLabelPlacementAboveRight"],"below-center":["esriServerPointLabelPlacementBelowCenter"],"below-left":["esriServerPointLabelPlacementBelowLeft"],
"below-right":["esriServerPointLabelPlacementBelowRight"],"center-center":["esriServerPointLabelPlacementCenterCenter"],"center-left":["esriServerPointLabelPlacementCenterLeft"],"center-right":["esriServerPointLabelPlacementCenterRight"]};for(const a in n){const b=f[a];n[a].forEach(c=>{f[c]=b})}Object.freeze&&(Object.freeze(f),Object.keys(f).forEach(a=>{Object.freeze(f[a]);Object.freeze(f[a]?.normalizedOffset)}));const D=[0,0],h=r.create();m.LabelInfo=F;m.getLabelPlacement=function(a){var b=E(a);
if(null==b)return null;if(b.anchor)var c=b;else{c=a.labelClass.labelPlacement;var d=f[c],e=d||l(a);c&&!d&&g().warnOncePerTick(`the requested label placement '${c}' is currently unsupported in SceneView.`);c=B(e,a)}if(null==c)return null;b=new y.LabelPlacement(b.verticalOffset,c.anchor,!!b.hasLabelVerticalOffset);d=a.graphics3DGraphic.graphic.geometry;if(null==d)c=null;else{switch(d.type){case "point":e=k(a);if(null!=e)switch(d=a.graphics3DGraphic.layers[0],null!=d?d.getCenterObjectSpace(b.translation):
p.set(b.translation,0,0,0),e.type){case "icon":case "text":({graphics3DGraphic:e}=a);d=null!=d?d.getScreenSize():null;e.isDraped||null==d?b.hasLabelVerticalOffset||"center"===b.anchor||(f[a.labelClass.labelPlacement]&&g().warnOncePerTick(`the requested placement '${c.placement}' is currently unsupported for draped graphics`),b.anchor="center"):(a=C(a),b.screenOffset[0]=d[0]/2*(c.normalizedOffset[0]-a[0]),a=d[1]/2*(c.normalizedOffset[1]-a[1]),b.hasLabelVerticalOffset?(b.centerOffset[1]=a,b.centerOffsetUnits=
"screen"):b.screenOffset[1]=a);break;case "object":t(b,c,d)}break;case "mesh":d=k(a);if(null!=d)switch(a=a.graphics3DGraphic.layers[0],d.type){case "fill":t(b,c,a)}break;case "polygon":if(d=k(a),null!=d)switch(d.type){case "extrude":a=a.graphics3DGraphic.layers[0],null!=a?(a.getBoundingBoxObjectSpace(h),r.center(h,b.translation),b.translation[2]=r.height(h)/2):p.set(b.translation,0,0,0),t(b,c,a)}}a=x.labelMarginPx-z.textVerticalPaddingPx;b.screenOffset[0]+=a*c.normalizedOffset[0];b.screenOffset[1]+=
a*c.normalizedOffset[1];c=b}return c};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});