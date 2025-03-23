// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutput","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(d,f,c,e){d.ObjectAndLayerIdColor=function(a,b){b.output!==f.ShaderOutput.ObjectAndLayerIdColor?(a.vertex.code.add(c.glsl`void forwardObjectAndLayerIdColor() {}`),a.fragment.code.add(c.glsl`void outputObjectAndLayerIdColor() {}`)):(b=b.objectAndLayerIdColorInstanced,a.varyings.add("objectAndLayerIdColorVarying","vec4"),a.attributes.add(b?e.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR:e.VertexAttribute.OBJECTANDLAYERIDCOLOR,
"vec4"),a.vertex.code.add(c.glsl`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${b?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),a.fragment.code.add(c.glsl`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});