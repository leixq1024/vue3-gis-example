/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n="randomUUID"in crypto;function t(){if(n)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const r=n=>t[n].toString(16).padStart(4,"0");return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)}function r(){return`{${t().toUpperCase()}}`}function o(){return`{${t()}}`}function a(n){const t=n.toUpperCase();return"{"!==n[0]?`{${t}}`:t}export{r as a,o as b,t as g,a as n};
