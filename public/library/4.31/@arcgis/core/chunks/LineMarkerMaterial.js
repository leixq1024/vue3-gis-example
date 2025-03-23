/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{f as e,F as t,m as r}from"./vec3.js";import{c as i}from"./vec3f64.js";import{n as a}from"./InterleavedLayout.js";import{S as s,a as n,c as o,i as c,d as l,e as p}from"./Matrix4PassUniform.js";import{a as d}from"./AlphaCutoff.js";import{G as h}from"./GLTextureMaterial.js";import{M as v,R as m}from"./Material.js";import{S as u,d as f,b as S,F as T,e as g,g as P,t as A,j as O,o as _,h as y,C as E,O as R,k as w,l as x,m as L,p as z,q as C,r as N,s as I,u as b,v as D,w as M,x as U,y as k,z as W,A as j,i as F,V}from"./StencilUtils.js";import{V as B}from"./VertexAttribute.js";import{L as $,a as G,M as H,b as Z,m as q,c as Y,d as Q,e as J,C as K}from"./RibbonLineMaterial.js";import{R as X}from"./RgbaFloatEncoding.glsl.js";import{g as ee}from"./interfaces3.js";import{l as te}from"./enums.js";import{m as re,d as ie,p as ae}from"./renderState.js";const se=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new u,r=e.terrainDepthTest&&e.output===s.Color,i=e.space===$.World;t.include(G,e),t.include(H,e);const{vertex:a,fragment:c}=t;return c.include(X),f(a,e),t.attributes.add(B.POSITION,"vec3"),t.attributes.add(B.PREVPOSITION,"vec3"),t.attributes.add(B.UV0,"vec2"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vUV","vec2"),t.varyings.add("vSize","float"),r&&t.varyings.add("depth","float"),e.hasTip&&t.varyings.add("vLineWidth","float"),a.uniforms.add(new S("nearFar",((e,t)=>t.camera.nearFar)),new T("viewport",((e,t)=>t.camera.fullViewport))),a.code.add(ee`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),a.code.add(ee`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),i?(t.attributes.add(B.NORMAL,"vec3"),g(a),a.constants.add("tiltThreshold","float",.7),a.code.add(ee`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):a.code.add(ee`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),a.code.add(ee`
      #define vecN ${i?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${i?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===Z.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===$.Screen&&(a.uniforms.add(new n("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix))),a.code.add(ee`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),a.code.add(ee`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),a.uniforms.add(new o("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),a.code.add(ee`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),P(a),a.main.add(ee`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${i?ee`${e.hideOnShortSegments?ee`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:ee`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${e.space===$.Screen?ee`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${r?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${i?"":"vUV *= displacedPosScreen.w;"}
      ${e.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),r&&t.include(A,e),t.include(O,e),t.include(_,e),c.uniforms.add(new T("intrinsicColor",(e=>e.color)),new y("tex",(e=>e.markerTexture))),c.include(E),c.constants.add("texelSize","float",1/q),c.code.add(ee`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&c.constants.add("relativeMarkerSize","float",Y/q).constants.add("relativeTipLineWidth","float",Q).code.add(ee`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${i?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),t.include(R,e),c.main.add(ee`
    discardBySlice(vpos);
    ${r?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${i?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),t}},Symbol.toStringTag,{value:"Module"}));class ne extends w{constructor(e,t,r){super(e,t,new x(se,(()=>Promise.resolve().then((()=>se)))),r,oe)}_makePipelineState(e,t){const{output:r,oitPass:i,space:a,hasOccludees:n}=e;return re({blending:r===s.Color?L(i):null,depthTest:a===$.Draped?null:{func:z(i)},depthWrite:C(e),drawBuffers:r===s.Depth?{buffers:[te.NONE]}:N(i,r),colorWrite:ie,stencilWrite:n?I:null,stencilTest:n?t?b:D:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=re({blending:ae,depthTest:M,depthWrite:null,colorWrite:ie,stencilWrite:null,stencilTest:U}),this._occluderPipelineOpaque=re({blending:ae,depthTest:M,depthWrite:null,colorWrite:ie,stencilWrite:k,stencilTest:W}),this._occluderPipelineMaskWrite=re({blending:null,depthTest:j,depthWrite:null,colorWrite:null,stencilWrite:I,stencilTest:b})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===F.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===F.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const oe=new Map([[B.POSITION,0],[B.PREVPOSITION,1],[B.UV0,2],[B.NORMAL,3],[B.COLOR,4],[B.COLORFEATUREATTRIBUTE,4],[B.SIZE,5],[B.SIZEFEATUREATTRIBUTE,5],[B.OPACITYFEATUREATTRIBUTE,6]]);class ce extends v{constructor(e){super(e,pe),this._configuration=new J,this.vertexAttributeLocations=oe,this.produces=new Map([[F.OPAQUE_MATERIAL,e=>e===s.Highlight||c(e)&&this.parameters.renderOccluded===m.OccludeAndTransparentStencil],[F.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>l(e)],[F.OCCLUDER_MATERIAL,e=>p(e)&&this.parameters.renderOccluded===m.OccludeAndTransparentStencil],[F.TRANSPARENT_OCCLUDER_MATERIAL,e=>p(e)&&this.parameters.renderOccluded===m.OccludeAndTransparentStencil],[F.TRANSPARENT_MATERIAL,e=>c(e)&&this.parameters.writeDepth],[F.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>c(e)&&!this.parameters.writeDepth],[F.DRAPED_MATERIAL,e=>e===s.Color||e===s.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===F.DRAPED_MATERIAL?$.Draped:this.parameters.worldSpace?$.World:$.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==K.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===m.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=d}intersect(){}createLayout(){const e=a().vec3f(B.POSITION).vec3f(B.PREVPOSITION).vec2f(B.UV0);return this.parameters.worldSpace&&e.vec3f(B.NORMAL),this.parameters.vvSize?e.f32(B.SIZEFEATUREATTRIBUTE):e.f32(B.SIZE),this.parameters.vvColor?e.f32(B.COLORFEATUREATTRIBUTE):e.vec4f(B.COLOR),this.parameters.vvOpacity&&e.f32(B.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new de(this._layout,this.parameters)}createGLMaterial(e){return new le(e)}}class le extends h{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(ne,e)}}class pe extends V{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=K.BUTT,this.anchor=Z.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class de{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(i,a,s,n,o,c){const l=s.get(B.POSITION).data,p=l.length/3;let d=[1,0,0];const h=s.get(B.NORMAL);this._parameters.worldSpace&&null!=h&&(d=h.data);let v=1,m=0;this._parameters.vvSize?m=s.get(B.SIZEFEATUREATTRIBUTE).data[0]:s.has(B.SIZE)&&(v=s.get(B.SIZE).data[0]);let u=[1,1,1,1],f=0;this._parameters.vvColor?f=s.get(B.COLORFEATUREATTRIBUTE).data[0]:s.has(B.COLOR)&&(u=s.get(B.COLOR).data);let S=0;this._parameters.vvOpacity&&(S=s.get(B.OPACITYFEATUREATTRIBUTE).data[0]);const T=new Float32Array(o.buffer);let g=c*(this.vertexBufferLayout.stride/4);const P=(e,t,r,i)=>{if(T[g++]=e[0],T[g++]=e[1],T[g++]=e[2],T[g++]=t[0],T[g++]=t[1],T[g++]=t[2],T[g++]=r[0],T[g++]=r[1],this._parameters.worldSpace&&(T[g++]=d[0],T[g++]=d[1],T[g++]=d[2]),this._parameters.vvSize?T[g++]=m:T[g++]=v,this._parameters.vvColor)T[g++]=f;else{const e=Math.min(4*i,u.length-4);T[g++]=u[e],T[g++]=u[e+1],T[g++]=u[e+2],T[g++]=u[e+3]}this._parameters.vvOpacity&&(T[g++]=S)};let A;!function(e){e[e.ASCENDING=1]="ASCENDING",e[e.DESCENDING=-1]="DESCENDING"}(A||(A={}));const O=(a,s)=>{const n=e(he,l[3*a],l[3*a+1],l[3*a+2]),o=ve;let c=a+s;do{e(o,l[3*c],l[3*c+1],l[3*c+2]),c+=s}while(t(n,o)&&c>=0&&c<p);i&&(r(n,n,i),r(o,o,i)),P(n,o,[-1,-1],a),P(n,o,[1,-1],a),P(n,o,[1,1],a),P(n,o,[-1,-1],a),P(n,o,[1,1],a),P(n,o,[-1,1],a)},_=this._parameters.placement;"begin"!==_&&"begin-end"!==_||O(0,A.ASCENDING),"end"!==_&&"begin-end"!==_||O(p-1,A.DESCENDING)}}const he=i(),ve=i();export{ce as L};
