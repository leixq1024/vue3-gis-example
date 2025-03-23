// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../geometry/support/aaBoundingBox ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,g,q,m,n,F,r,G,t,H,u,I,J,v,K,w,f,L,M,N,x){function y(c){const e=new N.ShaderBuilder,k=c.output===H.ShaderOutput.Color,{vertex:l,fragment:z}=e;e.include(u.SliceDraw,c);e.attributes.add(x.VertexAttribute.POSITION,"vec3");e.attributes.add(x.VertexAttribute.COLOR,"vec3");l.uniforms.add(new L.Matrix4DrawUniform("modelView",(a,b)=>q.multiply(A,b.camera.viewMatrix,q.fromTranslation(A,a.origin))),new M.Matrix4PassUniform("proj",(a,b)=>b.camera.projectionMatrix),new v.Float2DrawUniform("screenMinMaxSize",
(a,b,d)=>n.set(p,d.useFixedSizes?0:d.minSizePx*b.camera.pixelRatio,(a.isLeaf?256:64)*b.camera.pixelRatio)),c.useFixedSizes?new K.Float2PassUniform("pointScale",(a,b)=>n.set(p,a.fixedSize*b.camera.pixelRatio,b.camera.fullHeight)):new v.Float2DrawUniform("pointScale",(a,b,d)=>n.set(p,a.splatSize*d.scaleFactor*b.camera.pixelRatio,b.camera.fullHeight/b.camera.pixelRatio)));c.clippingEnabled?l.uniforms.add(new w.Float3DrawUniform("clipMin",(a,b,d)=>r.set(B,d.clipBox[0]-a.origin[0],d.clipBox[1]-a.origin[1],
d.clipBox[2]-a.origin[2])),new w.Float3DrawUniform("clipMax",(a,b,d)=>r.set(B,d.clipBox[3]-a.origin[0],d.clipBox[4]-a.origin[1],d.clipBox[5]-a.origin[2]))):(l.constants.add("clipMin","vec3",[-g.numberMaxFloat32,-g.numberMaxFloat32,-g.numberMaxFloat32]),l.constants.add("clipMax","vec3",[g.numberMaxFloat32,g.numberMaxFloat32,g.numberMaxFloat32]));k&&e.varyings.add("vColor","vec3");l.main.add(f.glsl`
    // Move clipped points outside of clipspace
    if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
      position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
      gl_Position = vec4(0.0,0.0,0.0,2.0);
      gl_PointSize = 0.0;
      return;
    }

    if (rejectBySlice(position)) {
      gl_Position = vec4(0.0, 0.0, 0.0, 2.0);
      gl_PointSize = 0.0;
      return;
    }

    // Position in camera space
    vec4 camera = modelView * vec4(position, 1.0);

    float pointSize = pointScale.x;
    vec4 position = proj * camera;
    ${c.drawScreenSize?f.glsl`float clampedScreenSize = pointSize;`:f.glsl`float pointRadius = 0.5 * pointSize;
           vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
           vec4 positionOffset = proj * cameraOffset;
           float radius = abs(positionOffset.y - position.y);
           float viewHeight = pointScale.y;
           // screen diameter = (2 * r / w) * (h / 2)
           float screenPointSize = (radius / position.w) * viewHeight;
           float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
           // Shift towards camera, to move rendered point out of terrain i.e. to
           // the camera-facing end of the virtual point when considering it as a
           // 3D sphere.
           camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
           position = proj * camera;`}

    gl_PointSize = clampedScreenSize;
    gl_Position = position;
    ${k?f.glsl`vColor = color;`:""}`);z.include(J.RgbaFloatEncoding,c);e.include(I.OutputHighlight,c);z.main.add(f.glsl`
    vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
    float r2 = dot(vOffset, vOffset);

    if (r2 > 0.25) {
      discard;
    }
    calculateOcclusionAndOutputHighlight();
    ${k?f.glsl`fragColor = vec4(vColor, 1.0);`:""}`);return e}function C(c){return c?256:64}class D extends f.NoParameters{constructor(){super(...arguments);this.clipBox=t.create(t.positiveInfinity);this.useRealWorldSymbolSizes=this.useFixedSizes=!1;this.scaleFactor=1;this.sizePx=this.size=this.minSizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}}
class E extends u.SlicePlaneParameters{constructor(c,e,k){super(c);this.origin=c;this.isLeaf=e;this.splatSize=k}}const A=m.create(),B=G.create(),p=F.create();m=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:E,PointRendererPassParameters:D,build:y,getMaxPointSizeScreenspace:C},Symbol.toStringTag,{value:"Module"}));h.PointRenderer=m;h.PointRendererDrawParameters=E;h.PointRendererPassParameters=D;h.build=y;h.getMaxPointSizeScreenspace=C});