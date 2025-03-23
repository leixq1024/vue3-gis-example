// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/handleUtils","../../../../core/reactiveUtils","../../../../layers/graphics/sources/interfaces"],function(c,f,d,e){c.meshTransformFastUpdateHandles=function(a){const b=a.graphic;return b?[d.watch(()=>"visible"in a?a.visible:a.displaying,g=>{g&&b.notifyMeshTransformChanged({action:e.MeshTransformUpdateAction.EnableFastUpdates})},{...d.syncAndInitial}),f.makeHandle(()=>b.notifyMeshTransformChanged({action:e.MeshTransformUpdateAction.DisableFastUpdates}))]:[]};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});