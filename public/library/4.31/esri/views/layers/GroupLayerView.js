// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/collectionUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./LayerView".split(" "),function(e,l,h,d,f,c,p,q,m,n){c=class extends n{constructor(a){super(a);this.type="group";this.layerViews=new l}destroy(){this.layerViews.length=0}_allLayerViewVisibility(a){this.layerViews.forEach(b=>{b.visible=a})}initialize(){this.addHandles([this.layerViews.on("change",
a=>this._layerViewsChangeHandler(a)),d.watch(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},d.sync),d.watch(()=>this.visible,a=>{this._applyVisibility(()=>this._allLayerViewVisibility(a),()=>{})},d.sync)],"grouplayerview");this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??
!1}set layerViews(a){this._set("layerViews",h.referenceSetter(a,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce((a,b)=>a+b.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(a=>a.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(a=>a._isOverridden("visible"))}_findLayerViewForLayer(a){return a&&this.layerViews.find(b=>b.layer===a)}_firstVisibleOnLayerOrder(){const a=
this.layer.layers.find(b=>!!this._findLayerViewForLayer(b)?.visible);return a&&this._findLayerViewForLayer(a)}_applyExclusiveVisibility(a){null==a&&(a=this._firstVisibleOnLayerOrder(),null==a&&0<this.layerViews.length&&(a=this._findLayerViewForLayer(this.layer.layers.at(0))));this.layerViews.forEach(b=>{b.visible=b===a})}_layerViewsChangeHandler(a){this.removeHandles("grouplayerview:visible");this.addHandles(this.layerViews.map(g=>d.watch(()=>g.visible,k=>this._applyVisibility(()=>{k!==this.visible&&
(g.visible=this.visible)},()=>this._applyExclusiveVisibility(k?g:null)),d.sync)).toArray(),"grouplayerview:visible");const b=a.added[a.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(b?.visible?b:null))}_applyVisibility(a,b){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?a():"exclusive"===this.layer?.visibilityMode&&b())}};e.__decorate([f.property({readOnly:!0})],c.prototype,"creatingLayerViews",
null);e.__decorate([f.property({cast:h.castForReferenceSetter})],c.prototype,"layerViews",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"updatingProgress",null);e.__decorate([f.property()],c.prototype,"view",void 0);return c=e.__decorate([m.subclass("esri.views.layers.GroupLayerView")],c)});