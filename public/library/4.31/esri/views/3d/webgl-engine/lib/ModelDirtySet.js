// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/uid ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./ModelDirtyTypes ./Util".split(" "),function(t,p,A,w,v,B,C,x,d,r){class y{constructor(a,b,c,e){this.operation=a;this.geometry=b;this.states=c;this.sync=e}}p=class extends p{constructor(a){super(a);this._residentGeomRecords=new Map;this._dirtyGeomRecords=
new Map;this._dirtyRecordCount=0}get dirty(){return 0<this._dirtyRecordCount}commitLayer(a,b){const c=this._dirtyGeomRecords.get(a);if(c){var e=0;c.forEach((g,h)=>{const f=this._ensureGeomRecord(a,h);e+=g.size;g.forEach(({geometry:l,operation:k,states:m},q)=>{let n=!1;if(k===d.DirtyOperation.UPDATE){const u=f.get(q);if(u){if(m&d.DirtyState.TRANSFORMATION){const z=this.model.getObject(h);this.model.updateRenderGeometryTransformation(z,l,u)&&(n=!0)}n||b.updates.push({renderGeometry:u,updateType:m})}else r.assert(!1,
"ModelDirtySet.commitLayer: invalid update")}if(k===d.DirtyOperation.REMOVE||n)(m=f.get(q))?(b.removes.push(m),f.delete(q)):k===d.DirtyOperation.REMOVE&&r.assert(!1,"ModelDirtySet.commitLayer: invalid remove");if(k===d.DirtyOperation.ADD||n)k=this.model.getObject(h),null!=k&&(l=this.model.getRenderGeometry(k,l),b.adds.push(l),f.set(q,l))});0===f.size&&this._residentGeomRecords.get(a).delete(h)});0===this._residentGeomRecords.get(a).size&&this._residentGeomRecords.delete(a);this._dirtyGeomRecords.delete(a);
this._dirtyRecordCount-=e}}commitSyncUpdates(a,b){const c=this._dirtyGeomRecords.get(a);c&&c.forEach((e,g)=>{const h=this._ensureGeomRecord(a,g);e.forEach(({geometry:f,operation:l,states:k,sync:m},q)=>{let n=!1;l===d.DirtyOperation.UPDATE&&m&&((l=h.get(q))?(k&d.DirtyState.TRANSFORMATION&&(m=this.model.getObject(g),this.model.updateRenderGeometryTransformation(m,f,l)&&(n=!0)),n||b.updates.push({renderGeometry:l,updateType:k})):r.assert(!1,"ModelDirtySet.commitSyncUpdates: invalid update"))})})}getResidentRenderGeometries(a,
b){(a=this._residentGeomRecords.get(a))&&a.forEach(c=>c.forEach(e=>b.push(e)))}_objectStateChanged(a,b){for(const c of b.geometries)this._updateOrCreateDirtyRecord(b,c,null,d.DirtyOperation.UPDATE,a)}visibilityChanged(a){this._objectStateChanged(d.DirtyState.VISIBILITY,a)}highlightChanged(a){this._objectStateChanged(d.DirtyState.HIGHLIGHT,a)}occlusionChanged(a){this._objectStateChanged(d.DirtyState.OCCLUDEE,a)}attributesChanged({object:a,geometry:b,sync:c}){this._updateOrCreateDirtyRecord(a,b,null,
d.DirtyOperation.UPDATE,d.DirtyState.GEOMETRY,c)}layerAdded(a){a.objects.forAll(b=>this._layerObjectAdded(a,b))}layerRemoved(a){a.objects.forAll(b=>this._layerObjectRemoved(a,b))}layerObjectAdded(a){this._layerObjectAdded(a.layer,a.object)}_layerObjectAdded(a,b){a=a.id;for(const c of b.geometries)this._geometryAdded(b,c,a)}layerObjectRemoved(a){this._layerObjectRemoved(a.layer,a.object)}layerObjectsAdded(a){for(const b of a.objects)this._layerObjectAdded(a.layer,b)}layerObjectsRemoved(a){for(const b of a.objects)this._layerObjectRemoved(a.layer,
b)}_layerObjectRemoved(a,b){a=a.id;for(const c of b.geometries)this._geometryRemoved(b,c,a)}transformationChanged(a){const b=this._getParentLayerId(a);this._ensureGeomRecord(b,a.id).forEach(c=>{this._updateOrCreateDirtyRecord(a,c.geometry,b,d.DirtyOperation.UPDATE,d.DirtyState.TRANSFORMATION)})}shaderTransformationChanged(a){const b=this._getParentLayerId(a);this._ensureGeomRecord(b,a.id).forEach(c=>{c.objectShaderTransformationChanged(a.shaderTransformation)})}geometryAdded(a){this._geometryAdded(a.object,
a.geometry)}_geometryAdded(a,b,c=null){this._updateOrCreateDirtyRecord(a,b,c,d.DirtyOperation.ADD)}geometryRemoved(a){this._geometryRemoved(a.object,a.geometry)}_geometryRemoved(a,b,c=null){this._updateOrCreateDirtyRecord(a,b,c,d.DirtyOperation.REMOVE)}_updateOrCreateDirtyRecord(a,b,c,e,g=d.DirtyState.NONE,h=!1){c=c??this._getParentLayerId(a);const f=b.id;a=this._ensureDirtyRecord(c,a.id);(c=a.get(f))?(b=c.operation,b===d.DirtyOperation.REMOVE&&e===d.DirtyOperation.ADD&&c.states!==d.DirtyState.NONE?
c.operation=d.DirtyOperation.UPDATE:b===d.DirtyOperation.REMOVE&&e===d.DirtyOperation.ADD||b===d.DirtyOperation.ADD&&e===d.DirtyOperation.REMOVE?(a.delete(f),this._dirtyRecordCount--):(b!==d.DirtyOperation.UPDATE||e!==d.DirtyOperation.REMOVE&&e!==d.DirtyOperation.UPDATE?r.assert((b===d.DirtyOperation.REMOVE||b===d.DirtyOperation.ADD)&&e===d.DirtyOperation.UPDATE,"ModelDirtySet.objectGeometryAdded: inconsistent state"):c.operation=e,c.states|=g),c.sync=c.sync||h):(a.set(f,new y(e,b,g,h)),this._dirtyRecordCount++)}_ensureGeomRecord(a,
b){let c=this._residentGeomRecords.get(a);c||(c=new Map,this._residentGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a}_ensureDirtyRecord(a,b){let c=this._dirtyGeomRecords.get(a);c||(c=new Map,this._dirtyGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a}_getParentLayerId(a){return a.parentLayer?a.parentLayer.id:w.nullUid}formatDebugInfo(){const a=["ADD","UPD",void 0,"REM"];let b="";this._dirtyGeomRecords.forEach((c,e)=>{c.forEach((g,h)=>{0<b.length&&(b+="\n");
b+=e+"."+h;const f=[];g.forEach(l=>{const k=l.operation;f[k]||(f[k]=[]);f[k].push(l.geometry.id)});for(g=0;g<f.length;g++)if(f[g])for(b+=" "+a[g-1]+": ",h=0;h<f[g].length;h++)b+=f[g][h]+", "})});return b}get test(){}};t.__decorate([v.property()],p.prototype,"_dirtyRecordCount",void 0);t.__decorate([v.property({constructOnly:!0})],p.prototype,"model",void 0);return p=t.__decorate([x.subclass("esri.views.3d.webgl-engine.lib.ModelDirtySet")],p)});