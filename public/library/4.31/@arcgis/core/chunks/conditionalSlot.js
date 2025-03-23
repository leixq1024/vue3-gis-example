/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{f as o}from"./componentsUtils.js";import{c as t}from"./observers.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */let s;const e={childList:!0};function n(o){s||(s=t("mutation",c)),s.observe(o.el,e)}function r(o){s.unobserve(o.el)}function c(t){t.forEach((({target:t})=>{o(t)}))}export{n as c,r as d};
