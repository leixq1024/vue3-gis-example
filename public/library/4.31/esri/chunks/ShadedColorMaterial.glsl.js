// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(q,m,v,w,x,y,z,A,r,B,t,e,C,n,D){function u(b){const c=new C.ShaderBuilder,k=b.terrainDepthTest&&b.output===w.ShaderOutput.Color;c.include(y.Transform,b);c.include(v.ScreenSizeScaling,b);c.include(x.SliceDraw,b);c.include(D.outputColorHighlightOID,b);const {vertex:p,fragment:g}=c;g.include(A.ColorConversion);r.addProjViewLocalOrigin(p,b);g.uniforms.add(new t.Float4PassUniform("uColor",a=>a.color));c.attributes.add(n.VertexAttribute.POSITION,"vec3");c.varyings.add("vWorldPosition","vec3");k&&
c.varyings.add("depth","float");b.screenSizeEnabled&&c.attributes.add(n.VertexAttribute.OFFSET,"vec3");b.shadingEnabled&&(r.addViewNormal(p),c.attributes.add(n.VertexAttribute.NORMAL,"vec3"),c.varyings.add("vViewNormal","vec3"),g.uniforms.add(new B.Float3PassUniform("shadingDirection",a=>a.shadingDirection)),g.uniforms.add(new t.Float4PassUniform("shadedColor",a=>{{var d=a.shadingTint;a=a.color;const l=1-d[3],h=d[3]+a[3]*l;0===h?f[3]=h:(f[0]=(d[0]*d[3]+a[0]*a[3]*l)/h,f[1]=(d[1]*d[3]+a[1]*a[3]*l)/
h,f[2]=(d[2]*d[3]+a[2]*a[3]*l)/h,f[3]=a[3]);d=f}return d})));p.main.add(e.glsl`
      vWorldPosition = ${b.screenSizeEnabled?e.glsl`screenSizeScaling(offset, position)`:e.glsl`position`};
      ${b.shadingEnabled?e.glsl`vec3 worldNormal = normal;
                 vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`:""}
      ${k?e.glsl`depth = (view * vec4(vWorldPosition, 1.0)).z;`:""}
      gl_Position = transformPosition(proj, view, vWorldPosition);
  `);k&&c.include(z.terrainDepthTest,b);g.main.add(e.glsl`
      discardBySlice(vWorldPosition);
      ${k?e.glsl`terrainDepthTest(depth);`:""}
      ${b.shadingEnabled?e.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:e.glsl`vec4 finalColor = uColor;`}
      outputColorHighlightOID(finalColor, vWorldPosition);`);return c}const f=m.create();m=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));q.ShadedColorMaterial=m;q.build=u});