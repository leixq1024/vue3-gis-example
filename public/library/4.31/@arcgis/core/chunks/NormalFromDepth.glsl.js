/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{N as i}from"./NestedMap.js";import{R as o}from"./Scheduler.js";import{R as t}from"./StencilUtils.js";import{C as l}from"./CameraSpace.glsl.js";import{g as s}from"./interfaces3.js";var r;function a(t=!e("disable-feature:high-quality-idle"),l=null){const s=new i;return t?(s.set(o.IDLE,r.Antialiasing,"low"!==l),s.set(o.IDLE,r.HighResolutionAtmosphere,"low"!==l),s.set(o.IDLE,r.HighQualityTransparency,!0),s.set(o.IDLE,r.SSAO,!0),s.set(o.IDLE,r.WaterReflection,!0),s.set(o.IDLE,r.PhysicalPixelRendering,!0)):(s.set(o.ANIMATING,r.HighResolutionShadows,!0),s.set(o.ANIMATING,r.HighResolutionViewshed,!0),s.set(o.INTERACTING,r.HighResolutionShadows,!0),s.set(o.INTERACTING,r.HighResolutionViewshed,!0)),s.set(o.IDLE,r.HighResolutionShadows,!0),s.set(o.IDLE,r.HighResolutionViewshed,!0),s.set(o.IDLE,r.HighResolutionVoxel,!0),s}function n(e){const i=e.fragment;e.include(l),i.include(t),i.code.add(s`vec3 normalFromDepth(sampler2D depthMap, vec3 pixelPos, vec2 fragCoord, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthMap, 0)));
float leftPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(-1, 0), 0).r);
float rightPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(1, 0), 0).r);
float bottomPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(0, -1), 0).r);
float topPixelDepth = linearizeDepth(texelFetch(depthMap, iuv + ivec2(0, 1), 0).r);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`)}!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.HighResolutionViewshed=7]="HighResolutionViewshed",e[e.PhysicalPixelRendering=8]="PhysicalPixelRendering"}(r||(r={}));export{n as N,r as R,a as s};
