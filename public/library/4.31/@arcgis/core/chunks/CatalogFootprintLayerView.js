/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";const s=s=>{let t=class extends s{constructor(...r){super(...r)}get updateSuspended(){const r=this.parent?.dynamicGroupLayerView;return this.suspended&&(!r||!0===r.suspended)}};return r([e()],t.prototype,"layer",void 0),r([e()],t.prototype,"parent",void 0),r([e()],t.prototype,"updateSuspended",null),t=r([o("esri.views.layers.CatalogFootprintLayerView")],t),t};export{s as C};
