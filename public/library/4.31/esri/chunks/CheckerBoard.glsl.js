// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(e,n,p,q,r,t,f,g,u,h,v){function k(b){const a=new u.ShaderBuilder,{vertex:l,fragment:c,varyings:m}=a;a.include(n.SliceDraw,b);a.include(p.terrainDepthTest,b);a.include(v.outputColorHighlightOID,b);r.addProjViewLocalOrigin(l,b);a.attributes.add(h.VertexAttribute.POSITION,"vec3");a.attributes.add(h.VertexAttribute.UV0,"vec2");m.add("vUV","vec2");m.add("vpos","vec3");b.terrainDepthTest&&a.varyings.add("depth","float");l.main.add(g.glsl`
      vUV = uv0;
      vpos = position;
      ${b.terrainDepthTest?"depth \x3d (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);`);c.uniforms.add(new t.Float2PassUniform("size",d=>d.size));c.uniforms.add(new f.Float4PassUniform("color1",d=>d.color1));c.uniforms.add(new f.Float4PassUniform("color2",d=>d.color2));c.include(q.ColorConversion);c.main.add(g.glsl`
      ${b.terrainDepthTest?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      outputColorHighlightOID(fragColor, vpos);`);return a}const w=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));e.CheckerBoard=w;e.build=k});