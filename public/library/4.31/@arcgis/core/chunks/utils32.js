/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as t}from"./componentsUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const e="calcite-list",r="calcite-list-item";function s(t){return Array.from(t.assignedElements({flatten:!0}).filter((t=>t.matches(e))))}function i(t){const s=t.assignedElements({flatten:!0}),i=s.filter((t=>t?.matches("calcite-list-item-group"))).map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]),l=s.filter((t=>t?.matches(r)));return[...s.filter((t=>t?.matches(e))).map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]),...i,...l]}function l(t){t.forEach((e=>{e.setPosition=t.indexOf(e)+1,e.setSize=t.length}))}function n(e,r=!1){if(!t())return 0;const s=r?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(s,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{i as a,s as b,n as g,l as u};
