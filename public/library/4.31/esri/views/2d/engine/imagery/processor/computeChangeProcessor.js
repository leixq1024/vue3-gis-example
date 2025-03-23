// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./utils"],function(e){const f={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/computechange",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a){const {painter:b,rasterFunction:d}=a,{method:c,rasters:g,isOutputRounded:h}=d.parameters;a=[c.includes("-")?c.slice(0,c.indexOf("-")):c];g.filter(k=>"Constant"===k.name).length&&a.push("oneConstant");h&&a.push("roundOutput");return b.materialManager.getProgram(f,a)},bindTextureAndUniforms:function(a,b,d){e.setMultipleImageTextures(a,
b,d);e.setCoordsAndTransforms(b);({domainRange:a}=a.rasterFunction.parameters);b.setUniform2fv("u_domainRange",a)}}});