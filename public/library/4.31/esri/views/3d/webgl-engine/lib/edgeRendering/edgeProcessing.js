// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry/support/meshUtils/deduplicate ../../../support/meshProcessing ../../../support/buffer/InterleavedLayout ../VertexAttribute ./bufferLayouts ./edgeBufferWriters ./edgePreprocessing".split(" "),function(d,p,k,g,e,q,h,r){function l(a,c,f,b){if(c)return c=k.computeNeighbors(f,b,a.count),new t(f,b,c,a);a=p.deduplicate(a.buffer,a.stride/4,{originalIndices:f,originalIndicesLength:b});b=k.computeNeighbors(a.indices,b,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,
neighbors:b,vertices:q.EdgeInputBufferLayout.createView(a.buffer)}}class t{constructor(a,c,f,b){this.faces=a;this.facesLength=c;this.neighbors=f;this.vertices=b}}const m=new h.RegularEdgeBufferWriter,n=new h.SilhouetteEdgeBufferWriter;h=g.newLayout().vec3f(e.VertexAttribute.POSITION0).vec3f(e.VertexAttribute.POSITION1);g=g.newLayout().vec3f(e.VertexAttribute.POSITION0).vec3f(e.VertexAttribute.POSITION1).u16(e.VertexAttribute.COMPONENTINDEX);d.extract=function(a){const c=l(a.data,a.skipDeduplicate,
a.indices,a.indicesLength);m.updateSettings(a.writerSettings);n.updateSettings(a.writerSettings);return r.extractEdges(c,m,n)};d.extractComponentsEdgeLocationsLayout=g;d.extractEdgeInformation=l;d.extractEdgeLocationsLayout=h;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});