// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./mesh/MeshWriterInputEvaluator"],function(c,d){c.createMeshWriter=async function(b,e,a,f,g,h){b=await d.MeshWriterInputEvaluator.create(b,e,g);a=new h(f,b,{},a);await a.loadDependencies();return a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});