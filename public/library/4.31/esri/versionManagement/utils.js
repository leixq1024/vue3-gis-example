// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/Collection ../core/handleUtils ../core/Logger ../core/MapUtils ../rest/featureService/FeatureService ./VersioningState ./VersionManagementService ./versionAdapters/utils".split(" "),function(f,g,n,p,q,r,t,u,k){async function l(a,h){if("layers"in a){const e=k.createVersionAdapters(a.allTables.concat(a.allLayers).filter(d=>"group"!==d.type).toArray());a.utilityNetworks&&a.utilityNetworks.forEach(d=>{d=k.createVersionAdapters([d]);e.push(...d)});var c=e}else c=new g(a);a=new Map;
for(var b of c)(c=a.get(b.featureServiceUrl))?c.push(b):a.set(b.featureServiceUrl,new g([b]));b=new g;for(const [e,d]of a)a=new r({url:e}),await a.load(),a.versionManagementServiceUrl&&(a=new u({url:a.versionManagementServiceUrl}),b.push(new t({versionManagementService:a,versionableItems:d,usePersistentReadSessions:h})));return b}const m=new Map;f.createVersioningStates=l;f.getVersioningStates=async function(a,h=!1){const c=await l(a.map,h);return q.getOrCreateMapValue(m,a,()=>{a.addHandles(n.makeHandle(()=>
{m.delete(a);c.forEach(b=>b.destroy())}));c.forEach(b=>b.load().catch(e=>{p.getLogger("esri.versionManagement.VersioningState").error("Failed to load Versioning State",e)}));return c})};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});