// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../core/shaderModules/interfaces"],function(a,b){a.SphereIntersect=function(c){c.code.add(b.glsl`vec2 sphereIntersect(vec3 start, vec3 dir, float distance) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * distance;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});