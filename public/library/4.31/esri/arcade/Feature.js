// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("./ArcadeDate ./deepClone ./Dictionary ./executionError ./ImmutableArray ../chunks/languageUtils ../core/sql/DateOnly ../core/sql/TimeOnly ../geometry/Geometry ../geometry/Point ../geometry/support/jsonUtils ../layers/graphics/featureConversionUtils ../layers/support/FieldsIndex".split(" "),function(h,w,q,l,n,g,r,t,u,v,p,x,y){class k{constructor(){this.arcadeDeclaredClass="esri.arcade.Feature";this._layer=this.attributes=this._geometry=this._optimizedGeomDefinition=null;this._fieldTypesFixed=
!0;this.contextTimeZone=this.fieldsIndex=null;this.immutable=!0;this._fieldsToFixDataTypes=null;this.immutable=!0}static createFromGraphic(a,c){const b=new k;b.contextTimeZone=c??null;b._geometry=null!=a.geometry?a.geometry:null;b.attributes=void 0===a.attributes?{}:null===a.attributes?{}:a.attributes;a._sourceLayer?(b._layer=a._sourceLayer,b._fieldTypesFixed=!1):a._layer?(b._layer=a._layer,b._fieldTypesFixed=!1):a.layer&&"fields"in a.layer?(b._layer=a.layer,b._fieldTypesFixed=!1):a.sourceLayer&&
"fields"in a.sourceLayer&&(b._layer=a.sourceLayer,b._fieldTypesFixed=!1);b._layer&&!b._fieldTypesFixed&&(b.fieldsIndex=this.hydrateFieldsIndex(b._layer));return b}static createFromArcadeFeature(a){if(a instanceof k){var c=new k;c._fieldTypesFixed=a._fieldTypesFixed;c.attributes=a.attributes;c._geometry=a._geometry;c._optimizedGeomDefinition=a._optimizedGeomDefinition;a._layer&&(c._layer=a._layer);c.fieldsIndex=a.fieldsIndex;c.contextTimeZone=a.contextTimeZone;return c}c={};for(const b of a.keys())c[b]=
a.field(b);return k.createFromGraphicLikeObject(a.geometry(),c,a.fullSchema(),a.contextTimeZone)}static createFromOptimisedFeature(a,c,b){const d=new k;d._geometry=a.geometry?{geometry:a.geometry}:null;d._optimizedGeomDefinition=b;d.attributes=a.attributes||{};d._layer=c;d._fieldTypesFixed=!1;return d}static createFromArcadeDictionary(a,c){const b=new k;b.attributes=a.field("attributes");null!==b.attributes?b.attributes instanceof q?(b.attributes=b.attributes.attributes,null===b.attributes&&(b.attributes=
{})):b.attributes={}:b.attributes={};b._geometry=a.field("geometry");null!==b._geometry&&(b._geometry instanceof q?b._geometry=k.parseGeometryFromDictionary(b._geometry,c):b._geometry instanceof u||(b._geometry=null));return b}static createFromGraphicLikeObject(a,c,b=null,d){const f=new k;f.contextTimeZone=d??null;null===c&&(c={});f.attributes=c;f._geometry=null!=a?a:null;f._layer=b;f._layer&&(f._fieldTypesFixed=!1,f.fieldsIndex=this.hydrateFieldsIndex(f._layer));return f}static hydrateFieldsIndex(a){return null===
a?null:g.isFeatureSet(a)?a.getFieldsIndex():a.fieldsIndex?a.fieldsIndex:y.fromLayerJSON({datesInUnknownTimezone:a.datesInUnknownTimezone,fields:a.fields,timeInfo:a.timeInfo,editFieldsInfo:a.editFieldsInfo,dateFieldsTimeReference:a.dateFieldsTimeReference??{timeZone:"UTC",respectsDaylightSaving:!1}})}repurposeFromGraphicLikeObject(a,c,b=null){null===c&&(c={});this.attributes=c;this._geometry=a??null;this._fieldTypesFixed=(this._layer=b)?!1:!0}castToText(a=!1){let c="";!1===this._fieldTypesFixed&&this._fixFieldTypes();
for(const b in this.attributes){""!==c&&(c+=",");const d=this.attributes[b];null==d?c+=JSON.stringify(b)+":null":g.isBoolean(d)||g.isNumber(d)||g.isString(d)?c+=JSON.stringify(b)+":"+JSON.stringify(d):d instanceof u?c+=JSON.stringify(b)+":"+g.toStringExplicit(d):d instanceof t.TimeOnly||d instanceof r.DateOnly?c+=`${JSON.stringify(b)}:${JSON.stringify(d.toString())}`:d instanceof n?c+=JSON.stringify(b)+":"+g.toStringExplicit(d,null,a):Array.isArray(d)?c+=JSON.stringify(b)+":"+g.toStringExplicit(d,
null,a):d instanceof h.ArcadeDate?c=a?c+(JSON.stringify(b)+":"+JSON.stringify(d.getTime())):c+(JSON.stringify(b)+":"+d.stringify()):null!==d&&"object"===typeof d&&void 0!==d.castToText&&(c+=JSON.stringify(b)+":"+d.castToText(a))}return'{"geometry":'+(null===this.geometry()?"null":g.toStringExplicit(this.geometry()))+',"attributes":{'+c+"}}"}_fixFieldTypes(){if(this._fieldsToFixDataTypes&&0<this._fieldsToFixDataTypes?.length)this._fixAllFields(this._fieldsToFixDataTypes);else{var a=[],c=this._layer.fields;
for(let b=0;b<c.length;b++){const {name:d,type:f}=c[b];switch(f){case "date":case "esriFieldTypeDate":a.push({field:d,dataType:"date"});break;case "date-only":case "esriFieldTypeDateOnly":a.push({field:d,dataType:"date-only"});break;case "time-only":case "esriFieldTypeTimeOnly":a.push({field:d,dataType:"time-only"});break;case "timestamp-offset":case "esriFieldTypeTimestampOffset":a.push({field:d,dataType:"timestamp-offset"})}}this._fieldsToFixDataTypes=a;0<a.length&&this._fixAllFields(a)}this._fieldTypesFixed=
!0}isUnknownDateTimeField(a){return"unknown"===this.fieldsIndex?.getTimeZone(a)}_fixAllFields(a){this.attributes={...this.attributes};const c=this.contextTimeZone??"system";for(let f=0;f<a.length;f++){var b=a[f].field,d=a[f].dataType;let e=this.attributes[b];if(void 0===e)for(const m in this.attributes){if(m.toLowerCase()===b.toLowerCase()){e=this.attributes[m];if(null!==e){if("time-only"===d){g.isTime(e)||(this.attributes[m]=t.TimeOnly.fromReader(e.toString()));break}if("date-only"===d){g.isDateOnly(e)||
(this.attributes[m]=r.DateOnly.fromReader(e.toString()));break}if("timestamp-offset"===d){g.isDate(e)||(this.attributes[m]=h.ArcadeDate.fromReaderAsTimeStampOffset(e.toString()));break}b=this.isUnknownDateTimeField(m);e instanceof Date?this.attributes[m]=b?h.ArcadeDate.unknownDateJSToArcadeDate(e):h.ArcadeDate.dateJSAndZoneToArcadeDate(e,c):g.isDate(e)||(this.attributes[m]=b?h.ArcadeDate.unknownEpochToArcadeDate(e):h.ArcadeDate.epochToArcadeDate(e,c))}break}}else null!==e&&("time-only"===d?g.isTime(e)?
this.attributes[b]=e:this.attributes[b]=t.TimeOnly.fromReader(e.toString()):"date-only"===d?g.isDateOnly(e)?this.attributes[b]=e:this.attributes[b]=r.DateOnly.fromReader(e.toString()):"timestamp-offset"===d?g.isDate(e)?this.attributes[b]=e:this.attributes[b]=h.ArcadeDate.fromReaderAsTimeStampOffset(e.toString()):(d=this.isUnknownDateTimeField(b),g.isDate(e)?this.attributes[b]=e:this.attributes[b]=e instanceof Date?d?h.ArcadeDate.unknownDateJSToArcadeDate(e):h.ArcadeDate.dateJSAndZoneToArcadeDate(e,
c):d?h.ArcadeDate.unknownEpochToArcadeDate(e):h.ArcadeDate.epochToArcadeDate(e,c)))}}geometry(){if(null===this._geometry||this._geometry instanceof u)return this._geometry;this._optimizedGeomDefinition?(this._geometry=p.fromJSON(x.convertToGeometry(this._geometry,this._optimizedGeomDefinition.geometryType,this._optimizedGeomDefinition.hasZ,this._optimizedGeomDefinition.hasM)),this._geometry.spatialReference=this._optimizedGeomDefinition.spatialReference):this._geometry=p.fromJSON(this._geometry);
return this._geometry}field(a){this._fieldTypesFixed||this._fixFieldTypes();var c=this.attributes[a];if(void 0!==c)return c;c=a.toLowerCase();for(const b in this.attributes)if(b.toLowerCase()===c)return this.attributes[b];if(this._hasFieldDefinition(c))return null;throw new l.ArcadeExecutionError(null,l.ExecutionErrorCodes.FieldNotFound,null,{key:a});}_hasFieldDefinition(a){if(null===this._layer)return!1;for(let c=0;c<this._layer.fields.length;c++)if(this._layer.fields[c].name.toLowerCase()===a)return!0;
return!1}setField(a,c){if(this.immutable)throw new l.ArcadeExecutionError(null,l.ExecutionErrorCodes.Immutable,null);c instanceof Date&&(c=this.isUnknownDateTimeField(a)?h.ArcadeDate.unknownDateJSToArcadeDate(c):h.ArcadeDate.dateJSToArcadeDate(c));if(!1===g.isSimpleType(c))throw new l.ArcadeExecutionError(null,l.ExecutionErrorCodes.TypeNotAllowedInFeature,null);const b=a.toLowerCase();if(void 0===this.attributes[a])for(const d in this.attributes)if(d.toLowerCase()===b){this.attributes[d]=c;return}this.attributes[a]=
c}hasField(a){const c=a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(const b in this.attributes)if(b.toLowerCase()===c)return!0;return this._hasFieldDefinition(c)?!0:!1}keys(){let a=[];const c={};for(var b in this.attributes)a.push(b),c[b.toLowerCase()]=1;if(null!==this._layer)for(b=0;b<this._layer.fields.length;b++){const d=this._layer.fields[b];1!==c[d.name.toLowerCase()]&&a.push(d.name)}return a=a.sort()}static parseGeometryFromDictionary(a,c){a=k._convertDictionaryToJson(a,!0);void 0!==
a.hasm&&(a.hasM=a.hasm,delete a.hasm);void 0!==a.hasz&&(a.hasZ=a.hasz,delete a.hasz);void 0!==a.spatialreference&&(a.spatialReference=a.spatialreference,delete a.spatialreference);a.spatialReference||(a.spatialReference=c);void 0!==a.rings&&(a.rings=this._fixPathArrays(a.rings,!0===a.hasZ,!0===a.hasZ));void 0!==a.paths&&(a.paths=this._fixPathArrays(a.paths,!0===a.hasZ,!0===a.hasM));void 0!==a.points&&(a.points=this._fixPointArrays(a.points,!0===a.hasZ,!0===a.hasM));return p.fromJSON(a)}static _fixPathArrays(a,
c,b){const d=[];if(Array.isArray(a))for(var f=0;f<a.length;f++)d.push(this._fixPointArrays(a[f],c,b));else if(a instanceof n)for(f=0;f<a.length();f++)d.push(this._fixPointArrays(a.get(f),c,b));return d}static _fixPointArrays(a,c,b){const d=[];if(Array.isArray(a))for(var f=0;f<a.length;f++){var e=a[f];e instanceof v?c&&b?d.push([e.x,e.y,e.z,e.m]):c?d.push([e.x,e.y,e.z]):b?d.push([e.x,e.y,e.m]):d.push([e.x,e.y]):e instanceof n?d.push(e.toArray()):d.push(e)}else if(a instanceof n)for(f=0;f<a.length();f++)e=
a.get(f),e instanceof v?c&&b?d.push([e.x,e.y,e.z,e.m]):c?d.push([e.x,e.y,e.z]):b?d.push([e.x,e.y,e.m]):d.push([e.x,e.y]):e instanceof n?d.push(e.toArray()):d.push(e);return d}static _convertDictionaryToJson(a,c=!1){const b={};for(const d in a.attributes){let f=a.attributes[d];f instanceof q&&(f=k._convertDictionaryToJson(f));c?b[d.toLowerCase()]=f:b[d]=f}return b}static parseAttributesFromDictionary(a){const c={};for(const b in a.attributes){const d=a.attributes[b];if(g.isSimpleType(d))c[b]=d;else throw new l.ArcadeExecutionError(null,
l.ExecutionErrorCodes.InvalidParameter,null);}return c}static fromJson(a,c){let b=null;null!==a.geometry&&void 0!==a.geometry&&(b=p.fromJSON(a.geometry));const d={};if(null!==a.attributes&&void 0!==a.attributes)for(const f in a.attributes){const e=a.attributes[f];if(null===e)d[f]=e;else if(g.isString(e)||g.isNumber(e)||g.isBoolean(e)||g.isDate(e)||g.isTime(e)||g.isDateOnly(e))d[f]=e;else throw new l.ArcadeExecutionError(null,l.ExecutionErrorCodes.InvalidParameter,null);}return k.createFromGraphicLikeObject(b,
d,null,c??null)}fullSchema(){return this._layer}gdbVersion(){if(null===this._layer)return"";const a=this._layer.gdbVersion;return void 0===a?"":""===a&&this._layer.capabilities?.isVersioned?"SDE.DEFAULT":a}castAsJson(a){const c={attributes:{},geometry:!0===a?.keepGeometryType?this.geometry():this.geometry()?.toJSON()??null};for(const b in this.attributes){const d=this.attributes[b];void 0!==d&&(c.attributes[b]=g.castAsJson(d,a))}return c}async castAsJsonAsync(a,c){return this.castAsJson(c)}}w.configureDeepClone(k);
return k});