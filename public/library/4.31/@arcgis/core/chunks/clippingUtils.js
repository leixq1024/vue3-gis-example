/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as t,a as e,r}from"../geometry/Extent.js";const o=t=>parseFloat(t)/100;function a(t,e,r){const a="string"==typeof t.left?o(t.left)*e:t.left,n="string"==typeof t.right?o(t.right)*e:t.right,m="string"==typeof t.top?o(t.top)*r:t.top,y="string"==typeof t.bottom?o(t.bottom)*r:t.bottom,s=m;return{xmin:a,xmax:Math.max(e-n,a),ymin:s,ymax:Math.max(r-y,m)}}function n(o,n,m,y){switch(n.type){case"rect":{const{width:t,height:e}=o,{xmin:r,xmax:y,ymin:s,ymax:i}=a(n,t,e),{x:p,y:g}=m;return p>r&&p<y&&g>s&&g<i}case"path":return 0===n.path.length||!Array.isArray(n.path[0][0])||r(n.path,[m.x,m.y]);case"geometry":return null==n.geometry||("polygon"===n.geometry.type?t(n.geometry,y):e(n.geometry,y))}}export{n as a,a as c};
