// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/shaders/ScreenSpacePassAtmosphere.glsl".split(" "),
function(d,f,g,h,k,l,m,n,p,q,r,t,u){function e(){const a=new t.ShaderBuilder,{fragment:b}=a;a.include(u.ScreenSpacePassAtmosphere,{needUVs:!1,needEyeDirection:!1});b.include(m.ColorConversion);b.include(n.RgbaFloatEncoding);a.include(f.EvaluateAmbientLighting,{pbrMode:h.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2});a.include(k.PiUtils);a.include(g.Gamma);a.include(l.CloudsParallaxShading);b.uniforms.add(new p.Float3PassUniform("cameraPosition",(v,c)=>c.camera.eye),new q.FloatPassUniform("cloudsOpacity",
(v,c)=>c.clouds.opacity)).main.add(r.glsl`vec4 cloudsColor = renderClouds(normalize(worldRay), cameraPosition);
fragColor = vec4(cloudsOpacity * cloudsColor.rgb, cloudsColor.a);`);return a}const w=Object.freeze(Object.defineProperty({__proto__:null,build:e},Symbol.toStringTag,{value:"Module"}));d.CloudsComposition=w;d.build=e});