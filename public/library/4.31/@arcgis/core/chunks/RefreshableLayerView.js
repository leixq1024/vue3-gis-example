/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{L as e}from"./Logger.js";import{isAbortError as s}from"../core/promiseUtils.js";import{on as o}from"../core/reactiveUtils.js";import"../core/lang.js";import"../core/Error.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";const i=i=>{let a=class extends i{initialize(){this.addHandles(o((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{s(r)||e.getLogger(this).error(r)}))})),"RefreshableLayerView")}};return a=r([t("esri.views.layers.RefreshableLayerView")],a),a};export{i as R};
