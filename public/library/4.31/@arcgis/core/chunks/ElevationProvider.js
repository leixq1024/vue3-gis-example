/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as e}from"./dehydratedFeatureUtils.js";class r{constructor(e,r=null,a=0){this.array=e,this.spatialReference=r,this.offset=a}}function a(e){return"array"in e}function t(r,t,i="ground"){if(e(t))return r.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(a(t)){let e=t.offset;return r.getElevation(t.array[e++],t.array[e++],t.array[e]||0,t.spatialReference??r.spatialReference,i)}return r.getElevation(t[0],t[1],t[2]||0,r.spatialReference,i)}export{r as S,t as g,a as i};
