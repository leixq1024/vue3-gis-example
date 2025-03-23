/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as s,g as e}from"./componentsUtils.js";import{g as n}from"./locale2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const t={};function a(){throw new Error("could not fetch component message bundle")}function o(s){s.messages={...s.defaultMessages,...s.messageOverrides}}function c(){}async function i(s){s.defaultMessages=await f(s,s.effectiveLocale),o(s)}async function f(o,c){if(!s())return{};const{el:i}=o,f=i.tagName.toLowerCase().replace("calcite-","");return async function(s,n){const o=`${n}_${s}`;return t[o]||(t[o]=fetch(e(`./assets/${n}/t9n/messages_${s}.json`)).then((s=>(s.ok||a(),s.json()))).catch((()=>a()))),t[o]}(n(c,"t9n"),f)}async function r(s,e){s.defaultMessages=await f(s,e),o(s)}function u(s){s.onMessagesChange=l}function g(s){s.onMessagesChange=c}function l(){o(this)}export{u as c,g as d,i as s,r as u};
