/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Evented.js";import{h as r}from"../core/lang.js";import{s as i}from"./ensureType.js";import{c as s,f as o}from"./maybe.js";import{M as a,P as n}from"../core/scheduling.js";import{watch as l,initial as c,syncAndInitial as h,on as d}from"../core/reactiveUtils.js";import u,{x as g,g as p}from"../core/Accessor.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import{L as f}from"./Logger.js";import{subclass as v}from"../core/accessorSupport/decorators/subclass.js";import{C as _,x,m as y,i as C,w,G as S,b,c as T}from"./mat4.js";import{q as R,n as P,s as O,i as D,h as I,a as M,e as F,y as A,m as E,f as L}from"./vec3.js";import{c as j,f as H,o as z}from"./vec3f64.js";import{f as V,G as N,D as G,b as W,a as U}from"./GridLocalOriginFactory.js";import{d as q}from"./debugFlags2.js";import{c as k,D as B,h as Z,E as Q,w as X,o as Y}from"./aaBoundingRect.js";import{C as $,j as J,f as K,g as ee,k as te,b as re,d as ie,P as se,F as oe,S as ae,D as ne,A as le}from"./SceneLighting.js";import{S as ce,o as he,a as de,c as ue,U as ge,F as pe,T as me}from"./Matrix4PassUniform.js";import fe,{C as ve,s as _e}from"../views/3d/webgl/RenderCamera.js";import{c as xe,Z as ye}from"./vec4f64.js";import{g as Ce,N as we}from"./interfaces3.js";import{R as Se,b as be,h as Te,S as Re,aa as Pe,P as Oe,k as De,l as Ie,i as Me,E as Fe,N as Ae,a6 as Ee}from"./StencilUtils.js";import{h as Le}from"./unitUtils.js";import{n as je}from"./compilerUtils.js";import{c as He,l as ze,a as Ve}from"./mathUtils.js";import{signal as Ne}from"../core/signal.js";import{I as Ge,c as We}from"./mat4f64.js";import{d as Ue,h as qe,a as ke}from"./axisAngleDegrees.js";import{h as Be,c as Ze}from"./weather.js";import{B as Qe,S as Xe}from"./ScreenSpacePass.glsl.js";import{B as Ye}from"./BindType.js";import{F as $e}from"./Float4DrawUniform.js";import{M as Je,D as Ke,a as et,r as tt,S as rt}from"./MergedRenderer.js";import{g as it,a as st,e as ot,h as at,p as nt,s as lt,d as ct,n as ht,i as dt,m as ut}from"./vec2.js";import{InternalRenderCategory as gt}from"../views/3d/webgl.js";import pt from"../views/3d/webgl/RenderNode.js";import{m as mt,p as ft,d as vt}from"./renderState.js";import{f as _t,m as xt}from"./HighlightDefaults.js";import{c as yt}from"./vec2f64.js";import{R as Ct}from"./basicInterfaces.js";import{D as wt,R as St}from"./Material.js";import{V as bt}from"./VertexAttribute.js";import{D as Tt,d as Rt,c as Pt,j as Ot,U as Dt,k as It,o as Mt}from"./enums.js";import{V as Ft}from"./VertexElementDescriptor.js";import{V as At}from"./VertexArrayObject2.js";import{B as Et}from"./BufferObject.js";import{a as Lt,T as jt}from"./Texture.js";import{N as Ht}from"./NestedMap.js";import{a as zt,l as Vt,v as Nt,b as Gt}from"./Util.js";import{H as Wt}from"./HUDRenderStyle.js";import{c as Ut}from"./mat3f64.js";import{s as qt,t as kt}from"./vec4.js";import{V as Bt}from"./ViewingMode.js";import{g as Zt,N as Qt,b as Xt}from"./sphere.js";import{O as Yt}from"./Intersector.js";import{a as $t}from"./Intersector3.js";import{S as Jt,I as Kt}from"./intersectorUtils.js";import{S as er,p as tr}from"./ShaderTechniqueConfiguration.js";import{U as rr}from"./RibbonLineMaterial.js";import{T as ir,n as sr}from"./Scheduler.js";import{e as or}from"./mathUtils2.js";var ar,nr,lr,cr,hr;!function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(ar||(ar={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(nr||(nr={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(lr||(lr={}));class dr{constructor(){this._extent=k(),this.resolution=0,this.renderLocalOrigin=V(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new ur}get extent(){return this._extent}setupGeometryViewsCyclical(e){this.setupGeometryView();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];B(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];B(this._extent,-e.range,0,t)}}setupGeometryView(){this.canvasGeometries.numViews=1,Z(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class ur{constructor(){this.extents=[k(),k(),k()],this.numViews=0}}!function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.WaterNormal=3]="WaterNormal",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(cr||(cr={}));class gr{constructor(e,t,r){this._fbos=e,this._format=t,this._name=r}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=s(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,r){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===r||(this._handle?.release(),this._handle=this._fbos.acquire(t,r,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}class pr{constructor(e,t,r,i,s=$.RGBA_MIPMAP){this.output=r,this.content=i,this.fbo=new gr(e,s,t)}get valid(){return this.fbo.valid}}class mr{constructor(e){this.targets=[new pr(e,"overlay color",ce.Color,cr.Color),new pr(e,"overlay IM color",ce.Color,cr.ColorNoRasterImage),new pr(e,"overlay highlight",ce.Highlight,cr.Highlight,$.RG),new pr(e,"overlay water",ce.Normal,cr.WaterNormal),new pr(e,"overlay occluded",ce.Color,cr.Occluded)],he()&&this.targets.push(new pr(e,"overlay olid",ce.ObjectAndLayerIdColor,cr.ObjectAndLayerIdColor,$.RGBA))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,t,r)=>t.valid?e|=1<<r:e),0)}}class fr extends J{constructor(){super(...arguments),this.slicePlaneLocalOrigin=j(),this.origin=this.slicePlaneLocalOrigin,this.modelTransformation=null}}!function(e){e[e.Material=0]="Material",e[e.ShadowMap=1]="ShadowMap",e[e.Highlight=2]="Highlight",e[e.ViewshedShadowMap=3]="ViewshedShadowMap"}(hr||(hr={}));class vr extends fr{constructor(){super(...arguments),this.identifier=hr.Material,this.output=ce.Color,this.transparent=!1}}class _r extends fr{constructor(){super(...arguments),this.identifier=hr.ShadowMap}}let xr=class extends fr{constructor(){super(...arguments),this.identifier=hr.Highlight}};class yr extends fr{constructor(){super(...arguments),this.identifier=hr.ViewshedShadowMap}}function Cr(e){e.fragment.code.add(Ce`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function wr(e){e.fragment.code.add(Ce`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function Sr(e){e.fragment.code.add(Ce`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function br(e,t){if(!t.screenSpaceReflections)return;const r=e.fragment;r.include(Se),r.uniforms.add(new be("nearFar",((e,t)=>t.camera.nearFar)),new Te("depthMap",((e,t)=>t.depth?.attachment)),new de("proj",((e,t)=>t.camera.projectionMatrix)),new ue("invResolutionHeight",((e,t)=>1/t.camera.height)),new de("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))).code.add(Ce`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}var Tr,Rr,Pr;!function(e){e[e.Idle=0]="Idle",e[e.Rendering=1]="Rendering",e[e.Ready=2]="Ready",e[e.Fading=3]="Fading"}(Tr||(Tr={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA",e[e.COUNT=2]="COUNT"}(Rr||(Rr={}));class Or{constructor(){this.startTime=0,this._data=Ne(null),this._readChannels=Rr.RG,this.parallax=new Dr,this.parallaxNew=new Dr,this._anchorPoint=j(),this._fadeState=Ne(Pr.HIDE),this._fadeFactor=Ne(1)}get data(){return this._data.value}set data(e){this._data.value=e}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case Pr.HIDE:return 0;case Pr.FADE_OUT:return 1-this.fadeFactor;case Pr.FADE_IN:return this.fadeFactor;case Pr.SHOW:case Pr.CROSS_FADE:return 1}}fade(e,t,r){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=r?He((t-this.startTime)/(Ar*r),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(e,t),this._updateParallax(e)}_evaluateState(e,t){const r=e.relativeElevation,i=this._updateAnchorPoint(e);var s;(r>1.7*Be||r<-Be||i>Lr)&&this.opacity>0?this._startFade(Pr.HIDE,t):this.isFading||(r>Be||r<-.35*Be||i>Er*Lr?this.opacity>0&&this._startFade(Pr.FADE_OUT,t):null==(s=this.data)||s.running||(0===this.opacity?this._startFade(Pr.FADE_IN,t):this.data.state===Tr.Ready&&(this.fadeState===Pr.SHOW?this._startFade(Pr.CROSS_FADE,t):this._startFade(Pr.SHOW,t))))}_updateParallax(e){const t=R(e.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-Le.radius*Le.radius,0))/Math.sqrt(t),qe(Ir,this.parallax.anchorPoint,Mr),_(this.parallax.transform,Ge,Mr[3],ke(Mr)),qe(Ir,this.parallaxNew.anchorPoint,Mr),_(this.parallaxNew.transform,Ge,Mr[3],ke(Mr))}_updateAnchorPoint(e){return P(this._anchorPoint,e.eye),O(this._anchorPoint,this._anchorPoint,Le.radius),this.fadeState===Pr.HIDE&&this.data?.state===Tr.Ready?(D(this.parallax.anchorPoint,this._anchorPoint),0):I(M(Fr,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(e,t){switch(this._fadeState.value=e,this.startTime=t,e){case Pr.CROSS_FADE:this.requestFade(),this._switchReadChannels(),D(this.parallaxNew.anchorPoint,this._anchorPoint);break;case Pr.FADE_IN:this.requestFade(),this._switchReadChannels(),D(this.parallax.anchorPoint,this._anchorPoint),D(this.parallaxNew.anchorPoint,this._anchorPoint);break;case Pr.FADE_OUT:this.requestFade();break;case Pr.SHOW:this._switchReadChannels(),D(this.parallax.anchorPoint,this._anchorPoint),D(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case Pr.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==Tr.Ready&&(this.data.state=Tr.Idle),this.fadeState){case Pr.CROSS_FADE:D(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=Pr.SHOW;break;case Pr.FADE_IN:this._fadeState.value=Pr.SHOW;break;case Pr.FADE_OUT:this._fadeState.value=Pr.HIDE;break;case Pr.SHOW:case Pr.HIDE:break;default:je(this.fadeState)}}_switchReadChannels(){this.data?.state===Tr.Ready&&(this._readChannels=1-this._readChannels,this.data.state=Tr.Fading)}get isFading(){return this.fadeState===Pr.FADE_OUT||this.fadeState===Pr.FADE_IN||this.fadeState===Pr.CROSS_FADE}}!function(e){e[e.HIDE=0]="HIDE",e[e.FADE_IN=1]="FADE_IN",e[e.SHOW=2]="SHOW",e[e.CROSS_FADE=3]="CROSS_FADE",e[e.FADE_OUT=4]="FADE_OUT"}(Pr||(Pr={}));class Dr{constructor(){this.anchorPoint=j(),this.radiusCurvatureCorrection=0,this.transform=We()}}const Ir=H(0,0,1),Mr=Ue(),Fr=j(),Ar=1.25,Er=.5,Lr=2e5;class jr extends ge{constructor(e,t){super(e,"samplerCube",Ye.Pass,((r,i,s)=>r.bindTexture(e,t(i,s))))}}function Hr(e){const t=e.fragment;t.constants.add("radiusCloudsSquared","float",zr).code.add(Ce`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),t.uniforms.add(new ue("radiusCurvatureCorrection",((e,t)=>t.clouds.parallax.radiusCurvatureCorrection))).code.add(Ce`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),t.code.add(Ce`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),K(t),ee(t);const r=H(.28,.175,.035);t.constants.add("RIM_COLOR","vec3",r),t.code.add(Ce`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${Ce.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${Ce.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${Ce.float(.2)} * pow(dirDotLight, ${Ce.float(10)}) * (1. - pow(sunsetTransition, ${Ce.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.uniforms.add(new Qe("readChannelsRG",((e,t)=>t.clouds.readChannels===Rr.RG)),new jr("cubeMap",((e,t)=>t.clouds.data?.cubeMap?.colorTexture??null))).code.add(Ce`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),t.uniforms.add(new pe("anchorPoint",((e,t)=>t.clouds.parallax.anchorPoint)),new pe("anchorPointNew",((e,t)=>t.clouds.parallaxNew.anchorPoint)),new de("rotationClouds",((e,t)=>t.clouds.parallax.transform)),new de("rotationCloudsNew",((e,t)=>t.clouds.parallaxNew.transform)),new ue("cloudsOpacity",((e,t)=>t.clouds.opacity)),new ue("fadeFactor",((e,t)=>t.clouds.fadeFactor)),new Qe("crossFade",((e,t)=>t.clouds.fadeState===Pr.CROSS_FADE))).code.add(Ce`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const zr=(Le.radius+Ze)**2;function Vr(e){e.code.add(Ce`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Nr(e,t){e.include(te,t),e.include(Sr),e.include(wr),t.cloudReflections&&e.include(Hr),e.include(br,t);const r=e.fragment;r.include(Vr),r.constants.add("fresnelSky","vec3",[.02,1,15]),r.constants.add("fresnelMaterial","vec2",[.02,.1]),r.constants.add("roughness","float",.015),r.constants.add("foamIntensityExternal","float",1.7),r.constants.add("ssrIntensity","float",.65),r.constants.add("ssrHeightFadeStart","float",re),r.constants.add("ssrHeightFadeEnd","float",ie),r.constants.add("waterDiffusion","float",.92),r.constants.add("waterSeaColorMod","float",.8),r.constants.add("correctionViewingPowerFactor","float",.4),r.constants.add("skyZenitColor","vec3",[.52,.68,.9]),r.constants.add("skyColor","vec3",[.67,.79,.9]),r.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(Ce`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new ue("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new ue("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(Ce`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudReflections&&r.uniforms.add(new ue("cloudsOpacity",((e,t)=>t.clouds.opacity))).code.add(Ce`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),t.screenSpaceReflections?r.uniforms.add(new de("view",((e,t)=>t.camera.viewMatrix)),new Te("lastFrameColorTexture",((e,t)=>t.ssr.lastFrameColor?.getTexture())),new ue("fadeFactorSSR",((e,t)=>t.ssr.fadeFactor))).code.add(Ce`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):r.code.add(Ce`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudReflections?t.screenSpaceReflections?r.code.add(Ce`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(Ce`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(Ce`return waterRenderedColor;
}`)}var Gr;function Wr(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new $e("overlayTexOffset",((e,t)=>function(e,t){const r=t.overlay?.overlays[ar.INNER]?.extent;Q(r)&&(Br[0]=e.toMapSpace[0]/X(r)-r[0]/X(r),Br[1]=e.toMapSpace[1]/Y(r)-r[1]/Y(r));const i=t.overlay?.overlays[ar.OUTER]?.extent;return Q(i)&&(Br[2]=e.toMapSpace[0]/X(i)-i[0]/X(i),Br[3]=e.toMapSpace[1]/Y(i)-i[1]/Y(i)),Br}(e,t))),new $e("overlayTexScale",((e,t)=>function(e,t){const r=t.overlay?.overlays[ar.INNER]?.extent;Q(r)&&(Br[0]=e.toMapSpace[2]/X(r),Br[1]=e.toMapSpace[3]/Y(r));const i=t.overlay?.overlays[ar.OUTER]?.extent;return Q(i)&&(Br[2]=e.toMapSpace[2]/X(i),Br[3]=e.toMapSpace[3]/Y(i)),Br}(e,t)))),i.constants.add("overlayOpacity","float",1),i.uniforms.add(new Te("ovColorTex",((e,t)=>kr(e,t)))),qr(e,t)}function Ur(e,t){const{vertex:r,fragment:i}=e;r.uniforms.add(new Zr("overlayTexOffset"),new Zr("overlayTexScale")),i.uniforms.add(new ue("overlayOpacity",(e=>e.overlayOpacity)),new Te("ovColorTex",((e,t)=>t.overlay?.getTexture(e.overlayContent)))),qr(e,t)}function qr(e,t){const r=t.pbrMode===se.Water||t.pbrMode===se.WaterOnIntegratedMesh||t.pbrMode===se.TerrainWithWater;r&&e.include(Nr,t);const{vertex:i,fragment:s}=e;e.varyings.add("vtcOverlay","vec4"),i.code.add(Ce`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),s.code.add(Ce`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),s.code.add(Ce`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),s.code.add(Ce`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),s.code.add(Ce`vec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = vec2(uvInner.x * 0.5,       uvInner.y);
vec2 texelCoordOuter = vec2(uvOuter.x * 0.5 + 0.5, uvOuter.y);
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec2 texelValueInner = texelFetch(ovColorTex, ivec2(texelCoordInner * texDim), 0).rg;
vec2 texelValueOuter = texelFetch(ovColorTex, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
vec2(0.0);
}`),r&&(K(s),ee(s),s.code.add(Ce`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function kr(e,t){return e.identifier===hr.Material&&e.output===ce.Color?t.overlay?.getTexture(cr.ColorNoRasterImage):e.identifier===hr.Material&&e.output===ce.ObjectAndLayerIdColor?t.overlay?.getTexture(cr.ObjectAndLayerIdColor):e.identifier===hr.Highlight?t.overlay?.getTexture(cr.Highlight):null}!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(Gr||(Gr={}));const Br=xe();class Zr extends ge{constructor(e){super(e,"vec4")}}class Qr extends we{constructor(){super(...arguments),this.color=H(1,1,1)}}const Xr=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Qr,build:function(){const e=new Re;return e.include(Xe),e.fragment.uniforms.add(new Te("tex",(e=>e.texture)),new pe("uColor",(e=>e.color))),e.fragment.main.add(Ce`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}},Symbol.toStringTag,{value:"Module"}));class Yr extends we{}const $r=32,Jr=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Yr,blurSize:.4,build:function(){const e=new Re,{outputs:t,fragment:r}=e;return e.include(Xe),r.uniforms.add(new me("textureInput",(e=>e.input))),r.constants.add("outlineWidth","int",Math.ceil(9)),r.constants.add("cellSize","int",$r),t.add("fragGrid","vec2"),r.main.add(Ce`vec2 inputTextureSize = vec2(textureSize(textureInput, 0));
vec2 cellBottomLeftCornerInput = floor(gl_FragCoord.xy) * vec2(cellSize);
vec2 coordMid =  (cellBottomLeftCornerInput + 0.5 * vec2(cellSize)) / inputTextureSize;
vec2 commonValue = texture(textureInput, coordMid).rg;
int margin = outlineWidth;
float marginSquare = float(margin*margin);
for(int y = -margin; y <= cellSize + margin; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : margin;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
vec2 coord = (cellBottomLeftCornerInput + vec2(x, y)) / inputTextureSize;
vec2 value = texture(textureInput, coord).rg;
if (value != commonValue){
fragGrid = vec2(1.0, 1.0);
return;
}
}
}
bool hasAny = commonValue != vec2(0.0);
fragGrid = vec2(hasAny ? 1.0 : 0.0, 0.0);`),e},gridCellPixelSize:$r,outlineSize:9},Symbol.toStringTag,{value:"Module"}));function Kr(e){const{vertex:t}=e;t.uniforms.add(new Te("coverageTexture",(e=>e.coverageTexture)),new Pe("highlightRenderCellCount",(e=>[e.horizontalCellCount,e.verticalCellCount])),new Pe("highlightTextureResolution",(e=>[e.highlightTexture.descriptor.width,e.highlightTexture.descriptor.height]))),t.constants.add("cellSize","int",$r),e.varyings.add("sUV","vec2"),e.varyings.add("vOutlinePossible","float"),t.code.add(Ce`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),t.main.add(Ce`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
vec4 cov = texelFetch(coverageTexture, cellPos, 0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = cov.g;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}function ei(e){const{fragment:t}=e;t.code.add(Ce`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(vec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return uint(texel[lic] * 255.0);
}
uint readLevelBits(vec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}const ti=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new Re;e.include(Kr);const{fragment:t}=e;return t.uniforms.add(new Te("highlightTexture",(e=>e.highlightTexture)),new Te("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new ue("pixelRatio",(e=>e.pixelRatio)),new ue("occludedIntensityFactor",(e=>e.occludedFactor)),new Oe("maxHighlightLevel",(e=>e.maxHighlightLevel))),t.constants.add("pixelSampleScale","float",1),e.include(ei),t.code.add(Ce`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),t.main.add(Ce`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),e}},Symbol.toStringTag,{value:"Module"}));class ri extends De{constructor(e,t,r){super(e,t,new Ie(ti,(()=>Promise.resolve().then((()=>ti)))),r)}initializePipeline(){return mt({blending:ft,colorWrite:vt})}}class ii extends De{constructor(e,t,r){super(e,t,new Ie(Jr,(()=>Promise.resolve().then((()=>Jr)))),r)}initializePipeline(){return mt({colorWrite:vt})}}class si extends we{constructor(){super(...arguments),this.occludedFactor=_t,this.maxHighlightLevel=1,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}const oi=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new Re;e.include(Kr),e.include(ei);const{fragment:t}=e;return e.outputs.add("fragSingleHighlight","vec2",0),t.uniforms.add(new Te("highlightTexture",(e=>e.highlightTexture)),new Oe("maxHighlightLevel",(e=>e.maxHighlightLevel)),new Oe("highlightLevel",(e=>e.highlightLevel))),e.include(ei),t.main.add(Ce`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),e}},Symbol.toStringTag,{value:"Module"}));class ai extends De{constructor(e,t,r){super(e,t,new Ie(oi,(()=>Promise.resolve().then((()=>oi)))),r)}initializePipeline(){return mt({colorWrite:vt})}}const ni=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new Re;e.include(Kr);const{fragment:t}=e;return t.uniforms.add(new Te("blurInput",(e=>e.singleHighlightBlurTexture)),new oe("blurSize",(e=>e.blurSize)),new Te("highlightTexture",(e=>e.highlightTexture)),new Te("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new Oe("highlightLevel",(e=>e.highlightLevel)),new ue("occludedIntensityFactor",(e=>e.occludedFactor))),t.constants.add("inner","float",1-8.6/9),e.include(ei),t.main.add(Ce`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),e}},Symbol.toStringTag,{value:"Module"}));class li extends De{constructor(e,t,r){super(e,t,new Ie(ni,(()=>Promise.resolve().then((()=>ni)))),r)}initializePipeline(){return mt({blending:ft,colorWrite:vt})}}class ci extends we{constructor(){super(...arguments),this.blurSize=yt()}}const hi=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:ci,build:function(){const e=new Re;return e.include(Kr),e.fragment.uniforms.add(new oe("blurSize",(e=>e.blurSize)),new me("blurInput",(e=>e.blurInput))),e.outputs.add("fragSingleHighlight","vec2",0),e.fragment.main.add(Ce`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),e}},Symbol.toStringTag,{value:"Module"}));class di extends De{constructor(e,t,r){super(e,t,new Ie(hi,(()=>Promise.resolve().then((()=>hi)))),r)}initializePipeline(){return mt({colorWrite:vt})}}const ui=[],gi=[new Ft(bt.POSITION,3,Tt.FLOAT,0,12)],pi=[new Ft(bt.POSITION,2,Tt.FLOAT,0,8)],mi=[new Ft(bt.POSITION,2,Tt.FLOAT,0,16),new Ft(bt.UV0,2,Tt.FLOAT,8,16)];let fi=class extends pt{constructor(e){super(e),this.produces=gt.HIGHLIGHTS,this.consumes={required:[gt.HIGHLIGHTS,"highlights"]},this.useMultipleHighlights=!!r("enable-feature:multiple-highlights"),this._optionsTexture=null,this._downsampleDrawParameters=new Yr,this._passParameters=new si,this._singleHighlightBlurDrawParameters=new ci,this._grid=new vi,e.techniques.precompile(ii),this.useMultipleHighlights?e.techniques.precompile(ri):(e.techniques.precompile(ai),e.techniques.precompile(di),e.techniques.precompile(li))}initialize(){this.addHandles([l((()=>wi(this.view.highlights)),(()=>{this._optionsTexture=o(this._optionsTexture),this.requestRender(Ct.UPDATE)}),c)])}destroy(){this._passParameters&&(this._passParameters.highlightOptionsTexture=null),this._grid.coverage=s(this._grid.coverage),this._grid.vao=o(this._grid.vao),this._optionsTexture=s(this._optionsTexture)}_updateOptionsTexture(e){const t=this.renderingContext;let r=this._optionsTexture;if(null==r){const e=new Lt(16,2);e.internalFormat=Rt.RGBA,e.samplingMode=Pt.NEAREST,r=new jt(t,e,null),this._optionsTexture=r}r.setData(e),this._passParameters.highlightOptionsTexture=r}render(e){const t=e.find((({name:e})=>e===gt.HIGHLIGHTS)),{techniques:r,bindParameters:i,_passParameters:s,renderingContext:o}=this;if(!i.decorations)return t;const a=r.acquire(ii);if(!a.compiled)return a.release(),this.requestRender(Ct.UPDATE),t;const n=e.find((({name:e})=>"highlights"===e)).getTexture(),l=()=>{const{highlights:e}=this.view;this._optionsTexture||this._updateOptionsTexture(function(e){const t=new Uint8Array(128),r=(e,r)=>{t[e]=r};return yi(e,((e,t)=>{((e,t)=>{const i=4*e,s=4*e+64,{color:o}=t,a=t.haloColor??o;r(i+0,o.r),r(i+1,o.g),r(i+2,o.b),r(i+3,t.fillOpacity*o.a*255),r(s+0,a.r),r(s+1,a.g),r(s+2,a.b),r(s+3,t.haloOpacity*a.a*255)})(t,e.options)})),t}(e)),s.highlightOptionsTexture=this._optionsTexture,this._gridUpdateResources(n);const t=this._gridComputeCoverage(a,n,i);a.release();const{horizontalCellCount:r,verticalCellCount:o}=t;return s.horizontalCellCount=r,s.verticalCellCount=o,s.coverageTexture=t.coverage?.getTexture(),t},c=e=>{const t=e.verticalCellCount*e.horizontalCellCount;o.bindVAO(e.vao),o.drawElementsInstanced(It.TRIANGLES,6,Tt.UNSIGNED_BYTE,0,t)},{camera:h}=i,d=()=>{o.bindFramebuffer(t.fbo),o.setViewport4fv(h.fullViewport)};return this.useMultipleHighlights?this._renderMultiple(n,l,c,d):this._renderSingle(n,l,c,d),s.highlightTexture=null,s.coverageTexture=null,t}_renderMultiple(e,t,r,i){const{techniques:s,bindParameters:o,_passParameters:a,renderingContext:n}=this,l=s.acquire(ri);if(!l.compiled)return l.release(),void this.requestRender(Ct.UPDATE);const c=t();a.highlightTexture=e,a.pixelRatio=o.camera.pixelRatio,a.maxHighlightLevel=Ti(this.view.highlights)-1,n.bindTechnique(l,o,a),i(),r(c),l.release()}_renderSingle(e,t,r,i){const{fboCache:s,techniques:o,bindParameters:a,_passParameters:n,renderingContext:l}=this,c=o.acquire(ai),h=o.acquire(di),d=o.acquire(li);if(!d.compiled||!h.compiled||!c.compiled)return d.release(),h.release(),c.release(),void this.requestRender(Ct.UPDATE);const u=t(),{width:g,height:p}=e.descriptor;n.maxHighlightLevel=Ti(this.view.highlights)-1,n.highlightTexture=e;const{camera:m}=a,{fullWidth:f,fullHeight:v,pixelRatio:_}=m,x=Math.ceil(f/_),y=Math.ceil(v/_),{_singleHighlightBlurDrawParameters:C}=this;for(let e=0;e<=n.maxHighlightLevel;++e){n.highlightLevel=e,l.setClearColor(0,0,0,0);const t=s.acquire(g,p,"single highlight",$.RG);l.bindFramebuffer(t.fbo),l.setViewport(0,0,g,p),l.clear(Ot.COLOR),l.bindTechnique(c,a,n),r(u),C.blurInput=t.getTexture(),it(C.blurSize,1/x,0);const o=s.acquire(x,y,"single highlight blur h",$.RG);l.unbindTexture(o.fbo?.colorTexture),l.bindFramebuffer(o.fbo),l.setViewport(0,0,x,y),l.clear(Ot.COLOR),C.blurInput=t.getTexture(),it(C.blurSize,1/x,0),l.bindTechnique(h,a,n,C),r(u),t.release(),it(C.blurSize,0,1/y),n.singleHighlightBlurTexture=o.getTexture(),i(),l.bindTechnique(d,a,n,C),r(u),o.release()}c.release(),h.release(),d.release()}_gridUpdateResources(e){const t=this.renderingContext,r=this._grid,{width:i,height:s}=e.descriptor;if(r.horizontalCellCount=Math.ceil(i/$r),r.verticalCellCount=Math.ceil(s/$r),r.vao)return;const o=Et.createIndex(t,Dt.STATIC_DRAW,Si);r.vao=new At(t,wt,new Map([["geometry",ui]]),new Map([["geometry",Et.createVertex(t,Dt.STATIC_DRAW)]]),o)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,s=this._grid,o=t.descriptor,a=Math.ceil(o.width/$r),n=Math.ceil(o.height/$r);this._downsampleDrawParameters.input=t,s.coverage?.release();const l=this.fboCache.acquire(a,n,"highlight coverage",$.RG);return s.coverage=l,i.bindFramebuffer(l.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,a,n),i.screen.draw(),s}get test(){}};e([m()],fi.prototype,"produces",void 0),e([m()],fi.prototype,"consumes",void 0),e([m({constructOnly:!0})],fi.prototype,"techniques",void 0),fi=e([v("esri.views.3d.webgl-engine.effects.highlight.Highlight")],fi);class vi{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}const _i=new Array(xt),xi=new Array(xt);function yi(e,t){const r=Math.min(e.length,xt);let i=xt;for(let t=r-1;t>=0;--t){const r=e.at(t);if(r){const e=r.name;_i.includes(e,i)||(--i,_i[i]=e,xi[i]=t)}}const s=xt-i;for(let r=0;r<s;++r){const i=xi[xt-s+r];t(e.at(i),r)}}let Ci=0;function wi(e){let t=0;const r=Math.min(xt,e.length);for(let i=0;i<r;++i){const r=e.at(i);if(r){const{name:e,options:i}=r;t+=e.length;const{color:s,fillOpacity:o,haloColor:a,haloOpacity:n}=i;t+=s.r+(a?.r??1)+o+n}}{const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:s}=r.options;t+=e+i+s.r}}return Ci+++(t>=0?0:1)}const Si=new Uint8Array([0,1,2,2,1,3]);function bi(e,t,r,i,s,o,a=0,n){const{highlightGroupIndices:l}=s;l.clear();const c=[];yi(i,(e=>{const{name:t}=e;l.set(t,c.length),c.push(t)}));const h=l.size,{gl:d}=e;it(s.highlightMixOrigin,a,0);let u=null;h>1&&(u=t.acquire(r.width,r.height,"highlight mix",$.RG),e.bindFramebuffer(u.fbo),e.clearFramebuffer(ye));const g=u?.getTexture()??null;s.highlightMixTexture=g,n();for(let t=0;t<h;++t)t>0&&(e.bindTexture(g,0),d.copyTexSubImage2D(Mt.TEXTURE_2D,0,0,0,a,0,r.width,r.height),e.bindTexture(null,0)),e.clear(Ot.DEPTH),s.highlightLevel=t,s.highlightGroupName=c[t],o();u?.release()}function Ti(e){const t=new Set;for(let r=0;r<xt;++r){const i=e.at(r)?.name;i&&t.add(i)}return t.size}class Ri{constructor(e,t,r,i){this._textures=e,this._techniques=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new Ht}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);const i=e.produces.get(t);if(!i?.(r))return null;let s=this._id2glMaterialRef.get(r,e.id);if(null==s){const t=e.createGLMaterial({material:e,techniques:this._techniques,textures:this._textures,output:r});s=new Pi(t),this._id2glMaterialRef.set(r,e.id,s)}return s.ref(),s.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);null!=r&&(r.unref(),r.referenced||(o(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){e.repository&&e.repository!==this&&f.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class Pi{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,zt(this._refCnt>=0)}get referenced(){return this._refCnt>0}}var Oi;!function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(Oi||(Oi={}));class Di{constructor(e,t){this.width=e,this.height=t}}class Ii{constructor(e){this.shadowMap=e,this.slot=Me.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Fe.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new fe,this._inverseViewport=yt(),this._oldLighting=new ae,this._newLighting=new ae,this._fadedLighting=new ae,this._lighting=this._newLighting,this.ssr=new Mi,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlightMixTexture=null,this.highlightGroupName=null,this.highlightGroupIndices=new Map,this.highlightLevel=0,this.highlightMixOrigin=yt(),this.hudRenderStyle=Wt.Occluded,this.clouds=new Or,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(e){this._camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(e,t,r,i){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=r,this._newLighting.set(e),i===Oi.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}}class Mi{constructor(){this.fadeFactor=1,this.reprojectionMatrix=We()}}class Fi{constructor(e,t){this.rctx=e,this.lastFrameCamera=new fe,this.output=ce.Color,this.renderOccludedMask=Ei,this.bind=new Ii(t),this.bind.alignPixelEnabled=!0}}class Ai extends Fi{constructor(e,t,r){super(e,t),this.techniques=r,this.time=a(0)}}const Ei=St.Occlude|St.OccludeAndTransparent|St.OccludeAndTransparentStencil;let Li=class extends fe{constructor(){super(...arguments),this._projectionMatrix=We()}get projectionMatrix(){return this._projectionMatrix}};var ji;e([m()],Li.prototype,"_projectionMatrix",void 0),e([m({readOnly:!0})],Li.prototype,"projectionMatrix",null),Li=e([v("esri.views.3d.webgl-engine.lib.CascadeCamera")],Li),function(e){e[e.Highlight=0]="Highlight",e[e.ExcludeHighlight=1]="ExcludeHighlight"}(ji||(ji={}));class Hi{constructor(){this.camera=new Li,this.lightMat=We()}}class zi{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class Vi{constructor(e,t){this._fbos=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new zi,this._projectionView=We(),this._projectionViewInverse=We(),this._modelViewLight=We(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=xe(),this._cascades=[new Hi,new Hi,new Hi,new Hi],this._lastOrigin=null,this._maxTextureWidth=Math.min(r("esri-mobile")?4096:16384,e.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return qt(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=s(this._handle),this._discardSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=He(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let e=0;e<this._numCascades;++e)Xi[e]=this._cascades[e];return Xi.length=this._numCascades,Xi}start(e,t,r,i,s){zt(this.enabled);const{near:o,far:a}=function(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}(r);this._computeCascadeDistances(o,a,i),this._textureHeight=this._computeTextureHeight(e,s,i),this._setupMatrices(e,t);const{viewMatrix:n,projectionMatrix:l}=e;for(let e=0;e<this._numCascades;++e)this._constructCascade(e,l,n,t);this._lastOrigin=null,this.clear()}finish(){zt(this.enabled),this._handle?.detachDepth()}getShadowMapMatrices(e){if(!this._lastOrigin||!F(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||j(),D(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){x(Yi,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)$i[16*t+e]=Yi[e]}}return $i}moveSnapshot(e){zt(this.enabled),this._handle?.detachDepth(),this._snapshots[e]?.release(),this._snapshots[e]=this._handle,this._handle=null,this.clear()}copySnapshot(e){const t=this._handle?.getTexture()?.descriptor;if(!this.enabled||!t)return;this._snapshots[e]?.release();const{width:r,height:i}=t,s=e===ji.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot";this._snapshots[e]=this._fbos.acquire(r,i,s,$.RGBA4);const o=this._fbos.rctx;this._bindFbo();const a=o.bindTexture(this._snapshots[e]?.getTexture(),jt.TEXTURE_UNIT_FOR_UPDATES);o.gl.copyTexSubImage2D(Mt.TEXTURE_2D,0,0,0,0,0,r,i),o.bindTexture(a,jt.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(e){return this.enabled?this._snapshots[e]?.getTexture():null}clear(){const e=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),e.setClearColor(1,1,1,1),e.clear(Ot.COLOR|Ot.DEPTH)}_computeTextureHeight(e,t,r){const i=Math.min(window.devicePixelRatio,t)/e.pixelRatio,s=r?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,o=Ae(Math.floor(Math.max(e.fullWidth,e.fullHeight)*i*s)),a=Math.min(this._maxTextureWidth,this._numCascades*o);return Ee(a/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",$.RGBA4)),this._handle?.acquireDepth(ne.DEPTH16_BUFFER)}_discardSnapshot(e){this._snapshots[e]=s(this._snapshots[e])}_discardSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(e,t,r,i){const s=this._cascades[e],o=-this._cascadeDistances[e],a=-this._cascadeDistances[e+1],n=(t[10]*o+t[14])/Math.abs(t[11]*o+t[15]),l=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]);zt(n<l);for(let e=0;e<8;++e){qt(Gi,e%4==0||e%4==3?-1:1,e%4==0||e%4==1?-1:1,e<4?n:l,1);const t=Wi[e];kt(t,Gi,this._projectionViewInverse),t[0]/=t[3],t[1]/=t[3],t[2]/=t[3]}A(Qi,Wi[0]),s.camera.viewMatrix=x(Ni,this._modelViewLight,Qi);for(let e=0;e<8;++e)E(Wi[e],Wi[e],s.camera.viewMatrix);let c=Wi[0][2],h=Wi[0][2];for(let e=1;e<8;++e)c=Math.min(c,Wi[e][2]),h=Math.max(h,Wi[e][2]);c-=200,h+=200,s.camera.near=-h,s.camera.far=-c,function(e,t,r,i,s){const o=1/Wi[0][3],a=1/Wi[4][3];zt(o<a);let n=o+Math.sqrt(o*a);const l=Math.sin(Ve(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));n/=l,function(e,t,r,i,s,o,a,n){it(Ji,0,0);for(let t=0;t<4;++t)st(Ji,Ji,e[t]);ot(Ji,Ji,.25),it(Ki,0,0);for(let t=4;t<8;++t)st(Ki,Ki,e[t]);ot(Ki,Ki,.25),at(es[0],e[4],e[5],.5),at(es[1],e[5],e[6],.5),at(es[2],e[6],e[7],.5),at(es[3],e[7],e[4],.5);let l=0,c=nt(es[0],Ji);for(let e=1;e<4;++e){const t=nt(es[e],Ji);t<c&&(c=t,l=e)}lt(ts,es[l],e[l+4]);const h=ts[0];let d,u;ts[0]=-ts[1],ts[1]=h,lt(rs,Ki,Ji),ct(rs,ts)<0&&ht(ts,ts),at(ts,ts,rs,r),dt(ts,ts),d=u=ct(lt(is,e[0],Ji),ts);for(let t=1;t<8;++t){const r=ct(lt(is,e[t],Ji),ts);r<d?d=r:r>u&&(u=r)}ut(i,Ji),ot(is,ts,d-t),st(i,i,is);let g=-1,p=1,m=0,f=0;for(let t=0;t<8;++t){lt(ss,e[t],i),dt(ss,ss);const r=ts[0]*ss[1]-ts[1]*ss[0];r>0?r>g&&(g=r,m=t):r<p&&(p=r,f=t)}Nt(g>0,"leftArea"),Nt(p<0,"rightArea"),ot(os,ts,d),st(os,os,Ji),ot(as,ts,u),st(as,as,Ji),ns[0]=-ts[1],ns[1]=ts[0];const v=Gt(i,e[f],as,st(is,as,ns),1,s),_=Gt(i,e[m],as,is,1,o),x=Gt(i,e[m],os,st(is,os,ns),1,a),y=Gt(i,e[f],os,is,1,n);Nt(v,"rayRay"),Nt(_,"rayRay"),Nt(x,"rayRay"),Nt(y,"rayRay")}(Wi,n,l,Ui,qi,ki,Bi,Zi),function(e,t,r,i,s){lt(ds,r,i),ot(ds,ds,.5),us[0]=ds[0],us[1]=ds[1],us[2]=0,us[3]=ds[1],us[4]=-ds[0],us[5]=0,us[6]=ds[0]*ds[0]+ds[1]*ds[1],us[7]=ds[0]*ds[1]-ds[1]*ds[0],us[8]=1,us[ls(0,2)]=-ct(hs(us,0),e),us[ls(1,2)]=-ct(hs(us,1),e);let o=ct(hs(us,0),r)+us[ls(0,2)],a=ct(hs(us,1),r)+us[ls(1,2)],n=ct(hs(us,0),i)+us[ls(0,2)],l=ct(hs(us,1),i)+us[ls(1,2)];o=-(o+n)/(a+l),us[ls(0,0)]+=us[ls(1,0)]*o,us[ls(0,1)]+=us[ls(1,1)]*o,us[ls(0,2)]+=us[ls(1,2)]*o,o=1/(ct(hs(us,0),r)+us[ls(0,2)]),a=1/(ct(hs(us,1),r)+us[ls(1,2)]),us[ls(0,0)]*=o,us[ls(0,1)]*=o,us[ls(0,2)]*=o,us[ls(1,0)]*=a,us[ls(1,1)]*=a,us[ls(1,2)]*=a,us[ls(2,0)]=us[ls(1,0)],us[ls(2,1)]=us[ls(1,1)],us[ls(2,2)]=us[ls(1,2)],us[ls(1,2)]+=1,o=ct(hs(us,1),t)+us[ls(1,2)],a=ct(hs(us,2),t)+us[ls(2,2)],n=ct(hs(us,1),r)+us[ls(1,2)],l=ct(hs(us,2),r)+us[ls(2,2)],o=-.5*(o/a+n/l),us[ls(1,0)]+=us[ls(2,0)]*o,us[ls(1,1)]+=us[ls(2,1)]*o,us[ls(1,2)]+=us[ls(2,2)]*o,o=ct(hs(us,1),t)+us[ls(1,2)],a=ct(hs(us,2),t)+us[ls(2,2)],n=-a/o,us[ls(1,0)]*=n,us[ls(1,1)]*=n,us[ls(1,2)]*=n,s[0]=us[0],s[1]=us[1],s[2]=0,s[3]=us[2],s[4]=us[3],s[5]=us[4],s[6]=0,s[7]=us[5],s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=us[6],s[13]=us[7],s[14]=0,s[15]=us[8]}(Ui,qi,Bi,Zi,s.projectionMatrix),s.projectionMatrix[10]=2/(r-i),s.projectionMatrix[14]=-(r+i)/(r-i)}(r,i,c,h,s.camera),y(s.lightMat,s.camera.projectionMatrix,s.camera.viewMatrix);const d=this._textureHeight;s.camera.viewport=[e*d,0,d,d]}_setupMatrices(e,t){y(this._projectionView,e.projectionMatrix,e.viewMatrix),C(this._projectionViewInverse,this._projectionView);const r=this._viewingMode===Bt.Global?e.eye:L(Qi,0,0,1);w(this._modelViewLight,[0,0,0],[-t[0],-t[1],-t[2]],r)}_computeCascadeDistances(e,t,r){const i=r?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(Vt(t/e,4)),i);const s=(t-e)/this._numCascades,o=(t/e)**(1/this._numCascades);let a=e,n=e;for(let e=0;e<this._numCascades+1;++e)this._cascadeDistances[e]=ze(a,n,this.settings.splitSchemeLambda),a*=o,n+=s}get test(){}}const Ni=We(),Gi=xe(),Wi=[];for(let e=0;e<8;++e)Wi.push(xe());const Ui=yt(),qi=yt(),ki=yt(),Bi=yt(),Zi=yt(),Qi=j(),Xi=[],Yi=We(),$i=Ge.concat(Ge,Ge,Ge,Ge),Ji=yt(),Ki=yt(),es=[yt(),yt(),yt(),yt()],ts=yt(),rs=yt(),is=yt(),ss=yt(),os=yt(),as=yt(),ns=yt();function ls(e,t){return 3*t+e}const cs=yt();function hs(e,t){return it(cs,e[t],e[t+3]),cs}const ds=yt(),us=Ut();let gs=class extends u{constructor(e){super(e),this._pending=new ps,this._changes=new ve,this._renderers=new Map,this._sortedRenderers=new n,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._sortedRenderers.clear(),this._geometries.clear(),this._pending.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materials(){return this.rendererContext.materials}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccludedDraped(){for(const e of this._renderers.values())if(0!==e.numGeometries&&!e.queryRenderOccludedState(St.Occlude))return!0;return!1}get isEmpty(){return!this.updating&&0===this._renderers.size&&0===this._geometries.size}getMaterialRenderer(e){return this._renderers.get(e)}get sortedRenderers(){return this._sortedRenderers}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=_e(this._changes);let t=!1;return e.forEach(((e,r)=>{let i=this._renderers.get(r);!i&&e.adds.length>0&&(i=new Je({material:r}),i.initializeRenderContext(this.rendererContext.pluginContext,this._materials),this._renderers.set(r,i),t=!0),i&&(i.modify(e),0===i.numGeometries&&(this._renderers.delete(r),i.destroy(),t=!0))})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),this._hasHighlights=i(this._renderers,(e=>{const t=e.produces.get(Me.DRAPED_MATERIAL);return!!t&&t(ce.Highlight)})),this._hasWater=i(this._renderers,(e=>{const t=e.produces.get(Me.DRAPED_WATER);return!!t&&t(ce.Normal)})),this.notifyChange("updating"),!0}addGeometries(e,t){if(0===e.length)return;const r=this._validateRenderGeometries(e);for(const e of r)this._geometries.set(e.id,e);const i=this._pending.empty;for(const e of r)this._pending.adds.add(e);i&&this.notifyChange("updating"),t===Ke.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,t){const r=this._pending.empty,i=this._pending.adds;for(const t of e)i.has(t)?(this._pending.removed.add(t),i.delete(t)):this._pending.removed.has(t)||this._pending.removes.add(t),this._geometries.delete(t.id);r&&!this._pending.empty&&this.notifyChange("updating"),t===Ke.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,t){const r=0===this._changes.updates.length;for(const r of e){const e=this._changes.updates.pushNew();e.renderGeometry=this._validateRenderGeometry(r),e.updateType=t}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),t){case et.TRANSFORMATION:case et.GEOMETRY:return this._notifyGraphicGeometryChanged(e);case et.VISIBILITY:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let t=!1;return this._sortedRenderers.forAll((r=>t=!!r.updateAnimation&&r.updateAnimation(e)||t)),t}precompile(e){return this._sortedRenderers.reduce(((t,r)=>r.precompile(e)||t),!1)}render(e){this._sortedRenderers.forAll((t=>{const r=t.acquireTechniques(e);r&&(t.render(e,r),tt(r))}))}intersect(e,t,r,i,s){for(const o of this._geometries.values()){if(!i(o))continue;this._intersectRenderGeometry(o,r,t,0,e,s);const a=this.rendererContext.longitudeCyclical;a&&(o.boundingSphere[0]-o.boundingSphere[3]<a.min&&this._intersectRenderGeometry(o,r,t,a.range,e,s),o.boundingSphere[0]+o.boundingSphere[3]>a.max&&this._intersectRenderGeometry(o,r,t,-a.range,e,s)),s++}return s}_updateSortedMaterialRenderers(){this._sortedRenderers.clear();let e=0;for(const t of this._renderers.values())t.drapedPriority=e++,this._sortedRenderers.push(t);this._sortedRenderers.sort(((e,t)=>t.material?.renderPriority===e.material?.renderPriority?e.drapedPriority-t.drapedPriority:(t.material?.renderPriority||0)-(e.material?.renderPriority||0)))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes)),this._changes.updates.filterInPlace((({renderGeometry:e})=>!this._pending.has(e))),this._pending.clear()}_intersectRenderGeometry(e,t,r,i,s,o){if(!e.visible||!e.material.visible)return;let a=0;i+=e.transformation[12],a=e.transformation[13],ms[0]=r[0]-i,ms[1]=r[1]-a,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersectDraped(e,null,s,ms,((r,i,a)=>{!function(e,t,r,i,s,o,a){const n=new Yt(o,a,t),l=t=>{t.set(Kt.OVERLAY,n,e.dist,e.normal,e.transformation,r,i)};if((null==s.results.min.drapedLayerOrder||r>=s.results.min.drapedLayerOrder)&&(null==s.results.min.dist||s.results.ground.dist<=s.results.min.dist)&&l(s.results.min),s.options.store!==Jt.MIN&&(null==s.results.max.drapedLayerOrder||r<s.results.max.drapedLayerOrder)&&(null==s.results.max.dist||s.results.ground.dist>s.results.max.dist)&&l(s.results.max),s.options.store===Jt.ALL){const e=$t(s.ray);l(e),s.results.all.push(e)}}(t,a,o,e.material.renderPriority,s,e.layerUid,e.graphicUid)}),t)}_notifyGraphicGeometryChanged(e){if(null==this.drapeSource.notifyGraphicGeometryChanged)return;let t;for(const{graphicUid:r}of e)null!=r&&r!==t&&(this.drapeSource.notifyGraphicGeometryChanged(r),t=r)}_notifyGraphicVisibilityChanged(e){if(null==this.drapeSource.notifyGraphicVisibilityChanged)return;let t;for(const{graphicUid:r}of e)null!=r&&r!==t&&(this.drapeSource.notifyGraphicVisibilityChanged(r),t=r)}_validateRenderGeometries(e){for(const t of e)this._validateRenderGeometry(t);return e}_validateRenderGeometry(e){return null==e.localOrigin&&(e.localOrigin=this._localOriginFactory.getOrigin(Zt(e.boundingSphere))),e}get test(){}};e([m()],gs.prototype,"drapeSource",void 0),e([m()],gs.prototype,"updating",null),e([m()],gs.prototype,"rctx",null),e([m({constructOnly:!0})],gs.prototype,"rendererContext",void 0),e([m()],gs.prototype,"_materials",null),e([m()],gs.prototype,"_localOriginFactory",null),e([m({readOnly:!0})],gs.prototype,"isEmpty",null),e([m()],gs.prototype,"_renderers",void 0),e([m()],gs.prototype,"_geometries",void 0),gs=e([v("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],gs);class ps{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}const ms=yt();class fs extends De{constructor(e,t,r){super(e,t,new Ie(Xr,(()=>Promise.resolve().then((()=>Xr)))),r)}initializePipeline(e){return e.hasAlpha?mt({blending:ft,colorWrite:vt}):mt({colorWrite:vt})}}class vs extends er{constructor(){super(...arguments),this.hasAlpha=!1}}e([tr()],vs.prototype,"hasAlpha",void 0);class _s extends we{constructor(){super(...arguments),this.overlayIndex=ar.INNER,this.opacity=1}}const xs=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:_s,build:function(){const e=new Re;return e.include(Xe),e.fragment.uniforms.add(new Te("tex",(e=>e.texture))),e.fragment.uniforms.add(new Oe("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new ue("opacity",(e=>e.opacity))),e.fragment.main.add(Ce`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}},Symbol.toStringTag,{value:"Module"}));class ys extends De{constructor(e,t,r){super(e,t,new Ie(xs,(()=>Promise.resolve().then((()=>xs)))),r)}}let Cs=class extends rt{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new _s,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new n,this._passParameters=new Qr,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new fe,this.worldToPCSRatio=1,this.events=new t,this.longitudeCyclical=null,this.produces=new Map([[Me.DRAPED_MATERIAL,e=>e!==ce.Highlight||this.hasHighlights],[Me.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const{view:e}=this,{_stage:t}=e,r=t.renderer.fboCache,i=t.renderView,{waterTextures:s,textures:o}=i;this._renderContext=new Fi(this._rctx,new Vi(r,e.state.viewingMode)),this.addHandles([l((()=>s.updating),(()=>this.events.emit("content-changed")),h),l((()=>this.spatialReference),(e=>this._localOriginFactory=new N(e)),h),d((()=>this.view.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),l((()=>wi(this.view.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),h)]),this._materials=new Ri(o,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));const{_bindParameters:a,_camera:n}=this;a.slot=Me.DRAPED_MATERIAL,a.mainDepth=null,n.near=1,n.far=1e4,n.relativeElevation=null,a.camera=this._camera,a.oitPass=Fe.NONE,a.updateLighting([new le(z())],0,0,Oi.Immediate),this.addHandles(this.view.resourceController.scheduler.registerTask(ir.STAGE,this))}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=o(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this.view._stage.renderView.renderingContext}get _techniques(){return this.view._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){this._pluginContext=e,this._techniques.precompile(ys)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||i(this._renderers,(e=>e.updating))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const t of this._renderers.values()){const r=t.getMaterialRenderer(e);if(r)return r}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,gs)}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);null!=i&&i.destroy();const s=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,s),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles(l((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),s}removeDrapeSourceRenderer(e){if(null==e)return;const t=this._renderers.get(e);null!=t&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),t.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&g(e,(e=>e.drapeTargetType===U.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=g(e,(e=>e.drapeSourceType===G.Features)),this._hasDrapedRasterSource=g(e,(e=>e.drapeSourceType===G.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,t,r=this._bindParameters.overlayStretch){null==this._overlays&&(this._renderTargets=new mr(this.view._stage.renderer.fboCache),this._overlays=[new dr,new dr]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t),this._bindParameters.overlayStretch=r}disposeOverlays(){this._overlays=null,this._renderTargets=o(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){if(null!=e)return e===cr.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(cr.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,s]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&s.commitChanges()&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=i(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(sr,(e=>e.updatePolicy===rr.SYNC))}get isEmpty(){return!q.OVERLAY_DRAW_DEBUG_TEXTURE&&!i(this._renderers,(e=>!e.isEmpty))}get hasWater(){return this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=Ts,++this._techniques.precompiling;const t=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,t}renders(e){if(q.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==cr.Occluded&&e!==cr.Highlight)return!0;++this._techniques.precompiling;const t=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,t}get mode(){return this.isEmpty?Gr.Disabled:this._renderTargets?.getTexture(cr.WaterNormal)?Gr.EnabledWithWater:this._renderTargets?.getTexture(cr.Color)?Gr.Enabled:Gr.Disabled}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(this._renderTargets){this._bindParameters.alignPixelEnabled=e.alignPixelEnabled,this._bindParameters.highlightGroupName=null,++this._techniques.precompiling;for(const e of this._renderTargets.targets){if(e.content===cr.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const t=e.output;this._renderContext.output=t,this._bindParameters.slot=t===ce.Normal?Me.DRAPED_WATER:Me.DRAPED_MATERIAL,e.content===cr.Occluded&&(this._renderContext.renderOccludedMask=Ts),this._sortedRenderers.forAll((({drapeSource:t,renderer:r})=>{e.content===cr.ColorNoRasterImage&&t.drapeSourceType===G.RasterImage||r.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=Ei}--this._techniques.precompiling}}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)this.longitudeCyclical?e.setupGeometryViewsCyclical(this.longitudeCyclical):e.setupGeometryView();this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const t of this._renderTargets.targets){if(t.content===cr.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget(ar.INNER,t,e),i=this._drawTarget(ar.OUTER,t,e);(r||i)&&t.fbo.generateMipMap()}}}_drawTarget(e,t,r){const i=this._overlays[e],s=i.canvasGeometries;if(0===s.numViews)return!1;const{contentPixelRatio:o}=r;this._screenToWorldRatio=o*i.mapUnitsPerPixel/this._bindParameters.overlayStretch;const a=t.output;if(this.isEmpty||a===ce.Normal&&!this.hasWater||!i.hasSomeSizedView())return!1;const{_rctx:n,_bindParameters:l}=this;if(this._camera.pixelRatio=i.pixelRatio*o,this._renderContext.output=a,l.screenToWorldRatio=this._screenToWorldRatio,l.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,l.slot=a===ce.Normal?Me.DRAPED_WATER:Me.DRAPED_MATERIAL,t.content===cr.Occluded&&(this._renderContext.renderOccludedMask=Ts),l.highlightGroupName=null,!this.renders(t.content))return this._renderContext.renderOccludedMask=Ei,!1;const{resolution:c}=i,h=e===ar.INNER?0:c;if(n.setViewport(h,0,c,c),this._bindTargetFBO(t),e===ar.INNER&&(n.setClearColor(0,0,0,0),n.clear(Ot.COLOR)),q.OVERLAY_DRAW_DEBUG_TEXTURE&&t.content!==cr.Occluded&&t.content!==cr.Highlight){this._techniques.precompile(fs,Rs);const t=this._techniques.acquire(fs,Rs);for(let r=0;r<s.numViews;r++)this._setViewParameters(s.extents[r],i),this._ensureDebugPatternResources(i.resolution,Ss[e]),n.bindTechnique(t,l,this._passParameters),n.screen.draw();t.release()}if(t.output===ce.Highlight){const{fboCache:r}=this.view._stage.renderer,i=this._resolution;bi(n,r,{width:i,height:i},this.view.highlights,l,(()=>this._renderAllGeometry(e,t)),h,(()=>this._bindTargetFBO(t)))}else this._renderAllGeometry(e,t);return n.bindFramebuffer(null),this._renderContext.renderOccludedMask=Ei,!0}_renderAllGeometry(e,t){const r=this._overlays[e],i=r.canvasGeometries;this._sortedRenderers.forAll((({drapeSource:s,renderer:o})=>{if(t.content===cr.ColorNoRasterImage&&s.drapeSourceType===G.RasterImage)return;const{fullOpacity:a}=s,n=null!=a&&a<1&&t.output===ce.Color&&this._bindTemporaryFBO();for(let e=0;e<i.numViews;e++)this._setViewParameters(i.extents[e],r),o.render(this._renderContext);if(n){this._bindTargetFBO(t),this._overlayParameters.texture=n.getTexture(),this._overlayParameters.opacity=a,this._overlayParameters.overlayIndex=e;const r=this._techniques.acquire(ys);this._rctx.bindTechnique(r,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),r.release(),n.release()}}))}_bindTargetFBO(e){const t=this._resolution,r=2*t;e.fbo.bind(this._rctx,r,t)}_bindTemporaryFBO(){const e=this._resolution,t=2*e,r=this.view._stage.renderer.fboCache,i=r.acquire(t,e,"overlay tmp");return r.rctx.bindFramebuffer(i.fbo),r.rctx.clear(Ot.COLOR),i}get _resolution(){return this._overlays?.[ar.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let s=0;for(const{renderer:o}of this._sortedRenderers)s=o.intersect?.(e,t,r,i,s)??s}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this.view.map.allLayers,t=e.length;this._renderers.forEach(((r,i)=>{const s=e.indexOf(i.layer),o=s>=0,a=i.renderGroup??(o?W.MapLayer:W.ViewLayer),n=t*a+(o?s:0);this._sortedRenderers.push(new ws(i,r,n))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t){const r=this._camera;r.viewport=[0,0,t.resolution,t.resolution],S(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),b(r.viewMatrix,[-e[0],-e[1],0])}_updateHasWater(){const e=i(this._renderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water"))}_ensureDebugPatternResources(e,t){if(L(this._passParameters.color,t[0],t[1],t[2]),this._passParameters.texture)return;const r=new Uint8Array(e*e*4);let i=0;for(let t=0;t<e;t++)for(let s=0;s<e;s++){const o=Math.floor(s/10),a=Math.floor(t/10);o<2||a<2||10*o>e-20||10*a>e-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&a?1&s^1&t?0:255:1&o^1&a?0:128)}const s=new Lt(e);s.samplingMode=Pt.NEAREST,this._passParameters.texture=new jt(this._rctx,s,r)}get test(){}};e([m()],Cs.prototype,"hasHighlights",void 0),e([m()],Cs.prototype,"_sortedDrapeSourceRenderersDirty",void 0),e([m({constructOnly:!0})],Cs.prototype,"view",void 0),e([m({readOnly:!0})],Cs.prototype,"_techniques",null),e([m()],Cs.prototype,"worldToPCSRatio",void 0),e([m()],Cs.prototype,"spatialReference",void 0),e([m({type:Boolean,readOnly:!0})],Cs.prototype,"updating",null),e([m()],Cs.prototype,"isEmpty",null),e([m({readOnly:!0})],Cs.prototype,"rendersOccludedDraped",null),Cs=e([v("esri.views.3d.terrain.OverlayRenderer")],Cs);class ws{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const Ss=[[1,.5,.5],[.5,.5,1]],bs=-2,Ts=St.OccludeAndTransparent,Rs=new vs;Rs.hasAlpha=!0;class Ps{constructor(e,t={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=We(),this._shaderTransformation=null,this._boundingSphere=null,this.id=p(),this.layerUid=t.layerUid,this.graphicUid=t.graphicUid,this.castShadow=t.castShadow??!1,t.objectShaderTransformation&&this.objectShaderTransformationChanged(t.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(e){T(this._transformation,e),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(e){null==e?this._shaderTransformation=null:(this._shaderTransformation??=We(),y(this._shaderTransformation,e,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=Xt(),E(Zt(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*or(this.shaderTransformation)),this._boundingSphere):Qt}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightGroup(e){this.geometry.foreachHighlightGroup(e)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}}export{Ii as B,Rr as C,Cr as F,Sr as G,xr as H,vr as M,ar as O,gi as P,Ps as R,gs as S,lr as T,Oi as U,yr as V,Nr as W,Tr as a,Cs as b,Gr as c,bs as d,Ur as e,cr as f,nr as g,pi as h,mi as i,Vr as j,Hr as k,Wr as l,kr as m,hr as n,Ts as o,ji as p,_r as q,Di as r,Vi as s,Ai as t,Ei as u,bi as v,fs as w,vs as x,Ri as y,fi as z};
