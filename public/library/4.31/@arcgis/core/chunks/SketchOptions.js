/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import o from"../core/Accessor.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import r from"../views/interactive/sketch/SketchLabelOptions.js";import i from"../views/interactive/sketch/SketchTooltipOptions.js";import p from"../views/interactive/sketch/SketchValueOptions.js";let c=class extends o{constructor(t){super(t),this.labels=new r,this.tooltips=new i,this.values=new p}};t([e({nonNullable:!0,type:r})],c.prototype,"labels",void 0),t([e({nonNullable:!0,type:i})],c.prototype,"tooltips",void 0),t([e({nonNullable:!0,type:p})],c.prototype,"values",void 0),c=t([s("esri.views.interactive.sketch.SketchOptions")],c);const l=c;export{l as S};
