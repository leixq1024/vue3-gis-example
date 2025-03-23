/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import i from"../smartMapping/statistics/summaryStatisticsForAge.js";import{supportedAgeUnits as s}from"../smartMapping/statistics/support/ageUtils.js";import{k as a,u as n}from"./utils3.js";async function r(r){const o="days",u={...r,outStatisticTypes:a,unit:o},c=await i(u);if(null==c.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const e=function(t){const i=Math.abs(t.avg);let a=null;return s.some((t=>{const s=n[t];return i>2*s&&(a=t),!!a})),a}({...c,avg:c.avg});if(e===o)return{unit:e,statistics:c};u.unit=e;const f=await i(u);if(null==f.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:e,statistics:f}}export{r as a};
