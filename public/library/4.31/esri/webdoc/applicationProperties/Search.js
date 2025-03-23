// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/extensions/serializableProperty/writePolicyUtils ./SearchLayer ./SearchTable".split(" "),function(b,a,k,l,c,v,w,m,n,p,f,q,r){var e;const g=a.ofType(q),h=a.ofType(r);
a=e=class extends k.JSONSupport{constructor(d){super(d);this.enabled=this.addressSearchEnabled=!0;this.hintText=null;this.layers=new g;this.tables=new h}readAddressSearchEnabled(d){return!d}writeAddressSearchEnabled(d,t,u){t[u]=!d}clone(){return new e(l.clone({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};b.__decorate([c.property({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",
isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"addressSearchEnabled",void 0);b.__decorate([m.reader("addressSearchEnabled")],a.prototype,"readAddressSearchEnabled",null);b.__decorate([p.writer("addressSearchEnabled")],a.prototype,"writeAddressSearchEnabled",null);b.__decorate([c.property({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],a.prototype,"enabled",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"hintText",void 0);b.__decorate([c.property({type:g,json:{write:{overridePolicy:f.writeNonEmptyCollectionPolicy},origins:{"web-scene":{write:{isRequired:!0}}}}})],a.prototype,"layers",void 0);b.__decorate([c.property({type:h,json:{read:!0,write:{overridePolicy:f.writeNonEmptyCollectionPolicy}}})],a.prototype,"tables",void 0);return a=e=b.__decorate([n.subclass("esri.webdoc.applicationProperties.Search")],a)});