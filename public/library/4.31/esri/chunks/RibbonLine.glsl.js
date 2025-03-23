// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl ../views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration".split(" "),
function(t,w,I,J,K,x,L,M,N,u,O,y,P,v,l,a,Q,R,n,S,T,z){function A(f){const e=new R.ShaderBuilder,{attributes:p,varyings:g,vertex:b,fragment:d}=e,{applyMarkerOffset:U,draped:q,output:B,capType:C,stippleEnabled:k,falloffEnabled:D,roundJoins:V,wireframe:E,innerColorEnabled:W}=f;e.include(M.PiUtils);e.include(K.RibbonVertexPosition,f);e.include(x.LineStipple,f);e.include(J.ObjectAndLayerIdColor,f);const F=U&&!q;F&&(b.uniforms.add(new l.FloatPassUniform("markerScale",c=>c.markerScale)),e.include(L.MarkerSizing,
{space:S.LineMarkerSpace.World}));y.addProjViewLocalOrigin(b,f);b.uniforms.add(new Q.Matrix4PassUniform("inverseProjectionMatrix",(c,h)=>h.camera.inverseProjectionMatrix),new P.Float2PassUniform("nearFar",(c,h)=>h.camera.nearFar),new l.FloatPassUniform("miterLimit",c=>"miter"!==c.join?0:c.miterLimit),new v.Float4PassUniform("viewport",(c,h)=>h.camera.fullViewport));b.constants.add("LARGE_HALF_FLOAT","float",65500);p.add(n.VertexAttribute.POSITION,"vec3");p.add(n.VertexAttribute.PREVPOSITION,"vec3");
p.add(n.VertexAttribute.NEXTPOSITION,"vec3");p.add(n.VertexAttribute.SUBDIVISIONFACTOR,"float");p.add(n.VertexAttribute.UV0,"vec2");g.add("vColor","vec4");g.add("vpos","vec3");g.add("vLineDistance","float");g.add("vLineWidth","float");const r=f.terrainDepthTest&&B===w.ShaderOutput.Color;r&&g.add("depth","float");k&&g.add("vLineSizeInv","float");const m=C===z.CapType.ROUND,G=k&&m,H=D||G;H&&g.add("vLineDistanceNorm","float");m&&(g.add("vSegmentSDF","float"),g.add("vReverseSegmentSDF","float"));b.code.add(a.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`);b.code.add(a.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`);b.code.add(a.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${r?"depth \x3d pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `);y.addPixelRatio(b);b.constants.add("aaWidth","float",k?0:1).main.add(a.glsl`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${k?a.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `);F&&b.main.add(a.glsl`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`);b.main.add(a.glsl`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);(k||m)&&b.main.add(a.glsl`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${m?a.glsl`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `);b.main.add(a.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`);V?b.main.add(a.glsl`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${k?a.glsl`min(1.0, subdivisionFactor * ${a.glsl.float(1.5)})`:a.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):b.main.add(a.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);b.main.add(a.glsl`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${C!==z.CapType.BUTT?a.glsl`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `);b.main.add(a.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${H?a.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `);m&&b.main.add(a.glsl`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`);k&&(q?b.uniforms.add(new l.FloatPassUniform("worldToScreenRatio",(c,h)=>1/h.screenToPCSRatio)):b.main.add(a.glsl`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),b.main.add(a.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),q?b.main.add(a.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):b.main.add(a.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),b.uniforms.add(new l.FloatPassUniform("stipplePatternPixelSize",c=>x.computePixelSize(c))),b.main.add(a.glsl`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`));b.main.add(a.glsl`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${E&&!q?"pos.z -\x3d 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`);r&&e.include(N.terrainDepthTest,f);e.include(I.SliceDraw,f);e.include(T.outputColorHighlightOID,f);d.include(O.ColorConversion);d.main.add(a.glsl`
    discardBySlice(vpos);
    ${r?"terrainDepthTest(depth);":""}
  `);E?d.main.add(a.glsl`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(m&&d.main.add(a.glsl`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${a.glsl.float(u.alphaCutoff)}) {
          discard;
        }
      `),G?d.main.add(a.glsl`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${a.glsl.float(u.alphaCutoff)}, stippleCoverage);
      `):d.main.add(a.glsl`float stippleAlpha = getStippleAlpha();`),B!==w.ShaderOutput.ObjectAndLayerIdColor&&d.main.add(a.glsl`discardByStippleAlpha(stippleAlpha, ${a.glsl.float(u.alphaCutoff)});`),d.uniforms.add(new v.Float4PassUniform("intrinsicColor",c=>c.color)),d.main.add(a.glsl`vec4 color = intrinsicColor * vColor;`),W&&(d.uniforms.add(new v.Float4PassUniform("innerColor",c=>c.innerColor??c.color),new l.FloatPassUniform("innerWidth",(c,h)=>c.innerWidth*h.camera.pixelRatio)),d.main.add(a.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),d.main.add(a.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),D&&(d.uniforms.add(new l.FloatPassUniform("falloff",c=>c.falloff)),d.main.add(a.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),k||d.main.add(a.glsl`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`));d.main.add(a.glsl`outputColorHighlightOID(finalColor, vpos);`);return e}const X=Object.freeze(Object.defineProperty({__proto__:null,build:A,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:"Module"}));t.RibbonLine=X;t.build=A;t.ribbonlineNumRoundJoinSubdivisions=1});