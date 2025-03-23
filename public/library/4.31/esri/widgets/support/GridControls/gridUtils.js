// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../Color","../../../core/mathUtils"],function(b,d,e){b.applyColorToGrid=(a,f)=>{if(a&&!(3>f.length)){var [g,h,k,c]=f,[l,m]=void 0===c?[1,.25]:[c,.25*c];a.majorLineColor=d.fromArray([g,h,k,l]);a.minorLineColor=d.fromArray([g,h,k,m])}};b.gridRotationToDegrees=a=>null==a||isNaN(a)?0:Math.trunc(e.moduloPositive(a+180,360));b.userInputToGridRotation=a=>{if(null==a)return 0;"string"===typeof a&&(a=parseInt(a,10));return isNaN(a)?0:e.moduloPositive(Math.trunc(a),360)-180};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});