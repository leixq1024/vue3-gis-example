/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{W as e,F as t}from"./featureTechniqueUtils.js";import{A as i}from"./AGraphicContainer.js";import{r as o}from"./util2.js";let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===e.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),o(r,!0,(r=>{this._renderChildren(r,t.All)}),0))}};a=r([s("esri.views.2d.layers.graphics.HighlightGraphicContainer")],a);const h=a;export{h as H};
