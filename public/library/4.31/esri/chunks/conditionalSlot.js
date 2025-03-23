// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers"],function(c,d,e){function f(a){a.forEach(({target:g})=>{d.forceUpdate(g)})}let b;const h={childList:!0};c.connectConditionalSlotComponent=function(a){b||=e.createObserver("mutation",f);b.observe(a.el,h)};c.disconnectConditionalSlotComponent=function(a){b.unobserve(a.el)}});