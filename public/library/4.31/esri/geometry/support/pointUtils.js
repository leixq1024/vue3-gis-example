// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./spatialReferenceUtils","./webMercatorUtils"],function(e,g,k){function f({x:a,y:b,spatialReference:d},c=[0,0]){if(d){if(g.isWebMercator(d))return k.xyToLngLat(a,b,c);if(g.isGeographic(d))return c[0]=a,c[1]=b,c}return null}const h=[0,0];e.distance=function(a,b){const d=a.x-b.x,c=a.y-b.y;a=null!=a.z&&null!=b.z?a.z-b.z:0;return Math.sqrt(d*d+c*c+a*a)};e.getLatitude=function(a){return f(a,h)?.[1]??null};e.getLongitude=function(a){return f(a,h)?.[0]??null};e.getLongitudeLatitude=f;
Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});