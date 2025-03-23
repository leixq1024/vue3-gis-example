/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../../core/JSONSupport.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import{a as e}from"../../../chunks/ensureType.js";import"../../../core/lang.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import p from"../../../geometry/SpatialReference.js";import{t as n}from"../../../chunks/typeUtils2.js";import a from"../../../networks/support/UNTraceConfiguration.js";import c from"./TraceLocation.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../networks/support/TraceConfiguration.js";var u;let l=u=class extends r{static from(t){return e(u,t)}constructor(t){super(t),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}writeOutSR(t,r,o){if(null!=t){const{wkid:e,latestWkid:s,wkt:i,wkt2:p}=t;r[o]=JSON.stringify({wkid:e??void 0,latestWkid:s??void 0,wkt:i??void 0,wkt2:p??void 0})}}};t([o({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],l.prototype,"namedTraceConfigurationGlobalId",void 0),t([o({type:String,json:{write:!0}})],l.prototype,"gdbVersion",void 0),t([o({type:[c],json:{write:!0}})],l.prototype,"traceLocations",void 0),t([o({type:Date,json:{type:Number,write:{writer:(t,r)=>{r.moment=t?t.getTime():null}}}})],l.prototype,"moment",void 0),t([o({type:p,json:{write:{allowNull:!0,target:"outSR"}}})],l.prototype,"outSpatialReference",void 0),t([i("outSpatialReference")],l.prototype,"writeOutSR",null),t([o({type:a,json:{write:!0}})],l.prototype,"traceConfiguration",void 0),t([o({type:[Object],json:{write:!0}})],l.prototype,"resultTypes",void 0),t([o({type:n.apiValues,json:{type:n.jsonValues,read:n.read,write:n.write}})],l.prototype,"traceType",void 0),l=u=t([s("esri.rest.networks.support.TraceParameters")],l);const m=l;export{m as default};
