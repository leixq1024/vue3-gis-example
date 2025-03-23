/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{W as e,F as r}from"./featureTechniqueUtils.js";import{A as i}from"./AGraphicContainer.js";import{r as s}from"./util2.js";class t extends i{renderChildren(i){for(const e of this.children)e.setTransform(i.state);if(super.renderChildren(i),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(i.drawPhase){case e.MAP:this._renderChildren(i,r.All);break;case e.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(i)}this._boundsRenderer&&this._boundsRenderer.doRender(i)}}_renderHighlight(e){s(e,!1,(e=>{this._renderChildren(e,r.Highlight)}))}}export{t as G};
