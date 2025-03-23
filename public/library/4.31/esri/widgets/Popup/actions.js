// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/Collection ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../support/legacyIcon".split(" "),function(a,f,e,b,d,c){f=f.ofType({key:"type",defaultKeyValue:"button",base:e,typeMap:{button:b,toggle:d}});e=new b({icon:"magnifying-glass-plus",id:"zoom-to-feature",title:"{messages.zoom}",className:c.legacyIcon.zoomInMagnifyingGlass});const g=new b({icon:"trash",id:"remove-selected-feature",title:"{messages.remove}",className:c.legacyIcon.trash});
b=new b({icon:"magnifying-glass-plus",id:"zoom-to-clustered-features",title:"{messages.zoom}",className:c.legacyIcon.zoomInMagnifyingGlass});d=new d({icon:"table",id:"browse-clustered-features",title:"{messages.browseClusteredFeatures}",className:c.legacyIcon.table,value:!1});c=[e,g,d,b];a.ActionsCollection=f;a.all=c;a.browseClusteredFeatures=d;a.removeSelectedFeature=g;a.zoomToClusteredFeatures=b;a.zoomToFeature=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});