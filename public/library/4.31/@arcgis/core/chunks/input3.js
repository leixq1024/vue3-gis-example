/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */
const t=["date","datetime-local","month","number","range","time","week"],e=["email","password","search","tel","text","url"],n=["email","password","search","tel","text","textarea","url"];function a(t,e,n,a){const s=n.toLowerCase(),r=t[n];a&&null!=r?e.setAttribute(s,`${r}`):e.removeAttribute(s)}function s(s,r,o){o.type="textarea"===s?"text":s;const i=t.includes(s),l=r;a(l,o,"min",i),a(l,o,"max",i),a(l,o,"step",i);const c=n.includes(s),m=r;a(m,o,"minLength",c),a(m,o,"maxLength",c),a(m,o,"pattern",e.includes(s))}export{s};
