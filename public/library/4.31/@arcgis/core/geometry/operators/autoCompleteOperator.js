/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as s}from"../../core/lang.js";import{F as t,G as r,p as e,E as o,n,h as i,b1 as p,S as m,g as c,c as u,aJ as a,b2 as l,b0 as j}from"../../chunks/converterAPI.js";import{G as h,z as y}from"../../chunks/Transformation2D.js";import"../../chunks/tslib.es6.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../Extent.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../support/webMercatorUtils.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../Polyline.js";import"../../chunks/typeUtils.js";import"../support/jsonUtils.js";class k extends r{constructor(s,t,r,e){super(),this.m_resultPolygons=null,this.m_polygons=s,this.m_polylines=t,this.m_sr=r,this.m_progressTracker=e,this.m_bFirst=!0}tock(){return!0}getRank(){return 1}next(){return this.m_bFirst&&(this.performOperation(),this.m_bFirst=!1),this.m_resultPolygons?this.m_resultPolygons.next():null}getGeometryID(){return null!=this.m_resultPolygons?this.m_resultPolygons.getGeometryID():-1}performOperation(){const s=new e,t=new o;let r,m=n;for(;r=this.m_polylines.next();){if(r.getGeometryType()!==h.enumPolyline||r.isEmpty())continue;m===n?m=t.addGeometry(r):t.appendGeometry(m,r);const o=new e;r.queryEnvelope(o),s.mergeEnvelope2D(o)}if(0===t.getTotalPointCount())return;for(;r=this.m_polygons.next();){if(!y(r.getGeometryType())||r.isEmpty())continue;const o=new e;r.queryEnvelope(o),s.mergeEnvelope2D(o),t.addGeometry(r)}const c=i(this.m_sr,s,!0);this.m_resultPolygons=p(t,m,c,this.m_progressTracker)}}const g=new class{getOperatorType(){return 10008}accelerateGeometry(s,t,r){return!1}canAccelerateGeometry(s){return!1}supportsCurves(){return!0}execute(s,r,e,o){const n=(new t).executeMany(s,e,o);return new k(n,r,e,o)}};function f(t,r){const e=c(t);return function(s,t,r){const e=g.execute(new m(s),new m(t),r,null);return Array.from(e)}(t.map(l),r.map(a),u(e)).map((s=>j(s,e))).filter(s)}function d(){return g.supportsCurves()}export{f as execute,d as supportsCurves};
