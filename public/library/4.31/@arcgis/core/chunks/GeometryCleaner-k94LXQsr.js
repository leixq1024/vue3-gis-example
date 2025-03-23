/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{G as t,i as e,g as n}from"./Transformation2D.js";function i(i,o){const r=i.getGeometryType();return r===t.enumPoint?i:e(r)?function(e){if(function(e){for(let n=0,i=e.getPathCount();n<i;n++){const i=e.getPathSize(n);if(0===i)return!1;if(1===i){if(0===e.getSegmentCountPath(n))return!1;if(e.getSegmentType(e.getPathStart(n))===t.enumLine)return!1;if(!e.isClosedPath(n))return!1}}return!0}(e))return e;const n=e.createInstance();for(let i=0,o=e.getPathCount();i<o;i++){const o=e.getPathSize(i);if(0!==o){if(1===o){if(0===e.getSegmentCountPath(i))continue;if(e.getSegmentType(e.getPathStart(i))===t.enumLine)continue;if(!e.isClosedPath(i))continue}n.addPath(e,i,!0)}}return n}(i):r===t.enumMultiPoint||r===t.enumEnvelope?i:r===t.enumMultipatch?(n(0),i):i}export{i as c};
