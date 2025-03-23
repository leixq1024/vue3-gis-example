/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{U as s}from"./Matrix4PassUniform.js";import{B as t}from"./BindType.js";import{g as o}from"./interfaces3.js";import{V as r}from"./VertexAttribute.js";class i extends s{constructor(s,o){super(s,"bool",t.Pass,((t,r,i)=>t.setUniform1b(s,o(r,i))))}}function e(s,t=!0){s.attributes.add(r.POSITION,"vec2"),t&&s.varyings.add("uv","vec2"),s.vertex.main.add(o`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o`uv = position * 0.5 + vec2(0.5);`:""}
  `)}export{i as B,e as S};
