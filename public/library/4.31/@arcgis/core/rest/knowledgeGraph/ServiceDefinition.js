/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";let i=class extends e{constructor(t){super(t),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};t([o({type:[String],json:{write:!0}})],i.prototype,"capabilities",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"supportsSearch",void 0),t([o({type:[String],json:{write:!0}})],i.prototype,"supportedQueryFormats",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"allowGeometryUpdates",void 0),t([o({type:Number,json:{write:!0}})],i.prototype,"searchMaxRecordCount",void 0),t([o({type:Object,json:{write:!0}})],i.prototype,"serviceCapabilities",void 0),t([o({type:Number,json:{write:!0}})],i.prototype,"maxRecordCount",void 0),t([o({type:String,json:{write:!0}})],i.prototype,"description",void 0),t([o({type:String,json:{write:!0}})],i.prototype,"copyrightText",void 0),t([o({type:String,json:{write:!0}})],i.prototype,"units",void 0),t([o({type:s,json:{write:!0}})],i.prototype,"spatialReference",void 0),t([o({type:Number,json:{write:!0}})],i.prototype,"currentVersion",void 0),t([o({type:Object,json:{write:!0}})],i.prototype,"dateFieldsTimeReference",void 0),t([o({type:String,json:{write:!0}})],i.prototype,"serviceItemId",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"supportsDocuments",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"dataEditingNotSupported",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"schemaEditingNotSupported",void 0),t([o({type:Boolean,json:{write:!0}})],i.prototype,"supportsProvenance",void 0),i=t([r("esri.rest.knowledgeGraph.ServiceDefinition")],i);const p=i;export{p as default};
