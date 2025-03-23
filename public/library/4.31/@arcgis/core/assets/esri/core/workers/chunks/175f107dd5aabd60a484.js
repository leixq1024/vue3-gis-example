"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8334],{13661:(e,t,r)=>{r.d(t,{a:()=>i});const i=1/255.5},70045:(e,t,r)=>{var i;r.d(t,{B:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},197:(e,t,r)=>{r.d(t,{C:()=>l});var i=r(37322),o=r(46484),n=r(91276),a=r(62482),s=r(84311),c=r(66573);function l(e){e.fragment.uniforms.add(new s.F("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,n.s)(d,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(d,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.b("zScale",((e,t)=>0===t.camera.projectionMatrix[11]?(0,i.g)(u,0,1):(0,i.g)(u,1,0)))),e.fragment.code.add(c.g`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const d=(0,a.c)(),u=(0,o.c)()},62079:(e,t,r)=>{r.d(t,{C:()=>i,D:()=>a}),r(16699);var i,o,n=r(66573);function a(e){e.vertex.code.add(n.g`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.g.int(i.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.g.int(i.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.g.int(i.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.g.int(i.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}(o=i||(i={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},61596:(e,t,r)=>{r.d(t,{D:()=>Xe,a:()=>J,b:()=>We,e:()=>Q,s:()=>K,u:()=>Z});var i=r(26809),o=r(2589),n=r(8844),a=r(63949),s=r(63536),c=r(16055),l=r(84311),d=r(73502),u=r(66573),h=r(45564),m=r(13661),f=r(83902),g=r(53703),p=r(41683),v=r(31468),_=r(97538),T=r(64026),x=r(62482),b=r(28063),E=r(87889),S=r(88485),A=r(87162),M=r(26442),R=r(59902),C=r(86145),w=r(62079),I=r(70101),O=r(23287),N=r(70045),y=r(46484),P=r(32816),D=r(16699),L=r(57732),F=r(67321),B=r(45371),G=r(29298),U=(r(32773),r(20266),r(69421)),V=r(37322),z=r(23107),H=r(35778),W=r(8017),j=r(40397),k=r(197),$=r(52134),q=r(89167),X=r(91276),Y=r(81583);function Z({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:a,emissiveFactor:s,occlusionTexture:c}){return null==e&&null==t&&null==a&&(null==s||(0,i.e)(s,o.Z))&&null==c&&(null==n||1===n)&&(null==r||1===r)}const J=(0,o.g)(1,1,.5),K=(0,o.g)(0,.6,.2),Q=(0,o.g)(0,1,.2);function ee(e,t){const r=e.fragment;switch(r.code.add(u.g`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case te.None:r.code.add(u.g`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:r.code.add(u.g`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:r.code.add(u.g`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,d.n)(t.doubleSidedMode);case te.COUNT:}}var te,re;function ie(e){e.vertex.code.add(u.g`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}(re=te||(te={}))[re.None=0]="None",re[re.View=1]="View",re[re.WindingOrder=2]="WindingOrder",re[re.COUNT=3]="COUNT";const oe=(0,S.c)();function ne(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new s.a("model",(e=>e.modelTransformation??A.I))),e.vertex.uniforms.add(new s.M("normalLocalOriginFromModel",(e=>((0,E.b)(oe,e.modelTransformation??A.I),oe))))),t.instanced&&o&&(e.attributes.add(_.V.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(_.V.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(_.V.INSTANCEMODEL,"mat3"),e.attributes.add(_.V.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;o&&(n.include(M.D,t),n.uniforms.add(new s.b("viewOriginHi",((e,t)=>(0,R.a)((0,i.f)(ae,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),ae))),new s.b("viewOriginLo",((e,t)=>(0,R.b)((0,i.f)(ae,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),ae))))),n.code.add(u.g`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?u.g`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(u.g`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===s.S.Normal&&((0,l.e)(n),n.code.add(u.g`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(u.g`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ae=(0,o.c)();function se(e,t){t.hasSymbolColors?(e.include(w.D),e.attributes.add(_.V.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(u.g`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new l.P("colorMixMode",(e=>p.e[e.colorMixMode]))),e.vertex.code.add(u.g`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ce(e,t){switch(t.output){case s.S.Shadow:case s.S.ShadowHighlight:case s.S.ShadowExcludeHighlight:case s.S.ViewshedShadow:e.fragment.include(O.R),e.fragment.code.add(u.g`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function le(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode){case f.A.Blend:e.fragment.code.add(u.g`
        #define discardOrAdjustAlpha(color) { if (color.a < ${u.g.float(m.a)}) { discard; } }
      `);break;case f.A.Opaque:i.code.add(u.g`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case f.A.Mask:i.uniforms.add(r).code.add(u.g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case f.A.MaskBlend:i.uniforms.add(r).code.add(u.g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new s.c("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function de(e,t){const{vertex:r,fragment:i}=e,o=t.hasColorTexture&&t.alphaDiscardMode!==f.A.Opaque,{output:n,normalType:a,hasColorTextureTransform:d}=t;switch(n){case s.S.Depth:(0,l.d)(r,t),e.include(b.T,t),e.include(l.j,t),e.include(l.a9,t),o&&i.uniforms.add(new l.h("tex",(e=>e.texture))),r.main.add(u.g`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(le,t),i.main.add(u.g`
          discardBySlice(vpos);
          ${(0,u.I)(o,u.g`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case s.S.Shadow:case s.S.ShadowHighlight:case s.S.ShadowExcludeHighlight:case s.S.ViewshedShadow:case s.S.ObjectAndLayerIdColor:(0,l.d)(r,t),e.include(b.T,t),e.include(l.a9,t),e.include(l.B,t),e.include(ce,t),e.include(l.j,t),e.include(l.D,t),(0,b.a)(e),e.varyings.add("depth","float"),o&&i.uniforms.add(new l.h("tex",(e=>e.texture))),r.main.add(u.g`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(le,t),i.main.add(u.g`
          discardBySlice(vpos);
          ${(0,u.I)(o,u.g`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${n===s.S.ObjectAndLayerIdColor?u.g`outputObjectAndLayerIdColor();`:u.g`outputDepth(depth);`}`);break;case s.S.Normal:{(0,l.d)(r,t),e.include(b.T,t),e.include(c.a,t),e.include(h.a,t),e.include(l.a9,t),e.include(l.B,t),o&&i.uniforms.add(new l.h("tex",(e=>e.texture))),a===c.N.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const n=a===c.N.Attribute||a===c.N.Compressed;r.main.add(u.g`
          vpos = getVertexInLocalOriginSpace();
          ${n?u.g`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:u.g`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(l.j,t),e.include(le,t),i.main.add(u.g`
          discardBySlice(vpos);
          ${(0,u.I)(o,u.g`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${a===c.N.ScreenDerivative?u.g`vec3 normal = screenDerivativeNormal(vPositionView);`:u.g`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case s.S.Highlight:(0,l.d)(r,t),e.include(b.T,t),e.include(l.a9,t),e.include(l.B,t),o&&i.uniforms.add(new l.h("tex",(e=>e.texture))),r.main.add(u.g`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(l.j,t),e.include(le,t),e.include(l.O,t),i.main.add(u.g`
          discardBySlice(vpos);
          ${(0,u.I)(o,u.g`vec4 texColor = texture(tex, ${d?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function ue(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(_.V.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===te.WindingOrder?r.code.add(u.g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(u.g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(u.g`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==l.J.None&&(e.include(l.W,t),r.uniforms.add(t.bindType===N.B.Pass?new l.h("normalTexture",(e=>e.textureNormal)):new s.T("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.b("scale",(e=>e.scale??y.O))),r.uniforms.add(new s.M("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??S.I)))),r.code.add(u.g`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(u.g`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(u.g`return tangentSpace * rawNormal;
}`))}s.U;const he=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new l.S,t=e.fragment;return e.include(W.S),t.include(l.R),t.uniforms.add(new l.h("depthMap",(e=>e.depthTexture)),new s.T("tex",(e=>e.colorTexture)),new h.F("blurSize",(e=>e.blurSize)),new s.c("projScale",((e,t)=>{const r=t.camera.distance;return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale}))),t.code.add(u.g`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${u.g.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(u.g`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${u.g.int(4)}; r <= ${u.g.int(4)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}},Symbol.toStringTag,{value:"Module"}));class me extends l.k{constructor(e,t,r){super(e,t,new l.l(he,(()=>Promise.resolve().then((()=>he)))),r)}initializePipeline(){return(0,j.m)({colorWrite:j.d})}}class fe extends u.N{constructor(){super(...arguments),this.projScale=1}}class ge extends fe{constructor(){super(...arguments),this.intensity=1}}class pe extends u.N{}class ve extends pe{constructor(){super(...arguments),this.blurSize=(0,y.c)()}}function _e(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Te=(0,y.c)(),xe=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new l.S,t=e.fragment;return e.include(W.S),e.include(k.C),t.include(l.R),t.uniforms.add(new s.c("radius",((e,t)=>_e(t.camera)))).code.add(u.g`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(u.g`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.h("normalMap",(e=>e.normalTexture)),new l.h("depthMap",(e=>e.depthTexture)),new s.c("projScale",(e=>e.projScale)),new l.h("rnm",(e=>e.noiseTexture)),new l.b("rnmScale",((e,t)=>(0,V.g)(Te,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new s.c("intensity",(e=>e.intensity)),new l.b("screenSize",((e,t)=>(0,V.g)(Te,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(u.g`
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

      for(int i = 0; i < ${u.g.int(16)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${u.g.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e},getRadius:_e},Symbol.toStringTag,{value:"Module"}));class be extends l.k{constructor(e,t,r){super(e,t,new l.l(xe,(()=>Promise.resolve().then((()=>xe)))),r)}initializePipeline(){return(0,j.m)({colorWrite:j.d})}}let Ee=class extends H.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=z.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,B.M)(0),this._passParameters=new ge,this._drawParameters=new ve}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new q.a;t.wrapMode=$.T.CLAMP_TO_EDGE,t.pixelFormat=$.d.RGB,t.wrapMode=$.T.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new q.T(this.renderingContext,t,e),this.techniques.precompile(be),this.techniques.precompile(me),this.addHandles((0,F.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,B.M)(0))))}destroy(){this._passParameters.noiseTexture=(0,L.f)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find((({name:e})=>"normals"===e)),i=r?.getTexture(),o=r?.getTexture($.i),n=this.fboCache,a=t.camera,s=a.fullViewport[2],c=a.fullViewport[3],l=Math.round(s/2),d=Math.round(c/2),u=this.techniques.acquire(be),m=this.techniques.acquire(me);if(!u.compiled||!m.compiled)return this._enableTime=(0,B.M)(performance.now()),this.requestRender(f.R.UPDATE),u.release(),m.release(),n.acquire(l,d,z.OG.SSAO,h.C.RED);0===this._enableTime&&(this._enableTime=(0,B.M)(performance.now()));const g=this.renderingContext,p=this.view.qualitySettings.fadeDuration,v=a.relativeElevation,_=(0,D.c)((h.d-v)/(h.d-h.b),0,1),T=p>0?Math.min(p,performance.now()-this._enableTime)/p:1,x=T*_;this._passParameters.normalTexture=i,this._passParameters.depthTexture=o,this._passParameters.projScale=1/a.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Se/_e(a)**6*x;const b=n.acquire(s,c,"ssao input",h.C.RG);g.bindFramebuffer(b.fbo),g.setViewport(0,0,s,c),g.bindTechnique(u,t,this._passParameters,this._drawParameters),g.screen.draw(),u.release();const E=n.acquire(l,d,"ssao blur",h.C.RED);g.bindFramebuffer(E.fbo),this._drawParameters.colorTexture=b.getTexture(),(0,V.g)(this._drawParameters.blurSize,0,2/c),g.bindTechnique(m,t,this._passParameters,this._drawParameters),g.setViewport(0,0,l,d),g.screen.draw(),b.release();const S=n.acquire(l,d,z.OG.SSAO,h.C.RED);return g.bindFramebuffer(S.fbo),g.setViewport(0,0,s,c),g.setClearColor(1,1,1,0),g.clear($.j.COLOR),this._drawParameters.colorTexture=E.getTexture(),(0,V.g)(this._drawParameters.blurSize,2/s,0),g.bindTechnique(m,t,this._passParameters,this._drawParameters),g.setViewport(0,0,l,d),g.screen.draw(),m.release(),g.setViewport4fv(a.fullViewport),E.release(),T<1&&this.requestRender(f.R.UPDATE),S}};(0,P._)([(0,G.MZ)()],Ee.prototype,"consumes",void 0),(0,P._)([(0,G.MZ)()],Ee.prototype,"produces",void 0),(0,P._)([(0,G.MZ)({constructOnly:!0})],Ee.prototype,"techniques",void 0),(0,P._)([(0,G.MZ)({constructOnly:!0})],Ee.prototype,"isEnabled",void 0),Ee=(0,P._)([(0,U.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ee);const Se=.5;function Ae(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new l.h("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(u.g`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(u.g`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Me(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new s.F("lightingAmbientSH0",((e,t)=>(0,i.f)(Re,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new l.F("lightingAmbientSH_R",((e,t)=>(0,X.s)(Ce,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new l.F("lightingAmbientSH_G",((e,t)=>(0,X.s)(Ce,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new l.F("lightingAmbientSH_B",((e,t)=>(0,X.s)(Ce,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(r.uniforms.add(new s.F("lightingAmbientSH0",((e,t)=>(0,i.f)(Re,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new l.F("lightingAmbientSH_R1",((e,t)=>(0,X.s)(Ce,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new l.F("lightingAmbientSH_G1",((e,t)=>(0,X.s)(Ce,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new l.F("lightingAmbientSH_B1",((e,t)=>(0,X.s)(Ce,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new l.F("lightingAmbientSH_R2",((e,t)=>(0,X.s)(Ce,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new l.F("lightingAmbientSH_G2",((e,t)=>(0,X.s)(Ce,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new l.F("lightingAmbientSH_B2",((e,t)=>(0,X.s)(Ce,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==h.P.Normal&&t.pbrMode!==h.P.Schematic||r.code.add(u.g`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Re=(0,o.c)(),Ce=(0,x.c)();function we(e){e.constants.add("ambientBoostFactor","float",h.c)}function Ie(e){e.uniforms.add(new s.c("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function Oe(e,t){const r=e.fragment;switch(e.include(Ae,t),t.pbrMode!==h.P.Disabled&&e.include(h.e,t),e.include(Me,t),e.include(l.X),r.code.add(u.g`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===h.P.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),we(r),Ie(r),(0,h.f)(r),r.code.add(u.g`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.g`normalize(vPosWorld)`:u.g`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,h.g)(r),r.code.add(u.g`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case h.P.Disabled:case h.P.WaterOnIntegratedMesh:case h.P.Water:e.include(h.h),r.code.add(u.g`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case h.P.Normal:case h.P.Schematic:r.code.add(u.g`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.g`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new W.B("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.g`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new s.c("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new s.c("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(u.g`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.g`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==h.P.Schematic||t.hasColorTexture?u.g`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.g`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case h.P.Simplified:case h.P.TerrainWithWater:(0,h.f)(r),(0,h.g)(r),r.code.add(u.g`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,d.n)(t.pbrMode);case h.P.COUNT:}}class Ne extends s.U{constructor(e,t,r){super(e,"mat4",N.B.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}function ye(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new O.M("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),De(e))}function Pe(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Ne("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),De(e))}function De(e){const t=e.fragment;t.include(O.R),t.uniforms.add(new l.h("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new l.P("numCascades",((e,t)=>t.shadowMap.numCascades)),new l.F("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(u.g`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function Le(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new s.M("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??S.I))).code.add(u.g`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(u.g`void forwardColorUV(){}`)}function Fe(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==l.J.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new s.M("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??S.I))).code.add(u.g`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(u.g`void forwardNormalUV(){}`)}function Be(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==l.J.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new s.M("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??S.I))).code.add(u.g`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(u.g`void forwardEmissiveUV(){}`)}function Ge(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==l.J.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new s.M("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??S.I))).code.add(u.g`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(u.g`void forwardOcclusionUV(){}`)}function Ue(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==l.J.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new s.M("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??S.I))).code.add(u.g`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(u.g`void forwardMetallicRoughnessUV(){}`)}function Ve(e){e.include(l.C),e.code.add(u.g`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${u.g.int(w.C.Multiply)}) {
        return allMixed;
      }
      if (mode == ${u.g.int(w.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${u.g.int(w.C.Replace)}) {
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

      if (mode == ${u.g.int(w.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${u.g.int(w.C.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}u.N;const ze=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new l.S,{vertex:r,fragment:i,varyings:o}=t,{output:n,normalType:a,offsetBackfaces:d,instancedColor:f,spherical:g,receiveShadows:p,snowCover:v,pbrMode:T,textureAlphaPremultiplied:x,instancedDoublePrecision:E,hasVertexColors:S,hasVertexTangents:A,hasColorTexture:M,hasNormalTexture:R,hasNormalTextureTransform:w,hasColorTextureTransform:O}=e;if((0,l.d)(r,e),t.include(C.P),o.add("vpos","vec3"),t.include(l.B,e),t.include(ne,e),t.include(I.V,e),t.include(Le,e),!(0,s.l)(n))return t.include(de,e),t;t.include(Fe,e),t.include(Be,e),t.include(Ge,e),t.include(Ue,e),(0,l.c)(r,e),t.include(c.a,e),t.include(b.T,e);const N=a===c.N.Attribute||a===c.N.Compressed;return N&&d&&t.include(ie),t.include(ue,e),t.include(h.a,e),f&&t.attributes.add(_.V.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),t.include(l.a9,e),t.include(b.F,e),t.include(se,e),t.include(b.V,e),r.uniforms.add(new l.F("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),e.terrainDepthTest&&o.add("depth","float"),r.main.add(u.g`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,u.I)(f,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${u.g.float(m.a)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,u.I)(N,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,u.I)(A,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,u.I)(N&&d,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,u.I)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(Oe,e),t.include(Ae,e),t.include(le,e),t.include(E?ye:Pe,e),t.include(l.t,e),t.include(l.j,e),t.include(l.o,e),(0,l.c)(i,e),i.uniforms.add(r.uniforms.get("localOrigin"),new s.F("ambient",(e=>e.ambient)),new s.F("diffuse",(e=>e.diffuse)),new s.c("opacity",(e=>e.opacity)),new s.c("layerOpacity",(e=>e.layerOpacity))),M&&i.uniforms.add(new l.h("tex",(e=>e.texture))),t.include(h.i,e),t.include(h.e,e),i.include(Ve),t.include(ee,e),we(i),Ie(i),(0,h.g)(i),i.main.add(u.g`
      discardBySlice(vpos);
      ${(0,u.I)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${M?u.g`
              vec4 texColor = texture(tex, ${O?"colorUV":"vuv0"});
              ${(0,u.I)(x,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:u.g`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${a===c.N.ScreenDerivative?u.g`vec3 normal = screenDerivativeNormal(vPositionLocal);`:u.g`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${p?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,u.I)(g,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,u.I)(S,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,u.I)(S,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${R?`mat3 tangentSpace = computeTangentSpace(${A?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${w?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${g?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,u.I)(v,u.g`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${T===h.P.Normal||T===h.P.Schematic?u.g`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,u.I)(v,u.g`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${v?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:u.g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}},Symbol.toStringTag,{value:"Module"}));class He extends h.j{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=J,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=f.C.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=o.Z,this.instancedDoublePrecision=!1,this.normalType=c.N.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,o.g)(.2,.2,.2),this.diffuse=(0,o.g)(.8,.8,.8),this.externalColor=(0,x.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,o.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=f.D.Less,this.textureAlphaMode=f.A.Blend,this.textureAlphaCutoff=m.a,this.textureAlphaPremultiplied=!1,this.renderOccluded=p.R.Occlude,this.isDecoration=!1}}class We extends h.V{constructor(){super(...arguments),this.origin=(0,o.c)(),this.slicePlaneLocalOrigin=this.origin}}class je extends l.k{constructor(e,t,r,i=new l.l(ze,(()=>Promise.resolve().then((()=>ze))))){super(e,t,i,r),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:i,transparent:o,cullFace:n,customDepthTest:a,hasOccludees:c,enableOffset:d}=e,u=r===l.E.NONE,h=r===l.E.FrontFace;return(0,j.m)({blending:(0,s.l)(i)&&o?(0,l.m)(r):null,culling:(m=e,m.cullFace===f.C.None&&(m.hasSlicePlane||m.transparent||m.doubleSidedMode)?null:(0,j.c)(n)),depthTest:{func:(0,l.p)(r,(g=a,g===f.D.Lequal?$.f.LEQUAL:$.f.LESS))},depthWrite:(0,l.q)(e),drawBuffers:i===s.S.Depth?{buffers:[$.l.NONE]}:(0,l.r)(r,i),colorWrite:j.d,stencilWrite:c?l.s:null,stencilTest:c?t?l.u:l.v:null,polygonOffset:u||h?null:(0,l.H)(d)});var m,g}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}class ke extends l.I{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=f.A.Opaque,this.doubleSidedMode=te.None,this.pbrMode=h.P.Disabled,this.cullFace=f.C.None,this.normalType=c.N.Attribute,this.customDepthTest=f.D.Less,this.emissionSource=l.K.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===l.K.Texture||this.hasOcclusionTexture||this.hasNormalTexture?l.J.Default:l.J.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,P._)([(0,Y.p)({count:f.A.COUNT})],ke.prototype,"alphaDiscardMode",void 0),(0,P._)([(0,Y.p)({count:te.COUNT})],ke.prototype,"doubleSidedMode",void 0),(0,P._)([(0,Y.p)({count:h.P.COUNT})],ke.prototype,"pbrMode",void 0),(0,P._)([(0,Y.p)({count:f.C.COUNT})],ke.prototype,"cullFace",void 0),(0,P._)([(0,Y.p)({count:c.N.COUNT})],ke.prototype,"normalType",void 0),(0,P._)([(0,Y.p)({count:f.D.COUNT})],ke.prototype,"customDepthTest",void 0),(0,P._)([(0,Y.p)({count:l.K.COUNT})],ke.prototype,"emissionSource",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasVertexColors",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasSymbolColors",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasVerticalOffset",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasSlicePlane",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasSliceHighlight",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasColorTexture",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasMetallicRoughnessTexture",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasOcclusionTexture",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasNormalTexture",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasScreenSizePerspective",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasVertexTangents",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasOccludees",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasModelTransformation",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"offsetBackfaces",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"vvSize",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"vvColor",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"receiveShadows",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"receiveAmbientOcclusion",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"textureAlphaPremultiplied",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"instanced",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"instancedColor",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"writeDepth",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"transparent",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"enableOffset",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"terrainDepthTest",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"cullAboveTerrain",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"snowCover",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasColorTextureTransform",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasEmissionTextureTransform",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasNormalTextureTransform",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasOcclusionTextureTransform",void 0),(0,P._)([(0,Y.p)()],ke.prototype,"hasMetallicRoughnessTextureTransform",void 0);const $e=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new l.S,{vertex:r,fragment:i,varyings:o}=t,{output:n,offsetBackfaces:a,instancedColor:d,pbrMode:f,snowCover:g,spherical:p}=e,v=f===h.P.Normal||f===h.P.Schematic;if((0,l.d)(r,e),t.include(C.P),o.add("vpos","vec3"),t.include(l.B,e),t.include(ne,e),t.include(I.V,e),n===s.S.Color&&((0,l.c)(t.vertex,e),t.include(c.a,e),t.include(b.T,e),a&&t.include(ie),d&&t.attributes.add(_.V.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.terrainDepthTest&&o.add("depth","float"),t.include(l.a9,e),t.include(b.F,e),t.include(se,e),t.include(b.V,e),r.uniforms.add(new l.F("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),r.main.add(u.g`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,u.I)(d,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${u.g.float(m.a)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,u.I)(a,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,u.I)(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),n===s.S.Color){const{hasColorTexture:o,hasColorTextureTransform:n,receiveShadows:a}=e;t.include(Oe,e),t.include(Ae,e),t.include(le,e),t.include(e.instancedDoublePrecision?ye:Pe,e),t.include(l.t,e),t.include(l.j,e),t.include(l.o,e),(0,l.c)(t.fragment,e),(0,h.f)(i),we(i),Ie(i),i.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new s.F("ambient",(e=>e.ambient)),new s.F("diffuse",(e=>e.diffuse)),new s.c("opacity",(e=>e.opacity)),new s.c("layerOpacity",(e=>e.layerOpacity))),o&&i.uniforms.add(new l.h("tex",(e=>e.texture))),t.include(h.i,e),t.include(h.e,e),i.include(Ve),(0,h.g)(i),i.main.add(u.g`
      discardBySlice(vpos);
      ${(0,u.I)(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${o?`texture(tex, ${n?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,u.I)(o,`${(0,u.I)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?u.g`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:u.g`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,u.I)(g,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${u.g`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,u.I)(v,`vec3 normalGround = ${p?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${v?u.g`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,u.I)(g,u.g`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${g?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:u.g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(de,e),t}},Symbol.toStringTag,{value:"Module"}));class qe extends je{constructor(e,t,r){super(e,t,r,new l.l($e,(()=>Promise.resolve().then((()=>$e))))),this.type="RealisticTreeTechnique"}}class Xe extends p.M{constructor(e,t){super(e,Ze),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[l.i.OPAQUE_MATERIAL,e=>((0,s.m)(e)||(0,s.n)(e))&&!this.parameters.transparent],[l.i.TRANSPARENT_MATERIAL,e=>((0,s.m)(e)||(0,s.n)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[l.i.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.p)(e)||(0,s.n)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,a.n)().vec3f(_.V.POSITION);return e.normalType===c.N.Compressed?t.vec2i16(_.V.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(_.V.NORMAL),e.hasVertexTangents&&t.vec4f(_.V.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(_.V.UV0),e.hasVertexColors&&t.vec4u8(_.V.COLOR),e.hasSymbolColors&&t.vec4u8(_.V.SYMBOLCOLOR),(0,s.o)()&&t.vec4u8(_.V.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new ke(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.S.Shadow&&e!==s.S.ShadowExcludeHighlight&&e!==s.S.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<m.a)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n=t||o||i,a="replace"===e.colorMixMode,s=e.opacity>=m.a;if(r&&n)return a||s;const c=e.externalColor&&e.externalColor[3]>=m.a;return r?a?c:s:n?a||s:a?c:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,i.e)(this.parameters.emissiveFactor,o.Z)}getConfiguration(e,t){const r=this.parameters,{treeRendering:i,doubleSided:o,doubleSidedType:n}=r;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!r.normalTextureId,this._configuration.hasColorTexture=!!r.textureId,this._configuration.hasVertexTangents=!i&&r.hasVertexTangents,this._configuration.instanced=r.isInstanced,this._configuration.instancedDoublePrecision=r.instancedDoublePrecision,this._configuration.vvSize=!!r.vvSize,this._configuration.hasVerticalOffset=null!=r.verticalOffset,this._configuration.hasScreenSizePerspective=null!=r.screenSizePerspective,this._configuration.hasSlicePlane=r.hasSlicePlane,this._configuration.hasSliceHighlight=r.hasSliceHighlight,this._configuration.alphaDiscardMode=r.textureAlphaMode,this._configuration.normalType=i?c.N.Attribute:r.normalType,this._configuration.transparent=r.transparent,this._configuration.writeDepth=r.writeDepth,null!=r.customDepthTest&&(this._configuration.customDepthTest=r.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=r.hasSlicePlane?f.C.None:r.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=r.modelTransformation,this._configuration.hasVertexColors=r.hasVertexColors,this._configuration.hasSymbolColors=r.hasSymbolColors,this._configuration.doubleSidedMode=i?te.WindingOrder:o&&"normal"===n?te.View:o&&"winding-order"===n?te.WindingOrder:te.None,this._configuration.instancedColor=r.hasInstancedColor,this._configuration.receiveShadows=r.receiveShadows&&r.receiveShadows,this._configuration.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!r.vvColor,this._configuration.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,this._configuration.pbrMode=r.usePBR?r.isSchematic?h.P.Schematic:h.P.Normal:h.P.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!r.metallicRoughnessTextureId,this._configuration.emissionSource=i?l.K.None:null!=r.emissiveTextureId?l.K.Texture:r.usePBR?l.K.Value:l.K.None,this._configuration.hasOcclusionTexture=!i&&!!r.occlusionTextureId,this._configuration.offsetBackfaces=!(!r.transparent||!r.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<l.L,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!r.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,r,o,a,s){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,i.f)(rt,t[12],t[13],t[14]);let s=null;switch(r.viewingMode){case n.V.Global:s=(0,i.n)(et,rt);break;case n.V.Local:s=(0,i.i)(et,Qe)}let c=0;const l=(0,i.a)(it,rt,e.eye),d=(0,i.h)(l),u=(0,i.s)(l,l,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,i.d)(s,u)),c+=(0,p.v)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,i.s)(s,s,c),(0,i.x)(tt,s,r.transform.inverseRotation),o=(0,i.a)(Je,o,tt),a=(0,i.a)(Ke,a,tt)}(0,v.i)(e,r,o,a,(0,T.g)(r.verticalOffset),s)}createGLMaterial(e){return new Ye(e)}createBufferWriter(){return new v.D(this._vertexBufferLayout)}}class Ye extends g.G{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,i.f)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?qe:je,e)}}class Ze extends He{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Je=(0,o.c)(),Ke=(0,o.c)(),Qe=(0,o.f)(0,0,1),et=(0,o.c)(),tt=(0,o.c)(),rt=(0,o.c)(),it=(0,o.c)()},63338:(e,t,r)=>{var i;r.d(t,{G:()=>i}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},53703:(e,t,r)=>{r.d(t,{G:()=>c,a:()=>d});var i=r(57732),o=r(80959),n=r(66573),a=r(83902),s=r(84311);class c extends s.a{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=(0,i.c)(this._texture),this._textureNormal=(0,i.c)(this._textureNormal),this._textureEmissive=(0,i.c)(this._textureEmissive),this._textureOcclusion=(0,i.c)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.c)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.a.LOADED:a.a.LOADING}get textureBindParameters(){return new d(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.c)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textures.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.c)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends n.N{constructor(e=null){super(),this.textureEmissive=e}}class d extends l{constructor(e=null,t=null,r=null,i=null,o=null,n,a){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=o,this.scale=n,this.normalTextureTransformMatrix=a}}},41683:(e,t,r)=>{r.d(t,{C:()=>i,D:()=>m,M:()=>E,R:()=>S,a:()=>h,c:()=>g,d:()=>v,e:()=>b,p:()=>p,v:()=>T});var i,o,n=r(2589),a=r(66573),s=r(41390),c=r(97538),l=r(32773),d=r(16699),u=(r(93623),r(5611));r(8844);class h{constructor(){this.id=(0,s.g)()}}(o=i||(i={}))[o.Layer=0]="Layer",o[o.Object=1]="Object",o[o.Mesh=2]="Mesh",o[o.Line=3]="Line",o[o.Point=4]="Point",o[o.Material=5]="Material",o[o.Texture=6]="Texture",o[o.COUNT=7]="COUNT";const m=new Map([[c.V.POSITION,0],[c.V.NORMAL,1],[c.V.NORMALCOMPRESSED,1],[c.V.UV0,2],[c.V.COLOR,3],[c.V.COLORFEATUREATTRIBUTE,3],[c.V.SIZE,4],[c.V.TANGENT,4],[c.V.CENTEROFFSETANDDISTANCE,5],[c.V.SYMBOLCOLOR,5],[c.V.FEATUREATTRIBUTE,6],[c.V.INSTANCEFEATUREATTRIBUTE,6],[c.V.INSTANCECOLOR,7],[c.V.OBJECTANDLAYERIDCOLOR,7],[c.V.INSTANCEOBJECTANDLAYERIDCOLOR,7],[c.V.ROTATION,8],[c.V.INSTANCEMODEL,8],[c.V.INSTANCEMODELNORMAL,12],[c.V.INSTANCEMODELORIGINHI,11],[c.V.INSTANCEMODELORIGINLO,15]]);function f(e,t,r){const i=r.parameters;return _.scale=Math.min(i.divisor/(t-i.offset),1),_.factor=function(e){return Math.abs(e*e*e)}(e),_}function g(e,t){return(0,d.l)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function p(e,t,r,i){i.scale=function(e,t,r){const i=f(e,t,r);return i.minScaleFactor=0,g(1,i)}(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function v(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}(0,d.d)(10),(0,d.d)(12),(0,d.d)(70),(0,d.d)(40);const _={scale:0,factor:0,minScaleFactor:0};function T(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;null!=o&&(n=function(e,t,r,i){return g(e,f(t,r,i))}(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,d.c)(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function x(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?Array.isArray(e[i])&&(0,l.e)(o,e[i])||(e[i]=o.slice(),r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r}(0,u.b)();const b={multiply:1,ignore:2,replace:3,tint:4};class E extends h{constructor(e,t){super(),this.type=i.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=m,this._pp0=(0,n.f)(0,0,1),this._pp1=(0,n.f)(0,0,0),this._parameters=new t,x(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){x(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}var S;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(S||(S={})),a.N},26442:(e,t,r)=>{r.d(t,{D:()=>a,M:()=>s});var i=r(66573),o=r(63536),n=r(70045);function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.g`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.g`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class s extends o.U{constructor(e,t){super(e,"mat3",n.B.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},63536:(e,t,r)=>{r.d(t,{F:()=>x,M:()=>E,S:()=>i,T:()=>v,U:()=>p,a:()=>S,b:()=>T,c:()=>b,j:()=>m,l:()=>h,m:()=>l,n:()=>s,o:()=>_,p:()=>c,q:()=>g});var i,o,n=r(70045),a=r(32773);function s(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight||e===i.ViewshedShadow}function c(e){return function(e){return m(e)||f(e)}(e)||e===i.Normal}function l(e){return function(e){return function(e){return h(e)||d(e)}(e)||f(e)}(e)||e===i.Normal}function d(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function u(e){return e===i.Color}function h(e){return u(e)||g(e)}function m(e){return u(e)||d(e)}function f(e){return e===i.Depth}function g(e){return e===i.ColorEmission}(o=i||(i={}))[o.Color=0]="Color",o[o.ColorEmission=1]="ColorEmission",o[o.Depth=2]="Depth",o[o.Normal=3]="Normal",o[o.Shadow=4]="Shadow",o[o.ShadowHighlight=5]="ShadowHighlight",o[o.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",o[o.ViewshedShadow=7]="ViewshedShadow",o[o.Highlight=8]="Highlight",o[o.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",o[o.COUNT=10]="COUNT";class p{constructor(e,t,r,i,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[n.B.Pass]:null,[n.B.Draw]:null},i)switch(r){case n.B.Pass:this.bind[n.B.Pass]=i;break;case n.B.Draw:this.bind[n.B.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class v extends p{constructor(e,t){super(e,"sampler2D",n.B.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function _(){return!!(0,a.h)("enable-feature:objectAndLayerId-rendering")}class T extends p{constructor(e,t){super(e,"vec3",n.B.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}class x extends p{constructor(e,t){super(e,"vec3",n.B.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}class b extends p{constructor(e,t){super(e,"float",n.B.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}class E extends p{constructor(e,t){super(e,"mat3",n.B.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}class S extends p{constructor(e,t){super(e,"mat4",n.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},23287:(e,t,r)=>{r.d(t,{M:()=>s,R:()=>a});var i=r(66573),o=r(63536),n=r(70045);function a(e){e.code.add(i.g`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}class s extends o.U{constructor(e,t,r){super(e,"mat4",n.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}},21375:(e,t,r)=>{r.d(t,{N:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}getInner(e){return this._outer.get(e)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}forAll(e){for(const t of this._outer.values())for(const r of t.values())e(r)}}},16055:(e,t,r)=>{r.d(t,{N:()=>i,a:()=>c});var i,o,n=r(73502),a=r(66573),s=r(97538);function c(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.V.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.g`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(s.V.NORMAL,"vec3"),e.vertex.code.add(a.g`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.g`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.n)(t.normalType);case i.COUNT:}}(o=i||(i={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.ScreenDerivative=2]="ScreenDerivative",o[o.COUNT=3]="COUNT"},31468:(e,t,r)=>{r.d(t,{D:()=>b,b:()=>p,c:()=>v,d:()=>_,e:()=>f,f:()=>g,g:()=>T,i:()=>A,w:()=>u});var i=r(97538),o=r(47812),n=r(72509),a=r(19766),s=r(26809),c=r(2589),l=r(47239),d=r(41683);function u(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,1===i)for(let e=0;e<c;++e)a[r]=o[n[e]],r+=s;else for(let e=0;e<c;++e){const t=o[n[e]];for(let e=0;e<i;e++)a[r]=t,r+=s}}function h(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length;r*=a;for(let e=0;e<s;++e){const t=2*o[e];n[r]=i[t],n[r+1]=i[t+1],r+=a}}function m(e,t,r,i){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,null==i||1===i)for(let e=0;e<c;++e){const t=3*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}else for(let e=0;e<c;++e){const t=3*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}}function f(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,c=n.length;if(r*=s,1===i)for(let e=0;e<c;++e){const t=4*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}else for(let e=0;e<c;++e){const t=4*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}}function g(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let e=0;e<r;++e)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=o}function p(e,t,r,i,n=1){if(!t)return void m(e,r,i,n);const{data:a,indices:s}=e,c=r.typedBuffer,l=r.typedBufferStride,d=s.length,u=t[0],h=t[1],f=t[2],g=t[4],p=t[5],v=t[6],_=t[8],T=t[9],x=t[10],b=t[12],E=t[13],S=t[14];i*=l;let A=0,M=0,R=0;const C=(0,o.o)(t)?e=>{A=a[e]+b,M=a[e+1]+E,R=a[e+2]+S}:e=>{const t=a[e],r=a[e+1],i=a[e+2];A=u*t+g*r+_*i+b,M=h*t+p*r+T*i+E,R=f*t+v*r+x*i+S};if(1===n)for(let e=0;e<d;++e)C(3*s[e]),c[i]=A,c[i+1]=M,c[i+2]=R,i+=l;else for(let e=0;e<d;++e){C(3*s[e]);for(let e=0;e<n;++e)c[i]=A,c[i+1]=M,c[i+2]=R,i+=l}}function v(e,t,r,i,n=1){if(!t)return void m(e,r,i,n);const{data:a,indices:s}=e,c=t,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=c[0],f=c[1],g=c[2],p=c[4],v=c[5],_=c[6],T=c[8],x=c[9],b=c[10],E=!(0,o.p)(c),S=1e-6,A=.999999;i*=d;let M=0,R=0,C=0;const w=(0,o.o)(c)?e=>{M=a[e],R=a[e+1],C=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];M=h*t+p*r+T*i,R=f*t+v*r+x*i,C=g*t+_*r+b*i};if(1===n)if(E)for(let e=0;e<u;++e){w(3*s[e]);const t=M*M+R*R+C*C;if(t<A&&t>S){const e=1/Math.sqrt(t);l[i]=M*e,l[i+1]=R*e,l[i+2]=C*e}else l[i]=M,l[i+1]=R,l[i+2]=C;i+=d}else for(let e=0;e<u;++e)w(3*s[e]),l[i]=M,l[i+1]=R,l[i+2]=C,i+=d;else for(let e=0;e<u;++e){if(w(3*s[e]),E){const e=M*M+R*R+C*C;if(e<A&&e>S){const t=1/Math.sqrt(e);M*=t,R*=t,C*=t}}for(let e=0;e<n;++e)l[i]=M,l[i+1]=R,l[i+2]=C,i+=d}}function _(e,t,r,i,o=1){const{data:n,indices:a}=e,s=r.typedBuffer,c=r.typedBufferStride,l=a.length;if(i*=c,t!==n.length||4!==t)if(1!==o)if(4!==t)for(let e=0;e<l;++e){const t=3*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=c}else for(let e=0;e<l;++e){const t=4*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=c}return}for(let e=0;e<l;++e){const t=3*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=c}}else{s[i]=n[0],s[i+1]=n[1],s[i+2]=n[2],s[i+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=c/4,a=e[i/=4];i+=t;const d=l*o;for(let r=1;r<d;++r)e[i]=a,i+=t}}function T(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function x(e,t,r,s,c,l){switch(e){case i.V.POSITION:{(0,a.a)(3===t.size);const i=c.getField(e,n.b);(0,a.a)(!!i,`No buffer view for ${e}`),i&&p(t,r,i,l);break}case i.V.NORMAL:{(0,a.a)(3===t.size);const r=c.getField(e,n.b);(0,a.a)(!!r,`No buffer view for ${e}`),r&&v(t,s,r,l);break}case i.V.NORMALCOMPRESSED:{(0,a.a)(2===t.size);const r=c.getField(e,n.D);(0,a.a)(!!r,`No buffer view for ${e}`),r&&h(t,r,l);break}case i.V.UV0:{(0,a.a)(2===t.size);const r=c.getField(e,n.a);(0,a.a)(!!r,`No buffer view for ${e}`),r&&h(t,r,l);break}case i.V.COLOR:case i.V.SYMBOLCOLOR:{const r=c.getField(e,n.o);(0,a.a)(!!r,`No buffer view for ${e}`),(0,a.a)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||_(t,t.size,r,l);break}case i.V.COLORFEATUREATTRIBUTE:{const r=c.getField(e,n.B);(0,a.a)(!!r,`No buffer view for ${e}`),(0,a.a)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length,c=i[0];r*=a;for(let e=0;e<s;++e)n[r]=c,r+=a}(t,r,l);break}case i.V.TANGENT:{(0,a.a)(4===t.size);const i=c.getField(e,n.c);(0,a.a)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void f(e,r,i,n);const{data:a,indices:s}=e,c=t,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=c[0],m=c[1],g=c[2],p=c[4],v=c[5],_=c[6],T=c[8],x=c[9],b=c[10],E=!(0,o.p)(c),S=1e-6,A=.999999;if(i*=d,1===n)for(let e=0;e<u;++e){const t=4*s[e],r=a[t],o=a[t+1],n=a[t+2],c=a[t+3];let u=h*r+p*o+T*n,f=m*r+v*o+x*n,M=g*r+_*o+b*n;if(E){const e=u*u+f*f+M*M;if(e<A&&e>S){const t=1/Math.sqrt(e);u*=t,f*=t,M*=t}}l[i]=u,l[i+1]=f,l[i+2]=M,l[i+3]=c,i+=d}else for(let e=0;e<u;++e){const t=4*s[e],r=a[t],o=a[t+1],c=a[t+2],u=a[t+3];let f=h*r+p*o+T*c,M=m*r+v*o+x*c,R=g*r+_*o+b*c;if(E){const e=f*f+M*M+R*R;if(e<A&&e>S){const t=1/Math.sqrt(e);f*=t,M*=t,R*=t}}for(let e=0;e<n;++e)l[i]=f,l[i+1]=M,l[i+2]=R,l[i+3]=u,i+=d}}(t,r,i,l);break}case i.V.PROFILERIGHT:case i.V.PROFILEUP:case i.V.PROFILEVERTEXANDNORMAL:case i.V.FEATUREVALUE:{(0,a.a)(4===t.size);const r=c.getField(e,n.c);(0,a.a)(!!r,`No buffer view for ${e}`),r&&f(t,r,l)}}}class b{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(i.V.POSITION).indices.length}write(e,t,r,o,a,s){!function(e,t,r,o,a,s,c){for(const l of r.fields.keys()){const r=e.get(l),d=r?.indices;if(r&&d)x(l,r,o,a,s,c);else if(l===i.V.OBJECTANDLAYERIDCOLOR&&null!=t){const r=e.get(i.V.POSITION)?.indices;if(r){const e=r.length;T(t,s.getField(l,n.o),e,c)}}}}(r,o,this.vertexBufferLayout,e,t,a,s)}}class E{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const S=(0,l.c)();function A(e,t,r,o,n,c){if(!e.visible)return;const l=(0,s.j)(B,o,r),u=(e,t,r)=>{c(e,r,t,!1)},h=new E(!1,t.options.normalRequired);if(e.boundingInfo){(0,a.a)(e.type===d.C.Mesh);const i=t.tolerance;R(e.boundingInfo,r,l,i,n,h,u)}else{const t=e.attributes.get(i.V.POSITION),o=t.indices;!function(e,t,r,i,o,n,a,c,l,d){const u=t,h=G,m=Math.abs(u[0]),f=Math.abs(u[1]),g=Math.abs(u[2]),p=m>=f?m>=g?0:2:f>=g?1:2,v=p,_=u[v]<0?2:1,T=(p+_)%3,x=(p+(3-_))%3,b=u[T]/u[v],E=u[x]/u[v],S=1/u[v],A=w,M=I,R=O,{normalRequired:C}=l;for(let t=r;t<i;++t){const r=3*t,i=a*o[r];(0,s.f)(h[0],n[i+0],n[i+1],n[i+2]);const l=a*o[r+1];(0,s.f)(h[1],n[l+0],n[l+1],n[l+2]);const u=a*o[r+2];(0,s.f)(h[2],n[u+0],n[u+1],n[u+2]),c&&((0,s.i)(h[0],c.applyToVertex(h[0][0],h[0][1],h[0][2],t)),(0,s.i)(h[1],c.applyToVertex(h[1][0],h[1][1],h[1][2],t)),(0,s.i)(h[2],c.applyToVertex(h[2][0],h[2][1],h[2][2],t))),(0,s.j)(A,h[0],e),(0,s.j)(M,h[1],e),(0,s.j)(R,h[2],e);const m=A[T]-b*A[v],f=A[x]-E*A[v],g=M[T]-b*M[v],p=M[x]-E*M[v],_=R[T]-b*R[v],w=R[x]-E*R[v],I=_*p-w*g,O=m*w-f*_,N=g*f-p*m;if((I<0||O<0||N<0)&&(I>0||O>0||N>0))continue;const P=I+O+N;if(0===P)continue;const D=I*(S*A[v])+O*(S*M[v])+N*(S*R[v]);if(D*Math.sign(P)<0)continue;const L=D/P;L>=0&&d(L,t,C?y(h):null)}}(r,l,0,o.length/3,o,t.data,t.stride,n,h,u)}}const M=(0,c.c)();function R(e,t,r,i,o,n,a){if(null==e)return;const c=(0,s.f)(M,1/(d=r)[0],1/d[1],1/d[2]);var d;if((0,l.y)(S,e.bbMin),(0,l.z)(S,e.bbMax),null!=o&&o.applyToAabb(S),function(e,t,r,i){return function(e,t,r,i){const o=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let a=Math.min(o,n),s=Math.max(o,n);const c=(e[1]-i-t[1])*r[1],l=(e[4]+i-t[1])*r[1];if(s=Math.min(s,Math.max(c,l)),s<0)return!1;if(a=Math.max(a,Math.min(c,l)),a>s)return!1;const d=(e[2]-i-t[2])*r[2],u=(e[5]+i-t[2])*r[2];return s=Math.min(s,Math.max(d,u)),!(s<0)&&(a=Math.max(a,Math.min(d,u)),!(a>s)&&a<1/0)}(e,t,r,i)}(S,t,c,i)){const{primitiveIndices:s,position:c}=e,l=s?s.length:c.indices.length/3;if(l>L){const s=e.getChildren();if(void 0!==s){for(const e of s)R(e,t,r,i,o,n,a);return}}!function(e,t,r,i,o,n,a,s,c,l,d){const u=e[0],h=e[1],m=e[2],f=t[0],g=t[1],p=t[2],{normalRequired:v}=l;for(let e=0;e<i;++e){const t=s[e],r=3*t,i=a*o[r];let l=n[i],_=n[i+1],T=n[i+2];const x=a*o[r+1];let b=n[x],E=n[x+1],S=n[x+2];const A=a*o[r+2];let M=n[A],R=n[A+1],w=n[A+2];null!=c&&([l,_,T]=c.applyToVertex(l,_,T,e),[b,E,S]=c.applyToVertex(b,E,S,e),[M,R,w]=c.applyToVertex(M,R,w,e));const I=b-l,O=E-_,y=S-T,P=M-l,D=R-_,L=w-T,B=g*L-D*p,G=p*P-L*f,U=f*D-P*g,V=I*B+O*G+y*U;if(Math.abs(V)<=F)continue;const z=u-l,H=h-_,W=m-T,j=z*B+H*G+W*U;if(V>0){if(j<0||j>V)continue}else if(j>0||j<V)continue;const k=H*y-O*W,$=W*I-y*z,q=z*O-I*H,X=f*k+g*$+p*q;if(V>0){if(X<0||j+X>V)continue}else if(X>0||j+X<V)continue;const Y=(P*k+D*$+L*q)/V;Y>=0&&d(Y,t,v?N(I,O,y,P,D,L,C):null)}}(t,r,0,l,c.indices,c.data,c.stride,s,o,n,a)}}const C=(0,c.c)();const w=(0,c.c)(),I=(0,c.c)(),O=(0,c.c)();function N(e,t,r,i,o,n,a){return(0,s.f)(P,e,t,r),(0,s.f)(D,i,o,n),(0,s.c)(a,P,D),(0,s.n)(a,a),a}function y(e){return(0,s.j)(P,e[1],e[0]),(0,s.j)(D,e[2],e[0]),(0,s.c)(C,P,D),(0,s.n)(C,C),C}const P=(0,c.c)(),D=(0,c.c)(),L=1e3,F=1e-7,B=(0,c.c)(),G=[(0,c.c)(),(0,c.c)(),(0,c.c)()]},45564:(e,t,r)=>{r.d(t,{C:()=>i,F:()=>I,P:()=>n,V:()=>x,a:()=>_,b:()=>C,c:()=>O,d:()=>w,e:()=>R,f:()=>b,g:()=>E,h:()=>S,i:()=>A,j:()=>T});var i,o,n,a,s=r(73502),c=r(88485),l=r(62482),d=r(16055),u=r(86145),h=r(66573),m=r(26442),f=r(63536),g=r(84311),p=r(70045),v=(r(6407),r(20266),r(83902),r(16699),r(26809),r(2589));function _(e,t){switch(t.normalType){case d.N.Attribute:case d.N.Compressed:e.include(d.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new m.M("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new f.M("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(h.g`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case d.N.ScreenDerivative:e.vertex.code.add(h.g`void forwardNormal() {}`);break;default:(0,s.n)(t.normalType);case d.N.COUNT:}}(a=i||(i={}))[a.RED=0]="RED",a[a.RG=1]="RG",a[a.RGBA4=2]="RGBA4",a[a.RGBA=3]="RGBA",a[a.RGBA_MIPMAP=4]="RGBA_MIPMAP",a[a.R16F=5]="R16F",a[a.RGBA16F=6]="RGBA16F",function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(o||(o={}));class T extends u.b{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,c.c)()}}class x extends u.a{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,c.c)(),this.toMapSpace=(0,l.c)()}}function b(e){e.uniforms.add(new f.F("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function E(e){e.uniforms.add(new f.F("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function S(e){b(e.fragment),E(e.fragment),e.fragment.code.add(h.g`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function A(e,t){const r=t.pbrMode,i=e.fragment;if(r!==n.Schematic&&r!==n.Disabled&&r!==n.Normal)return void i.code.add(h.g`void applyPBRFactors() {}`);if(r===n.Disabled)return void i.code.add(h.g`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===n.Schematic)return void i.code.add(h.g`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:s,hasOcclusionTextureTransform:c,bindType:l}=t;(o||s)&&e.include(g.W,t),i.code.add(h.g`vec3 mrr;
float occlusion;`),o&&i.uniforms.add(l===p.B.Pass?new g.h("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new f.T("texMetallicRoughness",(e=>e.textureMetallicRoughness))),s&&i.uniforms.add(l===p.B.Pass?new g.h("texOcclusion",(e=>e.textureOcclusion)):new f.T("texOcclusion",(e=>e.textureOcclusion))),i.uniforms.add(l===p.B.Pass?new f.F("mrrFactors",(e=>e.mrrFactors)):new f.b("mrrFactors",(e=>e.mrrFactors))),i.code.add(h.g`
    ${(0,h.I)(o,h.g`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,h.I)(s,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${s?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,h.I)(o,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,h.I)(s,`applyOcclusion(${c?"occlusionUV":"vuv0"});`)}
    }
  `)}function M(e){const t=e.fragment.code;t.add(h.g`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(h.g`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(h.g`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function R(e,t){const r=e.fragment.code;e.include(g.X),t.pbrMode!==n.Normal&&t.pbrMode!==n.Schematic&&t.pbrMode!==n.Simplified&&t.pbrMode!==n.TerrainWithWater||(r.add(h.g`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(h.g`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.Normal&&t.pbrMode!==n.Schematic||(e.include(M),r.add(h.g`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(h.g`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(h.g`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(h.g`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(n||(n={}));const C=3e5,w=5e5;class I extends f.U{constructor(e,t){super(e,"vec2",p.B.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}(0,v.c)();const O=.4;(0,v.c)()},8017:(e,t,r)=>{r.d(t,{B:()=>s,S:()=>c});var i=r(63536),o=r(70045),n=r(66573),a=r(97538);class s extends i.U{constructor(e,t){super(e,"bool",o.B.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}function c(e,t=!0){e.attributes.add(a.V.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(n.g`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?n.g`uv = position * 0.5 + vec2(0.5);`:""}
  `)}},81583:(e,t,r)=>{r.d(t,{S:()=>s,p:()=>c});var i=r(6407),o=r(66573),n=r(32773);class a{constructor(e){this._bits=[...e]}equals(e){return(0,n.e)(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}class s extends o.N{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new a(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function c(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits;let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);const c=a[s],l=(1<<n)-1<<c;a[s]+=n,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[s]&l)>>c},set(t){if(this[r]!==t){if(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+t<<c&l,"number"!=typeof t)throw new i.A(`Configuration value for ${r} must be a number, got ${typeof t}`);if(null==e.count)throw new i.A(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[s]&l)>>c)},set(e){if(this[r]!==e&&(this._key=null,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"boolean"!=typeof e))throw new i.A(`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}},84311:(e,t,r)=>{r.d(t,{B:()=>Se,C:()=>it,D:()=>xe,E:()=>re,F:()=>Ne,G:()=>X,H:()=>Ot,I:()=>de,J:()=>ee,K:()=>te,L:()=>wt,M:()=>Mt,O:()=>Tt,P:()=>_t,Q:()=>ie,R:()=>et,S:()=>nt,T:()=>Xe,W:()=>ae,X:()=>Ke,a:()=>Y,a4:()=>H,a5:()=>z,a9:()=>oe,b:()=>Qe,c:()=>Me,d:()=>Re,e:()=>Ie,g:()=>Oe,h:()=>se,i:()=>Z,j:()=>ue,k:()=>St,l:()=>bt,m:()=>Rt,n:()=>V,o:()=>xt,p:()=>Nt,q:()=>Ct,r:()=>yt,s:()=>Pt,t:()=>rt,u:()=>Lt,v:()=>Dt});var i=r(32773),o=r(87162),n=r(26809),a=r(4361),s=r(45371),c=r(2589),l=r(19766),d=r(41683),u=r(78794),h=r(41390),m=r(83902),f=r(97538),g=r(32816),p=r(63536),v=r(81583),_=r(70045),T=r(47812),x=r(66573),b=r(16699),E=(r(19869),r(19556),r(6407)),S=r(81272),A=r(57732),M=r(80959),R=r(99063),C=r(88275),w=r(64604),I=r(18683),O=r(52134),N=r(89167),y=r(20266),P=r(37322),D=r(46484),L=r(73502),F=r(13661),B=r(40397);class G{constructor(){this.uid=(0,h.g)()}}class U extends G{constructor(e){super(),this.highlightGroupName=e,this.channel=m.O.Highlight}}function V(e,t=!1){return e<=i.n?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function z(e){if(e.length<i.n)return Array.from(e);if((0,i.d)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,i.k)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}class H{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,l.a)(e.length>=1),(0,l.a)(3===r.size||4===r.size);const{data:i,size:o,indices:a}=r;(0,l.a)(a.length%this._numIndexPerPrimitive==0),(0,l.a)(a.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let d=o*a[this._numIndexPerPrimitive*e[0]];W.clear(),W.push(d);const u=(0,c.f)(i[d],i[d+1],i[d+2]),h=(0,c.a)(u);for(let t=0;t<s;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){d=o*a[r+e],W.push(d);let t=i[d];u[0]=Math.min(t,u[0]),h[0]=Math.max(t,h[0]),t=i[d+1],u[1]=Math.min(t,u[1]),h[1]=Math.max(t,h[1]),t=i[d+2],u[2]=Math.min(t,u[2]),h[2]=Math.max(t,h[2])}}this.bbMin=u,this.bbMax=h;const m=(0,n.l)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-u[0],h[1]-u[1]),h[2]-u[2]);let f=this.radius*this.radius;for(let e=0;e<W.length;++e){d=W.at(e);const t=i[d]-m[0],r=i[d+1]-m[1],o=i[d+2]-m[2],n=t*t+r*r+o*o;if(n<=f)continue;const a=Math.sqrt(n),s=.5*(a-this.radius);this.radius=this.radius+s,f=this.radius*this.radius;const c=s/a;m[0]+=t*c,m[1]+=r*c,m[2]+=o*c}this.center=m,W.clear()}getChildren(){if(this._children||(0,n.r)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,n.l)((0,c.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:a,indices:s}=this.position;for(let n=0;n<t;++n){let t=0;const c=this._numIndexPerPrimitive*this.primitiveIndices[n];let l=a*s[c],d=o[l],u=o[l+1],h=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=a*s[c+e];const t=o[l],r=o[l+1],i=o[l+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[n]=t,++i[t]}let l=0;for(let e=0;e<8;++e)i[e]>0&&++l;if(l<2)return;const d=new Array(8);for(let e=0;e<8;++e)d[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];d[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==d[e]&&this._children.push(new H(d[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){W.prune()}}const W=new s.P({deallocator:null}),j=(0,c.c)(),k=(0,c.c)(),$=(0,c.c)(),q=(0,c.c)();class X extends d.a{constructor(e,t,r=null,i=d.C.Mesh,o=null,n=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=n,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,a.c)(r.indices)}),e===f.V.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new X(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:z(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===d.C.Mesh?this._computeAttachmentOriginTriangles(e):this.type===d.C.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,n.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.f)(t,0,0,0),(0,n.f)(q,0,0,0);let a=0,s=0;for(let e=0;e<o.length-2;e+=3){const c=o[e]*r,l=o[e+1]*r,d=o[e+2]*r;(0,n.f)(j,i[c],i[c+1],i[c+2]),(0,n.f)(k,i[l],i[l+1],i[l+2]),(0,n.f)($,i[d],i[d+1],i[d+2]);const h=(0,u.b)(j,k,$);h?((0,n.g)(j,j,k),(0,n.g)(j,j,$),(0,n.s)(j,j,1/3*h),(0,n.g)(t,t,j),a+=h):((0,n.g)(q,q,j),(0,n.g)(q,q,k),(0,n.g)(q,q,$),s+=3)}return!(0===s&&0===a||(0!==a?((0,n.s)(t,t,1/a),0):0===s||((0,n.s)(t,q,1/s),0)))}(this.attributes.get(f.V.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(f.V.POSITION);return function(e,t,r){if(!e)return!1;(0,n.f)(r,0,0,0),(0,n.f)(q,0,0,0);let i=0,o=0;const{size:a,data:s,indices:c}=e,l=c.length-1,d=l+(t?2:0);for(let e=0;e<d;e+=2){const t=e<l?e+1:0,d=c[e<l?e:l]*a,u=c[t]*a;j[0]=s[d],j[1]=s[d+1],j[2]=s[d+2],k[0]=s[u],k[1]=s[u+1],k[2]=s[u+2],(0,n.s)(j,(0,n.g)(j,j,k),.5);const h=(0,n.I)(j,k);h>0?((0,n.g)(r,r,(0,n.s)(j,j,h)),i+=h):0===i&&((0,n.g)(q,q,j),o++)}return 0!==i?((0,n.s)(r,r,1/i),!0):0!==o&&((0,n.s)(r,q,1/o),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.f)(t,0,0,0);let a=-1,s=0;for(let e=0;e<o.length;e++){const n=o[e]*r;a!==n&&(t[0]+=i[n],t[1]+=i[n+1],t[2]+=i[n+2],s++),a=n}return s>1&&(0,n.s)(t,t,1/s),s>0}(this.attributes.get(f.V.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(f.V.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===d.C.Mesh?3:1;(0,l.a)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,a.a)(e.indices.length/t);return new H(r,t,e)}get transformation(){return this._transformation??o.I}set transformation(e){this._transformation=e&&e!==o.I?(0,o.a)(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach(((t,r)=>e(r)))}allocateIdAndHighlight(e){const t=new U(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}class Y{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return m.a.LOADED}}var Z,J,K,Q,ee,te,re;function ie(e,t,r){if(!t.vvSize)return(0,n.f)(e,1,1,1),e;for(let i=0;i<3;++i){const o=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,b.c)(o,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}function oe(e,t){switch(t.textureCoordinateType){case ee.Default:return e.attributes.add(f.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(x.g`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ee.Compressed:return e.attributes.add(f.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(x.g`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ee.Atlas:return e.attributes.add(f.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(f.V.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(x.g`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,L.n)(t.textureCoordinateType);case ee.None:return void e.vertex.code.add(x.g`void forwardTextureCoordinates() {}`);case ee.COUNT:return}}function ne(e){e.fragment.code.add(x.g`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ae(e,t){const{textureCoordinateType:r}=t;if(r===ee.None||r===ee.COUNT)return;e.include(oe,t);const i=r===ee.Atlas;i&&e.include(ne),e.fragment.code.add(x.g`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}(Q=Z||(Z={}))[Q.INTEGRATED_MESH=0]="INTEGRATED_MESH",Q[Q.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",Q[Q.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",Q[Q.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",Q[Q.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",Q[Q.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",Q[Q.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",Q[Q.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",Q[Q.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",Q[Q.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",Q[Q.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",Q[Q.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",Q[Q.HUD_MATERIAL=12]="HUD_MATERIAL",Q[Q.LABEL_MATERIAL=13]="LABEL_MATERIAL",Q[Q.LINE_CALLOUTS=14]="LINE_CALLOUTS",Q[Q.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",Q[Q.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",Q[Q.DRAPED_WATER=17]="DRAPED_WATER",Q[Q.VOXEL=18]="VOXEL",Q[Q.MAX_SLOTS=19]="MAX_SLOTS",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(J||(J={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(K||(K={})),x.N,(0,o.c)(),(0,c.c)(),(0,o.c)(),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(ee||(ee={}));class se extends p.U{constructor(e,t){super(e,"sampler2D",_.B.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function ce(e,t){if(!(0,p.l)(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:o}=t,n=r===te.Texture;n&&(e.include(ae,t),e.fragment.uniforms.add(o===_.B.Pass?new se("texEmission",(e=>e.textureEmissive)):new p.T("texEmission",(e=>e.textureEmissive))));const a=r===te.Value||n;a&&e.fragment.uniforms.add(o===_.B.Pass?new p.F("emissionFactor",(e=>e.emissiveFactor)):new p.b("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(x.g`
    vec4 getEmissions() {
      vec4 emissions = ${a?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,x.I)(n,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"}(te||(te={}));class le extends v.S{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,g._)([(0,v.p)()],le.prototype,"instancedDoublePrecision",void 0),(0,g._)([(0,v.p)()],le.prototype,"hasModelTransformation",void 0),function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(re||(re={}));class de extends le{constructor(){super(...arguments),this.output=p.S.Color,this.oitPass=re.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=_.B.Pass,this.writeDepth=!0}}function ue(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=x.g`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}const i=x.g`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=x.g`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?x.g`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:x.g`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(i),e.fragment.uniforms.add(...r).code.add(i),e.fragment.code.add(n)}(e,t,new p.b("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return c.Z;const i=he(e,t,r),o=me(i,r.slicePlane),a=fe(e,i,r);return null!=a?(0,n.m)(ve,o,a):o}(t,e,r))),new p.b("slicePlaneBasis1",((e,r)=>ge(t,e,r,r.slicePlane?.basis1))),new p.b("slicePlaneBasis2",((e,r)=>ge(t,e,r,r.slicePlane?.basis2))))}function he(e,t,r){return e.instancedDoublePrecision?(0,n.f)(pe,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function me(e,t){return null!=e?(0,n.a)(ve,t.origin,e):t.origin}function fe(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,T.x)(Te,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function ge(e,t,r,i){if(null==i||null==r.slicePlane)return c.Z;const o=he(e,t,r),a=me(o,r.slicePlane),s=fe(e,o,r);return null!=s?((0,n.g)(_e,i,a),(0,n.m)(ve,a,s),(0,n.m)(_e,_e,s),(0,n.a)(_e,_e,ve)):i}(0,g._)([(0,v.p)({count:p.S.COUNT})],de.prototype,"output",void 0),(0,g._)([(0,v.p)({count:re.COUNT})],de.prototype,"oitPass",void 0),x.N;const pe=(0,c.c)(),ve=(0,c.c)(),_e=(0,c.c)(),Te=(0,o.c)();function xe(e,t){if(t.output!==p.S.ObjectAndLayerIdColor)return e.vertex.code.add(x.g`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(x.g`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?f.V.INSTANCEOBJECTANDLAYERIDCOLOR:f.V.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(x.g`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(x.g`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}class be extends p.U{constructor(e,t,r){super(e,"vec4",_.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class Ee extends p.U{constructor(e,t,r){super(e,"float",_.B.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}function Se(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(f.V.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new p.F("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new p.F("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new p.F("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new p.F("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new p.M("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new p.F("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(x.g`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(x.g`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?x.g`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(x.g`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),r.uniforms.add(new Ee("vvColorValues",(e=>e.vvColor.values),8),new be("vvColorColors",(e=>e.vvColor.colors),8)),r.code.add(x.g`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?x.g`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(x.g`vec4 vvColor() { return vec4(1.0); }`)}class Ae extends p.U{constructor(e,t){super(e,"mat4",_.B.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}function Me(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",c.Z):e.uniforms.add(new p.b("cameraPosition",((e,t)=>(0,n.f)(we,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function Re(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new p.a("proj",((e,t)=>t.camera.projectionMatrix)),new Ae("view",((e,t)=>(0,T.x)(Ce,t.camera.viewMatrix,e.origin))),new p.b("localOrigin",(e=>e.origin)));const r=e=>(0,n.f)(we,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new p.a("proj",((e,t)=>t.camera.projectionMatrix)),new p.a("view",((e,t)=>(0,T.x)(Ce,t.camera.viewMatrix,r(t)))),new p.F("localOrigin",((e,t)=>r(t))))}const Ce=(0,o.c)(),we=(0,c.c)();function Ie(e){e.uniforms.add(new p.a("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function Oe(e){e.uniforms.add(new p.c("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}class Ne extends p.U{constructor(e,t){super(e,"vec4",_.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}let ye;var Pe;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(Pe||(Pe={}));let De=null,Le=null;async function Fe(){return null==Le&&(ye??=(async()=>{const e=await r.e(8674).then(r.bind(r,68674)),t=await e.default({locateFile:e=>(0,I.g)(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Le=ye,De=await Le),Le}function Be(e,t,r,i,o){const n=(0,N.d)(t?O.m.COMPRESSED_RGBA8_ETC2_EAC:O.m.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function Ge(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ue(e){return e.getFaces()>=1&&e.isETC1S()}function Ve(e,t,r,i,o,n,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[d,u]=c?i?[Pe.ETC2_RGBA,O.m.COMPRESSED_RGBA8_ETC2_EAC]:[Pe.ETC1_RGB,O.m.COMPRESSED_RGB8_ETC2]:l?i?[Pe.BC3_RGBA,O.m.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Pe.BC1_RGB,O.m.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Pe.RGBA32,O.d.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?O.c.LINEAR_MIPMAP_LINEAR:O.c.LINEAR,t.width=o,t.height=n,new N.T(e,t,{type:"compressed",levels:m})}const ze=()=>y.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function He(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const We=He("DXT1"),je=He("DXT3"),ke=He("DXT5");function $e(e,t,r){if(e instanceof ImageData)return $e(qe(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function qe(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new E.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}class Xe extends d.a{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=d.C.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new S.A,this._parameters={...Je,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,R.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,R.DB)(e.src)||(0,R.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new N.a;return t.wrapMode=this._parameters.wrap??O.T.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?O.c.LINEAR_MIPMAP_LINEAR:O.c.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,i.x)(e)||(0,i.j)(e))return t.encoding===m.T.KTX2_ENCODING?function(e,t){if(null==De)return e.byteLength;const r=new De.KTX2File(new Uint8Array(e)),i=Ue(r)?Be(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===m.T.BASIS_ENCODING?function(e,t){if(null==De)return e.byteLength;const r=new De.BasisFile(new Uint8Array(e)),i=Ge(r)?Be(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ye(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new N.T(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,i.j)(t)&&this._parameters.encoding===m.T.DDS_ENCODING?this._loadFromDDSData(e,t):(0,i.x)(t)&&this._parameters.encoding===m.T.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,i.x)(t)||(0,i.j)(t))&&this._parameters.encoding===m.T.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,i.x)(t)||(0,i.j)(t))&&this._parameters.encoding===m.T.BASIS_ENCODING?this._loadFromBasis(e,t):(0,i.j)(t)?this._loadFromPixelData(e,t):(0,i.x)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Ze.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e.buffer,e.byteOffset,31);if(542327876!==r[0])return ze().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return ze().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case We:o=8,n=O.m.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case je:o=16,n=O.m.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ke:o=16,n=O.m.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ze().error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,c=r[4],l=r[3];(3&c||3&l)&&(ze().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7]));let h,m,f=e.byteOffset+r[1]+4;const g=[];for(let t=0;t<s;++t)m=(c+3>>2)*(l+3>>2)*o,h=new Uint8Array(e.buffer,f,m),g.push(h),f+=m,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:g},internalFormat:n,width:d,height:u}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?O.c.LINEAR_MIPMAP_LINEAR:O.c.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new N.T(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==De&&(De=await Fe());const i=new De.KTX2File(new Uint8Array(r));if(!Ue(i))return null;i.startTranscoding();const o=Ve(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==De&&(De=await Fe());const i=new De.BasisFile(new Uint8Array(r));if(!Ge(i))return null;i.startTranscoding();const o=Ve(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,l.a)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?O.d.LUMINANCE:3===this._parameters.components?O.d.RGB:O.d.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new N.T(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,C.r)(t,{signal:r});return(0,M.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,w.l)(t,t.src,!1,r);return(0,M.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=Ze.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,A.r)(c)},a=()=>{t.readyState>=Ze.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new E.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const c=(0,M.u7)(r,(()=>s((0,M.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?qe(e):e;let i=e.width,o=e.height;do{i=Math.ceil(i/2),o=Math.ceil(o/2),r=i*o}while(r>1048576||null!=t&&(i>t||o>t));return $e(e,i,o)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return $e(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=Ye(r);this._parameters.width=i.width,this._parameters.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?O.d.RGB:O.d.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new N.T(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,A.f)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Ye(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Ze;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Ze||(Ze={}));const Je={wrap:{s:O.T.REPEAT,t:O.T.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function Ke(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}class Qe extends p.U{constructor(e,t){super(e,"vec2",_.B.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}function et(e){e.uniforms.add(new Qe("zProjectionMap",((e,t)=>function(e){const t=e.projectionMatrix;return(0,P.g)(tt,t[14],t[10])}(t.camera)))),e.code.add(x.g`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(x.g`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(x.g`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const tt=(0,D.c)();function rt(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:i}){r?(e.fragment.include(et),e.fragment.uniforms.add(new se("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(x.g`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?x.g`return fragmentDepth < linearDepth && depth < 1.0;`:x.g`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(x.g`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(x.g`#define terrainDepthTest(fragmentDepth) {}`)}function it(e){e.code.add(x.g`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}class ot{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class nt extends ot{constructor(){super(...arguments),this.vertex=new lt,this.fragment=new lt,this.attributes=new dt,this.varyings=new ut,this.extensions=new ht,this.outputs=new mt}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s=o.main.generateSource(),c="vertex"===e?pt:gt,l=o.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${c}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${d.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[_.B.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[_.B.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o)=>{for(let n=0;n<i;++n)r[n](e,t,o)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[_.B.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[_.B.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o,n)=>{for(let a=0;a<i;++a)r[a](e,n,t,o)}}}class at{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new E.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else y.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class st{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new E.A("Shader does not contain main function body.")}}class ct{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class lt extends ot{constructor(){super(...arguments),this.uniforms=new at(this),this.main=new st(this),this.code=new ct(this),this.constants=new ft(this)}get builder(){return this}}class dt{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class ut{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,l.a)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class ht{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?ht.ALLOWLIST_VERTEX:ht.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}ht.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ht.ALLOWLIST_VERTEX=[];class mt{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,l.a)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:mt.DEFAULT_NAME,type:mt.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}mt.DEFAULT_TYPE="vec4",mt.DEFAULT_NAME="fragColor";class ft{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=ft._numberToFloatStr(r);break;case"int":i=ft._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${ft._numberToFloatStr(r[0])},                            ${ft._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${ft._numberToFloatStr(r[0])},                            ${ft._numberToFloatStr(r[1])},                            ${ft._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${ft._numberToFloatStr(r[0])},                            ${ft._numberToFloatStr(r[1])},                            ${ft._numberToFloatStr(r[2])},                            ${ft._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${ft._numberToIntStr(r[0])},                             ${ft._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${ft._numberToIntStr(r[0])},                             ${ft._numberToIntStr(r[1])},                             ${ft._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${ft._numberToIntStr(r[0])},                             ${ft._numberToIntStr(r[1])},                             ${ft._numberToIntStr(r[2])},                             ${ft._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>ft._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const gt="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",pt="precision highp float;\nprecision highp sampler2D;";class vt extends p.U{constructor(e,t){super(e,"ivec2",_.B.Pass,((r,i,o)=>r.setUniform2iv(e,t(i,o))))}}class _t extends p.U{constructor(e,t){super(e,"int",_.B.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}function Tt(e,t){const{fragment:r}=e;t.output===p.S.Highlight?(r.uniforms.add(new se("depthTexture",((e,t)=>t.mainDepth)),new se("highlightTexture",((e,t)=>t.highlightMixTexture)),new _t("highlightLevel",((e,t)=>t.highlightLevel)),new vt("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),r.code.add(x.g`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(x.g`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(x.g`void calculateOcclusionAndOutputHighlight() {}`)}function xt(e,t){e.include(Tt,t),e.include(ce,t),e.fragment.include(it);const r=t.output===p.S.ObjectAndLayerIdColor,i=(0,p.q)(t.output),o=(0,p.l)(t.output)&&t.oitPass===re.ColorAlpha,n=(0,p.l)(t.output)&&t.oitPass!==re.ColorAlpha,a=t.discardInvisibleFragments;let s=0;(n||i||o)&&e.outputs.add("fragColor","vec4",s++),i&&e.outputs.add("fragEmission","vec4",s++),o&&e.outputs.add("fragAlpha","float",s++),e.fragment.code.add(x.g`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,x.I)(r,x.g`finalColor.a = 1.0;`)}

      ${(0,x.I)(a,x.g`if (finalColor.a < ${x.g.float(F.a)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,x.I)(o,x.g`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,x.I)(n,"fragColor = finalColor;")}
      ${(0,x.I)(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,x.I)(r,"outputObjectAndLayerIdColor();")}
    }
  `)}class bt{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}class Et{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new s.P({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,N.w)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}class St{constructor(e,t,r,i,o=d.D){this.release=i,this.locations=o,this.primitiveType=O.k.TRIANGLES,this.key=t.key,this._program=new Et(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t),this.reload=async i=>{if(i&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,A.f)(this._program),this._program=new Et(e.rctx,r.get().build(t),o),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=(0,A.f)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return(0,B.m)({blending:B.b,colorWrite:B.d})}}const At=(0,B.s)(O.a.ONE,O.a.ZERO,O.a.ONE,O.a.ONE_MINUS_SRC_ALPHA);function Mt(e){return e===re.FrontFace?null:At}function Rt(e){switch(e){case re.NONE:return B.p;case re.ColorAlpha:return At;case re.FrontFace:case re.COUNT:return null}}function Ct(e){if(e.draped)return null;switch(e.oitPass){case re.NONE:case re.FrontFace:return e.writeDepth?B.a:null;case re.ColorAlpha:case re.COUNT:return null}}const wt=5e5,It={factor:-1,units:-2};function Ot(e){return e?It:null}function Nt(e,t=O.f.LESS){return e===re.NONE||e===re.FrontFace?t:O.f.LEQUAL}function yt(e,t){const r=(0,p.q)(t);return e===re.ColorAlpha?r?{buffers:[O.h.COLOR_ATTACHMENT0,O.h.COLOR_ATTACHMENT1,O.h.COLOR_ATTACHMENT2]}:{buffers:[O.h.COLOR_ATTACHMENT0,O.h.COLOR_ATTACHMENT1]}:r?{buffers:[O.h.COLOR_ATTACHMENT0,O.h.COLOR_ATTACHMENT1]}:null}O.f.LESS,O.f.ALWAYS;const Pt={mask:255},Dt={function:{func:O.f.ALWAYS,ref:m.S.OutlineVisualElementMask,mask:m.S.OutlineVisualElementMask},operation:{fail:O.g.KEEP,zFail:O.g.KEEP,zPass:O.g.ZERO}},Lt={function:{func:O.f.ALWAYS,ref:m.S.OutlineVisualElementMask,mask:m.S.OutlineVisualElementMask},operation:{fail:O.g.KEEP,zFail:O.g.KEEP,zPass:O.g.REPLACE}};O.f.EQUAL,m.S.OutlineVisualElementMask,m.S.OutlineVisualElementMask,O.g.KEEP,O.g.KEEP,O.g.KEEP,O.f.NOTEQUAL,m.S.OutlineVisualElementMask,m.S.OutlineVisualElementMask,O.g.KEEP,O.g.KEEP,O.g.KEEP},89167:(e,t,r)=>{r.d(t,{T:()=>T,a:()=>v,b:()=>f,c:()=>u,d:()=>p,e:()=>d,u:()=>g,w:()=>l});var i=r(6407),o=r(32773),n=r(20266),a=r(52134),s=r(63338);const c=!!(0,o.h)("enable-feature:webgl-debug");function l(){return c}function d(){return c}function u(e){if(l()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;n.L.getLogger("esri.views.webgl.checkWebGLError").error(new i.A("webgl-error","WebGL error occurred",{message:r,stack:o}))}}}function h(e){switch(e){case a.D.BYTE:case a.D.UNSIGNED_BYTE:return 1;case a.D.SHORT:case a.D.UNSIGNED_SHORT:case a.D.HALF_FLOAT:return 2;case a.D.FLOAT:case a.D.INT:case a.D.UNSIGNED_INT:return 4}}function m(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function f(e,t,r,i,o=0){const n=e.gl;e.bindBuffer(r);for(const r of i){const i=t.get(r.name);if(null==i){console.warn(`There is no location for vertex attribute '${r.name}' defined.`);continue}const a=o*r.stride;if(r.count<=4)n.vertexAttribPointer(i,r.count,r.type,r.normalized,r.stride,r.offset+a),n.enableVertexAttribArray(i),r.divisor>0&&e.gl.vertexAttribDivisor(i,r.divisor);else if(9===r.count)for(let t=0;t<3;t++)n.vertexAttribPointer(i+t,3,r.type,r.normalized,r.stride,r.offset+12*t+a),n.enableVertexAttribArray(i+t),r.divisor>0&&e.gl.vertexAttribDivisor(i+t,r.divisor);else if(16===r.count)for(let t=0;t<4;t++)n.vertexAttribPointer(i+t,4,r.type,r.normalized,r.stride,r.offset+16*t+a),n.enableVertexAttribArray(i+t),r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count);if(l()){const t=m(e),i=h(r.type),o=r.offset,n=Math.round(i/o)!==i/o?`. Offset not a multiple of stride. DataType requires ${i} bytes, but descriptor has an offset of ${o}`:"";t&&console.error(`Unable to bind vertex attribute "${r.name}" with baseInstanceOffset ${a}${n}:`,t,r)}}}function g(e,t,r,i){const o=e.gl;e.bindBuffer(r);for(const r of i){const i=t.get(r.name);if(r.count<=4)o.disableVertexAttribArray(i),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i,0);else if(9===r.count)for(let t=0;t<3;t++)o.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else if(16===r.count)for(let t=0;t<4;t++)o.disableVertexAttribArray(i+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(i+t,0);else console.error("Unsupported vertex attribute element count: "+r.count)}e.unbindBuffer(a.B.ARRAY_BUFFER)}function p(e){switch(e){case a.d.ALPHA:case a.d.LUMINANCE:case a.d.RED:case a.d.RED_INTEGER:case a.S.R8:case a.S.R8I:case a.S.R8UI:case a.S.R8_SNORM:case a.n.STENCIL_INDEX8:return 1;case a.d.LUMINANCE_ALPHA:case a.d.RG:case a.d.RG_INTEGER:case a.S.RGBA4:case a.S.R16F:case a.S.R16I:case a.S.R16UI:case a.S.RG8:case a.S.RG8I:case a.S.RG8UI:case a.S.RG8_SNORM:case a.S.RGB565:case a.S.RGB5_A1:case a.n.DEPTH_COMPONENT16:return 2;case a.d.DEPTH_COMPONENT:case a.d.RGB:case a.d.RGB_INTEGER:case a.S.RGB8:case a.S.RGB8I:case a.S.RGB8UI:case a.S.RGB8_SNORM:case a.S.SRGB8:case a.n.DEPTH_COMPONENT24:return 3;case a.d.DEPTH_STENCIL:case a.d.DEPTH24_STENCIL8:case a.d.RGBA:case a.d.RGBA_INTEGER:case a.S.RGBA8:case a.S.R32F:case a.S.R11F_G11F_B10F:case a.S.RG16F:case a.S.R32I:case a.S.R32UI:case a.S.RG16I:case a.S.RG16UI:case a.S.RGBA8I:case a.S.RGBA8UI:case a.S.RGBA8_SNORM:case a.S.SRGB8_ALPHA8:case a.S.RGB9_E5:case a.S.RGB10_A2UI:case a.S.RGB10_A2:case a.n.DEPTH_STENCIL:case a.n.DEPTH_COMPONENT32F:case a.n.DEPTH24_STENCIL8:return 4;case a.n.DEPTH32F_STENCIL8:return 5;case a.S.RGB16F:case a.S.RGB16I:case a.S.RGB16UI:return 6;case a.S.RG32F:case a.S.RG32I:case a.S.RG32UI:case a.S.RGBA16F:case a.S.RGBA16I:case a.S.RGBA16UI:return 8;case a.S.RGB32F:case a.S.RGB32I:case a.S.RGB32UI:return 12;case a.S.RGBA32F:case a.S.RGBA32I:case a.S.RGBA32UI:return 16;case a.m.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.m.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.m.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.m.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.m.COMPRESSED_R11_EAC:case a.m.COMPRESSED_SIGNED_R11_EAC:case a.m.COMPRESSED_RGB8_ETC2:case a.m.COMPRESSED_SRGB8_ETC2:case a.m.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.m.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case a.m.COMPRESSED_RG11_EAC:case a.m.COMPRESSED_SIGNED_RG11_EAC:case a.m.COMPRESSED_RGBA8_ETC2_EAC:case a.m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class v{constructor(e=0,t=e){this.width=e,this.height=t,this.target=a.o.TEXTURE_2D,this.pixelFormat=a.d.RGBA,this.dataType=a.P.UNSIGNED_BYTE,this.samplingMode=a.c.LINEAR,this.wrapMode=a.T.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}class _ extends v{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case a.S.R16F:case a.S.R16I:case a.S.R16UI:case a.S.R32F:case a.S.R32I:case a.S.R32UI:case a.S.R8_SNORM:case a.S.R8:case a.S.R8I:case a.S.R8UI:this.pixelFormat=a.d.RED}}static validate(e,t){return new _(e,t)}}let T=class e{constructor(e,t=null,r=null){if(this.type=s.G.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=_.validate(e,t);if(!r)throw new i.A("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===a.o.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(e=this._descriptor).width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:p(e.internalFormat))*(e.target===a.o.TEXTURE_CUBE_MAP?6:1));var e}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(a.R.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.A("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===a.o.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=a.o.TEXTURE_CUBE_MAP_POSITIVE_X;t<=a.o.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,r){const o=this._descriptor.context?.gl;if(!o)return;u(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(a.R.Texture,this));const n=this._descriptor,s=r??n.target,c=M(s),l=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),x(n),this._configurePixelStorage(),u(o);const d=this._deriveInternalFormat();if(A(t)){let e="width"in t?t.width:t.codedWidth,r="height"in t?t.height:t.codedHeight;const i=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,r=t.videoHeight),n.width&&n.height,c&&n.depth,n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,d,n.hasMipmap,e,r,i),this._texImage(s,0,d,e,r,i,t),u(o),n.hasMipmap&&(this.generateMipmap(),u(o)),n.width||(n.width=e),n.height||(n.height=r),c&&!n.depth&&(n.depth=i)}else{const{width:e,height:r,depth:l}=n;if(null==e||null==r)throw new i.A("Width and height must be specified!");if(c&&null==l)throw new i.A("Depth must be specified!");if(n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,d,n.hasMipmap,e,r,l),S(t)){const c=t.levels,u=R(s,e,r,l),h=Math.min(u-1,c.length-1);o.texParameteri(n.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,h);const m=d;if(!(m in a.m))throw new i.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=c[Math.min(e,c.length-1)];this._compressedTexImage(s,e,m,t,r,i,o)}),h)}else this._texImage(s,0,d,e,r,l,t),u(o),n.hasMipmap&&this.generateMipmap()}b(o,this._descriptor),E(o,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),u(o),this._descriptor.context.bindTexture(l,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,r,o,n,a,s,c=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,d=this._deriveInternalFormat(),{context:u,pixelFormat:h,dataType:m,target:f,isImmutable:g}=l;if(g&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");const p=u.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||o<0||r+n>l.width||o+a>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:v}=u;c&&v.pixelStorei(v.UNPACK_SKIP_ROWS,c),A(s)?v.texSubImage2D(f,t,r,o,n,a,h,m,s):S(s)?v.compressedTexSubImage2D(f,t,r,o,n,a,d,s.levels[t]):v.texSubImage2D(f,t,r,o,n,a,h,m,s),c&&v.pixelStorei(v.UNPACK_SKIP_ROWS,0),u.bindTexture(p,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,r,o,n,a,s,c,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const d=this._descriptor,u=this._deriveInternalFormat(),{context:h,pixelFormat:m,dataType:f,isImmutable:g,target:p}=d;if(g&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");M(p)||console.warn("Attempting to set 3D texture data on a non-3D texture");const v=h.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);h.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||n<0||r+a>d.width||o+s>d.height||n+c>d.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:_}=h;if(S(l))l=l.levels[t],_.compressedTexSubImage3D(p,t,r,o,n,a,s,c,u,l);else{const e=l;_.texSubImage3D(p,t,r,o,n,a,s,c,m,f,e)}h.bindTexture(v,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,x(t)}t.samplingMode===a.c.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=a.c.LINEAR_MIPMAP_NEAREST):t.samplingMode===a.c.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=a.c.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,x(e)}e.samplingMode===a.c.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=a.c.LINEAR):e.samplingMode===a.c.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=a.c.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,x(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(b(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(E(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===a.d.DEPTH_STENCIL&&(this._descriptor.internalFormat=a.d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case a.P.FLOAT:switch(this._descriptor.pixelFormat){case a.d.RGBA:return this._descriptor.internalFormat=a.S.RGBA32F;case a.d.RGB:return this._descriptor.internalFormat=a.S.RGB32F;default:throw new i.A("Unable to derive format")}case a.P.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case a.d.RGBA:return this._descriptor.internalFormat=a.S.RGBA8;case a.d.RGB:return this._descriptor.internalFormat=a.S.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===a.d.DEPTH_STENCIL?a.d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,o,n,s){const{gl:c}=this._descriptor.context;if(!(t in a.S))throw new i.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=r?R(e,o,n,s):1;if(M(e)){if(null==s)throw new i.A("Missing depth dimension for 3D texture upload");c.texStorage3D(e,l,t,o,n,s)}else c.texStorage2D(e,l,t,o,n);this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,a,s){const c=this._descriptor.context.gl,l=M(e),{isImmutable:d,pixelFormat:u,dataType:h}=this._descriptor;if(d){if(null!=s){const r=s;if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.texSubImage3D(e,t,0,0,0,o,n,a,u,h,r)}else c.texSubImage2D(e,t,0,0,o,n,u,h,r)}}else{const d=s;if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.texImage3D(e,t,r,o,n,a,0,u,h,d)}else c.texImage2D(e,t,r,o,n,0,u,h,d)}}_compressedTexImage(e,t,r,o,n,a,s){const c=this._descriptor.context.gl,l=M(e);if(this._descriptor.isImmutable){if(null!=s)if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.compressedTexSubImage3D(e,t,0,0,0,o,n,a,r,s)}else c.compressedTexSubImage2D(e,t,0,0,o,n,r,s)}else if(l){if(null==a)throw new i.A("Missing depth dimension for 3D texture upload");c.compressedTexImage3D(e,t,r,o,n,a,0,s)}else c.compressedTexImage2D(e,t,r,o,n,0,s)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:o,depth:n,hasMipmap:s,target:c}=this._descriptor;const l=c===a.o.TEXTURE_3D;if(null==r||null==o||l&&null==n)throw new i.A("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,o,n),s&&(1!==r||1!==o||l&&1!==n)&&!(i>=t);++i)r=Math.max(1,r>>1),o=Math.max(1,o>>1),l&&(n=Math.max(1,n>>1))}};function x(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function b(e,t){let r=t.samplingMode,i=t.samplingMode;r===a.c.LINEAR_MIPMAP_NEAREST||r===a.c.LINEAR_MIPMAP_LINEAR?(r=a.c.LINEAR,t.hasMipmap||(i=a.c.LINEAR)):r!==a.c.NEAREST_MIPMAP_NEAREST&&r!==a.c.NEAREST_MIPMAP_LINEAR||(r=a.c.NEAREST,t.hasMipmap||(i=a.c.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function E(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function S(e){return null!=e&&"type"in e&&"compressed"===e.type}function A(e){return null!=e&&!S(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function M(e){return e===a.o.TEXTURE_3D||e===a.o.TEXTURE_2D_ARRAY}function R(e,t,r,i=1){let o=Math.max(t,r);return e===a.o.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}T.TEXTURE_UNIT_FOR_UPDATES=0},28063:(e,t,r)=>{r.d(t,{F:()=>u,T:()=>h,V:()=>m,a:()=>l});var i=r(63536),o=r(86145),n=r(84311),a=r(66573),s=r(97538);function c(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.b("nearFar",((e,t)=>t.camera.nearFar)))}function d(e){e.vertex.code.add(a.g`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:r}=e;switch(t.output){case i.S.Color:case i.S.ColorEmission:if(t.receiveShadows)return c(e),void r.code.add(a.g`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.S.Shadow:case i.S.ShadowHighlight:case i.S.ShadowExcludeHighlight:case i.S.ViewshedShadow:return e.include(o.V,t),c(e),l(e),d(e),void r.code.add(a.g`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.g`void forwardLinearDepth() {}`)}function h(e){d(e),e.vertex.code.add(a.g`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(a.g`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function m(e,t){t.hasVertexColors?(e.attributes.add(s.V.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(a.g`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(a.g`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(a.g`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},86145:(e,t,r)=>{r.d(t,{P:()=>d,V:()=>u,a:()=>m,b:()=>h});var i=r(88485),o=r(87162),n=r(2589),a=r(66573),s=r(97538),c=r(26442),l=r(63536);function d(e){e.attributes.add(s.V.POSITION,"vec3"),e.vertex.code.add(a.g`vec3 positionModel() { return position; }`)}function u(e,t){e.include(d);const r=e.vertex;r.include(c.D,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new l.F("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new l.F("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new l.M("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new l.a("transformProjFromView",(e=>e.transformProjFromView)),new c.M("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.b("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.b("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(a.g`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(a.g`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?a.g`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:a.g`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new l.F("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(a.g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(a.g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class h extends a.N{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}class m extends a.N{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.c)(),this.transformWorldFromModelTH=(0,n.c)(),this.transformWorldFromModelTL=(0,n.c)()}}},70101:(e,t,r)=>{r.d(t,{S:()=>d,V:()=>g,a:()=>v,b:()=>h,c:()=>u});var i=r(91276),o=r(62482),n=r(26809),a=r(2589),s=r(63536),c=r(66573),l=r(84311);function d(e){e.vertex.code.add(c.g`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(c.g`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(c.g`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(c.g`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(c.g`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(c.g`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function u(e){e.uniforms.add(new s.F("screenSizePerspective",(e=>m(e.screenSizePerspective))))}function h(e){e.uniforms.add(new s.F("screenSizePerspectiveAlignment",(e=>m(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function m(e){return(0,n.f)(f,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const f=(0,a.c)();function g(e,t){const r=e.vertex;t.hasVerticalOffset?(v(r),t.hasScreenSizePerspective&&(e.include(d),h(r),(0,l.c)(e.vertex,t)),r.code.add(c.g`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?c.g`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.g`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?c.g`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.g`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c.g`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=(0,o.c)();function v(e){e.uniforms.add(new l.F("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(p,n*s,a,r,o)})))}},83902:(e,t,r)=>{var i,o,n,a,s,c,l,d;r.d(t,{A:()=>l,C:()=>i,D:()=>o,O:()=>c,R:()=>n,S:()=>s,T:()=>d,a:()=>a}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(n||(n={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(c||(c={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(l||(l={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(d||(d={}))},93623:(e,t,r)=>{r.d(t,{b:()=>z,f:()=>v}),r(32773);var i=r(20266),o=r(16699),n=r(92080),a=r(47812),s=r(87162),c=r(26809),l=r(2589),d=r(48402),u=r(91695),h=r(31835),m=r(85914);const f=()=>i.L.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");function g(e=P){return{plane:(0,m.c)(e.plane),origin:(0,l.a)(e.origin),basis1:(0,l.a)(e.basis1),basis2:(0,l.a)(e.basis2)}}function p(e,t=g()){return v(e.origin,e.basis1,e.basis2,t)}function v(e,t,r,i=g()){return(0,c.i)(i.origin,e),(0,c.i)(i.basis1,t),(0,c.i)(i.basis2,r),_(i),o=i,n="fromValues()",Math.abs((0,c.d)(o.basis1,o.basis2)/((0,c.h)(o.basis1)*(0,c.h)(o.basis2)))>1e-6&&f().warn(n,"Provided basis vectors are not perpendicular"),Math.abs((0,c.d)(o.basis1,w(o)))>1e-6&&f().warn(n,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,c.d)(w(o),o.origin)-o.plane[3])>1e-6&&f().warn(n,"Plane offset is not consistent with plane origin"),i;var o,n}function _(e){(0,m.f)(e.basis2,e.basis1,e.origin,e.plane)}function T(e,t,r){e!==r&&p(e,r);const i=(0,c.s)(m.b.get(),w(e),t);return(0,c.g)(r.origin,r.origin,i),r.plane[3]-=t,r}function x(e,t=g()){const r=(e[2]-e[0])/2,i=(e[3]-e[1])/2;return(0,c.f)(t.origin,e[0]+r,e[1]+i,0),(0,c.f)(t.basis1,r,0,0),(0,c.f)(t.basis2,0,i,0),(0,m.d)(0,0,1,0,t.plane),t}function b(e,t,r){return!!(0,m.i)(e.plane,t,r)&&I(e,r)}function E(e,t,r){const i=D.get();y(e,t,i,D.get());let n=Number.POSITIVE_INFINITY;for(const a of G){const s=N(e,a,L.get()),l=m.b.get();if((0,m.e)(i,s,l)){const e=(0,c.p)(m.b.get(),t.origin,l),i=Math.abs((0,o.a)((0,c.d)(t.direction,e)));i<n&&(n=i,(0,c.i)(r,l))}}return n===Number.POSITIVE_INFINITY?S(e,t,r):r}function S(e,t,r){if(b(e,t,r))return r;const i=D.get(),o=D.get();y(e,t,i,o);let a=Number.POSITIVE_INFINITY;for(const s of G){const l=N(e,s,L.get()),d=m.b.get();if((0,m.h)(i,l,d)){const e=(0,n.d)(t,d);if(!(0,m.j)(o,d))continue;e<a&&(a=e,(0,c.i)(r,d))}}return R(e,t.origin)<a&&A(e,t.origin,r),r}function A(e,t,r){const i=(0,m.p)(e.plane,t,m.b.get()),o=(0,h.p)(O(e,e.basis1),i,-1,1,m.b.get()),n=(0,h.p)(O(e,e.basis2),i,-1,1,m.b.get());return(0,c.a)(r,(0,c.g)(m.b.get(),o,n),e.origin),r}function M(e,t,r){const{origin:i,basis1:o,basis2:n}=e,a=(0,c.a)(m.b.get(),t,i),s=(0,m.k)(o,a),l=(0,m.k)(n,a),d=(0,m.k)(w(e),a);return(0,c.f)(r,s,l,d)}function R(e,t){const r=M(e,t,m.b.get()),{basis1:i,basis2:o}=e,n=(0,c.h)(i),a=(0,c.h)(o),s=Math.max(Math.abs(r[0])-n,0),l=Math.max(Math.abs(r[1])-a,0),d=r[2];return s*s+l*l+d*d}function C(e,t){const r=-e.plane[3];return(0,m.k)(w(e),t)-r}function w(e){return(0,m.g)(e.plane)}function I(e,t){const r=(0,c.a)(m.b.get(),t,e.origin),i=(0,c.q)(e.basis1),o=(0,c.q)(e.basis2),n=(0,c.d)(e.basis1,r),a=(0,c.d)(e.basis2,r);return-n-i<0&&n-i<0&&-a-o<0&&a-o<0}function O(e,t){const r=L.get();return(0,c.i)(r.origin,e.origin),(0,c.i)(r.vector,t),r}function N(e,t,r){const{basis1:i,basis2:o,origin:n}=e,a=(0,c.s)(m.b.get(),i,t.origin[0]),s=(0,c.s)(m.b.get(),o,t.origin[1]);(0,c.g)(r.origin,a,s),(0,c.g)(r.origin,r.origin,n);const l=(0,c.s)(m.b.get(),i,t.direction[0]),d=(0,c.s)(m.b.get(),o,t.direction[1]);return(0,c.s)(r.vector,(0,c.g)(l,l,d),2),r}function y(e,t,r,i){const o=w(e);(0,m.f)(o,t.direction,t.origin,r),(0,m.f)((0,m.g)(r),o,t.origin,i)}const P={plane:(0,m.c)(),origin:(0,l.f)(0,0,0),basis1:(0,l.f)(1,0,0),basis2:(0,l.f)(0,1,0)},D=new n.O(m.c),L=new n.O(h.c),F=(0,l.c)(),B=new n.O((()=>g())),G=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],U=(0,s.c)(),V=(0,s.c)(),z=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:class{constructor(){this.plane=(0,m.c)(),this.origin=(0,l.c)(),this.basis1=(0,l.c)(),this.basis2=(0,l.c)()}},altitudeAt:C,axisAt:function(e,t,r,i){return function(e,t,r){switch(t){case u.A.X:(0,c.i)(r,e.basis1),(0,c.n)(r,r);break;case u.A.Y:(0,c.i)(r,e.basis2),(0,c.n)(r,r);break;case u.A.Z:(0,c.i)(r,w(e))}return r}(e,r,i)},cameraFrustumCoverage:function(e,t){return(t-e)/t},closestPoint:S,closestPointOnSilhouette:E,copy:p,copyWithoutVerify:function(e,t){(0,c.i)(t.origin,e.origin),(0,c.i)(t.basis1,e.basis1),(0,c.i)(t.basis2,e.basis2),(0,m.a)(t.plane,e.plane)},create:g,distance:function(e,t){return Math.sqrt(R(e,t))},distance2:R,distanceToSilhouette:function(e,t){let r=Number.NEGATIVE_INFINITY;for(const i of G){const o=N(e,i,L.get()),n=(0,h.d)(o,t);n>r&&(r=n)}return Math.sqrt(r)},elevate:T,equals:function(e,t){return(0,c.e)(e.basis1,t.basis1)&&(0,c.e)(e.basis2,t.basis2)&&(0,c.e)(e.origin,t.origin)},extrusionContainsPoint:function(e,t){return(0,m.j)(e.plane,t)&&I(e,t)},fromAABoundingRect:x,fromValues:v,getExtent:function(e,t){const r=e.basis1[0],i=e.basis2[1],[o,n]=e.origin;return(0,d.f)(o-r,n-i,o+r,n+i,t)},intersectRay:b,intersectRayClosestSilhouette:function(e,t,r){if(b(e,t,r))return r;const i=E(e,t,m.b.get());return(0,c.g)(r,t.origin,(0,c.s)(m.b.get(),t.direction,(0,c.o)(t.origin,i)/(0,c.h)(t.direction))),r},normal:w,projectPoint:A,projectPointLocal:M,rotate:function(e,t,r,i){return e!==i&&p(e,i),(0,a.f)(V,t,r),(0,c.m)(i.basis1,e.basis1,V),(0,c.m)(i.basis2,e.basis2,V),_(i),i},setAltitudeAt:function(e,t,r,i){const o=C(e,t),n=(0,c.s)(F,w(e),r-o);return(0,c.g)(i,t,n),i},setExtent:function(e,t,r){return x(t,r),T(r,C(e,e.origin),r),r},transform:function(e,t,r){return e!==r&&p(e,r),(0,a.i)(U,t),(0,a.t)(U,U),(0,c.m)(r.basis1,e.basis1,U),(0,c.m)(r.basis2,e.basis2,U),(0,c.m)((0,m.g)(r.plane),(0,m.g)(e.plane),U),(0,c.m)(r.origin,e.origin,t),(0,m.s)(r.plane,r.plane,r.origin),r},up:P,updateUnboundedPlane:_,wrap:function(e,t,r){const i=B.get();return i.origin=e,i.basis1=t,i.basis2=r,i.plane=(0,m.w)(0,0,0,0),_(i),i}},Symbol.toStringTag,{value:"Module"}))},19556:(e,t,r)=>{r.d(t,{d:()=>c});var i=r(32816),o=r(41390),n=r(29298),a=(r(32773),r(20266),r(69421));let s=class extends o.T{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,n.MZ)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LINE_WIREFRAMES",void 0),s=(0,i._)([(0,a.$)("esri.views.3d.support.debugFlags")],s);const c=new s},59902:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{a:()=>o,b:()=>n,e:()=>i});const a=new Float32Array(2)},66573:(e,t,r)=>{r.d(t,{I:()=>n,N:()=>i,g:()=>o});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function n(e,t,r=""){return e?t:r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},31835:(e,t,r)=>{r.d(t,{b:()=>u,c:()=>c,d:()=>d,f:()=>l,p:()=>h});var i=r(16699),o=r(92080),n=r(26809),a=r(2589),s=r(85914);function c(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function l(e,t,r=c()){return(0,n.i)(r.origin,e),(0,n.a)(r.vector,t,e),r}function d(e,t){const r=(0,n.a)(s.b.get(),t,e.origin),o=(0,n.d)(e.vector,r),a=(0,n.d)(e.vector,e.vector),c=(0,i.c)(o/a,0,1),l=(0,n.a)(s.b.get(),(0,n.s)(s.b.get(),e.vector,c),r);return(0,n.d)(l,l)}function u(e,t,r){return h(e,t,0,1,r)}function h(e,t,r,o,a){const{vector:c,origin:l}=e,d=(0,n.a)(s.b.get(),t,l),u=(0,n.d)(c,d)/(0,n.q)(c);return(0,n.s)(a,c,(0,i.c)(u,r,o)),(0,n.g)(a,a,e.origin)}(0,a.c)(),(0,a.c)(),new o.O((()=>c()))},40397:(e,t,r)=>{r.d(t,{a:()=>h,b:()=>s,c:()=>u,d:()=>m,m:()=>S,p:()=>c,s:()=>a});var i=r(83902),o=r(52134);function n(e,t,r=o.b.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.b.ADD,a=o.b.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}n(o.a.ZERO,o.a.ONE_MINUS_SRC_ALPHA),n(o.a.ONE,o.a.ZERO),n(o.a.ONE,o.a.ONE);const s=n(o.a.ONE,o.a.ONE_MINUS_SRC_ALPHA),c=a(o.a.SRC_ALPHA,o.a.ONE,o.a.ONE_MINUS_SRC_ALPHA,o.a.ONE_MINUS_SRC_ALPHA),l={face:o.F.BACK,mode:o.C.CCW},d={face:o.F.FRONT,mode:o.C.CCW},u=e=>e===i.C.Back?l:e===i.C.Front?d:null,h={zNear:0,zFar:1},m={r:!0,g:!0,b:!0,a:!0};function f(e){return R.intern(e)}function g(e){return w.intern(e)}function p(e){return O.intern(e)}function v(e){return y.intern(e)}function _(e){return D.intern(e)}function T(e){return F.intern(e)}function x(e){return G.intern(e)}function b(e){return V.intern(e)}function E(e){return H.intern(e)}function S(e){return j.intern(e)}class A{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function M(e){return"["+e.join(",")+"]"}const R=new A(C,(e=>({__tag:"Blending",...e})));function C(e){return e?M([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new A(I,(e=>({__tag:"Culling",...e})));function I(e){return e?M([e.face,e.mode]):null}const O=new A(N,(e=>({__tag:"PolygonOffset",...e})));function N(e){return e?M([e.factor,e.units]):null}const y=new A(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?M([e.func]):null}const D=new A(L,(e=>({__tag:"StencilTest",...e})));function L(e){return e?M([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const F=new A(B,(e=>({__tag:"DepthWrite",...e})));function B(e){return e?M([e.zNear,e.zFar]):null}const G=new A(U,(e=>({__tag:"ColorWrite",...e})));function U(e){return e?M([e.r,e.g,e.b,e.a]):null}const V=new A(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?M([e.mask]):null}const H=new A(W,(e=>({__tag:"DrawBuffers",...e})));function W(e){return e?M(e.buffers):null}const j=new A((function(e){return e?M([C(e.blending),I(e.culling),N(e.polygonOffset),P(e.depthTest),L(e.stencilTest),B(e.depthWrite),U(e.colorWrite),z(e.stencilWrite),W(e.drawBuffers)]):null}),(e=>({blending:f(e.blending),culling:g(e.culling),polygonOffset:p(e.polygonOffset),depthTest:v(e.depthTest),stencilTest:_(e.stencilTest),depthWrite:T(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:b(e.stencilWrite),drawBuffers:E(e.drawBuffers)})))},88275:(e,t,r)=>{r.d(t,{r:()=>o});var i=r(64604);async function o(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},78794:(e,t,r)=>{r.d(t,{b:()=>s});var i=r(92080),o=r(26809),n=r(2589),a=r(31835);function s(e,t,r){return(0,o.a)(c,t,e),(0,o.a)(l,r,e),.5*(0,o.h)((0,o.c)(c,c,l))}r(85914),new i.O(a.c),new i.O((()=>({p0:(0,n.c)(),p1:(0,n.c)(),p2:(0,n.c)()})));const c=(0,n.c)(),l=(0,n.c)()},64026:(e,t,r)=>{r.d(t,{g:()=>l}),r(47812);var i=r(26809),o=r(2589),n=r(5611),a=r(8844),s=r(23937);const c=new class{constructor(e=0){this.offset=e,this.sphere=(0,n.b)(),this.tmpVertex=(0,o.c)()}applyToVertex(e,t,r){const o=this.objectTransform.transform,n=(0,i.f)(d,e,t,r),a=(0,i.m)(n,n,o),s=this.offset/(0,i.h)(a);(0,i.k)(a,a,a,s);const c=this.objectTransform.inverse;return(0,i.m)(this.tmpVertex,a,c),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,i.h)(e);(0,i.k)(e,e,e,r);const o=this.offset/(0,i.h)(t);(0,i.k)(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,i.h)((0,n.g)(e)),r=this.offset/t;return(0,i.k)((0,n.g)(this.sphere),(0,n.g)(e),(0,n.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function l(e){return null!=e?(c.offset=e,c):null}new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,o.c)(),this._tmpMbs=(0,n.b)(),this._tmpObb=new s.O,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,i.h)(e)}applyToVertex(e,t,r){const o=(0,i.f)(d,e,t,r),n=(0,i.f)(u,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/(0,i.h)(n);return(0,i.k)(this._tmpVertex,o,n,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],o=e[2]+t,n=e[3],a=e[4],s=e[5]+t,c=Math.abs(r),l=Math.abs(i),d=Math.abs(o),u=Math.abs(n),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*n))*Math.min(c,u),g=.5*(1+Math.sign(i*a))*Math.min(l,h),p=.5*(1+Math.sign(o*s))*Math.min(d,m),v=Math.max(c,u),_=Math.max(l,h),T=Math.max(d,m),x=Math.sqrt(f*f+g*g+p*p),b=Math.sign(c+r),E=Math.sign(l+i),S=Math.sign(d+o),A=Math.sign(u+n),M=Math.sign(h+a),R=Math.sign(m+s),C=this._totalOffset;if(x<C)return e[0]-=(1-b)*C,e[1]-=(1-E)*C,e[2]-=(1-S)*C,e[3]+=A*C,e[4]+=M*C,e[5]+=R*C,e;const w=C/Math.sqrt(v*v+_*_+T*T),I=C/x,O=I-w,N=-O;return e[0]+=r*(b*N+I),e[1]+=i*(E*N+I),e[2]+=o*(S*N+I),e[3]+=n*(A*O+w),e[4]+=a*(M*O+w),e[5]+=s*(R*O+w),e}applyToMbs(e){const t=(0,i.h)((0,n.g)(e)),r=this._totalOffset/t;return(0,i.k)((0,n.g)(this._tmpMbs),(0,n.g)(e),(0,n.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,s.c)(e,this._totalOffset,this._totalOffset,a.V.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,o.c)()}applyToVertex(e,t,r){const o=(0,i.f)(d,e,t,r),n=(0,i.g)(u,o,this.localOrigin),a=this.offset/(0,i.h)(n);return(0,i.k)(this.tmpVertex,o,n,a),this.tmpVertex}applyToAabb(e){const t=h,r=m,i=f;for(let o=0;o<3;++o)t[o]=e[0+o]+this.localOrigin[o],r[o]=e[3+o]+this.localOrigin[o],i[o]=t[o];const o=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=o[t],e[t+3]=o[t];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let o=0;o<3;++o)i[o]=e&1<<o?r[o]:t[o];n(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let o=0;o<3;++o)i[o]=a&1<<o?0:e&1<<o?t[o]:r[o];n(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const d=(0,o.c)(),u=(0,o.c)(),h=(0,o.c)(),m=(0,o.c)(),f=(0,o.c)()},23107:(e,t,r)=>{var i,o,n;r.d(t,{OG:()=>o,hM:()=>i}),r(29222),r(47387),r(16699),r(47812),r(18527),r(2589),r(69763),r(32773),r(93804),r(90740),r(20266),r(18683),r(64604),r(29512),r(99063),r(6407),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959),r(46728),(n=i||(i={})).OPAQUE="opaque-color",n.TRANSPARENT="transparent-color",n.COMPOSITE="composite-color",n.FINAL="final-color",function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(o||(o={}))},35778:(e,t,r)=>{r.d(t,{A:()=>h});var i=r(32816),o=r(41390),n=r(6407),a=r(67321),s=r(29298),c=r(69421),l=r(23107),d=r(83902);r(32773),r(20266),r(90740),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(73067),r(17745),r(81272),r(36544),r(44945),r(29222),r(16699),r(47812),r(18527),r(2589),r(47387),r(69763),r(93804),r(18683),r(64604),r(29512),r(99063),r(99924),r(46728);let u=class extends o.T{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=l.hM.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,a.wB)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),a.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new n.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===d.R.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,i._)([(0,s.MZ)({constructOnly:!0})],u.prototype,"view",void 0),(0,i._)([(0,s.MZ)({constructOnly:!0})],u.prototype,"consumes",void 0),(0,i._)([(0,s.MZ)()],u.prototype,"produces",void 0),u=(0,i._)([(0,c.$)("esri.views.3d.webgl.RenderNode")],u);const h=u}}]);