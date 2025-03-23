/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import i from"./Symbol3DLayer.js";import{s}from"../chunks/jsonMap.js";import{JSONSupport as p}from"../core/JSONSupport.js";import{r as n,w as h}from"../chunks/persistableUrlUtils.js";import c from"../core/Accessor.js";import{S as a}from"../chunks/Symbol3DMaterial.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../chunks/writer.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/vec3f64.js";import"../chunks/materialUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";var l;const m=s()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});let d=l=class extends p{clone(){return new l({href:this.href,primitive:this.primitive})}};t([o({type:String,json:{read:n,write:h}})],d.prototype,"href",void 0),t([e(m)],d.prototype,"primitive",void 0),d=l=t([r("esri.symbols.support.ObjectSymbol3DLayerResource")],d);const u="sphere";var y;let j=y=class extends c{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}clone(){return new y({x:this.x,y:this.y,z:this.z})}};var v;t([o({type:Number})],j.prototype,"x",void 0),t([o({type:Number})],j.prototype,"y",void 0),t([o({type:Number})],j.prototype,"z",void 0),j=y=t([r("esri.symbols.support.Symbol3DAnchorPosition3D")],j);let b=v=class extends i{constructor(t){super(t),this.material=null,this.castShadows=!0,this.resource=null,this.type="object",this.width=void 0,this.height=void 0,this.depth=void 0,this.anchor=void 0,this.anchorPosition=void 0,this.heading=void 0,this.tilt=void 0,this.roll=void 0}clone(){return new v({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,anchorPosition:this.anchorPosition?.clone(),depth:this.depth,enabled:this.enabled,height:this.height,material:this.material?.clone()??null,castShadows:this.castShadows,resource:this.resource?.clone(),width:this.width})}get isPrimitive(){return!this.resource||"string"!=typeof this.resource.href}};t([o({type:a,json:{write:!0}})],b.prototype,"material",void 0),t([o({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0),t([o({type:d,json:{write:!0}})],b.prototype,"resource",void 0),t([e({Object:"object"},{readOnly:!0})],b.prototype,"type",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"width",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"height",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"depth",void 0),t([e({center:"center",top:"top",bottom:"bottom",origin:"origin",relative:"relative"},{default:"origin"})],b.prototype,"anchor",void 0),t([o({type:j,json:{type:[Number],read:{reader:t=>new j({x:t[0],y:t[1],z:t[2]})},write:{writer:(t,o)=>{o.anchorPosition=[t.x,t.y,t.z]},overridePolicy(){return{enabled:"relative"===this.anchor}}}}})],b.prototype,"anchorPosition",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"heading",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"tilt",void 0),t([o({type:Number,json:{write:!0}})],b.prototype,"roll",void 0),t([o({readOnly:!0})],b.prototype,"isPrimitive",null),b=v=t([r("esri.symbols.ObjectSymbol3DLayer")],b);const w=b;export{u as d,w as default};
