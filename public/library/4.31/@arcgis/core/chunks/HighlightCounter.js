/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=new Set;class e{constructor(){this._idToCounters=new Map}get empty(){return 0===this._idToCounters.size}addGroup(t,e){for(const o of t){let t=this._idToCounters.get(o);t||(t=new Map,this._idToCounters.set(o,t)),t.set(e,(t.get(e)||0)+1)}}deleteGroup(t,e){for(const o of t){const t=this._idToCounters.get(o);if(!t)continue;let s=t.get(e);if(null==s)return;s--,s>0?t.set(e,s):t.delete(e),0===t.size&&this._idToCounters.delete(o)}}getHighlightGroups(e){const o=this._idToCounters.get(e);if(!o)return t;const s=new Set;for(const[t,e]of o)e>0&&s.add(t);return s}ids(){return this._idToCounters.keys()}}export{e as H};
