// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer".split(" "),function(b,f,a,d,g,n,p,h,k){var e;a=e=class extends a.JSONSupport{constructor(c){super(c);this.value=this.label=this.color=null}writeValue(c,l,m){l[m]=null==c?0:c}clone(){return new e({color:this.color&&
this.color.clone(),label:this.label,value:this.value})}};b.__decorate([d.property({type:f,json:{type:[g.Integer],write:!0}})],a.prototype,"color",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([d.property({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"value",void 0);b.__decorate([k.writer("value")],a.prototype,"writeValue",null);return a=e=b.__decorate([h.subclass("esri.renderers.visualVariables.support.ColorStop")],a)});