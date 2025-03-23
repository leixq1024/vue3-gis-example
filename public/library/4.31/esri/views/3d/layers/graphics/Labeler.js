// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/asyncUtils ../../../../core/has ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../layers/graphics/hydratedFeatures ../../../../layers/support/labelFormatUtils ../../../../symbols/callouts/calloutUtils ./enums ./Graphics3DCalloutSymbolLayerFactory ./Graphics3DLineCalloutSymbolLayer ./graphicSymbolUtils ./LabelParameters ./labelPlacement ./placementUtils ../../../../geometry/support/Indices ./pipeline/rendering/FeaturePipelineRenderManager ../../webgl-engine/lib/BoundingInfo ../../webgl-engine/lib/VertexAttribute ../../../ViewingMode ../../support/buffer/InterleavedLayout ../../webgl-engine/core/shaderLibrary/ShaderOutput ../../webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../../webgl-engine/core/shaderLibrary/output/Emissions.glsl ../../webgl-engine/core/shaderLibrary/shading/Normals.glsl ../../webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/core/shaderModules/interfaces ../../webgl-engine/lib/Material ../../webgl-engine/lib/OrderIndependentTransparency ../../webgl-engine/lib/RayIntersections ../../webgl-engine/lib/RenderSlot ../../webgl-engine/lib/verticalOffsetUtils ../../../../geometry/support/buffer/BufferView ../../../../core/mathUtils ../../../../chunks/boundedPlane ../../../../geometry/support/Axis ../../../../geometry/support/ray ../../../../geometry/support/vectorStacks ../../webgl-engine/core/shaderTechnique/BindType ../../webgl-engine/lib/DefaultVertexAttributeLocations ../../../../core/HeapSort ../../../webgl/checkWebGLError ../../../webgl/enums ../../../webgl/renderState ../../webgl-engine/lib/OITPass ../../webgl-engine/lib/StencilUtils ../support/symbolColorUtils ../../webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../support/FastSymbolUpdates ../../webgl-engine/effects/ssao/SSAO ../../webgl-engine/core/shaderModules/ShaderBuilder ../../webgl-engine/shaders/DefaultMaterialTechniqueConfiguration ../../webgl-engine/lib/MaterialCollection ../../webgl-engine/lib/TextRenderer ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTextureAtlas ../../webgl-engine/lib/WebGLLayer ../../../support/Scheduler ../../../support/Yield".split(" "),
function(p,t,K,B,ba,C,v,q,D,w,ca,L,M,N,O,P,n,Q,E,R,S,A,x,da,ea,fa,y,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja,Ka,La,Ma,Na,Oa,F,T,U,G,V,W,X){function Y(a,b){a.geometries[0].setAttributeData(y.VertexAttribute.SIZE,[b.displayWidth,b.displayHeight]);a.geometryVertexAttributeUpdated(a.geometries[0],y.VertexAttribute.SIZE)}function u(a){return!0===a.labelsVisible&&!!a.labelingInfo?.some(b=>!!b.symbol)}class H{constructor(a,b){this.labelingContext=a;this.graphics3DGraphic=
b;this.visible=this.hasGraphics3DResources=!1;this.textureAtlasHandles=[];this.textInitialized=!1;this.textRenderers=[];this.textLabelPlacements=[]}}class Z{constructor(a,b,c,e,d){this.labelClass=a;this.graphics3DSymbol=b;this.graphics3DCalloutSymbolLayer=c;this.textRenderParameters=e;this.labelFunction=d;this.calloutSymbolLayerIndex=0}}class aa{constructor(a,b,c,e,d,k,f,g){this.layer=b;this.graphics3DCore=c;this.scaleVisibility=e;this.emptySymbolLabelSupported=d;this.elevationInfoOverride=k;this.disablePlacement=
f;this.active=g;this.labelClassAbortController=new AbortController;this.labelClassContexts=[];this.graphics=new Map;this.labelsToInitialize=new Map;this.stageLayer=new V.WebGLLayer(a,{pickable:!0,disableOctree:!0},b.uid)}destroy(){this.stageLayer.destroy()}}p.Labeler=class extends K{constructor(a){super(a);this._dirty=!1;this._labels=new Map;this._labelingContexts=[]}setup(){this.dispose();this.addHandles([D.watch(()=>this.view.state?.camera,()=>this.setDirty()),D.watch(()=>this.view.state?.rasterPixelRatio,
()=>this._resetAllLabels()),this.view.resourceController.scheduler.registerTask(W.TaskPriority.LABELER,this)]);this._textTextureAtlas=new G.TextTextureAtlas({view:this.view});this._hudMaterialCollection=new F.MaterialCollection(this.view._stage);this._calloutMaterialCollection=new F.MaterialCollection(this.view._stage)}dispose(){this.removeAllHandles();this._textTextureAtlas=v.disposeMaybe(this._textTextureAtlas);this._hudMaterialCollection=v.disposeMaybe(this._hudMaterialCollection);this._calloutMaterialCollection=
v.disposeMaybe(this._calloutMaterialCollection);this._labelingContexts.length=0;this._labels.clear()}destroy(){this.dispose();l.graphic=null;l.renderingInfo=null;l.layer=null}_activateLabelingContext(a){a.graphics.forEach((b,c)=>{const e=new H(a,b);this._labels.set(c,e);a.labelsToInitialize.set(c,e);b.setVisibilityFlag(n.VisibilityGroup.LABEL,n.VisibilityFlag.USER,!0)});a.active=!0}_deactivateLabelingContext(a){a.graphics.forEach((b,c)=>{b.setVisibilityFlag(n.VisibilityGroup.LABEL,n.VisibilityFlag.USER,
!1);this.setLabelGraphicVisibility(b,!1);b.clearLabelGraphics();this._labels.delete(c)});a.active=!1}_addLabelTextureToAtlas(a){for(const b of a.graphics3DGraphic.labelLayers){if(!b._labelClass)continue;const c=a.textRenderers[b._labelIndex];c&&(a.textureAtlasHandles.push(this._textTextureAtlas.addText(c,e=>{var d=b.stageObject;d.geometries[0].setAttributeData(y.VertexAttribute.UV0,e);d.geometryVertexAttributeUpdated(d.geometries[0],y.VertexAttribute.UV0,!0)})),Y(b.stageObject,c))}}_removeLabelTextureFromAtlas(a){a.textureAtlasHandles.forEach(b=>
b.remove());a.textureAtlasHandles.length=0}get running(){return this.view.ready&&(this._dirty||this.deconflictor.running)}runTask(a){this._updateLabels(a);!this._dirty&&this.deconflictor.running&&this.deconflictor.runTask(a);return X.Yield}_updateLabels(a){if(this._dirty){this._dirty=!1;for(const c of this._labelingContexts)if(c.active)if(c.labelClassPromise&&c.labelClassAbortController)this._dirty=!0;else{var b=c.labelClassContexts;if(b&&0!==b.length)for(const [e,d]of c.labelsToInitialize){this._ensureGraphics3DResources(d)&&
(this._labels.set(e,d),this.deconflictor.setDirty(),a.madeProgress());if(d.visible&&d.textInitialized||!d.visible&&d.hasGraphics3DResources)c.labelsToInitialize.delete(e),a.madeProgress();if(a.done){this._dirty=!0;break}}else null===c.labelClassContexts?this._deactivateLabelingContext(c):(this._createLabelClassContext(c),this._dirty=!0)}this._dirty||this.notifyChange("updating")}}async _createLabelClassContextAsync(a){const b=a.labelClassAbortController?.signal;a.layer.when&&await a.layer.when();
q.throwIfAborted(b);a.scaleVisibility?.updateScaleRangeActive();const c=a.graphics3DCore,e=c.layer.labelingInfo?.filter(d=>!!d.symbol);e&&0!==e.length&&(await B.forEach(e,async(d,k)=>{var f=d.symbol;const g=R.getGraphics3DSymbol(c.getOrCreateGraphics3DSymbol(f));if(null==g)C.getLogger(this).error("Failed to create Graphics3DSymbol for label");else{await g.load();q.throwIfAborted(b);var h=null;P.hasCalloutSupport(f)&&f.hasVisibleCallout()&&(h=Q.make(f,c.symbolCreationContext),await h.load(),q.throwIfAborted(b));
f=await B.result(O.createLabelFunction(d,a.layer.fieldsIndex,this.view.spatialReference));q.throwIfAborted(b);if(!0===f.ok){const m=await this._createTextRenderParameters(g.symbol);q.throwIfAborted(b);a.labelClassContexts[k]=new Z(d,g,h,m,f.value)}else C.getLogger(this).error(`Label expression failed to evaluate: ${f.error}`)}}),q.throwIfAborted(b))}async _createLabelClassContext(a){null==a.labelClassPromise&&(a.labelClassPromise=this._createLabelClassContextAsync(a).catch(b=>{if(q.isAbortError(b))throw b;
a.labelClassContexts.length=0}).then(()=>{a.labelClassAbortController=null;this.notifyChange("updating")}).catch(()=>{}),this.notifyChange("updating"));return a.labelClassPromise}async _createTextRenderParameters(a){a=a.symbolLayers.at(0);return"text"!==a?.type?null:U.TextRenderParameters.fromSymbol(a,this.view.state.rasterPixelRatio)}_destroyLabelClassContext(a){for(var b of a.labelClassContexts)--b.graphics3DSymbol.referenced;b=a.labelClassAbortController;a.labelClassAbortController=new AbortController;
v.abortMaybe(b);a.labelClassContexts.length=0;a.labelClassPromise=null;this.notifyChange("updating")}_createTextSymbolGraphic(a,b,c,e,d,k){a=new S.LabelParameters(c,x.horizontalPlacementFromAnchor(c.anchor),x.verticalPlacementFromAnchor(c.anchor),a.text,M.fromValues(a.displayWidth,a.displayHeight));l.graphic=b;l.renderingInfo=null;l.layer=e;return d.createLabel(l,a,this._hudMaterialCollection,this._textTextureAtlas,()=>{const f=A.getLabelPlacement(k);return f?f.elevationOffset:null})}_createLineCalloutGraphic(a,
b,c,e,d){l.graphic=a;l.layer=d;l.renderingInfo=new E.LineCalloutSymbolLayerRenderingInfo(null,b,e.translation,e.centerOffset,e.screenOffset[0],e.centerOffsetUnits,e.elevationOffset,this._calloutMaterialCollection);return c.createGraphics3DGraphic(l)}_ensureGraphics3DResources(a){if(a.hasGraphics3DResources)return!1;const b=a.graphics3DGraphic;if(b.destroyed)return!1;this._ensureTextTextureResources(a);const c=a.labelingContext,e=c.labelClassContexts;if(!e||0===e.length||!c.emptySymbolLabelSupported&&
0===b.layers.length)return!1;var d=!1,k=b.graphic;const f=c.layer;var g=u(c.layer);for(let m=0;m<e.length;m++){const I=a.textRenderers[m],z=a.textLabelPlacements[m];if(null==I||null==z)continue;const r=e[m];var h=r.graphics3DSymbol;const J=h.symbol&&"label-3d"===h.symbol.type?h.symbol:null;if(h=h.symbolLayers[0]){h.setElevationInfoOverride(c.elevationInfoOverride);d=new A.LabelInfo(b,J,r.labelClass);d=this._createTextSymbolGraphic(I,k,z,f,h,d);if(null==d)return!1;d._labelClass=r.labelClass;d._labelIndex=
m;b.addLabelGraphic(d,c.stageLayer);b.deconflictionPriority=r.textRenderParameters?.definition.size??0;b.setVisibilityFlag(n.VisibilityGroup.LABEL,n.VisibilityFlag.USER,g);b.setVisibilityFlag(n.VisibilityGroup.LABEL,n.VisibilityFlag.SCALE_RANGE,!0);b.setVisibilityFlag(n.VisibilityGroup.LABEL,n.VisibilityFlag.DECONFLICTION,!1);d=!0;(g=r.graphics3DCalloutSymbolLayer)&&z.hasLabelVerticalOffset&&(g.setElevationInfoOverride(c.elevationInfoOverride),k=this._createLineCalloutGraphic(k,J,g,z,f),null!=k&&
(r.calloutSymbolLayerIndex=b.labelLayers.length,b.addLabelGraphic(k,c.stageLayer)));break}}d&&c.scaleVisibility?.updateGraphicLabelScaleVisibility(b);return a.hasGraphics3DResources=!0}_destroyGraphics3DResources(a){const b=a.labelingContext.labelClassContexts;for(const c of a.graphics3DGraphic.labelLayers)if(null!=c._labelClass)b[c._labelIndex].graphics3DSymbol.symbolLayers[0]?.onRemoveGraphic(c);a.graphics3DGraphic.deconflictionPriority=0;a.graphics3DGraphic.clearLabelGraphics();a.hasGraphics3DResources=
!1}_ensureTextTextureResources(a){if(!a.textInitialized){var b=a.labelingContext,c=b.labelClassContexts;if(c&&0!==c.length){var e=a.graphics3DGraphic.graphic;for(let f=0;f<c.length;f++){const g=c[f];a.textRenderers[f]=null;a.textLabelPlacements[f]=null;if(null==g?.textRenderParameters)continue;var d=g.labelFunction;let h;if("arcade"===d.type)try{const m=d.needsHydrationToEvaluate()?N.hydrateGraphic(e,b.layer):e;h=d.evaluate(m)}catch(m){h=null}else h=d.evaluate(e);if(null!=h&&""!==h&&!/^\s+$/.test(h)&&
(d=g.graphics3DSymbol,d.symbolLayers[0]&&(d=A.getLabelPlacement({graphics3DGraphic:a.graphics3DGraphic,labelSymbol:"label-3d"===d.symbol?.type?d.symbol:null,labelClass:g.labelClass,disablePlacement:b.disablePlacement}),null!=d))){var k=x.horizontalPlacementFromAnchor(d.anchor);k=x.textRenderAlignmentFromHorizontalPlacement(k);a.textRenderers[f]=new T.TextRenderer(h,k,g.textRenderParameters,G.TextTextureAtlas.maxSize);a.textLabelPlacements[f]=d}}a.textInitialized=!0}}}_destroyTextTextureResources(a){a.textInitialized=
!1;a.textRenderers.length=0;a.textLabelPlacements.length=0}_addGraphic(a,b){const c=b.graphic.uid;a.graphics.set(c,b);a.active&&(b=new H(a,b),this._labels.set(c,b),a.labelsToInitialize.set(c,b));this.setDirty();this.deconflictor.setDirty()}_updateGraphicGeometry(a,b){const c=this._labels.get(b.graphic.uid);if(!c)return!0;for(const e of c.graphics3DGraphic.labelLayers)if(null!=e._labelClass&&!a.labelClassContexts[e._labelIndex].graphics3DSymbol.symbolLayers[0].updateGeometry(e,b.graphic.geometry))return!1;
this.setDirty();this.deconflictor.setDirty();return!0}_removeGraphic(a,b){b=b.graphic.uid;const c=this._labels.get(b);a.graphics.delete(b);c&&(this._destroyGraphic(c,b),a.labelsToInitialize.delete(b),this.setDirty(),this.deconflictor.setDirty())}_destroyGraphic(a,b){this._labels.delete(b);a.textureAtlasHandles.length&&this._removeLabelTextureFromAtlas(a);this._destroyTextTextureResources(a);a.hasGraphics3DResources&&this._destroyGraphics3DResources(a)}async _labelingInfoChange(a,b){if(b)for(const c of b){if(b=
a.graphics.get(c))this._removeGraphic(a,b),this._addGraphic(a,b)}else return this._visibilityInfoChange(a),this._resetLabels(a),this._createLabelClassContext(a)}_globalPropertyChanged(a,b){for(const c of b.labelClassContexts){const e=new Map;b.graphics.forEach(d=>e.set(d.graphic.uid,d));c.graphics3DSymbol.symbolLayers[0].globalPropertyChanged(a,e,d=>d.labelLayers[0]);c.graphics3DCalloutSymbolLayer&&c.graphics3DCalloutSymbolLayer.globalPropertyChanged(a,e,d=>d.labelLayers[c.calloutSymbolLayerIndex])}}_visibilityInfoChange(a){const b=
u(a.layer);b&&!a.active&&this._activateLabelingContext(a);!b&&a.active&&this._deactivateLabelingContext(a);this.setDirty()}_resetAllLabels(){for(const a of this._labelingContexts)this._resetLabels(a)}_resetLabels(a){a.graphics.forEach((b,c)=>{if(b=this._labels.get(c))this._destroyGraphic(b,c),b.visible=!1,a.labelsToInitialize.set(c,b)});this._destroyLabelClassContext(a);this.setDirty();this.deconflictor.setDirty()}_findLabelingContext(a){for(const b of this._labelingContexts)if(b.graphics3DCore===
a)return b;return null}addGraphicsOwner(a,b,c){const e=c?.emptySymbolLabelSupported||!1,d=c?.elevationInfoOverride||null;c=c?.disablePlacement||null;if(!this._findLabelingContext(a)){var k=a.layer,f=new aa(this.view._stage,k,a,b,e,d,c,u(k));this._labelingContexts.push(f);this.setDirty();return{addGraphic:g=>this._addGraphic(f,g),removeGraphic:g=>this._removeGraphic(f,g),updateGraphicGeometry:g=>this._updateGraphicGeometry(f,g),layerLabelsEnabled:()=>u(f.layer),labelingInfoChange:g=>this._labelingInfoChange(f,
g),elevationInfoChange:()=>this._globalPropertyChanged("elevationInfo",f),slicePlaneEnabledChange:()=>this._globalPropertyChanged("slicePlaneEnabled",f),visibilityInfoChange:()=>this._visibilityInfoChange(f),reset:()=>this._resetLabels(f),remove:()=>this._removeGraphicsOwner(a),setDirty:()=>this.setDirty()}}}_removeGraphicsOwner(a){const b=this._findLabelingContext(a);b&&(a=this._labelingContexts.indexOf(b),this._labelingContexts.splice(a,1),b.graphics.forEach(c=>this._removeGraphic(b,c)),b.destroy(),
this.setDirty())}setLabelGraphicVisibility(a,b){a=a.graphic.uid;const c=this._labels.get(a);c&&c.visible!==b&&(b&&!c.textureAtlasHandles.length?(this._addLabelTextureToAtlas(c),c.textInitialized||c.labelingContext.labelsToInitialize.set(a,c)):!b&&c.textureAtlasHandles.length&&this._removeLabelTextureFromAtlas(c),c.visible=b,this.setDirty())}setDirty(){!this._dirty&&0<this._labelingContexts.length&&(this._dirty=!0,this.notifyChange("updating"))}get updating(){return this._dirty||this._textTextureAtlas?.updating||
this.deconflictor.updating||this._labelingContexts.some(a=>!!a.labelClassPromise&&!!a.labelClassAbortController)}get updatingProgress(){if(!this.updating||!this._textTextureAtlas)return 1;const a=0<this._labelingContexts.length?this._labelingContexts.reduce((b,c)=>b+(c.labelClassPromise&&c.labelClassAbortController?0:1),0)/this._labelingContexts.length:1;return(this._dirty?0:.3)+(this._textTextureAtlas.updating?0:.1)+.1*a+.5*this.deconflictor.updatingProgress}get test(){}};t.__decorate([w.property({constructOnly:!0})],
p.Labeler.prototype,"view",void 0);t.__decorate([w.property({constructOnly:!0})],p.Labeler.prototype,"deconflictor",void 0);t.__decorate([w.property()],p.Labeler.prototype,"_textTextureAtlas",void 0);t.__decorate([w.property({type:Boolean,readOnly:!0})],p.Labeler.prototype,"updating",null);p.Labeler=t.__decorate([L.subclass("esri.views.3d.layers.graphics.Labeler")],p.Labeler);const l=new E.LineCalloutCreationContext(null,null,null);p.areLabelsVisible=u;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});