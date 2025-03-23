/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../geometry/Polygon.js";import{_ as n}from"../../chunks/unitUtils.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/zmUtils.js";const p=new t({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),a=new t({esriAcres:"acres",esriHectares:"hectares",esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),c=new t({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let m=class extends e{constructor(s){super(s),this.areaUnit=null,this.calculationType=null,this.lengthUnit=null,this.polygons=null}toJSON(){const s={};if(this.polygons&&this.polygons.length>0){const t=this.polygons.map((s=>s.toJSON()));s.polygons=JSON.stringify(t);const e=this.polygons[0].spatialReference;s.sr=n(e)}if(this.lengthUnit&&(s.lengthUnit=c.toJSON(this.lengthUnit)),this.areaUnit){const t=a.toJSON(this.areaUnit);s.areaUnit="string"==typeof t?JSON.stringify({areaUnit:t}):t}return this.calculationType&&(s.calculationType=p.toJSON(this.calculationType)),s}};s([r({type:String,json:{write:!0}})],m.prototype,"areaUnit",void 0),s([r({type:String,json:{write:!0}})],m.prototype,"calculationType",void 0),s([r({type:String,json:{write:!0}})],m.prototype,"lengthUnit",void 0),s([r({type:[i],json:{write:!0}})],m.prototype,"polygons",void 0),m=s([o("esri.rest.support.AreasAndLengthsParameters")],m);const l=m;export{l as default};
