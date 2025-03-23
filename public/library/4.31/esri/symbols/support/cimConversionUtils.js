// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../symbols","../../core/Error","../cim/CIMSymbolHelper","../CIMSymbol"],function(b,f,c,d,e){b.convertToCIMSymbol=function(a){a=d.symbolToCIM(a);if(!a)throw new c("cimConversionUtils.convertToCIMSymbol","Unable to convert this symbol to CIM");return new e({data:a})};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});