// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{*[Symbol.iterator](){let a=this.next();for(;a;)yield a,a=this.next()}}class d extends c{}class e extends c{constructor(a){super();this.m_iGeom=-1;this.m_aGeoms=a?a.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const a=this.m_aGeoms[++this.m_iGeom];this.m_aGeoms[this.m_iGeom]=null;return a}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}b.GeometryCursor=c;b.OverlayGeometryCursor=d;b.SimpleGeometryCursor=e});