/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{ClonableMixin as e}from"../../core/Clonable.js";import r from"../../core/Collection.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import{a as s}from"../../chunks/ensureType.js";import"../../core/lang.js";import{e as n}from"../../chunks/enumeration.js";import{r as p}from"../../chunks/reader.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as l}from"../../chunks/writer.js";import{a}from"../../chunks/commonProperties3.js";import{i as m,r as c,g as y,h as d,j,k as h,l as v,o as w,m as g,x as f,y as b}from"../../chunks/networkEnums.js";import B from"./TravelMode.js";import k from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/Logger.js";import"../../config.js";import"../../geometry/Geometry.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";var A;function P(t,e,o){null!=t&&(e[o]=r.isCollection(t)?{features:t.toArray().map((t=>t.toJSON()))}:t.toJSON())}let O=A=class extends(e(o)){constructor(t){super(t),this.accumulateAttributes=null,this.apiKey=null,this.attributeParameterValues=null,this.defaultCutoff=null,this.defaultTargetFacilityCount=null,this.directionsLanguage=null,this.directionsLengthUnits=null,this.directionsOutputType=null,this.directionsStyleName=null,this.directionsTimeAttribute=null,this.facilities=null,this.geometryPrecision=null,this.geometryPrecisionM=null,this.geometryPrecisionZ=null,this.ignoreInvalidLocations=null,this.impedanceAttribute=null,this.incidents=null,this.outputGeometryPrecision=null,this.outputGeometryPrecisionUnits=null,this.outputLines=null,this.outSpatialReference=null,this.overrides=null,this.pointBarriers=null,this.polygonBarriers=null,this.polylineBarriers=null,this.preserveObjectID=null,this.restrictionAttributes=null,this.restrictUTurns=null,this.returnDirections=!1,this.returnFacilities=!1,this.returnIncidents=!1,this.returnPointBarriers=!1,this.returnPolygonBarriers=!1,this.returnPolylineBarriers=!1,this.returnRoutes=!0,this.returnTraversedEdges=null,this.returnTraversedJunctions=null,this.returnTraversedTurns=null,this.returnZ=null,this.timeOfDay=null,this.timeOfDayIsUTC=null,this.timeOfDayUsage=null,this.travelDirection=null,this.travelMode=null,this.useHierarchy=!1}static from(t){return s(A,t)}readAccumulateAttributes(t){return null==t?null:t.map((t=>m.fromJSON(t)))}writeAccumulateAttributes(t,e,r){t?.length&&(e[r]=t.map((t=>m.toJSON(t))))}writeFacilities(t,e,r){P(t,e,r)}writeIncidents(t,e,r){P(t,e,r)}writePointBarriers(t,e,r){P(t,e,r)}writePolygonBarrier(t,e,r){P(t,e,r)}writePolylineBarrier(t,e,r){P(t,e,r)}readRestrictionAttributes(t){return null==t?null:t.map((t=>c.fromJSON(t)))}writeRestrictionAttributes(t,e,r){t?.length&&(e[r]=t.map((t=>c.toJSON(t))))}readTimeOfDay(t,e){const{timeOfDay:r}=e;return null==r?null:"now"===r?"now":new Date(r)}writeTimeOfDay(t,e){null!=t&&(e.timeOfDay="now"===t?"now":t.getTime())}};t([i({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],O.prototype,"accumulateAttributes",void 0),t([p("accumulateAttributes")],O.prototype,"readAccumulateAttributes",null),t([l("accumulateAttributes")],O.prototype,"writeAccumulateAttributes",null),t([i(a)],O.prototype,"apiKey",void 0),t([i({json:{write:!0}})],O.prototype,"attributeParameterValues",void 0),t([i({type:Number,json:{write:!0}})],O.prototype,"defaultCutoff",void 0),t([i({type:Number,json:{write:!0}})],O.prototype,"defaultTargetFacilityCount",void 0),t([i({type:String,json:{write:!0}})],O.prototype,"directionsLanguage",void 0),t([n(y)],O.prototype,"directionsLengthUnits",void 0),t([n(d)],O.prototype,"directionsOutputType",void 0),t([n(j)],O.prototype,"directionsStyleName",void 0),t([n(h,{name:"directionsTimeAttributeName",ignoreUnknown:!1})],O.prototype,"directionsTimeAttribute",void 0),t([i({json:{write:!0}})],O.prototype,"facilities",void 0),t([l("facilities")],O.prototype,"writeFacilities",null),t([i({type:Number,json:{write:!0}})],O.prototype,"geometryPrecision",void 0),t([i({type:Number,json:{write:!0}})],O.prototype,"geometryPrecisionM",void 0),t([i({type:Number,json:{write:!0}})],O.prototype,"geometryPrecisionZ",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"ignoreInvalidLocations",void 0),t([n(m,{name:"impedanceAttributeName",ignoreUnknown:!1})],O.prototype,"impedanceAttribute",void 0),t([i({json:{write:!0}})],O.prototype,"incidents",void 0),t([l("incidents")],O.prototype,"writeIncidents",null),t([i({type:Number,json:{write:!0}})],O.prototype,"outputGeometryPrecision",void 0),t([n(v)],O.prototype,"outputGeometryPrecisionUnits",void 0),t([n(w)],O.prototype,"outputLines",void 0),t([i({type:k,json:{name:"outSR",write:!0}})],O.prototype,"outSpatialReference",void 0),t([i({json:{write:!0}})],O.prototype,"overrides",void 0),t([i({json:{name:"barriers",write:!0}})],O.prototype,"pointBarriers",void 0),t([l("pointBarriers")],O.prototype,"writePointBarriers",null),t([i({json:{write:!0}})],O.prototype,"polygonBarriers",void 0),t([l("polygonBarriers")],O.prototype,"writePolygonBarrier",null),t([i({json:{write:!0}})],O.prototype,"polylineBarriers",void 0),t([l("polylineBarriers")],O.prototype,"writePolylineBarrier",null),t([i({type:Boolean,json:{write:!0}})],O.prototype,"preserveObjectID",void 0),t([i({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],O.prototype,"restrictionAttributes",void 0),t([p("restrictionAttributes")],O.prototype,"readRestrictionAttributes",null),t([l("restrictionAttributes")],O.prototype,"writeRestrictionAttributes",null),t([n(g)],O.prototype,"restrictUTurns",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnDirections",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnFacilities",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnIncidents",void 0),t([i({type:Boolean,json:{name:"returnBarriers",write:!0}})],O.prototype,"returnPointBarriers",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnPolygonBarriers",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnPolylineBarriers",void 0),t([i({type:Boolean,json:{name:"returnCFRoutes",write:!0}})],O.prototype,"returnRoutes",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnTraversedEdges",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnTraversedJunctions",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnTraversedTurns",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"returnZ",void 0),t([i({json:{write:!0}})],O.prototype,"timeOfDay",void 0),t([p("timeOfDay")],O.prototype,"readTimeOfDay",null),t([l("timeOfDay")],O.prototype,"writeTimeOfDay",null),t([i({type:Boolean,json:{write:!0}})],O.prototype,"timeOfDayIsUTC",void 0),t([n(f)],O.prototype,"timeOfDayUsage",void 0),t([n(b)],O.prototype,"travelDirection",void 0),t([i({type:B,json:{write:!0}})],O.prototype,"travelMode",void 0),t([i({type:Boolean,json:{write:!0}})],O.prototype,"useHierarchy",void 0),O=A=t([u("esri.rest.support.ClosestFacilityParameters")],O);const T=O;export{T as default};
