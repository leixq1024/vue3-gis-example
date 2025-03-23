// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../layers/graphics/dehydratedPoint ./EngineVisualElement ../../terrain/OverlayRenderer ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(y,H,t,k,w,n,p,z,I,J,K,A,B,L,M,x,C){function D(a){return[B.createPolylineGeometry(a,[p.create(),p.create()]),B.createPolylineGeometry(a,[p.create(),p.create()])]}function E(a,b,c,d,l,e){c=k.scale(F,k.set(F,a[1]*c,a[0]*-c),d+l/2);b=k.add(u,k.add(u,k.add(u,b,k.scale(u,a,e/2)),c),c);a=k.add(G,b,k.scale(G,a,-e));return{start:b,end:a}}function N(a){a.geometries.length=0}function O(a){a.pixelRatioHandle.remove();a.geometries=[]}class P extends K.EngineVisualElement{constructor(a){super(a);this._location=
p.create();this._direction=p.fromValues(1,0,0);this._offset=this._width=1;this._length=18;this._color=I.fromValues(1,0,1,1);this._renderOccluded=L.RenderOccludedFlag.OccludeAndTransparent;this.applyProperties(a)}createObject3DResourceFactory(a){return{view:a,createResources:b=>this._createObject3DResources(b),destroyResources:N,recreateGeometry:(b,c)=>this._recreateObject3DGeometry(b,c),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(a){return{view:a,createResources:()=>this._createDrapedResources(),
destroyResources:O,recreateGeometry:b=>this._recreateDrapedGeometry(b)}}get location(){return this._location}set location(a){n.exactEquals(this._location,a)||(n.copy(this._location,a),this._updateGeometry())}get direction(){return this._direction}set direction(a){n.exactEquals(this._direction,a)||(n.copy(this._direction,a),this._updateGeometry())}setDirectionFromPoints(a,b){n.normalize(this._direction,n.subtract(this._direction,b,a));this._updateGeometry()}get width(){return this._width}set width(a){a!==
this._width&&(this._width=a,this._updateMaterial())}get offset(){return this._offset}set offset(a){a!==this._offset&&(this._offset=a,this._updateGeometry())}get length(){return this._length}set length(a){a!==this._length&&(this._length=a,this._updateGeometry())}get color(){return this._color}set color(a){z.exactEquals(a,this._color)||(z.copy(this._color,a),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(a){a!==this._renderOccluded&&(this._renderOccluded=
a,this._updateMaterial())}_createObject3DResources(a){const b=new C.RibbonLineMaterial(this.materialParameters),c=[];this._createObject3DGeometry(b,a,c);return{material:b,geometries:c,forEach:d=>{d(b);c.forEach(d)}}}_recreateObject3DGeometry(a,b){a.geometries.length=0;this._createObject3DGeometry(a.material,b,a.geometries)}_createObject3DGeometry(a,b,c){const [d,l]=D(a);b.addGeometry(d);b.addGeometry(l);c.push(d);c.push(l);this._updateVerticesObject3D(b)}_createDrapedResources(){const a=new C.RibbonLineMaterial(this.materialParameters),
b=H.watch(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:a,geometries:this._createDrapedGeometry(a),pixelRatioHandle:b}}_recreateDrapedGeometry(a){a.geometries=this._createDrapedGeometry(a.material)}_createDrapedGeometry(a){a=D(a);this._updateVerticesDraped(a);return a.map(b=>new M.RenderGeometry(b))}_updateMaterial(){const {materialParameters:a}=this;this.object3dResources.resources?.material.setParameters(a);this.drapedResources.resources?.material.setParameters(a)}get materialParameters(){return{width:this._width,
color:this._color,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const a=this.object3dResources.object;a&&this._updateVerticesObject3D(a)}}_updateVerticesObject3D(a){const b=this.view.state.camera;b.projectToScreen(this.location,v);n.add(m,this.location,this.direction);b.projectToScreen(m,q);k.normalize(q,k.subtract(q,q,v));this._updateVertexAttributesObject3D(b,a,0,v,q,1);this._updateVertexAttributesObject3D(b,
a,1,v,q,-1)}_updateVertexAttributesObject3D(a,b,c,d,l,e){c=b.geometries[c];const f=c.getMutableAttribute(x.VertexAttribute.POSITION)?.data;if(f){var {start:g,end:h}=E(l,d,e,this.offset,this.width,this.length);a.unprojectFromScreen(t.castScreenPointArray(g),m);f[0]=m[0];f[1]=m[1];f[2]=m[2];a.unprojectFromScreen(t.castScreenPointArray(h),m);f[3]=m[0];f[4]=m[1];f[5]=m[2];b.geometryVertexAttributeUpdated(c,x.VertexAttribute.POSITION)}}_updateVerticesDraped(a){const {view:{basemapTerrain:{overlayManager:b},
state:{contentPixelRatio:c}}}=this,{location:d,width:l,length:e,offset:f}=this;var g=Q;g.spatialReference=b.renderer.spatialReference;g.x=d[0];g.y=d[1];var h=this.view.overlayPixelSizeInMapUnits(g)*c;g=l*h;const r=e*h;h*=f;this._updateVertexAttributesDraped(a[0],g,r,h,-1);this._updateVertexAttributesDraped(a[1],g,r,h,1)}_updateVertexAttributesDraped(a,b,c,d,l){const e=a.getMutableAttribute(x.VertexAttribute.POSITION)?.data;if(e){var {location:f,direction:g}=this,{start:h,end:r}=E(g,f,l,d,b,c);e[0]=
h[0];e[1]=h[1];e[2]=A.drapedZ;e[3]=r[0];e[4]=r[1];e[5]=A.drapedZ;a.invalidateBoundingInfo()}}}const m=p.create(),F=w.create(),u=w.create(),G=w.create(),v=t.createScreenPointArray(),q=t.createScreenPointArray(),Q=J.makeDehydratedPoint(0,0,void 0,null);y.ParallelLineVisualElement=P;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});