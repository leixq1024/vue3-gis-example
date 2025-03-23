// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/handleUtils","../../../../support/elevationInfoUtils"],function(d,f,g){d.canMoveZOperations=function(c,a){return!!c?.data.coordinateHelper.hasZ()&&"on-the-ground"!==a.mode&&!g.hasFeatureExpressionInfo(a)};d.disableDisplayOnGrab=function(c,a){let b=null;const h=c.events.on("grab-changed",e=>{null!=b&&(b.remove(),b=null);"start"===e.action&&(b=c.disableDisplay());a&&a(e)});return f.makeHandle(()=>{b?.remove();h.remove()})};Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});