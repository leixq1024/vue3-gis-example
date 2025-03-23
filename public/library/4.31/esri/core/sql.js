// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){c.parseWhereClause=async function(a,b){const {WhereClause:e}=await new Promise((f,g)=>d(["./sql/WhereClause"],f,g));return e.create(a,{fieldsIndex:b})};c.sqlAnd=function(a,b){return"1\x3d1"===a?b??a:"1\x3d1"===b?a??b:null!=a&&""!==a?null!=b&&""!==b?`(${a}) AND (${b})`:a:b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});