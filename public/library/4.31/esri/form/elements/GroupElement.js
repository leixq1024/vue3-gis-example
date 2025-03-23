// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./Element ../support/elements".split(" "),function(b,k,e,l,m,n,p,a,d){var f;a=f=class extends a{constructor(c){super(c);this.elements=null;this.initialState="expanded";this.type="group"}castElements(c){return d.ensureType(c,g,!1)}readElements(c,
h){return d.fromJSON(h.formElements,g,!1)}writeElements(c,h){h.formElements=d.toJSON(c,g,!1)}clone(){return new f({description:this.description,elements:k.clone(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};b.__decorate([e.property({json:{write:!0}})],a.prototype,"elements",void 0);b.__decorate([l.cast("elements")],a.prototype,"castElements",null);b.__decorate([m.reader("elements",["formElements"])],a.prototype,"readElements",null);
b.__decorate([p.writer("elements")],a.prototype,"writeElements",null);b.__decorate([e.property({type:["collapsed","expanded"],json:{write:!0}})],a.prototype,"initialState",void 0);b.__decorate([e.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);a=f=b.__decorate([n.subclass("esri.form.elements.GroupElement")],a);const g=d.buildTypeMaps(a);return a});