// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./TerrainConst","./TileAgent"],function(a,b,c){class d extends c.TileAgent{constructor(){super();this.type="map";this._scaleRangeEnabled=!0}get _desiredMinLevelDelta(){return 0}get _progressiveLevelModulo(){return b.progressiveLoadingModulo}}a.MapTileAgent=d;a.isMapTileAgent=function(e){return"map"===e.type};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});