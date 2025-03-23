// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/programUtils"],function(h,k,n){h.createProgramTemplate=(c,d,p,a)=>{c+=c.slice(Math.max(0,c.lastIndexOf("/")));d+=d.slice(Math.max(0,d.lastIndexOf("/")));const l={};for(const m in a){let b=void 0;var f=m;b=""+f[0].toUpperCase();for(let g=1;g<f.length;g++){const e=f[g];e===e.toUpperCase()?(b+="_",b+=e):b+=e.toUpperCase()}l[b]=a[m]}a=n.glslifyDefineMap(l);return{attributes:p,shaders:{vertexShader:a+k.resolveIncludes(`${c}.vert`),fragmentShader:a+
k.resolveIncludes(`${d}.frag`)}}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});