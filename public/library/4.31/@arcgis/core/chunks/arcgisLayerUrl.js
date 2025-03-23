/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{urlToObject as e,getOrigin as r,removeTrailingSlash as s,removeQueryParameters as t,join as n,Url as l,makeAbsolute as i}from"../core/urlUtils.js";import{w as a}from"./persistableUrlUtils.js";const u={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},o=Object.values(u),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),v=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),f=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function p(e){return c.test(e)}function d(r){if(null==r)return null;const s=e(r),t=s?.path.match(c)||s?.path.match(v);if(!t)return null;const[,n,l,i,a]=t,o=l.indexOf("/");return{title:m(-1!==o?l.slice(o+1):l),serverType:u[i.toLowerCase()],sublayer:null!=a&&""!==a?parseInt(a,10):null,url:{path:n}}}function h(r){const s=e(r).path.match(f);return s?{serviceUrl:s[1],sublayerId:Number(s[2])}:null}function m(e){return(e=e.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function w(e,r){const s=[];if(e){const r=d(e);null!=r&&r.title&&s.push(r.title)}if(r){const e=m(r);s.push(e)}if(2===s.length){if(s[0].toLowerCase().includes(s[1].toLowerCase()))return s[0];if(s[1].toLowerCase().includes(s[0].toLowerCase()))return s[1]}return s.join(" - ")}function g(e){let s=r(e,!0);return!!s&&(s=s.toLowerCase(),s.endsWith(".arcgis.com")&&(s.startsWith("services")||s.startsWith("tiles")||s.startsWith("features")))}function y(e,r){return e?s(t(e,r)):e}function S(r){let{url:n}=r;if(!n)return{url:n};n=t(n,r.logger);const l=e(n),i=d(l.path);let a;if(null!=i)null!=i.sublayer&&null==r.layer.layerId&&(a=i.sublayer),n=i.url.path;else if(r.nonStandardUrlAllowed){const e=h(l.path);null!=e&&(n=e.serviceUrl,a=e.sublayerId)}return{url:s(n),layerId:a}}function b(e,r,s,t,l){a(r,t,"url",l),t.url&&null!=e.layerId&&(t.url=n(t.url,s,e.layerId.toString()))}function C(e){if(!e)return!1;const r=e.toLowerCase(),s=r.includes("/services/"),t=r.includes("/mapserver/wmsserver"),n=r.includes("/imageserver/wmsserver"),l=r.includes("/wmsserver");return s&&(t||n||l)}function I(e){if(!e)return!1;const r=new l(i(e)),s=r.authority?.toLowerCase();return"server.arcgisonline.com"===s||"services.arcgisonline.com"===s}export{p as a,I as b,h as c,m as d,S as e,C as f,g as i,d as p,y as s,w as t,b as w};
