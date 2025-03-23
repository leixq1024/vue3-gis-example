/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{a as e}from"./vec3f64.js";import{c as i}from"./materialUtils.js";var c;let p=c=class extends r{constructor(o){super(o),this.color=null,this.emissiveFactor=null}clone(){const o={color:this.color?.clone()??null,emissiveFactor:this.emissiveFactor?e(this.emissiveFactor):null};return new c(o)}};o([s(i)],p.prototype,"color",void 0),o([s({type:[Number],json:{write:!1}})],p.prototype,"emissiveFactor",void 0),p=c=o([t("esri.symbols.support.Symbol3DMaterial")],p);export{p as S};
