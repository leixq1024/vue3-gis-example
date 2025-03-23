// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../TechniqueType","./AnimatedMarkerShader","./AnimatedTechnique"],function(a,b,c,d){class e extends d.AnimatedTechnique{constructor(){super(...arguments);this.type=b.TechniqueType.AnimatedMarker;this.shaders={geometry:new c.AnimatedMarkerShader}}}a.AnimatedMarkerTechnique=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});