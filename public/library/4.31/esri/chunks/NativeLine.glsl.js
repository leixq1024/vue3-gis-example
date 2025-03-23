// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,g,l,m,n,p,q,r,t,u,c,v,w){function h(a){const b=new v.ShaderBuilder,{vertex:k,fragment:d}=b;b.include(m.Transform,a);b.include(n.VertexColor,a);r.addProjViewLocalOrigin(k,a);b.attributes.add(w.VertexAttribute.POSITION,"vec3");b.varyings.add("vpos","vec3");k.main.add(c.glsl`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`);b.include(p.OutputHighlight,a);b.include(l.SliceDraw,a);d.uniforms.add(new u.FloatPassUniform("alphaCoverage",(e,x)=>Math.min(1,e.width*x.camera.pixelRatio)));a.hasVertexColors||d.uniforms.add(new t.Float4PassUniform("constantColor",e=>e.color));d.main.add(c.glsl`
    discardBySlice(vpos);

    vec4 color = ${a.hasVertexColors?"vColor":"constantColor"};

    ${a.output===g.ShaderOutput.ObjectAndLayerIdColor?"color.a \x3d 1.0;":""}

    if (color.a < ${c.glsl.float(q.alphaCutoff)}) {
      discard;
    }

    ${a.output===g.ShaderOutput.Color?c.glsl`fragColor = highlightSlice(color, vpos);`:""}
    calculateOcclusionAndOutputHighlight();
  `);return b}const y=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));f.NativeLine=y;f.build=h});