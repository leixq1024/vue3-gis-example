/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import"../core/lang.js";import{L as r}from"./Logger.js";import{throwIfAborted as i}from"../core/promiseUtils.js";import{watch as o,syncAndInitial as s,on as n}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import u from"../layers/support/FeatureEffect.js";import p from"../layers/support/FeatureFilter.js";import{fixFields as d,unpackFieldNames as f,l as c,collectLabelingFields as m,collectElevationFields as y,collectFilterFields as h,collectFeatureReductionFields as F,collectOrderByInfos as g,collectFields as w,collectField as E,featureHasFields as I}from"../layers/support/fieldUtils.js";import{a as b}from"./floorFilterUtils.js";import x from"../rest/support/Query.js";import{a as v,g as R}from"./popupUtils.js";const _=_=>{let q=class extends _{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([o((()=>{const e=this.layer;return[e&&"elevationInfo"in e?e.elevationInfo?.featureExpressionInfo:null,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),s),n((()=>this.view?.floors),"change",(()=>this._handleRequiredFieldsChange())),n((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?d(t,[...f(t,e.outFields),...r]):d(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){r.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new x(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const e=b(this);null!=e&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new x(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?c():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:i,objectIdField:o}}=this,s="renderer"in t&&t.renderer,n="orderBy"in t&&t.orderBy,l="featureReduction"in t?t.featureReduction:null,a=new Set,u=await Promise.allSettled([s?s.collectRequiredFields(a,i):null,m(a,t),e&&"elevationInfo"in t?y(a,t):null,null!=this.filter?h(a,t,this.filter):null,e||null==this.featureEffect?null:h(a,t,this.featureEffect.filter),!e&&l?F(a,t,l):null,!e&&n?g(a,t,n):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&w(a,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"floorInfo"in t&&t.floorInfo&&w(a,t.fieldsIndex,[t.floorInfo.floorField]),"feature"===t.type&&e&&null!=t.infoFor3D&&(null==t.globalIdField&&r.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),w(a,t.fieldsIndex,[t.globalIdField])),"subtype-group"===t.type){E(a,i,t.subtypeField);const e=t.sublayers.map((e=>Promise.all([e.renderer?.collectRequiredFields(a,i),m(a,e)])));await Promise.allSettled(e)}if("catalog-footprint"===t.type&&t.parent){const e=t.parent;w(a,i,[e.itemNameField,e.itemSourceField,e.itemTypeField,e.maxScaleField,e.minScaleField])}for(const e of u)"rejected"===e.status&&r.getLogger(this).error(e.reason);E(a,i,o),e&&"displayField"in t&&t.displayField&&E(a,i,t.displayField);const p=Array.from(a).sort();this._set("requiredFields",p)}_validateFetchPopupFeatures(e,r){if(null!=r)for(const i of e){const e=i.origin&&"layer"in i.origin?i.origin.layer:i.layer;if("popupEnabled"in e&&!e.popupEnabled)throw new t("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e});if(i.isAggregate){const r="featureReduction"in e?e.featureReduction:null;if(!(r&&"popupTemplate"in r&&r.popupEnabled&&r.popupTemplate))throw new t("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})}else if("popupTemplate"in e&&!v(e,r))throw new t("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}}_popupFeatureHasRequiredFields(e,t){return I(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),o=new Map,s=await this._createPopupQuery(e.map((e=>e.origin?.layer??e.layer)),t);for(let n=0;n<e.length;n++){const l=e[n];if(l.isAggregate){r[n]=l;continue}const a=l.origin?.layer??l.layer;if(!a||!("popupEnabled"in a))continue;const u=f(this.layer.fieldsIndex,s.outFields),p=v(a,t);if(null==p)continue;const d=await this._loadArcadeModules(p);i(t),d&&d.arcadeUtils.hasGeometryOperations(p)||!this._popupFeatureHasRequiredFields(l,u)?o.set(l.getObjectId(),{graphic:l,index:n}):r[n]=l}if("stream"===this.layer.type||"parquet"===this.layer.type||0===o.size)return r.filter(Boolean);s.objectIds=Array.from(o.keys());try{const e=await this.layer.queryFeatures(s,t);for(const t of e.features){const{graphic:{geometry:e,origin:i},index:s}=o.get(t.getObjectId());t.geometry||=e,t.origin=i,r[s]=t}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),o=new Set;let s=!1;const n=e??[this.layer];for(const e of n){if(!("popupEnabled"in e))continue;const r=v(e,t);if(null==r)continue;const n=await this._loadArcadeModules(r);i(t);const l=n&&n.arcadeUtils.hasGeometryOperations(r);s=!("point"!==this.layer.geometryType&&!l);const a=await R(this.layer,r);i(t);for(const e of a)o.add(e)}if(r.returnGeometry=s,r.returnZ=s,r.returnM=s,r.outFields=Array.from(o),r.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const e=b(this);null!=e&&(r.where=r.where?`(${r.where}) AND (${e})`:e)}return r}canResume(){return!(!super.canResume()||null!=this.timeExtent&&this.timeExtent.isEmpty)}getTest(){}get test(){}};return e([l()],q.prototype,"_updatingRequiredFieldsPromise",void 0),e([l({readOnly:!0})],q.prototype,"availableFields",null),e([l({readOnly:!0})],q.prototype,"dataUpdating",void 0),e([l({type:u})],q.prototype,"featureEffect",null),e([l({type:p})],q.prototype,"filter",void 0),e([l()],q.prototype,"layer",void 0),e([l({type:Number})],q.prototype,"maximumNumberOfFeatures",null),e([l({readOnly:!0,type:Boolean})],q.prototype,"maximumNumberOfFeaturesExceeded",null),e([l({readOnly:!0})],q.prototype,"requiredFields",void 0),e([l()],q.prototype,"suspended",void 0),e([l()],q.prototype,"view",void 0),q=e([a("esri.views.layers.FeatureLayerView")],q),q};export{_ as F};
