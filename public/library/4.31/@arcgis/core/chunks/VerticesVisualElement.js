/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{f as e}from"./vec3.js";import{c as t}from"./vec3f64.js";import{e as r,c as i}from"./vec4.js";import{b as s}from"./vec4f64.js";import{O as a}from"./Object3DVisualElement.js";import{a as o,E as n}from"./ElevationContext.js";import{h as l}from"./aaBoundingBox.js";import{C as c}from"./basicInterfaces.js";import{d as h}from"./GeometryUtil.js";import{R as u}from"./Material.js";import{S as d}from"./RenderObject.js";class _ extends a{constructor(e){super(e),this.view=null,this._renderOccluded=u.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=s([1,127/255,0,1]),this._size=11,this._outlineColor=s([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){r(e,this._color)||(i(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){r(e,this._outlineColor)||(i(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,screenSizeScale:this.size,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const t=this.vertices;if(null==t||0===t.length)return[];const r=function(e,t,r,i,s){const a=l(3*e.length),n=l(a.length);e.forEach(((e,t)=>{a[3*t]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));const c=o(a,t,0,n,0,a,0,a.length/3,r,i,s),h=null!=c;return{numVertices:e.length,position:a,mapPositions:n,projectionSuccess:h,sampledElevation:c}}(t,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,n.fromElevationInfo(this.elevationInfo)),i=[],s=r.numVertices,a=r.position;for(let t=0;t<s;++t){const r=e(m,a[3*t],a[3*t+1],a[3*t+2]),s=v(this._vertexMaterial,.5,r),o=v(this._vertexOutlineMaterial,.5,r);i.push({vertexGeometry:s,vertexOutlineGeometry:o})}return i}createGeometries(e){const t=this._createRenderGeometries();for(const{vertexGeometry:r,vertexOutlineGeometry:i}of t)e.addGeometry(r),e.addGeometry(i)}createExternalResources(){this._vertexMaterial=new d({...this._vertexMaterialParameters,writeDepth:!0,cullFace:c.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new d({...this._vertexOutlineMaterialParameters,forceTransparentMode:!0,writeDepth:!0,cullFace:c.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const m=t();function v(e,t,r){return h(e,t,16,16,{offset:r})}export{_ as V};
