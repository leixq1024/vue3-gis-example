// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/sql"],function(b,e){b.createFeatureSourceSchema=function(a,f,g,c){const h=e.sqlAnd(a.definitionExpression,null!=a.subtypeCode?`${a.subtypeField} = ${a.subtypeCode}`:null),d=a.customParameters??{};c&&(d.token=c);return{type:"feature",mutable:{sourceRefreshVersion:g,availableFields:f.availableFields,dataFilter:{queryScaleRanges:a.queryScaleRanges??[],definitionExpression:h,gdbVersion:a.gdbVersion,historicMoment:a.historicMoment?.getTime(),timeExtent:a.timeExtent?.toJSON(),
customParameters:d}}}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});