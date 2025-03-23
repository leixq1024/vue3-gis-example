// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../fields/fields ./SketchTooltipInfo ./TooltipInfoWithCoordinates".split(" "),function(a,b,c,l,m,n,f,d,g,h){a.TransformMeshTooltipInfo=class extends h.TooltipInfoWithCoordinates(g.SketchTooltipInfo){constructor(k){super(k);this.type="transform-mesh";this.orientation=d.makeOrientationField();
this.scale=d.makeScaleField();this.allFields.forEach(e=>{e.lockable=!1;e.setActual(null)})}get key(){return{longitude:this.longitude.actual,latitude:this.latitude.actual,x:this.x.actual,y:this.y.actual,elevation:this.elevation.actual,geographic:this.geographic,orientation:this.orientation.actual,scale:this.scale.actual}}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.orientation,this.scale]}};b.__decorate([c.property()],a.TransformMeshTooltipInfo.prototype,"key",
null);b.__decorate([c.property()],a.TransformMeshTooltipInfo.prototype,"allFields",null);a.TransformMeshTooltipInfo=b.__decorate([f.subclass("esri.views.interactive.tooltip.infos.TransformMeshTooltipInfo")],a.TransformMeshTooltipInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});