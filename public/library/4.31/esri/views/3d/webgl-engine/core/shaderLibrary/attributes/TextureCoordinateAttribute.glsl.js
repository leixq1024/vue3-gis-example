// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,f,c,d){b.TextureCoordinateType=void 0;(function(a){a[a.None=0]="None";a[a.Default=1]="Default";a[a.Atlas=2]="Atlas";a[a.Compressed=3]="Compressed";a[a.COUNT=4]="COUNT"})(b.TextureCoordinateType||(b.TextureCoordinateType={}));b.TextureCoordinateAttribute=function(a,e){switch(e.textureCoordinateType){case b.TextureCoordinateType.Default:a.attributes.add(d.VertexAttribute.UV0,
"vec2");a.varyings.add("vuv0","vec2");a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);break;case b.TextureCoordinateType.Compressed:a.attributes.add(d.VertexAttribute.UV0,"vec2");a.varyings.add("vuv0","vec2");a.vertex.code.add(c.glsl`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);break;case b.TextureCoordinateType.Atlas:a.attributes.add(d.VertexAttribute.UV0,"vec2");a.varyings.add("vuv0","vec2");a.attributes.add(d.VertexAttribute.UVREGION,"vec4");a.varyings.add("vuvRegion","vec4");a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);break;default:f.neverReached(e.textureCoordinateType);case b.TextureCoordinateType.None:a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {}`);case b.TextureCoordinateType.COUNT:}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});