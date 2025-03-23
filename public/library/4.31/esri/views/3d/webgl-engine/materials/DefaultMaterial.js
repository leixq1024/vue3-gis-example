// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../ViewingMode ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/output/Emissions.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/util/AlphaCutoff ../effects/geometry/olidUtils ../lib/basicInterfaces ../lib/GLTextureMaterial ../lib/Material ../lib/OrderIndependentTransparency ../lib/RayIntersections ../lib/RenderSlot ../lib/VertexAttribute ../lib/verticalOffsetUtils ./DefaultBufferWriter ./internal/MaterialUtil ../shaders/DefaultMaterialTechnique ../shaders/DefaultMaterialTechniqueConfiguration ../shaders/RealisticTreeTechnique".split(" "),
function(p,e,h,y,H,g,z,q,r,t,u,I,J,K,L,M,N,v,k,O,P,Q,A,R,S){function T(c){const b=H.newLayout().vec3f(k.VertexAttribute.POSITION);c.normalType===z.NormalType.Compressed?b.vec2i16(k.VertexAttribute.NORMALCOMPRESSED,{glNormalized:!0}):b.vec3f(k.VertexAttribute.NORMAL);c.hasVertexTangents&&b.vec4f(k.VertexAttribute.TANGENT);(c.textureId||c.normalTextureId||c.metallicRoughnessTextureId||c.emissiveTextureId||c.occlusionTextureId)&&b.vec2f(k.VertexAttribute.UV0);c.hasVertexColors&&b.vec4u8(k.VertexAttribute.COLOR);
c.hasSymbolColors&&b.vec4u8(k.VertexAttribute.SYMBOLCOLOR);I.olidEnabled()&&b.vec4u8(k.VertexAttribute.OBJECTANDLAYERIDCOLOR);return b}class U extends L.Material{constructor(c,b){super(c,B);this.materialType="default";this.supportsEdges=!0;this.produces=new Map([[v.RenderSlot.OPAQUE_MATERIAL,a=>(g.is3DGeometryOutputMRT(a)||g.isShadowRelatedOutput(a))&&!this.parameters.transparent],[v.RenderSlot.TRANSPARENT_MATERIAL,a=>(g.is3DGeometryOutputMRT(a)||g.isShadowRelatedOutput(a))&&this.parameters.transparent&&
this.parameters.writeDepth],[v.RenderSlot.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,a=>(g.is3DGeometryOutput(a)||g.isShadowRelatedOutput(a))&&this.parameters.transparent&&!this.parameters.writeDepth]]);this._vertexBufferLayout=T(this.parameters);this._configuration=new R.DefaultMaterialTechniqueConfiguration(b.spherical,b.doublePrecisionRequiresObfuscation)}isVisibleForOutput(c){return c===g.ShaderOutput.Shadow||c===g.ShaderOutput.ShadowExcludeHighlight||c===g.ShaderOutput.ShadowHighlight?this.parameters.castShadows:
!0}get visible(){var c=this.parameters;if(c.layerOpacity<u.alphaCutoff)return!1;const {hasInstancedColor:b,hasVertexColors:a,hasSymbolColors:d,vvColor:l}=c,m=b||l||d,f="replace"===c.colorMixMode,n=c.opacity>=u.alphaCutoff;if(a&&m)return f||n;c=c.externalColor&&c.externalColor[3]>=u.alphaCutoff;return a?f?c:n:m?f||n:f?c:n}get hasEmissions(){return!!this.parameters.emissiveTextureId||!e.exactEquals(this.parameters.emissiveFactor,h.ZEROS)}getConfiguration(c,b){const a=this.parameters,{treeRendering:d,
doubleSided:l,doubleSidedType:m}=a;this._configuration.output=c;this._configuration.hasNormalTexture=!d&&!!a.normalTextureId;this._configuration.hasColorTexture=!!a.textureId;this._configuration.hasVertexTangents=!d&&a.hasVertexTangents;this._configuration.instanced=a.isInstanced;this._configuration.instancedDoublePrecision=a.instancedDoublePrecision;this._configuration.vvSize=!!a.vvSize;this._configuration.hasVerticalOffset=null!=a.verticalOffset;this._configuration.hasScreenSizePerspective=null!=
a.screenSizePerspective;this._configuration.hasSlicePlane=a.hasSlicePlane;this._configuration.hasSliceHighlight=a.hasSliceHighlight;this._configuration.alphaDiscardMode=a.textureAlphaMode;this._configuration.normalType=d?z.NormalType.Attribute:a.normalType;this._configuration.transparent=a.transparent;this._configuration.writeDepth=a.writeDepth;null!=a.customDepthTest&&(this._configuration.customDepthTest=a.customDepthTest);this._configuration.hasOccludees=b.hasOccludees;this._configuration.cullFace=
a.hasSlicePlane?J.CullFaceOptions.None:a.cullFace;this._configuration.terrainDepthTest=b.terrainDepthTest;this._configuration.cullAboveTerrain=b.cullAboveTerrain;this._configuration.hasModelTransformation=!d&&null!=a.modelTransformation;this._configuration.hasVertexColors=a.hasVertexColors;this._configuration.hasSymbolColors=a.hasSymbolColors;this._configuration.doubleSidedMode=d?r.NormalsDoubleSidedMode.WindingOrder:l&&"normal"===m?r.NormalsDoubleSidedMode.View:l&&"winding-order"===m?r.NormalsDoubleSidedMode.WindingOrder:
r.NormalsDoubleSidedMode.None;this._configuration.instancedColor=a.hasInstancedColor;this._configuration.receiveShadows=a.receiveShadows&&a.receiveShadows;this._configuration.receiveAmbientOcclusion=a.receiveAmbientOcclusion&&null!=b.ssao;this._configuration.vvColor=!!a.vvColor;this._configuration.textureAlphaPremultiplied=!!a.textureAlphaPremultiplied;this._configuration.pbrMode=a.usePBR?a.isSchematic?t.PBRMode.Schematic:t.PBRMode.Normal:t.PBRMode.Disabled;this._configuration.hasMetallicRoughnessTexture=
!d&&!!a.metallicRoughnessTextureId;this._configuration.emissionSource=d?q.EmissionSource.None:null!=a.emissiveTextureId?q.EmissionSource.Texture:a.usePBR?q.EmissionSource.Value:q.EmissionSource.None;this._configuration.hasOcclusionTexture=!d&&!!a.occlusionTextureId;this._configuration.offsetBackfaces=!(!a.transparent||!a.offsetTransparentBackfaces);this._configuration.oitPass=b.oitPass;this._configuration.enableOffset=b.camera.relativeElevation<M.OITPolygonOffsetLimit;this._configuration.snowCover=
null!=b.weather&&b.weatherVisible&&"snowy"===b.weather.type&&"enabled"===b.weather.snowCover;this._configuration.hasColorTextureTransform=!!a.colorTextureTransformMatrix;this._configuration.hasNormalTextureTransform=!!a.normalTextureTransformMatrix;this._configuration.hasEmissionTextureTransform=!!a.emissiveTextureTransformMatrix;this._configuration.hasOcclusionTextureTransform=!!a.occlusionTextureTransformMatrix;this._configuration.hasMetallicRoughnessTextureTransform=!!a.metallicRoughnessTextureTransformMatrix;
return this._configuration}intersect(c,b,a,d,l,m){if(null!=this.parameters.verticalOffset){const n=a.camera;e.set(w,b[12],b[13],b[14]);b=null;switch(a.viewingMode){case y.ViewingMode.Global:b=e.normalize(C,w);break;case y.ViewingMode.Local:b=e.copy(C,V)}let D=0;var f=e.subtract(W,w,n.eye);const E=e.length(f);f=e.scale(f,f,1/E);let F=null;this.parameters.screenSizePerspective&&(F=e.dot(b,f));D+=Q.verticalOffsetAtDistance(n,E,this.parameters.verticalOffset,F??0,this.parameters.screenSizePerspective);
e.scale(b,b,D);e.transformMat3(x,b,a.transform.inverseRotation);d=e.subtract(X,d,x);l=e.subtract(Y,l,x)}N.intersectTriangleGeometry(c,a,d,l,O.getVerticalOffsetObject3D(a.verticalOffset),m)}createGLMaterial(c){return new G(c)}createBufferWriter(){return new P.DefaultBufferWriter(this._vertexBufferLayout)}}class G extends K.GLTextureMaterial{constructor(c){super({...c,...c.material.parameters})}beginSlot(c){this._material.setParameters({receiveShadows:c.shadowMap.enabled});const b=this._material.parameters;
this.updateTexture(b.textureId);const a=c.camera.viewInverseTransposeMatrix;e.set(b.origin,a[3],a[7],a[11]);this._material.setParameters(this.textureBindParameters);return this.acquireTechnique(b.treeRendering?S.RealisticTreeTechnique:A.DefaultMaterialTechnique,c)}}class B extends A.DefaultMaterialPassParameters{constructor(){super(...arguments);this.hasVertexTangents=this.treeRendering=this.initTextureTransparent=!1}}const X=h.create(),Y=h.create(),V=h.fromValues(0,0,1),C=h.create(),x=h.create(),
w=h.create(),W=h.create();p.DefaultGLMaterial=G;p.DefaultMaterial=U;p.DefaultMaterialParameters=B;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});