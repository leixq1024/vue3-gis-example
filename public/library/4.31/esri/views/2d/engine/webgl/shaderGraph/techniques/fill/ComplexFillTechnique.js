// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../FeatureTechnique","../featureTechniqueUtils","../TechniqueType","../shaders/ComplexFillShader"],function(e,g,b,h,k){class l extends g.FeatureTechnique{constructor(){super(...arguments);this.type=h.TechniqueType.ComplexFill;this.shaders={geometry:new k.ComplexFillShader}}render(a,c){const {context:m,painter:d}=a,f=c.instance.getInput();d.setShader({shader:this.shaders.geometry,uniforms:{...b.resolveDynamicUniforms(a,c.target,f.uniforms),...b.getFeatureUniforms(a,c.target),mosaicInfo:d.textureManager.getMosaicInfo(m,
c.textureKey),localTileOffset:b.getLocalTileOffset(c.target)},defines:{...b.getSelectionDefines(a)},optionalAttributes:f.optionalAttributes,useComputeBuffer:b.isHittest(a)});d.setPipelineState(b.getFeaturePipelineState(a));d.submitDraw(a,c)}}e.ComplexFillTechnique=l;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});