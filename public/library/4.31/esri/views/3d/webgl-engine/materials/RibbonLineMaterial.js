// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Logger ../../../../core/mathUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../geometry/support/frustum ../../../../geometry/support/lineSegment ../../../../geometry/support/plane ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/util/AlphaCutoff ../effects/geometry/olidUtils ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/Util ../lib/VertexAttribute ./VisualVariablePassParameters ../shaders/LineMarkerTechniqueConfiguration ../../../../chunks/RibbonLine.glsl ../shaders/RibbonLineTechnique ../shaders/RibbonLineTechniqueConfiguration".split(" "),
function(Y,ra,Z,S,sa,h,y,ta,W,L,t,ua,F,ia,aa,va,M,J,wa,l,xa,ya,za,ja,ka){function K(a,b,c,d,k){for(let B=0;B<k;B++)c[d++]=a[b++];return d}function ba(a,b){return a.isClosed?2<b.get(l.VertexAttribute.POSITION).indices.length:!1}var A;(function(a){a[a.LEFT_JOIN_START=-2]="LEFT_JOIN_START";a[a.LEFT_JOIN_END=-1]="LEFT_JOIN_END";a[a.LEFT_CAP_START=-4]="LEFT_CAP_START";a[a.LEFT_CAP_END=-5]="LEFT_CAP_END";a[a.RIGHT_JOIN_START=2]="RIGHT_JOIN_START";a[a.RIGHT_JOIN_END=1]="RIGHT_JOIN_END";a[a.RIGHT_CAP_START=
4]="RIGHT_CAP_START";a[a.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(A||={});class Aa extends M.Material{constructor(a){super(a,la);this._configuration=new ka.RibbonLineTechniqueConfiguration;this.vertexAttributeLocations=ja.vertexAttributeLocations;this.produces=new Map([[J.RenderSlot.OPAQUE_MATERIAL,b=>F.isHighlightOrOID(b)||F.isColor(b)&&this.parameters.renderOccluded===M.RenderOccludedFlag.OccludeAndTransparentStencil],[J.RenderSlot.OPAQUE_MATERIAL_WITHOUT_NORMALS,b=>F.isDepth(b)],[J.RenderSlot.OCCLUDER_MATERIAL,
b=>F.isColorHighlightOIDOrDepth(b)&&this.parameters.renderOccluded===M.RenderOccludedFlag.OccludeAndTransparentStencil],[J.RenderSlot.TRANSPARENT_OCCLUDER_MATERIAL,b=>F.isColorHighlightOIDOrDepth(b)&&this.parameters.renderOccluded===M.RenderOccludedFlag.OccludeAndTransparentStencil],[J.RenderSlot.TRANSPARENT_MATERIAL,b=>b===F.ShaderOutput.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==M.RenderOccludedFlag.OccludeAndTransparentStencil],[J.RenderSlot.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,
b=>b===F.ShaderOutput.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==M.RenderOccludedFlag.OccludeAndTransparentStencil],[J.RenderSlot.DRAPED_MATERIAL,b=>F.is2DGeometryOutput(b)]])}getConfiguration(a,b){this._configuration.output=a;this._configuration.oitPass=b.oitPass;this._configuration.draped=b.slot===J.RenderSlot.DRAPED_MATERIAL;a=null!=this.parameters.stipplePattern&&a!==F.ShaderOutput.Highlight;this._configuration.stippleEnabled=a;this._configuration.stippleOffColorEnabled=
a&&null!=this.parameters.stippleOffColor;this._configuration.stipplePreferContinuous=a&&this.parameters.stipplePreferContinuous;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.roundJoins="round"===this.parameters.join;this._configuration.capType=this.parameters.cap;a=this._configuration;if(null!=this.parameters.markerParameters){var c=this.parameters.markerParameters;c=c.anchor===ya.LineMarkerAnchor.Tip&&c.hideOnShortSegments&&"begin-end"===c.placement&&c.worldSpace}else c=
!1;a.applyMarkerOffset=c;this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.vvSize=!!this.parameters.vvSize;this._configuration.vvColor=!!this.parameters.vvColor;this._configuration.vvOpacity=!!this.parameters.vvOpacity;this._configuration.innerColorEnabled=0<this.parameters.innerWidth&&null!=this.parameters.innerColor;this._configuration.falloffEnabled=0<this.parameters.falloff;this._configuration.hasOccludees=
b.hasOccludees;this._configuration.occluder=this.parameters.renderOccluded===M.RenderOccludedFlag.OccludeAndTransparentStencil;this._configuration.terrainDepthTest=b.terrainDepthTest;this._configuration.cullAboveTerrain=b.cullAboveTerrain;this._configuration.wireframe=this.parameters.wireframe;return this._configuration}get visible(){return this.parameters.color[3]>=ia.alphaCutoff||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>ia.alphaCutoff}intersectDraped({attributes:a,
screenToWorldRatio:b},c,d,k,B,f){if(d.options.selectionMode){c=a.get(l.VertexAttribute.SIZE);d=this.parameters.width;this.parameters.vvSize?(c=a.get(l.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0],d*=Z.clamp(this.parameters.vvSize.offset[0]+c*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])):c&&(d*=c.data[0]);c=k[0];k=k[1];b*=d/2+4;d=Number.MAX_VALUE;var e=0,g=a.get(l.VertexAttribute.POSITION).data;a=ba(this.parameters,a)?g.length-2:g.length-5;
for(let G=0;G<a;G+=3){var q=g[G],n=g[G+1],u=(G+3)%g.length,N=c-q,v=k-n;q=g[u]-q;n=g[u+1]-n;u=Z.clamp((q*N+n*v)/(q*q+n*n),0,1);N=q*u-N;v=n*u-v;v=N*N+v*v;v<d&&(d=v,e=G/3)}d<b*b&&B(f.dist,f.normal,e,!1)}}intersect(a,b,c,d,k,B){if(c.options.selectionMode&&a.visible)if(wa.isTranslationMatrix(b)){var f=a.attributes;d=f.get(l.VertexAttribute.POSITION).data;a=this.parameters.width;this.parameters.vvSize?(k=f.get(l.VertexAttribute.SIZEFEATUREATTRIBUTE).data[0],a*=Z.clamp(this.parameters.vvSize.offset[0]+k*
this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])):f.has(l.VertexAttribute.SIZE)&&(a*=f.get(l.VertexAttribute.SIZE).data[0]);var e=c.camera,g=Ba;sa.copy(g,c.point);k=a*e.pixelRatio/2+4*e.pixelRatio;h.set(U[0],g[0]-k,g[1]+k,0);h.set(U[1],g[0]+k,g[1]+k,0);h.set(U[2],g[0]+k,g[1]-k,0);h.set(U[3],g[0]-k,g[1]-k,0);for(a=0;4>a;a++)if(!e.unprojectFromRenderScreen(U[a],H[a]))return;t.fromPoints(e.eye,H[0],H[1],ca);t.fromPoints(e.eye,H[1],H[2],da);t.fromPoints(e.eye,
H[2],H[3],ea);t.fromPoints(e.eye,H[3],H[0],fa);var q=Number.MAX_VALUE;a=0;f=ba(this.parameters,f)?d.length-2:d.length-5;for(let u=0;u<f;u+=3){w[0]=d[u]+b[12];w[1]=d[u+1]+b[13];w[2]=d[u+2]+b[14];var n=(u+3)%d.length;x[0]=d[n]+b[12];x[1]=d[n+1]+b[13];x[2]=d[n+2]+b[14];if(!(0>t.signedDistance(ca,w)&&0>t.signedDistance(ca,x)||0>t.signedDistance(da,w)&&0>t.signedDistance(da,x)||0>t.signedDistance(ea,w)&&0>t.signedDistance(ea,x)||0>t.signedDistance(fa,w)&&0>t.signedDistance(fa,x))){e.projectToRenderScreen(w,
O);e.projectToRenderScreen(x,P);if(0>O[2]&&0<P[2])h.subtract(D,w,x),n=e.frustum,n=-t.signedDistance(n[W.PlaneIndex.NEAR],w)/h.dot(D,t.getNormal(n[W.PlaneIndex.NEAR])),h.scale(D,D,n),h.add(w,w,D),e.projectToRenderScreen(w,O);else if(0<O[2]&&0>P[2])h.subtract(D,x,w),n=e.frustum,n=-t.signedDistance(n[W.PlaneIndex.NEAR],x)/h.dot(D,t.getNormal(n[W.PlaneIndex.NEAR])),h.scale(D,D,n),h.add(x,x,D),e.projectToRenderScreen(x,P);else if(0>O[2]&&0>P[2])continue;O[2]=0;P[2]=0;n=L.distance2(L.fromPoints(O,P,ma),
g);n<q&&(q=n,h.copy(na,w),h.copy(oa,x),a=u/3)}}b=c.rayBegin;c=c.rayEnd;q<k*k&&(d=Number.MAX_VALUE,L.closestLineSegmentPoint(L.fromPoints(na,oa,ma),L.fromPoints(b,c,Ca),Q)&&(h.subtract(Q,Q,b),d=h.length(Q),h.scale(Q,Q,1/d),d/=h.distance(b,c)),B(d,Q,a,!1))}else ra.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix")}get _layout(){const a=ua.newLayout().vec3f(l.VertexAttribute.POSITION).vec3f(l.VertexAttribute.PREVPOSITION).vec3f(l.VertexAttribute.NEXTPOSITION).f32(l.VertexAttribute.SUBDIVISIONFACTOR).vec2f(l.VertexAttribute.UV0);
this.parameters.vvSize?a.f32(l.VertexAttribute.SIZEFEATUREATTRIBUTE):a.f32(l.VertexAttribute.SIZE);this.parameters.vvColor?a.f32(l.VertexAttribute.COLORFEATUREATTRIBUTE):a.vec4f(l.VertexAttribute.COLOR);this.parameters.vvOpacity&&a.f32(l.VertexAttribute.OPACITYFEATUREATTRIBUTE);aa.olidEnabled()&&a.vec4u8(l.VertexAttribute.OBJECTANDLAYERIDCOLOR);return a}createBufferWriter(){return new Da(this._layout,this.parameters)}createGLMaterial(a){return new Ea(a)}validateParameters(a){"miter"!==a.join&&(a.miterLimit=
0);null!=a.markerParameters&&(a.markerScale=a.markerParameters.width/a.width)}}class Ea extends va{constructor(){super(...arguments);this._stipplePattern=null}dispose(){super.dispose();this._stippleTextures.release(this._stipplePattern);this._stipplePattern=null}beginSlot(a){const b=this._material.parameters.stipplePattern;this._stipplePattern!==b&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(b,this._stipplePattern)}),this._stipplePattern=b);return this.acquireTechnique(ja.RibbonLineTechnique,
a)}}class la extends xa.VisualVariablePassParameters{constructor(){super(...arguments);this.width=0;this.color=ta.ONES;this.join="miter";this.cap=ka.CapType.BUTT;this.miterLimit=5;this.writeDepth=!0;this.hasPolygonOffset=!1;this.stippleTexture=null;this.stipplePreferContinuous=!0;this.markerParameters=null;this.markerScale=1;this.isClosed=this.vvFastUpdate=this.hasSlicePlane=!1;this.innerWidth=this.falloff=0;this.wireframe=!1}get transparent(){return 1>this.color[3]||null!=this.stipplePattern&&1>
(this.stippleOffColor?.[3]??0)}}class Da{constructor(a,b){this.vertexBufferLayout=a;this._parameters=b;this.numJoinSubdivisions=0;a=b.stipplePattern?1:0;switch(this._parameters.join){case "miter":case "bevel":this.numJoinSubdivisions=a;break;case "round":this.numJoinSubdivisions=za.ribbonlineNumRoundJoinSubdivisions+a}}_isClosed(a){return ba(this._parameters,a)}allocate(a){return this.vertexBufferLayout.createBuffer(a)}elementCount(a){var b=a.get(l.VertexAttribute.POSITION).indices.length/2+1;a=this._isClosed(a);
b=(a?2:4)+((a?b:b-1)-(a?0:1))*(2*this.numJoinSubdivisions+4);b+=2;this._parameters.wireframe&&(b=2+4*(b-2));return b}write(a,b,c,d,k,B){b=Fa;const f=Ga,e=Ha,g=c.get(l.VertexAttribute.POSITION);var q=g.indices;const n=g.data.length/3,u=c.get(l.VertexAttribute.DISTANCETOSTART)?.data;q&&q.length!==2*(n-1)&&console.warn("RibbonLineMaterial does not support indices");const N=c.get(l.VertexAttribute.SIZEFEATUREATTRIBUTE)?.data[0]??c.get(l.VertexAttribute.SIZE)?.data[0]??1;let v=[1,1,1,1],G=0;const pa=this.vertexBufferLayout.fields.has(l.VertexAttribute.COLORFEATUREATTRIBUTE);
pa?G=c.get(l.VertexAttribute.COLORFEATUREATTRIBUTE).data[0]:c.has(l.VertexAttribute.COLOR)&&(v=c.get(l.VertexAttribute.COLOR).data);const qa=this.vertexBufferLayout.fields.has(l.VertexAttribute.OPACITYFEATUREATTRIBUTE),Ia=qa?c.get(l.VertexAttribute.OPACITYFEATUREATTRIBUTE).data[0]:0,p=new Float32Array(k.buffer),X=aa.olidEnabled()?new Uint8Array(k.buffer):null;q=this.vertexBufferLayout.stride/4;let m=B*q;B=m;let z=0;const ha=u?(r,E,I)=>z=u[I]:(r,E,I)=>z+=h.distance(r,E),C=(r,E,I,Ja,Ka,La,Ma)=>{p[m++]=
E[0];p[m++]=E[1];p[m++]=E[2];p[m++]=r[0];p[m++]=r[1];p[m++]=r[2];p[m++]=I[0];p[m++]=I[1];p[m++]=I[2];p[m++]=Ja;p[m++]=Ma;p[m++]=Ka;p[m++]=N;pa?p[m++]=G:(r=Math.min(4*La,v.length-4),p[m++]=v[r],p[m++]=v[r+1],p[m++]=v[r+2],p[m++]=v[r+3]);qa&&(p[m++]=Ia);aa.olidEnabled()&&(d&&(X[4*m]=d[0],X[4*m+1]=d[1],X[4*m+2]=d[2],X[4*m+3]=d[3]),m++)};m+=q;h.set(f,g.data[0],g.data[1],g.data[2]);a&&h.transformMat4(f,f,a);if(c=this._isClosed(c)){var R=g.data.length-3;h.set(b,g.data[R],g.data[R+1],g.data[R+2]);a&&h.transformMat4(b,
b,a)}else h.set(e,g.data[3],g.data[4],g.data[5]),a&&h.transformMat4(e,e,a),C(f,f,e,1,A.LEFT_CAP_START,0,0),C(f,f,e,1,A.RIGHT_CAP_START,0,0),h.copy(b,f),h.copy(f,e);R=c?0:1;const V=c?n:n-1;for(let r=R;r<V;r++){var T=(r+1)%n*3;h.set(e,g.data[T],g.data[T+1],g.data[T+2]);a&&h.transformMat4(e,e,a);ha(b,f,r);C(b,f,e,0,A.LEFT_JOIN_END,r,z);C(b,f,e,0,A.RIGHT_JOIN_END,r,z);T=this.numJoinSubdivisions;for(let E=0;E<T;++E){const I=(E+1)/(T+1);C(b,f,e,I,A.LEFT_JOIN_END,r,z);C(b,f,e,I,A.RIGHT_JOIN_END,r,z)}C(b,
f,e,1,A.LEFT_JOIN_START,r,z);C(b,f,e,1,A.RIGHT_JOIN_START,r,z);h.copy(b,f);h.copy(f,e)}c?(h.set(e,g.data[3],g.data[4],g.data[5]),a&&h.transformMat4(e,e,a),z=ha(b,f,V),C(b,f,e,0,A.LEFT_JOIN_END,R,z),C(b,f,e,0,A.RIGHT_JOIN_END,R,z)):(z=ha(b,f,V),C(b,f,f,0,A.LEFT_CAP_END,V,z),C(b,f,f,0,A.RIGHT_CAP_END,V,z));K(p,B+q,p,B,q);m=K(p,m-q,p,m,q);this._parameters.wireframe&&this._addWireframeVertices(k,B,m,q)}_addWireframeVertices(a,b,c,d){const k=new Float32Array(a.buffer,c*Float32Array.BYTES_PER_ELEMENT);
a=new Float32Array(a.buffer,b*Float32Array.BYTES_PER_ELEMENT,c-b);b=0;for(c=0;c<a.length-1;c+=2*d)b=K(a,c,k,b,d),b=K(a,c+2*d,k,b,d),b=K(a,c+1*d,k,b,d),b=K(a,c+2*d,k,b,d),b=K(a,c+1*d,k,b,d),b=K(a,c+3*d,k,b,d)}}const w=y.create(),x=y.create(),D=y.create(),Q=y.create(),Ba=y.create(),O=S.createRenderScreenPointArray3(),P=S.createRenderScreenPointArray3(),na=y.create(),oa=y.create(),ma=L.create(),Ca=L.create(),Fa=y.create(),Ga=y.create(),Ha=y.create(),U=[S.createRenderScreenPointArray3(),S.createRenderScreenPointArray3(),
S.createRenderScreenPointArray3(),S.createRenderScreenPointArray3()],H=[y.create(),y.create(),y.create(),y.create()],ca=t.create(),da=t.create(),ea=t.create(),fa=t.create();Y.Parameters=la;Y.RibbonLineMaterial=Aa;Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"})});