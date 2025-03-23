/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import o from"../request.js";import r from"../core/Error.js";import{p as s,a as e,e as t}from"./utils9.js";import{a as i}from"./serverVersionUtils.js";import{_ as p}from"./tslib.es6.js";import{JSONSupport as n}from"../core/JSONSupport.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import"../config.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./ensureType.js";let a=class extends n{constructor(o){super(o),this.hasConflicts=!1,this.moment=null,this.didPost=!1,this.success=!1}};p([m({type:Boolean,json:{write:!0}})],a.prototype,"hasConflicts",void 0),p([m({type:Date,json:{type:Number,write:{writer:(o,r)=>{r.moment=o?o.getTime():null}}}})],a.prototype,"moment",void 0),p([m({type:Boolean,json:{write:!0}})],a.prototype,"didPost",void 0),p([m({type:Boolean,json:{write:!0}})],a.prototype,"success",void 0),a=p([c("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")],a);const l=a,j=new Map;async function u(p,n,m,c){j.has(p)||await i(j,p);const a=j.get(p);if((a?.serverVersion??0)<=11.1)throw new r("reconcile:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!n)throw new r("reconcile:missing-guid","guid for version is missing");const u=s(p),d=m.toJSON(),f=e(u.query,{query:t({...d,f:"json"}),...c,method:"post"});n.startsWith("{")&&(n=n.slice(1,-1));const g=`${u.path}/versions/${n}/reconcile`,{data:h}=await o(g,f);return l.fromJSON(h)}export{u as reconcile,j as serverVersionCacheMap};
