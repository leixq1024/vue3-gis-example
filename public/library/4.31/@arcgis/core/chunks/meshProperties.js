/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,n,r,t){const{loggerTag:o,stride:a}=n;return e.length%a!=0?(t.error(o,`Invalid array length, expected a multiple of ${a}`),new r([])):e}function n(n,r,t,o,a){if(!n)return n;if(n instanceof r)return e(n,o,r,a);for(const c of t)if(n instanceof c)return e(new r(n),o,r,a);if(Array.isArray(n))return e(new r(n),o,r,a);{const e=t.map((e=>`'${e.name}'`));return a.error(`Failed to set property, expected one of ${e}, but got ${n.constructor.name}`),new r([])}}function r(e,n,r){n[r]=function(e){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r];return n}(e)}export{n as c,r as w};
