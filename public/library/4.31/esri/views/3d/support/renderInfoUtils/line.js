// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry/projection/projectBuffer ../../../../geometry/support/DoubleArray ../../../../geometry/support/triangulationUtils ../../layers/graphics/elevationAlignmentUtils ../../terrain/OverlayRenderer".split(" "),function(k,n,l,e,p,q){function m(a,b,c=null){const f=[];for(const {index:d,count:g}of a){if(1>=g)continue;a=3*d;const h=3*g;f.push({position:l.doubleSubArray(b,3*d,3*g),mapPositions:null!=c?l.doubleSubArray(c,a,h):void 0})}return f}k.geometryToRenderInfo=function(a,
b,c,f){const {position:d,outlines:g}=e.ringsToTriangulationInfo("polygon"===a.type?a.rings:a.paths,!!a.hasZ,"polygon"===a.type?e.CounterClockwiseMode.CCW_IS_HOLE:e.CounterClockwiseMode.NONE,a.spatialReference),h=l.newDoubleArray(d.length);a=p.applyPerVertexElevationAlignment(d,a.spatialReference,0,h,0,d,0,d.length/3,b,c,f);b=null!=a;return{lines:b?m(g,d,h):[],projectionSuccess:b,sampledElevation:a}};k.geometryToRenderInfoDraped=function(a,b){const {position:c,outlines:f}=e.ringsToTriangulationInfo("polygon"===
a.type?a.rings:a.paths,!1,"polygon"===a.type?e.CounterClockwiseMode.CCW_IS_HOLE:e.CounterClockwiseMode.NONE);a=n.projectBuffer(c,a.spatialReference,0,c,b,0);for(b=2;b<c.length;b+=3)c[b]=q.drapedZ;return{lines:a?m(f,c):[],projectionSuccess:a}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});