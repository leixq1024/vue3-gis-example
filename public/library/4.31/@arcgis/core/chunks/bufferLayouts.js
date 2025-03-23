/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{g as e}from"./glUtil.js";import{n as N}from"./InterleavedLayout.js";import{V as O}from"./VertexAttribute.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./BufferView.js";import"./vec2.js";import"./common.js";import"./vec3.js";import"./vec3f64.js";import"./vec4.js";import"./types.js";import"./Util.js";import"./vec2f64.js";import"./vec4f64.js";const E=N().vec3f(O.POSITION).u16(O.COMPONENTINDEX).freeze(),r=N().vec2u8(O.SIDENESS).freeze(),I=e(r),S=N().vec3f(O.POSITION0).vec3f(O.POSITION1).vec2i16(O.NORMALCOMPRESSED).u16(O.COMPONENTINDEX).u8(O.VARIANTOFFSET,{glNormalized:!0}).u8(O.VARIANTSTROKE).u8(O.VARIANTEXTENSION,{glNormalized:!0}).freeze(),t=N().vec3f(O.POSITION0).vec3f(O.POSITION1).vec2i16(O.NORMALCOMPRESSED).vec2i16(O.NORMAL2COMPRESSED).u16(O.COMPONENTINDEX).u8(O.VARIANTOFFSET,{glNormalized:!0}).u8(O.VARIANTSTROKE).u8(O.VARIANTEXTENSION,{glNormalized:!0}).freeze(),T=new Map([[O.POSITION0,0],[O.POSITION1,1],[O.COMPONENTINDEX,2],[O.VARIANTOFFSET,3],[O.VARIANTSTROKE,4],[O.VARIANTEXTENSION,5],[O.NORMALCOMPRESSED,6],[O.NORMAL2COMPRESSED,7],[O.SIDENESS,8]]);export{E as EdgeInputBufferLayout,S as RegularEdgeInstancesLayout,t as SilhouetteEdgeInstancesLayout,r as VertexLayout,I as glVertexLayout,T as vertexAttributeLocations};
