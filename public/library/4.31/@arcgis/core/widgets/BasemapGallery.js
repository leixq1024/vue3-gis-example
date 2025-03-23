/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{g as t}from"../chunks/assets.js";import{when as s}from"../core/reactiveUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{g as o,b as a,j as n}from"../chunks/basemapUtils.js";import l from"./Widget.js";import m from"./BasemapGallery/BasemapGalleryViewModel.js";import{l as p}from"../chunks/componentsUtils.js";import{g as c}from"../chunks/globalCss.js";import{H as u}from"../chunks/Heading.js";import{a as d}from"../chunks/accessibleHandler.js";import{m as h}from"../chunks/messageBundle.js";import{t as j}from"../chunks/jsxFactory.js";import{o as g}from"../chunks/widgetUtils.js";import"../config.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../Basemap.js";import"../chunks/collectionUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/loadAll.js";import"../chunks/writer.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../portal/Portal.js";import"../chunks/reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/persistableUrlUtils.js";import"../chunks/messages.js";import"../support/BasemapStyle.js";import"../chunks/writeUtils.js";import"../chunks/layerUtils.js";import"../chunks/utils2.js";import"../chunks/colorUtils.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../intl.js";import"../chunks/date.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../geometry/projection.js";import"../chunks/vec3f64.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../geometry/Polyline.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/utils21.js";import"../chunks/ViewingMode.js";import"../chunks/terrainUtils.js";import"../chunks/vec3.js";import"../chunks/TerrainConst.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"../chunks/TileKey.js";import"../chunks/spatialReferenceSupport.js";import"./BasemapGallery/support/BasemapGalleryItem.js";import"../core/Identifiable.js";import"./BasemapGallery/support/LocalBasemapsSource.js";import"./BasemapGallery/support/PortalBasemapsSource.js";const k="esri-basemap-gallery",y={base:k,sourceLoading:`${k}--source-loading`,layoutGrid:`${k}--grid`,narrowItems:`${k}--narrow-items`,loader:`${k}__loader`,item:`${k}__item`,itemContainer:`${k}__item-container`,itemContent:`${k}__item-content`,itemTitle:`${k}__item-title`,itemTagsContainer:`${k}__item-tags-container`,itemThumbnail:`${k}__item-thumbnail`,selectedItem:`${k}__item--selected`,itemError:`${k}__item--error`};let b=class extends l{constructor(e,t){super(e,t),this.disabled=!1,this.headingLevel=2,this.messages=null,this.viewModel=new m,this._focusBasemapItemEnabled=!1,this._container=null,this._width=0,this._onContainerCreated=e=>{this._container=e}}initialize(){this.addHandles([g((()=>this._container),(({contentRect:e})=>{this._width=e.width})),s((()=>this.source),(()=>this.viewModel.loadSource()),{sync:!0,initial:!0})])}loadDependencies(){return p({scrim:()=>import("../chunks/calcite-scrim.js"),chip:()=>import("../chunks/calcite-chip.js")})}get activeBasemap(){return this.viewModel.activeBasemap}set activeBasemap(e){this.viewModel.activeBasemap=e}get icon(){return"basemap"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get source(){return this.viewModel.source}set source(e){this.viewModel.source=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e="loading"===this.source.state,t=this.disabled||"disabled"===this.viewModel.state,s={[y.sourceLoading]:e,[c.disabled]:t},r=this._width;r<=200||r>=420?s[y.layoutGrid]=!0:r<280&&(s[y.narrowItems]=!0);const i=this._getContext();return j("div",{afterCreate:this._onContainerCreated,class:this.classes(y.base,c.widget,c.panel,s),key:"container",styles:{"--esri-basemap-gallery-small":"200px"}},0===this._width?null:i)}_getContext(){if("unsupported"===this.viewModel.state)return j("div",{class:c.empty,key:"empty-message"},j(u,{level:this.headingLevel},this.messages.unsupported));if("loading"===this.source.state)return j("div",{class:y.loader,key:"loader"});const e=this.viewModel.items;return e.length>0?j("ul",{"aria-disabled":this.disabled,"aria-label":this.label,bind:this,class:y.itemContainer,key:"item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},e.map(((e,t)=>this._renderBasemapGalleryItem(e,t))).toArray()):j("div",{class:c.empty,key:"empty-message"},j(u,{level:this.headingLevel},this.messages.noBasemaps))}_getRoundRobinIndex(e,t){return(e+t)%t}_handleKeyDown(e){const{key:t}=e;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t))return;e.preventDefault();const{items:s,activeBasemapIndex:r}=this.viewModel,i="ArrowUp"===t||"ArrowLeft"===t?this._getRoundRobinIndex(Math.max(r-1,-1),s.length):this._getRoundRobinIndex(r+1,s.length),o=s.at(i);"ready"===o?.state&&(this.viewModel.activeBasemap=o.basemap),this._focusBasemapItemEnabled=!0}_focusBasemapItem(e){this._focusBasemapItemEnabled&&0===e.tabIndex&&(e.focus(),this._focusBasemapItemEnabled=!1)}_handleClick(e){const t=e.currentTarget["data-item"];"ready"===t.state&&(this.viewModel.activeBasemap=t.basemap)}_renderBasemapGalleryItem(e,s){const r=o(e.basemap)||t("esri/themes/base/images/basemap-toggle-64.svg"),i=e.basemap.title,n=e.basemap.portalItem?.snippet,l=e.error?.message||n||i,{viewModel:{state:m,activeBasemapIndex:p}}=this,u=this.disabled||"disabled"===m,d=p===s,h=d||-1===p&&0===s?0:-1,g="loading"===m,k={[y.selectedItem]:d,[y.itemError]:"error"===e.state},b=`basemapgallery-item-${e.uid}`;return j("li",{afterUpdate:this._focusBasemapItem,"aria-checked":d.toString(),"aria-disabled":u.toString(),"aria-labelledby":b,bind:this,class:this.classes(y.item,k),"data-item":e,key:e.uid,onclick:this._handleClick,onkeydown:this._handleClick,role:"radio",tabIndex:h,title:l},j("img",{alt:"",class:y.itemThumbnail,src:r}),j("div",{class:y.itemContent,key:"content"},j("div",{class:y.itemTitle,key:"title"},j("span",{id:b},i)),a(e.basemap)?this._renderTags(e.basemap):null),"loading"===e.state||d&&g?j("calcite-scrim",null,j("span",{"aria-hidden":"true",class:c.loaderAnimation,key:"loader",role:"presentation"})):null)}_renderTags(e){return j("div",{class:y.itemTagsContainer,key:"tag"},this._render3DTag(),n(e)?this._renderBetaTag():null)}_render3DTag(){const{messages:e}=this;return j("calcite-chip",{key:"tag-3d",scale:"s",value:e.tag3D},this.messages.tag3D)}_renderBetaTag(){const{messages:e}=this;return j("calcite-chip",{appearance:"outline-fill",key:"tag-beta",scale:"s",value:e.tagBeta},this.messages.tagBeta)}};e([r()],b.prototype,"activeBasemap",null),e([r()],b.prototype,"disabled",void 0),e([r()],b.prototype,"headingLevel",void 0),e([r()],b.prototype,"icon",null),e([r()],b.prototype,"label",null),e([r(),h("esri/widgets/BasemapGallery/t9n/BasemapGallery")],b.prototype,"messages",void 0),e([r()],b.prototype,"source",null),e([r()],b.prototype,"view",null),e([r()],b.prototype,"viewModel",void 0),e([r()],b.prototype,"_focusBasemapItemEnabled",void 0),e([r()],b.prototype,"_container",void 0),e([r()],b.prototype,"_width",void 0),e([d()],b.prototype,"_handleClick",null),b=e([i("esri.widgets.BasemapGallery")],b);const v=b;export{v as default};
