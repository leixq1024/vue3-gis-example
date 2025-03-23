// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./RenderCamera"],function(a){class b{get gl(){return this.rctx.gl}constructor(c,d){this.view=c;this._node=d;this.camera=new a}resetWebGLState(){this._node.resetWebGLState()}bindRenderTarget(){this._node.bindRenderTarget()}}return b});