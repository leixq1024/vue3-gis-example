// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../intl/number","../../../renderers/support/rasterRendererHelper","../support/utils"],function(h,e,k,g,m){function l(a){const {rasterInfo:b,layer:d}=a;return g.getVariableRasterInfo(b,b.multidimensionalInfo?"imagery"===d.type?d.mosaicRule?.multidimensionalDefinition?.[0]?.variableName:d.multidimensionalDefinition?.[0]?.variableName:"")}async function n(a){a=await m.processRasterRendererParameters(a);var b=l(a.layer);if(1<b.bandCount)throw new e("raster-class-breaks-renderer:not-supported",
"Multiband raster is not supported");({attributeTable:b}=b);a.field||(a.field=g.getField(b,"value")?.name??"value");const {colors:d,numClasses:c}=a;if(d&&c&&d.length!==c)throw new e("raster-class-breaks-renderer:not-supported","The size of the `colors` parameter does not match 'numClasses'");a.classificationMethod||(a.classificationMethod="natural-breaks");return a}h.createRenderer=async function(a){a=await n(a);var b=l(a.layer).clone();if(!b.attributeTable?.fields.find(c=>c.name.toLowerCase()===
a.field?.toLowerCase())&&!b.histograms?.length&&(await a.layer.updateRasterInfoWithEstimatedStats(b,{rasterFunction:a.rasterFunction,signal:a.signal}),!b.histograms?.length))throw new e("raster-class-breaks-renderer:not-supported","Histograms or raster attribute table is required on the source raster. Unable to estimate histograms");b=g.createClassBreaksRenderer(b,a);if(null==b)throw new e("raster-class-breaks-renderer:not-supported","Class breaks renderer is not supported on this data");const d=
{minValue:b.minValue,maxValue:b.classBreakInfos[b.classBreakInfos.length-1].maxValue,normalizationTotal:null,classBreakInfos:b.classBreakInfos.map(c=>{var f=c.maxValue;f=k.formatNumber(c.minValue,{maximumFractionDigits:3})+" - "+k.formatNumber(f,{maximumFractionDigits:3});c.label=f;return{minValue:c.minValue,maxValue:c.maxValue,label:f}})};return{renderer:b,classBreaksResult:d}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});