// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils","../../../core/libs/gl-matrix-2/factories/vec3f64","../../../layers/graphics/dehydratedPoint","../../3d/interactive/support/viewUtils"],function(e,f,k,l,m){const a=l.makeDehydratedPoint(0,0,0,null),g=k.create(),c=f.createScreenPointArray();e.vectorToScreenPoint=function(d,h,n,b){if("2d"===b.type)return a.x=d[0],a.y=d[1],a.spatialReference=h,b.toScreen(a);m.vectorToRender(d,h,n,b,g);b.state.camera.projectToScreen(g,c);return f.createScreenPoint(c[0],c[1])};
Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});