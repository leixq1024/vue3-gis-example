// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../../LayerList/LayerListViewModel ../utils".split(" "),function(c,b,g,h,k,d,e,f){b=class extends e{_compileList(){var a=this.view?.map?.allLayers;a&&(a=a.filter(f.isValidOverlayLayer),this._watchLayersListMode(a),a=this._getViewableLayers(a),a?.length?(this._createNewItems(a),this._removeItems(a),this._sortItems(a)):this._removeAllItems())}};
return b=c.__decorate([d.subclass("esri.widgets.OrientedImageryViewer.components.OverlayLayersListViewModel")],b)});