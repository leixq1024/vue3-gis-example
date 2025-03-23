/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as o}from"./asyncUtils.js";import{r as t}from"./maybe.js";import{onAbort as i}from"../core/promiseUtils.js";import{whenOnce as a,watch as e,syncAndInitial as n}from"../core/reactiveUtils.js";function s(e,n){e.interactive=!0;const{tool:s,view:l}=e;l.activeTool=s;let r=i(n,(()=>{l.activeTool===s&&(l.activeTool=null)}));return o((async o=>{await a((()=>null==s||!s.active),o),r=t(r)}),n)}function l(o,t){return e((()=>o.interactive),(()=>function(o,t){o.interactive?function(o,t){r(o);const{view:i,analysis:a}=o,e=new t({view:i,analysis:a,analysisViewData:o});o.tool=e,i.tools.add(e)}(o,t):r(o)}(o,t)),n)}function r(o){const{view:t,tool:i}=o;null!=i&&(t.tools.remove(i),o.tool=null)}export{s as a,l as c,r};
