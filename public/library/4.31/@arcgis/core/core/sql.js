/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function e(e,n){const{WhereClause:t}=await import("./sql/WhereClause.js").then((e=>e.W));return t.create(e,{fieldsIndex:n})}function n(e,n){return"1=1"===e?n??e:"1=1"===n?e??n:null!=e&&""!==e?null!=n&&""!==n?`(${e}) AND (${n})`:e:n}export{e as parseWhereClause,n as sqlAnd};
