/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{n as e}from"./compilerUtils.js";import{g as r}from"./interfaces3.js";import{V as a}from"./VertexAttribute.js";function o(o,s){switch(s.normalType){case t.Compressed:o.attributes.add(a.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:o.attributes.add(a.NORMAL,"vec3"),o.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:o.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:e(s.normalType);case t.COUNT:}}var t;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(t||(t={}));export{t as N,o as a};
