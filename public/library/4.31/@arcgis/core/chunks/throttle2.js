/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as i,d as n}from"./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */function t(t,a,r){var e=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(r)&&(e="leading"in r?!!r.leading:e,o="trailing"in r?!!r.trailing:o),n(t,a,{leading:e,maxWait:a,trailing:o})}export{t};
