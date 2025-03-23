// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error"],function(b,c){b.checkWasmError=function(a,d,e){if(0!==a.error_code)throw new c(d,e,{errorCode:a.error_code,errorMessage:a.error_message});};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});