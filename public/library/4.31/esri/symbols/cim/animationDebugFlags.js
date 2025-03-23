// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has"],function(b,a){class d{get forceStaticPath(){return"disabled"===a("esri-cim-animations-enable-status")}get forceAnimatedPath(){return"forced"===a("esri-cim-animations-enable-status")}get freezeGlobalTime(){const c=a("esri-cim-animations-freeze-time");return null==c?!1:c}get spotlightAnimatedSymbols(){return!!a("esri-cim-animations-spotlight")}get forceGlobalTimeOrigin(){return!1!==a("esri-cim-animations-freeze-time")}}const e=new d;b.animationDebugFlags=e;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});