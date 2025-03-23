/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as n,f as e}from"./componentsUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const t=new WeakMap,s=new WeakMap;function a(n){s.set(n,new Promise((e=>t.set(n,e))))}function i(n){t.get(n)()}function o(n){return s.get(n)}async function r(t){if(await o(t),n())return e(t),new Promise((n=>requestAnimationFrame((()=>n()))))}export{i as a,o as b,r as c,a as s};
