// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/output/Emissions.glsl ../core/shaderTechnique/ShaderTechniqueConfiguration ../materials/DefaultTechniqueConfiguration".split(" "),function(d,b,e,f,g,c,h){class a extends h.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.transparent=!1;this.writeDepth=!0;this.cullAboveTerrain=this.terrainDepthTest=this.polygonOffset=
!1;this.textureCoordinateType=f.TextureCoordinateType.None;this.emissionSource=g.EmissionSource.None;this.output=e.ShaderOutput.Color;this.objectAndLayerIdColorInstanced=this.occlusionPass=this.hasSlicePlane=!1}get discardInvisibleFragments(){return this.transparent&&this.writeDepth}}b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],a.prototype,"polygonOffset",void 0);b.__decorate([c.parameter()],
a.prototype,"terrainDepthTest",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveTerrain",void 0);d.CheckerBoardTechniqueConfiguration=a;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});