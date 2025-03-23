/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as r}from"./mat3f64.js";import{c as o}from"./mat4f64.js";import{c as e}from"./vec3f64.js";import{g as a,N as t}from"./interfaces3.js";import{V as i}from"./VertexAttribute.js";import{D as s,M as m}from"./Matrix3DrawUniform.js";import{F as d,M as n,a as l,b as f}from"./Matrix4PassUniform.js";function v(r){r.attributes.add(i.POSITION,"vec3"),r.vertex.code.add(a`vec3 positionModel() { return position; }`)}function F(r,o){r.include(v);const e=r.vertex;e.include(s,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new d("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new d("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new n("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new l("transformProjFromView",(r=>r.transformProjFromView)),new m("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new f("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new f("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(a`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?a`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:a`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new d("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class W extends t{constructor(){super(...arguments),this.transformWorldFromViewTH=e(),this.transformWorldFromViewTL=e(),this.transformViewFromCameraRelativeRS=r(),this.transformProjFromView=o()}}class w extends t{constructor(){super(...arguments),this.transformWorldFromModelRS=r(),this.transformWorldFromModelTH=e(),this.transformWorldFromModelTL=e()}}export{v as P,F as V,w as a,W as b};
