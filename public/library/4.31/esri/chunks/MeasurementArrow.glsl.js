// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(k,m,n,e,f,c,p,d){function l(q){const b=new p.ShaderBuilder,{vertex:g,
fragment:h}=b;n.addProjViewLocalOrigin(g,q);g.uniforms.add(new f.FloatPassUniform("width",a=>a.width));b.attributes.add(d.VertexAttribute.POSITION,"vec3");b.attributes.add(d.VertexAttribute.NORMAL,"vec3");b.attributes.add(d.VertexAttribute.UV0,"vec2");b.attributes.add(d.VertexAttribute.LENGTH,"float");b.varyings.add("vtc","vec2");b.varyings.add("vlength","float");b.varyings.add("vradius","float");g.main.add(c.glsl`vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;`);h.uniforms.add(new f.FloatPassUniform("outlineSize",a=>a.outlineSize),new e.Float4PassUniform("outlineColor",a=>a.outlineColor),new f.FloatPassUniform("stripeLength",a=>a.stripeLength),new e.Float4PassUniform("stripeEvenColor",a=>a.stripeEvenColor),new e.Float4PassUniform("stripeOddColor",a=>a.stripeOddColor));h.code.add(c.glsl`
    const float INV_SQRT2 = ${c.glsl.float(1/Math.sqrt(2))};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      }
      if (d < outlineSize) {
        return outlineColor;
      }
      return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
    }`);h.main.add(c.glsl`
    vec2 ntc = vec2(vtc.x / vradius, vtc.y);
    vec4 color = arrowColor(ntc, vlength / vradius);
    if (color.a < ${c.glsl.float(m.alphaCutoff)}) {
      discard;
    }
    fragColor = color;`);return b}const r=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));k.MeasurementArrow=r;k.build=l});