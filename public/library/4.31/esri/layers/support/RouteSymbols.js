// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./RouteStopSymbols ../../symbols/SimpleLineSymbol ../../symbols/SimpleMarkerSymbol ../../symbols/SimpleFillSymbol".split(" "),function(b,d,a,c,m,n,p,h,f,e,g,k){a=class extends a.JSONSupport{constructor(l){super(l);this.directionLines=new e({color:[0,122,194],width:6});this.directionPoints=
new g({color:[255,255,255],size:6,outline:{color:[0,122,194],width:2}});this.pointBarriers=new g({style:"x",size:10,outline:{color:[255,0,0],width:3}});this.polygonBarriers=new k({color:[255,170,0,.6],outline:{width:7.5,color:[255,0,0,.6]}});this.polylineBarriers=new e({width:7.5,color:[255,85,0,.7]});this.routeInfo=new e({width:8,color:[20,89,127]});this.stops=new f}};b.__decorate([c.property({types:d.lineSymbolTypes})],a.prototype,"directionLines",void 0);b.__decorate([c.property({types:d.pointSymbolTypes})],
a.prototype,"directionPoints",void 0);b.__decorate([c.property({types:d.pointSymbolTypes})],a.prototype,"pointBarriers",void 0);b.__decorate([c.property({types:d.polygonSymbolTypes})],a.prototype,"polygonBarriers",void 0);b.__decorate([c.property({types:d.lineSymbolTypes})],a.prototype,"polylineBarriers",void 0);b.__decorate([c.property({types:d.lineSymbolTypes})],a.prototype,"routeInfo",void 0);b.__decorate([c.property({type:f})],a.prototype,"stops",void 0);return a=b.__decorate([h.subclass("esri.layers.support.RouteSymbols")],
a)});