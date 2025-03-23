// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Error ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../../layers/support/fieldType ../../../layers/support/fieldUtils ../../../rest/support/FeatureSet ../../statistics/support/statsWorker ../../statistics/support/WorkerClient ../utils ./FeatureLayerAdapter ./LayerAdapter ./support/utils ../../../statistics/utils".split(" "),
function(x,y,z,n,r,B,C,u,L,D,E,F,A,t,G,v,H,I,q,J){function K(a,b=a.minimum,e=a.maximum,c){const f=[];for(var d=0;d<c;d++)f[d]=0;d=a.counts.length;const k=a.minimum,h=a.maximum;for(let m=0;m<d;m++){var g=(m+.5)/d;g=((1-g)*k+g*h-b)/(e-b)*c;0<=g&&g<=c&&(f[g===c?c-1:Math.floor(g)]+=a.counts[m])}const l=[];f.forEach((m,p)=>{const w=new y({attributes:{}});w.attributes.EXPR_1=p+1;w.attributes.countOFExpr=m;l.push(w)});return new A({features:l})}u=class extends I{constructor(a){super(a);this.workerClient=
this._featureLayerAdapter=null}destroy(){this.workerClient?.destroy()}_hasCachedStatistics(a){return this.layer.hasCachedStatistics(a)}_updateQuery(a,b=[],e=[]){if(!a||!e.length)return a;const c=this.layer.objectIdField;a=a.clone();b=b.filter(d=>{d=this.layer.getField(d);return!e.includes(d.name)});const f=b.some(d=>this.layer.getField(d).name===c);a.outFields=f?b:[...b,c];return a}async _fetchFeaturesFromMemory(a,b,e){if(!a)throw new n("scene-layer-adapter:insufficient-data","view is required to fetch the features from layerView");
const c=await a.whenLayerView(this.layer);var f=new AbortController;a=f.signal;const d=B.whenOnce(()=>!c.updating,a);await r.timeout(d,5E3,f);f=q.getMissingFields(this,e,c);r.throwIfAborted(a);b=this._updateQuery(b,e??[],f);b=await c.queryFeatures(b,{signal:a});r.throwIfAborted(a);a=b.features;return f.length?c.whenGraphicAttributes(a,f):a}async _fetchFeaturesJSONFromMemory(a,b,e){return this._fetchFeaturesFromMemory(a,b,e).then(q.ensureFeaturesJSON)}_fetchFeaturesForStats(a,b){return v.getFieldsList({field:a.field,
normalizationField:a.normalizationField,valueExpression:a.valueExpression}).then(e=>this.getSampleFeatures({sampleSize:-1,view:a.view,returnGeometry:a.returnGeometry,requiredFields:e,signal:a.signal},b))}async _processStatsFromMemoryParams(a){const b=a.features;if(b?.length)return b.length&&"declaredClass"in b[0]&&"esri.Graphic"===b[0].declaredClass?{graphics:b}:{featuresJSON:b};const {view:e,field:c,normalizationField:f,valueExpression:d,signal:k}=a;a=await this._fetchFeaturesForStats({field:c,valueExpression:d,
normalizationField:f,view:e,signal:k},null);if(!a?.length)throw new n("scene-layer-adapter:insufficient-data","No features are available to calculate statistics");return{graphics:a}}_getCachedStatistics(a,b){const e=this.layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.minValue||a.maxValue?Promise.reject(new n("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression', 'sqlWhere', 'minValue' or 'maxValue' is specified")):
e.queryCachedStatistics(b?.name,{signal:a.signal}).then(c=>{c=c.stats;const {min:f,max:d,totalValuesCount:k}=c;let {avg:h,stddev:g,sum:l,variance:m,count:p}=c;if(0!==f||0!==d)h=0===h?null:h,l=0===l?null:l,g=0===g?null:g,m=0===m?null:m,p=0===p?null:p;null==p&&(null!=l&&null!=h?p=Math.round(l/h):null!=k&&(p=k));return{avg:h,count:p,max:d,min:f,stddev:g,sum:l,variance:m}})}async _getNormalizationTotal(a,b,e){const c={include:["sum"]};a=(b?await this.workerClient.summaryStatistics({field:a,outStatisticTypes:c},
b):await t.summaryStatistics({attribute:{field:a,outStatisticTypes:c},features:e})).sum;if(null==a)throw new n("scene-layer-adapter:invalid","invalid normalizationTotal");return a}async _getSummaryStatisticsFromMemory(a,b){const {view:e,field:c,normalizationField:f,valueExpression:d}=a,{featuresJSON:k,graphics:h}=await this._processStatsFromMemoryParams(a),g={field:c,valueExpression:d,normalizationType:a.normalizationType,normalizationField:f,normalizationTotal:a.normalizationTotal,minValue:a.minValue,
maxValue:a.maxValue,outStatisticTypes:a.outStatisticTypes};a.valueExpression&&e&&k&&(g.fieldType=b?.type?E.kebabDict.toJSON(b.type):null,g.viewInfoParams=q.getViewInfoParams(e),g.timeZone=e.timeZone);"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(g.normalizationTotal=await this._getNormalizationTotal(c,k,h));return k?this.workerClient.summaryStatistics(g,k):t.summaryStatistics({attribute:g,features:h})}_getCachedStatisticsForUniqueValues(a,b){const e=this.layer,c=b?.name,f=
b&&a.field?this.getFieldDomain(a.field):null;return a.valueExpression||a.sqlExpression||a.sqlWhere?Promise.reject(new n("scene-layer-adapter:not-supported","This Layer does not support calculating statistics when 'valueExpression', 'sqlExpression' or 'sqlWhere' is specified")):e.queryCachedStatistics(c,{signal:a.signal}).then(d=>{var k=d.stats;if(!k.mostFrequentValues)throw Error();d=d.labels?.labels;const h={},g=[],l="countOF"+c;k.mostFrequentValues.forEach(m=>{const p=new y({attributes:{}});p.attributes[c]=
b&&b.name!==e.objectIdField&&(F.isNumericField(b)||v.isAnyDateField(b))?Number(m.value):m.value;p.attributes[l]=m.count;g.push(p)});d&&d.forEach(m=>{h[m.value]=m.label});k=new A({features:g});return q.getUniqueValuesFromFeatureSet(k,{layer:this,field:a.field,labels:h,view:a.view,signal:a.signal})}).then(d=>J.createUVResult(d,[f],a.returnAllCodedValues))}async _getUniqueValuesFromMemory(a,b){const {view:e,field:c,field2:f,field3:d,valueExpression:k,returnAllCodedValues:h}=a;b={field:c,field2:f,field3:d,
fieldDelimiter:v.fieldDelimiter,valueExpression:k,domains:b,returnAllCodedValues:h};const {featuresJSON:g,graphics:l}=await this._processStatsFromMemoryParams(a);a.valueExpression&&e&&g&&(b.viewInfoParams=q.getViewInfoParams(e),b.timeZone=e.timeZone);return g?this.workerClient.uniqueValues(b,g):t.uniqueValues({attribute:b,features:l})}_getCachedStatisticsForHistogram(a,b){const e=this.layer;return a.valueExpression||a.sqlExpression||a.sqlWhere||a.normalizationType?Promise.reject(new n("scene-layer-adapter:not-supported",
"This Layer does not support calculating statistics when 'valueExpression' or 'sqlExpression' or 'sqlWhere' or 'normalizationType' is specified")):e.queryCachedStatistics(b&&b.name,{signal:a.signal}).then(c=>{var f=c.stats;const {minValue:d,maxValue:k}=a;c=null!=d?d:f.min;const h=null!=k?k:f.max,g=a.numBins||10;f=K(f.histogram,c,h,g);return q.getHistogramFromFeatureSet(f,c,h,g)})}async _getClassBreaksFromMemory(a){const {view:b,field:e,normalizationField:c,valueExpression:f}=a,{featuresJSON:d,graphics:k}=
await this._processStatsFromMemoryParams(a),h={field:e,valueExpression:f,normalizationType:a.normalizationType,normalizationField:c,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,classificationMethod:a.classificationMethod,numClasses:a.numClasses};a.valueExpression&&b&&d&&(h.viewInfoParams=q.getViewInfoParams(b),h.timeZone=b.timeZone);"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(h.normalizationTotal=
await this._getNormalizationTotal(e,d,k));return d?this.workerClient.classBreaks(h,d):t.classBreaks({attribute:h,features:k})}async _getHistogramFromMemory(a){const {view:b,field:e}=a,{featuresJSON:c,graphics:f}=await this._processStatsFromMemoryParams(a),d={field:e,valueExpression:a.valueExpression,normalizationType:a.normalizationType,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,minValue:a.minValue,maxValue:a.maxValue,standardDeviationInterval:a.standardDeviationInterval,
classificationMethod:a.classificationMethod,numBins:a.numBins};a.valueExpression&&b&&c&&(d.viewInfoParams=q.getViewInfoParams(b),d.timeZone=b.timeZone);"percent-of-total"===a.normalizationType&&null==a.normalizationTotal&&(d.normalizationTotal=await this._getNormalizationTotal(e,c,f));return c?this.workerClient.histogram(d,c):t.histogram({attribute:d,features:f})}getField(a){return this.layer.getField(a??"")}getFieldUsageInfo(a){a=this.getField(a);if(!a)return null;a=this.layer.getFieldUsageInfo(a.name);
return{supportsLabelingInfo:a.supportsLabelingInfo,supportsPopupTemplate:a.supportsPopupTemplate,supportsRenderer:a.supportsRenderer,supportsLayerQuery:a.supportsLayerQuery,supportsStatistics:!0}}getFieldDomain(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.getFieldDomain(a,b):null}createQuery(){return this.layer.createQuery()}summaryStatistics(a){const b=this.getField(a.field);if(this._featureLayerAdapter)return this._featureLayerAdapter.summaryStatistics(a);if(a.filter)throw new n("scene-layer-adapter:not-supported",
"filter is not supported");return this._hasCachedStatistics(b?.name)?this._getCachedStatistics(a,b).catch(()=>{r.throwIfAborted(a.signal);return this._getSummaryStatisticsFromMemory(a,b)}):this._getSummaryStatisticsFromMemory(a,b)}async uniqueValues(a){if(this._featureLayerAdapter)return this._featureLayerAdapter.uniqueValues(a);if(a.filter)throw new n("scene-layer-adapter:not-supported","filter is not supported");const b=await q.getDomainsForFields(a,this),{field:e,field2:c}=a,f=e&&c,d=this.getField(e);
return!f&&d&&this._hasCachedStatistics(d.name)?this._getCachedStatisticsForUniqueValues(a,d).catch(()=>{r.throwIfAborted(a.signal);return this._getUniqueValuesFromMemory(a,b)}):this._getUniqueValuesFromMemory(a,b)}histogram(a){const b=this.getField(a.field);if(this._featureLayerAdapter)return this._featureLayerAdapter.histogram(a);if(a.filter)throw new n("scene-layer-adapter:not-supported","filter is not supported");return b&&this._hasCachedStatistics(b.name)?this._getCachedStatisticsForHistogram(a,
b).catch(()=>{r.throwIfAborted(a.signal);return this._getHistogramFromMemory(a)}):this._getHistogramFromMemory(a)}classBreaks(a){const b=this.getField(a.field);if(this._featureLayerAdapter)return this._featureLayerAdapter.classBreaks(a);if(a.filter)throw new n("scene-layer-adapter:not-supported","filter is not supported");return this._hasCachedStatistics(b?.name)?Promise.reject(new n("scene-layer-adapter:not-supported","Cached stats not supported")):this._getClassBreaksFromMemory(a)}queryFeatureCount(a){return this._featureLayerAdapter?
this._featureLayerAdapter.queryFeatureCount(a):Promise.reject(new n("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support count query"))}generateRenderer(a,b){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(a,b):Promise.reject(new n("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support generateRenderer operation"))}heatmapStatistics(a){return this._featureLayerAdapter?this._featureLayerAdapter.heatmapStatistics(a):
Promise.reject(new n("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support heatmapStatistics operation"))}async predominantCategories(a){if(this._featureLayerAdapter)return this._featureLayerAdapter.predominantCategories(a);throw new n("scene-layer-adapter:not-supported","SceneLayer without associated FeatureLayer does not support predominantCategories");}async getSampleFeatures(a,b){if(a.filter)throw new n("scene-layer-adapter:not-supported","filter is not supported");
const {view:e,sampleSize:c,requiredFields:f,returnGeometry:d,signal:k}=a;var h="json"===b;const g=this.createQuery();g.outFields=f;g.returnGeometry=!!d;g.where=null;g.num=c;let l=[];try{if(l=h?await this._fetchFeaturesJSONFromMemory(e,g,f):await this._fetchFeaturesFromMemory(e,g,f),l.length&&null!=c&&0<c&&c<=l.length)return z.pickRandom(l,c,1)}catch(m){r.throwIfAborted(k)}h=null;this._featureLayerAdapter&&(a={...a},delete a.view,h=await this._featureLayerAdapter.getSampleFeatures(a,b));return h?.length?
h:z.pickRandom(l,l.length,1)}load(a){const b=this.layer.load(a).then(async e=>{this.workerClient=G.WorkerClient.getInstance();await this.workerClient.open(a.signal);const c=e.associatedLayer;this.geometryType=e.geometryType;if(null!=c)return this._featureLayerAdapter=new H({layer:c}),this._featureLayerAdapter.load(a).then(()=>{this.objectIdField=this._featureLayerAdapter.objectIdField;this.supportsSQLExpression=this._featureLayerAdapter.supportsSQLExpression;this.minScale=this._featureLayerAdapter.minScale;
this.maxScale=this._featureLayerAdapter.maxScale;this.fullExtent=this._featureLayerAdapter.fullExtent});this.objectIdField=e.objectIdField;this.hasQueryEngine=this.supportsSQLExpression=!1;this.fullExtent=e.fullExtent});this.addResolvingPromise(b);return Promise.resolve(this)}};x.__decorate([C.property({constructOnly:!0})],u.prototype,"layer",void 0);return u=x.__decorate([D.subclass("esri.smartMapping.support.adapters.SceneLayerAdapter")],u)});