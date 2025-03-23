/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{r as t}from"./WGLContainer.js";import{g as r}from"./programUtils.js";const e=t=>{let r="";r+=t[0].toUpperCase();for(let e=1;e<t.length;e++){const s=t[e];s===s.toUpperCase()?(r+="_",r+=s):r+=s.toUpperCase()}return r},s=(s,a,o,n)=>{const p=s+s.slice(Math.max(0,s.lastIndexOf("/"))),c=a+a.slice(Math.max(0,a.lastIndexOf("/"))),f=(t=>{const s={};for(const r in t)s[e(r)]=t[r];return r(s)})(n);return{attributes:o,shaders:{vertexShader:f+t(`${p}.vert`),fragmentShader:f+t(`${c}.frag`)}}};export{s as c};
