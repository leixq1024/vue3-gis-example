// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./AlphaCutoff ../../shaderModules/FloatDrawUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/basicInterfaces".split(" "),function(f,k,l,m,c,e){function h(a,d,b){const g=a.fragment;switch(d.alphaDiscardMode){case e.AlphaDiscardMode.Blend:a.fragment.code.add(c.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < ${c.glsl.float(k.alphaCutoff)}) { discard; } }
      `);break;case e.AlphaDiscardMode.Opaque:g.code.add(c.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case e.AlphaDiscardMode.Mask:g.uniforms.add(b).code.add(c.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case e.AlphaDiscardMode.MaskBlend:g.uniforms.add(b).code.add(c.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}f.DiscardOrAdjustAlphaDraw=function(a,d){h(a,d,new l.FloatDrawUniform("textureAlphaCutoff",b=>b.textureAlphaCutoff))};f.DiscardOrAdjustAlphaPass=function(a,
d){h(a,d,new m.FloatPassUniform("textureAlphaCutoff",b=>b.textureAlphaCutoff))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});