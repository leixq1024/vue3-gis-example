// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadDepth.glsl","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(d,e,a,f){d.terrainDepthTest=function(b,{occlusionPass:c,terrainDepthTest:g,cullAboveTerrain:h}){g?(b.fragment.include(e.ReadDepth),b.fragment.uniforms.add(new f.Texture2DPassUniform("terrainDepthTexture",(l,k)=>k.terrainDepth?.attachment)).code.add(a.glsl`
   ${c?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${c?a.glsl`return fragmentDepth < linearDepth && depth < 1.0;`:a.glsl`if(fragmentDepth ${h?"\x3e":"\x3c\x3d"} linearDepth) discard;`}
    }`)):c?b.fragment.code.add(a.glsl`#define terrainDepthTest(fragmentDepth) false`):b.fragment.code.add(a.glsl`#define terrainDepthTest(fragmentDepth) {}`)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});