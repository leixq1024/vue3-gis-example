// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/componentsUtils ../../support/widgetUtils ../../support/jsxFactory ../css".split(" "),function(m,l,p,r,c,q){l.PlayerActionsGroup=function({viewModel:a,messages:b}){const {state:n,playing:e}=a,d="not-ready"===n||"waiting"===n;var f=e?b.pause:b.play;f=c.tsx("calcite-action",{active:e,alignment:"center",bind:a,disabled:d,icon:e?"pause-f":"play-f",key:"play",onclick:e?a.pause:a.play,scale:"s",text:f,title:f});var g=b.reverse;g=c.tsx("calcite-action",{alignment:"center",
bind:a,disabled:d,icon:"reverse-f",key:"reverse",onclick:a.seekBackward,scale:"s",text:g,title:g});var h=b.forward;h=c.tsx("calcite-action",{alignment:"center",bind:a,disabled:d,icon:"forward-f",key:"forward",onclick:a.seekForward,scale:"s",text:h,title:h});var k=b.beginning;k=c.tsx("calcite-action",{alignment:"center",bind:a,disabled:d,icon:"beginning-f",key:"beginning",onclick:a.seekToBeginning,scale:"s",text:k,title:k});b=b.end;a=c.tsx("calcite-action",{alignment:"center",bind:a,disabled:d,icon:"end-f",
key:"end",onclick:a.seekToEnding,scale:"s",text:b,title:b});return c.tsx("calcite-action-bar",{class:q.css.playerActions,expandDisabled:!0,layout:"horizontal",scale:"s"},[k,g,f,h,a])};l.loadPlayerActionsGroupComponents=()=>p.loadCalciteComponents({action:()=>new Promise((a,b)=>m(["../../../chunks/calcite-action"],a,b)),"action-bar":()=>new Promise((a,b)=>m(["../../../chunks/calcite-action-bar"],a,b))});Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});