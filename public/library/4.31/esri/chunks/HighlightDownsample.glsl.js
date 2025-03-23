// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform"],function(a,g,d,h,k){function e(){const c=new h.ShaderBuilder,{outputs:l,fragment:b}=c;c.include(g.ScreenSpacePass);b.uniforms.add(new k.Texture2DDrawUniform("textureInput",m=>m.input));b.constants.add("outlineWidth","int",9);b.constants.add("cellSize",
"int",32);l.add("fragGrid","vec2");b.main.add(d.glsl`vec2 inputTextureSize = vec2(textureSize(textureInput, 0));
vec2 cellBottomLeftCornerInput = floor(gl_FragCoord.xy) * vec2(cellSize);
vec2 coordMid =  (cellBottomLeftCornerInput + 0.5 * vec2(cellSize)) / inputTextureSize;
vec2 commonValue = texture(textureInput, coordMid).rg;
int margin = outlineWidth;
float marginSquare = float(margin*margin);
for(int y = -margin; y <= cellSize + margin; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : margin;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
vec2 coord = (cellBottomLeftCornerInput + vec2(x, y)) / inputTextureSize;
vec2 value = texture(textureInput, coord).rg;
if (value != commonValue){
fragGrid = vec2(1.0, 1.0);
return;
}
}
}
bool hasAny = commonValue != vec2(0.0);
fragGrid = vec2(hasAny ? 1.0 : 0.0, 0.0);`);return c}class f extends d.NoParameters{}const n=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:f,blurSize:.4,build:e,gridCellPixelSize:32,outlineSize:9},Symbol.toStringTag,{value:"Module"}));a.HighlightDownsample=n;a.HighlightDownsampleDrawParameters=f;a.blurSize=.4;a.build=e;a.gridCellPixelSize=32;a.outlineSize=9});