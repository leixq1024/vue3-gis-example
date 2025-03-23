// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../collections/Component/Material/shader/ComponentData.glsl ../../../core/shaderLibrary/attributes/NormalAttribute.glsl ../../../core/shaderLibrary/util/DoublePrecision.glsl ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/Float3DrawUniform ../../../core/shaderModules/Float3PassUniform ../../../core/shaderModules/FloatPassUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Matrix3DrawUniform ../../../core/shaderModules/Matrix3PassUniform ../../../core/shaderModules/Matrix4PassUniform ../../../core/shaderModules/Texture2DDrawUniform ../../../lib/VertexAttribute".split(" "),
function(e,m,n,p,q,g,h,r,d,k,t,u,v,l){e.EdgeType=void 0;(function(b){b[b.Solid=0]="Solid";b[b.Sketch=1]="Sketch";b[b.Mixed=2]="Mixed";b[b.COUNT=3]="COUNT"})(e.EdgeType||(e.EdgeType={}));e.EdgeSilhouette=void 0;(function(b){b[b.REGULAR=0]="REGULAR";b[b.SILHOUETTE=1]="SILHOUETTE"})(e.EdgeSilhouette||(e.EdgeSilhouette={}));e.EdgeUtil=function(b,f){const a=b.vertex;a.include(q.RgbaFloatEncoding);b.include(n.NormalAttribute,f);a.uniforms.add(new r.FloatPassUniform("distanceFalloffFactor",c=>c.distanceFalloffFactor));
a.code.add(d.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`);a.uniforms.add(new v.Texture2DDrawUniform("componentDataTex",c=>c.componentDataTexture));b.attributes.add(l.VertexAttribute.COMPONENTINDEX,"float");a.constants.add("componentColorFieldOffset","float",0);a.constants.add("componentOtherFieldOffset","float",1);a.constants.add("componentVerticalOffsetFieldOffset","float",2);a.constants.add("componentFieldCount","float",3);a.constants.add("lineWidthFractionFactor","float",8);a.constants.add("extensionLengthOffset","float",128);a.code.add(d.glsl`
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
      vec3 normal2 = ${f.silhouette?d.glsl`decompressNormal(normal2Compressed)`:d.glsl`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${d.glsl.float(m.maxElevationOffset)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `);f.legacy?a.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(a.uniforms.add(new k.Matrix3DrawUniform("transformNormalGlobalFromModel",c=>c.transformNormalGlobalFromModel)),a.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`));f.silhouette?(b.attributes.add(l.VertexAttribute.NORMAL2COMPRESSED,"vec2"),a.code.add(d.glsl`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):a.code.add(d.glsl`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`);f.legacy?a.code.add(d.glsl`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(a.include(p.DoublePrecision,f),a.uniforms.add(new t.Matrix3PassUniform("transformViewFromCameraRelativeRS",c=>c.transformViewFromCameraRelativeRS),new k.Matrix3DrawUniform("transformWorldFromModelRS",c=>c.transformWorldFromModelRS),new g.Float3DrawUniform("transformWorldFromModelTL",c=>c.transformWorldFromModelTL),new g.Float3DrawUniform("transformWorldFromModelTH",c=>c.transformWorldFromModelTH),new h.Float3PassUniform("transformWorldFromViewTL",c=>c.transformWorldFromViewTL),new h.Float3PassUniform("transformWorldFromViewTH",
c=>c.transformWorldFromViewTH)),a.code.add(d.glsl`
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
          vec3 vUp = ${f.spherical?d.glsl`normalize(transformWorldFromModelTL + rotatedModelPosition);`:d.glsl`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `));a.uniforms.add(new u.Matrix4PassUniform("transformProjFromView",(c,w)=>w.camera.projectionMatrix));a.code.add(d.glsl`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`);a.code.add(d.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)};e.usesSketchLogic=function(b){return b===e.EdgeType.Sketch||b===e.EdgeType.Mixed};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});