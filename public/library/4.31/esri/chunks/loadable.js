// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils"],function(b,d){function e(a){return f.get(a)}const g=new WeakMap,f=new WeakMap;b.componentFocusable=async function(a){await e(a);if(d.isBrowser())return d.forceUpdate(a),new Promise(c=>requestAnimationFrame(()=>c()))};b.componentLoaded=e;b.setComponentLoaded=function(a){g.get(a)()};b.setUpLoadableComponent=function(a){f.set(a,new Promise(c=>g.set(a,c)))}});