/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{e,f as t,i as o,n as a,a as i,h as r,s as n,d as s,x as l}from"./vec3.js";import{Z as c,g as d,c as u,f as m}from"./vec3f64.js";import{V as h}from"./ViewingMode.js";import{n as p}from"./InterleavedLayout.js";import{a as v,M as f,b as g,S as x,U as b,c as T,T as w,F as M,l as S,m as C,n as y,p as O,o as E}from"./Matrix4PassUniform.js";import{a as z,N as j}from"./NormalAttribute.glsl.js";import{e as _,P as I,d as L,a9 as N,B as A,h as G,j as P,O as D,D as F,J as R,W as B,b as V,S as H,R as U,k as W,l as q,F as Y,X as J,C as Z,c as X,t as k,o as $,E as K,m as Q,p as ee,q as te,r as oe,s as ae,u as ie,v as re,H as ne,K as se,I as le,i as ce,L as de}from"./StencilUtils.js";import{n as ue}from"./compilerUtils.js";import{g as me,I as he,N as pe}from"./interfaces3.js";import{a as ve,F as fe,C as ge,d as xe,b as be,P as Te,c as we,e as Me,f as Se,g as Ce,h as ye,i as Oe,V as Ee,j as ze}from"./SceneLighting.js";import{a as je}from"./AlphaCutoff.js";import{A as _e,R as Ie,C as Le,D as Ne}from"./basicInterfaces.js";import{G as Ae}from"./GLTextureMaterial.js";import{e as Ge,R as Pe,M as De,v as Fe}from"./Material.js";import{i as Re,D as Be}from"./RayIntersections.js";import{V as Ve}from"./VertexAttribute.js";import{g as He}from"./verticalOffsetUtils.js";import{c as Ue,f as We}from"./vec4f64.js";import{T as qe,a as Ye,F as Je,V as Ze}from"./VertexColor.glsl.js";import{b as Xe}from"./mat3.js";import{c as ke,I as $e}from"./mat3f64.js";import{I as Ke}from"./mat4f64.js";import{D as Qe}from"./Matrix3DrawUniform.js";import{a as et,b as tt}from"./doublePrecisionUtils.js";import{P as ot}from"./VertexPosition.glsl.js";import{D as at,C as it}from"./DecodeSymbolColor.glsl.js";import{V as rt}from"./VerticalOffset.glsl.js";import{R as nt,M as st}from"./Matrix4sPassUniform.js";import{B as lt}from"./BindType.js";import{O as ct,c as dt}from"./vec2f64.js";import{_ as ut}from"./tslib.es6.js";import{c as mt}from"./mathUtils.js";import{f as ht}from"./maybe.js";import{watch as pt}from"../core/reactiveUtils.js";import{M as vt}from"../core/scheduling.js";import{property as ft}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as gt}from"../core/accessorSupport/decorators/subclass.js";import{g as xt}from"./vec2.js";import{InternalRenderCategory as bt}from"../views/3d/webgl.js";import Tt from"../views/3d/webgl/RenderNode.js";import{S as wt,B as Mt}from"./ScreenSpacePass.glsl.js";import{m as St,d as Ct,c as yt}from"./renderState.js";import{C as Ot}from"./CameraSpace.glsl.js";import{T as Et,d as zt,i as jt,j as _t,l as It,f as Lt}from"./enums.js";import{a as Nt,T as At}from"./Texture.js";import{s as Gt}from"./vec4.js";import{p as Pt}from"./ShaderTechniqueConfiguration.js";function Dt({normalTexture:t,metallicRoughnessTexture:o,metallicFactor:a,roughnessFactor:i,emissiveTexture:r,emissiveFactor:n,occlusionTexture:s}){return null==t&&null==o&&null==r&&(null==n||e(n,c))&&null==s&&(null==i||1===i)&&(null==a||1===a)}function Ft({normalTexture:t,metallicRoughnessTexture:o,metallicFactor:a,roughnessFactor:i,emissiveTexture:r,emissiveFactor:n,occlusionTexture:s}){return null==t&&null==o&&null==r&&(null==n||e(n,c))&&null==s&&(null==i||1===i)&&(null==a||1===a||0===a)}const Rt=d(1,1,.5),Bt=d(0,.6,.2),Vt=d(0,1,.2);function Ht(e,t){const o=e.fragment;switch(o.code.add(me`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Ut.None:o.code.add(me`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Ut.View:o.code.add(me`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Ut.WindingOrder:o.code.add(me`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ue(t.doubleSidedMode);case Ut.COUNT:}}var Ut;function Wt(e){e.vertex.code.add(me`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Ut||(Ut={}));const qt=ke();function Yt(e,o){const a=o.hasModelTransformation,i=o.instancedDoublePrecision;a&&(e.vertex.uniforms.add(new v("model",(e=>e.modelTransformation??Ke))),e.vertex.uniforms.add(new f("normalLocalOriginFromModel",(e=>(Xe(qt,e.modelTransformation??Ke),qt))))),o.instanced&&i&&(e.attributes.add(Ve.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(Ve.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(Ve.INSTANCEMODEL,"mat3"),e.attributes.add(Ve.INSTANCEMODELNORMAL,"mat3"));const r=e.vertex;i&&(r.include(Qe,o),r.uniforms.add(new g("viewOriginHi",((e,o)=>et(t(Jt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Jt))),new g("viewOriginLo",((e,o)=>tt(t(Jt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Jt))))),r.code.add(me`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?me`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(me`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),o.output===x.Normal&&(_(r),r.code.add(me`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),o.hasVertexTangents&&r.code.add(me`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Jt=u();function Zt(e,t){t.hasSymbolColors?(e.include(at),e.attributes.add(Ve.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(me`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new I("colorMixMode",(e=>Ge[e.colorMixMode]))),e.vertex.code.add(me`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Xt(e,t){switch(t.output){case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:case x.ViewshedShadow:e.fragment.include(nt),e.fragment.code.add(me`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}class kt extends b{constructor(e,t){super(e,"float",lt.Draw,((o,a,i)=>o.setUniform1f(e,t(a,i))))}}function $t(e,t){Qt(e,t,new T("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Kt(e,t){Qt(e,t,new kt("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Qt(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode){case _e.Blend:e.fragment.code.add(me`
        #define discardOrAdjustAlpha(color) { if (color.a < ${me.float(je)}) { discard; } }
      `);break;case _e.Opaque:a.code.add(me`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case _e.Mask:a.uniforms.add(o).code.add(me`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case _e.MaskBlend:a.uniforms.add(o).code.add(me`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function eo(e,t){const{vertex:o,fragment:a}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==_e.Opaque,{output:r,normalType:n,hasColorTextureTransform:s}=t;switch(r){case x.Depth:L(o,t),e.include(qe,t),e.include(P,t),e.include(N,t),i&&a.uniforms.add(new G("tex",(e=>e.texture))),o.main.add(me`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include($t,t),a.main.add(me`
          discardBySlice(vpos);
          ${he(i,me`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:case x.ViewshedShadow:case x.ObjectAndLayerIdColor:L(o,t),e.include(qe,t),e.include(N,t),e.include(A,t),e.include(Xt,t),e.include(P,t),e.include(F,t),Ye(e),e.varyings.add("depth","float"),i&&a.uniforms.add(new G("tex",(e=>e.texture))),o.main.add(me`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include($t,t),a.main.add(me`
          discardBySlice(vpos);
          ${he(i,me`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${r===x.ObjectAndLayerIdColor?me`outputObjectAndLayerIdColor();`:me`outputDepth(depth);`}`);break;case x.Normal:{L(o,t),e.include(qe,t),e.include(z,t),e.include(ve,t),e.include(N,t),e.include(A,t),i&&a.uniforms.add(new G("tex",(e=>e.texture))),n===j.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=n===j.Attribute||n===j.Compressed;o.main.add(me`
          vpos = getVertexInLocalOriginSpace();
          ${r?me`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:me`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(P,t),e.include($t,t),a.main.add(me`
          discardBySlice(vpos);
          ${he(i,me`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${n===j.ScreenDerivative?me`vec3 normal = screenDerivativeNormal(vPositionView);`:me`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case x.Highlight:L(o,t),e.include(qe,t),e.include(N,t),e.include(A,t),i&&a.uniforms.add(new G("tex",(e=>e.texture))),o.main.add(me`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(P,t),e.include($t,t),e.include(D,t),a.main.add(me`
          discardBySlice(vpos);
          ${he(i,me`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function to(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(Ve.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Ut.WindingOrder?o.code.add(me`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(me`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(me`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==R.None&&(e.include(B,t),o.uniforms.add(t.bindType===lt.Pass?new G("normalTexture",(e=>e.textureNormal)):new w("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new V("scale",(e=>e.scale??ct))),o.uniforms.add(new f("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??$e)))),o.code.add(me`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(me`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(me`return tangentSpace * rawNormal;
}`))}const oo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new H,t=e.fragment;return e.include(wt),t.include(U),t.uniforms.add(new G("depthMap",(e=>e.depthTexture)),new w("tex",(e=>e.colorTexture)),new fe("blurSize",(e=>e.blurSize)),new T("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(me`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${me.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(me`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${me.int(4)}; r <= ${me.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}},Symbol.toStringTag,{value:"Module"}));class ao extends W{constructor(e,t,o){super(e,t,new q(oo,(()=>Promise.resolve().then((()=>oo)))),o)}initializePipeline(){return St({colorWrite:Ct})}}class io extends pe{constructor(){super(...arguments),this.projScale=1}}class ro extends io{constructor(){super(...arguments),this.intensity=1}}class no extends pe{}class so extends no{constructor(){super(...arguments),this.blurSize=dt()}}function lo(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const co=dt(),uo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new H,t=e.fragment;return e.include(wt),e.include(Ot),t.include(U),t.uniforms.add(new T("radius",((e,t)=>lo(t.camera)))).code.add(me`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(me`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new G("normalMap",(e=>e.normalTexture)),new G("depthMap",(e=>e.depthTexture)),new T("projScale",(e=>e.projScale)),new G("rnm",(e=>e.noiseTexture)),new V("rnmScale",((e,t)=>xt(co,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new T("intensity",(e=>e.intensity)),new V("screenSize",((e,t)=>xt(co,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(me`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${me.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${me.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e},getRadius:lo},Symbol.toStringTag,{value:"Module"}));class mo extends W{constructor(e,t,o){super(e,t,new q(uo,(()=>Promise.resolve().then((()=>uo)))),o)}initializePipeline(){return St({colorWrite:Ct})}}let ho=class extends Tt{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=bt.SSAO,this.isEnabled=()=>!1,this._enableTime=vt(0),this._passParameters=new ro,this._drawParameters=new so}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new Nt;t.wrapMode=Et.CLAMP_TO_EDGE,t.pixelFormat=zt.RGB,t.wrapMode=Et.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new At(this.renderingContext,t,e),this.techniques.precompile(mo),this.techniques.precompile(ao),this.addHandles(pt((()=>this.isEnabled()),(()=>this._enableTime=vt(0))))}destroy(){this._passParameters.noiseTexture=ht(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find((({name:e})=>"normals"===e)),a=o?.getTexture(),i=o?.getTexture(jt),r=this.fboCache,n=t.camera,s=n.fullViewport[2],l=n.fullViewport[3],c=Math.round(s/2),d=Math.round(l/2),u=this.techniques.acquire(mo),m=this.techniques.acquire(ao);if(!u.compiled||!m.compiled)return this._enableTime=vt(performance.now()),this.requestRender(Ie.UPDATE),u.release(),m.release(),r.acquire(c,d,bt.SSAO,ge.RED);0===this._enableTime&&(this._enableTime=vt(performance.now()));const h=this.renderingContext,p=this.view.qualitySettings.fadeDuration,v=n.relativeElevation,f=mt((xe-v)/(xe-be),0,1),g=p>0?Math.min(p,performance.now()-this._enableTime)/p:1,x=g*f;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*po/lo(n)**6*x;const b=r.acquire(s,l,"ssao input",ge.RG);h.bindFramebuffer(b.fbo),h.setViewport(0,0,s,l),h.bindTechnique(u,t,this._passParameters,this._drawParameters),h.screen.draw(),u.release();const T=r.acquire(c,d,"ssao blur",ge.RED);h.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=b.getTexture(),xt(this._drawParameters.blurSize,0,2/l),h.bindTechnique(m,t,this._passParameters,this._drawParameters),h.setViewport(0,0,c,d),h.screen.draw(),b.release();const w=r.acquire(c,d,bt.SSAO,ge.RED);return h.bindFramebuffer(w.fbo),h.setViewport(0,0,s,l),h.setClearColor(1,1,1,0),h.clear(_t.COLOR),this._drawParameters.colorTexture=T.getTexture(),xt(this._drawParameters.blurSize,2/s,0),h.bindTechnique(m,t,this._passParameters,this._drawParameters),h.setViewport(0,0,c,d),h.screen.draw(),m.release(),h.setViewport4fv(n.fullViewport),T.release(),g<1&&this.requestRender(Ie.UPDATE),w}};ut([ft()],ho.prototype,"consumes",void 0),ut([ft()],ho.prototype,"produces",void 0),ut([ft({constructOnly:!0})],ho.prototype,"techniques",void 0),ut([ft({constructOnly:!0})],ho.prototype,"isEnabled",void 0),ho=ut([gt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],ho);const po=.5;function vo(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new G("ssaoTex",((e,t)=>t.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",.5),o.code.add(me`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(me`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function fo(e,o){const a=e.fragment,i=void 0!==o.lightingSphericalHarmonicsOrder?o.lightingSphericalHarmonicsOrder:2;0===i?(a.uniforms.add(new M("lightingAmbientSH0",((e,o)=>t(go,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0])))),a.code.add(me`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(a.uniforms.add(new Y("lightingAmbientSH_R",((e,t)=>Gt(xo,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new Y("lightingAmbientSH_G",((e,t)=>Gt(xo,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new Y("lightingAmbientSH_B",((e,t)=>Gt(xo,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),a.code.add(me`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(a.uniforms.add(new M("lightingAmbientSH0",((e,o)=>t(go,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0]))),new Y("lightingAmbientSH_R1",((e,t)=>Gt(xo,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new Y("lightingAmbientSH_G1",((e,t)=>Gt(xo,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new Y("lightingAmbientSH_B1",((e,t)=>Gt(xo,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new Y("lightingAmbientSH_R2",((e,t)=>Gt(xo,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new Y("lightingAmbientSH_G2",((e,t)=>Gt(xo,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new Y("lightingAmbientSH_B2",((e,t)=>Gt(xo,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),a.code.add(me`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),o.pbrMode!==Te.Normal&&o.pbrMode!==Te.Schematic||a.code.add(me`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const go=u(),xo=Ue();function bo(e){e.constants.add("ambientBoostFactor","float",we)}function To(e){e.uniforms.add(new T("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function wo(e,t){const o=e.fragment;switch(e.include(vo,t),t.pbrMode!==Te.Disabled&&e.include(Me,t),e.include(fo,t),e.include(J),o.code.add(me`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Te.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),bo(o),To(o),Se(o),o.code.add(me`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?me`normalize(vPosWorld)`:me`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ce(o),o.code.add(me`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case Te.Disabled:case Te.WaterOnIntegratedMesh:case Te.Water:e.include(ye),o.code.add(me`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case Te.Normal:case Te.Schematic:o.code.add(me`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(me`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Mt("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(me`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new T("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new T("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(me`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(me`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==Te.Schematic||t.hasColorTexture?me`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:me`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case Te.Simplified:case Te.TerrainWithWater:Se(o),Ce(o),o.code.add(me`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:ue(t.pbrMode);case Te.COUNT:}}class Mo extends b{constructor(e,t,o){super(e,"mat4",lt.Draw,((o,a,i,r)=>o.setUniformMatrix4fv(e,t(a,i,r))),o)}}class So extends pe{constructor(){super(...arguments),this.modelTransformation=Ke}}class Co extends So{constructor(){super(...arguments),this.origin=u()}}function yo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new st("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Eo(e))}function Oo(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Mo("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),Eo(e))}function Eo(e){const t=e.fragment;t.include(nt),t.uniforms.add(new G("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new I("numCascades",((e,t)=>t.shadowMap.numCascades)),new Y("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(me`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function zo(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new f("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??$e))).code.add(me`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(me`void forwardColorUV(){}`)}function jo(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==R.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new f("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??$e))).code.add(me`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(me`void forwardNormalUV(){}`)}function _o(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==R.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new f("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??$e))).code.add(me`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(me`void forwardEmissiveUV(){}`)}function Io(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==R.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new f("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??$e))).code.add(me`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(me`void forwardOcclusionUV(){}`)}function Lo(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==R.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new f("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??$e))).code.add(me`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(me`void forwardMetallicRoughnessUV(){}`)}function No(e){e.include(Z),e.code.add(me`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${me.int(it.Multiply)}) {
        return allMixed;
      }
      if (mode == ${me.int(it.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${me.int(it.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${me.int(it.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${me.int(it.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const Ao=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new H,{vertex:o,fragment:a,varyings:i}=t,{output:r,normalType:n,offsetBackfaces:s,instancedColor:l,spherical:c,receiveShadows:d,snowCover:u,pbrMode:m,textureAlphaPremultiplied:h,instancedDoublePrecision:p,hasVertexColors:v,hasVertexTangents:f,hasColorTexture:g,hasNormalTexture:x,hasNormalTextureTransform:b,hasColorTextureTransform:w}=e;if(L(o,e),t.include(ot),i.add("vpos","vec3"),t.include(A,e),t.include(Yt,e),t.include(rt,e),t.include(zo,e),!S(r))return t.include(eo,e),t;t.include(jo,e),t.include(_o,e),t.include(Io,e),t.include(Lo,e),X(o,e),t.include(z,e),t.include(qe,e);const C=n===j.Attribute||n===j.Compressed;return C&&s&&t.include(Wt),t.include(to,e),t.include(ve,e),l&&t.attributes.add(Ve.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(N,e),t.include(Je,e),t.include(Zt,e),t.include(Ze,e),o.uniforms.add(new Y("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),e.terrainDepthTest&&i.add("depth","float"),o.main.add(me`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${he(l,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${me.float(je)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${he(C,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${he(f,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${he(C&&s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${he(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(wo,e),t.include(vo,e),t.include($t,e),t.include(p?yo:Oo,e),t.include(k,e),t.include(P,e),t.include($,e),X(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new M("ambient",(e=>e.ambient)),new M("diffuse",(e=>e.diffuse)),new T("opacity",(e=>e.opacity)),new T("layerOpacity",(e=>e.layerOpacity))),g&&a.uniforms.add(new G("tex",(e=>e.texture))),t.include(Oe,e),t.include(Me,e),a.include(No),t.include(Ht,e),bo(a),To(a),Ce(a),a.main.add(me`
      discardBySlice(vpos);
      ${he(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${g?me`
              vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
              ${he(h,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:me`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${n===j.ScreenDerivative?me`vec3 normal = screenDerivativeNormal(vPositionLocal);`:me`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${d?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":he(c,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${he(v,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${he(v,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${x?`mat3 tangentSpace = computeTangentSpace(${f?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${b?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${c?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${he(u,me`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${m===Te.Normal||m===Te.Schematic?me`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${he(u,me`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${u?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:me`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}},Symbol.toStringTag,{value:"Module"}));class Go extends ze{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Rt,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Le.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=c,this.instancedDoublePrecision=!1,this.normalType=j.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=d(.2,.2,.2),this.diffuse=d(.8,.8,.8),this.externalColor=We(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=u(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ne.Less,this.textureAlphaMode=_e.Blend,this.textureAlphaCutoff=je,this.textureAlphaPremultiplied=!1,this.renderOccluded=Pe.Occlude,this.isDecoration=!1}}class Po extends Ee{constructor(){super(...arguments),this.origin=u(),this.slicePlaneLocalOrigin=this.origin}}class Do extends W{constructor(e,t,o,a=new q(Ao,(()=>Promise.resolve().then((()=>Ao))))){super(e,t,a,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:i,cullFace:r,customDepthTest:n,hasOccludees:s,enableOffset:l}=e,c=o===K.NONE,d=o===K.FrontFace;return St({blending:S(a)&&i?Q(o):null,culling:(u=e,u.cullFace===Le.None&&(u.hasSlicePlane||u.transparent||u.doubleSidedMode)?null:yt(r)),depthTest:{func:ee(o,(m=n,m===Ne.Lequal?Lt.LEQUAL:Lt.LESS))},depthWrite:te(e),drawBuffers:a===x.Depth?{buffers:[It.NONE]}:oe(o,a),colorWrite:Ct,stencilWrite:s?ae:null,stencilTest:s?t?ie:re:null,polygonOffset:c||d?null:ne(l)});var u,m}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}class Fo extends le{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=_e.Opaque,this.doubleSidedMode=Ut.None,this.pbrMode=Te.Disabled,this.cullFace=Le.None,this.normalType=j.Attribute,this.customDepthTest=Ne.Less,this.emissionSource=se.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===se.Texture||this.hasOcclusionTexture||this.hasNormalTexture?R.Default:R.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}ut([Pt({count:_e.COUNT})],Fo.prototype,"alphaDiscardMode",void 0),ut([Pt({count:Ut.COUNT})],Fo.prototype,"doubleSidedMode",void 0),ut([Pt({count:Te.COUNT})],Fo.prototype,"pbrMode",void 0),ut([Pt({count:Le.COUNT})],Fo.prototype,"cullFace",void 0),ut([Pt({count:j.COUNT})],Fo.prototype,"normalType",void 0),ut([Pt({count:Ne.COUNT})],Fo.prototype,"customDepthTest",void 0),ut([Pt({count:se.COUNT})],Fo.prototype,"emissionSource",void 0),ut([Pt()],Fo.prototype,"hasVertexColors",void 0),ut([Pt()],Fo.prototype,"hasSymbolColors",void 0),ut([Pt()],Fo.prototype,"hasVerticalOffset",void 0),ut([Pt()],Fo.prototype,"hasSlicePlane",void 0),ut([Pt()],Fo.prototype,"hasSliceHighlight",void 0),ut([Pt()],Fo.prototype,"hasColorTexture",void 0),ut([Pt()],Fo.prototype,"hasMetallicRoughnessTexture",void 0),ut([Pt()],Fo.prototype,"hasOcclusionTexture",void 0),ut([Pt()],Fo.prototype,"hasNormalTexture",void 0),ut([Pt()],Fo.prototype,"hasScreenSizePerspective",void 0),ut([Pt()],Fo.prototype,"hasVertexTangents",void 0),ut([Pt()],Fo.prototype,"hasOccludees",void 0),ut([Pt()],Fo.prototype,"hasModelTransformation",void 0),ut([Pt()],Fo.prototype,"offsetBackfaces",void 0),ut([Pt()],Fo.prototype,"vvSize",void 0),ut([Pt()],Fo.prototype,"vvColor",void 0),ut([Pt()],Fo.prototype,"receiveShadows",void 0),ut([Pt()],Fo.prototype,"receiveAmbientOcclusion",void 0),ut([Pt()],Fo.prototype,"textureAlphaPremultiplied",void 0),ut([Pt()],Fo.prototype,"instanced",void 0),ut([Pt()],Fo.prototype,"instancedColor",void 0),ut([Pt()],Fo.prototype,"writeDepth",void 0),ut([Pt()],Fo.prototype,"transparent",void 0),ut([Pt()],Fo.prototype,"enableOffset",void 0),ut([Pt()],Fo.prototype,"terrainDepthTest",void 0),ut([Pt()],Fo.prototype,"cullAboveTerrain",void 0),ut([Pt()],Fo.prototype,"snowCover",void 0),ut([Pt()],Fo.prototype,"hasColorTextureTransform",void 0),ut([Pt()],Fo.prototype,"hasEmissionTextureTransform",void 0),ut([Pt()],Fo.prototype,"hasNormalTextureTransform",void 0),ut([Pt()],Fo.prototype,"hasOcclusionTextureTransform",void 0),ut([Pt()],Fo.prototype,"hasMetallicRoughnessTextureTransform",void 0);const Ro=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new H,{vertex:o,fragment:a,varyings:i}=t,{output:r,offsetBackfaces:n,instancedColor:s,pbrMode:l,snowCover:c,spherical:d}=e,u=l===Te.Normal||l===Te.Schematic;if(L(o,e),t.include(ot),i.add("vpos","vec3"),t.include(A,e),t.include(Yt,e),t.include(rt,e),r===x.Color&&(X(t.vertex,e),t.include(z,e),t.include(qe,e),n&&t.include(Wt),s&&t.attributes.add(Ve.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),e.terrainDepthTest&&i.add("depth","float"),t.include(N,e),t.include(Je,e),t.include(Zt,e),t.include(Ze,e),o.uniforms.add(new Y("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),o.main.add(me`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${he(s,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${me.float(je)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${he(n,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${he(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),r===x.Color){const{hasColorTexture:i,hasColorTextureTransform:r,receiveShadows:n}=e;t.include(wo,e),t.include(vo,e),t.include($t,e),t.include(e.instancedDoublePrecision?yo:Oo,e),t.include(k,e),t.include(P,e),t.include($,e),X(t.fragment,e),Se(a),bo(a),To(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new M("ambient",(e=>e.ambient)),new M("diffuse",(e=>e.diffuse)),new T("opacity",(e=>e.opacity)),new T("layerOpacity",(e=>e.layerOpacity))),i&&a.uniforms.add(new G("tex",(e=>e.texture))),t.include(Oe,e),t.include(Me,e),a.include(No),Ce(a),a.main.add(me`
      discardBySlice(vpos);
      ${he(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${i?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${he(i,`${he(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${n?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":d?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?me`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:me`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${he(c,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${me`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${he(u,`vec3 normalGround = ${d?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${u?me`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${he(c,me`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${c?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:me`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(eo,e),t}},Symbol.toStringTag,{value:"Module"}));class Bo extends Do{constructor(e,t,o){super(e,t,o,new q(Ro,(()=>Promise.resolve().then((()=>Ro))))),this.type="RealisticTreeTechnique"}}class Vo extends De{constructor(e,t){super(e,Uo),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[ce.OPAQUE_MATERIAL,e=>(C(e)||y(e))&&!this.parameters.transparent],[ce.TRANSPARENT_MATERIAL,e=>(C(e)||y(e))&&this.parameters.transparent&&this.parameters.writeDepth],[ce.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(O(e)||y(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=p().vec3f(Ve.POSITION);return e.normalType===j.Compressed?t.vec2i16(Ve.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Ve.NORMAL),e.hasVertexTangents&&t.vec4f(Ve.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Ve.UV0),e.hasVertexColors&&t.vec4u8(Ve.COLOR),e.hasSymbolColors&&t.vec4u8(Ve.SYMBOLCOLOR),E()&&t.vec4u8(Ve.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new Fo(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==x.Shadow&&e!==x.ShadowExcludeHighlight&&e!==x.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<je)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:a,vvColor:i}=e,r=t||i||a,n="replace"===e.colorMixMode,s=e.opacity>=je;if(o&&r)return n||s;const l=e.externalColor&&e.externalColor[3]>=je;return o?n?l:s:r?n||s:n?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!e(this.parameters.emissiveFactor,c)}getConfiguration(e,t){const o=this.parameters,{treeRendering:a,doubleSided:i,doubleSidedType:r}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!a&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!a&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=null!=o.verticalOffset,this._configuration.hasScreenSizePerspective=null!=o.screenSizePerspective,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.hasSliceHighlight=o.hasSliceHighlight,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=a?j.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,null!=o.customDepthTest&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?Le.None:o.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!a&&null!=o.modelTransformation,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=a?Ut.WindingOrder:i&&"normal"===r?Ut.View:i&&"winding-order"===r?Ut.WindingOrder:Ut.None,this._configuration.instancedColor=o.hasInstancedColor,this._configuration.receiveShadows=o.receiveShadows&&o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?Te.Schematic:Te.Normal:Te.Disabled,this._configuration.hasMetallicRoughnessTexture=!a&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=a?se.None:null!=o.emissiveTextureId?se.Texture:o.usePBR?se.Value:se.None,this._configuration.hasOcclusionTexture=!a&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<de,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,c,d,u,m,p){if(null!=this.parameters.verticalOffset){const e=d.camera;t(Xo,c[12],c[13],c[14]);let p=null;switch(d.viewingMode){case h.Global:p=a(Jo,Xo);break;case h.Local:p=o(Jo,Yo)}let v=0;const f=i(ko,Xo,e.eye),g=r(f),x=n(f,f,1/g);let b=null;this.parameters.screenSizePerspective&&(b=s(p,x)),v+=Fe(e,g,this.parameters.verticalOffset,b??0,this.parameters.screenSizePerspective),n(p,p,v),l(Zo,p,d.transform.inverseRotation),u=i(Wo,u,Zo),m=i(qo,m,Zo)}Re(e,d,u,m,He(d.verticalOffset),p)}createGLMaterial(e){return new Ho(e)}createBufferWriter(){return new Be(this._vertexBufferLayout)}}class Ho extends Ae{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const a=e.camera.viewInverseTransposeMatrix;return t(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(o.treeRendering?Bo:Do,e)}}class Uo extends Go{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Wo=u(),qo=u(),Yo=m(0,0,1),Jo=u(),Zo=u(),Xo=u(),ko=u();export{to as C,Vo as D,wo as E,kt as F,No as M,Ht as N,Xt as O,Oo as R,ho as S,Rt as a,Po as b,Ft as c,vo as d,Vt as e,bo as f,To as g,Ut as h,fo as i,Co as j,Kt as k,yo as l,Bt as s,Dt as u};
