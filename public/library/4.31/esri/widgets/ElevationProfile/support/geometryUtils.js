// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/mathUtils ../../../core/promiseUtils ../../../core/unitUtils ../../../core/libs/gl-matrix-2/math/vec2 ../../../chunks/vec32 ../../../geometry/Polyline ../../../geometry/projection ../../../geometry/SpatialReference ../../../geometry/support/geodesicUtils ../../../support/elevationInfoUtils ./ProfileGenerationError".split(" "),function(O,p,D,y,E,F,P,z,v,G,r,Q,w){function A(a,b,c){if(null==b)return H(a);const e=a.spatialReference,f=b.mode;b=Q.getElevationOffset(b,
e);let d=null;switch(c.type){case "2d":d=R(a,f,b);break;case "3d":d=S(a,f,b,c)}return null==d?H(a):new z({hasZ:!0,hasM:!1,spatialReference:e,paths:I(a.paths,d)})}function R({hasZ:a},b,c){switch(b){case "absolute-height":return a?([e,f,d])=>[e,f,d+c]:([e,f])=>[e,f,c];default:return null}}function S({spatialReference:a,hasZ:b},c,e,{elevationProvider:f}){switch(c){case "on-the-ground":return([d,g])=>[d,g,f?.getElevation(d,g,0,a,"ground")??0];case "absolute-height":return b?([d,g,h])=>[d,g,h+e]:([d,g])=>
[d,g,e];case "relative-to-ground":return b?([d,g,h])=>[d,g,h+(f?.getElevation(d,g,h,a,"ground")??0)+e]:([d,g])=>[d,g,(f?.getElevation(d,g,0,a,"ground")??0)+e];case "relative-to-scene":return b?([d,g,h])=>[d,g,h+(f?.getElevation(d,g,h,a,"scene")??0)+e]:([d,g])=>[d,g,(f?.getElevation(d,g,0,a,"scene")??0)+e];default:return null}}function H(a){return a.hasZ?new z({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:I(a.paths,([b,c])=>[b,c])}):a}function I(a,b){const c=a.length,e=Array(c);for(let f=
0;f<c;++f){const d=a[f],g=d.length,h=Array(d.length);e[f]=h;for(let k=0;k<g;++k)h[k]=b(d[k])}return e}function J(a){return null!=a&&"polyline"===a.type}function K(a,b,c,e,f){const {spatialReference:d,hasZ:g}=a,h={from:null,to:null,distance:0,azimuth:0,reverseAzimuth:0,spatialReference:d,metersPerSR:E.getMetersPerUnitForSR(d)},k=[],q=[];let l=0;for(let n=0;n<a.paths.length;++n){const t=a.paths[n],B=[],C=[];var m=0;for(let x=1;x<t.length;++x){const L=t[x],u=e(h,t[x-1],L);for(;m<u.distance&&!D.floatEqualUlp(m,
u.distance);m+=b)B.push(f(u,m)),C.push((l+m)*c);m-=u.distance;l+=u.distance;B.push(L);C.push(l*c)}k[n]=B;q[n]=C}return{densifiedPath:new z({spatialReference:d,hasZ:g,paths:k}),distances:q}}function T(a,b,c){const {hasZ:e}=a;return K(a,b,c,U,e?V:W)}function X(a,b,c){const {hasZ:e}=a;return K(a,b,c,Y,e?Z:aa)}function Y(a,b,c){a.distance=0;r.inverseGeodeticSolver(a,b,c,a.spatialReference);a.from=b;a.to=c;return a}function U(a,b,c){a.from=b;a.to=c;a.distance=F.distance(c,b)*a.metersPerSR;return a}function aa({from:a,
azimuth:b,spatialReference:c},e){return r.directGeodeticSolver([0,0],a,b,e,c)}function Z({from:a,to:b,azimuth:c,distance:e,spatialReference:f},d){b=[0,0,D.lerp(a[2],b[2],d/e)];r.directGeodeticSolver(b,a,c,d,f);return b}function W({from:a,to:b,distance:c},e){return F.lerp([0,0],a,b,e/c)}function V({from:a,to:b,distance:c},e){return P.lerp([0,0,0],a,b,e/c)}function ba(a){return r.isSupported(a.spatialReference)?a:v.project(a,G.WGS84)}function M(a){return a.paths.reduce((b,c)=>b+c.length,0)}function N(a,
b,c){return M(a)+Math.floor(b/c)+Math.max(0,a.paths.reduce(e=>1+e,0)-1)}p.countPoints=M;p.densifyPath=async function(a,b,c,e,f,d,g){var h=a.spatialReference;const k=h.isGeographic||h.isWebMercator;let q=0;if(!k){var {planarLength:l}=await new Promise((n,t)=>O(["../../../geometry/geometryEngineAsync"],n,t));y.throwIfAborted(g);q=await l(a,"meters");y.throwIfAborted(g)}l=1/E.getMetersPerUnitForSR(e);const m=f.geodesicDistanceThreshold??Infinity;if(k||q>=m){await v.initializeProjection([{source:h,dest:e},
{source:h,dest:G.WGS84}],g);g=ba(a);h=r.geodesicLengths([g],"meters")[0];f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(N(a,h,f)>d)throw new w.ProfileGenerationError(w.ProfileGenerationErrorCause.TooComplex);g=A(g,b,c);({densifiedPath:a,distances:b}=X(g,f,l))}else{await v.initializeProjection([{source:h,dest:e}],g);h=q;f=Math.max(f.samplingDistance,h/f.densificationMaxSamples);if(N(a,h,f)>d)throw new w.ProfileGenerationError(w.ProfileGenerationErrorCause.TooComplex);a=A(a,b,c);({densifiedPath:a,
distances:b}=T(a,f,l));y.throwIfAborted(g)}a=v.project(a,e);return{densifiedPath:a,pathLength:h*l,distances:b}};p.isPolyline=J;p.isValidInputPath=function(a){return J(a)&&0<a.paths.length&&a.paths.every(b=>2<=b.length)};p.toAbsoluteHeightElevation=A;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});