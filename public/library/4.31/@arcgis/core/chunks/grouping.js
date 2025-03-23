/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{n as e}from"./Logger.js";function t(t,o){let r;if("string"==typeof t)r=e(t+`-seed(${o})`);else{let e=12;r=t^o;do{r=107*(r>>8^r)+e|0}while(0!=--e)}return(1+r/(1<<31))/2}function o(e){return Math.floor(t(e,r)*n)}const r=53290320,n=10;export{o as a,t as g};
