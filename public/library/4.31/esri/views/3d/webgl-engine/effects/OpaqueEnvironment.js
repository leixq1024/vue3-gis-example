// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../webgl ../../webgl/RenderNode ../lib/basicInterfaces".split(" "),function(a,b,c,k,l,m,f,d,g,e){a.OpaqueEnvironment=class extends g{constructor(h){super(h);this.produces="disabled";this.consumes={required:[d.InternalRenderCategory.OPAQUE_ENVIRONMENT]}}_enable(){this.produces=
d.InternalRenderCategory.OPAQUE_ENVIRONMENT;this.requestRender(e.RenderRequestType.UPDATE)}_disable(){this.produces="disabled";this.requestRender(e.RenderRequestType.UPDATE)}};b.__decorate([c.property()],a.OpaqueEnvironment.prototype,"produces",void 0);b.__decorate([c.property()],a.OpaqueEnvironment.prototype,"consumes",void 0);b.__decorate([c.property({constructOnly:!0})],a.OpaqueEnvironment.prototype,"techniques",void 0);a.OpaqueEnvironment=b.__decorate([f.subclass("esri.views.3d.webgl-engine.effects.OpaqueEnvironment")],
a.OpaqueEnvironment);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});