// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./updateElevationUtils","./utils"],function(c,f){return async function(b,a,d){const e=Array.isArray(b)?b:[b];if(f.isUpdateElevationWithElevationSampler(a))a=await c.updateUsingElevationSampler(e,a.elevationSample,d);else if(f.isUpdateElevationWithElevationSource(a)){const {elevationSource:g,extent:h}=a,{url:k,lod:l,rasterFunction:m}=g;a=await c.updateUsingElevationSource(e,{url:k,lod:l,rasterFunction:m,extent:h},d)}else a=await c.updateUsingConstant(e,a.elevationSource.constantElevation,
d);return Array.isArray(b)?a:a[0]}});