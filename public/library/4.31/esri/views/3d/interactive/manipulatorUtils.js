// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/colorUtils ../../../core/libs/gl-matrix-2/math/mat4 ../../../chunks/vec32 ../../../geometry/support/vectorStacks ../../../layers/graphics/hydratedFeatures ./editingTools/manipulatedObjectUtils ../layers/graphics/graphicUtils ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Material ../webgl-engine/materials/ColorMaterial ../webgl-engine/materials/ShadedColorMaterial".split(" "),function(e,l,q,g,f,r,t,u,h,m,n,v){function p(b,a,d,c){b=g.normalize(f.sv3d.get(),b);
a=g.normalize(f.sv3d.get(),a);const k=g.cross(f.sv3d.get(),b,a);c[0]=b[0];c[1]=b[1];c[2]=b[2];c[3]=0;c[4]=a[0];c[5]=a[1];c[6]=a[2];c[7]=0;c[8]=k[0];c[9]=k[1];c[10]=k[2];c[11]=0;c[12]=d[0];c[13]=d[1];c[14]=d[2];c[15]=1;return c}const w=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1}),x=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});e.calculateInputRotationTransform=function(b,a,d,c){b=g.subtract(f.sv3d.get(),b,d);c=g.cross(f.sv3d.get(),c,b);d=p(b,c,d,f.sm4d.get());
q.invert(d,d);a=g.transformMat4(f.sv3d.get(),a,d);return Math.atan2(a[1],a[0])};e.calculateTranslateRotateFromBases=p;e.createManipulatorMaterial=function(b,a=m.RenderOccludedFlag.OccludeAndTransparent,d=!0){const c=l.colorVectorToColorAndOpacity(b);b=!(1>b[3]);return d?new v.ShadedColorMaterial({color:c,writeDepth:b,cullFace:h.CullFaceOptions.Back,renderOccluded:a,isDecoration:!0}):new n.ColorMaterial({color:c,writeDepth:b,cullFace:h.CullFaceOptions.Back,renderOccluded:a,isDecoration:!0})};e.createManipulatorOutlineMaterial=
function(b,a=m.RenderOccludedFlag.OccludeAndTransparent){b=l.colorVectorToColorAndOpacity(b);return new n.ColorMaterial({color:b,writeDepth:!0,cullFace:h.CullFaceOptions.Front,renderOccluded:a,isDecoration:!0})};e.getGraphicAttachmentOrigin=function(b,a){const d=b.getViewForGraphic(a);return null!=d&&"computeAttachmentOrigin"in d?d.computeAttachmentOrigin(a,b.spatialReference):null};e.placeAtObject=function(b,a){const d=a.origin;null!=d?b.elevationAlignedLocation=d:(a=t.manipulatedObjectGeometry(a),
null!=a&&(a="mesh"===a.type?a.origin:u.computeCentroid(a),null!=a&&(b.location=r.hydrateGeometry(a))))};e.rotateManipulatorDefaults=w;e.worldScaledManipulatorSettings=x;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});