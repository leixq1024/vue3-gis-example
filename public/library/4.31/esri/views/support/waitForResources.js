// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["../../core/promiseUtils","../../core/reactiveUtils","../../core/scheduling","../../core/accessorSupport/watch"],function(h,k,e,f){function l(a){function b(){var c;if(c=!a.destroyed)f.dispatch(),e.debug.dispatch(),c=!a.ready||a.updating||!a.stationary||a.rendering;c?(d=null,setTimeout(b,16)):(d||=performance.now(),100<=performance.now()-d?g():setTimeout(b,16))}const g=h.createResolver();let d=performance.now();setTimeout(b,16);return g.promise}return function(a){switch(a.type){case "2d":return l(a);
case "3d":if(a)return f.dispatch(),e.debug.dispatch(),k.whenOnce(()=>!a.updating)}return Promise.resolve()}});