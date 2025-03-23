// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(f,l,m,n,p,q,r,t,u,g,v,w,c,x){function h(b){const a=new v.ShaderBuilder,{vertex:k,fragment:d}=a;t.addProjViewLocalOrigin(k,b);a.include(n.Transform,b);a.include(q.terrainDepthTest,b);a.include(m.SliceDraw,b);a.include(p.ObjectAndLayerIdColor,b);a.include(x.outputColorHighlightOID,b);a.attributes.add(c.VertexAttribute.POSITION,"vec3");a.attributes.add(c.VertexAttribute.UV0,"vec2");b.perspectiveInterpolation&&a.attributes.add(c.VertexAttribute.PERSPECTIVEDIVIDE,"float");a.varyings.add("vpos",
"vec3");b.terrainDepthTest&&a.varyings.add("depth","float");k.main.add(g.glsl`
    vpos = position;
    ${b.terrainDepthTest?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${b.perspectiveInterpolation?"gl_Position *\x3d perspectiveDivide;":""}`);d.uniforms.add(new w.Texture2DPassUniform("tex",e=>e.texture),new u.FloatPassUniform("opacity",e=>e.opacity));a.varyings.add("vTexCoord","vec2");d.include(r.ColorConversion);d.main.add(g.glsl`
    discardBySlice(vpos);
    ${b.terrainDepthTest?"terrainDepthTest(depth);":""}
    ${b.output===l.ShaderOutput.ObjectAndLayerIdColor?"fragColor \x3d vec4(0, 0, 0, 1);\n           return;":""}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`);return a}const y=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));f.ImageMaterial=y;f.build=h});