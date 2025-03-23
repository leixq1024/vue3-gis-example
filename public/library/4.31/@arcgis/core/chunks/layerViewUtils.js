/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import e from"../core/Error.js";function n(e){return e&&"function"==typeof e.highlight}function i(e){return e&&"function"==typeof e.maskOccludee}function t(e,n,i){return null==e||e>=i&&(0===n||e<=n)}function r(e,n){if(n&&e){const{minScale:i,maxScale:r}=e;if(a(i,r))return t(n,i,r)}return!0}function a(e,n){return null!=e&&e>0||null!=n&&n>0}function c(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function u(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function o(n,i,t){return new e("layerview:spatial-reference-incompatible",`The spatial reference of this ${n}${i?`(wkid:${i})`:""} is incompatible with the spatial reference of the view${t?`(wkid:${t})`:""}.`,{})}export{a,r as b,t as c,n as h,u as i,i as o,o as s,c as v};
