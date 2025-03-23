/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{cast as r}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{SmartMappingSliderBase as e}from"./SmartMappingSliderBase.js";import p from"./OpacitySlider/OpacitySliderViewModel.js";import{g as m}from"../../chunks/globalCss.js";import"../../chunks/widgetUtils.js";import{m as l}from"../../chunks/messageBundle.js";import{t as n}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/componentsUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../Slider/SliderViewModel.js";import"./support/utils.js";import"../../renderers/support/utils.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils3.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../chunks/loadAll.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/utils2.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/utils12.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/enums2.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorRampUtils2.js";import"../../chunks/utils15.js";import"../../chunks/timeUtils.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"./SmartMappingSliderViewModel.js";var a;const j="esri-opacity-slider",c={base:j,rampElement:`${j}__ramp`,sliderContainer:`${j}__slider-container`,histogramContainer:`${j}__histogram-container`,track:`${j}--interactive-track`},u={trackFillColor:new t([0,121,193])};let y=a=class extends e{constructor(s,t){super(s,t),this.messages=null,this.style={...u},this.viewModel=new p,this._rampFillId=`${this.id}-ramp-fill`,this._bgFillId=`${this.id}-bg-fill`}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get stops(){return this.viewModel.stops}set stops(s){this.viewModel.stops=s}castStyle(s){return{...u,...s}}static fromVisualVariableResult(s,t){const{visualVariable:{stops:o},statistics:r}=s,{avg:i,max:e,min:p,stddev:m}=r;return new a({max:e??void 0,min:p??void 0,stops:o,histogramConfig:{average:i??void 0,standardDeviation:m??void 0,bins:t?t.bins:[]}})}updateFromVisualVariableResult(s,t){const{visualVariable:{stops:o},statistics:r}=s,{avg:i,max:e,min:p,stddev:m}=r;this.set({max:e,min:p,stops:o,histogramConfig:{average:i,standardDeviation:m,bins:t?t.bins:[]}})}render(){const{state:s,label:t,visibleElements:o}=this,r="disabled"===s,i=this.classes(c.base,m.widget,m.panel,{[m.disabled]:r,[c.track]:!!o.interactiveTrack});return n("div",{"aria-label":t,class:i},r?null:this.renderContent(this._renderRamp(),c.sliderContainer,c.histogramContainer))}_renderRamp(){const{_bgFillId:s,_rampFillId:t,style:{trackFillColor:o},viewModel:r,zoomOptions:i}=this,e=r.getStopInfo(o);return n("div",{class:c.rampElement},n("svg",{xmlns:"http://www.w3.org/2000/svg"},n("defs",null,this.renderRampFillDefinition(t,e),this.renderBackgroundFillDefinition(s)),n("rect",{fill:`url(#${s})`,height:"100%",width:"100%",x:"0",y:"0"}),n("rect",{fill:`url(#${t})`,height:"100%",width:"100%",x:"0",y:"0"})),i?this.renderZoomCaps():null)}};s([o()],y.prototype,"label",null),s([o(),l("esri/widgets/smartMapping/OpacitySlider/t9n/OpacitySlider")],y.prototype,"messages",void 0),s([o()],y.prototype,"stops",null),s([o()],y.prototype,"style",void 0),s([r("style")],y.prototype,"castStyle",null),s([o()],y.prototype,"viewModel",void 0),y=a=s([i("esri.widgets.smartMapping.OpacitySlider")],y);const h=y;export{h as default};
