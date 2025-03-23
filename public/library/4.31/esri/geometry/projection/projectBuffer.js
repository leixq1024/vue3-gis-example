// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./projectors"],function(l,g){l.projectBuffer=function(f,c,d,h,m,k,b=Math.floor(f.length/3)){c=g.getProjector(c,m,g.projectorCache);if(null==c)return!1;if(c===g.copy3){if(f===h&&d===k)return!0;b=d+3*b;for(let a=d,e=k;a<b;a++,e++)h[e]=f[a];return!0}b=d+3*b;for(let a=d,e=k;a<b;a+=3,e+=3)c(f,a,h,e);return!0};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});