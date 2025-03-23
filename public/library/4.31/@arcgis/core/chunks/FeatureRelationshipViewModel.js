/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import r from"../core/Accessor.js";import{i as o}from"../core/lang.js";import{ClonableMixin as l}from"../core/Clonable.js";import a from"../core/Collection.js";import{IdentifiableMixin as s}from"../core/Identifiable.js";import{ignoreAbortErrors as i,debounce as n}from"../core/promiseUtils.js";import{watch as u,initial as d}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import p from"../rest/support/RelationshipQuery.js";import{b as c,f as C}from"./featureUtils.js";import{d as b}from"./featureFormUtils.js";let g=class extends(l(s(r))){constructor(e){super(e),this._loaded=!1,this._queryAbortController=null,this._queryPageAbortController=null,this._queryFeatureCountAbortController=null,this.featuresPerPage=10,this.description=null,this.graphic=null,this.layer=null,this.map=null,this.orderByFields=null,this.featureCount=0,this.relationshipId=null,this.showAllEnabled=!1,this.title=null,this._cancelQuery=()=>{const{_queryAbortController:e}=this;e&&e.abort(),this._queryAbortController=null},this._cancelQueryFeatureCount=()=>{const{_queryFeatureCountAbortController:e}=this;e&&e.abort(),this._queryFeatureCountAbortController=null},this._cancelQueryPage=()=>{const{_queryPageAbortController:e}=this;e&&e.abort(),this._queryPageAbortController=null},this._queryController=async()=>{this._cancelQuery();const e=new AbortController;this._queryAbortController=e,await i(this._query()),this._queryAbortController===e&&(this._queryAbortController=null)},this._queryFeatureCountController=async()=>{this._loaded=!1,this._cancelQueryFeatureCount();const e=new AbortController;this._queryFeatureCountAbortController=e,await i(this._queryFeatureCount()),this._queryFeatureCountAbortController===e&&(this._queryFeatureCountAbortController=null),this._loaded=!0},this._queryPageController=async()=>{const e=new AbortController;this._queryPageAbortController=e,await i(this._queryPage()),this._queryPageAbortController===e&&(this._queryPageAbortController=null)},this._queryDebounced=n(this._queryController,100),this._queryFeatureCountDebounced=n(this._queryFeatureCountController,100),this._queryPageDebounced=n(this._queryPageController,100),this._query=async()=>{const{_queryAbortController:e,relatedFeatures:t}=this;this.featureCount&&(this._destroyRelatedFeatureViewModels(),this.featurePage=1,t.destroyAll(),this.destroyed||t.addMany(this._sliceFeatures(await this._queryRelatedFeatures({signal:e?.signal}))))},this.addHandles([u((()=>[this.displayCount,this.graphic,this.layer,this.layer?.loaded,this.map,this.orderByFields,this.relationshipId,this.featuresPerPage,this.showAllEnabled,this.canQuery,this.featureCount]),(()=>this._queryDebounced()),d),u((()=>[this.featurePage,this.showAllEnabled]),(()=>this._queryPageDebounced())),u((()=>[this.layer,this.relationshipId,this.objectId,this.canQuery]),(()=>this._queryFeatureCountDebounced()))])}destroy(){this._destroyRelatedFeatureViewModels(),this.relatedFeatures.destroyAll(),this._cancelQuery(),this._cancelQueryFeatureCount(),this._cancelQueryPage()}set featurePage(e){const{featuresPerPage:t,featureCount:r}=this,o=Math.ceil(r/t)||1;this._set("featurePage",Math.min(Math.max(e,1),o))}get featurePage(){return this._get("featurePage")}get orderByFieldsFixedCasing(){const{orderByFields:e,relatedLayer:t}=this;return e&&t?.loaded?e.map((e=>{const r=e.clone();return r.field=c(e.field,t),r})):e??[]}get supportsCacheHint(){return!!this.layer?.capabilities?.queryRelated?.supportsCacheHint}get canLoad(){return!!this.map&&null!=this.relationshipId&&"number"==typeof this.objectId}get canQuery(){const e=this.layer?.capabilities?.queryRelated;return!!(this.relatedLayer&&this.relationship&&null!=this.relationshipId&&null!=this.objectId&&e?.supportsCount&&e?.supportsPagination)}get itemDescriptionFieldName(){return this.orderByFieldsFixedCasing[0]?.field||null}set displayCount(e){this._set("displayCount",Math.min(Math.max(e,0),10))}get displayCount(){return this._get("displayCount")}get objectId(){return(this.objectIdField&&this.graphic?.attributes?.[this.objectIdField])??null}get objectIdField(){return this.layer?.objectIdField||null}get relatedFeatures(){return this._get("relatedFeatures")||new a}get relatedLayer(){const{layer:e,map:t,relationship:r}=this;return e?.loaded&&t&&r?C(t,e,r)??null:null}get relationship(){const{relationshipId:e,layer:t}=this;return null!=e?t?.relationships?.find((({id:t})=>t===e))??null:null}get relatedFeatureViewModels(){return this._get("relatedFeatureViewModels")||new a}get state(){const{_queryAbortController:e,_queryFeatureCountAbortController:t,_queryPageAbortController:r,canQuery:o,_loaded:l,canLoad:a}=this;return t||a&&!l?"loading":e||r?"querying":o?"ready":"disabled"}getRelatedFeatureByObjectId(e){return this.relatedFeatures.find((t=>t.getObjectId()===e))}refresh(){this._queryFeatureCountDebounced()}_destroyRelatedFeatureViewModels(){this.relatedFeatureViewModels?.destroyAll()}async _queryFeatureCount(){const{layer:e,relatedLayer:t,relationshipId:r,objectId:o,_queryFeatureCountAbortController:l,canQuery:a,supportsCacheHint:s}=this;if(await(e?.load()),await(t?.load()),!a||!e||!t||null==o)return void this._set("featureCount",0);const i=t.createQuery(),{historicMoment:n,gdbVersion:u}=e,d=new p({cacheHint:s,gdbVersion:u,historicMoment:n,relationshipId:r,returnGeometry:!1,objectIds:[o],where:i.where??void 0}),y=await e.queryRelatedFeaturesCount(d,{signal:l?.signal});this._set("featureCount",y[o]||0)}_sliceFeatures(e){const{showAllEnabled:t,displayCount:r}=this;return t?e:r?e.slice(0,r):[]}async _queryPage(){const{relatedFeatures:e,featurePage:t,showAllEnabled:r,_queryPageAbortController:o,featureCount:l}=this;!r||t<2||!l||e.addMany(await this._queryRelatedFeatures({signal:o?.signal}))}async _queryRelatedFeatures(e){const{orderByFieldsFixedCasing:t,showAllEnabled:r,featuresPerPage:l,displayCount:a,layer:s,relationshipId:i,featurePage:n,featureCount:u,relatedLayer:d,supportsCacheHint:y}=this,{canQuery:h,objectId:c}=this;if(!h||!s||!d||null==c)return[];const C=r?((n-1)*l+u)%u:0,g=r?l:a,_=d.objectIdField,F=[...t.map((e=>e.field)),...b(d),_].filter(o),f=t.map((e=>`${e.field} ${e.order}`)),m=d.createQuery(),{historicMoment:q,gdbVersion:A}=s,P=new p({orderByFields:f,start:C,num:g,outFields:F,cacheHint:y,historicMoment:q,gdbVersion:A,relationshipId:i,returnGeometry:!1,objectIds:[c],where:m.where??void 0}),w=await s.queryRelatedFeatures(P,{signal:e?.signal}),j=w[c]?.features||[];return j.forEach((e=>{e.sourceLayer=d,e.layer=d})),j}};e([y()],g.prototype,"_loaded",void 0),e([y()],g.prototype,"_queryAbortController",void 0),e([y()],g.prototype,"_queryPageAbortController",void 0),e([y()],g.prototype,"_queryFeatureCountAbortController",void 0),e([y({value:1})],g.prototype,"featurePage",null),e([y()],g.prototype,"featuresPerPage",void 0),e([y({readOnly:!0})],g.prototype,"orderByFieldsFixedCasing",null),e([y({readOnly:!0})],g.prototype,"supportsCacheHint",null),e([y({readOnly:!0})],g.prototype,"canLoad",null),e([y({readOnly:!0})],g.prototype,"canQuery",null),e([y()],g.prototype,"description",void 0),e([y({readOnly:!0})],g.prototype,"itemDescriptionFieldName",null),e([y({value:3})],g.prototype,"displayCount",null),e([y({type:t})],g.prototype,"graphic",void 0),e([y()],g.prototype,"layer",void 0),e([y()],g.prototype,"map",void 0),e([y({readOnly:!0})],g.prototype,"objectId",null),e([y({readOnly:!0})],g.prototype,"objectIdField",null),e([y()],g.prototype,"orderByFields",void 0),e([y({readOnly:!0})],g.prototype,"relatedFeatures",null),e([y({readOnly:!0})],g.prototype,"relatedLayer",null),e([y({readOnly:!0})],g.prototype,"relationship",null),e([y()],g.prototype,"featureCount",void 0),e([y({readOnly:!0})],g.prototype,"relatedFeatureViewModels",null),e([y()],g.prototype,"relationshipId",void 0),e([y()],g.prototype,"showAllEnabled",void 0),e([y()],g.prototype,"state",null),e([y()],g.prototype,"title",void 0),g=e([h("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],g);const _=g;export{_ as F};
