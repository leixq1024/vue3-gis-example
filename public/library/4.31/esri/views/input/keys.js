// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has"],function(a,b){b=b("mac")?"Meta":"Control";const c=new Set("Alt Control Meta Shift Ctrl Primary".split(" "));a.isSystemModifier=d=>c.has(d);a.primaryKey=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});