// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./LayerView3D ../../layers/CatalogDynamicGroupLayerView ../../layers/LayerView".split(" "),function(b,d,c,a,k,l,e,f,g,h){a=class extends g(f.LayerView3D(h)){constructor(){super(...arguments);this.type="catalog-dynamic-group-3d";this.layerViews=new d}initialize(){this.addHandles([this.enableLayerUpdates()])}};
b.__decorate([c.property()],a.prototype,"layerViews",void 0);b.__decorate([c.property()],a.prototype,"parent",void 0);b.__decorate([c.property()],a.prototype,"view",void 0);return a=b.__decorate([e.subclass("esri.views.3d.layers.CatalogDynamicGroupLayerView3D")],a)});