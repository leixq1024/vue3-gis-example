/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{I as r,N as t}from"./ensureType.js";import s from"../time/TimeExtent.js";const m={type:s,json:{read:{source:"timeExtent",reader:e=>e?Array.isArray(e)?s.fromArray(e):s.fromJSON(e):null},write:{writer:(r,t,s,m)=>{r&&(r.isEmpty?m?.messages&&m.messages.push(new e("invalid-timeExtent","TimeExtent cannot be empty")):t[s]=r.toArray())},target:{timeExtent:{type:[[r,t]]}}}}};export{m as t};
