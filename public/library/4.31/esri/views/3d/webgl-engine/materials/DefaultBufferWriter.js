// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../lib/VertexAttribute","./internal/bufferWriterUtils"],function(b,c,d){class e{constructor(a){this.vertexBufferLayout=a}elementCount(a){return a.get(c.VertexAttribute.POSITION).indices.length}write(a,f,g,h,k,l){d.writeDefaultAttributes(g,h,this.vertexBufferLayout,a,f,k,l)}}b.DefaultBufferWriter=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});