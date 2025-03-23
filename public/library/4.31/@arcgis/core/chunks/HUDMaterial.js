/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as e,d as t}from"./mathUtils.js";import{f as o}from"./mat3.js";import{c as i}from"./mat3f64.js";import{i as a}from"./mat4.js";import{c as r}from"./mat4f64.js";import{m as s,g as n,r as l}from"./vec2.js";import{c,f as d}from"./vec2f64.js";import{f as p,m as f,n as u,a as h,s as m,i as g,h as v,o as S,g as b,x as C,d as O}from"./vec3.js";import{c as x,f as P}from"./vec3f64.js";import{Z as A,f as T,b as z,c as y,d as E}from"./vec4f64.js";import{c as j}from"./aaBoundingRect.js";import{o as F}from"./BufferView.js";import{t as D,S as I,j as w,B as R,D as _,C as L,F as B,b as N,g as M,h as U,O as V,E as $,k as H,l as q,M as G,r as W,I as k,J as X,K as Y,i as Z,Q as J}from"./StencilUtils.js";import{d as Q}from"./debugFlags2.js";import{n as K}from"./InterleavedLayout.js";import{c as ee,S as te,j as oe,o as ie}from"./Matrix4PassUniform.js";import{A as ae,H as re,a as se,b as ne}from"./HUDVisibility.glsl.js";import{a as le}from"./AlphaCutoff.js";import{G as ce,a as de}from"./GLTextureMaterial.js";import{M as pe,c as fe,d as ue,p as he,v as me,R as ge}from"./Material.js";import{a as ve}from"./Util.js";import{V as Se}from"./VertexAttribute.js";import{b as be,c as Ce,d as Oe,w as xe,e as Pe,f as Ae,g as Te}from"./RayIntersections.js";import{h as ze}from"./unitUtils.js";import{g as ye,I as Ee}from"./interfaces3.js";import{R as je}from"./RgbaFloatEncoding.glsl.js";import{S as Fe,c as De,b as Ie}from"./VerticalOffset.glsl.js";import{F as we}from"./Float4DrawUniform.js";import{k as Re,f as _e}from"./enums.js";import{a as Le,m as Be,b as Ne,d as Me}from"./renderState.js";import{_ as Ue}from"./tslib.es6.js";import{p as Ve}from"./ShaderTechniqueConfiguration.js";class $e{constructor(){this.factor=new He,this.factorAlignment=new He}}class He{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function qe(e,t){const{vertex:o,fragment:i}=e;e.include(D,t),o.include(ae),t.terrainDepthTest&&e.varyings.add("depth","float"),o.main.add(ye`
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.terrainDepthTest?ye`depth = projectAux.posView.z;`:""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  `),i.main.add(ye`fragColor = vec4(1);
if(terrainDepthTest(depth)) {
fragColor.g = 0.5;
}`)}const Ge={occludedFadeFactor:.6};function We(e){return e.outlineColor[3]>0&&e.outlineSize>0}function ke(e,t=Xe){var o,i,a;return e.textureIsSignedDistanceField?(o=e.anchorPosition,a=t,null!=(i=e.distanceFieldBoundingBox)?n(a,o[0]*(i[2]-i[0])+i[0],o[1]*(i[3]-i[1])+i[1]):n(a,0,0)):s(t,e.anchorPosition),t}const Xe=c(),Ye=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new I,o=e.signedDistanceFieldEnabled;if(t.include(re,e),t.include(w,e),e.occlusionPass)return t.include(qe,e),t;const{vertex:i,fragment:a}=t;t.include(Fe),t.include(R,e),t.include(_,e),t.include(se),a.include(je),a.include(L),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),t.varyings.add("voccluded","float"),i.uniforms.add(new B("viewport",((e,t)=>t.camera.fullViewport)),new N("screenOffset",((e,t)=>n(Xe,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new N("anchorPosition",(e=>ke(e))),new B("materialColor",(e=>e.color)),new ee("materialRotation",(e=>e.rotation))),M(i),o&&(i.uniforms.add(new B("outlineColor",(e=>e.outlineColor))),a.uniforms.add(new B("outlineColor",(e=>We(e)?e.outlineColor:A)),new ee("outlineSize",(e=>We(e)?e.outlineSize:0)))),e.horizonCullingEnabled&&i.uniforms.add(new we("pointDistanceSphere",((e,t)=>{const o=t.camera.eye,i=e.origin;return T(i[0]-o[0],i[1]-o[1],i[2]-o[2],ze.radius)}))),e.pixelSnappingEnabled&&i.include(ae),e.hasScreenSizePerspective&&(De(i),Ie(i)),e.debugDrawLabelBorder&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(Se.UV0,"vec2"),t.attributes.add(Se.COLOR,"vec4"),t.attributes.add(Se.SIZE,"vec2"),t.attributes.add(Se.ROTATION,"float"),t.attributes.add(Se.FEATUREATTRIBUTE,"vec4"),i.code.add(e.horizonCullingEnabled?ye`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return  b > 0.0 && b < a && b * b  > a * c;
}`:ye`bool behindHorizon(vec3 posModel) { return false; }`),i.main.add(ye`
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      if (behindHorizon(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }

      vec2 inputSize;
      ${Ee(e.hasScreenSizePerspective,ye`
          inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
          vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,ye`
          inputSize = size;
          vec2 screenOffsetScaled = screenOffset;`)}
      ${Ee(e.vvSize,ye`inputSize *= vvScale(featureAttribute).xx;`)}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=ye`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = (uv01 - anchorPosition) * 2.0 * combinedSize;

      ${Ee(e.hasRotation,ye`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,s=e.pixelSnappingEnabled?o?ye`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:ye`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:ye`posProj += quadOffset;`;i.main.add(ye`
    ${Ee(e.occlusionTestEnabled,ye`
      if (!visible) {
        vtc = vec2(0.0);
        ${Ee(e.debugDrawLabelBorder,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
        return;
      }`)}
    ${r}
    ${e.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${Ee(e.output===te.ObjectAndLayerIdColor,ye`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${ye.float(le)};
    ${Ee(o,`alphaDiscard = alphaDiscard && outlineColor.a < ${ye.float(le)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${s}
      gl_Position = posProj;
    }

    vtc = uv;

    ${Ee(e.debugDrawLabelBorder,ye`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),a.uniforms.add(new U("tex",(e=>e.texture))),e.occludedFragmentFade&&(a.uniforms.add(new U("depthMap",((e,t)=>t.mainDepth))),a.uniforms.add(new ee("fadeFactor",(()=>Ge.occludedFadeFactor))));const l=e.debugDrawLabelBorder?ye`(isBorder > 0.0 ? 0.0 : ${ye.float(le)})`:ye.float(le),c=e.output===te.Highlight,d=ye`
    ${Ee(e.debugDrawLabelBorder,ye`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    ${Ee(e.sampleSignedDistanceFieldTexelCenter,ye`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;`,ye`vec2 samplePos = vtc;`)}

    ${o?ye`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${l} ||
          fillPixelColor.a + outlinePixelColor.a < ${ye.float(le)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${Ee(!c,ye`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${l}) {
          discard;
        }

        ${Ee(!c,ye`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:ye`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${l}) {
            discard;
          }
          ${Ee(!c,ye`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${Ee(e.occludedFragmentFade&&!c,ye`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= fadeFactor;
        }
        `)}

    ${Ee(!c&&e.debugDrawLabelBorder,ye`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(e.output){case te.Color:e.oitPass===$.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),a.main.add(ye`
        ${d}
        ${Ee(e.oitPass===$.FrontFace,ye`fragColor.rgb /= fragColor.a;`)}
        ${Ee(e.oitPass===$.ColorAlpha,ye`fragAlpha = fragColor.a;`)}`);break;case te.ObjectAndLayerIdColor:a.main.add(ye`
        ${d}
        outputObjectAndLayerIdColor();`);break;case te.Highlight:t.include(V,e),a.main.add(ye`
        ${d}
        outputHighlight(voccluded == 1.0);`)}return t},calculateAnchorPosForRendering:ke,shaderSettings:Ge},Symbol.toStringTag,{value:"Module"}));class Ze extends H{constructor(e,t,o){super(e,t,new q(Ye,(()=>Promise.resolve().then((()=>Ye)))),o),this.primitiveType=t.occlusionPass?Re.POINTS:Re.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:o,draped:i,output:a,depthTestEnabled:r}=e,s=t===$.NONE,n=o?Je:null,l=t===$.ColorAlpha,c=i||!r||l||a===te.Highlight?null:Le;return Be({blending:a===te.Color?s?Ne:G(t):null,depthTest:r&&!i?{func:_e.LEQUAL}:null,depthWrite:c,drawBuffers:W(t,a),colorWrite:Me,polygonOffset:n})}}const Je={factor:0,units:-4};class Qe extends k{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.textureCoordinateType=X.None,this.emissionSource=Y.None,this.discardInvisibleFragments=!0,this.hasSliceInVertexProgram=!0,this.hasVvInstancing=!1}}Ue([Ve()],Qe.prototype,"screenCenterOffsetUnitsEnabled",void 0),Ue([Ve()],Qe.prototype,"occlusionTestEnabled",void 0),Ue([Ve()],Qe.prototype,"signedDistanceFieldEnabled",void 0),Ue([Ve()],Qe.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),Ue([Ve()],Qe.prototype,"vvSize",void 0),Ue([Ve()],Qe.prototype,"vvColor",void 0),Ue([Ve()],Qe.prototype,"hasVerticalOffset",void 0),Ue([Ve()],Qe.prototype,"hasScreenSizePerspective",void 0),Ue([Ve()],Qe.prototype,"hasRotation",void 0),Ue([Ve()],Qe.prototype,"debugDrawLabelBorder",void 0),Ue([Ve()],Qe.prototype,"hasSlicePlane",void 0),Ue([Ve()],Qe.prototype,"hasPolygonOffset",void 0),Ue([Ve()],Qe.prototype,"depthTestEnabled",void 0),Ue([Ve()],Qe.prototype,"pixelSnappingEnabled",void 0),Ue([Ve()],Qe.prototype,"draped",void 0),Ue([Ve()],Qe.prototype,"terrainDepthTest",void 0),Ue([Ve()],Qe.prototype,"cullAboveTerrain",void 0),Ue([Ve()],Qe.prototype,"occlusionPass",void 0),Ue([Ve()],Qe.prototype,"occludedFragmentFade",void 0),Ue([Ve()],Qe.prototype,"objectAndLayerIdColorInstanced",void 0),Ue([Ve()],Qe.prototype,"horizonCullingEnabled",void 0);class Ke extends pe{constructor(e,t){super(e,xt),this.produces=new Map([[Z.HUD_MATERIAL,e=>oe(e)&&!this.parameters.drawInSecondSlot],[Z.LABEL_MATERIAL,e=>oe(e)&&this.parameters.drawInSecondSlot],[Z.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[Z.DRAPED_MATERIAL,e=>this.parameters.draped&&oe(e)]]),this._visible=!0,this._configuration=new Qe(t)}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===Z.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===Z.OCCLUSION_PIXELS,e===te.Color&&(this._configuration.debugDrawLabelBorder=!!Q.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,i,r,s,n){const{options:{selectionMode:l,hud:c,excludeLabels:d},point:b,camera:C}=i,{parameters:O}=this;if(!l||!c||d&&O.isLabel||!e.visible||!b)return;const{scaleX:P,scaleY:A}=this._getScreenScale(e,C.pixelRatio);o(pt,t),e.attributes.has(Se.FEATUREATTRIBUTE)&&function(e){const t=e[0],o=e[1],i=e[2],a=e[3],r=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+o*o+i*i),p=1/Math.sqrt(a*a+r*r+s*s),f=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=o*d,e[2]=i*d,e[3]=a*p,e[4]=r*p,e[5]=s*p,e[6]=n*f,e[7]=l*f,e[8]=c*f}(pt);const T=e.attributes.get(Se.POSITION),z=e.attributes.get(Se.SIZE),y=e.attributes.get(Se.NORMAL),E=e.attributes.get(Se.ROTATION),j=e.attributes.get(Se.CENTEROFFSETANDDISTANCE);ve(T.size>=3);const F=ke(O),D="screen"===this.parameters.centerOffsetUnits;for(let e=0;e<T.data.length/T.size;e++){const o=e*T.size;p(at,T.data[o],T.data[o+1],T.data[o+2]),f(at,at,t),f(at,at,C.viewMatrix);const r=e*j.size;if(p(ht,j.data[r],j.data[r+1],j.data[r+2]),!D&&(at[0]+=ht[0],at[1]+=ht[1],0!==ht[2])){const e=ht[2];u(ht,at),h(at,at,m(ht,ht,e))}const s=e*y.size;if(p(rt,y.data[s],y.data[s+1],y.data[s+2]),tt(rt,pt,C,vt),this._applyVerticalOffsetTransformationView(at,vt,C,it),C.applyProjection(at,st),st[0]>-1){D&&(ht[0]||ht[1])&&(st[0]+=ht[0]*C.pixelRatio,0!==ht[1]&&(st[1]+=fe(ht[1],it.factorAlignment)*C.pixelRatio),C.unapplyProjection(st,at)),st[0]+=this.parameters.screenOffset[0]*C.pixelRatio,st[1]+=this.parameters.screenOffset[1]*C.pixelRatio,st[0]=Math.floor(st[0]),st[1]=Math.floor(st[1]);const t=e*z.size;Ct[0]=z.data[t],Ct[1]=z.data[t+1],ue(Ct,it.factor,Ct);const o=St*C.pixelRatio;let r=0;O.textureIsSignedDistanceField&&(r=Math.min(O.outlineSize,.5*Ct[0])*C.pixelRatio/2),Ct[0]*=P,Ct[1]*=A;const s=e*E.size,l=O.rotation+E.data[s];if(ot(b,st[0],st[1],Ct,o,r,l,O,F)){const e=i.ray;if(f(lt,at,a(ut,C.viewMatrix)),st[0]=b[0],st[1]=b[1],C.unprojectFromRenderScreen(st,at)){const t=x();g(t,e.direction);const o=1/v(t);m(t,t,o),n(S(e.origin,at)*o,t,-1,!0,1,lt)}}}}}intersectDraped(e,t,o,i,a,r){const s=e.attributes.get(Se.POSITION),n=e.attributes.get(Se.SIZE),l=e.attributes.get(Se.ROTATION),c=this.parameters,d=ke(c),{scaleX:p,scaleY:f}=this._getScreenScale(e,e.screenToWorldRatio),u=bt*e.screenToWorldRatio;for(let t=0;t<s.data.length/s.size;t++){const o=t*s.size,h=s.data[o],m=s.data[o+1],g=t*n.size;Ct[0]=n.data[g],Ct[1]=n.data[g+1];let v=0;c.textureIsSignedDistanceField&&(v=Math.min(c.outlineSize,.5*Ct[0])*e.screenToWorldRatio/2),Ct[0]*=p,Ct[1]*=f;const S=t*l.size,b=c.rotation+l.data[S];ot(i,h,m,Ct,u,v,b,c,d)&&a(r.dist,r.normal,-1,!1)}}createBufferWriter(){return new Tt}_updateScaleInfo(e,t,o){const i=this.parameters;null!=i.screenSizePerspective?he(o,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),null!=i.screenSizePerspectiveAlignment?he(o,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,t,o,i,a,r,s){const n=tt(t,o,a,vt);return this._applyVerticalGroundOffsetView(e,n,a,s),this._applyVerticalOffsetTransformationView(s,n,a,r),this._applyPolygonOffsetView(s,n,i[3],a,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,o,i,a){return this._applyCenterOffsetNDC(e,t,o,i),null!=a&&g(a,i),this._applyPolygonOffsetNDC(i,t,o,i),i}_applyPolygonOffsetView(t,o,i,a,r){const s=a.aboveGround?1:-1;let n=Math.sign(i);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return g(r,t);const c=e(Math.abs(o.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/a.viewport[2];return m(r,t,l>0?d:1/d),r}_applyVerticalGroundOffsetView(e,t,o,i){const a=v(e),r=o.aboveGround?1:-1,s=o.computeRenderPixelSizeAtDist(a)*ne,n=m(at,t.normal,r*s);return b(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,o,i){const a=this.parameters;if(!a.verticalOffset?.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const o=v(e);this._updateScaleInfo(i,o,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const r=v(e),s=a.screenSizePerspectiveAlignment??a.screenSizePerspective,n=me(o,r,a.verticalOffset,t.cosAngle,s);return this._updateScaleInfo(i,r,t.cosAngle),m(t.normal,t.normal,n),b(e,e,t.normal)}_applyCenterOffsetView(e,t,o){const i="screen"!==this.parameters.centerOffsetUnits;return o!==e&&g(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(u(rt,o),b(o,o,m(rt,rt,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const a="screen"!==this.parameters.centerOffsetUnits;return i!==e&&g(i,e),a||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const a=this.parameters.shaderPolygonOffset;if(e!==i&&g(i,e),a){const e=o.aboveGround?1:-1,r=e*Math.sign(t[3]);i[2]-=(r||e)*a}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:o}=this.parameters,i=e[3]>=le||t>=le&&o[3]>=le;return this._visible&&i}createGLMaterial(e){return new et(e)}calculateRelativeScreenBounds(e,t,o=j()){return function(e,t,o,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*o,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*o}(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}_getScreenScale(e,t){const o=e.attributes.get(Se.FEATUREATTRIBUTE);if(null==o)return{scaleX:t,scaleY:t};const i=z(o.data,gt);return J(mt,this.parameters,i),{scaleX:mt[0]*t,scaleY:mt[1]*t}}}class et extends ce{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(Ze,e)}}function tt(e,t,i,a){return(function(e){return e instanceof Float32Array&&e.length>=16}(r=t)||function(e){return Array.isArray(e)&&e.length>=16}(r))&&(t=o(ft,t)),C(a.normal,e,t),f(a.normal,a.normal,i.viewInverseTransposeMatrix),a.cosAngle=O(nt,Ot),a;var r}function ot(e,o,i,a,r,s,c,d,p){let f=o-r-a[0]*p[0],u=f+a[0]+2*r,h=i-r-a[1]*p[1],m=h+a[1]+2*r;const g=d.distanceFieldBoundingBox;return d.textureIsSignedDistanceField&&null!=g&&(f+=a[0]*g[0],h+=a[1]*g[1],u-=a[0]*(1-g[2]),m-=a[1]*(1-g[3]),f-=s,u+=s,h-=s,m+=s),n(dt,o,i),l(ct,e,dt,t(c)),ct[0]>f&&ct[0]<u&&ct[1]>h&&ct[1]<m}const it=new $e,at=x(),rt=x(),st=y(),nt=x(),lt=x(),ct=c(),dt=c(),pt=i(),ft=i(),ut=r(),ht=x(),mt=x(),gt=y(),vt={normal:nt,cosAngle:0},St=1,bt=2,Ct=[0,0],Ot=P(0,0,1);class xt extends de{constructor(){super(...arguments),this.renderOccluded=ge.Occlude,this.isDecoration=!1,this.color=E(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=d(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=E(1,1,1,1),this.outlineSize=0,this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1,this.isLabel=!1}}const Pt=K().vec3f(Se.POSITION).vec3f(Se.NORMAL).vec2f(Se.UV0).vec4u8(Se.COLOR).vec2f(Se.SIZE).f32(Se.ROTATION).vec4f(Se.CENTEROFFSETANDDISTANCE).vec4f(Se.FEATUREATTRIBUTE),At=Pt.clone().vec4u8(Se.OBJECTANDLAYERIDCOLOR);class Tt{constructor(){this.vertexBufferLayout=ie()?At:Pt}elementCount(e){return 6*e.get(Se.POSITION).indices.length}write(e,t,o,i,a,r){be(o.get(Se.POSITION),e,a.position,r,6),Ce(o.get(Se.NORMAL),t,a.normal,r,6);const s=o.get(Se.UV0)?.data;let n=0,l=0,c=1,d=1;s&&s.length>=4&&(n=s[0],l=s[1],c=s[2],d=s[3]),c=Math.min(1.99999,c+1),d=Math.min(1.99999,d+1);let p=o.get(Se.POSITION).indices.length,f=r;const u=a.uv0;for(let e=0;e<p;++e)u.set(f,0,n),u.set(f,1,l),f++,u.set(f,0,c),u.set(f,1,l),f++,u.set(f,0,c),u.set(f,1,d),f++,u.set(f,0,c),u.set(f,1,d),f++,u.set(f,0,n),u.set(f,1,d),f++,u.set(f,0,n),u.set(f,1,l),f++;Oe(o.get(Se.COLOR),4,a.color,r,6);const{data:h,indices:m}=o.get(Se.SIZE);p=m.length;const g=a.size;f=r;for(let e=0;e<p;++e){const t=h[2*m[e]],o=h[2*m[e]+1];for(let e=0;e<6;++e)g.set(f,0,t),g.set(f,1,o),f++}if(xe(o.get(Se.ROTATION),a.rotation,r,6),o.get(Se.CENTEROFFSETANDDISTANCE)?Pe(o.get(Se.CENTEROFFSETANDDISTANCE),a.centerOffsetAndDistance,r,6):Ae(a.centerOffsetAndDistance,r,6*p),o.get(Se.FEATUREATTRIBUTE)?Pe(o.get(Se.FEATUREATTRIBUTE),a.featureAttribute,r,6):Ae(a.featureAttribute,r,6*p),null!=i){const e=o.get(Se.POSITION)?.indices;if(e){const t=e.length,o=a.getField(Se.OBJECTANDLAYERIDCOLOR,F);Te(i,o,t,r,6)}}}}export{Ke as H,$e as S};
