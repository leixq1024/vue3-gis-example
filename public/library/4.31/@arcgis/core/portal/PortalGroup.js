/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Error.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{e as s}from"../chunks/ensureType.js";import"../core/lang.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"./PortalQueryParams.js";import"../chunks/Logger.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/jsonMap.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";var p;let l=p=class extends e{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.sourceJSON=null,this.tags=null,this.title=null}get thumbnailUrl(){const t=this.url,r=this.thumbnail;return t&&r&&this.portal?this.portal?.normalizeUrl(`${t}/info/${r}?f=json`):null}get url(){const t=this.portal?.restUrl;return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return this.portal.request(this.url+"/categorySchema",t).then((r=>{const e=r.categorySchema||[];return e.some((t=>"contentCategorySetsGroupQuery.LivingAtlas"===t.source))?this._fetchCategorySchemaSet("LivingAtlas",t):e}))}fetchMembers(t){return this.portal.request(this.url+"/users",t)}getThumbnailUrl(t){let r=this.thumbnailUrl;return r&&t&&(r+=`&w=${t}`),r}toJSON(){throw new r("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const r=new p({sourceJSON:t});return r.read(t),r}queryItems(t,r){let e=s(n,t);const o=this.portal;return parseFloat(o.currentVersion)>5?(e=e||new n,o.queryPortal(`/content/groups/${this.id}/search`,e,"PortalItem",r)):(e=e?e.clone():new n,e.query="group:"+this.id+(e.query?" "+e.query:""),o.queryItems(e,r))}_fetchCategorySchemaSet(t,e){const o=this.portal;return o.fetchSelf(o.authMode,!0,e).then((t=>{const s=t.contentCategorySetsGroupQuery;if(s){const t=new n({disableExtraQuery:!0,num:1,query:s});return o.queryGroups(t,e)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((o=>{if(o.total){const r=o.results[0],s=new n({num:1,query:`typekeywords:"${t}"`});return r.queryItems(s,e)}throw new r("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((t=>t.total?t.results[0].fetchData("json",e).then((t=>{const r=t?.categorySchema;return r?.length?r:[]})):[]))}};t([o()],l.prototype,"access",void 0),t([o({type:Date})],l.prototype,"created",void 0),t([o()],l.prototype,"description",void 0),t([o()],l.prototype,"id",void 0),t([o()],l.prototype,"isInvitationOnly",void 0),t([o({type:Date})],l.prototype,"modified",void 0),t([o()],l.prototype,"owner",void 0),t([o()],l.prototype,"portal",void 0),t([o()],l.prototype,"snippet",void 0),t([o()],l.prototype,"sortField",void 0),t([o()],l.prototype,"sortOrder",void 0),t([o()],l.prototype,"sourceJSON",void 0),t([o()],l.prototype,"tags",void 0),t([o()],l.prototype,"thumbnail",void 0),t([o({readOnly:!0})],l.prototype,"thumbnailUrl",null),t([o()],l.prototype,"title",void 0),t([o({readOnly:!0})],l.prototype,"url",null),l=p=t([i("esri.portal.PortalGroup")],l);const u=l;export{u as default};
