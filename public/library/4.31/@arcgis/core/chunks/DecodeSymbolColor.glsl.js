/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as o}from"./mathUtils.js";import{g as l}from"./interfaces3.js";var e;function a(o){switch(o){case"multiply":default:return e.Multiply;case"ignore":return e.Ignore;case"replace":return e.Replace;case"tint":return e.Tint}}function t(l,a,t){if(null==l||a===e.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const c=o(Math.round(l[3]*n),0,n),m=0===c||a===e.Tint?0:a===e.Replace?s:i;t[0]=o(Math.round(l[0]*r),0,r),t[1]=o(Math.round(l[1]*r),0,r),t[2]=o(Math.round(l[2]*r),0,r),t[3]=c+m}!function(o){o[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"}(e||(e={}));const r=255,n=85,s=n,i=2*n;function c(o){o.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int(e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int(e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int(e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int(e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}export{e as C,c as D,t as e,a as p};
