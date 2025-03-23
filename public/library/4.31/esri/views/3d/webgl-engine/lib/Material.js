// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../core/shaderModules/interfaces ./ContentObject ./ContentObjectType ./DefaultVertexAttributeLocations ../materials/internal/MaterialUtil".split(" "),function(b,d,g,h,k,l,e){class m extends h.ContentObject{constructor(a,c){super();this.type=k.ContentObjectType.Material;this.supportsEdges=!1;this._renderPriority=0;this.vertexAttributeLocations=l.Default3D;this._pp0=d.fromValues(0,0,1);this._pp1=d.fromValues(0,0,0);this._parameters=
new c;e.updateParameters(this._parameters,a);this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(a){return!1}setParameters(a,c=!0){e.updateParameters(this._parameters,a)&&(this.validateParameters(this._parameters),c&&this._parametersChanged())}validateParameters(a){}shouldRender(a){return this.visible&&this.isVisibleForOutput(a.output)&&(!this.parameters.isDecoration||a.bind.decorations)&&0!==(this.parameters.renderOccluded&a.renderOccludedMask)}isVisibleForOutput(a){return!0}get renderPriority(){return this._renderPriority}set renderPriority(a){a!==
this._renderPriority&&(this._renderPriority=a,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(a){return this.visible&&this.parameters.renderOccluded===a}get hasEmissions(){return!1}intersectDraped(a,c,n,f,p,r){this._pp0[0]=this._pp1[0]=f[0];this._pp0[1]=this._pp1[1]=f[1];return this.intersect(a,c,n,this._pp0,this._pp1,p)}}b.RenderOccludedFlag=void 0;(function(a){a[a.None=0]="None";a[a.Occlude=1]="Occlude";a[a.Transparent=2]="Transparent";
a[a.OccludeAndTransparent=4]="OccludeAndTransparent";a[a.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil";a[a.Opaque=16]="Opaque"})(b.RenderOccludedFlag||(b.RenderOccludedFlag={}));class q extends g.NoParameters{constructor(){super(...arguments);this.renderOccluded=b.RenderOccludedFlag.Occlude;this.isDecoration=!1}}b.Material=m;b.MaterialParameters=q;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});