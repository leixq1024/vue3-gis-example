// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Clonable ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./ChronologicalLayoutSettings ./OrganicLayoutSettings".split(" "),function(b,a,d,c,k,l,m,e,f,g){a=class extends a.ClonableMixin(d.JSONSupport){constructor(h){super(h);this.organicLayoutSettings=this.chronologicalLayoutSettings=null}};b.__decorate([c.property({type:f,json:{write:!0}})],a.prototype,"chronologicalLayoutSettings",
void 0);b.__decorate([c.property({type:g,json:{write:!0}})],a.prototype,"organicLayoutSettings",void 0);return a=b.__decorate([e.subclass("esri.linkChart.LayoutSettings")],a)});