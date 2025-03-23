// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Collection ../../../core/handleUtils ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ./support/HighlightCounter ../../layers/LayerView".split(" "),function(g,k,l,m,h,n,p,e,x,q,r,t,u,v,w){e=class extends r.LayerView2DMixin(w){constructor(){super(...arguments);
this._highlightCounter=new v.HighlightCounter}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme),layerId:this.layer.id});this.container.addChild(this.graphicsView.container);this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",a=>{a&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]);
this._updateHighlights()}detach(){this.container.removeAllChildren();this.graphicsView=n.destroyMaybe(this.graphicsView)}async hitTest(a){return this.graphicsView?this.graphicsView.hitTest(a).map(b=>({type:"graphic",graphic:b,mapPoint:a,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(a){this.graphicsView.processUpdate(a)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(a,
b="default"){let c;"number"===typeof a?c=[a]:a instanceof k?c=[a.uid]:Array.isArray(a)&&0<a.length?c="number"===typeof a[0]?a:a.map(d=>d&&d.uid):m.isCollection(a)&&0<a.length&&(c=a.map(d=>d&&d.uid).toArray());const f=c?.filter(l.isSome);if(!f?.length)return h.makeHandle();this._addHighlight(f,b);return h.makeHandle(()=>this._removeHighlight(f,b))}_addHighlight(a,b){this._highlightCounter.addGroup(a,b);this._updateHighlights()}_removeHighlight(a,b){this._highlightCounter.deleteGroup(a,b);this._updateHighlights()}_updateHighlights(){const a=
[];for(const c of this._highlightCounter.ids()){var b=this._highlightCounter.getHighlightGroups(c);b=this._getHighlightBits(b);a.push({objectId:c,highlightFlags:b})}this.graphicsView?.setHighlight(a)}};g.__decorate([p.property()],e.prototype,"graphicsView",void 0);return e=g.__decorate([q.subclass("esri.views.2d.layers.GraphicsLayerView2D")],e)});