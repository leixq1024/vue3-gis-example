// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Object3DStateSet"],function(b,c,d){class e{constructor(a){this.objectIdField=a;this.ids=new Set;this.paused=!1}hasGraphic(a){return this.ids.has(this.objectIdField?a.graphic.attributes[this.objectIdField]:a.graphic.uid)}}class f extends e{constructor(a){super(a);this.stateType=c.Object3DState.MaskOccludee;this.objectStateSet=new d.Object3DOccludeeStateSet}}class g extends e{constructor(a,h){super(h);this.highlightGroupName=
a;this.stateType=c.Object3DState.Highlight;this.objectStateSet=new d.Object3DHighlightStateSet(a)}}b.Graphics3DObjectHighlightStateSet=g;b.Graphics3DOccludeeStateSet=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});