// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../symbols ../../core/Error ./defaults3D ../WebStyleSymbol ../PointSymbol3D ../SimpleLineSymbol ../LineSymbol3D ../SimpleMarkerSymbol ../PictureMarkerSymbol ../SimpleFillSymbol ../MeshSymbol3D ../PolygonSymbol3D ../TextSymbol ../LabelSymbol3D".split(" "),function(g,h,k,l,n,e,p,q,r,t,u,v,w,x,y){const c={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};g.defaultTo3DOptions=c;g.to3D=function(a,d=c){if(!a)return{symbol:null};const {retainId:z=c.retainId,ignoreDrivers:A=c.ignoreDrivers,
hasLabelingContext:B=c.hasLabelingContext,retainCIM:C=c.retainCIM,cimFallbackEnabled:m=c.cimFallbackEnabled}=d;let b=null;if(h.isSymbol3D(a)||a instanceof n)b=a.clone();else if("cim"===a.type){const f=a.data?.symbol?.type;switch(f){case "CIMPointSymbol":b=C?a.clone():e.fromCIMSymbol(a);break;case "CIMLineSymbol":m&&(b=l.defaultRendererPolylineSymbol3D.clone(),d?.logWarning?.("#useCIMFallbackSymbology()","Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case "CIMPolygonSymbol":m&&
(b=l.defaultRendererPolygonSymbol3D.clone(),d?.logWarning?.("#useCIMFallbackSymbology()","Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!b)return{error:new k("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${f||"unknown"}' is unsupported in 3D`,{symbol:a})}}else if(a instanceof p)b=q.fromSimpleLineSymbol(a);else if(a instanceof r)b=e.fromSimpleMarkerSymbol(a);else if(a instanceof t)b=e.fromPictureMarkerSymbol(a);else if(a instanceof u)b=d.geometryType&&
"mesh"===d.geometryType?v.fromSimpleFillSymbol(a):w.fromSimpleFillSymbol(a);else if(a instanceof x)b=B?y.fromTextSymbol(a):e.fromTextSymbol(a);else return{error:new k("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${a.type||a.declaredClass}' is unsupported in 3D`,{symbol:a})};z&&b&&"cim"!==b.type&&(b.id=a.id);A&&h.isSymbol3D(b)&&b.symbolLayers.forEach(f=>f.ignoreDrivers=!0);return{symbol:b}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});