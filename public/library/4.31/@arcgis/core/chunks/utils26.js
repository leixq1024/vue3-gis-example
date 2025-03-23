/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{B as e}from"./dom.js";import{i as t}from"./componentsUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const n="CALCITE-COMBOBOX-ITEM",o="CALCITE-COMBOBOX-ITEM-GROUP",i=`${n}, ${o}`,s={input:"input",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon",placeholderIcon:"placeholder-icon",selectedIcon:"selected-icon"},c={validationMessage:"comboboxValidationMessage"};function l(e){const t=e.parentElement?.closest(i),n=t?.parentElement?.closest(i);return[t,n].filter((e=>e))}function a(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function r(t){return e(t.querySelectorAll("calcite-combobox-item"))}function u(t){return e(t.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function m(e){return t()?document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}function p(e){return e.includes("single")}function d(e){return e.shortHeading||e.textLabel}export{s as C,c as I,i as a,a as b,r as c,n as d,o as e,l as f,d as g,u as h,p as i,m as j};
