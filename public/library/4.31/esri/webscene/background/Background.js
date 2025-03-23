// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e)}clone(){throw Error("Subclasses of Background should implement their own clone method.");}};b.__decorate([c.property({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0);return a=b.__decorate([d.subclass("esri.webscene.background.Background")],
a)});