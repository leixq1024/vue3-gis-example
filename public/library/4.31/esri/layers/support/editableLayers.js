// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../catalog/catalogUtils","./layerUtils"],function(b,d,c){b.isEditableLayer=function(a){return!(!("object"===typeof a&&null!=a&&"loaded"in a&&!0===a.loaded&&"type"in a&&c.getEffectiveLayerCapabilities(a)?.operations?.supportsEditing)||"editingEnabled"in a&&!c.getEffectiveEditingEnabled(a)||d.isLayerFromCatalog(a))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});