/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(a){return a=a||globalThis.location.hostname,i.some((c=>null!=a?.match(c)))}function c(a,c){return a?(c=c||globalThis.location.hostname)?null!=c.match(s)||null!=c.match(o)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=c.match(t)||null!=c.match(l)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a:null}const s=/^devext\.arcgis\.com$/,t=/^qaext\.arcgis\.com$/,o=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,s,t,/^jsapps\.esri\.com$/,o,l];export{c as a,a as i};
