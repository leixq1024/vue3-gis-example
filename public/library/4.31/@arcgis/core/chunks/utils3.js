/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{g as e,c as t,f as r,a as s,b as a,u as n,d as i}from"./date.js";import{isDateField as o,isDateOnlyField as c,isTimestampOffsetField as g,l}from"../layers/support/fieldUtils.js";import{a as d}from"./basemapUtils.js";const u=",",m={light:["streets","gray","topo","terrain","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector","topo-3d","navigation-3d","streets-3d","osm-3d","gray-3d","arcgis-light-gray","arcgis-navigation","arcgis-streets","arcgis-streets-relief","arcgis-topographic","arcgis-oceans","osm-standard","osm-standard-relief","osm-streets","osm-streets-relief","osm-light-gray","arcgis-terrain","arcgis-charted-territory","arcgis-community","arcgis-colored-pencil","arcgis-modern-antique","arcgis-midcentury","arcgis-newspaper","arcgis-hillshade-light"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector","navigation-dark-3d","streets-dark-3d","dark-gray-3d","arcgis-imagery","arcgis-imagery-standard","arcgis-dark-gray","arcgis-navigation-night","arcgis-streets-night","osm-dark-gray","arcgis-nova","arcgis-hillshade-dark"]},f={exclude:["median"]},p={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864e5},y=new Set(["integer","small-integer"]);let h=null;const v=["date","date-only","timestamp-offset"];function T(e){return o(e)||c(e)||g(e)}async function $(e){const{field:t,field2:r,field3:s,normalizationField:a,valueExpression:n}=e;let i=[];if(n){if(!h){const{arcadeUtils:e}=await l();h=e}i=h.extractFieldNames(n)}return t&&i.push(t),r&&i.push(r),s&&i.push(s),a&&i.push(a),i}function Z(e){let t=e.normalizationType;return t||(e.normalizationField?t="field":null!=e.normalizationTotal&&(t="percent-of-total")),t??void 0}function k(e){return String(e).padStart(2,"0")}function w(e,t,r){let s;return"date"===t||"number"===t?("number"===t&&(e=new Date(e)),s=`TIMESTAMP'${r?e.getFullYear():e.getUTCFullYear()}-${k((r?e.getMonth():e.getUTCMonth())+1)}-${k(r?e.getDate():e.getUTCDate())} ${k(r?e.getHours():e.getUTCHours())}:${k(r?e.getMinutes():e.getUTCMinutes())}:${k(r?e.getSeconds():e.getUTCSeconds())}'`):s=e,s}function U(e,t,r,s){const{hasQueryEngine:a}=e,n=`(${w(r,b(e,r),a)} - ${w(t,b(e,t),a)})`;let i=p[s],o="/";return i<1&&(i=1/i,o="*"),{sqlExpression:1===i?n:`(${n} ${o} ${i})`,sqlWhere:null}}function b(e,t){if(t instanceof Date)return"date";if("number"==typeof t)return"number";if("string"==typeof t){const r=e.getField(t);if("<now>"===t.toLowerCase())return;if(o(r))return"field"}}function S(e,t=m){for(const r in t)if(t[r].includes(e))return r}function C(e,t,r=!0){let s=null;return e&&("string"==typeof e?t.includes(e)&&(s=e):s=d(e)),r?s||"gray":s}function D(e,t){const r=t&&e.getField(t);return!!r&&y.has(r.type)}function F(e){return`cast(${e} as float)`}function M(o,c){const{format:g,timeZoneOptions:l,fieldType:d}=c??{};let u,m;if(l&&({timeZone:u,timeZoneName:m}=e(l.layerTimeZone,l.datesInUnknownTimezone,l.viewTimeZone,t(g||"short-date-short-time"),d)),"string"==typeof o&&isNaN(Date.parse("time-only"===d?`1970-01-01T${o}Z`:o)))return o;switch(d){case"date-only":{const e=t(g||"short-date");return"string"==typeof o?i(o,{...e}):r(o,{...e,timeZone:n})}case"time-only":{const e=t(g||"short-time");return"string"==typeof o?a(o,e):r(o,{...e,timeZone:n})}case"timestamp-offset":{if(!u&&"string"==typeof o&&new Date(o).toISOString()!==o)return o;const e=g||l?t(g||"short-date-short-time"):void 0,a=e?{...e,timeZone:u,timeZoneName:m}:void 0;return"string"==typeof o?s(o,a):r(o,a)}default:{const e=g||l?t(g||"short-date-short-time"):void 0;return r("string"==typeof o?new Date(o):o,e?{...e,timeZone:u,timeZoneName:m}:void 0)}}}export{D as a,Z as b,F as c,$ as d,v as e,M as f,U as g,b as h,T as i,m as j,f as k,u as l,C as m,S as n,p as u};
