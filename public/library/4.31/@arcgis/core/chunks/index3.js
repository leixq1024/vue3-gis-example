/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{timeZones as t}from"./time-zones.js";import{extractRegion as e}from"./region.js";import"./index-p4VH55K1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */async function l(){const l=[],o=t.map((t=>({label:t}))).map((t=>{const{label:l}=t,o=e(l);return{...t,continent:o}}));for(const t of o){const{label:e,continent:n}=t;if(t.visited)continue;t.visited=!0;const s={label:n,tzs:[{label:e}]};for(const t of o.filter((t=>!t.visited))){const{label:e,continent:l}=t;if(n===l){const l={label:e};s.tzs.push(l),t.visited=!0}}l.push(s)}return l.map((t=>(t.tzs=t.tzs.sort(((t,e)=>t.label.localeCompare(e.label))),{label:t.label,tzs:t.tzs.map((t=>t.label))}))).sort(((t,e)=>t.label.localeCompare(e.label)))}export{l as groupByRegion};
