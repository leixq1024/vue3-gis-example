// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./definitions"],function(a,b){a.json={title:"Building Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{activeFilterId:{type:"string",description:"specifies the id of the currently active filter"},customParameters:{$ref:"#/definitions/customParameters_schema.json"},filters:{type:"array",description:"A list of filters available for this layer. Overrides filters defined on the service.",items:{$ref:"#/definitions/buildingSceneLayer_filter_schema.json"},
uniqueItems:!0},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"Additional properties that can define an elevation offset for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",
enum:["hide","hide-children","show"],default:"show"},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},sublayers:{type:"array",description:"An array of objects specifying overrides for building scene layer sublayers",
items:{$ref:"#/definitions/buildingSceneLayer_sublayer_schema.json"},uniqueItems:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0},visibilityTimeExtent:{description:"Represents time extent that will control when a layer should be visible based on webscene's current time. Visibility time extent only affects the layer visibility and will not filter the data.",$ref:"#/definitions/timeExtent_schema.json"}},additionalProperties:!1}}},
additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:b.schema_definitions};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});