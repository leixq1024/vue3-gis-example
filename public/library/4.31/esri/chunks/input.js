// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){function e(a,c,b,d){const f=b.toLowerCase();a=a[b];d&&null!=a?c.setAttribute(f,`${a}`):c.removeAttribute(f)}const h="date datetime-local month number range time week".split(" "),k="email password search tel text url".split(" "),l="email password search tel text textarea url".split(" ");g.syncHiddenFormInput=function(a,c,b){b.type="textarea"===a?"text":a;var d=h.includes(a);e(c,b,"min",d);e(c,b,"max",d);e(c,b,"step",d);d=l.includes(a);e(c,b,"minLength",d);e(c,b,"maxLength",
d);a=k.includes(a);e(c,b,"pattern",a)}});