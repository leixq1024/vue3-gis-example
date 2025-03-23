// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass"],function(b,a,c,d){a=class extends a.JSONSupport{constructor(e){super(e);this.type=this.label=this.description=null}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property()],a.prototype,"type",void 0);
return a=b.__decorate([d.subclass("esri.tables.elements.AttributeTableElement")],a)});