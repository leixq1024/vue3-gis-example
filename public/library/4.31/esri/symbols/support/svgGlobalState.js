// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function c(b=0){d=b}function e(b=0){f=b}function g(b=0){h=b}let d=0,f=0,h=0;a.nextBloomId=function(){return h++};a.nextLinearGradientId=function(){return f++};a.nextPatternId=function(){return d++};a.resetBloomId=g;a.resetLinearGradientId=e;a.resetPatternId=c;a.resetSVGGlobalState=function(){c();e();g()};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});