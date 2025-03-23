// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./index-p4VH55K1"],function(b,c){b.extractRegion=function(a){if(0===c.getTimezone(a).countries.length)return"Global";const d=a.indexOf("/");return-1===d?a:a.slice(0,d)};b.getCountry=function(a){return c.getCountryForTimezone(a)?.id??a};b.global="Global";Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});