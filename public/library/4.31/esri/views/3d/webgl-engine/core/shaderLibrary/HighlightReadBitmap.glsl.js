// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../shaderModules/interfaces"],function(b,c){b.HighlightReadBitmap=function(a){({fragment:a}=a);a.code.add(c.glsl`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(vec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return uint(texel[lic] * 255.0);
}
uint readLevelBits(vec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});