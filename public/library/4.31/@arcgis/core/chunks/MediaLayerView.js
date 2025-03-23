/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import r from"../core/Accessor.js";let s=class extends r{constructor(){super(...arguments),this.tool="transform"}};t([e()],s.prototype,"tool",void 0),s=t([o("esri.views.3d.layers.support.MediaLayerInteractionOptions")],s);const i=r=>{let i=class extends r{constructor(...t){super(...t),this.layer=null,this.interactive=!1,this.interactionOptions=new s,this.selectedElement=null}};return t([e()],i.prototype,"layer",void 0),t([e()],i.prototype,"interactive",void 0),t([e()],i.prototype,"interactionOptions",void 0),t([e()],i.prototype,"selectedElement",void 0),i=t([o("esri.views.layers.MediaLayerView")],i),i};export{i as M};
