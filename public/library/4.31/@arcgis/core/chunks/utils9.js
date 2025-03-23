/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import r from"../config.js";import{id as t}from"../kernel.js";import{clone as e}from"../core/lang.js";import{urlToObject as n}from"../core/urlUtils.js";import{i as o}from"../request.js";function i(r,t){return t?{...t,query:{...r??{},...t.query}}:{query:r}}function s(r){return"string"==typeof r?n(r):e(r)}function f(r,t,e){const n={};for(const o in r){if("declaredClass"===o)continue;const i=r[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[o]=i.map((r=>f(r)));else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(e?.[o]);n[o]=t?r:JSON.stringify(r)}else n[o]=t?i:JSON.stringify(i);else n[o]=i}return n}function u(e,n){return e?o(e,n)?n||r.apiKey:t?.findCredential(e)?.token:null}export{i as a,f as e,u as g,s as p};
