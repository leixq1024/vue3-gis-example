/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import r from"../core/Accessor.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";let t=class extends r{constructor(e){super(e),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};e([o()],t.prototype,"headerKeys",void 0),e([o()],t.prototype,"outSpatialReference",void 0),e([o()],t.prototype,"exceededTransferLimit",void 0),t=e([s("esri.rest.knowledgeGraph.GraphQueryResultHeader")],t);const p=t;export{p as G};
