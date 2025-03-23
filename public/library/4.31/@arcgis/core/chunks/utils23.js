/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{id as e}from"../kernel.js";import n from"../request.js";async function r(r,s,t){const u=e?.findCredential(r.restUrl);if(!u)return null;if("loaded"===r.loadStatus&&""===s&&r.user?.sourceJSON&&!1===t)return r.user.sourceJSON;const a={responseType:"json",query:{f:"json"}};if(t&&(a.query.returnUserLicenseTypeExtensions=!0),""===s){const e=await n(r.restUrl+"/community/self",a);if(e.data){const n=e.data;if(n?.username)return n}return null}const o=await n(r.restUrl+"/community/users/"+s,a);if(o.data){const e=o.data;return e.error?null:e}return null}async function s(e,n,s){const t=await r(e,n,!0);return t?.privileges?.includes(s)??!1}async function t(e,n,s){const t=await r(e,n,!0);return t?.userLicenseTypeExtensions?.includes(s)??!1}export{s as a,t as h,r as l};
