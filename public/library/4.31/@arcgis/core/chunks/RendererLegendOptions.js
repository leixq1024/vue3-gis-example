/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{ClonableMixin as o}from"../core/Clonable.js";import{s as e}from"./jsonMap.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{e as p}from"./enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";const n=e()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let c=class extends(o(s)){constructor(r){super(r),this.title=null,this.order=null}};r([t({type:String,json:{write:!0}})],c.prototype,"title",void 0),r([p(n)],c.prototype,"order",void 0),c=r([i("esri.renderers.support.RendererLegendOptions")],c);const a=c;export{a as R};
