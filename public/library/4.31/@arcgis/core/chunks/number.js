/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{b as e,g as n}from"./locale.js";const t={ar:"ar-u-nu-latn"};let u=new WeakMap,r={};function a(e){const a=e||r;if(!u.has(a)){const r=n(),i=t[n()]||r;u.set(a,new Intl.NumberFormat(i,e))}return u.get(a)}function i(e={}){const n={};return null!=e.digitSeparator&&(n.useGrouping=e.digitSeparator),null!=e.places&&(n.minimumFractionDigits=n.maximumFractionDigits=e.places),n}function l(e,n){return Object.is(e,-0)&&(e=0),a(n).format(e)}function o(e,t=n()){if(!e)return null;let u=s.get(t);if(!u){const e=a().formatToParts(12345.6),n=[...a({useGrouping:!1}).format(9876543210)].reverse(),r=new Map(n.map(((e,n)=>[e,n]))),i=new RegExp(`[${e.find((e=>"group"===e.type))?.value}]`,"g"),l=new RegExp(`[${e.find((e=>"decimal"===e.type))?.value}]`),o=new RegExp(`[${n.join("")}]`,"g"),p=/[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g,c=/[-\u2212\u2013\u2014\u2015]/g;u=e=>{if(""===(e=e.trim().replaceAll(i,"").replace(l,".").replace(o,(e=>String(r.get(e)))).replaceAll(p,"").replaceAll(c,"-")))return null;const n=Number(e);return isNaN(n)?null:n},s.set(t,u)}return u(e)}e((()=>{u=new WeakMap,r={}}));const s=new Map;export{i as c,l as f,o as p};
