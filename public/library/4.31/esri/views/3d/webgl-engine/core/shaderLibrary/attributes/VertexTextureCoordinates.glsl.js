// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],function(e,a,f,g){e.VertexTextureCoordinates=function(c,b){const {textureCoordinateType:d}=b;d!==a.TextureCoordinateType.None&&d!==a.TextureCoordinateType.COUNT&&(c.include(a.TextureCoordinateAttribute,b),(b=d===a.TextureCoordinateType.Atlas)&&c.include(f.TextureAtlasLookup),c.fragment.code.add(g.glsl`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${b?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});