// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ./chunks/tslib.es6 ./request ./core/Collection ./core/collectionUtils ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/maybe ./core/promiseUtils ./core/urlUtils ./core/accessorSupport/decorators/property ./core/has ./core/accessorSupport/decorators/subclass ./core/accessorSupport/decorators/writer ./geometry/SpatialReference ./portal/Portal ./portal/PortalItem ./support/basemapDefinitions ./support/BasemapStyle ./webdoc/support/writeUtils".split(" "),
function(B,g,C,q,u,f,r,D,E,v,F,w,n,h,O,G,H,I,x,J,y,K,z){var m;let L=0;f=m=class extends f.JSONSupportMixin(D){constructor(a){super(a);this.thumbnailUrl=this.style=this.spatialReference=this.portalItem=this.id=null;this.title="Basemap";this.id=Date.now().toString(16)+"-basemap-"+L++;this.baseLayers=new q;this.referenceLayers=new q;const c=b=>{b.parent&&b.parent!==this&&"remove"in b.parent&&b.parent.remove(b);b.parent=this;"elevation"===b.type&&v.getLogger(this).error(`Layer '${b.title}, id:${b.id}' of type '${b.type}' is not supported as a basemap layer and will therefore be ignored.`)};
this.addHandles([this.baseLayers.on("after-add",b=>c(b.item)),this.referenceLayers.on("after-add",b=>c(b.item)),this.baseLayers.on("after-remove",b=>{b.item.parent=null}),this.referenceLayers.on("after-remove",b=>{b.item.parent=null})])}initialize(){this.when().catch(a=>{v.getLogger(this).error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var a=this.baseLayers.toArray();for(const c of a)c.destroy();
a=this.referenceLayers.toArray();for(const c of a)c.destroy();this.baseLayers.destroy();this.referenceLayers.destroy();this.portalItem=F.destroyMaybe(this.portalItem)}normalizeCtorArgs(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a={...a},delete a.resourceInfo);return a}set baseLayers(a){this._set("baseLayers",u.referenceSetter(a,this._get("baseLayers")))}_writeBaseLayers(a,c,b){const d=[];a&&(b={...b,layerContainerType:"basemap"},this.baseLayers.forEach(e=>{e=z.getLayerJSON(e,
b.webmap?b.webmap.getLayerJSONFromResourceInfo(e):null,b);null!=e&&d.push(e)}),this.referenceLayers.forEach(e=>{const k=z.getLayerJSON(e,b.webmap?b.webmap.getLayerJSONFromResourceInfo(e):null,b);null!=k&&("scene"!==e.type&&(k.isReference=!0),d.push(k))}));c.baseMapLayers=d}set referenceLayers(a){this._set("referenceLayers",u.referenceSetter(a,this._get("referenceLayers")))}writeTitle(a,c){c.title=a||"Basemap"}load(a){this.addResolvingPromise(this._loadFromSource(a));return Promise.resolve(this)}loadAll(){return E.loadAll(this,
a=>{a(this.baseLayers,this.referenceLayers)})}clone(){const a={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.map(c=>r.isClonable(c)?c.clone():c),referenceLayers:this.referenceLayers.map(c=>r.isClonable(c)?c.clone():c)};this.loaded&&(a.loadStatus="loaded");return(new m({resourceInfo:this.resourceInfo})).set(a)}read(a,c){this.resourceInfo||this._set("resourceInfo",{data:a,context:c});super.read(a,c)}write(a,c){a=a||{};c?.origin||(c={origin:"web-map",...c});super.write(a,
c);!this.loaded&&this.resourceInfo?.data.baseMapLayers&&(a.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(b=>{b=r.clone(b);b.url&&n.isProtocolRelative(b.url)&&(b.url=`https:${b.url}`);b.templateUrl&&n.isProtocolRelative(b.templateUrl)&&(b.templateUrl=`https:${b.templateUrl}`);return b}));return a}async _loadFromSource(a){const {resourceInfo:c,portalItem:b,style:d}=this;w.throwIfAborted(a);const e=[];c?(e.push(this._loadLayersFromJSON(c.data,c.context?c.context.url:null,a)),c.data.id&&!c.data.title&&
e.push(y.getBasemapTitle(c.data.id).then(k=>{k&&this.read({title:k},c.context)}))):b?e.push(this._loadFromItem(b,a)):d&&e.push(this._loadFromStylesService(d,a));await Promise.all(e)}async _loadLayersFromJSON(a,c,b){const d=this.resourceInfo?.context,e=this.portalItem?.portal||d?.portal||null,k=M[d?.origin||""]??"web-map",{populateOperationalLayers:A}=await new Promise((p,l)=>B(["./layers/support/layersCreator"],p,l)),t=[];w.throwIfAborted(b);if(a.baseMapLayers&&Array.isArray(a.baseMapLayers)){c={context:{...d,
origin:k,url:c,portal:e,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"};const p=l=>"web-scene"===k&&"ArcGISSceneServiceLayer"===l.layerType||l.isReference;b=A(this.baseLayers,a.baseMapLayers.filter(l=>!p(l)),c);t.push(b);a=A(this.referenceLayers,a.baseMapLayers.filter(p),c);t.push(a)}await Promise.allSettled(t)}async _loadFromItem(a,c){const b=await (await a.load(c)).fetchData("json",c),d=n.urlToObject(a.itemUrl??"");this._set("resourceInfo",{data:b.baseMap??{},context:{origin:N[a.type||
""]??"web-map",portal:a.portal||x.getDefault(),url:d}});this.read(this.resourceInfo.data,this.resourceInfo.context);this.read({spatialReference:b.spatialReference},this.resourceInfo.context);this.read({title:a.title,thumbnailUrl:a.thumbnailUrl},{origin:"portal-item",portal:a.portal||x.getDefault(),url:d});return this._loadLayersFromJSON(this.resourceInfo.data,d,c)}async _loadFromStylesService(a,c){var b=`${a.serviceUrl}/${a.id}`;const d=(await C(b,{query:{language:a.getLanguageParamValue(),places:a.places,
worldview:a.worldview,token:a.apiKey},signal:c?.signal})).data;b=n.urlToObject(b);this._set("resourceInfo",{data:d.baseMap??{},context:{origin:"web-map",url:b}});this.read(this.resourceInfo.data,this.resourceInfo.context);this.read({spatialReference:d.spatialReference},this.resourceInfo.context);await this._loadLayersFromJSON(this.resourceInfo.data,b,c);if(a.apiKey)for(const e of[...this.baseLayers,...this.referenceLayers])"apiKey"in e&&(e.apiKey=a.apiKey)}static fromId(a){return(a=y.esriBasemapDefinitions[a])?
a.itemId?new m({portalItem:{id:a.itemId,portal:{url:"https://www.arcgis.com"}}}):m.fromJSON(a,{origin:a.is3d?"web-scene":"web-map"}):null}};g.__decorate([h.property({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(a,c,b,d){this._writeBaseLayers(a,c,d)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:q}},writer(a,c,b,d){this._writeBaseLayers(a,c,d)}}}}}})],f.prototype,"baseLayers",null);g.__decorate([h.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],
f.prototype,"id",void 0);g.__decorate([h.property({type:J})],f.prototype,"portalItem",void 0);g.__decorate([h.property()],f.prototype,"referenceLayers",null);g.__decorate([h.property({readOnly:!0})],f.prototype,"resourceInfo",void 0);g.__decorate([h.property({type:I})],f.prototype,"spatialReference",void 0);g.__decorate([h.property({type:K})],f.prototype,"style",void 0);g.__decorate([h.property()],f.prototype,"thumbnailUrl",void 0);g.__decorate([h.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],
f.prototype,"title",void 0);g.__decorate([H.writer("title")],f.prototype,"writeTitle",null);f=m=g.__decorate([G.subclass("esri.Basemap")],f);const N={"Web Scene":"web-scene","Web Map":"web-map","Link Chart":"link-chart"},M={"web-scene":"web-scene","web-map":"web-map","link-chart":"link-chart"};return f});