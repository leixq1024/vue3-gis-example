// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class e{constructor(a,c){this.screen=a;this.olid=c}}b.RenderSceneResult=e;b.removeLoadedShaderModules=function(){const a=globalThis.require?.modules;if(a){const c=Object.keys(a);for(const d of c)d.includes(".glsl")&&delete a[d]}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});