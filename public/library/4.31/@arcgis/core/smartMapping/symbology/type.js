/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import o from"../../Color.js";import{i as t}from"../../core/lang.js";import{d as s}from"../../chunks/colorUtils2.js";import{c as r}from"../../chunks/colors2.js";import{c as e,g as a,a as n,f as i,b as c}from"../../chunks/symbologyUtils.js";import{t as m}from"../../chunks/utils20.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/vec4.js";import"../../chunks/common.js";import"../../chunks/vec4f64.js";import"../../chunks/utils3.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/datetime.js";import"../../layers/support/fieldUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/utils2.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";const l={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"},darker:{color:[26,26,26,.25],width:"1px"}},p=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],u=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],h=["cat-symbols-strong","cat-symbols-autumnal","cat-symbols-bright","cat-symbols-midrange","cat-symbols-subdued","cat-symbols-pastel","cat-symbols-red","cat-symbols-blue","cat-symbols-green","cat-symbols-gray"],d=["cat-popup-olympic-sunset"],j="#aaaaaa",y=e({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",schemes:{point:{light:{common:{noDataColor:j,outline:l.light,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(h).concat(p).concat(u).concat(d)},dark:{common:{noDataColor:j,outline:l.darker,size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(h).concat(p).concat(u).concat(d)}},polyline:{light:{common:{noDataColor:j,width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(h).concat(p).concat(u).concat(d)},dark:{common:{noDataColor:j,width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(h).concat(p).concat(u).concat(d)}},polygon:{light:{common:{noDataColor:j,outline:l.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(h).concat(p).concat(u).concat(d)},dark:{common:{noDataColor:j,outline:l.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(h).concat(p).concat(u).concat(d)}}}},"point-cloud-class":{name:"point-cloud-class",label:"Point Cloud Class",description:"Default theme for visualizing point cloud data based on classification.",schemes:{point:{light:{primary:"point-cloud-class-scheme",secondary:[]},dark:{primary:"point-cloud-class-scheme",secondary:[]}}}}}});function g(o){return a(y,o)}function k(o){const s=o.theme||"default",r=n({basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme,theme:y.get(s)});if(!r)return;const{schemesInfo:e,basemapId:a,basemapTheme:i}=r,c=e.common;return{primaryScheme:C(o,e.primary,c),secondarySchemes:e.secondary.map((t=>C(o,t,c))).filter(t),basemapId:a,basemapTheme:i}}function b(o){return i(o.name,k(o))}function f(o){return c(o.includedTags,o.excludedTags,k(o))}function w(t){if(!t)return;const s={...t};return s.colors=s.colors.map((t=>new o(t))),s.tags=[...s.tags],"noDataColor"in s&&s.noDataColor&&(s.noDataColor=new o(s.noDataColor)),"outline"in s&&s.outline&&(s.outline={color:s.outline.color&&new o(s.outline.color),width:s.outline.width}),s}function C(t,e,a){const{numColors:n}=t,i=t.theme||"default",c=r[e];if(!c)return;const l=n?c[n]??s(c.stops,n):c.stops,p="mesh"!==t.geometryType&&t.worldScale?t.view:null;switch(t.geometryType){case"point":case"multipoint":{if("point-cloud-class"===i)return{name:(u={theme:i,name:c.name,tags:c.tags,colors:l}).name,tags:[...u.tags],theme:u.theme,colors:u.colors.map((t=>new o(t)))};const t=a;return function(t,s){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),outline:{color:new o(t.outline.color),width:t.outline.width},size:s?m(t.size,s):t.size,opacity:t.opacity}}({name:c.name,tags:c.tags,theme:i,colors:l,noDataColor:t.noDataColor,opacity:1,outline:t.outline,size:t.size},p)}case"polyline":{const t=a;return function(t,s){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),width:s?m(t.width,s):t.width,opacity:t.opacity}}({name:c.name,tags:c.tags,theme:i,colors:l,noDataColor:t.noDataColor,opacity:1,width:t.width},p)}case"polygon":{const t=a;return function(t,s){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),outline:{color:new o(t.outline.color),width:t.outline.width},opacity:t.opacity,size:s?m(t.size,s):t.size}}({name:c.name,tags:c.tags,theme:i,colors:l,noDataColor:t.noDataColor,opacity:t.fillOpacity||1,outline:t.outline,size:"12px"},p)}case"mesh":{const t=a;return function(t){return{name:t.name,tags:[...t.tags],theme:t.theme,colors:t.colors.map((t=>new o(t))),noDataColor:new o(t.noDataColor),opacity:t.opacity}}({name:c.name,tags:c.tags,theme:i,colors:l,noDataColor:t.noDataColor,opacity:t.fillOpacity||1})}default:return}var u}export{w as cloneScheme,b as getSchemeByName,k as getSchemes,f as getSchemesByTag,g as getThemes};
