// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ../../../chunks/componentsUtils ../../support/widgetUtils ../../support/jsxFactory ../css".split(" "),function(d,g,l,p,v,b,m){const n=new l([255,127,0]);let k=null;g.SettingsButton=function({viewModel:c,settings:a,messages:f}){var {state:h}=c;h="not-ready"===h||"waiting"===h;const r=b.tsx("calcite-flow-item",{heading:f.playbackSpeed,key:"playback-speed",onCalciteFlowItemBack:()=>{a.active=null}},b.tsx("calcite-list",{selectionMode:"single-persist"},[{label:"0.25x",
value:.25},{label:"0.5x",value:.5},{label:"1x",value:1},{label:"1.5x",value:1.5},{label:"2x",value:2}].map(({label:e,value:q})=>b.tsx("calcite-list-item",{key:e,label:e,onclick:()=>{a.speed=e;c.changePlaybackSpeed(q)},selected:e===a.speed})))),t=b.tsx("calcite-flow-item",{heading:f.quality,key:`Quality (${a.quality})`,onCalciteFlowItemBack:()=>{a.active=null}},b.tsx("calcite-list",{selectionMode:"single-persist"},["Auto"].map(e=>b.tsx("calcite-list-item",{key:e,label:e,onclick:()=>{a.quality=e},selected:e===
a.quality})))),u=b.tsx("calcite-flow-item",{heading:f.graphics,key:`Graphics (${a.color})`,onCalciteFlowItemBack:()=>{a.active=null;a.color=k?new l(k):null;a.color&&c.changeGraphicsColor(a.color)}},b.tsx("calcite-block",{heading:f.color,open:!0},b.tsx("calcite-color-picker",{channelsDisabled:!0,format:"hex",savedDisabled:!0,scale:"s",value:a.color?.toHex()??n.toHex(),onCalciteColorPickerChange:e=>{k=e.target.value?.toString()}})));return b.tsx("div",{class:m.css.settings},b.tsx("calcite-popover",
{autoClose:!0,label:f.settings,overlayPositioning:"fixed",placement:"top-end",pointerDisabled:!0,referenceElement:"settings-action",scale:"s"},b.tsx("calcite-flow",{class:m.css.settingsFlow,key:"root-flow"},b.tsx("calcite-flow-item",{closable:!1,heading:"Settings",key:"root-flow-item"},b.tsx("calcite-list",null,b.tsx("calcite-list-item",{key:`Speed (${a.speed})`,label:f.speed,onclick:()=>{a.active="speed"}},b.tsx("div",{slot:"content-end"},b.tsx("calcite-chip",{scale:"s",value:a.speed},a.speed)),
b.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})),b.tsx("calcite-list-item",{key:`Quality (${a.quality})`,label:f.quality,onclick:()=>{a.active="quality"}},b.tsx("div",{slot:"content-end"},b.tsx("calcite-chip",{scale:"s",value:a.quality},a.quality)),b.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})),b.tsx("calcite-list-item",{key:`Graphics (${a.color})`,label:f.graphics,onclick:()=>{a.active="color"}},b.tsx("calcite-color-picker-swatch",{color:a.color?.toString()??
n.toString(),scale:"s",slot:"content-end"}),b.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})))),"speed"===a.active?r:null,"quality"===a.active?t:null,"color"===a.active?u:null)),b.tsx("calcite-action",{alignment:"center",bind:c,disabled:h,icon:"sliders",id:"settings-action",key:"settings",scale:"s",slot:"trigger",text:f.settings}))};g.defaultSettings={active:null,speed:"1x",quality:"Auto",color:null};g.loadSettingsButtonComponents=()=>p.loadCalciteComponents({action:()=>new Promise((c,
a)=>d(["../../../chunks/calcite-action"],c,a)),flow:()=>new Promise((c,a)=>d(["../../../chunks/calcite-flow"],c,a)),"flow-item":()=>new Promise((c,a)=>d(["../../../chunks/calcite-flow-item"],c,a)),icon:()=>new Promise((c,a)=>d(["../../../chunks/calcite-icon"],c,a)),list:()=>new Promise((c,a)=>d(["../../../chunks/calcite-list"],c,a)),"list-item":()=>new Promise((c,a)=>d(["../../../chunks/calcite-list-item"],c,a)),popover:()=>new Promise((c,a)=>d(["../../../chunks/calcite-popover"],c,a)),block:()=>
new Promise((c,a)=>d(["../../../chunks/calcite-block"],c,a)),"color-picker":()=>new Promise((c,a)=>d(["../../../chunks/calcite-color-picker"],c,a)),chip:()=>new Promise((c,a)=>d(["../../../chunks/calcite-chip"],c,a)),"color-picker-swatch":()=>new Promise((c,a)=>d(["../../../chunks/calcite-color-picker-swatch"],c,a))});Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});