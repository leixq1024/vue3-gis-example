/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import o from"../Color.js";import"../core/lang.js";import{a as e}from"./screenUtils.js";import{f as t,b as r}from"./vec4f64.js";import{n}from"./compilerUtils.js";import{p as a}from"./floatRGBA.js";import{D as l}from"./DecodeSymbolColor.glsl.js";import{U as d,T as c,S as i,o as s,c as m,M as f,b as x,F as u,a as v}from"./Matrix4PassUniform.js";import{R as p}from"./RgbaFloatEncoding.glsl.js";import{F as C}from"./Float4DrawUniform.js";import{B as w}from"./BindType.js";import{g as F}from"./interfaces3.js";import{V as T}from"./VertexAttribute.js";import{a as M}from"./NormalAttribute.glsl.js";import{M as O,D as h}from"./Matrix3DrawUniform.js";var g,y;!function(o){o[o.TRANSPARENT=0]="TRANSPARENT",o[o.OPAQUE=1]="OPAQUE"}(g||(g={}));class E extends d{constructor(o,e){super(o,"int",w.Draw,((t,r,n)=>t.setUniform1i(o,e(r,n))))}}!function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"}(y||(y={}));const P=429496.7296;function I(o,e){a(o/P*.5+.5,e)}function S(o,e){switch(e.componentData){case y.Varying:return function(o,e){const{vertex:t,fragment:r}=o;t.include(p),t.uniforms.add(new c("componentColorTex",(o=>o.componentParameters.texture.texture))),o.attributes.add(T.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const n=e.output===i.ObjectAndLayerIdColor;n&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(l),t.constants.add("stride","float",s()?3:2),t.code.add(F`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),t.code.add(F`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${F.float(P)};
  }

  ${n?F`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:F`void forwardObjectAndLayerIdColor() {}`}

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
`),r.code.add(F`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${n?F`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}(o,e);case y.Uniform:return function(o,e){const{vertex:t,fragment:r}=o;t.uniforms.add(new C("externalColor",(o=>o.componentParameters.externalColor))),r.uniforms.add(new E("externalColorMixMode",(o=>o.componentParameters.externalColorMixMode))),o.varyings.add("vExternalColor","vec4"),t.code.add(F`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const n=e.output===i.ObjectAndLayerIdColor;r.code.add(F`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${n?F`fragColor = vec4(0, 0, 0, 0);`:""}
 }
`)}(o,e);case y.COUNT:return;default:n(e.componentData)}}function L(o,e){const t=o.vertex;t.include(p),o.include(M,e),t.uniforms.add(new m("distanceFalloffFactor",(o=>o.distanceFalloffFactor))),t.code.add(F`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),t.uniforms.add(new c("componentDataTex",(o=>o.componentDataTexture))),o.attributes.add(T.COMPONENTINDEX,"float"),t.constants.add("componentColorFieldOffset","float",0),t.constants.add("componentOtherFieldOffset","float",1),t.constants.add("componentVerticalOffsetFieldOffset","float",2),t.constants.add("componentFieldCount","float",3),t.constants.add("lineWidthFractionFactor","float",8),t.constants.add("extensionLengthOffset","float",128),t.code.add(F`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${e.silhouette?F`decompressNormal(normal2Compressed)`:F`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${F.float(P)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),e.legacy?t.code.add(F`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(t.uniforms.add(new O("transformNormalGlobalFromModel",(o=>o.transformNormalGlobalFromModel))),t.code.add(F`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),e.silhouette?(o.attributes.add(T.NORMAL2COMPRESSED,"vec2"),t.code.add(F`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):t.code.add(F`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),e.legacy?t.code.add(F`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(t.include(h,e),t.uniforms.add(new f("transformViewFromCameraRelativeRS",(o=>o.transformViewFromCameraRelativeRS)),new O("transformWorldFromModelRS",(o=>o.transformWorldFromModelRS)),new x("transformWorldFromModelTL",(o=>o.transformWorldFromModelTL)),new x("transformWorldFromModelTH",(o=>o.transformWorldFromModelTH)),new u("transformWorldFromViewTL",(o=>o.transformWorldFromViewTL)),new u("transformWorldFromViewTH",(o=>o.transformWorldFromViewTH))),t.code.add(F`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${e.spherical?F`normalize(transformWorldFromModelTL + rotatedModelPosition);`:F`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),t.uniforms.add(new v("transformProjFromView",((o,e)=>e.camera.projectionMatrix))),t.code.add(F`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),t.code.add(F`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function b(o){return o===V.Sketch||o===V.Mixed}var V,j;function A(o){return o&&o.enabled&&(function(o){return"extrude"===o.type}(o)||function(o){return"fill"===o.type}(o))&&null!=o.edges}function N(o,e){return R(function(o){return o&&o.enabled&&o.edges||null}(o),e)}function R(n,a){if(null==n)return null;const l=null!=n.color?r(o.toUnitRGBA(n.color)):t(0,0,0,0),d=e(n.size),c=e(n.extensionLength);switch(n.type){case"solid":return U({color:l,size:d,extensionLength:c,...a});case"sketch":return function(o){return{...W,...o,type:V.Sketch}}({color:l,size:d,extensionLength:c,...a});default:return}}function U(o){return{...D,...o,type:V.Solid}}!function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"}(V||(V={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(j||(j={}));const D={color:t(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:g.OPAQUE,hasSlicePlane:!1},W={color:t(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:g.OPAQUE,hasSlicePlane:!1};export{y as C,V as E,g as T,R as a,N as b,U as c,L as d,j as e,I as f,S as g,A as h,b as u};
