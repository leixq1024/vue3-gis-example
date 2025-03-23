// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/handleUtils ../dragEventPipeline3D ../ManipulatorType ./Manipulation ./moveUtils ../../../../interactive/dragEventPipeline".split(" "),function(e,h,k,l,m,n,c){class p extends m.Manipulation{constructor(a){super();this._view=a.view;this._tool=a.tool;this._object=a.object;this._manipulator=this._object.createManipulator?.({selectable:!0,cursor:"move"});this.forEachManipulator(b=>this._tool.manipulators.add(b))}destroy(){this.forEachManipulator(a=>{this._tool.manipulators.remove(a);
a.destroy()});this._manipulator=this._view=this._tool=null}forEachManipulator(a){this._manipulator&&a(this._manipulator,l.ManipulatorType.TRANSLATE_XY)}createManipulatedObjectDragPipeline(a){return n.createManipulatedMoveDragPipeline(this._object,a,b=>this.createDragPipeline(b))}createDragPipeline(a){if(!this._manipulator)return h.makeHandle();const b=this._view;return c.createManipulatorDragEventPipeline(this._manipulator,(q,d,r,t,f)=>{const g=this._object.operations?.data.spatialReference;d=d.next(u=>
g?u:null).next(k.screenToMapXYForManipulatedObject(f,b,this._object,g)).next(c.addMapDelta()).next(c.addScreenDelta());a(q,d,r,t,f)})}}e.MoveXYObjectManipulation=p;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});