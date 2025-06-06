/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{S as t,G as e,K as r}from"./converterAPI.js";import{e as s,d as o,t as i,a as m}from"./Transformation2D.js";import"./tslib.es6.js";import"../geometry.js";import"./ensureType.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../geometry/Extent.js";import"../core/accessorSupport/decorators/property.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";class p{getOperatorType(){return 10310}supportsCurves(){return!0}accelerateGeometry(t,e,r){return!1}canAccelerateGeometry(t){return!1}executeMany(t,e,r,s,o){return new n(t,r,s,e,-1,-1,o)}execute(e,r,o,i,m){const p=new t([e]),n=this.executeMany(p,r,o,i,m).next();return n||s("null output"),n}}class n extends e{constructor(t,e,r,s,m,p,n){super(),this.m_progressTracker=n,p>0&&o(""),4!==r&&m>0&&o(""),e||i(""),0===e.getCoordinateSystemType()&&i(""),s>0||m>0||i(""),this.m_index=-1,this.m_inputGeoms=t,this.m_spatialReference=e,this.m_curveType=r,this.m_maxLengthMeters=s,this.m_maxDeviationMeters=m,this.m_maxAngle=p}next(){{let t;for(;t=this.m_inputGeoms.next();)return m(t),this.m_index=this.m_inputGeoms.getGeometryID(),this.geodeticDensify(t);return null}}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodeticDensify(t){return r(t,this.m_spatialReference,this.m_curveType,this.m_maxLengthMeters,this.m_maxDeviationMeters,this.m_progressTracker)}}export{p as OperatorGeodeticDensifyByLength,n as OperatorGeodeticDensifyCursor};
