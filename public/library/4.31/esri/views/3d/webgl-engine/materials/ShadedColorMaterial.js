// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/buffer/BufferView ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/util/AlphaCutoff ../lib/basicInterfaces ../lib/GLMaterial ../lib/Material ../lib/RayIntersections ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./internal/bufferWriterUtils ../shaders/ShadedColorMaterialTechnique ../shaders/ShadedColorMaterialTechniqueConfiguration".split(" "),
function(n,h,p,u,v,C,D,l,E,F,G,w,x,q,H,c,y,z,I){class J extends w.Material{constructor(a){super(a,A);this._configuration=new I.ShadedColorMaterialTechniqueConfiguration;this.vertexAttributeLocations=z.vertexAttributeLocations;this.supportsEdges=!0;this.produces=new Map([[q.RenderSlot.OPAQUE_MATERIAL,b=>b===l.ShaderOutput.Highlight||l.isColorOrOID(b)&&!this.parameters.transparent],[q.RenderSlot.TRANSPARENT_MATERIAL,b=>l.isColorOrOID(b)&&this.parameters.transparent&&this.parameters.writeDepth],[q.RenderSlot.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,
b=>l.isColorOrOID(b)&&this.parameters.transparent&&!this.parameters.writeDepth]])}getConfiguration(a,b){this._configuration.output=a;this._configuration.cullFace=this.parameters.cullFace;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.transparent=this.parameters.transparent;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled;this._configuration.shadingEnabled=this.parameters.shadingEnabled;
this._configuration.oitPass=b.oitPass;this._configuration.terrainDepthTest=b.terrainDepthTest;this._configuration.cullAboveTerrain=b.cullAboveTerrain;return this._configuration}get visible(){return this.parameters.color[3]>=E.alphaCutoff}intersect(a,b,e,m,g,k){if(this.parameters.screenSizeEnabled){const r=a.attributes.get(c.VertexAttribute.OFFSET);x.intersectTriangleGeometry(a,e,m,g,{applyToVertex:(d,t,K,f)=>{f=h.set(B,r.data[3*f],r.data[3*f+1],r.data[3*f+2]);d=h.set(L,d,t,K);h.scale(f,f,this.parameters.screenSizeScale*
e.camera.computeScreenPixelSizeAt(f));h.add(d,d,f);return[d[0],d[1],d[2]]},applyToAabb:d=>{const t=v.center(d,B);return v.scale(d,this.parameters.screenSizeScale*e.camera.computeScreenPixelSizeAt(t))}},k)}else x.intersectTriangleGeometry(a,e,m,g,void 0,k)}createGLMaterial(a){return new M(a)}createBufferWriter(){return new N(this.parameters.screenSizeEnabled)}}class M extends G{beginSlot(a){return this.acquireTechnique(z.ShadedColorMaterialTechnique,a)}}class A extends w.MaterialParameters{constructor(){super(...arguments);
this.color=u.fromValues(1,1,1,1);this.shadingTint=u.fromValues(0,0,0,.25);this.shadingDirection=h.normalize(p.create(),[.5,-.5,-.5]);this.screenSizeScale=14;this.forceTransparentMode=!1;this.writeDepth=!0;this.hasSlicePlane=!1;this.cullFace=F.CullFaceOptions.None;this.screenSizeEnabled=!1;this.shadingEnabled=!0}get transparent(){return 1>this.color[3]||this.forceTransparentMode}}class N{constructor(a){this.screenSizeEnabled=a;a=D.newLayout().vec3f(c.VertexAttribute.POSITION).vec3f(c.VertexAttribute.NORMAL);
this.screenSizeEnabled&&a.vec3f(c.VertexAttribute.OFFSET);this.vertexBufferLayout=a}elementCount(a){return a.get(c.VertexAttribute.POSITION).indices.length}write(a,b,e,m,g,k){y.writeDefaultAttributes(e,m,this.vertexBufferLayout,a,b,g,k);if(this.screenSizeEnabled)if(e.has(c.VertexAttribute.OFFSET))if(a=e.get(c.VertexAttribute.OFFSET),H.assert(3===a.size),g=g.getField(c.VertexAttribute.OFFSET,C.BufferViewVec3f))y.writePosition(a,b,g,k);else throw Error("unable to acquire view for "+c.VertexAttribute.OFFSET);
else throw Error(`${c.VertexAttribute.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);}}const B=p.create(),L=p.create();n.Parameters=A;n.ShadedColorMaterial=J;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});