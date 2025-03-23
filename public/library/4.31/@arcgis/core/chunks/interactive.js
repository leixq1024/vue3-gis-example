/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{h as e}from"./componentsUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */function t(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function n(e){e.target.disabled&&e.preventDefault()}const i=["mousedown","mouseup","click"];function o(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const a={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){var r;e.el.click=t,(r=e.el).addEventListener("pointerdown",n,a),i.forEach((e=>r.addEventListener(e,o,a)))}(e);!function(e){var t;delete e.el.click,(t=e.el).removeEventListener("pointerdown",n,a),i.forEach((e=>t.removeEventListener(e,o,a)))}(e),e.el.removeAttribute("aria-disabled")}const c=({disabled:t},n)=>e("div",{class:"interaction-container",inert:t},...n);export{c as I,r as u};
