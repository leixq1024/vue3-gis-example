// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(k,q,g,r,t,u,v,l,c,m,w,f){function n(d){const a=new w.ShaderBuilder;a.include(u.Laserline,d);const {vertex:p,fragment:h}=a;p.uniforms.add(new m.Matrix4PassUniform("modelView",(e,{camera:b})=>q.translate(x,b.viewMatrix,e.origin)),new m.Matrix4PassUniform("proj",(e,{camera:b})=>b.projectionMatrix),new l.FloatPassUniform("glowWidth",(e,{camera:b})=>e.glowWidth*b.pixelRatio),new v.Float2PassUniform("pixelToNDC",(e,{camera:b})=>r.set(y,2/b.fullViewport[2],2/b.fullViewport[3])));a.attributes.add(f.VertexAttribute.START,
"vec3");a.attributes.add(f.VertexAttribute.END,"vec3");d.spherical&&(a.attributes.add(f.VertexAttribute.START_UP,"vec3"),a.attributes.add(f.VertexAttribute.END_UP,"vec3"));a.attributes.add(f.VertexAttribute.EXTRUDE,"vec2");a.varyings.add("uv","vec2");a.varyings.add("vViewStart","vec3");a.varyings.add("vViewEnd","vec3");a.varyings.add("vViewSegmentNormal","vec3");a.varyings.add("vViewStartNormal","vec3");a.varyings.add("vViewEndNormal","vec3");d=!d.spherical;p.main.add(c.glsl`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${c.If(d,c.glsl`vec3 startUp = vec3(0, 0, 1);`)}
    ${c.If(d,c.glsl`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `);h.uniforms.add(new l.FloatPassUniform("perScreenPixelRatio",(e,b)=>b.camera.perScreenPixelRatio));h.code.add(c.glsl`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`);h.main.add(c.glsl`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`);return a}const y=t.create(),x=g.create();g=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));k.LaserlinePath=g;k.build=n});