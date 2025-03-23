// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/compilerUtils ../../../../../../../core/floatRGBA ./DecodeSymbolColor.glsl ../../../../core/shaderLibrary/ShaderOutput ../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../../core/shaderModules/Float4DrawUniform ../../../../core/shaderModules/IntegerDrawUniform ../../../../core/shaderModules/interfaces ../../../../core/shaderModules/Texture2DDrawUniform ../../../../effects/geometry/olidUtils ../../../../lib/VertexAttribute".split(" "),function(c,
l,m,n,k,p,q,r,d,t,u,v){function w(a,b){const {vertex:e,fragment:g}=a;e.include(p.RgbaFloatEncoding);e.uniforms.add(new t.Texture2DDrawUniform("componentColorTex",f=>f.componentParameters.texture.texture));a.attributes.add(v.VertexAttribute.COMPONENTINDEX,"float");a.varyings.add("vExternalColorMixMode","mediump float");a.varyings.add("vExternalColor","vec4");(b=b.output===k.ShaderOutput.ObjectAndLayerIdColor)&&a.varyings.add("vObjectAndLayerIdColor","vec4");a.include(n.DecodeSymbolColor);e.constants.add("stride",
"float",u.olidEnabled()?3:2);e.code.add(d.glsl`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`);e.code.add(d.glsl`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${d.glsl.float(h)};
  }

  ${b?d.glsl`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:d.glsl`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`);g.code.add(d.glsl`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${b?d.glsl`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function x(a,b){const {vertex:e,fragment:g}=a;e.uniforms.add(new q.Float4DrawUniform("externalColor",f=>f.componentParameters.externalColor));g.uniforms.add(new r.IntegerDrawUniform("externalColorMixMode",f=>f.componentParameters.externalColorMixMode));a.varyings.add("vExternalColor","vec4");e.code.add(d.glsl`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);g.code.add(d.glsl`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${b.output===k.ShaderOutput.ObjectAndLayerIdColor?d.glsl`fragColor = vec4(0, 0, 0, 0);`:""}
 }
`)}c.ComponentDataType=void 0;(function(a){a[a.Uniform=0]="Uniform";a[a.Varying=1]="Varying";a[a.COUNT=2]="COUNT"})(c.ComponentDataType||(c.ComponentDataType={}));const h=2**32/1E4;c.ComponentData=function(a,b){switch(b.componentData){case c.ComponentDataType.Varying:return w(a,b);case c.ComponentDataType.Uniform:return x(a,b);case c.ComponentDataType.COUNT:break;default:l.neverReached(b.componentData)}};c.encodeElevationOffset=function(a,b){m.packFloatRGBA(a/h*.5+.5,b)};c.maxElevationOffset=h;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});