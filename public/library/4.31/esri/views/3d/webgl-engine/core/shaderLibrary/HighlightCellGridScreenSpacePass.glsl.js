// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../shaderModules/Integer2PassUniform","../shaderModules/interfaces","../shaderModules/Texture2DPassUniform","../../../../../chunks/HighlightDownsample.glsl"],function(d,e,f,g,h){d.HighlightCellGridScreenSpacePass=function(c){const {vertex:b}=c;b.uniforms.add(new g.Texture2DPassUniform("coverageTexture",a=>a.coverageTexture),new e.Integer2PassUniform("highlightRenderCellCount",a=>[a.horizontalCellCount,a.verticalCellCount]),new e.Integer2PassUniform("highlightTextureResolution",
a=>[a.highlightTexture.descriptor.width,a.highlightTexture.descriptor.height]));b.constants.add("cellSize","int",h.gridCellPixelSize);c.varyings.add("sUV","vec2");c.varyings.add("vOutlinePossible","float");b.code.add(f.glsl`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`);b.main.add(f.glsl`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
vec4 cov = texelFetch(coverageTexture, cellPos, 0);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = cov.g;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});