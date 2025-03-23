/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../Graphic.js";import i,{d as s}from"../../core/Accessor.js";import{i as o,w as r}from"../../core/lang.js";import{B as n}from"../../chunks/ByteSizeUnit.js";import l from"../../core/Collection.js";import{r as a}from"../../chunks/collectionUtils.js";import{L as p}from"../../chunks/Logger.js";import{L as h}from"../../chunks/LRUCache.js";import{a as c,d as u}from"../../chunks/maybe.js";import{m}from"../../chunks/memoize.js";import{watch as d,syncAndInitial as y,when as j}from"../../core/reactiveUtils.js";import{am as g,an as f,G as v}from"../../chunks/unitUtils.js";import{property as _}from"../../core/accessorSupport/decorators/property.js";import{subclass as k}from"../../core/accessorSupport/decorators/subclass.js";import{E as b}from"../../chunks/ElevationQueryTileCache.js";import{d as S}from"../../chunks/defaultUnit.js";import{c as P}from"../../chunks/asyncUtils.js";import{h as w,m as U}from"../../chunks/handleUtils.js";import{throwIfAborted as I,throwIfAbortError as M,ignoreAbortErrors as C,whenOrAbort as E}from"../../core/promiseUtils.js";import{t as T}from"../../chunks/throttle.js";import{t as D,k as L}from"../../chunks/elevationInfoUtils.js";import R,{i as O,a as G,g as V,c as A,E as x,d as F,e as z,m as H,f as B,h as N,P as q}from"./ElevationProfileLine.js";import Q from"./ElevationProfileLineGround.js";import W from"./ElevationProfileLineInput.js";import Y from"./ElevationProfileLineQuery.js";import Z from"./ElevationProfileLineView.js";import J from"../../layers/GraphicsLayer.js";import K from"../../symbols/CIMSymbol.js";import X from"../../symbols/SimpleLineSymbol.js";import{V as $}from"../../chunks/InputManager.js";import tt from"../Sketch/SketchViewModel.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/MemCache.js";import"../../chunks/getDefaultUnitForView.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/uuid.js";import"../../chunks/vec4f64.js";import"../../chunks/Material.js";import"../../chunks/interfaces3.js";import"../../chunks/VertexAttribute.js";import"../../chunks/boundedPlane.js";import"../../chunks/ray.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/plane.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/mat4.js";import"../../chunks/lineSegment.js";import"../../chunks/sphere.js";import"../../chunks/vec4.js";import"../../chunks/ViewingMode.js";import"../../chunks/QueueProcessor.js";import"../../chunks/Queue.js";import"../../chunks/ReactiveMap.js";import"../../core/signal.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/vec2.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../geometry/support/geodesicUtils.js";import"../../chunks/traversalUtils.js";import"../../chunks/elevationQuerySourceUtils.js";import"../../Ground.js";import"../../chunks/compilerUtils.js";import"../../chunks/loadAll.js";import"../../chunks/ElevationQuery.js";import"../../layers/support/ElevationSampler.js";import"../../chunks/ElevationTile.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/TileKey.js";import"../../chunks/hitTest.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/projectPointToVector.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/LayerConstants.js";import"../../chunks/layerUtils.js";import"../../chunks/debugFlags2.js";import"../../chunks/ElevationProvider.js";import"../../chunks/dehydratedFeatureUtils.js";import"../../chunks/Intersector3.js";import"../../chunks/intersectorUtils.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/orientedBoundingBox.js";import"../../chunks/quat.js";import"../../chunks/spatialReferenceEllipsoidUtils.js";import"../../chunks/computeTranslationToOriginAndRotation.js";import"../../chunks/Attribute.js";import"../../chunks/intersectorUtilsConversions.js";import"../../chunks/Intersector.js";import"../../chunks/Intersector2.js";import"../../chunks/GraphicsCollection.js";import"../../layers/Layer.js";import"../../time/TimeExtent.js";import"../../chunks/timeUtils.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils2.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/isSupportedObject.js";import"../../chunks/layerUtils2.js";import"../../chunks/keybindings.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../chunks/SketchOptions.js";import"../../views/interactive/sketch/SketchTooltipOptions.js";import"../../chunks/SketchTooltipVisibleElements.js";import"../../views/interactive/sketch/SketchValueOptions.js";import"../../chunks/angularMeasurementUtils.js";import"../../chunks/Cyclical.js";import"../../chunks/quantityUtils.js";import"../../chunks/SnappingManager.js";import"../../chunks/normalizedPoint.js";import"../../chunks/Settings2.js";import"../../chunks/RightAngleSnappingHint.js";import"../../views/interactive/snapping/SnappingOptions.js";import"../../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../../chunks/snappingUtils.js";import"../../chunks/geometry2dUtils.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/utils6.js";import"../../chunks/Version.js";import"../../chunks/Version2.js";import"../../chunks/viewUtils.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/screenUtils2.js";const et=Symbol("line-change");let it=class extends i{constructor(t){super(t),this._updateTask=null,this._paramsPerProfile=new Map,this._getUpdateParametersMemoized=m(((t,e,i)=>({stationary:t,visibleProfiles:e,generationParameters:i}))),this._getGenerationParametersMemoized=m(((t,e,i,s,o,r,n)=>O(e)&&G(e)&&null!=s?{view:t,geometry:e,elevationInfo:i,options:r,queue:s,cache:o,slicePlane:n}:null)),this._getElevationInfoMemoized=m(((t,e)=>({mode:t,offset:e}))),this._getOptionsMemoized=m(((t,e,i)=>{const{densificationMaxSamples:s,maxTotalSamples:o}=V();return{geodesicDistanceThreshold:t,samplingDistance:e,densificationMaxSamples:Math.round(s/i),maxTotalSamples:o}})),this._updateThrottled=T((t=>C(this._update(t))),V().updateThrottleMillis)}initialize(){const t=this.viewModel;this.addHandles([d((()=>({visible:t.visible,profiles:t.profiles.toArray()})),(({visible:t,profiles:e})=>{this._abortUpdate(),this._paramsPerProfile.clear(),this.removeHandles(et),t&&0!==e.length&&this.addHandles([...e.map((t=>w([t.attach(this.viewModel),t.on("change",(()=>{this._invalidateProfile(t)}))]))),d((()=>this._updateParameters),this._updateThrottled,y),this._updateThrottled],et)}),y)])}destroy(){this._paramsPerProfile.clear()}get _updateParameters(){const{viewModel:t}=this,e=t.view;return this._getUpdateParametersMemoized(null==e||e.stationary,this.viewModel.visibleProfiles,this._generationParameters)}get _generationParameters(){const{view:t,input:e,queue:i,tileCache:s}=this.viewModel;return null!=t&&t.ready?this._getGenerationParametersMemoized(t,e?.geometry,this._elevationInfo,i,s,this._options,"3d"===t.type?t.slicePlane:null):null}get _elevationInfo(){const t=this.viewModel.input,e=t?D(t)?null:L(t):null;return null!=e?this._getElevationInfoMemoized(e.mode,e.offset):null}get _options(){const t=this.viewModel,e=t.visibleProfiles.length;let i=t.minDemResolution??V().defaultDemResolution;return i=parseFloat(i.toFixed(2)),this._getOptionsMemoized(t.geodesicDistanceThreshold,i,e)}async _update({stationary:t,visibleProfiles:e,generationParameters:i}){this._abortUpdate(),t&&(null!=i?this._updateTask=P((async t=>{this.viewModel.error=null;const s=e.filter((t=>!this._isProfileValid(t,i))),o=A({...i,providers:s},{signal:t});try{for await(const e of o){I(t),this._clearInvalidResults(i);for(let t=0;t<s.length;t++)s[t].result=e[t]}for(const t of s)this._paramsPerProfile.set(t,i)}catch(t){M(t),this._abortUpdate(),this.viewModel.error=t,s.forEach((t=>{t.result=null}))}})):this._clearResults())}_abortUpdate(){this._updateTask=c(this._updateTask)}_isProfileValid(t,e){return this._paramsPerProfile.has(t)&&this._paramsPerProfile.get(t)===e}_invalidateProfile(t){this._paramsPerProfile.delete(t),this._updateThrottled(this._updateParameters)}_clearInvalidResults(t){for(const e of this.viewModel.profiles.items)this._isProfileValid(e,t)||(e.result=null,this._paramsPerProfile.delete(e))}_clearResults(){for(const t of this.viewModel.profiles.items)t.result=null,this._paramsPerProfile.delete(t)}};t([_({nonNullable:!0})],it.prototype,"viewModel",void 0),t([_()],it.prototype,"_updateParameters",null),t([_()],it.prototype,"_generationParameters",null),t([_()],it.prototype,"_elevationInfo",null),t([_()],it.prototype,"_options",null),it=t([k("esri.widgets.ElevationProfile.ElevationProfileController")],it);const st={base:R,key:"type",typeMap:{ground:Q,input:W,query:Y,view:Z},errorContext:"elevation-profile-line"},ot=l.ofType(st);var rt,nt;!function(t){t.Ready="ready",t.Creating="creating",t.Reshaping="reshaping",t.ReshapingDisabled="reshaping-disabled",t.Selecting="selecting",t.Selected="selected"}(rt||(rt={})),function(t){t.View="view",t.Main="main",t.Interaction="interaction"}(nt||(nt={}));let lt=class extends i{constructor(t){super(t),this.state=rt.Ready,this._pendingStartOptions=null,this._previousInputInfo=null,this._shouldRemoveLastPoint=!1,this._sketchedGraphics=new WeakSet,this._creationToolPromise=null,this._updateToolPromise=null,this._updateDisabled=!1}initialize(){this.addHandles(d((()=>({view:this.tool.viewModel.view,visible:this.tool.visible})),(({view:t,visible:e})=>{null!=t&&e?this._attach(t):this._detach()}),y),nt.View)}destroy(){this._detach()}get canStopCreating(){const t=this._geometry,e=this._shouldRemoveLastPoint?3:2;return O(t)&&t.paths.length>0&&t.paths[0].length>=e}get _input(){return this.tool.viewModel.input}set _input(t){this.tool.viewModel.input=t}get _geometry(){return this._input?.geometry}get _visibleAndEditable(){return this.tool.visible&&this.tool.editable}get _view(){return this.tool.viewModel.view}get test(){}start(t={mode:"sketch"}){if(!this.tool.editable)return;const e=this._view;if(null!=e&&e.ready)switch(this._pendingStartOptions=null,this._stopInteraction(),null==this._previousInputInfo&&this._storePreviousInput(this._input),this._setSketchedGraphic(null),t.mode){case"sketch":this._set("state",rt.Creating),this._startCreationInteraction();break;case"select":this._set("state",rt.Selecting),this._startSelectionInteraction()}else this._pendingStartOptions=t}stop(){this._pendingStartOptions=null,this._stopInteractionAndUpdate(),this._clearPreviousInput()}cancel(){this._pendingStartOptions=null,this._stopInteractionAndUpdate(),this._restorePreviousInput()}clear(){this._stopInteractionAndUpdate(),this._set("state",rt.Ready),this._clearPreviousInput(),this._input=null,this._pendingStartOptions=null}isSketchedGraphic(t){return null!=t&&this._sketchedGraphics.has(t)}_attach(t){this._detach();const e={mode:"3d"===t.type?"relative-to-ground":"on-the-ground",offset:null};this._graphicsLayer=new J({listMode:"hide",internal:!0,elevationInfo:e});const i="2d"===t.type?new K({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[5,4],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:1.5,color:[0,0,0,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:1.5,color:[255,255,255,255]}]}}}):new X({color:[0,0,0,0]});this._sketchVM=new tt({layer:this._graphicsLayer,view:t,defaultCreateOptions:{mode:"click",hasZ:!1},updateOnGraphicClick:!1,defaultUpdateOptions:{reshapeOptions:{shapeOperation:"none"},enableRotation:!1,enableScaling:!1,enableMoveAllGraphics:!1,enableZ:!1,multipleSelectionEnabled:!1,toggleToolOnClick:!1,tool:"reshape"},polylineSymbol:i,activeLineSymbol:i}),this.addHandles([j((()=>t.ready),(()=>{const t=this._pendingStartOptions;t&&this.start(t)}),y),d((()=>[this._input,this._visibleAndEditable]),(()=>this._update()),y),d((()=>({map:t.map,graphicsLayer:this._graphicsLayer})),(({map:t,graphicsLayer:e})=>{null!=t&&null!=e&&t.add(e),this._update()}),y)],nt.Main)}_detach(){this.removeHandles(nt.Main),this._sketchVM=u(this._sketchVM),this._creationToolPromise=null,this._updateToolPromise=null;const t=this._view?.map,e=this._graphicsLayer;null!=t&&null!=e&&t.remove(e),this._graphicsLayer=u(this._graphicsLayer),this._shouldRemoveLastPoint=!1,this._set("state",rt.Ready)}_startCreationInteraction(){this._stopInteractionAndUpdate();const t=this._view,i=this._sketchVM;if(null==t||null==i)return;this._shouldRemoveLastPoint=!1;const s=i.on("create",(t=>{const e=t.graphic;switch(t.state){case"complete":this._shouldRemoveLastPoint=!1,this._setSketchedGraphic(e),this._stopInteractionAndUpdate(),this._clearPreviousInput();break;case"cancel":this.cancel();break;case"active":this._setSketchedGraphic(e),"cursor-update"===t.toolEventInfo?.type&&(this._shouldRemoveLastPoint=!0);break;case"start":this._setSketchedGraphic(e)}}));this.removeHandles(nt.Interaction),this.addHandles(U((()=>{s.remove();const t=this.canStopCreating,o=this._geometry?.clone();i.cancel(),this._creationToolPromise=null,null!=o&&t?this._shouldRemoveLastPoint&&this._setSketchedGraphic(new e({geometry:at(o)})):this._input=null})),nt.Interaction),this._creationToolPromise=C(i.create("polyline"))}_startReshapeInteraction(){this._stopInteraction();const t=this._view,e=this._sketchVM;if(null==t||null==e)return;const i=e.on("update",(t=>{const e=t.graphics[0];switch(t.state){case"complete":this._setSketchedGraphic(e),this._stopInteractionAndUpdate(),this._clearPreviousInput();break;case"active":case"start":this._setSketchedGraphic(e)}}));this.removeHandles(nt.Interaction),this.addHandles(U((()=>{i.remove(),e.cancel(),this._updateToolPromise=null})),nt.Interaction);const s=this._input;s&&(s.visible=!0,this._updateToolPromise=C(e.update(s,{tool:"reshape"})))}_startSelectionInteraction(){this._stopInteraction();const t=this._view;if(null==t)return;const e=t.cursor,i=U((()=>t.cursor=e));t.cursor="crosshair",t.closePopup();let s=null;const o=U((()=>c(s))),r=t.on("immediate-click",(e=>{e.async((async()=>{c(s),s=P((async i=>{const{results:s}=await t.hitTest(e);I(i);const o=s.filter((t=>"graphic"===t.type)).map((t=>t.graphic)).find((t=>null!=t.geometry&&"polyline"===t.geometry.type));o&&(e.preventDefault(),e.stopPropagation(),this._input=o,this._clearPreviousInput(),this._stopInteractionAndUpdate())})),await s.promise}))}),$.TOOL),n=t.on("key-down",(t=>{"Escape"===t.key&&this.cancel()}));this.removeHandles(nt.Interaction),this.addHandles([r,n,o,i],nt.Interaction),t.ready&&t.focus()}_stopInteraction(){this.removeHandles(nt.Interaction)}_stopInteractionAndUpdate(){this.hasHandles(nt.Interaction)&&(this._updateDisabled=!0,this._stopInteraction(),this._updateDisabled=!1,this._triggerUpdate())}_triggerUpdate(){this._set("state",rt.Ready),this._update()}_update(){if(this._updateDisabled)return;const t=this.state;if(t!==rt.Selecting){if(this._visibleAndEditable){if(t===rt.Creating||t===rt.Reshaping&&this.isSketchedGraphic(this._input))return}else this.cancel();this._set("state",this._getNextState()),this._updateVisuals()}else this.stop()}_getNextState(){return null==this._input?rt.Ready:this.isSketchedGraphic(this._input)?this.state===rt.Creating?rt.Creating:this._visibleAndEditable?rt.Reshaping:rt.ReshapingDisabled:rt.Selected}_updateVisuals(){switch(this.state){case rt.Creating:break;case rt.Reshaping:this._startReshapeInteraction();break;case rt.ReshapingDisabled:{this._stopInteractionAndUpdate();const t=this._input;null!=t&&this.isSketchedGraphic(t)&&(t.visible=!1);break}case rt.Ready:case rt.Selected:this._stopInteractionAndUpdate();case rt.Selecting:}this._updateSketchedGraphic()}_storePreviousInput(t){this._previousInputInfo={graphic:t}}_restorePreviousInput(){const t=this._previousInputInfo;null!=t&&(this._clearPreviousInput(),this._input=t.graphic,this._triggerUpdate())}_clearPreviousInput(){this._previousInputInfo=null}_updateSketchedGraphic(){const t=this._graphicsLayer;if(null==t)return;const e=t.graphics,i=this._input;if(null!=i&&this.isSketchedGraphic(i)){if(-1===e.indexOf(i))e.removeAll(),e.add(i);else if(1!==e.length){const t=e.filter((t=>t!==i));e.removeMany(t)}}else e.removeAll()}_setSketchedGraphic(t){null!=t&&this._sketchedGraphics.add(t),this._input=t,this._updateSketchedGraphic()}};function at(t){if(O(t)){const e=t.clone();return e.paths=[e.paths[0].slice(0,-1)],e}return t}t([_({nonNullable:!0})],lt.prototype,"state",void 0),t([_({nonNullable:!0})],lt.prototype,"tool",void 0),t([_()],lt.prototype,"canStopCreating",null),t([_()],lt.prototype,"_graphicsLayer",void 0),t([_()],lt.prototype,"_sketchVM",void 0),t([_()],lt.prototype,"_input",null),t([_()],lt.prototype,"_geometry",null),t([_()],lt.prototype,"_visibleAndEditable",null),t([_()],lt.prototype,"_view",null),t([_()],lt.prototype,"_shouldRemoveLastPoint",void 0),lt=t([k("esri.widgets.ElevationProfile.ElevationProfileInteraction")],lt);let pt=class extends i{constructor(t){super(t),this._implementation=null,this._loadingTask=null}initialize(){this.addHandles(d((()=>({tool:this.tool,view:this.tool.viewModel.view,visible:this.tool.visible&&!!this.tool.viewModel.view?.ready})),(({tool:t,view:e,visible:i})=>{null!=e&&i?this._show(e,t):this._hide()}),y))}destroy(){this._hide()}_show(t,e){this._loadingTask=c(this._loadingTask),this._loadingTask=P((async i=>{if("2d"===t.type){const s=import("../../chunks/ElevationProfileView2D.js"),o=(await E(s,i)).ElevationProfileView2D;this._implementation=new o(t,e)}else if("3d"===t.type){const s=import("../../chunks/ElevationProfileView3D.js"),o=(await E(s,i)).ElevationProfileView3D;this._implementation=new o(t,e)}}))}_hide(){this._loadingTask=c(this._loadingTask),this._implementation=u(this._implementation)}};t([_()],pt.prototype,"tool",void 0),pt=t([k("esri.widgets.ElevationProfile.support.ElevationProfileView")],pt);let ht=class extends i{constructor(t){super(t),this.editable=!0,this.visible=!0,this.highlightEnabled=!0}initialize(){this.view=new pt({tool:this}),this.interaction=new lt({tool:this})}destroy(){this.interaction.destroy(),this.view.destroy()}get state(){const t=this.interaction?.state;switch(t){case rt.Ready:return x.Ready;case rt.Creating:return x.Creating;case rt.Selecting:return x.Selecting;case rt.Selected:return x.Selected;case rt.Reshaping:case rt.ReshapingDisabled:return x.Created}}};t([_({nonNullable:!0})],ht.prototype,"viewModel",void 0),t([_()],ht.prototype,"view",void 0),t([_()],ht.prototype,"interaction",void 0),t([_()],ht.prototype,"editable",void 0),t([_()],ht.prototype,"visible",void 0),t([_()],ht.prototype,"highlightEnabled",void 0),ht=t([k("esri.widgets.ElevationProfile.ElevationProfileTool")],ht);let ct=class extends i{constructor(t){super(t),this.view=null,this.input=null,this._getEffectiveUnitsMemoized=m(((t,e)=>({distance:t,elevation:e}))),this.hoveredChartPosition=null,this.uniformChartScaling=!1,this.defaultUnit=null,this.queue=null,this._currentTileCache=null,this.error=null,this._defaultProfileLineGround=new Q,this._userUnitOptions=null,this._userUnit=null,t?.profiles||(this.profiles=new l([this._defaultProfileLineGround]))}initialize(){this.addHandles(d((()=>this.view),(t=>{if(null==t)return void p.getLogger(this).warnOnce("no view. Widget will be disabled until a view is provided.");this.removeHandles(ut);const e="3d"===t.type?t.resourceController:void 0;this.queue?.destroy(),this.queue=F(e?.scheduler);const i=e?.addUpdatingObject(this);i&&this.addHandles(i,ut)}),y)),this.tool=new ht({viewModel:this}),this._controller=new it({viewModel:this})}destroy(){this._defaultProfileLineGround=u(this._defaultProfileLineGround),this._controller=u(this._controller),this._currentTileCache=u(this._currentTileCache),this.tool=u(this.tool),this.queue=u(this.queue)}get profiles(){return this._get("profiles")}set profiles(t){const e=this._get("profiles"),i=t??new l;this._set("profiles",a(i,e))}get state(){const t=this.view;return null!=t&&t.ready?this.tool.state:x.Disabled}get progress(){let t=0,e=0;for(const i of this.visibleProfiles)t++,e+=i.progress;return t>0?e/t:0}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null,this.notifyChange("unit")}get unit(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}get effectiveUnits(){const t=z(this.visibleProfiles.map((t=>t.result))),e=g(t.maxDistance,"meters",this.unit),i=f(t.maxElevation,"meters",this.unit);return this._getEffectiveUnitsMemoized(e,i)}get geodesicDistanceThreshold(){return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(t){s(p.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",t)}get highlightEnabled(){return this.tool.highlightEnabled}set highlightEnabled(t){this.tool.highlightEnabled=t}get hasVertices(){const t=this.input?.geometry;return O(t)&&t.paths.reduce(((t,e)=>t+e.length),0)>0}get hoveredPoints(){return null!=this.input&&this.visible&&this.tool.editable?this.visibleProfiles.map((t=>{const e=t.hoveredPoint;return null!=e?{hoveredPoint:e,color:t.color}:null})).filter(o):[]}get statistics(){return H(this.visibleProfiles.map((t=>t.statistics)))}get chartData(){if(null==this.input)return null;const{effectiveUnits:t,progress:e,statistics:i,visibleProfiles:s,uniformChartScaling:o}=this,r=s.filter((t=>t.hasZ)).map((t=>({id:t.id,type:t.type,title:t.title,color:t.color,samples:t.samples,progress:t.progress,chartFillEnabled:t.chartFillEnabled,chartStrokeWidth:t.chartStrokeWidth,chartStrokeOffsetY:t.chartStrokeOffsetY,viewVisualizationEnabled:t.viewVisualizationEnabled})));return 0===r.length?null:{lines:r,effectiveUnits:t,statistics:i,refined:1===e,dynamicElevationRange:s.some((t=>"view"===t.type)),uniformScaling:o}}get visibleProfiles(){return this.profiles.toArray().filter((t=>t.available&&t.visible))}get minDemResolutions(){const t=[];for(const{minDemResolution:e}of this.visibleProfiles)null!=e&&t.push(e);return t}get minDemResolution(){return r(this.minDemResolutions)}get errorState(){const t=this.input?.geometry;if(!G(t))return B.NoValidInput;if(null!=this.error){if(N(this.error))switch(this.error.cause){case q.TooComplex:return B.TooComplex;case q.InvalidGeometry:return B.InvalidGeometry;case q.InvalidElevationInfo:return B.InvalidElevationInfo;case q.ElevationQueryError:return B.NoValidInput}return B.UnknownError}return 0===this.visibleProfiles.length?B.NoVisibleProfiles:null==this.chartData&&1===this.progress?B.RefinedButNoChartData:B.None}get tileCache(){this._currentTileCache=u(this._currentTileCache);const t=this.view;if(null!=t&&"3d"===t?.type){const e=t.basemapTerrain?.elevationQueryCache;if(null!=e)return e}return null==this._currentTileCache&&(this._currentTileCache=new b(new h(20*n.MEGABYTES))),this._currentTileCache}get visible(){return this.tool.visible}set visible(t){this.tool.visible=t}get selectAvailable(){for(const t of this.view?.map?.allLayers??[]){if("graphics"===t.type&&!t.internal&&t.graphics.some((t=>"polyline"===t.geometry?.type)))return!0;if("geometryType"in t&&"polyline"===t.geometryType)return!0}return!!this.view?.graphics?.some((t=>"polyline"===t.geometry?.type))}get inputIsSketched(){return this.tool.interaction.isSketchedGraphic(this.input)}get elevationProvider(){const t=this.view;return null!=t&&"3d"===t.type?t.elevationProvider:null}get updating(){const{progress:t}=this,e=!!this.queue?.updating;return t>0&&t<1||e}start(t){this.tool.interaction.start(t)}stop(){this.tool.interaction.stop()}cancel(){this.tool.interaction.cancel()}clear(){this.tool.interaction.clear()}_findSelectableUnit(t,e){const i=this.unitOptions;return null!=t&&i.includes(t)?t:e?this._findSelectableUnit(e):i[0]}_filteredOrAllUnits(t){const e=(null!=t?t:[]).filter((t=>v.includes(t)));return 0===e.length?v.slice():e}};t([_()],ct.prototype,"view",void 0),t([_({type:e})],ct.prototype,"input",void 0),t([_({type:ot,nonNullable:!0})],ct.prototype,"profiles",null),t([_({readOnly:!0})],ct.prototype,"state",null),t([_({readOnly:!0})],ct.prototype,"progress",null),t([_()],ct.prototype,"unitOptions",null),t([_()],ct.prototype,"unit",null),t([_({readOnly:!0})],ct.prototype,"effectiveUnits",null),t([_()],ct.prototype,"geodesicDistanceThreshold",null),t([_()],ct.prototype,"hoveredChartPosition",void 0),t([_()],ct.prototype,"uniformChartScaling",void 0),t([_()],ct.prototype,"highlightEnabled",null),t([_({readOnly:!0})],ct.prototype,"hoveredPoints",null),t([_({readOnly:!0})],ct.prototype,"statistics",null),t([_()],ct.prototype,"chartData",null),t([_()],ct.prototype,"visibleProfiles",null),t([_()],ct.prototype,"minDemResolutions",null),t([_({readOnly:!0})],ct.prototype,"minDemResolution",null),t([_({readOnly:!0})],ct.prototype,"errorState",null),t([_(S)],ct.prototype,"defaultUnit",void 0),t([_()],ct.prototype,"queue",void 0),t([_()],ct.prototype,"tileCache",null),t([_()],ct.prototype,"tool",void 0),t([_()],ct.prototype,"visible",null),t([_()],ct.prototype,"error",void 0),t([_()],ct.prototype,"selectAvailable",null),t([_()],ct.prototype,"inputIsSketched",null),t([_()],ct.prototype,"elevationProvider",null),t([_()],ct.prototype,"updating",null),t([_()],ct.prototype,"_defaultProfileLineGround",void 0),t([_()],ct.prototype,"_userUnitOptions",void 0),t([_()],ct.prototype,"_controller",void 0),t([_()],ct.prototype,"_userUnit",void 0),ct=t([k("esri.widgets.ElevationProfile.ElevationProfileViewModel")],ct);const ut=Symbol("updating-object"),mt=ct;export{mt as default};
