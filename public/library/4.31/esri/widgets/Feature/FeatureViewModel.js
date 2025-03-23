// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Graphic ../../arcade/featureset/support/FeatureSetQueryInterceptor ../../core/Accessor ../../core/arrayUtils ../../core/Collection ../../core/Identifiable ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/throttle ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/has ../../core/accessorSupport/decorators/subclass ../../popup/content/TextContent ../../support/popupUtils ../../time/timeZoneUtils ./FeatureAttachments/FeatureAttachmentsViewModel ./FeatureContent/FeatureContentViewModel ./FeatureExpression/FeatureExpressionViewModel ./FeatureFields/FeatureFieldsViewModel ./FeatureMedia/FeatureMediaViewModel ./FeatureRelationship/FeatureRelationshipViewModel ./FeatureUtilityNetworkAssociations/FeatureUtilityNetworkAssociationsViewModel ./support/arcadeFeatureUtils ./support/featureUtils ./support/relatedFeatureUtils ../../geometry/Point".split(" "),
function(m,l,C,D,E,F,G,H,I,y,t,J,n,K,X,L,M,z,N,O,A,P,Q,x,R,S,T,q,u,U){var v;const B={attachmentsContent:!0,chartAnimation:!0,customContent:!0,expressionContent:!0,fieldsContent:!0,mediaContent:!0,textContent:!0,relationshipContent:!0,utilityNetworkAssociationsContent:!0};l=v=class extends H.IdentifiableMixin(E){constructor(a){super(a);this._associationVMAbortController=this._featureAbortController=this._error=null;this._graphicChangedThrottled=J.throttle(this._graphicChanged,1,this);this._graphicExpressionAttributes=
this._expressionAttributes=null;this.abilities={...B};this.content=null;this.contentViewModels=[];this.description=null;this.defaultPopupTemplateEnabled=!1;this.location=this.lastEditInfo=this.formattedAttributes=null;this.relatedInfos=new Map;this.title="";this.view=null;this._isAllowedContentType=b=>{const {abilities:c}=this;return"attachments"===b.type&&!!c.attachmentsContent||"custom"===b.type&&!!c.customContent||"fields"===b.type&&!!c.fieldsContent||"media"===b.type&&!!c.mediaContent||"text"===
b.type&&!!c.textContent||"expression"===b.type&&!!c.expressionContent||"relationship"===b.type&&!!c.relationshipContent||"utility-network-associations"===b.type&&!!c.utilityNetworkAssociationsContent};this.addHandles(t.watch(()=>[this.graphic,this._effectivePopupTemplate,this.abilities,this.timeZone],()=>this._graphicChangedThrottled(),t.initial))}initialize(){this.addHandles(this._graphicChangedThrottled)}destroy(){this._clear();this._cancelFeatureQuery();this.graphic=this._error=null;this._destroyContentViewModels();
this.relatedInfos.clear()}get _effectivePopupTemplate(){return null!=this.graphic?this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled):null}get _fieldInfoMap(){return q.createFieldInfoMap(q.getAllFieldInfos(this._effectivePopupTemplate),this._sourceLayer)}get _sourceLayer(){return q.getSourceLayer(this.graphic)}castAbilities(a){return{...B,...a}}get isTable(){return this._sourceLayer?.isTable||!1}get state(){return this.graphic?this._error?"error":this.waitingForContent?"loading":
"ready":"disabled"}set graphic(a){this._featureAbortController=new AbortController;this._set("graphic",a?.clone()??null)}get spatialReference(){return this.view?.spatialReference??null}set spatialReference(a){this._override("spatialReference",a)}get timeZone(){return this.view?.timeZone??N.system}set timeZone(a){this._overrideIfSome("timeZone",a)}get map(){return this.view?.map||null}set map(a){this._override("map",a)}get waitingForContent(){return!(!this._featureAbortController&&!this._associationVMAbortController)}setActiveMedia(a,
b){a=this.contentViewModels[a];a instanceof x&&a.setActiveMedia(b)}nextMedia(a){a=this.contentViewModels[a];a instanceof x&&a.next()}previousMedia(a){a=this.contentViewModels[a];a instanceof x&&a.previous()}async updateGeometry(){const {graphic:a,spatialReference:b,_sourceLayer:c}=this;await c?.load();var d=c?.objectIdField;d&&a&&c&&(d=a?.attributes?.[d],null!=d&&(d=[d],!a.geometry&&(d=(await q.querySourceLayer({layer:c,graphic:a,outFields:[],objectIds:d,returnGeometry:!0,spatialReference:b}))?.geometry)))&&
(a.geometry=d)}_clear(){this._set("title","");this._set("content",null);this._set("formattedAttributes",null)}async _graphicChanged(){this._cancelFeatureQuery();this._error=null;this._clear();const {graphic:a}=this;if(a){var b=new AbortController;this._featureAbortController=b;try{await this._queryFeature({signal:b.signal})}catch(c){y.isAbortError(c)||(this._error=c,I.getLogger(this).error("error","The popupTemplate could not be displayed for this feature.",{error:c,graphic:a,popupTemplate:this._effectivePopupTemplate}))}this._featureAbortController===
b&&(this._featureAbortController=null)}}_cancelFeatureQuery(){const {_featureAbortController:a}=this;a&&a.abort();this._featureAbortController=null}_compileContentElement(a,b){if("attachments"===a.type)return this._compileAttachments(a,b);if("custom"===a.type)return this._compileCustom(a,b);if("fields"===a.type)return this._compileFields(a,b);if("media"===a.type)return this._compileMedia(a,b);if("text"===a.type)return this._compileText(a,b);if("expression"===a.type)return this._compileExpression(a,
b);if("relationship"===a.type)return this._compileRelationship(a,b);if("utility-network-associations"===a.type)return this._compileUtilityNetworkAssociation(a,b)}_compileContent(a){this._destroyContentViewModels();if(this.graphic)return Array.isArray(a)?a.filter(this._isAllowedContentType).map((b,c)=>this._compileContentElement(b,c)).filter(F.isSome):"string"===typeof a?this._compileText(new M({text:a}),0).text:a}_destroyContentViewModels(){this.removeHandles("relationship-view-models");this.removeHandles("content-view-models");
this.contentViewModels.forEach(a=>a&&!a.destroyed&&a.destroy());this._set("contentViewModels",[])}_matchesFeature(a,b){a=a?.graphic?.getObjectId();b=b?.getObjectId();return null!=a&&null!=b&&a===b}_setRelatedFeaturesViewModels({relatedFeatureViewModels:a,relatedFeatures:b,map:c}){const {view:d,spatialReference:e,timeZone:h}=this;b?.filter(Boolean).forEach(k=>{a.some(g=>this._matchesFeature(g,k))||a.add(new v({abilities:{relationshipContent:!1},map:c,view:d,spatialReference:e,timeZone:h,graphic:k}))});
a.forEach(k=>{b?.find(g=>this._matchesFeature(k,g))||a.remove(k)})}_setExpressionContentVM(a,b){const c=this.formattedAttributes,{contentElement:d,contentElementViewModel:e}=a;a=d?.type;e&&a&&("fields"===a&&(this._createFieldsFormattedAttributes({contentElement:d,contentElementIndex:b,formattedAttributes:c}),e.set(this._createFieldsVMParams(d,b))),"media"===a&&(this._createMediaFormattedAttributes({contentElement:d,contentElementIndex:b,formattedAttributes:c}),e.set(this._createMediaVMParams(d,b))),
"text"===a&&e.set(this._createTextVMParams(d)))}_compileRelationship(a,b){const {displayCount:c,orderByFields:d,relationshipId:e,title:h,description:k}=a,{_sourceLayer:g,graphic:f,map:p}=this;if(q.isRelatableFeatureSupportedLayer(g)){var r=new R({displayCount:c,graphic:f,orderByFields:d,relationshipId:e,layer:g,map:p,...this._compileTitleAndDesc({title:h,description:k})});this.contentViewModels[b]=r;this.addHandles(t.on(()=>r.relatedFeatures,"change",()=>this._setRelatedFeaturesViewModels(r)),"relationship-view-models");
return a}}_matchesGlobalFeature(a,b){a=a?.association.globalId;b=b?.association.globalId;return null!=a&&null!=b&&a===b}async _setUpUtilityNetworkAssociationsViewModels(a,b,c){const {view:d,spatialReference:e,timeZone:h}=this;a.forEach((g,f)=>{const p=b.get(f);p?g.forEach(r=>{p.find(w=>this._matchesGlobalFeature(r,w))||(g.remove(r),0===g.length&&a.delete(f))}):(g.removeAll(),a.delete(f))});b.forEach((g,f)=>{const p=a.get(f)||new G;g?.filter(Boolean).forEach(r=>{p.some(w=>this._matchesGlobalFeature(w,
r))||p.add({association:r.association,featureViewModel:new v({abilities:{utilityNetworkAssociationsContent:!1},map:c,view:d,spatialReference:e,timeZone:h,graphic:r.feature}),terminalName:r.terminalName})});a.set(f,p)});const k=new AbortController;this._associationVMAbortController=k;await this._sortListObjectsByTitle(a,{signal:k.signal});this._associationVMAbortController===k&&(this._associationVMAbortController=null)}async _sortListObjectsByTitle(a,b){for(const c of a.values())a=c.map(d=>t.whenOnce(()=>
"ready"===d.featureViewModel.state,b?.signal)),await Promise.all(a),c.sort(this._compareByFeatureTitle)}_compareByFeatureTitle(a,b){a=z.getFeaturePopupTitle(a.featureViewModel);b=z.getFeaturePopupTitle(b.featureViewModel);return a.localeCompare(b,void 0,{numeric:!0})}_compileUtilityNetworkAssociation(a,b){const {title:c,description:d,associationTypes:e}=a,{_sourceLayer:h,graphic:k,map:g}=this;if(q.isAssociatedFeatureSupportedLayer(h)){var f=new S({graphic:k,associationTypes:e,layer:h,map:g,...this._compileTitleAndDesc({title:c,
description:d})});this.contentViewModels[b]=f;this.addHandles([t.watch(()=>f.associationFeatures.values(),()=>this._setUpUtilityNetworkAssociationsViewModels(f.associationViewModels,f.associationFeatures,f.map))],"association-view-models");return a}}_compileExpression(a,b){const {expressionInfo:c}=a,{graphic:d,map:e,spatialReference:h,view:k,location:g}=this,f=new P({expressionInfo:c,graphic:d,interceptor:v.interceptor,map:e,spatialReference:h,view:k,location:g});this.contentViewModels[b]=f;this.addHandles(t.watch(()=>
f.contentElementViewModel,()=>this._setExpressionContentVM(f,b),t.initial),"content-view-models");return a}_compileAttachments(a,b){const {graphic:c}=this,{description:d,title:e}=a;this.contentViewModels[b]=new O({graphic:c,...this._compileTitleAndDesc({title:e,description:d})});return a}_compileCustom(a,b){const {graphic:c}=this,{creator:d,destroyer:e}=a;this.contentViewModels[b]=new A({graphic:c,creator:d,destroyer:e});return a}_compileTitleAndDesc({title:a,description:b}){const {_fieldInfoMap:c,
_sourceLayer:d,graphic:e,formattedAttributes:h}=this,k=e?.attributes,g=this._expressionAttributes,f=h.global;return{title:q.substituteFieldsInLinksAndAttributes({attributes:k,fieldInfoMap:c,globalAttributes:f,expressionAttributes:g,layer:d,text:a}),description:q.substituteFieldsInLinksAndAttributes({attributes:k,fieldInfoMap:c,globalAttributes:f,expressionAttributes:g,layer:d,text:b})}}_createFieldsVMParams(a,b){const c=this._effectivePopupTemplate,d=this.formattedAttributes,e={...d?.global,...d?.content[b]};
b=(a?.fieldInfos||c?.fieldInfos)?.filter(({fieldName:g})=>!!g&&(q.isExpressionField(g)||q.isRelatedField(g)||e.hasOwnProperty(g)));const {description:h,title:k}=a;return{attributes:e,expressionInfos:c?.expressionInfos,fieldInfos:b,...this._compileTitleAndDesc({title:k,description:h})}}_compileFields(a,b){const c=a.clone();a=new Q(this._createFieldsVMParams(a,b));this.contentViewModels[b]=a;c.fieldInfos=a.formattedFieldInfos.slice();return c}_createMediaVMParams(a,b){const {abilities:c,graphic:d,_fieldInfoMap:e,
_effectivePopupTemplate:h,relatedInfos:k,_sourceLayer:g,_expressionAttributes:f}=this,p=this.formattedAttributes,r=d?.attributes??{},{description:w,mediaInfos:V,title:W}=a;return{abilities:{chartAnimation:c.chartAnimation},activeMediaInfoIndex:a.activeMediaInfoIndex||0,attributes:r,isAggregate:d?.isAggregate,layer:g,fieldInfoMap:e,formattedAttributes:{...p?.global,...p?.content[b]},expressionAttributes:f,mediaInfos:V,popupTemplate:h,relatedInfos:k,...this._compileTitleAndDesc({title:W,description:w})}}_compileMedia(a,
b){const c=a.clone();a=new x(this._createMediaVMParams(a,b));c.mediaInfos=a.formattedMediaInfos.slice();this.contentViewModels[b]=a;return c}_createTextVMParams(a){const {graphic:b,_fieldInfoMap:c,_sourceLayer:d,_expressionAttributes:e}=this;a&&a.text&&(a.text=q.substituteFieldsInLinksAndAttributes({attributes:b?.attributes??{},fieldInfoMap:c,globalAttributes:this.formattedAttributes?.global??{},expressionAttributes:e,layer:d,text:a.text}));return{graphic:b,creator:a.text}}_compileText(a,b){a=a.clone();
this.contentViewModels[b]=new A(this._createTextVMParams(a));return a}_compileLastEditInfo(){const {_effectivePopupTemplate:a,_sourceLayer:b,graphic:c,timeZone:d}=this;if(a){var {lastEditInfoEnabled:e}=a,h=b?.editFieldsInfo;if(e&&h)return q.formatEditInfo(h,c?.attributes,d,b)}}_compileTitle(a){const {_fieldInfoMap:b,_sourceLayer:c,graphic:d,_expressionAttributes:e}=this;return q.substituteFieldsInLinksAndAttributes({attributes:d?.attributes??{},fieldInfoMap:b,globalAttributes:this.formattedAttributes?.global??
{},expressionAttributes:e,layer:c,text:a})}async _getTitle(){const {_effectivePopupTemplate:a,graphic:b}=this;return b?q.graphicCallback({type:"title",value:a?.title,event:{graphic:b}}):null}async _getContent(){const {_effectivePopupTemplate:a,graphic:b}=this;return b?q.graphicCallback({type:"content",value:a?.content,event:{graphic:b}}):null}async _queryFeature(a){const {_featureAbortController:b,_sourceLayer:c,graphic:d,_effectivePopupTemplate:e}=this,h=this.map,k=this.view,g=this.spatialReference,
f=this.location;if(b===this._featureAbortController&&d){await q.queryUpdatedFeature({graphic:d,popupTemplate:e,layer:c,spatialReference:g},a);var {content:{value:p},title:{value:r}}=await y.eachAlways({content:this._getContent(),title:this._getTitle()});({expressionAttributes:{value:a}}=await y.eachAlways({checkForRelatedFeatures:this._checkForRelatedFeatures(a),expressionAttributes:T.createCompiledExpressions({expressionInfos:e?.expressionInfos,spatialReference:g,graphic:d,map:h,interceptor:v.interceptor,
view:k,options:a,location:f})}));b===this._featureAbortController&&d&&(this._expressionAttributes=a,this._graphicExpressionAttributes={...d.attributes,...a},this._set("formattedAttributes",this._createFormattedAttributes(p)),this._set("title",this._compileTitle(r)),this._set("lastEditInfo",this._compileLastEditInfo()||null),this._set("content",this._compileContent(p)||null))}}_createMediaFormattedAttributes({contentElement:a,contentElementIndex:b,formattedAttributes:c}){const {_effectivePopupTemplate:d,
graphic:e,relatedInfos:h,_sourceLayer:k,_fieldInfoMap:g,_graphicExpressionAttributes:f,timeZone:p}=this;c.content[b]=q.formatAttributes({fieldInfos:d?.fieldInfos,graphic:e,attributes:{...f,...a.attributes},layer:k,fieldInfoMap:g,relatedInfos:h,timeZone:p})}_createFieldsFormattedAttributes({contentElement:a,contentElementIndex:b,formattedAttributes:c}){if(a.fieldInfos){const {graphic:d,relatedInfos:e,_sourceLayer:h,_fieldInfoMap:k,_graphicExpressionAttributes:g,timeZone:f}=this;c.content[b]=q.formatAttributes({fieldInfos:a.fieldInfos,
graphic:d,attributes:{...g,...a.attributes},layer:h,fieldInfoMap:k,relatedInfos:e,timeZone:f})}}_createFormattedAttributes(a){const {_effectivePopupTemplate:b,graphic:c,relatedInfos:d,_sourceLayer:e,_fieldInfoMap:h,_graphicExpressionAttributes:k,timeZone:g}=this,f={global:q.formatAttributes({fieldInfos:b?.fieldInfos,graphic:c,attributes:k,layer:e,fieldInfoMap:h,relatedInfos:d,timeZone:g}),content:[]};Array.isArray(a)&&a.forEach((p,r)=>{"fields"===p.type&&this._createFieldsFormattedAttributes({contentElement:p,
contentElementIndex:r,formattedAttributes:f});"media"===p.type&&this._createMediaFormattedAttributes({contentElement:p,contentElementIndex:r,formattedAttributes:f})});return f}_checkForRelatedFeatures(a){const {graphic:b,_effectivePopupTemplate:c}=this;return this._queryRelatedInfos(b,q.getAllFieldInfos(c),a)}async _queryRelatedInfos(a,b,c){const {relatedInfos:d,_sourceLayer:e}=this;d.clear();const h=null!=e?.associatedLayer?await e?.associatedLayer.load(c):e;if(h&&a&&b.filter(f=>!!f.fieldName&&q.isRelatedField(f.fieldName))?.length){b.forEach(f=>
this._configureRelatedInfo(f,h));var k=await u.queryLayerInfos({relatedInfos:d,layer:h},c);Object.keys(k).forEach(f=>{const p=d.get(f.toString());f=k[f]?.value;p&&f&&(p.layerInfo=f.data)});var g=await u.queryRelatedFeatures({graphic:a,relatedInfos:d,layer:h},c);Object.keys(g).forEach(f=>{u.setRelatedFeatures(g[f]?.value,d.get(f.toString()))})}}_configureRelatedInfo(a,b){const {relatedInfos:c}=this,d=u.getRelatedFieldInfo(a.fieldName||"");if(d){var {layerId:e,fieldName:h}=d;e&&(b=c.get(e.toString())||
u.createRelatedInfo(e,b))&&(u.updateRelatedInfo({relatedInfo:b,fieldName:h,fieldInfo:a}),this.relatedInfos.set(e,b))}}};l.interceptor=new D.FeatureSetQueryInterceptor(q.preLayerQueryCallback,q.preRequestCallback);m.__decorate([n.property()],l.prototype,"_error",void 0);m.__decorate([n.property()],l.prototype,"_featureAbortController",void 0);m.__decorate([n.property()],l.prototype,"_associationVMAbortController",void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"_effectivePopupTemplate",
null);m.__decorate([n.property({readOnly:!0})],l.prototype,"_fieldInfoMap",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"_sourceLayer",null);m.__decorate([n.property()],l.prototype,"abilities",void 0);m.__decorate([K.cast("abilities")],l.prototype,"castAbilities",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"content",void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"contentViewModels",void 0);m.__decorate([n.property()],l.prototype,"description",void 0);m.__decorate([n.property({type:Boolean})],
l.prototype,"defaultPopupTemplateEnabled",void 0);m.__decorate([n.property({readOnly:!0})],l.prototype,"isTable",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"state",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"formattedAttributes",void 0);m.__decorate([n.property({type:C,value:null})],l.prototype,"graphic",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"lastEditInfo",void 0);m.__decorate([n.property({type:U})],l.prototype,"location",void 0);m.__decorate([n.property({readOnly:!0})],
l.prototype,"relatedInfos",void 0);m.__decorate([n.property()],l.prototype,"spatialReference",null);m.__decorate([n.property()],l.prototype,"timeZone",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"title",void 0);m.__decorate([n.property()],l.prototype,"map",null);m.__decorate([n.property({readOnly:!0})],l.prototype,"waitingForContent",null);m.__decorate([n.property()],l.prototype,"view",void 0);return l=v=m.__decorate([L.subclass("esri.widgets.Feature.FeatureViewModel")],l)});