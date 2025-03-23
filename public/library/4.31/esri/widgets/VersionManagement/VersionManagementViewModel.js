// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Logger ../../core/reactiveUtils ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/support/UpdatingHandles ../../layers/support/layerUtils ../../portal/Portal ../../portal/support/utils ../../rest/featureService/FeatureService ../../rest/featureService/utils ../../versionManagement/utils ../../versionManagement/VersioningState ../../versionManagement/VersionManagementService ../../versionManagement/versionAdapters/utils".split(" "),
function(l,f,r,g,t,p,x,m,G,H,y,v,z,A,w,B,C,D,E,F,u){f=class extends f{constructor(a){super(a);this._portalLookup=new Map;this._updatingHandlesLoad=new v.UpdatingHandles;this._updatingHandlesExecute=new v.UpdatingHandles;this.advancedEditingUserTypeExtensionLookup=new Map;this.executionError=void 0;this.featureServiceLookup=new Map;this.loadError=void 0;this.serverVersionLookup=new Map;this.serviceNameLookup=new Map;this.userLookup=new Map;this.versionIdentifierLookup=new Map;this.versionInfoLookup=
new Map;this.versionAdministratorLookup=new Map;this.versionManagementServiceLookup=new Map;this.versioningStateLookup=new Map;this.versioningStates=this.view=null}initialize(){this._viewChangeHandle();this.addHandles([p.watch(()=>this.view,()=>{this._resetAllLookupProperties();this._viewChangeHandle()}),p.watch(()=>this.versioningStates,()=>{this._resetVersioningLookupProperties();this._setVersioningStatesLookups()})])}destroy(){this._updatingHandlesLoad.destroy();this._updatingHandlesExecute.destroy()}get state(){return this._updatingHandlesLoad.updating?
"loading":this.loadError?"disabled":this._updatingHandlesExecute.updating?"executing":this.executionError?"failed":"ready"}async alterVersion(a){return this._updatingHandlesExecute.addPromise(this._alterVersionInternal(a))}async changeVersion(a,b,c){return this._updatingHandlesExecute.addPromise(this._changeVersionInternal(a,b,c))}async createVersion(a){return this._updatingHandlesExecute.addPromise(this._createVersionInternal(a))}async deleteVersion(a,b,c){return this._updatingHandlesExecute.addPromise(this._deleteVersionInternal(a,
b,c))}async getVersionInfos(a){return this._updatingHandlesExecute.addPromise(this._getVersionInfosInternal(a))}async _alterVersionInternal(a){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new g("version-management-view-model:load-error",this.loadError);this._setExecutionError();const b=this.versioningStateLookup.get(a.featureServerUrl);if(!b)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),
new g("version-management-view-model:execution-error",this.executionError);if(!this.serverVersionLookup.has(a.featureServerUrl)||11.1>=this.serverVersionLookup.get(a.featureServerUrl))throw this._logError("version-management-view-model:execution-error","no-valid-enterprise-version"),new g("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(a.featureServerUrl))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),
new g("version-management-view-model:execution-error",this.executionError);const {featureServerUrl:c,versionIdentifier:d,...e}=a;a=await b.alterVersion(d,e).catch(h=>{this._logExecutionError(h);throw h;});await this.getVersionInfos(c);return a}async _changeVersionInternal(a,b,c){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new g("version-management-view-model:load-error",this.loadError);this._setExecutionError();a=this.versioningStateLookup.get(a);
if(!a)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new g("version-management-view-model:execution-error",this.executionError);return await a.changeVersion({name:b,guid:c}).catch(d=>{this._logExecutionError(d);throw d;})}_updateVersionableItems(a){this._updatingHandlesLoad.addPromise((async()=>{u.createVersionAdapters(a.added).forEach(b=>{const c=this.versioningStateLookup.get(b.featureServiceUrl);c&&(c.versionableItems.find(d=>d.versionableItem===
b.versionableItem)||c.versionableItems.add(b))});u.createVersionAdapters(a.removed).forEach(b=>{const {allLayers:c,allTables:d}=this.view.map,e=b.featureServiceUrl,h=this.versioningStateLookup.get(e);if(h){var n=k=>("feature"===k.type||"subtype-group"===k.type)&&(k.url?.includes(e)??!1);[...c.filter(n),...d.filter(n)].length||(this.featureServiceLookup.delete(e),this.serviceNameLookup.delete(e),this.versioningStateLookup.delete(e),this.versioningStates.remove(h));(n=h.versionableItems.find(k=>k.versionableItem===
b.versionableItem))&&h.versionableItems.remove(n)}else this._logError("version-management-view-model:execution-error","no-version-management-service-found")})})())}async _createVersionInternal(a){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new g("version-management-view-model:load-error",this.loadError);this._setExecutionError();const b=a.featureServerUrl,c=this.versioningStateLookup.get(b);if(!c)throw this._logError("version-management-view-model:execution-error",
"no-versioning-state-found"),new g("version-management-view-model:execution-error",this.executionError);var d=this.advancedEditingUserTypeExtensionLookup.get(a.featureServerUrl);const e=this.userLookup.get(b).toUpperCase(),h=this._isEmptyString(a.ownerName)?e:a.ownerName?.trim().toUpperCase();if(h!==e){if(11.1>=this.serverVersionLookup.get(b))throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new g("version-management-view-model:execution-error",this.executionError);
if(!d)throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new g("version-management-view-model:execution-error",this.executionError);}d=await this.versioningStateLookup.get(b)?.getVersionInfos();if("SDE"===h?.toUpperCase()&&"DEFAULT"===a.versionName.toUpperCase()||d?.find(k=>k.versionIdentifier.name.toUpperCase()===(h+"."+a.versionName).toUpperCase()||k.versionIdentifier.name.toUpperCase()===(e+"."+a.versionName).toUpperCase()))throw this._logError("version-management-view-model:execution-error",
"no-valid-version-name"),new g("version-management-view-model:execution-error",this.executionError);const n=await c.versionManagementService.createVersion({versionName:a.versionName,access:h!==e?"public":a.access,description:a.description}).catch(k=>{this._logExecutionError(k);throw k;});if(h!==e){const {guid:k,name:q}=n.versionIdentifier;await this.alterVersion({featureServerUrl:b,versionIdentifier:{guid:k,name:q},access:a.access,ownerName:h})||this.deleteVersion(b,e+"."+a.versionName,n.versionIdentifier.guid)}await this.getVersionInfos(b);
d=await this.versioningStateLookup.get(b)?.getVersionInfos();return d?.find(k=>k.versionIdentifier.guid===n.versionIdentifier.guid)}async _deleteVersionInternal(a,b,c){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new g("version-management-view-model:load-error",this.loadError);this._setExecutionError();const d=this.versioningStateLookup.get(a);if(!d)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),
new g("version-management-view-model:execution-error",this.executionError);if(11.1>=this.serverVersionLookup.get(a))throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new g("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(a))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new g("version-management-view-model:execution-error",
this.executionError);return await d.deleteVersion({name:b,guid:c}).catch(e=>{this._logExecutionError(e);throw new g("version-management-view-model:execution-error",this.executionError);})}async _getVersionInfosInternal(a){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new g("version-management-view-model:load-error",this.loadError);this._setExecutionError();var b=this.featureServiceLookup.get(a)?.featureService;if(!b)throw this._logError("version-management-view-model:execution-error",
"no-feature-service-found"),new g("version-management-view-model:execution-error",this.executionError);b.loaded||await b.load().catch(d=>{this._logExecutionError(d);throw d;});const c=b.url;this.serverVersionLookup.set(c,b.sourceJSON?.currentVersion??0);11.1>=this.serverVersionLookup.get(c)&&this.advancedEditingUserTypeExtensionLookup.set(c,!1);b=this.userLookup.get(a);this._portalLookup.get(a)&&b?(this.advancedEditingUserTypeExtensionLookup.set(c,await w.hasUserTypeExtension(this._portalLookup.get(a),
b,"advediting")),this.versionAdministratorLookup.set(c,await w.hasPrivilege(this._portalLookup.get(a),b,"features:user:manageVersions"))):(this.advancedEditingUserTypeExtensionLookup.set(c,!1),this.versionAdministratorLookup.set(c,!1));a=this.versioningStateLookup.get(a);if(!a)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new g("version-management-view-model:execution-error",this.executionError);a.loaded||await a.load().catch(d=>{this._logExecutionError(d);
throw d;});return await a.getVersionInfos(!0).catch(d=>{this._logExecutionError(d);throw d;})}_isEmptyString(a){return!a||0===a.trim().length}_logError(a,b){t.getLogger(this).error(new g(a,b));switch(a){case "version-management-view-model:load-error":this._setLoadError(b);break;case "version-management-view-model:execution-error":this._setExecutionError(b)}}_logExecutionError(a){this._logError("version-management-view-model:execution-error",a.message)}async _viewChangeHandle(){this._updatingHandlesLoad.addPromise((async()=>
{this._setLoadError();if(this.view)if(this.view&&"2d"!==this.view.type)this._logError("version-management-view-model:load-error","sceneView-not-supported");else{this.removeHandles("map-change-handle");this.addHandles([p.watch(()=>this.view?.map,()=>{this._resetAllLookupProperties();this._mapChangeHandle(this.versioningStates)})],"map-change-handle");var a=await this._getVersioningStates();await this._mapChangeHandle(a)}else this._setLoadError("no-view-property")})())}async _mapChangeHandle(a){this._updatingHandlesLoad.addPromise((async()=>
{this._setLoadError();this.removeHandles("map-layers-tables-change-handle");this.addHandles([p.on(()=>this.view?.map.allLayers,"change",b=>{if(b.added.some(({type:c})=>"feature"===c)||b.removed.some(({type:c})=>"feature"===c)||b.added.some(({type:c})=>"subtype-group"===c)||b.removed.some(({type:c})=>"subtype-group"===c))this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(b)}),p.on(()=>this.view?.map.allTables,"change",b=>{if(b.added.some(({type:c})=>
"feature"===c)||b.removed.some(({type:c})=>"feature"===c)||b.added.some(({type:c})=>"subtype-group"===c)||b.removed.some(({type:c})=>"subtype-group"===c))this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(b)})],"map-layers-tables-change-handle");await this._propertiesChangeInternal(a)})())}async _propertiesChangeInternal(a){this._updatingHandlesLoad.addPromise((async()=>{var b=e=>"feature"===e.type||"subtype-group"===e.type;
const {allLayers:c,allTables:d}=this.view.map;this._setLoadError();this.featureServiceLookup=C.createFeatureServices([...c.filter(b),...d.filter(b)]);if(this.featureServiceLookup.size){this._updateFeatureServiceLookup(a);this.serviceNameLookup=new Map;for(const e of this.featureServiceLookup.values()){const {featureService:h,featureService:{url:n}}=e;if(!this.serviceNameLookup.has(n)){h.loaded||await h.load().catch(q=>{t.getLogger(this).error(q)});if(!h.versionManagementServiceUrl){this.featureServiceLookup.delete(n);
continue}b=await z.getOwningPortalUrl(n);b=new A({authMode:"immediate",url:b});await b.load().catch(q=>{t.getLogger(this).error(q)});const k=b.user?.username;h.loaded&&b.loaded&&k&&(this.serviceNameLookup.set(x.removeTrailingSlash(n),n.split("/").at(-2)),this.userLookup.set(n,k),this._portalLookup.set(n,b))}}this.removeHandles("versioning-states-change-handle");a.forEach(e=>this._handleVersioningStateLookupUpdate(e));await this._updateVersioningStates(a);this.versioningStates=a}else this._logError("version-management-view-model:load-error",
"no-feature-services")})())}_updateFeatureServiceLookup(a){for(const b of a)if(a=b.featureServiceUrl,!this.featureServiceLookup.has(a)){const c=new B({url:a}),d=b.versionableItems.toArray().flatMap(e=>"network"===e.type?null:e.versionableItem);this.featureServiceLookup.set(a,{featureService:c,layers:d})}}async _updateVersioningStates(a){for(const c of this.featureServiceLookup.values()){const d=c.featureService;if(d.versionManagementServiceUrl){if(!a.find(e=>e.featureServiceUrl===d.url)&&d.versionManagementServiceUrl){var b=
new r(u.createVersionAdapters(c.layers));b=new E({versionManagementService:new F({url:d.versionManagementServiceUrl}),versionableItems:b});a.add(b);this._handleVersioningStateLookupUpdate(b)}await this.getVersionInfos(d.url)}}}async _getVersioningStates(){return this.versioningStates&&this.versioningStates.length?this.versioningStates:this.view?await D.getVersioningStates(this.view,!1):(this._logError("version-management-view-model:load-error","no-view-property"),new r)}_handleVersioningStateLookupUpdate(a){this.versioningStateLookup.set(a.featureServiceUrl,
a);this._addHandlesToVersioningState(a);this.versionIdentifierLookup.set(a.featureServiceUrl,a.currentVersionInfo?.versionIdentifier);this.versionManagementServiceLookup.set(a.featureServiceUrl,a.versionManagementService)}async _setVersioningStatesLookups(){this._updatingHandlesLoad.addPromise((async()=>{this.versioningStates&&(this.removeHandles("versioning-states-change-handle"),this._updateFeatureServiceLookup(this.versioningStates),this.versioningStates.forEach(a=>this._handleVersioningStateLookupUpdate(a)),
await this._updateVersioningStates(this.versioningStates))})())}_addHandlesToVersioningState(a){this.addHandles([p.watch(()=>a.versionInfos,()=>{this.versionInfoLookup.set(a.featureServiceUrl,a.versionInfos)}),p.watch(()=>a.currentVersionInfo?.versionIdentifier,()=>{this.versionIdentifierLookup.set(a.featureServiceUrl,a.currentVersionInfo?.versionIdentifier)})],"versioning-states-change-handle")}_resetVersioningLookupProperties(){this.versionIdentifierLookup=new Map;this.versionInfoLookup=new Map;
this.versionManagementServiceLookup=new Map;this.versioningStateLookup=new Map}_resetAllLookupProperties(){this._portalLookup=new Map;this.advancedEditingUserTypeExtensionLookup=new Map;this.serverVersionLookup=new Map;this.userLookup=new Map;this.versioningStates=new r;this._resetVersioningLookupProperties();this._resetServiceRelatedLookupProperties()}_resetServiceRelatedLookupProperties(){this.featureServiceLookup=new Map;this.serviceNameLookup=new Map}_setExecutionError(a){this._set("executionError",
a)}_setLoadError(a){this._set("loadError",a)}};l.__decorate([m.property()],f.prototype,"_portalLookup",void 0);l.__decorate([m.property()],f.prototype,"advancedEditingUserTypeExtensionLookup",void 0);l.__decorate([m.property({readOnly:!0})],f.prototype,"executionError",void 0);l.__decorate([m.property()],f.prototype,"featureServiceLookup",void 0);l.__decorate([m.property({readOnly:!0})],f.prototype,"loadError",void 0);l.__decorate([m.property()],f.prototype,"serverVersionLookup",void 0);l.__decorate([m.property()],
f.prototype,"serviceNameLookup",void 0);l.__decorate([m.property({readOnly:!0})],f.prototype,"state",null);l.__decorate([m.property()],f.prototype,"userLookup",void 0);l.__decorate([m.property()],f.prototype,"versionIdentifierLookup",void 0);l.__decorate([m.property()],f.prototype,"versionInfoLookup",void 0);l.__decorate([m.property()],f.prototype,"versionAdministratorLookup",void 0);l.__decorate([m.property()],f.prototype,"versionManagementServiceLookup",void 0);l.__decorate([m.property()],f.prototype,
"versioningStateLookup",void 0);l.__decorate([m.property()],f.prototype,"view",void 0);l.__decorate([m.property()],f.prototype,"versioningStates",void 0);return f=l.__decorate([y.subclass("esri.widgets.VersionManagement.VersionManagementViewModel")],f)});