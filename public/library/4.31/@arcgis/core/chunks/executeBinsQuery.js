/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as o}from"./utils9.js";import t from"../request.js";import{urlToObject as s,join as r}from"../core/urlUtils.js";import{getJsonType as i}from"../geometry/support/jsonUtils.js";import{normalizeCentralMeridian as p}from"../geometry/support/normalizeUtils.js";import{_ as e,f as m}from"./unitUtils.js";import{m as l}from"./query.js";import{B as n}from"./BinsQuery.js";import j from"../rest/support/FeatureSet.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/Error.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./jsonMap.js";import"./assets.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils10.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedGeometry.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";import"../core/Clonable.js";import"./enumeration.js";import"./queryUtils.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"./vec3f64.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./projectionSupport.js";import"./json.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../time/TimeExtent.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./datetime.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";function a(o){const t=o.geometry,s=o.toJSON(),r=s;let p,l,n;return null!=t&&(l=t.spatialReference,n=e(l),r.geometryType=i(t),r.geometry=JSON.stringify(t),r.inSR=n),s.outSR?(r.outSR=e(s.outSR),p=o.outSpatialReference):t&&(r.outSR=r.inSR,p=l),r.bin&&=JSON.stringify(r.bin),r.quantizationParameters&&=JSON.stringify(r.quantizationParameters),r.outStatistics&&=JSON.stringify(r.outStatistics),r.outTimeReference&&=JSON.stringify(r.outTimeReference),o.defaultSpatialReference&&m(l,p)&&(r.defaultSR=r.inSR,delete r.inSR,delete r.outSR),r}async function y(i,e,m){const{data:y}=await async function(o,i,e){return async function(o,i,e={}){const m="string"==typeof o?s(o):o,n=i.geometry?[i.geometry]:[],j=await p(n,null,{signal:e.signal}),y=j?.[0];null!=y&&((i=i.clone()).geometry=y);const u=l({...m.query,f:"json",...a(i)});return t(r(m.path,"queryBins"),{...e,query:{...u,...e.query}})}(o,i,e)}(o(i),n.from(e),m);return j.fromJSON(y)}export{y as executeBinsQuery};
