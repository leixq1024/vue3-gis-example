// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./materialUtils".split(" "),function(b,a,c,h,k,l,e,f){var d;a=d=class extends a.JSONSupport{constructor(g){super(g);this.minWorldLength=this.screenLength=0;this.maxWorldLength=null}clone(){return new d({screenLength:this.screenLength,minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})}};
b.__decorate([c.property(f.screenSizeProperty)],a.prototype,"screenLength",void 0);b.__decorate([c.property({type:Number,nonNullable:!0,json:{write:!0,default:0}})],a.prototype,"minWorldLength",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxWorldLength",void 0);return a=d=b.__decorate([e.subclass("esri.symbols.support.Symbol3DVerticalOffset")],a)});