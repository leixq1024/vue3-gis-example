// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../rasterFunctionConstants ./BaseFunctionArguments ./convolutionUtils".split(" "),function(c,h,d,a,n,k,g,l,m){var e;a=e=class extends l{constructor(){super(...arguments);this.cols=this.rows=3;this.kernel=[0,0,0,0,1,0,0,0,0]}set convolutionType(b){this._set("convolutionType",b);const f=m.convolutionKernels.get(b);
f&&b!==g.convolutionKernel.userDefined&&b!==g.convolutionKernel.none&&(b=Math.sqrt(f.length),this._set("kernel",f),this._set("cols",b),this._set("rows",b))}clone(){return new e({cols:this.cols,rows:this.rows,kernel:[...this.kernel],convolutionType:this.convolutionType,raster:h.clone(this.raster)})}};c.__decorate([d.property({json:{type:Number,write:!0}})],a.prototype,"rows",void 0);c.__decorate([d.property({json:{type:Number,write:!0}})],a.prototype,"cols",void 0);c.__decorate([d.property({json:{name:"type",
type:Number,write:!0}})],a.prototype,"convolutionType",null);c.__decorate([d.property({json:{type:[Number],write:!0}})],a.prototype,"kernel",void 0);return a=e=c.__decorate([k.subclass("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")],a)});