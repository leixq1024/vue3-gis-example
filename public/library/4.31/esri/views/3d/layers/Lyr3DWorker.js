// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/ILyr3DWasmPerSceneView","../../../libs/lyr3d/Lyr3DModule"],function(g,h,n){function l(){if(b)return Promise.resolve();k||=n.loadLyr3DWorkerWASM().then(d=>{b=d;b.initialize_lyr3d_worker_wasm();k=null});return k}let k,b;g.destroyWasm=function(){b&&(b.uninitialize_lyr3d_worker_wasm(),b=null)};g.initialize=l;g.process=async function(d){await l();if(1>d.inputs.length)return{result:{status:h.Lyr3DWasmWorkerOutputStatus.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),
missingInputUrls:[]},transferList:[]};var c={ptrs:[],sizes:[]};for(var a of d.inputs){var e=b._malloc(a.byteLength);(new Uint8Array(b.HEAPU8.buffer,e,a.byteLength)).set(new Uint8Array(a));c.ptrs.push(e);c.sizes.push(a.byteLength)}a=b.process(d.jobDescJson,c,d.isMissingResourceCase);e=a.status===h.Lyr3DWasmWorkerOutputStatus.Succeeded&&a.data;const m=a.status===h.Lyr3DWasmWorkerOutputStatus.MissingInputs&&0<a.missingInputUrls.length;if(e){var f=a.data.slice();a.data=f}else m&&(a.jobDescJson=a.jobDescJson.slice(),
a.originalInputs=d.inputs);for(f=0;f<c.ptrs.length;++f)b._free(c.ptrs[f]);c=[];if(e)c.push(a.data.buffer);else if(m)for(const p of d.inputs)c.push(p);return{result:a,transferList:c}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});