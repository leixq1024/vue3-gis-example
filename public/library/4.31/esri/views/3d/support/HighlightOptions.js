// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Color ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../support/HighlightDefaults ../../support/HighlightOptions".split(" "),function(c,g,d,b,l,m,h,e,k){var f;b=f=class extends k{constructor(a){super(a);this.shadowColor=e.defaultShadowColor.clone();this.shadowOpacity=e.defaultShadowOpacity;this.shadowDifference=e.defaultShadowDifference}equals(a){return this===
a||super.equals(a)&&this.shadowColor.equals(a.shadowColor)&&this.shadowOpacity===a.shadowOpacity&&this.shadowDifference===a.shadowDifference}clone(){return new f({...this,color:this.color.clone(),haloColor:this.haloColor?.clone(),shadowColor:this.shadowColor.clone()})}};c.__decorate([d.property({type:g})],b.prototype,"shadowColor",void 0);c.__decorate([d.property()],b.prototype,"shadowOpacity",void 0);c.__decorate([d.property()],b.prototype,"shadowDifference",void 0);return b=f=c.__decorate([h.subclass("esri.views.3d.support.HighlightOptions")],
b)});