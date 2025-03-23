/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as r}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{t as i}from"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var a;let n=a=class extends e{constructor(s){super(s),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new a({variableName:this.variableName,dimensionName:this.dimensionName,values:r(this.values),isSlice:this.isSlice})}};s([o({type:String,json:{write:!0}})],n.prototype,"variableName",void 0),s([o({type:String,json:{write:!0}})],n.prototype,"dimensionName",void 0),s([o({type:i.array(i.oneOf([i.native(Number),i.array(i.native(Number))])),json:{write:!0}})],n.prototype,"values",void 0),s([o({type:Boolean,json:{write:!0}})],n.prototype,"isSlice",void 0),n=a=s([t("esri.layers.support.DimensionalDefinition")],n);const p=n;export{p as default};
