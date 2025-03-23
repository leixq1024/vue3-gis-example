/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../../geometry.js";import e from"../../request.js";import t from"../../core/Error.js";import{c as r,f as s}from"../../core/Handles.js";import{isHTTPSProtocol as n,hasSameOrigin as o,toHTTPS as a}from"../../core/urlUtils.js";import{initializeProjection as i,project as p}from"../../geometry/projection.js";import{f as u,w as c}from"../../chunks/unitUtils.js";import{f as l}from"../../chunks/typeUtils.js";import{g as m}from"../../chunks/geojson.js";import{v as y,i as d}from"../../chunks/xmlUtils.js";import{a as f}from"../../chunks/arcgisLayerUrl.js";import g from"../support/Field.js";import{getFieldDefaultLength as h}from"../support/fieldUtils.js";import w from"../../geometry/SpatialReference.js";import j from"../../geometry/Extent.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../geometry/Geometry.js";import"../../chunks/tslib.es6.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../kernel.js";import"../../chunks/writer.js";import"../../geometry/Multipoint.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/SimpleObservable.js";import"../../chunks/vec3f64.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/date2.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/enumeration.js";import"../../chunks/domains.js";import"../support/CodedValueDomain.js";import"../support/Domain.js";import"../support/InheritedDomain.js";import"../support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";const b="xlink:href",k="2.0.0",T="__esri_wfs_id__",S="wfs-layer:feature-type-not-found",F="wfs-layer:unknown-geometry-type";async function x(t,r){const s=C((await e(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:k,...r?.customParameters},signal:r?.signal})).data);return function(e,t){n(e)&&(o(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=a(t.operations.DescribeFeatureType.url)),o(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=a(t.operations.GetFeature.url)))}(t,s),s}function C(e){const s=z(e);!function(e){const r=e.firstElementChild?.getAttribute("version");if(r&&r!==k)throw new t("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${r}. Supported version: ${k}`)}(s),q(s);const n=s.firstElementChild,o=r(d(n,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return y(e,{Name:e=>{const{name:r,prefix:s}=Y(e.textContent);t.typeName=`${s}:${r}`,t.name=r,t.namespacePrefix=s,t.namespaceUri=e.lookupNamespaceURI(s)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=j.fromJSON(function(e){let t,r,s,n;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[s,n]=o.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:r,xmax:s,ymax:n,spatialReference:c}}(e))},DefaultCRS:e=>{const s=U(e);s&&(t.defaultSpatialReference=s,r.add(s))},OtherCRS:e=>{const t=U(e);t&&r.add(t)}}),t.title||(t.title=t.name),r.add(4326),t.supportedSpatialReferences.push(...r),t}}}));return{operations:P(n),get featureTypes(){return Array.from(o())},readFeatureTypes:o}}const E=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function R(e){for(const t of E){const r=e.findIndex((e=>e.toLowerCase()===t));if(r>=0)return e[r]}return null}function P(e){let r=!1;const s={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},n=[],o=[];if(y(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&n.push(e)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{s.GetCapabilities.url=e.getAttribute(b)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{s.DescribeFeatureType.url=e.getAttribute(b)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{s.GetFeature.url=e.getAttribute(b)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&o.push(e)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{r="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{s.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),s.GetFeature.outputFormat=R(o)??R(n),!r)throw new t("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(null==s.GetFeature.outputFormat)throw new t("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return s}function U(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function A(e,t,r){return s(e,(e=>r?e.name===t&&e.namespaceUri===r:e.typeName===t||e.name===t))}async function G(e,r,s,n={}){const{featureType:o,extent:a}=await v(e,r,s,n),{spatialReference:i}=W(e.operations.GetFeature.url,o,n.spatialReference),{fields:p,geometryType:u,swapXY:c,objectIdField:l,geometryField:m}=await async function(e,r,s,n={}){const{typeName:o}=r,[a,i]=await Promise.allSettled([M(e.operations.DescribeFeatureType.url,o,n),D(e,o,s,n)]),p=e=>new t("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${o}'`,{error:e});if("rejected"===a.status)throw p(a.reason);if("rejected"===i.status)throw p(i.reason);const{fields:u,errors:c}=a.value??{},l=a.value?.geometryType||i.value?.geometryType,m=i.value?.swapXY??!1;if(null==l)throw new t(F,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:l,fields:u,errors:c});return{...N(u??[]),geometryType:l,swapXY:m}}(e,o,i,n);return{url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:p,geometryField:m,geometryType:u,objectIdField:l,spatialReference:n.spatialReference??new w({wkid:o.defaultSpatialReference}),extent:a,swapXY:c,wfsCapabilities:e,customParameters:n.customParameters}}async function v(e,r,s,n={}){const o=e.readFeatureTypes(),a=r?A(o,r,s):o.next().value,{spatialReference:c=new w({wkid:a?.defaultSpatialReference})}=n;if(null==a)throw r?new t(S,`The type '${r}' could not be found in the service`):new t("wfs-layer:empty-service","The service is empty");let l=a.extent;if(l&&!u(l.spatialReference,c))try{await i(l.spatialReference,c,void 0,n),l=p(l,c)}catch{throw new t("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:l,spatialReference:c,featureType:a}}function N(e){const t=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new g({name:T,type:"oid",alias:T}),e.unshift(r)),{geometryField:t?.name??null,objectIdField:r.name,fields:e}}async function D(t,r,s,n={}){let o,a=!1;const[i,p]=await Promise.all([L(t.operations.GetFeature.url,r,s,t.operations.GetFeature.outputFormat,{...n,count:1}),e(t.operations.GetFeature.url,{responseType:"text",query:V(r,s,void 0,{...n,count:1}),signal:n?.signal})]),u="FeatureCollection"===i.type&&i.features[0]?.geometry;if(u){let e;switch(o=l.fromJSON(m(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p.data);if(t){const r=e[0].toFixed(3),s=e[1].toFixed(3),n=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&s===n&&(a=!0)}}return{geometryType:o,swapXY:a}}async function M(t,r,s){return O(r,(await e(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:k,TYPENAME:r,TYPENAMES:r,...s?.customParameters},signal:s?.signal})).data)}function O(e,r){const{name:n}=Y(e),o=z(r);q(o);const a=s(d(o.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===n));if(null!=a){const e=a.getAttribute("type"),r=e?s(d(o.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===Y(e).name)):s(d(a,{complexType:e=>e}),(()=>!0));if(r)return function(e){const r=[],s=[];let n;const o=d(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of o){const o=a.getAttribute("name");if(!o)continue;let i,p;if(a.hasAttribute("type")?i=Y(a.getAttribute("type")).name:y(a,{simpleType:{restriction:e=>(i=Y(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value")}})}}),!i)continue;const u="true"===a.getAttribute("nillable");let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":s.push(new g({name:o,alias:o,type:"integer",nullable:u,length:h("integer")}));break;case"float":case"double":case"decimal":s.push(new g({name:o,alias:o,type:"double",nullable:u,length:h("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":s.push(new g({name:o,alias:o,type:"string",nullable:u,length:p??h("string")}));break;case"datetime":case"date":s.push(new g({name:o,alias:o,type:"date",nullable:u,length:p??h("date")}));break;case"pointpropertytype":n="point",c=!0;break;case"multipointpropertytype":n="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":n="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":n="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,r.push(new t(F,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new t("wfs-layer:unknown-field-type",`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&s.push(new g({name:o,alias:o,type:"geometry",nullable:u}))}for(const e of s)if("integer"===e.type&&!e.nullable&&I.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:n,fields:s,errors:r}}(r)}throw new t(S,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const I=new Set(["objectid","fid"]);async function L(r,s,n,o,a){let{data:i}=await e(r,{responseType:"text",query:V(s,n,o,a),signal:a?.signal});i=i.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(i)}catch(e){throw new t("wfs-layer:malformed-json","Error while parsing the response",{response:i,error:e})}}function V(e,t,r,s){const n="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:k,TYPENAMES:e,OUTPUTFORMAT:r,SRSNAME:"EPSG:"+n,STARTINDEX:s?.startIndex,COUNT:s?.count,...s?.customParameters}}async function $(t,r,s){const n=await e(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:k,TYPENAMES:r,RESULTTYPE:"hits",...s?.customParameters},signal:s?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(n.data);if(o?.groups)return+o.groups.numberMatched}function z(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function Y(e){const[t,r]=e.split(":");return{prefix:r?t:"",name:r??t}}function q(e){let r="",s="";if(y(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{s=e.textContent}})}),r)throw new t(`wfs-layer:${r}`,s)}function W(e,t,r){const s={wkid:t.defaultSpatialReference},n=null!=r?.wkid?{wkid:r.wkid}:s;return{spatialReference:n,getFeatureSpatialReference:f(e)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{M as describeFeatureType,A as findFeatureType,x as getCapabilities,L as getFeature,$ as getFeatureCount,v as getFeatureTypeInfo,W as getGetFeatureSpatialReference,G as getWFSLayerInfo,O as parseDescribeFeatureTypeResponse,C as parseGetCapabilitiesResponse,N as prepareWFSLayerFields,T as wfsOidFieldName};
