// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/handleUtils","../../core/reactiveUtils"],function(d,g,e){function f(a){if(a.destroyed)return!1;c.has(a)||a.addHandles([e.watch(()=>{const b=a.parent;return b&&"type"in b?"catalog-dynamic-group"===b.type||f(b):!1},b=>c.set(a,b),e.syncAndInitial),g.makeHandle(()=>c.delete(a))]);return c.get(a)}const c=new WeakMap;d.getCatalogLayerForLayer=function(a){return a.parent&&"type"in a.parent&&"catalog-dynamic-group"===a.parent.type?a.parent.parent:null};d.isLayerFromCatalog=f;
Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});