/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as a,a as e,b as s,c as r,d as l,e as t,f as c,g as n,h as o,j as d,A as i,k as u}from"./languageUtils.js";function m(a){f=a}let f;function p(m){return null===m?null:a(m)?m.clone():e(m)?m:s(m)?m.clone():r(m)?m.toArray().map((a=>p(a))):l(m)?m.map((a=>p(a))):t(m)?f.createFromArcadeFeature(m):c(m)||n(m)?m:o(m)||"esri.arcade.Attachment"===m?.declaredClass?m.deepClone():("esri.arcade.Portal"===m?.declaredClass||d(m)||m instanceof i||u(m),m)}export{m as c,p as d};
