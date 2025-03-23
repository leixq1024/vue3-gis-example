// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/vec2f64","../../../../core/libs/gl-matrix-2/math/common"],function(e,l,m){function g(a){if(null==a||"polyline"!==a.type&&"polygon"!==a.type)return 0;var b="polyline"===a.type?a.paths:a.rings;a=m.getEpsilon();for(const f of b)for(b=0;b<f.length-1;b++){const c=f[b],d=f[b+1],h=c[0]-d[0],k=c[1]-d[1];if(h*h+k*k>a)return Math.atan2(d[1]-c[1],d[0]-c[0])}return 0}e.mainAxis=function(a){a=g(a);return l.fromValues(Math.cos(a),Math.sin(a))};e.orientation=
g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});