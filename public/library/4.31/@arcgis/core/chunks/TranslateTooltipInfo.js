/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{z as t}from"./quantityUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{S as e}from"./SketchTooltipInfo.js";let i=class extends e{constructor(o){super(o),this.type="translate",this.distance=t}clear(){this.distance=t}};o([s()],i.prototype,"type",void 0),o([s()],i.prototype,"distance",void 0),i=o([r("esri.views.interactive.tooltip.infos.TranslateTooltipInfo")],i);export{i as T};
