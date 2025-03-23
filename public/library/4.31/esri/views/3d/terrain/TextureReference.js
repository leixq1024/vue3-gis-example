// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/libs/gl-matrix-2/factories/vec3f64"],function(a,c){class d{constructor(b,e,f,g,h,k){this.texture=b;this.type=e;this.offsetAndScale=f;b.retain();this.opacities=c.fromValues(g,h,k)}destroy(){this.texture.release()}}a.TextureReference=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});