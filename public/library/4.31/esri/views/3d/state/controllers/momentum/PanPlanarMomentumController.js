// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../camera/constraintUtils/InteractionType ./MomentumController".split(" "),function(a,e,h,n,p,q,k,d,f,l,m){a.PanPlanarMomentumController=class extends m.MomentumController{constructor(b){super(b);
this.interactionType=l.InteractionType.PAN;this._tmpPan=f.create()}momentumStep(b,c){b=this.momentum.value(b);d.scale(this._tmpPan,this.momentum.direction,b);c.eye=d.subtract(g,c.eye,this._tmpPan);c.center=d.subtract(g,c.center,this._tmpPan);this.constraintOptions.interactionDirection=this._tmpPan}};e.__decorate([h.property({constructOnly:!0})],a.PanPlanarMomentumController.prototype,"momentum",void 0);a.PanPlanarMomentumController=e.__decorate([k.subclass("esri.views.3d.state.controllers.momentum.PanPlanarMomentumController")],
a.PanPlanarMomentumController);const g=f.create();Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});