/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{h as t}from"./componentsUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const e={width:12,height:6,strokeWidth:1},i=({floatingLayout:i,key:o,ref:r})=>{const{width:a,height:s,strokeWidth:h}=e,n=a/2,l="vertical"===i,c=`M0,0 H${a} L${a-n},${s} Q${n},${s} ${n},${s} Z`;return t("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:a,key:o,ref:r,viewBox:`0 0 ${a} ${a+(l?0:h)}`,width:a+(l?h:0)},h>0&&t("path",{class:"calcite-floating-ui-arrow__stroke",d:c,fill:"none","stroke-width":h+1}),t("path",{d:c,stroke:"none"}))};export{i as F};
