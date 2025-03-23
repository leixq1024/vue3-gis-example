// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/Geometry","../../../chunks/QuadraticBezier"],function(h,m,c,k){function l(b,a){return c.isMultiVertex(b.getGeometryType())?(b.getImpl().setIsSimple(a.flags,a.tolerance),!0):!1}class p{getOperatorType(){return 10701}accelerateGeometry(b,a,d){return!1}canAccelerateGeometry(b){return!1}supportsCurves(){return!0}executeMany(b,a,d){return new q(b,a,d)}}class q extends m.GeometryCursor{constructor(b,a,d){super();this.m_results=[];
this.m_index=0;this.m_progressTracker=a;this.m_inputGeoms=b;this.m_descr=d}tock(){return!0}getRank(){return 1}next(){this.m_inputGeoms&&(this.combineGeometries(this.m_descr),this.m_inputGeoms=this.m_descr=null);if(this.m_index<this.m_results.length){const b=this.m_results[this.m_index];this.m_index++;return b}return null}getGeometryID(){return this.m_index-1}combineGeometries(b){let a=c.GeometryType.enumUnknown,d=null,f=null,g=null;for(let e=this.m_inputGeoms.next();null!==e;e=this.m_inputGeoms.next()){a=
e.getGeometryType();if(a===c.GeometryType.enumPolygon||a===c.GeometryType.enumEnvelope){g||=new k.Polygon({vd:e.getDescription()});if(a===c.GeometryType.enumPolygon){g.add(e,!1);continue}if(a===c.GeometryType.enumEnvelope){g.addEnvelope(e,!1);continue}}else if(c.isSegment(a)||a===c.GeometryType.enumPolyline){f||=new k.Polyline({vd:e.getDescription()});if(a===c.GeometryType.enumPolyline){f.add(e,!1);continue}if(c.isSegment(a)){f.addSegment(e,!0);continue}}else if(c.isPoint(a)){d||=new k.MultiPoint({vd:e.getDescription()});
if(a===c.GeometryType.enumPoint){d.add(e);continue}if(a===c.GeometryType.enumMultiPoint){d.addPoints(e,0,-1);continue}}c.throwInternalErrorException("unsupported type")}null!==b&&(null!==d&&l(d,b),null!==f&&l(f,b),null!==g&&l(g,b));d&&this.m_results.push(d);f&&this.m_results.push(f);g&&this.m_results.push(g)}}const n=new p;h.executeMany=function(b){b=n.executeMany(new m.SimpleGeometryCursor(b),null,null);return Array.from(b)};h.supportsCurves=function(){return n.supportsCurves()};Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});