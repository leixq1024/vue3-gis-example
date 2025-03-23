/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../geometry.js";import t from"../geometry/support/MeshTransform.js";import o from"../geometry/Point.js";function n(t,n,a=i){return new o({x:t[a.originX],y:t[a.originY],z:t[a.originZ],spatialReference:n})}function a(o,n=i){return new t({translation:[o[n.translationX],-o[n.translationZ],o[n.translationY]],rotationAxis:[o[n.rotationX],-o[n.rotationZ],o[n.rotationY]],rotationAngle:o[n.rotationDeg],scale:[o[n.scaleX],o[n.scaleZ],o[n.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{a,n as e};
