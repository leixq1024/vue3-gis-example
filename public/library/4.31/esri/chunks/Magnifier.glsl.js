// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/screenUtils ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(d,e,u,f,l,v,c,w,g,x){function m(){const b=new w.ShaderBuilder;
b.attributes.add(x.VertexAttribute.POSITION,"vec2");b.vertex.uniforms.add(new v.Float4PassUniform("drawPosition",(a,h)=>{const k=h.camera.pixelRatio,y=a.magnifier.offset.x*k,z=a.magnifier.offset.y*k;e.screenPointObjectToArray(a.magnifier.position,n);const p=h.camera.screenToRender(n,A);a=Math.ceil(k*a.magnifier.size);const {fullWidth:q,fullHeight:r}=h.camera;return u.set(B,-1+(p[0]+y)/q*2,-1+(p[1]-z)/r*2,a/q*2,a/r*2)}));b.varyings.add("vUV","vec2");b.vertex.main.add(c.glsl`vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);`);b.fragment.uniforms.add(new g.Texture2DPassUniform("textureInput",a=>a.input));b.fragment.uniforms.add(new g.Texture2DPassUniform("textureMask",a=>a.mask));b.fragment.uniforms.add(new g.Texture2DPassUniform("textureOverlay",a=>a.overlay));b.fragment.uniforms.add(new l.BooleanPassUniform("maskEnabled",a=>a.magnifier.maskEnabled));b.fragment.uniforms.add(new l.BooleanPassUniform("overlayEnabled",a=>a.magnifier.overlayEnabled));
b.fragment.code.add(c.glsl`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}`);b.fragment.main.add(c.glsl`float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;`);return b}class t extends c.NoParameters{constructor(){super(...arguments);this.input=this.overlay=this.mask=null;this.size=0}}const n=e.createScreenPointArray(),A=e.createRenderScreenPointArray(),B=f.create();f=Object.freeze(Object.defineProperty({__proto__:null,MagnifierPassParameters:t,build:m},Symbol.toStringTag,{value:"Module"}));d.Magnifier=f;d.MagnifierPassParameters=t;d.build=m});