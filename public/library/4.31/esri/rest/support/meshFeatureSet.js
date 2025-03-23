// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../Graphic ../../core/Logger ../../core/MapUtils ../../geometry/Extent ../../geometry/Mesh ../../geometry/SpatialReference ../../geometry/support/meshUtils/External ../../layers/support/infoFor3D ./FeatureSet ./meshFeatureAttributes".split(" "),function(l,w,x,n,y,p,z,q,A,B,r){function C(a){return({attributes:d})=>{if(!d)return{};if(!a)return d;for(const b in d)a.has(b)||delete d[b];return d}}function t(a,d,b,f,c){var g=c.get(a.attributes[d]);if(null==g||!a.geometry)return null;
d=r.extractMeshFeatureOrigin(a.attributes,b,f.transformFieldRoles);c=y.fromJSON(a.geometry);c.spatialReference=b;a=r.extractMeshFeatureTransform(a.attributes,f.transformFieldRoles);b=b.isGeographic?"local":"georeferenced";a:{g=Array.from(g.files.values());f=[];for(e of g){if(e.status!==k.COMPLETED){var e=null;break a}g=[];for(const h of e.parts){if(!h){e=null;break a}g.push(new q.ServiceAssetPart(h.url,h.hash))}f.push(new q.ServiceAsset(e.name,e.mimeType,g))}e=f}return e?p.createWithExternalSource(d,
e,{extent:c,transform:a,vertexSpace:b,unitConversionDisabled:!0}):p.createIncomplete(d,{extent:c,transform:a,vertexSpace:b})}function u(a,d){const b=new Map;for(const c of d){var f=c.parentGlobalId;if(null==f)continue;const g=c.assetName,e=c.assetType;d=c.assetHash;const h=c.assetURL,D=c.conversionStatus,E=c.seqNo,v=A.getFormatIdMimeType(e,a.supportedFormats);v?(f=n.getOrCreateMapValue(b,f,()=>({files:new Map})),n.getOrCreateMapValue(f.files,g,()=>{a:switch(D){case "COMPLETED":case "SUBMITTED":var m=
k.COMPLETED;break a;case "INPROGRESS":m=k.PENDING;break a;default:m=k.FAILED}return{name:g,type:e,mimeType:v,status:m,parts:[]}}).parts[E]={hash:d,url:h}):x.getLogger("esri.rest.support.meshFeatureSet").error("mesh-feature-set:unknown-format",`Service returned an asset of type ${e}, but it does not list it as a supported type`)}return b}var k;(function(a){a[a.FAILED=0]="FAILED";a[a.PENDING=1]="PENDING";a[a.COMPLETED=2]="COMPLETED"})(k||={});l.assetMapFromAssetMapsJSON=u;l.extractMesh=t;l.meshFeatureSetFromJSON=
function(a,d,b){var f=b.features;b.features=[];delete b.geometryType;const c=B.fromJSON(b);c.geometryType="mesh";if(!b.assetMaps)return c;const g=u(d,b.assetMaps),e=a.sourceSpatialReference??z.WGS84;b=b.globalIdFieldName;({outFields:a}=a);a=null!=a&&0<a.length?C(a.includes("*")?null:new Set(a)):()=>({});for(const h of f)f=t(h,b,e,d,g),c.features.push(new w({geometry:f,attributes:a(h)}));return c};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});