/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import{cast as r}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{a as i}from"../../chunks/authoringInfoUtils.js";import p from"../../renderers/visualVariables/support/SizeStop.js";import{getCIMSymbolColor as l}from"../../symbols/support/cimSymbolUtils.js";import{SmartMappingSliderBase as m}from"./SmartMappingSliderBase.js";import n from"./BinaryColorSizeSlider/BinaryColorSizeSliderViewModel.js";import{getSizesFromVariable as a,getFillFromColor as u,getDynamicPathForSizeStops as c}from"./support/utils.js";import{g as j}from"../../chunks/globalCss.js";import{s as d}from"../../chunks/widgetUtils.js";import{m as h}from"../../chunks/messageBundle.js";import{t as y}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/utils7.js";import"../../chunks/enums2.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../Histogram.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/componentsUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../Slider/SliderViewModel.js";import"./SizeSlider/SizeSliderViewModel.js";import"./SmartMappingPrimaryHandleSliderViewModel.js";import"./SmartMappingSliderViewModel.js";import"../../renderers/support/utils.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils3.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../chunks/loadAll.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/utils2.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/utils12.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorRampUtils2.js";import"../../chunks/utils15.js";import"../../chunks/timeUtils.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";var b;const k="esri-binary-color-size-slider",g={base:k,rampElement:`${k}__ramp`,sliderContainer:`${k}__slider-container`,histogramContainer:`${k}__histogram-container`,zoomCapTop:`${k}__zoom-cap-top`,zoomCapBottom:`${k}__zoom-cap-bottom`,zoomCapLine:`${k}__zoom-cap-line`,zoomCapMask:`${k}__zoom-cap-mask`,zoomCapUnderline:`${k}__zoom-cap-underline`,primaryHandle:`${k}--primary-handle`,track:`${k}--interactive-track`},S={trackBackgroundColor:new o([224,224,224]),trackAboveFillColor:new o([149,149,149]),trackBelowFillColor:new o([149,149,149])};let f=b=class extends m{constructor(s,o){super(s,o),this._minRampFillWidth=.2,this._rampNode=null,this.messages=null,this.style={...S},this.viewModel=new n,this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(s){this.viewModel.handlesSyncedToPrimary=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(s){this.viewModel.persistSizeRangeEnabled=s}get stops(){return this.viewModel.stops}set stops(s){this.viewModel.stops=s}castStyle(s){return{...S,...s}}static fromRendererResult(s,o){const{size:{visualVariables:t},statistics:r}=s,{avg:e,stddev:p}=r,l=t[0].stops,[m,n]=i(s.renderer.authoringInfo),a=C(s.renderer.classBreakInfos);return new b({max:n,min:m,stops:l??void 0,histogramConfig:{average:e??void 0,standardDeviation:p??void 0,bins:o?o.bins:[]},style:a,handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateFromRendererResult(s,o){const{size:{visualVariables:t},statistics:r}=s,{avg:e,stddev:p}=r,l=t[0].stops,[m,n]=i(s.renderer.authoringInfo),a=C(s.renderer.classBreakInfos);this.set({max:n,min:m,stops:l,histogramConfig:{average:e,standardDeviation:p,bins:o?o.bins:[]},style:a,handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateRenderer(s){if("univariate-color-size"!==s.authoringInfo?.type||"above-and-below"!==s.authoringInfo?.univariateTheme)return console.error("Input renderer must be a univariate renderer with an above-and-below theme."),null;const o=s.clone(),t=o.visualVariables?.find((s=>"size"===s.type&&"outline"!==s.target&&s.stops)),{stops:r}=this;if(!o.visualVariables||!t||!r)return console.error("No size stops available."),null;const e=o.visualVariables.indexOf(t);o.visualVariables.splice(e,1),t.stops=r,o.visualVariables.push(t);const i=r[5===r.length?2:1].value;return o.classBreakInfos[0].maxValue=i,o.classBreakInfos[1].minValue=i,o}updateFromVisualVariable(s){if(!s)return;const{maxDataValue:o,minDataValue:t,stops:r}=s;if(r)this.stops=r;else{const[r,e]=a(s);this.stops=[new p({value:t??void 0,size:e}),new p({value:o??void 0,size:r})]}}render(){const{label:s,state:o,viewModel:{primaryHandleEnabled:t},visibleElements:r}=this,e="disabled"===o,i=this.classes(g.base,j.widget,j.panel,{[j.disabled]:e,[g.primaryHandle]:t,[g.track]:!!r.interactiveTrack});return y("div",{"aria-label":s,class:i},e?null:this.renderContent(this._renderRamp(),g.sliderContainer,g.histogramContainer))}_renderRamp(){const{style:{trackBackgroundColor:s},zoomOptions:o}=this;return y("div",{afterCreate:d,bind:this,class:g.rampElement,"data-node-ref":"_rampNode"},y("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},y("rect",{fill:u(s),height:"100%",width:"100%",x:"0",y:"0"}),this._renderPrimaryRamp(),this._renderPath()),o?this.renderZoomCaps():null)}_renderPrimaryRamp(){const{_rampFillId:s,style:{trackAboveFillColor:o,trackBelowFillColor:t},viewModel:r}=this;return[y("defs",null,this.renderRampFillDefinition(s,r.getGradientStopInfo(o,t)))]}_renderPath(){if(!this._rampNode)return;const{offsetHeight:s=0,offsetWidth:o=0}=this._rampNode;if(null==s||null==o)return;const{stops:t,viewModel:{max:r,min:e},_rampFillId:i,_minRampFillWidth:p}=this,l=c({max:r,min:e,pathHeight:s,pathWidth:o,stops:t,padding:p});return y("path",{d:l,fill:`url(#${i})`})}};s([t()],f.prototype,"handlesSyncedToPrimary",null),s([t()],f.prototype,"label",null),s([t(),h("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],f.prototype,"messages",void 0),s([t()],f.prototype,"persistSizeRangeEnabled",null),s([t()],f.prototype,"stops",null),s([t()],f.prototype,"style",void 0),s([r("style")],f.prototype,"castStyle",null),s([t()],f.prototype,"viewModel",void 0),f=b=s([e("esri.widgets.smartMapping.BinaryColorSizeSlider")],f);const v=f;function C(s){if(s.length<=1)return{};const o=s=>{if("cim"===s.type)return l(s);if(s.symbolLayers){const o=s.symbolLayers?.at(0);return o.material?.color}return s.color};return{trackBelowFillColor:o(s[0].symbol)??void 0,trackAboveFillColor:o(s[1].symbol)??void 0}}export{v as default};
