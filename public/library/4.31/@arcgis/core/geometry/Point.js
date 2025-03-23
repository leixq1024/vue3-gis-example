/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import"../core/lang.js";import{r as o}from"../chunks/reader.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{w as l}from"../chunks/writer.js";import{c as a}from"../chunks/ensureType.js";import u from"./Geometry.js";import c from"./SpatialReference.js";import{b as p,c as h,l as m}from"../chunks/unitUtils.js";import{xyToLngLat as d,lngLatToXY as y}from"./support/webMercatorUtils.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/JSONSupport.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";function f(t,e){const s=t.x-e.x,r=t.y-e.y,i=null!=t.z&&null!=e.z?t.z-e.z:0;return Math.sqrt(s*s+r*r+i*i)}function g({x:t,y:e,spatialReference:s},r=[0,0]){if(s){if(p(s))return d(t,e,r);if(h(s))return r[0]=t,r[1]=e,r}return null}const j=[0,0];var x;const w=[0,0];function b(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}let z=x=class extends u{static copy(t,s){s._set("x",t._get("x")),s._set("y",t._get("y")),s._set("z",t._get("z")),s._set("m",t._get("m"));const r=t._get("spatialReference");s._set("spatialReference",e.isFrozen(r)?r:r.clone())}constructor(...t){super(...t),this.x=0,this.y=0,this.z=void 0,this.m=void 0,this.type="point"}normalizeCtorArgs(t,e,r,i,o){let n;if(Array.isArray(t))n=t,o=e,t=n[0],e=n[1],r=n[2],i=n[3];else if(t&&"object"==typeof t){if(n=t,t=null!=n.x?n.x:n.longitude,e=null!=n.y?n.y:n.latitude,r=n.z,i=n.m,(o=n.spatialReference)&&"esri.geometry.SpatialReference"!==o.declaredClass&&(o=new c(o)),null!=n.longitude||null!=n.latitude)if(null==n.longitude)s.getLogger(this).warn(".longitude=","Latitude was defined without longitude");else if(null==n.latitude)s.getLogger(this).warn(".latitude=","Longitude was defined without latitude");else if(!n.declaredClass&&o?.isWebMercator){const s=y(n.longitude,n.latitude,w);t=s[0],e=s[1]}}else b(r)?(o=r,r=null):b(i)&&(o=i,i=null);const l={x:t,y:e};return null==l.x&&null!=l.y?s.getLogger(this).warn(".y=","Y coordinate was defined without an X coordinate"):null==l.y&&null!=l.x&&s.getLogger(this).warn(".x=","X coordinate was defined without a Y coordinate"),null!=o&&(l.spatialReference=o),null!=r&&(l.z=r),null!=i&&(l.m=i),l}get cache(){return this.commitProperty("x"),this.commitProperty("y"),this.commitProperty("z"),this.commitProperty("m"),this.commitProperty("spatialReference"),{}}get hasM(){return void 0!==this.m}set hasM(t){t!==(void 0!==this._get("m"))&&(this._set("m",t?0:void 0),this._set("hasM",t))}get hasZ(){return void 0!==this.z}set hasZ(t){t!==(void 0!==this._get("z"))&&(this._set("z",t?0:void 0),this._set("hasZ",t))}get latitude(){return g(this,j)?.[1]??null}set latitude(t){const{spatialReference:e,x:s}=this;null!=t&&e&&(e.isWebMercator?this._set("y",y(s,t,w)[1]):e.isGeographic&&this._set("y",t),this._set("latitude",t))}get longitude(){return g(this,j)?.[0]??null}set longitude(t){const{y:e,spatialReference:s}=this;null!=t&&s&&(s.isWebMercator?this._set("x",y(t,e,w)[0]):s.isGeographic&&this._set("x",t),this._set("longitude",t))}writeX(t,e,s){e[s]=isNaN(t)?"NaN":t}readX(t){return"string"==typeof t?NaN:t}clone(){const t=new x;return t.x=this.x,t.y=this.y,t.z=this.z,t.m=this.m,t.spatialReference=this.spatialReference,t}copy(t){return x.copy(t,this),this}equals(t){if(null==t)return!1;const{x:e,y:s,z:r,m:i,spatialReference:o}=this,{z:n,m:l}=t;let{x:a,y:u,spatialReference:c}=t;if(!o.equals(c))if(o.isWebMercator&&c.isWGS84)[a,u]=y(a,u),c=o;else{if(!o.isWGS84||!c.isWebMercator)return!1;[a,u]=d(a,u),c=o}return e===a&&s===u&&r===n&&i===l&&o.wkid===c.wkid}offset(t,e,s){return this.x+=t,this.y+=e,null!=s&&(this.z=(this.z??0)+s),this}normalize(){if(!this.spatialReference)return this;const t=m(this.spatialReference);if(!t)return this;let e=this.x;const[s,r]=t.valid,i=2*r;let o;return e>r?(o=Math.ceil(Math.abs(e-r)/i),e-=o*i):e<s&&(o=Math.ceil(Math.abs(e-s)/i),e+=o*i),this._set("x",e),this}distance(t){return f(this,t)}toArray(){const t=this.hasZ,e=this.hasM;return t&&e?[this.x,this.y,this.z,this.m]:t?[this.x,this.y,this.z]:e?[this.x,this.y,this.m]:[this.x,this.y]}toJSON(t){return this.write({},t)}};t([r({readOnly:!0})],z.prototype,"cache",null),t([r({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasM",null),t([r({type:Boolean,json:{read:!1,write:{enabled:!1,overridePolicy:null}}})],z.prototype,"hasZ",null),t([r({type:Number})],z.prototype,"latitude",null),t([r({type:Number})],z.prototype,"longitude",null),t([r({type:Number,json:{type:[Number,String],write:{isRequired:!0,allowNull:!0}}}),i((t=>isNaN(t)?t:a(t)))],z.prototype,"x",void 0),t([l("x")],z.prototype,"writeX",null),t([o("x")],z.prototype,"readX",null),t([r({type:Number,json:{write:!0}})],z.prototype,"y",void 0),t([r({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasZ}}}}})],z.prototype,"z",void 0),t([r({type:Number,json:{write:{overridePolicy(){return{enabled:this.hasM}}}}})],z.prototype,"m",void 0),z=x=t([n("esri.geometry.Point")],z),z.prototype.toJSON.isDefaultToJSON=!0;const _=z;export{f as d,_ as default,g};
