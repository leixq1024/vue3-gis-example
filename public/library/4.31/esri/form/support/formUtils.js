// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return"text-area"===a.type}function d(a){return"text-box"===a.type}b.isFieldElement=a=>"field"===a.type;b.isGroupElement=a=>"group"===a.type;b.isRelationshipElement=a=>"relationship"===a.type;b.isTextAreaInput=c;b.isTextBoxInput=d;b.isTextElement=a=>"text"===a.type;b.isTextInput=function(a){return c(a)||d(a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});