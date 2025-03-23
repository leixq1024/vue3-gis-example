/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{L as e}from"./Logger.js";import{isAborted as r,createAbortError as t}from"../core/promiseUtils.js";import{isRefreshableLayer as s}from"../layers/mixins/RefreshableLayer.js";import{u as o}from"./terrainUtils.js";async function i(i,a,l){const m=i.layer;if(o(m)){const s=await m.fetchTile(a[0],a[1],a[2],l);if(r(l))throw e.getLogger(i).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),t();return s}let n=i.getTileUrl(a);s(m)&&m.refreshTimestamp&&(n+=`${n.includes("?")?"&":"?"}_ts=${m.refreshTimestamp}`);const f=i.hasMixedImageFormats?"image+type":"image";return l.requester.request(n,f,l)}export{i as f};
