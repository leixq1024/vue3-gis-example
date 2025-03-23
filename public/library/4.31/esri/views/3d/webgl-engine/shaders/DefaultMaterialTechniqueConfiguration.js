// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/output/Emissions.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../materials/DefaultTechniqueConfiguration".split(" "),function(f,b,g,h,e,k,l,c,d,m){class a extends m.DefaultTechniqueConfiguration{constructor(n,
p){super();this.spherical=n;this.doublePrecisionRequiresObfuscation=p;this.alphaDiscardMode=d.AlphaDiscardMode.Opaque;this.doubleSidedMode=k.NormalsDoubleSidedMode.None;this.pbrMode=l.PBRMode.Disabled;this.cullFace=d.CullFaceOptions.None;this.normalType=g.NormalType.Attribute;this.customDepthTest=d.DepthTestFunction.Less;this.emissionSource=e.EmissionSource.None;this.hasSlicePlane=this.hasVerticalOffset=this.hasSymbolColors=this.hasVertexColors=!1;this.hasSliceHighlight=!0;this.instancedColor=this.instanced=
this.textureAlphaPremultiplied=this.receiveAmbientOcclusion=this.receiveShadows=this.vvColor=this.vvSize=this.offsetBackfaces=this.hasModelTransformation=this.hasOccludees=this.hasVertexTangents=this.hasScreenSizePerspective=this.hasNormalTexture=this.hasOcclusionTexture=this.hasMetallicRoughnessTexture=this.hasColorTexture=!1;this.writeDepth=!0;this.transparent=!1;this.enableOffset=!0;this.occlusionPass=this.hasMetallicRoughnessTextureTransform=this.hasOcclusionTextureTransform=this.hasNormalTextureTransform=
this.hasEmissionTextureTransform=this.hasColorTextureTransform=this.snowCover=this.cullAboveTerrain=this.terrainDepthTest=!1;this.hasVvInstancing=!0;this.useCustomDTRExponentForWater=!1;this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===e.EmissionSource.Texture||this.hasOcclusionTexture||this.hasNormalTexture?h.TextureCoordinateType.Default:h.TextureCoordinateType.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}
b.__decorate([c.parameter({count:d.AlphaDiscardMode.COUNT})],a.prototype,"alphaDiscardMode",void 0);b.__decorate([c.parameter({count:k.NormalsDoubleSidedMode.COUNT})],a.prototype,"doubleSidedMode",void 0);b.__decorate([c.parameter({count:l.PBRMode.COUNT})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({count:d.CullFaceOptions.COUNT})],a.prototype,"cullFace",void 0);b.__decorate([c.parameter({count:g.NormalType.COUNT})],a.prototype,"normalType",void 0);b.__decorate([c.parameter({count:d.DepthTestFunction.COUNT})],
a.prototype,"customDepthTest",void 0);b.__decorate([c.parameter({count:e.EmissionSource.COUNT})],a.prototype,"emissionSource",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexColors",void 0);b.__decorate([c.parameter()],a.prototype,"hasSymbolColors",void 0);b.__decorate([c.parameter()],a.prototype,"hasVerticalOffset",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"hasSliceHighlight",void 0);b.__decorate([c.parameter()],a.prototype,
"hasColorTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasOcclusionTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasNormalTexture",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSizePerspective",void 0);b.__decorate([c.parameter()],a.prototype,"hasVertexTangents",void 0);b.__decorate([c.parameter()],a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"hasModelTransformation",
void 0);b.__decorate([c.parameter()],a.prototype,"offsetBackfaces",void 0);b.__decorate([c.parameter()],a.prototype,"vvSize",void 0);b.__decorate([c.parameter()],a.prototype,"vvColor",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,"receiveAmbientOcclusion",void 0);b.__decorate([c.parameter()],a.prototype,"textureAlphaPremultiplied",void 0);b.__decorate([c.parameter()],a.prototype,"instanced",void 0);b.__decorate([c.parameter()],a.prototype,
"instancedColor",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"enableOffset",void 0);b.__decorate([c.parameter()],a.prototype,"terrainDepthTest",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveTerrain",void 0);b.__decorate([c.parameter()],a.prototype,"snowCover",void 0);b.__decorate([c.parameter()],a.prototype,"hasColorTextureTransform",void 0);b.__decorate([c.parameter()],
a.prototype,"hasEmissionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasNormalTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasOcclusionTextureTransform",void 0);b.__decorate([c.parameter()],a.prototype,"hasMetallicRoughnessTextureTransform",void 0);f.DefaultMaterialTechniqueConfiguration=a;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});