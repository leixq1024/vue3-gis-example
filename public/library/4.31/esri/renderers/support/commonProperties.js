// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../symbols ../../core/object ../../core/accessorSupport/extensions/serializableProperty/reader ../../symbols/support/jsonUtils ../../symbols/Symbol ../../symbols/PolygonSymbol3D".split(" "),function(c,a,f,d,e,g,h){d={types:a.symbolTypesRenderer,json:{write:{writer:e.write},origins:{"web-scene":{types:a.symbolTypesRenderer3D,write:{writer:e.write},read:{reader:d.createTypeReader({types:a.symbolTypesRenderer3D})}}}}};f=f.deepMerge({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},
d);const l={cast:b=>null==b||"string"===typeof b||"number"===typeof b?b:`${b}`,json:{type:String,write:{writer:(b,k)=>{k.value=b?.toString()}}}};c.rendererBackgroundFillSymbolProperty={types:{base:g,key:"type",typeMap:{"simple-fill":a.symbolTypes.typeMap["simple-fill"],"picture-fill":a.symbolTypes.typeMap["picture-fill"],"polygon-3d":a.symbolTypes.typeMap["polygon-3d"],cim:a.symbolTypes.typeMap.cim}},json:{write:{writer:e.write},origins:{"web-scene":{type:h,write:{writer:e.write}}}}};c.rendererSymbolProperty=
d;c.requiredRendererSymbolProperty=f;c.uniqueValueProperty=l;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});