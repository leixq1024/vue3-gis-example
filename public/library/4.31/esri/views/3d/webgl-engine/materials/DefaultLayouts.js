// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../support/buffer/InterleavedLayout","../lib/VertexAttribute"],function(c,b,a){const d=b.newLayout().vec3f(a.VertexAttribute.POSITION),e=b.newLayout().vec3f(a.VertexAttribute.POSITION).vec2f(a.VertexAttribute.UV0),f=b.newLayout().vec3f(a.VertexAttribute.POSITION).vec4u8(a.VertexAttribute.COLOR);b=b.newLayout().vec3f(a.VertexAttribute.POSITION).vec2f(a.VertexAttribute.UV0).vec4u8(a.VertexAttribute.OBJECTANDLAYERIDCOLOR);c.PositionColorLayout=f;c.PositionLayout=d;c.PositionUVLayout=
e;c.PositionUVLayoutObjectAndLayerId=b;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});