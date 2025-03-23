/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{B as e}from"./BufferView.js";import{c as t,S as s,h as i,i as r}from"./Matrix4PassUniform.js";import{C as a}from"./basicInterfaces.js";import{G as o}from"./GLTextureMaterial.js";import{b as n}from"./Material.js";import{S as l,d as c,t as p,j as u,D as h,o as d,h as f,C as m,k as v,l as T,E as g,M as P,p as I,q as _,r as D,s as E,u as b,v as x,H as y,I as S,J as j,K as w,i as A,L as O}from"./StencilUtils.js";import{a as C}from"./Util.js";import{V as R}from"./VertexAttribute.js";import{D as V,w as M,a as N}from"./RayIntersections.js";import{P as L}from"./DefaultLayouts.js";import{T as F}from"./TriangleMaterial.js";import{g as U}from"./interfaces3.js";import{T as B}from"./VertexColor.glsl.js";import{m as W,b as q,c as z,d as H}from"./renderState.js";import{_ as $}from"./tslib.es6.js";import{p as G}from"./ShaderTechniqueConfiguration.js";const k=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const i=new l,{vertex:r,fragment:a}=i;return c(r,e),i.include(B,e),i.include(p,e),i.include(u,e),i.include(h,e),i.include(d,e),i.attributes.add(R.POSITION,"vec3"),i.attributes.add(R.UV0,"vec2"),e.perspectiveInterpolation&&i.attributes.add(R.PERSPECTIVEDIVIDE,"float"),i.varyings.add("vpos","vec3"),e.terrainDepthTest&&i.varyings.add("depth","float"),r.main.add(U`
    vpos = position;
    ${e.terrainDepthTest?"depth = (view * vec4(vpos, 1.0)).z;":""}
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${e.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}`),a.uniforms.add(new f("tex",(e=>e.texture)),new t("opacity",(e=>e.opacity))),i.varyings.add("vTexCoord","vec2"),a.include(m),a.main.add(U`
    discardBySlice(vpos);
    ${e.terrainDepthTest?"terrainDepthTest(depth);":""}
    ${e.output===s.ObjectAndLayerIdColor?"fragColor = vec4(0, 0, 0, 1);\n           return;":""}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`),i}},Symbol.toStringTag,{value:"Module"}));class J extends v{constructor(e,t,s){super(e,t,new T(k,(()=>Promise.resolve().then((()=>k)))),s,K)}_getPipelineState(e,t){const{oitPass:i,output:r,hasOccludees:a,enableOffset:o,cullFace:n}=e,l=i===g.NONE,c=i===g.FrontFace;return W({blending:r===s.Color?l?q:P(i):null,culling:z(n),depthTest:{func:I(i)},depthWrite:_(e),drawBuffers:D(i,r),colorWrite:H,stencilWrite:a?E:null,stencilTest:a?t?b:x:null,polygonOffset:l||c?null:y(o)})}initializePipeline(e){return this._occludeePipeline=this._getPipelineState(e,!0),this._getPipelineState(e,!1)}getPipeline(e){return e?this._occludeePipeline:super.getPipeline()}}const K=new Map([[R.POSITION,0],[R.UV0,2],[R.PERSPECTIVEDIVIDE,3]]);class Q extends S{constructor(){super(...arguments),this.cullFace=a.None,this.hasSlicePlane=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.perspectiveInterpolation=!0,this.textureCoordinateType=j.None,this.emissionSource=w.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}$([G({count:a.COUNT})],Q.prototype,"cullFace",void 0),$([G()],Q.prototype,"hasSlicePlane",void 0),$([G()],Q.prototype,"enableOffset",void 0),$([G()],Q.prototype,"writeDepth",void 0),$([G()],Q.prototype,"hasOccludees",void 0),$([G()],Q.prototype,"terrainDepthTest",void 0),$([G()],Q.prototype,"cullAboveTerrain",void 0),$([G()],Q.prototype,"perspectiveInterpolation",void 0);class X extends F{constructor(e){super(e,ee),this._configuration=new Q,this.vertexAttributeLocations=K,this.supportsEdges=!0,this.produces=new Map([[A.OPAQUE_MATERIAL,e=>i(e)],[A.TRANSPARENT_MATERIAL,e=>r(e)&&this.parameters.writeDepth],[A.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>r(e)&&!this.parameters.writeDepth],[A.DRAPED_MATERIAL,e=>r(e)||i(e)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<O,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}get visible(){return!0}createGLMaterial(e){return new Y(e)}createBufferWriter(){const e=L.clone();return this.parameters.perspectiveInterpolation&&e.f32(R.PERSPECTIVEDIVIDE),new Z(e)}}class Y extends o{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(J,e)}}class Z extends V{write(t,s,i,r,a,o){for(const r of this.vertexBufferLayout.fields.keys()){const n=i.get(r);if(n)if(r===R.PERSPECTIVEDIVIDE){C(1===n.size);const t=a.getField(r,e);t&&M(n,t,o)}else N(r,n,t,s,a,o)}}}class ee extends n{constructor(){super(...arguments),this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=a.None,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{X as I};
