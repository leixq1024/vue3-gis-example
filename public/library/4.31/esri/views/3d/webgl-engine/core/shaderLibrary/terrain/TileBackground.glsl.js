// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../output/BlendOptions ./BackgroundGrid.glsl ./BaseOpacityMode ./BlendLayersOutput ./PremultipliedAlphaSource ../util/BlendModes.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(g,p,q,r,t,e,u,v,w,x,a,y){class z extends a.NoParameters{constructor(){super(...arguments);this.baseOpacity=1;this.backgroundColor=
p.ZEROS;this.fboTexture=null}}g.TileBackground=function(b,c){const k=c.output===e.BlendLayersOutput.GridComposite,l=c.output===e.BlendLayersOutput.ColorComposite,m=c.output===e.BlendLayersOutput.GroupBackgroundComposite;var f=c.output===e.BlendLayersOutput.Composite;const h=c.baseOpacityMode===t.BaseOpacityMode.Required;b=b.fragment;h&&b.uniforms.add(new x.FloatPassUniform("baseOpacity",d=>d.baseOpacity));k?b.include(r.BackgroundGrid):l?b.uniforms.add(new w.Float3PassUniform("backgroundColor",d=>
d.backgroundColor)):f&&b.uniforms.add(new y.Texture2DPassUniform("fboColor",d=>d.fboTexture));const n=c.blendMode!==q.LayerBlendMode.Normal,A=c.premultipliedSource===u.PremultipliedAlphaSource.On;f=!n&&!A&&(f&&!h||m);b.include(v.BlendModes,c);b.code.add(a.glsl`
    vec4 getBackground(vec2 uv) {
      return ${h?a.glsl`baseOpacity *`:""} ${m?a.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:l?a.glsl`vec4(backgroundColor, 1.0)`:k?a.glsl`vec4(gridColor(uv), 1.0)`:a.glsl`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec2 bgUV, vec4 colorLayer, float opacity) {
      ${n?a.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec4 bgColor = getBackground(bgUV);
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:a.glsl`
          float composeAlpha = colorLayer.a * opacity;
          ${f?a.glsl`return colorLayer * opacity;`:a.glsl`
            vec4 bgColor = getBackground(bgUV);
            return bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)};g.TileBackgroundPassParameters=z;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});