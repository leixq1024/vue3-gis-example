// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom"],function(b,c,d){const e=c.readTask;b.onToggleOpenCloseComponent=function(a){e(()=>{a.transitionEl&&d.whenTransitionDone(a.transitionEl,a.openTransitionProp,()=>{if("opened"in a?a.opened:a.open)a.onBeforeOpen();else a.onBeforeClose()},()=>{if("opened"in a?a.opened:a.open)a.onOpen();else a.onClose()})})}});