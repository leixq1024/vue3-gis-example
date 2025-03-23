// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}b.createHiddenSvg=function(){const a=c("svg");a.setAttribute("style","position: absolute;");a.setAttribute("width","0");a.setAttribute("height","0");a.setAttribute("aria-hidden","true");a.setAttribute("role","presentation");document.body.appendChild(a);return a};b.createSvgElement=c;b.destroyHiddenSvg=function(a){null!=a&&document.body.removeChild(a);return null};Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});