// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(f,p,g,q,r,t,u,v,w,x,y,h,z,k,A){function l(a){const b=new z.ShaderBuilder,{vertex:d,fragment:m,attributes:n,varyings:e}=b;x.addProjViewLocalOrigin(d,a);b.include(q.Transform,a);b.include(t.VertexColor,a);b.include(v.VisualVariables,a);b.include(r.ObjectAndLayerIdColor,a);b.include(g.SliceDraw,a);b.include(A.outputColorHighlightOID,a);n.add(k.VertexAttribute.POSITION,"vec3");a.vvColor&&n.add(k.VertexAttribute.COLORFEATUREATTRIBUTE,"float");e.add("vColor","vec4");e.add("vpos","vec3");const c=
a.terrainDepthTest&&a.output===p.ShaderOutput.Color;c&&e.add("depth","float");d.uniforms.add(new y.Float4PassUniform("eColor",B=>B.color));d.main.add(h.glsl`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${a.hasVertexColors?"vColor *\x3d eColor;":a.vvColor?"vColor \x3d eColor * interpolateVVColor(colorFeatureAttribute);":"vColor \x3d eColor;"}
      ${c?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = transformPosition(proj, view, vpos);`);b.include(g.SliceDraw,a);c&&b.include(u.terrainDepthTest,a);m.include(w.ColorConversion);m.main.add(h.glsl`
    discardBySlice(vpos);
    ${c?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;
    outputColorHighlightOID(fColor, vpos);`);return b}const C=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));f.ColorMaterial=C;f.build=l});