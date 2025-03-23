// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/tslib.es6 ../../config ../../kernel ../../request ../../core/asyncUtils ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../support/layerUtils ../../portal/Portal ../../portal/PortalItem ../../portal/PortalUser ../../portal/support/portalItemUtils".split(" "),
function(x,q,g,y,n,z,A,B,C,D,h,m,l,J,K,E,F,G,H,r,p,I,t){var u=null,v=null;q.PortalLayer=d=>{d=class extends d{constructor(){super(...arguments);this.resourceReferences={portalItem:null,paths:[]};this.userHasEditingPrivileges=!0;this.userHasUpdateItemPrivileges=this.userHasFullEditingPrivileges=!1}destroy(){this.portalItem=D.destroyMaybe(this.portalItem);this.resourceReferences.portalItem=null;this.resourceReferences.paths.length=0}set portalItem(b){b!==this._get("portalItem")&&(this.removeOrigin("portal-item"),
this._set("portalItem",b))}readPortalItem(b,a,c){if(a.itemId)return new p({id:a.itemId,portal:c?.portal})}writePortalItem(b,a){b?.id&&(a.itemId=b.id)}async loadFromPortal(b,a){if(this.portalItem?.id)try{const {load:c}=await new Promise((e,f)=>x(["../../portal/support/layersLoader"],e,f));h.throwIfAborted(a);return await c({instance:this,supportedTypes:b.supportedTypes,validateItem:b.validateItem,supportsData:b.supportsData,layerModuleTypeMap:b.layerModuleTypeMap},a)}catch(c){throw h.isAbortError(c)||
C.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${c}`),c;}}async finishLoadEditablePortalLayer(b){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(b).catch(a=>{h.throwIfAbortError(a);return!0}))}async setUserPrivileges(b,a){if(!y.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(a);if(this.url)try{const {features:{edit:c,fullEdit:e},content:{updateItem:f}}=await this._fetchUserPrivileges(b,
a);this._set("userHasEditingPrivileges",c);this._set("userHasFullEditingPrivileges",e);this._set("userHasUpdateItemPrivileges",f)}catch(c){h.throwIfAbortError(c)}}async _fetchUserPrivileges(b,a){let c=this.portalItem;if(!b||!c||!c.loaded||c.sourceUrl)return this._fetchFallbackUserPrivileges(a);const e=b===c.id;if(e&&c.portal.user)return t.getUserPrivileges(c);let f;if(e)f=c.portal.url;else try{f=await H.getOwningPortalUrl(this.url,a)}catch(k){h.throwIfAbortError(k)}if(!f||!m.hasSameCanonicalPortal(f,
c.portal.url))return this._fetchFallbackUserPrivileges(a);let w;try{const k=null!=a?a.signal:null;w=await n.id?.getCredential(`${f}/sharing`,{prompt:!1,signal:k})}catch(k){h.throwIfAbortError(k)}if(!w)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(e?await c.reload():(c=new p({id:b,portal:{url:f}}),await c.load(a)),c.portal.user)return t.getUserPrivileges(c)}catch(k){h.throwIfAbortError(k)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(b){let a=
!0;try{a=await this._fetchUserHasEditingPrivileges(b)}catch(c){h.throwIfAbortError(c)}return{features:{edit:a,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(b){const a=this.url?n.id?.findCredential(this.url):null;if(!a)return!0;b=u===a?v:await this._fetchEditingUser(b);u=a;v=b;return null==b?.privileges||b.privileges.includes("features:user:edit")}async _fetchEditingUser(b){var a=this.portalItem?.portal?.user;if(a)return a;a=n.id?.findServerInfo(this.url??"");if(!a?.owningSystemUrl)return null;
a=`${a.owningSystemUrl}/sharing/rest`;const c=r.getDefault();if(c&&c.loaded&&m.normalize(c.restUrl)===m.normalize(a))return c.user;b=await A.result(z(`${a}/community/self`,{authMode:"no-prompt",query:{f:"json"},signal:null!=b?b.signal:null}));return b.ok?I.fromJSON(b.value.data):null}read(b,a){a&&(a.layer=this);super.read(b,a)}write(b,a){const c=a?.portal,e=this.portalItem?.id&&(this.portalItem.portal||r.getDefault());return c&&e&&!m.hasSamePortal(e.restUrl,c.restUrl)?(a.messages&&a.messages.push(new B("layer:cross-portal",
`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(b,{...a,layer:this})}};g.__decorate([l.property({type:p})],d.prototype,"portalItem",null);g.__decorate([E.reader("web-document","portalItem",["itemId"])],d.prototype,"readPortalItem",null);g.__decorate([G.writer("web-document",
"portalItem",{itemId:{type:String}})],d.prototype,"writePortalItem",null);g.__decorate([l.property({clonable:!1})],d.prototype,"resourceReferences",void 0);g.__decorate([l.property({type:Boolean,readOnly:!0})],d.prototype,"userHasEditingPrivileges",void 0);g.__decorate([l.property({type:Boolean,readOnly:!0})],d.prototype,"userHasFullEditingPrivileges",void 0);g.__decorate([l.property({type:Boolean,readOnly:!0})],d.prototype,"userHasUpdateItemPrivileges",void 0);return d=g.__decorate([F.subclass("esri.layers.mixins.PortalLayer")],
d)};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});