// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ./VisualElement ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/UpdatePolicy ../../webgl-engine/lib/WebGLLayer".split(" "),function(d,e,f,g,h,k,l){class m extends g.VisualElement{constructor(a){super(a);this._resources=null;this._transform=f.create()}get object(){return null!=this._resources?this._resources.object:null}get transform(){return this._transform}set transform(a){e.copy(this._transform,
a);null!=this._resources&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(null!=this._resources){var a=this._resources.object,b=this.view._stage;b.removeMany(a.geometries);a.removeAllGeometries();this.createGeometries(a);a.visible=this.visible;b.addMany(a.geometries)}}createResources(){this.destroyResources();const a=this.view._stage;if(a){var b=new l.WebGLLayer(a,{pickable:!1,updatePolicy:k.UpdatePolicy.SYNC}),c=new h.Object3D({castShadow:!1});
c.transformation=this._transform;this.createExternalResources();this.createGeometries(c);a.addMany(c.geometries);this.forEachExternalMaterial(n=>a.add(n));a.add(c);b.add(c);c.visible=this.visible;this._resources={layer:b,object:c}}}destroyResources(){const a=this.view._stage;null!=this._resources&&a&&(a.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial(b=>{a.remove(b)}),a.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),
this._resources=null)}updateVisibility(a){null!=this._resources&&(this._resources.object.visible=a)}}d.Object3DVisualElement=m;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});