// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../utils","../Technique","../TechniqueType","../shaders/GridShader"],function(b,c,d,e,f){class g extends d.Technique{constructor(){super(...arguments);this.type=e.TechniqueType.Grid;this.shaders={grid:new f.GridShader}}render(h,k){const {context:l,painter:a}=h;a.setPipelineState(c.simplePipelineState);a.submitDrawMesh(l,{shader:this.shaders.grid,uniforms:k,defines:null,optionalAttributes:null,useComputeBuffer:!1},a.quadMesh)}}b.GridTechnique=g;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});