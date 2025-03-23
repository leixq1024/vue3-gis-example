// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./aspectProcessor ./bandArithmeticProcessor ./colormapToRGBProcessor ./compositeBandProcessor ./computeChangeProcessor ./contrastProcessor ./convolutionProcessor ./curvatureProcessor ./extractBandProcessor ./focalStatisticsProcessor ./grayscaleProcessor ./hillshadeProcessor ./localProcessor ./maskProcessor ./ndviProcessor ./remapProcessor ./reprojectProcessor ./slopeProcessor ./stretchProcessor ../../../../webgl/enums ../../../../webgl/Texture ../../../../webgl/TextureDescriptor".split(" "),
function(l,v,w,x,y,z,A,B,C,D,E,F,n,p,G,H,I,J,K,L,k,M,N){function q(c,d){const b=new N.TextureDescriptor;b.width=c;b.height=d;b.internalFormat=k.SizedPixelFormat.RGBA32F;b.samplingMode=k.TextureSamplingMode.NEAREST;b.dataType=k.PixelType.FLOAT;b.isImmutable=!0;b.wrapMode=k.TextureWrapMode.CLAMP_TO_EDGE;return b}const a=new Map;a.set("arithmetic",p);a.set("aspect",v);a.set("bandarithmetic",w);a.set("colormaptorgb",x);a.set("computechange",z);a.set("compositeband",y);a.set("convolution",B);a.set("contrastbrightness",
A);a.set("curvature",C);a.set("extractband",D);a.set("statistics",E);a.set("grayscale",F);a.set("hillshade",n);a.set("shadedrelief",n);a.set("local",p);a.set("mask",G);a.set("ndvi",H);a.set("remap",I);a.set("slope",K);a.set("stretch",L);l.createTextureDescriptor=q;l.process=function(c,d,b,e){const f=c.rasterFunction.name.toLowerCase();var g="reproject"===f?J:a.get(f.toLowerCase());if(null!=g){{const {context:m,requestRender:r,allowDelayedRender:O}=c;var h=g.createProgram(c,e);O&&null!=r&&!h.compiled?
(r(),h=null):(m.bindFramebuffer(b),m.setViewport(0,0,b.width,b.height),m.useProgram(h))}if(h){g.bindTextureAndUniforms(c,h,e);({interpolation:g}=e);"reproject"===f&&(e.interpolation="nearest");d.draw();var [t,u]=e.getRasterTextureSize("reproject"===f);d=q(t,u);d=new M.Texture(c.context,d);b.copyToTexture(0,0,t,u,0,0,d);"reproject"===f?(e.rasterTexture=d,e.projected=!0,e.interpolation=g):e.functionTextures[c.hasBranches?c.rasterFunction.id:0]=d}}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});