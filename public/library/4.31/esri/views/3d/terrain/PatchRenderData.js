// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/has ../../../core/mathUtils ../../../core/maybe ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/support/aaBoundingRect ../../../geometry/support/Ellipsoid ../support/buffer/glUtil ./GeometryState ./interfaces ./LayerClass ./NeighborIndex ./PatchGeometry ./TerrainConst ./terrainUtils ./TextureFader ./TextureReference ./TileOverlayData ./tileUtils ../webgl-engine/lib/VertexArrayObject ../webgl-engine/shaders/TerrainTechnique ../../webgl/BufferObject ../../webgl/enums".split(" "),
function(P,ka,xa,Y,la,r,t,ma,Z,na,oa,aa,W,U,pa,qa,b,X,ra,sa,ta,ua,va,ba,ca){function L(a,d){return d?.loaded||d===a?d:null}class wa{constructor(){this.geometry=new pa.PatchGeometry;this._texture=this._vao=this.geometryState=this.intersectionData=null;this._textureOpacity=1;this._textureRef=new X.TextureFader(()=>this._tile.surface.fadeDuration);this.overlay=new sa;this._localOrigin=null;this._geometryStateChangedSinceLastUpdate=!0;this._hasGeometry=!1;this._modifiedFlags=0}get tile(){return this._tile}get localOrigin(){return this._localOrigin}init(a,
d){this.clear();this._tile=a;this.geometry.reset();this.intersectionData=null;this.geometryState=new oa.GeometryState;this._localOrigin=d;this.overlay.clear()}clear(){this.releaseGeometry();this.releaseTexture();this._textureRef.clear();this.geometryState=this.intersectionData=this._tile=null}updateGeometryIfNeeded(a){if(!this._vao||this._geometryStateChangedSinceLastUpdate||this.wireframeChanged||this.clippingAreaChanged||this.samplerDataChanged||this.numVerticesPerSideChanged||this.dirtyCorners||
this.dirtyEdgeResolutions||this.dirtyEdges)this._updateGeometry(a),this._geometryStateChangedSinceLastUpdate=!1;if(b.enableTerrainInternalChecks&&this.tile.intersectsClippingArea)for(a=0;4>a;++a)b.internalAssert(this.geometry.getEdgeCount(a)===this.geometryState.edgeResolutions[a]+1)}_calculateEdgeResolution(a,d){const h=this.tile,m=this.geometryState.numVerticesPerSide-1;if(!h.surface.isGlobal){var k=h.surface.extent;if(null!=k&&(0===a&&h.extent[3]>k[3]||1===a&&h.extent[2]>k[2]||2===a&&h.extent[1]<
k[1]||3===a&&h.extent[0]<k[0]))return m}const f=h.level;k=b.neighborEdgeIndices[a];if(!d)return b.internalAssert(null==h.surface?.rootTiles||h.surface.updatingRootTiles||!h.shouldHaveNeighbor(k)),m;if(d.loaded)return k=d.renderData.geometryState,d=f-d.level,b.internalAssert(0<=d),0===d?Math.max(k.numVerticesPerSide-1,m):Math.max(1,k.edgeResolutions[(a+2)%4]/2**d);b.internalAssert(!d.leaf);let e=m;d.forAllSubtreeOnSide(b.oppositeEdge(k),c=>{if(c===h)return!0;if(c.loaded)return e=Math.max(e,2**(c.level-
f)),!0;b.internalAssert(!c.leaf);return!1});return e}updateNeighborData(){const a=this.tile;if(a.intersectsClippingArea){var d=a.renderData.geometryState,h=n=>(n.loaded||n.level===a.level)&&n?.intersectsClippingArea,m=d.edgePeerNeighbors,k=d.edgePeerNeighborSamplerVersions;for(var f=0;4>f;++f){var e=a.findNeighborTile(b.neighborEdgeIndices[f],h),c=L(a,e),g=c?.renderData?.geometryState.samplerDataVersion??-1,l=L(a,m[f]);c=c!==l;l=k[f]!==g;b.enableTerrainInternalChecks&&e&&(b.internalAssert(a.level>=
e.level),b.internalAssert(a.level-e.level<=qa.maxTileNeighborLevelDelta));m[f]=e;if(c||l)k[f]=g,this._markEdgeDirty(f);g=d.edgeResolutions[f];e=this._calculateEdgeResolution(f,e);b.internalAssert(Y.isPowerOfTwo(e));b.internalAssert(1<=e);d.edgeResolutions[f]=e;g!==e&&this._markEdgeResolutionDirty(f)}for(let n=0;4>n;++n){e=a.findNeighborTile(b.neighborCornerIndices[n],h);d.cornerPeerNeighbors[n]=e;k=L(a,m[n]);f=L(a,m[(n+1)%4]);e=L(a,e);v[n]=e;v[(n+1)%4]=f;v[(n+2)%4]=a;v[(n+3)%4]=k;b.internalAssert(v.some(p=>
p?.loaded||p===a));const u=v.reduce((p,D)=>Math.min(p,D?.level??Infinity),Infinity);v.forEach((p,D)=>{p&&p?.level>u&&(v[D]=null)});b.internalAssert(v.some(p=>p?.loaded||p===a));const x=d.cornerNeighborCornerTiles;k=d.cornerNeighborCornerTileSamplerVersions;for(f=0;4>f;++f){e=v[f];g=e?.renderData.geometryState.samplerDataVersion??-1;c=4*n+f;l=x[c]!==e;const p=!l&&k[c]!==g;if(l||p)x[c]=e,k[c]=g,this._markCornerDirty(n)}b.enableTerrainInternalChecks&&b.internalAssert(da.some(p=>x[4*n+p]?.loaded||x[4*
n+p]===a))}b.enableTerrainInternalChecks&&b.internalAssert(this.geometryState.edgeResolutions.every(n=>0<n));for(d=0;4>d;++d)v[d]=null}}_updateGeometry(a){if(this.tile.intersectsClippingArea){b.enableTerrainInternalChecks&&b.internalAssert(!this.tile.intersectsClippingArea||this.geometryState.edgeResolutions.every(l=>0<l));this.intersectionData=null;var {tile:d,_vao:h,geometry:m,geometryState:k}=this,f={geometry:m},e=!h||!f||this.wireframeChanged||this.samplerDataChanged||this.clippingAreaChanged||
this.numVerticesPerSideChanged;f=0!==this.dirtyEdgeResolutions;var c=k.edgeResolutions.reduce((l,n)=>l+n+1,0);e=e||f&&c>(m?.maxEdgeVertexCount??0);c=!e&&f;f=!c&&(0!==this.dirtyEdges||f);var g=!f&&0!==this.dirtyCorners;e?(this.releaseGeometry(),this._createGeometry(a)):c?d.updateEdgeElevationsAndResolutions():f||g?d.updateEdgeElevations():g?d.updateCornerElevations():console.warn("Update for no reason?");this._modifiedFlags=0}}get hasGeometry(){return this._hasGeometry}releaseGeometry(){this._hasGeometry=
!1;this.intersectionData=null;if(!this._vao)return!1;this._vao=la.disposeMaybe(this._vao);this.geometry.release();return!0}ensureTexture(a,d,h,m){d=d?ca.PixelFormat.RGBA:ca.PixelFormat.RGB;null!=this._texture&&(h===aa.TextureUpdate.FADING&&0<this._tile.surface.fadeDuration&&this._isTextureVisible(this._texture)||this._texture.descriptor.width!==a||this._texture.descriptor.pixelFormat!==d)&&this.releaseTexture();null==this._texture&&(this._texture=m(),this.tile.setMemoryDirty());return this._texture}releaseTexture(){null!=
this._texture&&(this._texture.release(),this._texture=null,this.tile.setMemoryDirty())}reuseTexture(a,d){if(!a||!this._texture)return!1;a.setTextureReference(new ra.TextureReference(this._texture,aa.TextureUpdate.FADING,d,this._textureOpacity,0,1));return!0}get numVerticesPerSideChanged(){return 0!==(this._modifiedFlags&1)}get samplerDataChanged(){return 0!==(this._modifiedFlags&2)}get clippingAreaChanged(){return 0!==(this._modifiedFlags&4)}get wireframeChanged(){return 0!==(this._modifiedFlags&
8)}get dirtyEdges(){return this._modifiedFlags>>4&15}get dirtyCorners(){return this._modifiedFlags>>8&15}get dirtyEdgeResolutions(){return this._modifiedFlags>>12&15}_markCornerDirty(a){this._modifiedFlags|=1<<a<<8}_markEdgeDirty(a){this._modifiedFlags|=1<<a<<4;this._markCornerDirty((a+0)%4);this._markCornerDirty((a+3)%4)}_markEdgeResolutionDirty(a){this._modifiedFlags|=1<<a<<12;this._markEdgeDirty(a)}_markAllEdgesAndCornersDirty(){this._modifiedFlags|=65520}updateGeometryState(){var a=this._elevationInfo;
const d=this.tile;var h=a.samplerData?d.getElevationVerticesPerSide(a.maxTileLevel):d.minimumVerticesPerSide;const m=Math.max(h,5);let k=d.clippingArea;if(!d.intersectsClippingArea||d.withinClippingArea)k=null;h=this.geometryState;let f=!1;h.numVerticesPerSide!==m&&(this._modifiedFlags|=1,h.numVerticesPerSide=m,h.samplerDataVersion++,f=!0);a.changed&&(this._modifiedFlags|=2,h.samplerData=a.samplerData,h.samplerDataVersion++,f=!0);ka.equals(h.clippingArea,k)||(this._modifiedFlags=4,h.clippingArea=
k,f=!0);a=d.surface.wireframe;h.wireframe!==a&&(this._modifiedFlags=8,h.wireframe=a,f=!0);this._geometryStateChangedSinceLastUpdate||(this._geometryStateChangedSinceLastUpdate=f);f&&this._markAllEdgesAndCornersDirty();this._hasGeometry=!0;return this._geometryStateChangedSinceLastUpdate}_createGeometry(a){this.tile.createGeometry();const d=this.geometry.vertexAttributes,h=this.geometry.indices,m=a.gl;this._vao=new ua.VertexArrayObject(a,va.vertexAttributeLocations,new Map([["geometry",na.glLayout(d.layout)]]),
new Map([["geometry",ba.BufferObject.createVertex(a,m.STATIC_DRAW,d.buffer)]]),ba.BufferObject.createIndex(a,m.STATIC_DRAW,h));this._hasGeometry=!0}get vao(){return this._vao}setTextureReference(a,d=X.ActivationTime.Immediate){a?.texture===this._texture?this._textureOpacity=a.opacities[0]:this.releaseTexture();this._textureRef.push(a,d)}get textureReference(){return this._textureRef.current}get nextTextureReference(){return this._textureRef.next}get textureFadeFactor(){return this._textureRef.fadeFactor}get textureIsFading(){return this._textureRef.isFading}_isTextureVisible(a){return this._textureRef.current?.texture===
a||this._textureRef.next?.texture===a&&1>this._textureRef.fadeFactor}get _elevationInfo(){var a=this.geometryState.samplerData;const d=this.tile.layerInfo[W.LayerClass.ELEVATION],h=d.length,m=Array(h);let k=0;var f=0;let e=!1;for(let l=0;l<h;l++){var c=d[l],g=c.upsampleInfo?.tile;g?(c=(c=g.layerInfo[W.LayerClass.ELEVATION][l].data)&&c.samplerData,a&&a[k]===c||(e=!0),m[k++]=c,f=Math.max(f,g.lij[0])):c.data&&(g=this.tile.surface.layerViewByIndex(l,W.LayerClass.ELEVATION),ta.fallsWithinLayerView(this.tile,
g)&&(f=c.data,a&&a[k]===f.samplerData||(e=!0),m[k++]=f.samplerData,f=this.tile.level))}null!=a&&a.length!==k&&(e=!0);if(a=0<k)m.length=k;return{changed:e,samplerData:a?m:null,maxTileLevel:f}}get estimatedGeometryMemoryUsage(){return(this.geometry.indices?.byteLength??0)+(this.geometry.vertexAttributes?.byteLength??0)+(this.intersectionData?.estimatedMemoryUsage??0)}get texture(){return this._texture}get test(){}checkGeometryWaterproofness(){if(b.enableTerrainInternalChecks){var a=this.tile;if(a.loaded&&
a.intersectsClippingArea&&0!==a.level){var d=a.surface.extent;if(null==d||a.intersectsExtent(d)){var h=b.neighborEdgeIndices.map((e,c)=>null!=d?0>(2>c?-1:1)*(a.extent[3-c]-d[3-c]):!1),m=a.level;b.internalAssert(0===this.dirtyCorners);b.internalAssert(0===this.dirtyEdges);b.internalAssert(0===this.dirtyEdgeResolutions);b.internalAssert(!this.numVerticesPerSideChanged);b.internalAssert(!this.samplerDataChanged);b.internalAssert(!this.clippingAreaChanged);b.internalAssert(!this.wireframeChanged);var k=
b.neighborCornerIndices.map(e=>a.findNeighborCornerTileExact(e,c=>!c.intersectsClippingArea||c.loaded||c.level===a.level)??null).map(e=>e?.intersectsClippingArea?e:null),f=this.geometryState;for(let e=0;4>e;++e){const c=f.cornerPeerNeighbors[e],g=k[e];b.internalAssert(g===c,`Tile[${a.lij}].corner[${e}] out of date: cur=[${c?.lij}] exp=[${g?.lij}]`)}b.neighborEdgeIndices.forEach((e,c)=>{if(!h[c]){var g=a.findNeighborTile(e,E=>(E.level===m||E?.loaded)&&E?.intersectsClippingArea);if(g){b.internalAssert(g.loaded||
g.level===a.level);b.internalAssert(g===this.geometryState.edgePeerNeighbors[c]);var l=m-g.level;if(g.loaded){var n=g.renderData;b.internalAssert(a.isEdgeNeighbor(g,e));b.internalAssert(0<=l);var u=2**l;if(0>l)b.internalAssert(!1);else{var x=a.renderData,p=x.geometry,D=x.localOrigin,Q=p.getEdgeCount(c),y=p.numVerticesPerSide-1,F=n.geometry;if(F){var ea=n.localOrigin,q=this.geometryState.edgePeerNeighbors[c];q?.loaded&&(q=q.renderData,b.internalAssert(x.geometryState.edgePeerNeighborSamplerVersions[c]===
q.geometryState.samplerDataVersion),b.internalAssert(this.geometryState.edgePeerNeighborSamplerVersions[c]===q.geometryState.samplerDataVersion));var B=(c+2)%4,R=F.getEdgeCount(B);q=Q-1;var S=R-1;b.internalAssert(q*u===S,`Tile[${a.lij}]:e${c},res=${q} edgeRes mismatch with`+` Neighbor[${g.lij}]:e${B},res=${S} (expected:${q*u})`);q=a.extent;S=e===U.NeighborIndex.NORTH||e===U.NeighborIndex.SOUTH;var G=R-1,H=G>>l,w=Q-1;if(1>H)b.internalAssert(1===w);else{b.internalAssert(H===w);b.internalAssert(Y.isPowerOfTwo(H));
w=F.numVerticesPerSide-1;b.internalAssert(0<l||H===Math.max(w,y));l=a.getNeighborEdgeStartVertexIndex(c,g);b.internalAssert(0<=l&&l<u);u=l*H;b.internalAssert(0<=u&&u<=G-H);var I=0,J=u;p.getEdgeVertexPosition(c,z,D,0);p.getEdgeVertexPosition(c,A,D,Q-1);u=r.distance(z,A);u=Math.max(1,1E-4*u);for(l=0;l<=H;++l){p.getEdgeVertexPosition(c,z,D,I);F.getEdgeVertexPosition(B,A,ea,J);y=l/H;var C=S?q[0]+y*(q[2]-q[0]):e===U.NeighborIndex.WEST?q[0]:q[2],V=S?e===U.NeighborIndex.SOUTH?q[1]:q[3]:q[1]+y*(q[3]-q[1]);
const E=a.surface.extent;if(null==E||ma.containsXY(E,C,V)){y=r.dist(z,A);G=r.len(z)-Z.earth.radius;w=r.len(A)-Z.earth.radius;var M=y<u;M||(console.warn("Tile edge vertex position mismatch: between"+` [${a.lij}].edge${c}[${I}/${Q}] and`+` [${g.lij}].edge${B}[${J}/${R}]`),null!=E&&console.warn("  surface extent\x3d ",E," x,y\x3d",C,",",V),C=t.create(),r.subtract(C,x.localOrigin,n.localOrigin),0<r.len(C)&&console.warn(`   localOrigins: ${x.localOrigin} vs ${n.localOrigin}`+` d=${r.len(C)} [${C}]`),(()=>
{const T=t.clone(z),fa=t.clone(A);a.updateEdgeElevations();g.updateEdgeElevations();p.getEdgeVertexPosition(c,z,D,I);F.getEdgeVertexPosition(B,A,ea,J);const K=t.create();r.sub(K,z,T);0<r.len(K)&&console.warn(`  XXX Tile[${a.lij}] edge out of date: ${T} vs ${z} d=${r.len(K)} [${K}]`);r.sub(K,A,fa);0<r.len(K)&&console.warn(`  XXX Neighbor[${g.lij}] edge out of date: ${fa} vs ${A} d=${r.len(K)} [${K}]`)})(),C=p.getEdgeCount(c),V=F.getEdgeCount(R),b.internalAssert(M,"Mismatch in tile"+` [${a.lij}].edge[${c}][${I}/${C}] vs neighbor`+
` [${g.lij}].edge[${B}][${J}/${V}]`+` ${b.v32s(z)} vs ${b.v32s(A)}  dist=${y} h(t|n|d)=${G}|${w}|${w-G}`));p.getEdgeNormal(c,N,I);F.getEdgeNormal(B,O,J);r.normalize(ha,N);r.normalize(ia,O);const ja=r.dot(ha,ia);y=.01>1-ja||a===g;if(!y){const T=t.create();r.sub(T,N,O);G=()=>`Mismatch in tile edge normal ${b.lij2s(a.lij)} (${I}/${Q-1}) edge ${c} vs neighbor ${b.lij2s(g.lij)}  (${J}/${R-1}) nedge ${B} :`+`${b.v32s(N)} vs ${b.v32s(O)}  dot = ${ja} : ${b.v32s(T)}`;console.warn("Mismatch in tile edge normal: ",
G());a.updateEdgeElevations();g.updateEdgeElevations();w=t.create();M=t.create();p.getEdgeNormal(c,w,I);F.getEdgeNormal(B,M,J);r.equals(N,w)||console.warn("Missing update in tile normal: ",b.v32s(N)," \x3d\x3e ",b.v32s(w));r.equals(O,M)||console.warn("Missing update in neighbor normal: ",b.v32s(O)," \x3d\x3e ",b.v32s(M));b.internalAssert(y,G())}}I+=1;J+=1}}}else b.internalAssert(!1)}}else b.internalAssert(!g.leaf),b.internalAssert(0===l)}else e=!a.surface.updatingRootTiles&&null!=a.surface.rootTiles&&
0<a.surface.rootTiles.length&&a.shouldHaveNeighbor(e),b.internalAssert(!e)}})}}else b.internalAssert(a?.loaded)}}}const z=t.create(),A=t.create(),N=t.create(),O=t.create(),ha=t.create(),ia=t.create(),v=[null,null,null,null],da=[0,1,2,3];Object.defineProperty(P,"ActivationTime",{enumerable:!0,get:()=>X.ActivationTime});P.PatchRenderData=wa;P.neighborTileIfLoadedOrSelf=L;P.zeroToFour=da;Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});