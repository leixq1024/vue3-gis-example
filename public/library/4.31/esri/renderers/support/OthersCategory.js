// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../Color ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,d,e,f,c,h,k,l,g){a.OthersCategory=class extends e.ClonableMixin(f.JSONSupport){constructor(){super(...arguments);this.color=new d([0,0,0,0]);this.label=null;this.threshold=0}};b.__decorate([c.property({type:d,json:{write:!0}})],a.OthersCategory.prototype,
"color",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.OthersCategory.prototype,"label",void 0);b.__decorate([c.property({type:Number,range:{min:0,max:1},json:{write:!0}})],a.OthersCategory.prototype,"threshold",void 0);a.OthersCategory=b.__decorate([g.subclass("esri.renderers.support.OthersCategory")],a.OthersCategory);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});