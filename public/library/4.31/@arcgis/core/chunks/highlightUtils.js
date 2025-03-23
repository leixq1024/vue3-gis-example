/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{l as r}from"./languageUtils.js";import o from"../core/Collection.js";import{m as t}from"./handleUtils.js";function n(t){return s(t)||r(t)?[t]:o.isCollection(t)?t.toArray():Array.isArray(t)?t:i}function s(r){return"number"==typeof r||"string"==typeof r}const i=[],e=t();export{e,s as i,n};
