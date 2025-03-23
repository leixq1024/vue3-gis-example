// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(e,b,f){let c;b.getBasisTranscoder=function(){c??=(async()=>{const d=await (await new Promise((a,g)=>e(["../../chunks/basis_transcoder"],a,g))).default({locateFile:a=>f.getAssetUrl(`esri/libs/basisu/${a}`)});d.initializeBasis();return d})();return c};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});