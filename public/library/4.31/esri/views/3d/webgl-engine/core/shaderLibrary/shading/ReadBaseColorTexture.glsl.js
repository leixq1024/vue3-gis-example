// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutput ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../../lib/basicInterfaces".split(" "),function(c,e,f,g,h,k){c.ReadBaseColorTexture=function(b,a){const d=a.hasColorTexture&&(e.isColorOrColorEmission(a.output)||a.alphaDiscardMode!==k.AlphaDiscardMode.Opaque);d&&(b.include(f.VertexTextureCoordinates,a),b.fragment.uniforms.add(new h.Texture2DDrawUniform("baseColorTexture",l=>l.texture)));b.fragment.code.add(g.glsl`
    vec4 readBaseColorTexture() {
      return ${d?"textureLookup(baseColorTexture, vuv0)":"vec4(1.0)"};
    }
  `)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});