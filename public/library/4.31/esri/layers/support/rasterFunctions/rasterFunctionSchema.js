// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.schema={StretchFunction:{arguments:{ComputeGamma:{isDataset:!1,isPublic:!1,name:"ComputeGamma",type:"RasterFunctionVariable",value:!1},DRA:{isDataset:!1,isPublic:!1,name:"DRA",type:"RasterFunctionVariable",value:!1},EstimateStatsHistogram:{isDataset:!1,isPublic:!1,name:"EstimateStatsHistogram",type:"RasterFunctionVariable",value:!1},Gamma:{displayName:"Gamma",isDataset:!1,isPublic:!1,name:"Gamma",type:"RasterFunctionVariable"},Histograms:{isDataset:!1,isPublic:!1,
name:"Histograms",type:"RasterFunctionVariable"},Max:{isDataset:!1,isPublic:!1,name:"Max",type:"RasterFunctionVariable",value:255},MaxPercent:{isDataset:!1,isPublic:!1,name:"MaxPercent",type:"RasterFunctionVariable",value:.5},Min:{isDataset:!1,isPublic:!1,name:"Min",type:"RasterFunctionVariable",value:0},MinPercent:{isDataset:!1,isPublic:!1,name:"MinPercent",type:"RasterFunctionVariable",value:.25},NumberOfStandardDeviations:{isDataset:!1,isPublic:!1,name:"NumberOfStandardDeviation",type:"RasterFunctionVariable",
value:2},Raster:{isDataset:!0,isPublic:!1,name:"Raster",type:"RasterFunctionVariable"},SigmoidStrengthLevel:{isDataset:!1,isPublic:!1,name:"SigmoidStrengthLevel",type:"RasterFunctionVariable",value:2},Statistics:{isDataset:!1,isPublic:!1,name:"Statistics",type:"RasterFunctionVariable"},StretchType:{isDataset:!1,isPublic:!1,name:"StretchType",type:"RasterFunctionVariable",value:0},type:"StretchFunctionArguments",UseGamma:{isDataset:!1,isPublic:!1,name:"UseGamma",type:"RasterFunctionVariable",value:!1}},
description:"Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.",function:{description:"Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.",name:"Stretch",pixelType:"UNKNOWN",
type:"StretchFunction"},functionType:0,name:"Stretch",thumbnail:""},RemapFunction:{name:"Remap",description:"Changes pixel values by assigning new values to ranges of pixel values or using an external table.",function:{type:"RemapFunction",pixelType:"UNKNOWN",name:"Remap",description:"Changes pixel values by assigning new values to ranges of pixel values or using an external table."},arguments:{Raster:{name:"Raster",isPublic:!1,isDataset:!0,type:"RasterFunctionVariable"},UseTable:{name:"UseTable",
isPublic:!1,isDataset:!1,value:!1,type:"RasterFunctionVariable"},InputRanges:{name:"InputRanges",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable",displayName:"Input Ranges"},OutputValues:{name:"OutputValues",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable",displayName:"Output Values"},NoDataRanges:{name:"NoDataRanges",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable",displayName:"NoData Ranges"},Table:{name:"Table",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},InputField:{name:"InputField",
isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},OutputField:{name:"OutputField",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},InputMaxField:{name:"InputMaxField",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},RemapTableType:{name:"RemapTableType",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},AllowUnmatched:{name:"AllowUnmatched",isPublic:!1,isDataset:!1,value:!0,type:"RasterFunctionVariable"},type:"RemapFunctionArguments"},functionType:0,thumbnail:""},
ColormapFunction:{name:"Colormap",description:"Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.",function:{type:"ColormapFunction",pixelType:"UNKNOWN",name:"Colormap",description:"Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp."},arguments:{Raster:{name:"Raster",isPublic:!1,isDataset:!0,type:"RasterFunctionVariable"},
ColorSchemeType:{name:"ColorSchemeType",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},Colormap:{name:"Colormap",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},ColormapName:{name:"ColormapName",isPublic:!1,isDataset:!1,value:"Gray",type:"RasterFunctionVariable"},ColorRamp:{name:"ColorRamp",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},type:"ColormapFunctionArguments"},functionType:0,thumbnail:""},ShadedReliefFunction:{name:"Shaded Relief",description:"Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.",
function:{type:"ShadedReliefFunction",pixelType:"UNKNOWN",name:"Shaded Relief",description:"Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image."},arguments:{Raster:{name:"Raster",isPublic:!1,isDataset:!0,type:"RasterFunctionVariable"},ColorSchemeType:{name:"ColorSchemeType",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},ColorRamp:{name:"ColorRamp",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},
HillshadeType:{name:"HillshadeType",isPublic:!1,isDataset:!1,value:0,type:"RasterFunctionVariable"},Colormap:{name:"Colormap",isPublic:!1,isDataset:!1,type:"RasterFunctionVariable"},Azimuth:{name:"Azimuth",isPublic:!1,isDataset:!1,value:315,type:"RasterFunctionVariable"},Altitude:{name:"Altitude",isPublic:!1,isDataset:!1,value:45,type:"RasterFunctionVariable"},SlopeType:{name:"SlopeType",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},ZFactor:{name:"ZFactor",isPublic:!1,isDataset:!1,
value:1,type:"RasterFunctionVariable"},PSPower:{name:"PSPower",isPublic:!1,isDataset:!1,value:.664,type:"RasterFunctionVariable"},PSZFactor:{name:"PSZFactor",isPublic:!1,isDataset:!1,value:.024,type:"RasterFunctionVariable"},RemoveEdgeEffect:{name:"RemoveEdgeEffect",isPublic:!1,isDataset:!1,value:!1,type:"RasterFunctionVariable"},type:"ShadedReliefFunctionArguments"},functionType:0,thumbnail:""},HillshadeFunction:{name:"Hillshade",description:"Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image",
function:{type:"HillshadeFunction",pixelType:"UNKNOWN",name:"Hillshade",description:"Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image"},arguments:{DEM:{name:"DEM",isPublic:!1,isDataset:!0,type:"RasterFunctionVariable"},HillshadeType:{name:"HillshadeType",isPublic:!1,isDataset:!1,value:0,type:"RasterFunctionVariable"},Azimuth:{name:"Azimuth",isPublic:!1,isDataset:!1,value:315,type:"RasterFunctionVariable"},Altitude:{name:"Altitude",
isPublic:!1,isDataset:!1,value:45,type:"RasterFunctionVariable"},SlopeType:{name:"SlopeType",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},ZFactor:{name:"ZFactor",isPublic:!1,isDataset:!1,value:1,type:"RasterFunctionVariable"},PSPower:{name:"PSPower",isPublic:!1,isDataset:!1,value:.664,type:"RasterFunctionVariable"},PSZFactor:{name:"PSZFactor",isPublic:!1,isDataset:!1,value:.024,type:"RasterFunctionVariable"},RemoveEdgeEffect:{name:"RemoveEdgeEffect",isPublic:!1,isDataset:!1,value:!1,
type:"RasterFunctionVariable"},type:"HillshadeFunctionArguments"},functionType:0,thumbnail:""},ResampleFunction:{name:"Resample",description:"Changes the cell size of a raster.",function:{type:"ResampleFunction",pixelType:"UNKNOWN",name:"Resample",description:"Changes the cell size of a raster."},arguments:{Raster:{name:"Raster",isPublic:!1,isDataset:!0,type:"RasterFunctionVariable"},ResamplingType:{name:"ResamplingType",isPublic:!1,isDataset:!1,value:0,type:"RasterFunctionVariable"},InputCellSize:{name:"InputCellsize",
isPublic:!1,isDataset:!1,value:{x:0,y:0},type:"RasterFunctionVariable"},OutputCellSize:{name:"OutputCellsize",isPublic:!1,isDataset:!1,value:{x:0,y:0},type:"RasterFunctionVariable"},type:"ResampleFunctionArguments"},functionType:0,thumbnail:""}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});