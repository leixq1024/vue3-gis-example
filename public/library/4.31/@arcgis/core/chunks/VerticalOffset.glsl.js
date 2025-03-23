/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{s as e}from"./vec4.js";import{c as a}from"./vec4f64.js";import{f as r}from"./vec3.js";import{c}from"./vec3f64.js";import{F as t}from"./Matrix4PassUniform.js";import{g as s}from"./interfaces3.js";import{c as o,F as i}from"./StencilUtils.js";function l(e){e.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function n(e){e.uniforms.add(new t("screenSizePerspective",(e=>v(e.screenSizePerspective))))}function f(e){e.uniforms.add(new t("screenSizePerspectiveAlignment",(e=>v(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function v(e){return r(d,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const d=c();function m(e,a){const r=e.vertex;a.hasVerticalOffset?(S(r),a.hasScreenSizePerspective&&(e.include(l),f(r),o(e.vertex,a)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${a.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${a.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=a();function S(a){a.uniforms.add(new i("verticalOffset",((a,r)=>{const{minWorldLength:c,maxWorldLength:t,screenLength:s}=a.verticalOffset,o=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;return e(p,s*i,o,c,t)})))}export{l as S,m as V,S as a,f as b,n as c};
