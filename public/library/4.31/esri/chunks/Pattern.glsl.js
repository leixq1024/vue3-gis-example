// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/materials/PatternStyle ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl".split(" "),
function(r,t,x,y,z,A,B,C,D,u,E,p,b,F,h,e,G){function v(a){const c=new F.ShaderBuilder,{vertex:d,fragment:f,attributes:k,varyings:l}=c,m=a.terrainDepthTest&&a.output===t.ShaderOutput.Color,w=a.output===t.ShaderOutput.Highlight;u.addProjViewLocalOrigin(d,a);c.include(y.Transform,a);c.include(A.VertexColor,a);c.include(C.VisualVariables,a);c.include(z.ObjectAndLayerIdColor,a);c.include(x.SliceDraw,a);c.include(G.outputColorHighlightOID,a);a.draped?d.uniforms.add(new p.FloatPassUniform("worldToScreenRatio",
(n,g)=>1/g.screenToPCSRatio)):k.add(h.VertexAttribute.BOUNDINGRECT,"mat3");k.add(h.VertexAttribute.POSITION,"vec3");k.add(h.VertexAttribute.UVMAPSPACE,"vec4");a.vvColor&&k.add(h.VertexAttribute.COLORFEATUREATTRIBUTE,"float");l.add("vColor","vec4");l.add("vpos","vec3");l.add("vuv","vec2");m&&l.add("depth","float");d.uniforms.add(new E.Float4PassUniform("uColor",n=>n.color));const q=a.style===e.Style.ForwardDiagonal||a.style===e.Style.BackwardDiagonal||a.style===e.Style.DiagonalCross;q&&d.code.add(b.glsl`
      const mat2 rotate45 = mat2(${b.glsl.float(.70710678118)}, ${b.glsl.float(-.70710678118)},
                                 ${b.glsl.float(.70710678118)}, ${b.glsl.float(.70710678118)});
    `);a.draped||(u.addCameraPosition(d,a),d.uniforms.add(new p.FloatPassUniform("worldToScreenPerDistanceRatio",(n,g)=>1/g.camera.perScreenPixelRatio)),d.code.add(b.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),d.code.add(b.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),d.code.add(b.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${b.glsl.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `));d.code.add(b.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${q?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${q?" * rotate45":""};

      ${a.draped?"":b.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${b.glsl.float(10)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);d.main.add(b.glsl`
    vuv = scaledUV();
    vpos = position;
    ${m?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
    forwardNormalizedVertexColor();
    forwardObjectAndLayerIdColor();
    ${a.hasVertexColors?"vColor *\x3d uColor;":a.vvColor?"vColor \x3d uColor * interpolateVVColor(colorFeatureAttribute);":"vColor \x3d uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `);f.include(D.ColorConversion);a.draped&&f.uniforms.add(new p.FloatPassUniform("texelSize",(n,g)=>1/g.camera.pixelRatio));m&&c.include(B.terrainDepthTest,a);w||(f.code.add(b.glsl`
      const float lineWidth = ${b.glsl.float(1)};
      const float spacing = ${b.glsl.float(10)};
      const float spacingINV = ${b.glsl.float(.1)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),a.draped||f.code.add(b.glsl`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`));f.main.add(b.glsl`
    discardBySlice(vpos);
    ${m?"terrainDepthTest(depth);":""}
    vec4 color = vColor;
    ${w?"":b.glsl`color.a *= ${H(a)};`}
    outputColorHighlightOID(color, vpos);
  `);return c}function H(a){function c(d){return a.draped?b.glsl`coverage(vuv.${d}, texelSize)`:b.glsl`sampleAA(vuv.${d})`}switch(a.style){case e.Style.ForwardDiagonal:case e.Style.Horizontal:return c("y");case e.Style.BackwardDiagonal:case e.Style.Vertical:return c("x");case e.Style.DiagonalCross:case e.Style.Cross:return b.glsl`1.0 - (1.0 - ${c("x")}) * (1.0 - ${c("y")})`;default:return"0.0"}}const I=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));
r.Pattern=I;r.build=v});