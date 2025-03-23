// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["../../../chunks/antlr4.web"],function(a){class b extends a.ErrorListener{constructor(){super(...arguments);this.errors=null}syntaxError(g,h,c,d,e,f){this.errors||(this.errors=[]);this.errors.push({line:c,column:d,msg:e,e:f})}}return b});