// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/has ../core/Logger ../core/mathUtils ../core/ObjectStack ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../geometry/support/aaBoundingRect ../geometry/support/Axis ../geometry/support/lineSegment ../geometry/support/plane ../geometry/support/ray ../geometry/support/vector ../geometry/support/vectorStacks".split(" "),function(f,F,na,oa,u,G,U,e,n,pa,H,x,h,qa,y,k){function r(a=I){return{plane:h.create(a.plane),
origin:n.clone(a.origin),basis1:n.clone(a.basis1),basis2:n.clone(a.basis2)}}function V(a,b,c){const d=ra.get();d.origin=a;d.basis1=b;d.basis2=c;d.plane=h.wrap(0,0,0,0);v(d);return d}function w(a,b=r()){return J(a.origin,a.basis1,a.basis2,b)}function W(a,b){e.copy(b.origin,a.origin);e.copy(b.basis1,a.basis1);e.copy(b.basis2,a.basis2);h.copy(b.plane,a.plane)}function J(a,b,c,d=r()){e.copy(d.origin,a);e.copy(d.basis1,b);e.copy(d.basis2,c);v(d);1E-6<Math.abs(e.dot(d.basis1,d.basis2)/(e.length(d.basis1)*
e.length(d.basis2)))&&K().warn("fromValues()","Provided basis vectors are not perpendicular");1E-6<Math.abs(e.dot(d.basis1,p(d)))&&K().warn("fromValues()","Basis vectors and plane normal are not perpendicular");1E-6<Math.abs(-e.dot(p(d),d.origin)-d.plane[3])&&K().warn("fromValues()","Plane offset is not consistent with plane origin");return d}function v(a){h.fromVectorsAndPoint(a.basis2,a.basis1,a.origin,a.plane)}function L(a,b,c){a!==c&&w(a,c);a=e.scale(k.sv3d.get(),p(a),b);e.add(c.origin,c.origin,
a);c.plane[3]-=b;return c}function X(a,b,c){M(b,c);L(c,z(a,a.origin),c);return c}function Y(a,b){const c=a.basis1[0],d=a.basis2[1],[g,l]=a.origin;return pa.fromValues(g-c,l-d,g+c,l+d,b)}function M(a,b=r()){const c=(a[2]-a[0])/2,d=(a[3]-a[1])/2;e.set(b.origin,a[0]+c,a[1]+d,0);e.set(b.basis1,c,0,0);e.set(b.basis2,0,d,0);h.fromValues(0,0,1,0,b.plane);return b}function A(a,b,c){return h.intersectRay(a.plane,b,c)?Z(a,c):!1}function aa(a,b,c){if(A(a,b,c))return c;a=N(a,b,k.sv3d.get());e.add(c,b.origin,
e.scale(k.sv3d.get(),b.direction,e.distance(b.origin,a)/e.length(b.direction)));return c}function N(a,b,c){const d=B.get();var g=B.get();ba(a,b,d,g);g=Number.POSITIVE_INFINITY;for(const m of O){var l=P(a,m,C.get());const q=k.sv3d.get();h.intersectLineSegment(d,l,q)&&(l=e.direction(k.sv3d.get(),b.origin,q),l=Math.abs(oa.acosClamped(e.dot(b.direction,l))),l<g&&(g=l,e.copy(c,q)))}return g===Number.POSITIVE_INFINITY?Q(a,b,c):c}function ca(a,b){return(b-a)/b}function Q(a,b,c){if(A(a,b,c))return c;const d=
B.get(),g=B.get();ba(a,b,d,g);let l=Number.POSITIVE_INFINITY;for(const q of O){var m=P(a,q,C.get());const D=k.sv3d.get();h.intersectLineSegmentClamp(d,m,D)&&(m=qa.distance2(b,D),h.isPointInside(g,D)&&m<l&&(l=m,e.copy(c,D)))}E(a,b.origin)<l&&R(a,b.origin,c);return c}function R(a,b,c){var d=h.projectPoint(a.plane,b,k.sv3d.get());b=x.projectPointClamp(da(a,a.basis1),d,-1,1,k.sv3d.get());d=x.projectPointClamp(da(a,a.basis2),d,-1,1,k.sv3d.get());e.subtract(c,e.add(k.sv3d.get(),b,d),a.origin);return c}
function S(a,b,c){const {origin:d,basis1:g,basis2:l}=a,m=e.subtract(k.sv3d.get(),b,d);b=y.projectPointSignedLength(g,m);const q=y.projectPointSignedLength(l,m);a=y.projectPointSignedLength(p(a),m);return e.set(c,b,q,a)}function E(a,b){b=S(a,b,k.sv3d.get());const {basis1:c,basis2:d}=a;a=e.length(c);var g=e.length(d);a=Math.max(Math.abs(b[0])-a,0);g=Math.max(Math.abs(b[1])-g,0);b=b[2];return a*a+g*g+b*b}function ea(a,b){return Math.sqrt(E(a,b))}function fa(a,b){let c=Number.NEGATIVE_INFINITY;for(const g of O){var d=
P(a,g,C.get());d=x.distance2(d,b);d>c&&(c=d)}return Math.sqrt(c)}function ha(a,b){return h.isPointInside(a.plane,b)&&Z(a,b)}function ia(a,b,c,d){switch(c){case H.Axis.X:e.copy(d,a.basis1);e.normalize(d,d);break;case H.Axis.Y:e.copy(d,a.basis2);e.normalize(d,d);break;case H.Axis.Z:e.copy(d,p(a))}return d}function z(a,b){const c=-a.plane[3];return y.projectPointSignedLength(p(a),b)-c}function ja(a,b,c,d){const g=z(a,b);a=e.scale(sa,p(a),c-g);e.add(d,b,a);return d}function ka(a,b){return e.exactEquals(a.basis1,
b.basis1)&&e.exactEquals(a.basis2,b.basis2)&&e.exactEquals(a.origin,b.origin)}function la(a,b,c){a!==c&&w(a,c);G.invert(t,b);G.transpose(t,t);e.transformMat4(c.basis1,a.basis1,t);e.transformMat4(c.basis2,a.basis2,t);e.transformMat4(h.getNormal(c.plane),h.getNormal(a.plane),t);e.transformMat4(c.origin,a.origin,b);h.setOffsetFromPoint(c.plane,c.plane,c.origin);return c}function ma(a,b,c,d){a!==d&&w(a,d);G.fromRotation(T,b,c);e.transformMat4(d.basis1,a.basis1,T);e.transformMat4(d.basis2,a.basis2,T);
v(d);return d}function p(a){return h.getNormal(a.plane)}function Z(a,b){const c=e.subtract(k.sv3d.get(),b,a.origin);b=e.squaredLength(a.basis1);const d=e.squaredLength(a.basis2),g=e.dot(a.basis1,c);a=e.dot(a.basis2,c);return 0>-g-b&&0>g-b&&0>-a-d&&0>a-d}function da(a,b){const c=C.get();e.copy(c.origin,a.origin);e.copy(c.vector,b);return c}function P(a,b,c){const {basis1:d,basis2:g,origin:l}=a;a=e.scale(k.sv3d.get(),d,b.origin[0]);const m=e.scale(k.sv3d.get(),g,b.origin[1]);e.add(c.origin,a,m);e.add(c.origin,
c.origin,l);a=e.scale(k.sv3d.get(),d,b.direction[0]);b=e.scale(k.sv3d.get(),g,b.direction[1]);e.scale(c.vector,e.add(a,a,b),2);return c}function ba(a,b,c,d){a=p(a);h.fromVectorsAndPoint(a,b.direction,b.origin,c);h.fromVectorsAndPoint(h.getNormal(c),a,b.origin,d)}const K=()=>na.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class ta{constructor(){this.plane=h.create();this.origin=n.create();this.basis1=n.create();this.basis2=n.create()}}F=ta;const I={plane:h.create(),origin:n.fromValues(0,
0,0),basis1:n.fromValues(1,0,0),basis2:n.fromValues(0,1,0)},B=new u.ObjectStack(h.create),C=new u.ObjectStack(x.create),sa=n.create(),ra=new u.ObjectStack(()=>r()),O=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],t=U.create(),T=U.create();u=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:F,altitudeAt:z,axisAt:ia,cameraFrustumCoverage:ca,closestPoint:Q,closestPointOnSilhouette:N,copy:w,copyWithoutVerify:W,
create:r,distance:ea,distance2:E,distanceToSilhouette:fa,elevate:L,equals:ka,extrusionContainsPoint:ha,fromAABoundingRect:M,fromValues:J,getExtent:Y,intersectRay:A,intersectRayClosestSilhouette:aa,normal:p,projectPoint:R,projectPointLocal:S,rotate:ma,setAltitudeAt:ja,setExtent:X,transform:la,up:I,updateUnboundedPlane:v,wrap:V},Symbol.toStringTag,{value:"Module"}));f.BoundedPlaneClass=F;f.altitudeAt=z;f.axisAt=ia;f.boundedPlane=u;f.cameraFrustumCoverage=ca;f.closestPoint=Q;f.closestPointOnSilhouette=
N;f.copy=w;f.copyWithoutVerify=W;f.create=r;f.distance=ea;f.distance2=E;f.distanceToSilhouette=fa;f.elevate=L;f.equals=ka;f.extrusionContainsPoint=ha;f.fromAABoundingRect=M;f.fromValues=J;f.getExtent=Y;f.intersectRay=A;f.intersectRayClosestSilhouette=aa;f.normal=p;f.projectPoint=R;f.projectPointLocal=S;f.rotate=ma;f.setAltitudeAt=ja;f.setExtent=X;f.transform=la;f.up=I;f.updateUnboundedPlane=v;f.wrap=V});