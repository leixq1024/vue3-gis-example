// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../geometry/Extent","./xmlUtilities"],function(u,y,q,b){function m(a){return a.endsWith("?")?a.slice(0,-1):a}function r(a){return a.filter(({coverageSubType:f})=>null==f||""===f||/^rectified(grid|dataset)/i.test(f))}function v(a){const f={};for(let g=0;g<a.childNodes.length;g++){var c=a.childNodes[g];if(1===c.nodeType){var d=b.getNodeNameIgnoreNS(c).toLowerCase();switch(d){case "title":case "abstract":f[d]=b.getElementValue(c);break;case "identifier":f.id=
b.getElementValue(c);break;case "wgs84boundingbox":d=b.getSpaceDelimitedNumericValues(c,"LowerCorner");c=b.getSpaceDelimitedNumericValues(c,"UpperCorner");f.lonLatEnvelope=new q({xmin:d[0],ymin:d[1],xmax:c[0],ymax:c[1],spatialReference:{wkid:4326}});break;case "coveragesummary":f.coverageSummaries=f.coverageSummaries||[],f.coverageSummaries.push(v(c))}}}return f}function w(a,f){if(a.coverageSummaries)for(let c=0;c<a.coverageSummaries.length;c++)a.coverageSummaries[c]["abstract"]=a.coverageSummaries[c]["abstract"]||
a["abstract"],a.coverageSummaries[c].lonLatEnvelope=a.coverageSummaries[c].lonLatEnvelope||a.lonLatEnvelope,a.coverageSummaries[c].title=a.coverageSummaries[c].title||a.title,w(a.coverageSummaries[c],f);null!=a.id&&f.push(a)}function x(a){const f=b.getElement(a.querySelector("Operation[name\x3dGetCapabilities]"),"Get")?.getAttribute("xlink:href")||"",c=b.getElement(a.querySelector("Operation[name\x3dDescribeCoverage]"),"Get")?.getAttribute("xlink:href")||"";a=b.getElement(a.querySelector("Operation[name\x3dGetCoverage]"),
"Get")?.getAttribute("xlink:href")||"";return{getCapabilities:m(f),describeCoverage:m(c),getCoverage:m(a)}}u.parseCapabilities=function(a,f=null){var c=null;c="string"===typeof a?(new DOMParser).parseFromString(a,"text/xml"):a;a=c.documentElement.getAttribute("version");"1.0"===a?a="1.0.0":"1.1"===a&&(a="1.1.0");f=a||f||"1.0.0";a=f.slice(0,3);if("2.0"===a){var d=c,g=b.getElement(d,"ServiceIdentification");c=b.getElementValue(g,"Title");a=b.getElementValues(g,"ServiceTypeVersion");g=b.getElementValues(g,
"Profile");var e=b.getElement(d,"OperationsMetadata");e=x(e);var l=b.getElements(d,"Contents/CoverageSummary"),k=[];for(let t=0;t<l.length;t++){var p=l[t];const z=b.getElementValue(p,"CoverageId");var n=b.getElement(p,"WGS84BoundingBox"),h=void 0;n&&(h=b.getSpaceDelimitedNumericValues(n,"LowerCorner"),n=b.getSpaceDelimitedNumericValues(n,"UpperCorner"),h=new q({xmin:h[0],ymin:h[1],xmax:n[0],ymax:n[1],spatialReference:{wkid:4326}}));p=b.getElementValue(p,"CoverageSubtype")||"RectifiedGridCoverage";
k.push({id:z,lonLatEnvelope:h,coverageSubType:p})}d=b.getElement(d,"ServiceMetadata");h=b.getElementValues(d,"formatSupported");d=b.getElementValues(d,"interpolationSupported").concat(b.getElementValues(d,"InterpolationSupported"));l=r(k);c={name:c,supportedVersions:a,supportedFormats:h,supportedInterpolations:d,onlineResources:e,profiles:g,coverages:k,gridCoverages:l,version:"2.0.1"}}else if("1.1"===a){e=c;c=b.getElementValue(e,"ServiceIdentification/Title");a=b.getElementValues(e,"ServiceIdentification/ServiceTypeVersion");
g=b.getElement(e,"OperationsMetadata");g=x(g);h=[];e=b.getElement(e,"Contents");for(k=0;k<e.childNodes.length;k++)d=e.childNodes[k],1===d.nodeType&&b.isSameTagIgnoreNS(d,"CoverageSummary")&&w(v(d),h);e=b.getElementValues(e,"SupportedFormat");k=r(h);c={name:c,onlineResources:g,coverages:h,gridCoverages:k,supportedVersions:a,supportedFormats:e,version:"1.1.0"}}else if("1.0"===a){g=c;c=b.getElementValue(g,"Service/name");e=b.getElement(g,"Capability");a=b.getElement(e,"GetCapabilities/Get/OnlineResource")?.getAttribute("xlink:href")??
"";h=b.getElement(e,"DescribeCoverage/Get/OnlineResource")?.getAttribute("xlink:href")??"";e=b.getElement(e,"GetCoverage/Get/OnlineResource")?.getAttribute("xlink:href")??"";a={getCapabilities:m(a),describeCoverage:m(h),getCoverage:m(e)};h=b.getElements(g,"CoverageOfferingBrief");g=[];for(e=0;e<h.length;e++)d=h[e],k=b.getElementValue(d,"name"),l=b.getElements(d,"pos"),d=b.getSpaceDelimitedNumericValues(l[0]),l=b.getSpaceDelimitedNumericValues(l[1]),d=new q({xmin:d[0],ymin:d[1],xmax:l[0],ymax:l[1],
spatialReference:{wkid:4326}}),g.push({id:k,lonLatEnvelope:d});h=r(g);c={name:c,onlineResources:a,coverages:g,gridCoverages:h,supportedVersions:["1.0.0"],version:"1.0.0"}}else throw new y("wcsraster:parsecapabilities","the capabilities version is not supported");c.version=f;return c};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});