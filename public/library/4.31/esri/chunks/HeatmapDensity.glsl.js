// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(f,r,t,a,u,b){function g(h){const k=new u.ShaderBuilder,{vertex:c,fragment:l,attributes:d,varyings:m}=k;r.addProjViewLocalOrigin(c,h);const {isAttributeDriven:e,usesHalfFloat:n}=h;d.add(b.VertexAttribute.POSITION,
"vec3");d.add(b.VertexAttribute.UV0,"vec2");e&&(d.add(b.VertexAttribute.FEATUREATTRIBUTE,"float"),m.add("attributeValue","float"));n&&l.constants.add("compressionFactor","float",.25);m.add("unitCirclePos","vec2");c.uniforms.add(new t.FloatPassUniform("radius",({resolutionForScale:p,searchRadius:v},{camera:q,screenToWorldRatio:w,overlayStretch:x})=>2*v*(0===p?1:p/w)*q.pixelRatio/q.fullViewport[2]/x));c.main.add(a.glsl`
    unitCirclePos = uv0;

    vec4 posProj = proj * (view * vec4(${b.VertexAttribute.POSITION}, 1.0));
    vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

    ${e?a.glsl`attributeValue = ${b.VertexAttribute.FEATUREATTRIBUTE};`:""}
    gl_Position = posProj + quadOffset;
  `);l.main.add(a.glsl`
    float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
    if (radiusRatioSquared > 1.0) {
      fragColor = vec4(0.0);
    }
    else {
      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${e?a.glsl` * attributeValue`:""} ${n?a.glsl` * compressionFactor`:""};
      fragColor = vec4(density);
    }
  `);return k}const y=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));f.HeatmapDensity=y;f.build=g});