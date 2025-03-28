/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import s from"../../../core/Accessor.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{D as r}from"../../../chunks/angularMeasurementUtils.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";import"../../../chunks/Cyclical.js";import"../../../chunks/mathUtils.js";import"../../../chunks/quantityUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/vec2.js";import"../../../chunks/common.js";import"../../../chunks/vec2f64.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/projectVectorToVector.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/boundsUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/projectBuffer.js";import"../../../chunks/geodesicConstants.js";import"../../../chunks/projectPointToVector.js";import"../../../geometry/projection.js";import"../../../chunks/SimpleObservable.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/dehydratedPoint.js";import"../../../geometry/support/geodesicUtils.js";import"../../../geometry.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";let i=class extends s{constructor(t){super(t),this.length=null,this.verticalLength=null,this.area=null}};t([e()],i.prototype,"length",void 0),t([e()],i.prototype,"verticalLength",void 0),t([e()],i.prototype,"area",void 0),i=t([o("esri.views.interactive.sketch.Units")],i);const p=i;let n=class extends s{constructor(t){super(t),this.directionMode="relative",this.relativeDirectionIsBilateral=!1}get effectiveDirectionMode(){switch(this.directionMode){case"relative":return this.relativeDirectionIsBilateral?r.RelativeBilateral:r.Relative;case"absolute":return r.Absolute}}get displayUnits(){return this._get("displayUnits")??new p}set displayUnits(t){this._set("displayUnits",t)}get inputUnits(){return this._get("inputUnits")??new p}set inputUnits(t){this._set("inputUnits",t)}};t([e({type:String,nonNullable:!0})],n.prototype,"directionMode",void 0),t([e({type:Boolean,nonNullable:!0})],n.prototype,"relativeDirectionIsBilateral",void 0),t([e()],n.prototype,"effectiveDirectionMode",null),t([e({type:p,nonNullable:!0})],n.prototype,"displayUnits",null),t([e({type:p,nonNullable:!0})],n.prototype,"inputUnits",null),n=t([o("esri.views.interactive.sketch.SketchValueOptions")],n);const c=n;export{c as default};
