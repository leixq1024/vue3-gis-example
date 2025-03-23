// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./utils"],function(f){const g={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/bandarithmetic",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a,b){const {painter:c,rasterFunction:d}=a,{indexType:e,isOutputRounded:h}=d.parameters;a=[e];h&&a.push("roundOutput");return c.materialManager.getProgram(g,a)},bindTextureAndUniforms:function(a,b,c){f.setSingleImageTextures(a,b,c);f.setCoordsAndTransforms(b);const {bandIndexMat3:d,adjustments:e}=a.rasterFunction.parameters;
b.setUniformMatrix3fv("u_bandIndexMat3",d);b.setUniform1fv("u_adjustments",e)}}});