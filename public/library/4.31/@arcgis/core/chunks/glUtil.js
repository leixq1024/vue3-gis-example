/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{D as r}from"./enums.js";import{V as t}from"./VertexElementDescriptor.js";function e(r,e=0){const n=r.stride;return Array.from(r.fields.keys()).map((s=>{const i=r.fields.get(s),u=i.constructor.ElementCount,f=function(r){const t=o[r];if(t)return t;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new t(s,u,f,c,n,m,e)}))}const o={u8:r.UNSIGNED_BYTE,u16:r.UNSIGNED_SHORT,u32:r.UNSIGNED_INT,i8:r.BYTE,i16:r.SHORT,i32:r.INT,f32:r.FLOAT};export{e as g};
