/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{n as t}from"./compilerUtils.js";import{c as e}from"./mat3f64.js";import{c as o}from"./vec4f64.js";import{N as a,a as n}from"./NormalAttribute.glsl.js";import{a as r,b as i}from"./VertexPosition.glsl.js";import{g as s,I as c}from"./interfaces3.js";import{M as l}from"./Matrix3DrawUniform.js";import{M as h,F as d,T as u,b as m,U as f}from"./Matrix4PassUniform.js";import{W as g,h as p,X as v}from"./StencilUtils.js";import{B as b}from"./BindType.js";import"../core/Error.js";import"./Logger.js";import"./basicInterfaces.js";import{c as y,l as S}from"./mathUtils.js";import{f as N,i as R,y as _,s as H,g as F,l as L}from"./vec3.js";import{z as x,f as w,c as M}from"./vec3f64.js";var T,G,I;function C(e,o){switch(o.normalType){case a.Attribute:case a.Compressed:e.include(n,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new l("transformNormalGlobalFromModel",(t=>t.transformNormalGlobalFromModel)),new h("transformNormalViewFromGlobal",(t=>t.transformNormalViewFromGlobal))),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:t(o.normalType);case a.COUNT:}}!function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"}(T||(T={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(G||(G={}));class P extends i{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e()}}class D extends r{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e(),this.toMapSpace=o()}}function V(t){t.uniforms.add(new d("mainLightDirection",((t,e)=>e.lighting.mainLight.direction)))}function B(t){t.uniforms.add(new d("mainLightIntensity",((t,e)=>e.lighting.mainLight.intensity)))}function W(t){V(t.fragment),B(t.fragment),t.fragment.code.add(s`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function A(t,e){const o=e.pbrMode,a=t.fragment;if(o!==I.Schematic&&o!==I.Disabled&&o!==I.Normal)return void a.code.add(s`void applyPBRFactors() {}`);if(o===I.Disabled)return void a.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(o===I.Schematic)return void a.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:n,hasMetallicRoughnessTextureTransform:r,hasOcclusionTexture:i,hasOcclusionTextureTransform:l,bindType:h}=e;(n||i)&&t.include(g,e),a.code.add(s`vec3 mrr;
float occlusion;`),n&&a.uniforms.add(h===b.Pass?new p("texMetallicRoughness",(t=>t.textureMetallicRoughness)):new u("texMetallicRoughness",(t=>t.textureMetallicRoughness))),i&&a.uniforms.add(h===b.Pass?new p("texOcclusion",(t=>t.textureOcclusion)):new u("texOcclusion",(t=>t.textureOcclusion))),a.uniforms.add(h===b.Pass?new d("mrrFactors",(t=>t.mrrFactors)):new m("mrrFactors",(t=>t.mrrFactors))),a.code.add(s`
    ${c(n,s`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${c(i,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${i?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${c(n,`applyMetallicRoughness(${r?"metallicRoughnessUV":"vuv0"});`)}
      ${c(i,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}function O(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function k(t,e){const o=t.fragment.code;t.include(v),e.pbrMode!==I.Normal&&e.pbrMode!==I.Schematic&&e.pbrMode!==I.Simplified&&e.pbrMode!==I.TerrainWithWater||(o.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==I.Normal&&e.pbrMode!==I.Schematic||(t.include(O),o.add(s`struct PBRShadingInfo
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
};`),o.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function E(t,e){const o=t.fragment.code;t.include(v),o.add(s`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),o.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}!function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"}(I||(I={}));const j=3e5,U=5e5;class z extends f{constructor(t,e){super(t,"vec2",b.Draw,((o,a,n,r)=>o.setUniform2fv(t,e(a,n,r))))}}class ${constructor(t=x()){this.intensity=t}}class X{constructor(t=x(),e=w(.57735,.57735,.57735)){this.intensity=t,this.direction=e}}class K{constructor(t=x(),e=w(.57735,.57735,.57735),o=!0,a=1,n=1){this.intensity=t,this.direction=e,this.castShadows=o,this.specularStrength=a,this.environmentStrength=n}}class q{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function J(t,e,o){(o=o||t).length=t.length;for(let a=0;a<t.length;a++)o[a]=t[a]*e[a];return o}function Q(t,e,o){(o=o||t).length=t.length;for(let a=0;a<t.length;a++)o[a]=t[a]*e;return o}function Y(t,e,o){(o=o||t).length=t.length;for(let a=0;a<t.length;a++)o[a]=t[a]+e[a];return o}function Z(t){return(t+1)*(t+1)}function tt(t,e,o){const a=t[0],n=t[1],r=t[2],i=o||[];return i.length=Z(e),e>=0&&(i[0]=.28209479177),e>=1&&(i[1]=.4886025119*a,i[2]=.4886025119*r,i[3]=.4886025119*n),e>=2&&(i[4]=1.09254843059*a*n,i[5]=1.09254843059*n*r,i[6]=.31539156525*(3*r*r-1),i[7]=1.09254843059*a*r,i[8]=.54627421529*(a*a-n*n)),i}const et=[],ot=[],at=[],nt=[0],rt=[0],it=M(),st=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class ct{constructor(){this.color=M(),this.intensity=1}}class lt{constructor(){this.direction=M(),this.ambient=new ct,this.diffuse=new ct}}const ht=.4;class dt{constructor(){this._shOrder=2,this._legacy=new lt,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new q,this._mainLight=new K(M(),w(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(t){(function(t,e,o,a){!function(t,e){const o=Z(t),a=e||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=o;for(let t=0;t<o;t++)a.r[t]=a.g[t]=a.b[t]=0}(e,a),N(o.intensity,0,0,0);let n=!1;const r=et,i=ot,s=at;r.length=0,i.length=0,s.length=0;for(const e of t)e instanceof K&&!n?(R(o.direction,e.direction),R(o.intensity,e.intensity),o.specularStrength=e.specularStrength,o.environmentStrength=e.environmentStrength,o.castShadows=e.castShadows,n=!0):e instanceof K||e instanceof X?r.push(e):e instanceof $?i.push(e):e instanceof q&&s.push(e);(function(t,e){const o=(a=e.r.length,y(Math.floor(Math.sqrt(a)-1),0,2));var a;for(const a of t)_(it,a.direction),tt(it,o,nt),J(nt,st),Q(nt,a.intensity[0],rt),Y(e.r,rt),Q(nt,a.intensity[1],rt),Y(e.g,rt),Q(nt,a.intensity[2],rt),Y(e.b,rt)})(r,a),function(t,e){tt(it,0,nt);for(const o of t)e.r[0]+=nt[0]*st[0]*o.intensity[0]*4*Math.PI,e.g[0]+=nt[0]*st[0]*o.intensity[1]*4*Math.PI,e.b[0]+=nt[0]*st[0]*o.intensity[2]*4*Math.PI}(i,a);for(const t of s)Y(a.r,t.r),Y(a.g,t.g),Y(a.b,t.b)})(t,this._shOrder,this._mainLight,this._sphericalHarmonics),R(this._legacy.direction,this._mainLight.direction);const e=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*e,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*e,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*e,H(this._legacy.diffuse.color,this._mainLight.intensity,e),R(ut,this._legacy.diffuse.color),H(ut,ut,.4*this.globalFactor),F(this._legacy.ambient.color,this._legacy.ambient.color,ut)}copyFrom(t){this._sphericalHarmonics.r=Array.from(t.sh.r),this._sphericalHarmonics.g=Array.from(t.sh.g),this._sphericalHarmonics.b=Array.from(t.sh.b),R(this._mainLight.direction,t.mainLight.direction),R(this._mainLight.intensity,t.mainLight.intensity),this._mainLight.castShadows=t.mainLight.castShadows,this._mainLight.specularStrength=t.mainLight.specularStrength,this._mainLight.environmentStrength=t.mainLight.environmentStrength,this.globalFactor=t.globalFactor,this.noonFactor=t.noonFactor}lerpLighting(t,e,o){if(L(this._mainLight.intensity,t.mainLight.intensity,e.mainLight.intensity,o),this._mainLight.environmentStrength=S(t.mainLight.environmentStrength,e.mainLight.environmentStrength,o),this._mainLight.specularStrength=S(t.mainLight.specularStrength,e.mainLight.specularStrength,o),R(this._mainLight.direction,e.mainLight.direction),this._mainLight.castShadows=e.mainLight.castShadows,this.globalFactor=S(t.globalFactor,e.globalFactor,o),this.noonFactor=S(t.noonFactor,e.noonFactor,o),t.sh.r.length===e.sh.r.length)for(let a=0;a<e.sh.r.length;a++)this._sphericalHarmonics.r[a]=S(t.sh.r[a],e.sh.r[a],o),this._sphericalHarmonics.g[a]=S(t.sh.g[a],e.sh.g[a],o),this._sphericalHarmonics.b[a]=S(t.sh.b[a],e.sh.b[a],o);else for(let t=0;t<e.sh.r.length;t++)this._sphericalHarmonics.r[t]=e.sh.r[t],this._sphericalHarmonics.g[t]=e.sh.g[t],this._sphericalHarmonics.b[t]=e.sh.b[t]}}const ut=M();export{$ as A,T as C,G as D,z as F,K as M,I as P,dt as S,D as V,C as a,j as b,ht as c,U as d,k as e,V as f,B as g,W as h,A as i,P as j,E as k,X as l};
