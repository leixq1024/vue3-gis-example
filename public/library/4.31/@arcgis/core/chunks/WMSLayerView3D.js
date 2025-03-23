/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import r from"../core/Error.js";import"./Logger.js";import"../core/lang.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"../geometry/Extent.js";import{D as s}from"./DynamicLayerView3D.js";import{W as o}from"./WMSLayerView.js";import"../config.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./asyncUtils.js";import"../core/reactiveUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./GridLocalOriginFactory.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./vec4f64.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./Attribute.js";import"./Material.js";import"./interfaces3.js";import"./VertexAttribute.js";import"./boundedPlane.js";import"./ray.js";import"./mat3.js";import"./mat3f64.js";import"./plane.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./mat4.js";import"./Axis.js";import"./lineSegment.js";import"./sphere.js";import"./vec4.js";import"./ViewingMode.js";import"./StencilUtils.js";import"./Indices.js";import"./Util.js";import"./triangle.js";import"./basicInterfaces.js";import"./Matrix4PassUniform.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./lengthUtils.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./GLObjectType.js";import"./vec2.js";import"./compilerUtils.js";import"./AlphaCutoff.js";import"./renderState.js";import"./RibbonLineMaterial.js";import"./sdfPrimitives.js";import"./doublePrecisionUtils.js";import"./floatRGBA.js";import"./Octree.js";import"./frustum.js";import"./screenUtils.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./RgbaFloatEncoding.glsl.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./aaBoundingBox.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./project.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./extentUtils.js";import"./boundsUtils.js";import"../geometry/Polyline.js";import"./utils9.js";import"./utils10.js";import"../rest/support/ProjectParameters.js";import"./RenderGeometry.js";import"./SceneLighting.js";import"./NormalAttribute.glsl.js";import"./VertexPosition.glsl.js";import"./Matrix3DrawUniform.js";import"../views/3d/webgl/RenderCamera.js";import"../core/signal.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"./enumeration.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./ScreenSpacePass.glsl.js";import"./Float4DrawUniform.js";import"./MergedRenderer.js";import"./NestedMap.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"../views/3d/webgl.js";import"./computeTranslationToOriginAndRotation.js";import"../views/3d/webgl/RenderNode.js";import"./HighlightDefaults.js";import"../Color.js";import"./colorUtils.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./BufferObject.js";import"./HUDRenderStyle.js";import"./Intersector.js";import"./intersectorUtils.js";import"./Intersector3.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./Scheduler.js";import"./debugFlags.js";import"./ImageMaterial.js";import"./GLTextureMaterial.js";import"./RayIntersections.js";import"./DefaultLayouts.js";import"./TriangleMaterial.js";import"./VertexColor.glsl.js";import"../views/layers/LayerView.js";import"../core/Identifiable.js";import"./UpdatingHandles.js";import"./layerViewUtils.js";import"./RefreshableLayerView.js";import"./ExportWMSImageParameters.js";import"./timeSupport2.js";import"../support/timeUtils.js";import"./timeUtils.js";import"./date.js";import"./datetime.js";import"../time/TimeExtent.js";import"./utils6.js";import"./Version.js";import"./Version2.js";import"./tagSymbols.js";let m=class extends(o(s)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add((()=>this.exportImageParameters?.version),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(t){const r=this.findExtentInfoAt(t),e=r.extent,s=new i(e[0],e[1],e[2],e[3],this._spatialReference),o=r.imageSize,m=o.width,p=o.height,j=s.width/m;return{extent:s,width:m,height:p,x:Math.round((t.x-s.xmin)/j),y:Math.round((s.ymax-t.y)/j)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};m=t([e("esri.views.3d.layers.WMSLayerView3D")],m);const p=m;export{p as default};
