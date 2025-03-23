/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{e as t}from"./vec3.js";import{S as s}from"./RightAngleSnappingHint.js";class n extends s{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&t(this.point,s.point)}}export{n as P};
