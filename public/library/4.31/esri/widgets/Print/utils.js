// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../rest/print","../../rest/geoprocessor/execute","../../rest/geoprocessor/submitJob"],function(b,e,f,g,h){b.fetchLayoutTemplateInfos=async function(a,c,d){if(!a)throw new e("print:invalid-layout-info-task-url","Can't fetch layout template info",{url:a});return"async"===await f.getMode(a)?(a=await h.submitJob(a,c,void 0,d||void 0),await a.waitForJobCompletion(),(await a.fetchResultData("Output_JSON")).value):(await g.execute(a,c,null,d)).results[0].value};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});