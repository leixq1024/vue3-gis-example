/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import o from"../request.js";import{g as s}from"../core/accessorSupport/decorators/property.js";import{normalizeCentralMeridian as t}from"../geometry/support/normalizeUtils.js";import{collectGeometries as r,isInputGeometryZAware as p,fetchServiceDescription as i,dropZValuesOffInputGeometry as e}from"./networkService.js";import{p as m}from"../chunks/utils9.js";import{c as n}from"../chunks/utils14.js";import l from"./support/ClosestFacilitySolveResult.js";import a from"./support/FeatureSet.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../core/JSONSupport.js";import"../chunks/tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../geometry/Polygon.js";import"../chunks/writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polyline.js";import"../chunks/normalizeUtilsCommon.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"../chunks/simplify.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../chunks/utils10.js";import"../chunks/enumeration.js";import"../chunks/networkEnums.js";import"./support/TravelMode.js";import"../core/Clonable.js";import"./support/DirectionsFeatureSet.js";import"./support/DirectionsFeature.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/vec3f64.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./support/DirectionsEvent.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"./support/NAMessage.js";import"./support/GPMessage.js";function j(o){return o instanceof a}async function u(a,u,c){const y=[],b=[],h={},k={},d=m(a),{path:f}=d;j(u.incidents)&&r(u.incidents.features,b,"incidents.features",h),j(u.facilities)&&r(u.facilities.features,b,"facilities.features",h),j(u.pointBarriers)&&r(u.pointBarriers.features,b,"pointBarriers.features",h),j(u.polylineBarriers)&&r(u.polylineBarriers.features,b,"polylineBarriers.features",h),j(u.polygonBarriers)&&r(u.polygonBarriers.features,b,"polygonBarriers.features",h);const S=await t(b);for(const o in h){const s=h[o];y.push(o),k[o]=S.slice(s[0],s[1])}if(p(k,y)){let o=null;try{o=await i(f,u.apiKey,c)}catch{}o&&!o.hasZ&&e(k,y)}for(const o in k)k[o].forEach(((t,r)=>{s(u,o)[r].geometry=t}));const g={...c,query:{...d.query,...n(u),f:"json"}},{data:D}=await o(`${f}/solveClosestFacility`,g);return l.fromJSON(D)}export{u as solve};
