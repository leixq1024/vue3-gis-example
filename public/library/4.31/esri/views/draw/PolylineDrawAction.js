// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./DrawAction ./DrawingMode ./DrawTool ./input/DrawEvents ../input/InputManager ../interactive/keybindings ../support/screenUtils ../../geometry/Point".split(" "),function(l,f,m,v,w,x,q,r,p,t,e,c,g,n,u){f=class extends r{constructor(a){super(a);this._addVertexOnPointerUp=this._popVertexOnPointerMove=this._panEnabled=
!1;this._drawTool=null;this.mode=p.defaultDrawingMode}initialize(){this._addViewHandles();"3d"===this.view.type&&this._addDrawTool()}destroy(){this._removeDrawTool();this.emit("destroy")}get _clickEnabled(){return"click"===this.mode||"hybrid"===this.mode}get _dragEnabled(){return"freehand"===this.mode||"hybrid"===this.mode}undo(){this._drawTool?this._drawTool.undo():(super.undo(),this.notifyChange("vertices"))}redo(){this._drawTool?this._drawTool.redo():(super.redo(),this.notifyChange("vertices"))}canUndo(){return this._drawTool?.canUndo()??
super.canUndo()}canRedo(){return this._drawTool?.canRedo()??super.canRedo()}complete(){this._completeDrawing()}_addViewHandles(){this._addViewHandles2DOnly();this.addHandles([this.view.on("key-down",a=>{const {key:b,repeat:d}=a;b!==g.sketchKeys.vertexAdd||d?b!==g.sketchKeys.complete||d?b!==g.sketchKeys.undo||this.interactiveUndoDisabled||d?b!==g.sketchKeys.redo||this.interactiveUndoDisabled||d||(a.stopPropagation(),this.redo()):(a.stopPropagation(),this.undo()):(a.stopPropagation(),this._drawCompleteHandler(a)):
(a.stopPropagation(),this._handleVertexAddKey(a))},c.ViewEventPriorities.TOOL)])}_addViewHandles2DOnly(){"2d"===this.view.type&&(this.addHandles([this.view.on("click",a=>{a.stopPropagation()},c.ViewEventPriorities.TOOL),this.view.on("pointer-down",a=>{this._shouldHandlePointerEvent(a)&&!this._panEnabled&&(this._abortSnapping(),this._activePointerId=a.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=n.createScreenPointFromEvent(a),"touch"===a.pointerType&&this._updateCursor())},c.ViewEventPriorities.TOOL),
this.view.on("pointer-move",a=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1);this._abortSnapping();this._cursorScreenPoint=n.createScreenPointFromEvent(a);"touch"!==a.pointerType&&this._updateCursor()},c.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._cursorScreenPoint=n.createScreenPointFromEvent(a),this._dragEnabled&&!this._panEnabled?this._vertexAddHandler(a):this._addVertexOnPointerUp=!1)},
c.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp?this._clickEnabled?this._vertexAddHandler(a):(1===this.vertices.length&&this.vertices.pop(),this._drawCompleteHandler(a)):this._updateCursor("touch"===a.pointerType))},c.ViewEventPriorities.TOOL),this.view.on("drag",a=>{this._dragEnabled&&null!=this._activePointerId&&!this._panEnabled&&a.stopPropagation()},c.ViewEventPriorities.TOOL),
this.view.on("drag",["Shift"],a=>{a.stopPropagation()},c.ViewEventPriorities.TOOL),this.view.on("double-click",a=>{a.stopPropagation();this._drawCompleteHandler(a)},c.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],a=>{a.stopPropagation();this._drawCompleteHandler(a)},c.ViewEventPriorities.TOOL),this.view.on("key-down",a=>{const {key:b,repeat:d}=a;b!==g.sketchKeys.pan||d||(a.stopPropagation(),this._panEnabled=!0)},c.ViewEventPriorities.TOOL),this.view.on("key-up",a=>{a.key===g.sketchKeys.pan&&
(a.stopPropagation(),this._panEnabled=!1)},c.ViewEventPriorities.TOOL)]),this._addUndoRedoHandles())}_handleVertexAddKey(a){this._drawTool?this._drawTool.drawOperation.commitStagedVertex():this._cursorScreenPoint&&(this._abortSnapping(),this._vertexAddHandler(a))}_addUndoRedoHandles(){this.addHandles([this._editGeometryOperations.on("vertex-remove",a=>{this.notifyChange("vertices");if("undo"===a.operation){const b=[...this._committedVertices];null!=this._stagedVertex&&b.push(this._coordinateHelper.pointToArray(this._stagedVertex));
this.emit("undo",new e.VertexRemoveEvent(this.view,a.vertices[0].index,b))}}),this._editGeometryOperations.on("vertex-add",a=>{this.notifyChange("vertices");if("apply"===a.operation)a=new e.VertexAddEvent(this.view,this._committedVertices.length-1,this.vertices),this.emit("vertex-add",a),a.defaultPrevented&&(this._popVertexOnPointerMove=!0);else if("redo"===a.operation){const b=[...this._committedVertices];null!=this._stagedVertex&&b.push(this._coordinateHelper.pointToArray(this._stagedVertex));this.emit("redo",
new e.VertexAddEvent(this.view,a.vertices[0].index,b))}})])}_addDrawTool(){const a=new t.DrawTool({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"polyline",mode:this.mode});this._drawTool=a;this.view.addAndActivateTool(a);this.addHandles([a.on("vertex-add",b=>{if(1===b.vertices.length){var {view:d}=this,h=b.vertices[0].vertexIndex,k=a.getVertexCoords();this.emit("vertex-add",new e.VertexAddEvent(d,h,k));"undo"!==b.operation&&"redo"!==b.operation||this.emit(b.operation,
new e.VertexAddEvent(d,h,k))}}),a.on("vertex-remove",b=>{if(1===b.vertices.length){var {view:d}=this,h=b.vertices[0].vertexIndex,k=a.getVertexCoords();this.emit("vertex-remove",new e.VertexRemoveEvent(d,h,k));"undo"!==b.operation&&"redo"!==b.operation||this.emit(b.operation,new e.VertexRemoveEvent(d,h,k))}}),a.on("cursor-update",b=>{1===b.vertices.length&&this.emit("cursor-update",new e.CursorUpdateEvent(this.view,b.vertices[0].vertexIndex,a.getVertexCoords()))}),a.on("complete",b=>{this.emit("draw-complete",
new e.DrawCompleteEvent(a.getVertexCoords()));this._removeDrawTool();this.removeAllHandles()})])}_removeDrawTool(){this._drawTool&&(this.view.tools.remove(this._drawTool),this._drawTool=null)}_addVertex(a){a=this._coordinateHelper.arrayToVector(a);this._isDuplicateOfLastVertex(a)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(a))}_updateCursor(a=!1){this._popCursorVertex();if(this._cursorScreenPoint){var b=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
null==b||a||this._pushCursorVertex(b.vertex,()=>this.emit("cursor-update",new e.CursorUpdateEvent(this.view,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new u(this._stagedVertex):null)))}}_completeDrawing(){if(this._drawTool)this._drawTool.completeCreateOperation();else if(this._activePointerId=null,this._popCursorVertex(),!(2>this._committedVertices.length)){this._abortSnapping();null!=this._snappingManager&&this._snappingManager.doneSnapping();var a=new e.DrawCompleteEvent(this.vertices);
this.emit("draw-complete",a);a.defaultPrevented||this.removeAllHandles()}}};l.__decorate([m.property()],f.prototype,"_clickEnabled",null);l.__decorate([m.property()],f.prototype,"_dragEnabled",null);l.__decorate([m.property({type:p.drawingModes})],f.prototype,"mode",void 0);return f=l.__decorate([q.subclass("esri.views.draw.PolylineDrawAction")],f)});