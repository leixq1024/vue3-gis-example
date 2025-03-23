/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as s,a as o}from"./screenUtils.js";import{C as t}from"./CIMSymbolHelper.js";import{CIMSymbolRasterizer as r}from"./CIMSymbolRasterizer.js";import{O as i}from"./OverrideHelper.js";import{m as e}from"./utils7.js";import{S as m,r as l}from"../symbols/support/symbolUtils.js";import"./BidiEngine.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./boundsUtils.js";import"../symbols/Font.js";import"./fontUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./zmUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"./OptimizedGeometry.js";import"./GeometryUtils.js";import"./enums2.js";import"../geometry.js";import"./typeUtils.js";import"./definitions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2.js";import"./common.js";import"./vec2f32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"../symbols/SimpleFillSymbol.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/Symbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/MarkerSymbol.js";import"../symbols/TextSymbol.js";import"./defaultsJSON.js";import"./CIMResourceManager.js";import"./imageUtils.js";import"./colorUtils2.js";import"./vec4.js";import"./vec4f64.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"./quantizationUtils.js";import"./utils12.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"./vec3f64.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/WebStyleSymbol.js";import"./jsonUtils.js";import"./parser.js";import"./utils2.js";import"./mat4.js";import"../symbols/support/cimSymbolUtils.js";import"./LRUCache.js";import"./MemCache.js";import"./projector.js";import"./widgetUtils.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";import"./webStyleSymbolUtils.js";import"./devEnvironmentUtils.js";import"../symbols/support/jsonUtils.js";import"./layerUtils.js";import"./styleUtils.js";const p=new r(null),a=s(m.size),j=s(m.maxSize),y=s(m.lineWidth);async function n(s,r={}){const{node:m,opacity:n,symbolConfig:b}=r,c=null!=b&&"object"==typeof b&&"isSquareFill"in b&&b.isSquareFill,u=r.cimOptions||r,d=u.geometryType||e(s?.data?.symbol),S=await async function(s,o,r){const e=o?.size;let m=null!=e&&"object"==typeof e&&"width"in e?e.width:e,l=null!=e&&"object"==typeof e&&"height"in e?e.height:e;if(null==m||null==l)if("esriGeometryPolygon"===r)m=a,l=a;else{const e=await async function(s,o,r){const{feature:e,fieldMap:m,viewParams:l}=o.cimOptions||o,a=await i.resolveSymbolOverrides(s.data,e,null,m,r,null,l);if(!a)return null;(s=s.clone()).data={type:"CIMSymbolReference",symbol:a},s.data.primitiveOverrides=void 0;const j=[];return t.fetchResources(a,p.resourceManager,j),t.fetchFonts(a,p.resourceManager,j),j.length>0&&await Promise.all(j),t.getEnvelope(a,null,p.resourceManager)}(s,o,r);e&&(m=e.width,l=e.height),"esriGeometryPolyline"===r&&(m=y),m=null!=m&&isFinite(m)?Math.min(m,j):a,l=null!=l&&isFinite(l)?Math.max(Math.min(l,j),1):a}return"legend"===o.style&&"esriGeometryPolyline"===r&&(m=y),{width:m,height:l}}(s,r,d),{feature:g,fieldMap:f}=u,h=c||"esriGeometryPolygon"!==d?"preview":"legend",U=await p.rasterizeCIMSymbolAsync(s,g,S,h,f,d,null,u.viewParams,u.allowScalingUp);if(!U)return null;const{width:D,height:L}=U,M=document.createElement("canvas");M.width=D,M.height=L,M.getContext("2d").putImageData(U,0,0);const w=o(S.width),P=o(S.height),v=new Image(w,P);v.src=M.toDataURL(),v.ariaLabel=r.ariaLabel??null,v.alt=r.ariaLabel??"",null!=n&&(v.style.opacity=`${n}`);let C=v;if(null!=r.effectView){const s={shape:{type:"image",x:0,y:0,width:w,height:P,src:v.src},fill:null,stroke:null,offset:[0,0]};C=l([[s]],[w,P],{effectView:r.effectView,ariaLabel:r.ariaLabel})}return m&&C&&m.appendChild(C),C}export{n as previewCIMSymbol};
