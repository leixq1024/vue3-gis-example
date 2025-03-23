// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../linkChart/utils ./ListItem ./support/layerListUtils".split(" "),function(g,e,v,f,k,x,y,z,w,n,p,m){const q=e.ofType(p);e=class extends v.EventedAccessor{constructor(a){super(a);this.checkPublishStatusEnabled=!1;this.listItemCreatedFunction=null;this.listModeDisabled=
!1;this.operationalItems=new q;this.view=null}initialize(){this.addHandles([f.watch(()=>!0===this.view?.ready,()=>this._viewHandles(),f.initial),f.watch(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled],()=>this._recompileList()),f.watch(()=>n.isLinkChartView(this.view)?this.view.inGeographicLayout:null,()=>this._compileList())],"view")}destroy(){this._removeAllItems();this.view=null}get state(){const {view:a}=this;return a?.ready?"ready":a?"loading":"disabled"}get totalItems(){return this.operationalItems.flatten(a=>
a.children).length}triggerAction(a,b){a&&!a.disabled&&this.emit("trigger-action",{action:a,item:b})}moveListItem(a,b,c,d){const h=a?.layer;if(h&&"subtype-sublayer"!==h.type&&"sublayer"!==h.type){var l=this.view?.map?.layers,r=b?m.getItemLayers(b):l;l=c?m.getItemLayers(c):l;if(r&&l){var {operationalItems:t}=this,u=c?.children||t;d=l.length-d;a.parent=c||null;(b?.children||t).remove(a);r.remove(h);u.includes(a)||u.add(a,d);l.includes(h)||l.add(h,d);this._compileList()}}}_createLayerViewHandles(a){this.removeHandles("layer-views");
this._compileList();a&&this.addHandles(a.on("change",()=>this._compileList()),"layer-views")}_createMapLayerHandles(a){this.removeHandles("map-layers");this._compileList();a&&this.addHandles(a.on("change",()=>this._compileList()),"map-layers")}_createListItem(a){const {view:b,listItemCreatedFunction:c,checkPublishStatusEnabled:d,listModeDisabled:h}=this;return new p({checkPublishStatusEnabled:d,listModeDisabled:h,layer:a,listItemCreatedFunction:c,view:b})}_removeAllItems(){this.operationalItems.destroyAll()}_getViewableLayers(a){return a?
this.listModeDisabled?a:a.filter(b=>"hide"!==m.findLayerListMode(b)):void 0}_watchLayersListMode(a){this.removeHandles("layer-list-mode");a&&!this.listModeDisabled&&this.addHandles(f.watch(()=>a.filter(b=>"listMode"in b).map(b=>b.listMode).toArray(),()=>this._compileList()),"layer-list-mode")}_compileList(){var a=this.view?.map?.layers;a=n.isLinkChartView(this.view)&&!this.view.inGeographicLayout?a?.filter(({type:b})=>"link-chart"===b):a;this._watchLayersListMode(a);a=this._getViewableLayers(a);a?.length?
(this._createNewItems(a),this._removeItems(a),this._sortItems(a)):this._removeAllItems()}_createNewItems(a){const {operationalItems:b}=this;a.forEach(c=>{b.some(d=>d.layer===c)||b.add(this._createListItem(c))})}_removeItems(a){const {operationalItems:b}=this,c=[];b.forEach(d=>{d&&a&&a.includes(d.layer)||c.push(d)});b.destroyMany(c)}_sortItems(a){const {operationalItems:b}=this;b.sort((c,d)=>{c=a.indexOf(c.layer);d=a.indexOf(d.layer);return c>d?-1:c<d?1:0})}_recompileList(){this._removeAllItems();
this._compileList()}_viewHandles(){const {view:a}=this;this.removeHandles(["map-layers","layer-views","view-layers"]);a?.ready?this.addHandles([f.watch(()=>this.view?.map?.allLayers,b=>this._createMapLayerHandles(b),f.initial),f.watch(()=>this.view?.allLayerViews,b=>this._createLayerViewHandles(b),f.initial)],"view-layers"):this._removeAllItems()}};g.__decorate([k.property()],e.prototype,"checkPublishStatusEnabled",void 0);g.__decorate([k.property()],e.prototype,"listItemCreatedFunction",void 0);
g.__decorate([k.property({nonNullable:!0})],e.prototype,"listModeDisabled",void 0);g.__decorate([k.property({type:q})],e.prototype,"operationalItems",void 0);g.__decorate([k.property({readOnly:!0})],e.prototype,"state",null);g.__decorate([k.property()],e.prototype,"totalItems",null);g.__decorate([k.property()],e.prototype,"view",void 0);return e=g.__decorate([w.subclass("esri.widgets.LayerList.LayerListViewModel")],e)});