// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../core/unitUtils ../../chunks/vec32 ./Axis ./plane".split(" "),function(e,r,m,t,f,g){function n(a,c,h,k){const l=Array.isArray(c[0])?(d,b)=>c[d][b]:(d,b)=>c[3*d+b],p=k?m.getMetersPerUnitForSR(k)/m.getMetersPerVerticalUnitForSR(k):1;return g.fromManyPoints(a,(d,b)=>t.set(d,l(b,0)*p,l(b,1)*p,l(b,2)),h)}const q=g.create();e.fitPlane=n;e.leastSignificantAxis=function(a,c,h){a=n(q,a,c,h)?g.getNormal(q):[0,0,1];return Math.abs(a[2])>Math.cos(r.deg2rad(80))?f.Axis.Z:
Math.abs(a[1])>Math.abs(a[0])?f.Axis.Y:f.Axis.X};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});