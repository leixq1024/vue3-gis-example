/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{r as o}from"./componentsUtils.js";import{w as n}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const e=o;function r(o){return"opened"in o?o.opened:o.open}function t(o){e((()=>{o.transitionEl&&n(o.transitionEl,o.openTransitionProp,(()=>{r(o)?o.onBeforeOpen():o.onBeforeClose()}),(()=>{r(o)?o.onOpen():o.onClose()}))}))}export{t as o};
