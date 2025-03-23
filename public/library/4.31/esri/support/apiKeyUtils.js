// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../config","../core/urlUtils"],function(c,e,f){function d(a){const b=f.getOrigin(a,!0);return b?b.endsWith(".arcgis.com")&&!g.has(b)&&!a.endsWith("/sharing/rest/generateToken"):!1}const g=new Set(["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]);c.isApiKey=function(a){return!!a&&4<a.length&&a.startsWith("AAPK")};c.isApiKeyApplicable=function(a,b){return!(!b&&!e.apiKey||!d(a))};c.supportsApiKey=d;Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});