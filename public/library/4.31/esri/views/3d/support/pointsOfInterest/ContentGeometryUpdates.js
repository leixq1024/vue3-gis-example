// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Evented","../../../../core/Handles","../../../../core/maybe"],function(c,d,e,f){class g{constructor(b){this._handles=new e;this.events=new d;this._contentLayerViews=b.contentLayerViews;this._handles.add(this._contentLayerViews.on("change",a=>this._layerViewsChanged(a)));this._layerViewsChanged({added:this._contentLayerViews.toArray(),removed:[],moved:[],target:this._contentLayerViews})}destroy(){this._handles=f.destroyMaybe(this._handles);this._contentLayerViews.destroy()}_layerViewsChanged(b){b.added.forEach(a=>
{"esri.views.3d.layers.SceneLayerView3D"===a.declaredClass&&this._handles.add(a.on("visible-geometry-changed",()=>this._contentChanged()),a.uid)});b.removed.forEach(a=>this._handles.remove(a.uid))}_contentChanged(){this.events.emit("request-update",h)}}const h={};c.ContentGeometryUpdates=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});