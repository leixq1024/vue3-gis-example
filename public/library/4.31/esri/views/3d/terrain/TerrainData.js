// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.isImageWithType=function(a){return null!=a&&"type"in a&&"image+type"===a.type};b.isRasterTile=function(a){return null!=a&&"type"in a&&"raster-tile"===a.type};b.isTileTexture=function(a){return null!=a&&"type"in a&&"tile-texture"===a.type};b.isVectorTile=function(a){return null!=a&&"type"in a&&"vector-tile"===a.type};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});