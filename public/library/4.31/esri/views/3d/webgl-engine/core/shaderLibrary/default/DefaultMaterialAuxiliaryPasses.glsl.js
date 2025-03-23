// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../ForwardLinearDepth.glsl ../ShaderOutput ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/ObjectAndLayerIdColor.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/DiscardOrAdjustAlpha.glsl ../util/View.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../../lib/basicInterfaces".split(" "),function(w,
y,d,l,m,k,z,n,A,B,C,v,p,q,c,r,D){w.DefaultMaterialAuxiliaryPasses=function(b,a){const {vertex:e,fragment:f}=b,g=a.hasColorTexture&&a.alphaDiscardMode!==D.AlphaDiscardMode.Opaque,{output:x,normalType:t,hasColorTextureTransform:u}=a;switch(x){case d.ShaderOutput.Depth:q.addProjViewLocalOrigin(e,a);b.include(m.Transform,a);b.include(l.SliceDraw,a);b.include(n.TextureCoordinateAttribute,a);g&&f.uniforms.add(new r.Texture2DPassUniform("tex",h=>h.texture));e.main.add(c.glsl`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`);b.include(p.DiscardOrAdjustAlphaPass,a);f.main.add(c.glsl`
          discardBySlice(vpos);
          ${c.If(g,c.glsl`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case d.ShaderOutput.Shadow:case d.ShaderOutput.ShadowHighlight:case d.ShaderOutput.ShadowExcludeHighlight:case d.ShaderOutput.ViewshedShadow:case d.ShaderOutput.ObjectAndLayerIdColor:q.addProjViewLocalOrigin(e,a);b.include(m.Transform,a);b.include(n.TextureCoordinateAttribute,a);b.include(v.VisualVariables,a);b.include(B.OutputDepth,a);b.include(l.SliceDraw,a);b.include(z.ObjectAndLayerIdColor,a);y.addNearFar(b);b.varyings.add("depth","float");
g&&f.uniforms.add(new r.Texture2DPassUniform("tex",h=>h.texture));e.main.add(c.glsl`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`);b.include(p.DiscardOrAdjustAlphaPass,a);f.main.add(c.glsl`
          discardBySlice(vpos);
          ${c.If(g,c.glsl`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${x===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`outputObjectAndLayerIdColor();`:c.glsl`outputDepth(depth);`}`);break;case d.ShaderOutput.Normal:q.addProjViewLocalOrigin(e,a);b.include(m.Transform,a);b.include(k.NormalAttribute,a);b.include(A.VertexNormal,a);b.include(n.TextureCoordinateAttribute,a);b.include(v.VisualVariables,a);g&&f.uniforms.add(new r.Texture2DPassUniform("tex",h=>h.texture));t===k.NormalType.ScreenDerivative&&b.varyings.add("vPositionView","vec3");e.main.add(c.glsl`
          vpos = getVertexInLocalOriginSpace();
          ${t===k.NormalType.Attribute||t===k.NormalType.Compressed?c.glsl`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:c.glsl`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`);b.include(l.SliceDraw,a);b.include(p.DiscardOrAdjustAlphaPass,a);f.main.add(c.glsl`
          discardBySlice(vpos);
          ${c.If(g,c.glsl`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${t===k.NormalType.ScreenDerivative?c.glsl`vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break;case d.ShaderOutput.Highlight:q.addProjViewLocalOrigin(e,a),b.include(m.Transform,a),b.include(n.TextureCoordinateAttribute,a),b.include(v.VisualVariables,a),g&&f.uniforms.add(new r.Texture2DPassUniform("tex",h=>h.texture)),e.main.add(c.glsl`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),b.include(l.SliceDraw,a),b.include(p.DiscardOrAdjustAlphaPass,a),b.include(C.OutputHighlight,a),f.main.add(c.glsl`
          discardBySlice(vpos);
          ${c.If(g,c.glsl`vec4 texColor = texture(tex, ${u?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});