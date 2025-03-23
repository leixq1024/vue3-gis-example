// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Logger ../../core/has ../../core/RandomLCG ../../core/Error ../../core/accessorSupport/decorators/subclass ./DrawAction ./DrawTool ./input/DrawEvents ../input/InputManager ../interactive/keybindings ../support/screenUtils ../../geometry/Point".split(" "),function(g,e,p,q,r,t,h,k,l,d,b,m,f,n){e=class extends k{constructor(a){super(a);this._addVertexOnPointerUp=!1;this._drawTool=null}initialize(){this._addViewHandles();"3d"===this.view.type&&
this._addDrawTool()}destroy(){this._removeDrawTool();this.emit("destroy")}complete(){this._completeDrawing()}_addViewHandles(){this._addViewHandles2DOnly();this.addHandles([this.view.on("key-down",a=>{a.key===m.sketchKeys.complete&&(this._drawTool?this.complete():(this._abortSnapping(),this._vertexAddHandler(a)))},b.ViewEventPriorities.TOOL)])}_addViewHandles2DOnly(){"2d"===this.view.type&&this.addHandles([this.view.on("pointer-down",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=
a.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=f.createScreenPointFromEvent(a),"touch"===a.pointerType&&this._updateCursor())},b.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>{this._abortSnapping();this._cursorScreenPoint=f.createScreenPointFromEvent(a);"touch"!==a.pointerType&&this._updateCursor()},b.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._addVertexOnPointerUp=!1)},b.ViewEventPriorities.TOOL),
this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp?(a.stopPropagation(),this._vertexAddHandler(a)):this._updateCursor("touch"===a.pointerType))},b.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],a=>{a.stopPropagation()},b.ViewEventPriorities.TOOL)])}_addDrawTool(){const a=new l.DrawTool({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"point",mode:"click"});this._drawTool=
a;this.view.addAndActivateTool(a);this.addHandles([a.on("cursor-update",c=>{1===c.vertices.length&&this.emit("cursor-update",new d.CursorUpdateEvent(this.view,c.vertices[0].vertexIndex,a.getVertexCoords()))}),a.on("complete",c=>{this.emit("draw-complete",new d.DrawCompleteEvent(a.getVertexCoords()));this._removeDrawTool();this.removeAllHandles()})])}_removeDrawTool(){this._drawTool&&(this.view.tools.remove(this._drawTool),this._drawTool=null)}_addVertex(a){a=this._coordinateHelper.arrayToVector(a);
this._isDuplicateOfLastVertex(a)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(a),this.notifyChange("vertices"),this._completeDrawing())}_updateCursor(a=!1){this._popCursorVertex();if(this._cursorScreenPoint){var c=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null==c||a||this._pushCursorVertex(c.vertex,()=>this.emit("cursor-update",new d.CursorUpdateEvent(this.view,this._activeComponent.vertices.length,this.vertices,
null!=this._stagedVertex?new n(this._stagedVertex):null)))}}_completeDrawing(){if(this._drawTool)this._drawTool.completeCreateOperation();else{this._activePointerId=null;this._popCursorVertex();this._abortSnapping();null!=this._snappingManager&&this._snappingManager.doneSnapping();var a=new d.DrawCompleteEvent(this.vertices);this.emit("draw-complete",a);a.defaultPrevented||this.removeAllHandles()}}};return e=g.__decorate([h.subclass("esri.views.draw.PointDrawAction")],e)});