/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{timeZones as t}from"./time-zones.js";import{extractRegion as e,global as n}from"./region.js";import"./index-p4VH55K1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const o={groupDateRange:365,startDate:(new Date).toISOString()},r=(t,e,n)=>t.length===e.length&&t.every(((t,o)=>n.same(t,e[o]))),s=(t,o=5)=>{const r=t.filter((({label:t})=>e(t)!==n));return 0===r.length?[0]:function(t,e=5){const n=t.length;if(n<=e)return t;const o=Math.min(n-2,e-2),r=(n-1)/(o+1);return[t[0],...Array.from({length:o},((e,n)=>t[Math.round((n+1)*r)])),t[n-1]]}(r.map((e=>t.indexOf(e))),o)};async function a(a){const{groupDateRange:i,startDate:l,dateEngine:c}={...o,...a},u=[];if(!c)throw new Error("dateEngine is required");const g=((t,o,r,s)=>{const a=new Map,i=((t,e,n)=>{const o=[];let r=n.create(t);for(let t=0;t<=e;t++)r=n.increase(r),o.push(n.formatToIsoDateString(r));return o})(o,r,s);return t.map((t=>{const{label:o}=t,r=e(o),l=i.map((t=>{const e=`${t}-${o}`;let n=a.get(e);return n||(n=s.isoToTimeZone(t,o),a.set(e,n),n)}));return{...t,continent:r,isRegularContinent:r!==n,dates:l}}))})(t.map((t=>({label:t}))),l,i,c);for(const t of g){const{label:e,continent:n,dates:o}=t;if(t.visited)continue;t.visited=!0;const s={labelIdx:[],tzs:[{label:e}]};for(const t of g.filter((t=>!t.visited))){const{label:e,continent:a,isRegularContinent:i,dates:l}=t;if((n===a||!i)&&r(o,l,c)){const n={label:e};s.tzs.push(n),t.visited=!0}}u.push(s)}return u.map((t=>(t.tzs=t.tzs.sort(((t,e)=>t.label.localeCompare(e.label))),{labelTzIdx:s(t.tzs,7),tzs:t.tzs.map((t=>t.label))}))).sort(((t,e)=>e.tzs.length-t.tzs.length))}export{a as groupByOffset};
