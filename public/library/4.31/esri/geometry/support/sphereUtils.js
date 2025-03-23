// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","../../chunks/vec32"],function(e,h,f){e.cartesianToSpherical=function(a,c){const b=f.length(a),d=h.asinClamped(a[2]/b);f.set(c,b,d,Math.atan2(a[1]/b,a[0]/b));return c};e.sphericalToCartesian=function(a,c){const b=a[0],d=a[1];a=a[2];const g=Math.cos(d);f.set(c,b*g*Math.cos(a),b*g*Math.sin(a),b*Math.sin(d))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});