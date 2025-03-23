/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{isHTTPSProtocol as t,isDataProtocol as s}from"../core/urlUtils.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";var p;let u=p=class extends o{constructor(){super(...arguments),this.url=""}destroy(){this.url=""}get isSecureUrl(){return t(this.url)}get isDataURI(){return s(this.url)}clone(){return new p({url:this.url})}};r([e({type:String,json:{write:{isRequired:!0}}})],u.prototype,"url",void 0),r([e()],u.prototype,"isSecureUrl",null),r([e()],u.prototype,"isDataURI",null),u=p=r([i("esri.webdoc.support.SlideThumbnail")],u);export{u as S};
