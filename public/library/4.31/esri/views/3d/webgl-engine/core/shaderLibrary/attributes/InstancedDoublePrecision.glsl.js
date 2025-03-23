// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/math/mat3 ../../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../chunks/vec32 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../ShaderOutput ../util/DoublePrecision.glsl ../util/View.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform ../../../lib/VertexAttribute ../../../../../webgl/doublePrecisionUtils".split(" "),
function(l,t,u,m,n,v,w,x,y,p,d,z,A,h,q){class B extends d.NoParameters{constructor(){super(...arguments);this.modelTransformation=null}}const r=u.create(),k=v.create();l.InstancedDoublePassParameters=B;l.InstancedDoublePrecision=function(a,e){const f=e.hasModelTransformation,b=e.instancedDoublePrecision;f&&(a.vertex.uniforms.add(new A.Matrix4PassUniform("model",g=>g.modelTransformation??m.IDENTITY)),a.vertex.uniforms.add(new z.Matrix3PassUniform("normalLocalOriginFromModel",g=>{t.normalFromMat4(r,
g.modelTransformation??m.IDENTITY);return r})));e.instanced&&b&&(a.attributes.add(h.VertexAttribute.INSTANCEMODELORIGINHI,"vec3"),a.attributes.add(h.VertexAttribute.INSTANCEMODELORIGINLO,"vec3"),a.attributes.add(h.VertexAttribute.INSTANCEMODEL,"mat3"),a.attributes.add(h.VertexAttribute.INSTANCEMODELNORMAL,"mat3"));a=a.vertex;b&&(a.include(x.DoublePrecision,e),a.uniforms.add(new p.Float3DrawUniform("viewOriginHi",(g,c)=>q.encodeDoubleHi(n.set(k,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],
c.camera.viewInverseTransposeMatrix[11]),k)),new p.Float3DrawUniform("viewOriginLo",(g,c)=>q.encodeDoubleLo(n.set(k,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),k))));a.code.add(d.glsl`
    vec3 getVertexInLocalOriginSpace() {
      return ${f?b?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":b?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${b?d.glsl`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `);a.code.add(d.glsl`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${f?b?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":b?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `);e.output===w.ShaderOutput.Normal&&(y.addViewNormal(a),a.code.add(d.glsl`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${f?b?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":b?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `));e.hasVertexTangents&&a.code.add(d.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${f?b?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":b?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});