// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/deprecate ../core/Logger ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../layers/support/CodedValueDomain ./Widget ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./UtilityNetworkTrace/UtilityNetworkTraceViewModel ./UtilityNetworkTrace/support/GraphicHandler".split(" "),
function(m,k,x,y,r,l,h,K,D,E,F,G,v,H,w,I,c,z,J){function A(){return{textAlign:"center",padding:"1rem"}}h=class extends F{constructor(a,b){super(a,b);this._selectToolActive=!1;this._activeTrace=null;this._assetTypeHeader=this._assetGroupHeader=this._traceHeaderForFlow=this._activeSwatch="";this._traceResultsFunctions=[];this._traceResultsAssetGroup=[];this._traceResultsAssetType=[];this._traceResultsIndividual=[];this._showIndividualRecords=this._showTraceResultAssetType=this._showTraceResultAssetGroup=
this._showTraceResultFunctions=!1;this._activeTab="input";this._flagViewType="starting-point";this._showResultOptions=this._confirmReset=this._warningNoTerminal=this._warningNoBarrierAssetFound=this._warningNoStartAssetFound=this._warningNoTraceSelected=this._warningNoFlag=this._alertRemoveModal=!1;this._resultSortField=this._resultDisplayField=this._resultObjectIdField="objectid";this._resultSortOrder="desc";this._watchHandler=this._symbolBarrier=this._symbolStartFlag=this._individualResultNode=
this._swatchNode=null;this._loadUNError=!0;this._errorMessage="";this.disabled=!0;this.inputSettings=[];this.messagesUnits=this.messagesCommon=this.messages=null;this.viewModel=new z;this._afterComponentCreate=this._afterComponentCreate.bind(this)}initialize(){this._utilityNetworkTraceInitialized();this.addHandles(r.watch(()=>this.viewModel?.resultAreaProperties,()=>this.scheduleRender()))}get defaultGraphicColor(){return this.viewModel.defaultGraphicColor}set defaultGraphicColor(a){this.viewModel.defaultGraphicColor=
a}get flags(){return this.viewModel.flags}set flags(a){this.viewModel.flags=a}get gdbVersion(){x.deprecatedFunction(y.getLogger(this),"gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.",{replacement:"UtilityNetwork.gdbVersion",version:"4.31"});return this.viewModel.gdbVersion}set gdbVersion(a){x.deprecatedFunction(y.getLogger(this),"gdbVersion will be removed and the gdbVersion of the UtilityNetwork will be consumed directly.",{replacement:"UtilityNetwork.gdbVersion",
version:"4.31"});this.viewModel.gdbVersion=a}get icon(){return"utility-network-trace"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get resultAreaProperties(){return this.viewModel.resultAreaProperties}set resultAreaProperties(a){this.viewModel.resultAreaProperties=a}get selectedTraces(){return this.viewModel.selectedTraces}set selectedTraces(a){this.viewModel.selectedTraces=a}get selectOnComplete(){return this.viewModel.selectOnComplete}set selectOnComplete(a){this.viewModel.selectOnComplete=
a}get showGraphicsOnComplete(){return this.viewModel.showGraphicsOnComplete}set showGraphicsOnComplete(a){this.viewModel.showGraphicsOnComplete=a}get enableResultArea(){return this.viewModel.enableResultArea}set enableResultArea(a){this.viewModel.enableResultArea=a}get showSelectionAttributes(){return this.viewModel.showSelectionAttributes}set showSelectionAttributes(a){this.viewModel.showSelectionAttributes=a}get utilityNetwork(){return this.viewModel.utilityNetwork}set utilityNetwork(a){this.viewModel.utilityNetwork=
a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}async checkCanTrace(){this._confirmReset=!1;const a=this.viewModel.checkCanTrace();a.status?(this._showIndividualRecords=this._showTraceResultAssetType=this._showTraceResultAssetGroup=this._showTraceResultFunctions=this._warningNoTerminal=this._warningNoTraceSelected=this._warningNoTraceSelected=this._warningNoFlag=!1,this.switchTab("result"),this.viewModel._activeProgress=!0,this.viewModel.removeAllResultAreaGraphics(),await this.viewModel.callTrace(),
this.viewModel._activeProgress=!1):a.issues.forEach(b=>{switch(b){case "noStart":this._warningNoFlag=!0;break;case "noTerminalSelected":this._warningNoTerminal=!0;break;default:this._warningNoTraceSelected=!0}})}confirmReset(){this._confirmReset=!0}render(){var {state:a}=this.viewModel;this._mixCustomStrings();this._overrideFlagSymbol();a="loading"===a?this._renderWarningMessage("noTraceConfig",!1):this._renderUtilityNetworkTrace();return c.tsx("div",{class:this.classes("esri-utility-trace-network",
v.globalCss.widget,v.globalCss.panel,{[v.globalCss.widgetDisabled]:this.disabled}),styles:{height:"100%"}},a)}loadDependencies(){return G.loadCalciteComponents({action:()=>new Promise((a,b)=>m(["../chunks/calcite-action"],a,b)),"action-group":()=>new Promise((a,b)=>m(["../chunks/calcite-action-group"],a,b)),"action-pad":()=>new Promise((a,b)=>m(["../chunks/calcite-action-pad"],a,b)),block:()=>new Promise((a,b)=>m(["../chunks/calcite-block"],a,b)),"block-section":()=>new Promise((a,b)=>m(["../chunks/calcite-block-section"],
a,b)),button:()=>new Promise((a,b)=>m(["../chunks/calcite-button"],a,b)),checkbox:()=>new Promise((a,b)=>m(["../chunks/calcite-checkbox"],a,b)),"color-picker-swatch":()=>new Promise((a,b)=>m(["../chunks/calcite-color-picker-swatch"],a,b)),combobox:()=>new Promise((a,b)=>m(["../chunks/calcite-combobox"],a,b)),"combobox-item":()=>new Promise((a,b)=>m(["../chunks/calcite-combobox-item"],a,b)),flow:()=>new Promise((a,b)=>m(["../chunks/calcite-flow"],a,b)),"flow-item":()=>new Promise((a,b)=>m(["../chunks/calcite-flow-item"],
a,b)),icon:()=>new Promise((a,b)=>m(["../chunks/calcite-icon"],a,b)),"input-number":()=>new Promise((a,b)=>m(["../chunks/calcite-input-number"],a,b)),label:()=>new Promise((a,b)=>m(["../chunks/calcite-label"],a,b)),list:()=>new Promise((a,b)=>m(["../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,b)=>m(["../chunks/calcite-list-item"],a,b)),loader:()=>new Promise((a,b)=>m(["../chunks/calcite-loader"],a,b)),notice:()=>new Promise((a,b)=>m(["../chunks/calcite-notice"],a,b)),option:()=>new Promise((a,
b)=>m(["../chunks/calcite-option"],a,b)),panel:()=>new Promise((a,b)=>m(["../chunks/calcite-panel"],a,b)),popover:()=>new Promise((a,b)=>m(["../chunks/calcite-popover"],a,b)),scrim:()=>new Promise((a,b)=>m(["../chunks/calcite-scrim"],a,b)),select:()=>new Promise((a,b)=>m(["../chunks/calcite-select"],a,b)),tab:()=>new Promise((a,b)=>m(["../chunks/calcite-tab"],a,b)),"tab-nav":()=>new Promise((a,b)=>m(["../chunks/calcite-tab-nav"],a,b)),"tab-title":()=>new Promise((a,b)=>m(["../chunks/calcite-tab-title"],
a,b)),tabs:()=>new Promise((a,b)=>m(["../chunks/calcite-tabs"],a,b)),tooltip:()=>new Promise((a,b)=>m(["../chunks/calcite-tooltip"],a,b))})}switchTab(a){this._activeTab=a}switchToFunctions(a,b){this._traceResultsFunctions=a;this._showTraceResultFunctions=b}switchToAssetGroup(a,b,e){this._traceHeaderForFlow=b;this._traceResultsAssetGroup=a;this._showTraceResultAssetGroup=e}switchToAssetType(a,b,e){this._assetGroupHeader=b;this._traceResultsAssetType=a;this._showTraceResultAssetType=e}switchToIndividualRecords(a,
b,e){this._assetTypeHeader=b;this._traceResultsIndividual=a;this._showIndividualRecords=e}_renderUtilityNetworkTrace(){const {messages:a,messagesCommon:b}=this;let e=c.tsx("calcite-tabs",{layout:"center",position:"top",styles:{width:"100%",height:window.getComputedStyle(this.container).getPropertyValue("max-height")}},c.tsx("calcite-tab-nav",{slot:"title-group"},c.tsx("calcite-tab-title",{onclick:()=>{this.switchTab("input")},selected:"input"===this._activeTab},a.inputsStrings.headerTabInputs),c.tsx("calcite-tab-title",
{onclick:()=>{this.switchTab("result")},selected:"result"===this._activeTab},a.resultsStrings.headerTabResults)),c.tsx("calcite-tab",{selected:"input"===this._activeTab},this._renderInputPanel()),c.tsx("calcite-tab",{selected:"result"===this._activeTab},this.viewModel._activeProgress?c.tsx("calcite-loader",{label:a.alertsStrings.traceExecuting,text:a.alertsStrings.traceExecuting,type:"indeterminate"}):0<this.viewModel.traceResults.length?this._renderResultPanel():this._renderWarningMessage("noTraceExecuted",
!1),this._confirmReset?c.tsx("calcite-scrim",{key:"prompt"},c.tsx("div",{class:"esri-utility-trace-network__reset-prompt"},c.tsx("h3",{slot:"header"},a.resultsStrings.startOverButton),c.tsx("div",{slot:"content"},a.resultsStrings.startOverValidation),c.tsx("div",{class:"esri-utility-trace-network__divider"}),c.tsx("div",{styles:{display:"flex",flexDirection:"row"}},c.tsx("calcite-button",{appearance:"outline",onclick:()=>{this._confirmReset=!1},slot:"secondary",width:"full"},b.cancel),c.tsx("calcite-button",
{onclick:()=>{this._confirmReset=!1;this.viewModel.reset();this.switchTab("input")},slot:"primary",width:"full"},b.form.ok)))):null));0===this.viewModel.traces.length&&(e=c.tsx("calcite-panel",null,this._renderWarningMessage("noTraceConfig",!1)));this._loadUNError||(e=c.tsx("calcite-panel",null,this._renderWarningMessage("loadUNError",!1,this._errorMessage)));return e}_renderInputPanel(){const {messages:a}=this;return c.tsx("calcite-flow",{class:"esri-utility-trace-network__flow"},c.tsx("calcite-flow-item",
null,this._warningNoFlag?this._renderWarningMessage("flag",!0):null,this._warningNoTerminal?this._renderWarningMessage("noTerminal",!0):null,this._warningNoTraceSelected?this._renderWarningMessage("trace",!0):null,this._renderTraceSelectorContainer(),this._renderStartFlagsContainer(),this._renderBarriersFlagsContainer(),this._warningNoFlag&&this._warningNoTraceSelected?c.tsx("div",{styles:{height:"10px"}}):null,c.tsx("calcite-button",{kind:"brand",onclick:()=>{this.checkCanTrace()},slot:"footer",
width:"full"},a.tracingStrings.runTrace)),this._selectToolActive?this._renderActiveTool():null)}_renderResultPanel(){return c.tsx("calcite-flow",{styles:{height:"100%"}},this._renderTraceResults(),this._showTraceResultFunctions?this._renderTraceResultFunctions():null,this._showTraceResultAssetGroup?this._renderTraceResultByAssetGroup():null,this._showTraceResultAssetType?this._renderTraceResultByAssetType():null,this._showIndividualRecords?this._renderTraceResultIndividual():null,this._showIndividualRecords?
this._renderTraceResultIndividualPopover():null)}_renderStartFlagsContainer(){const {messages:a}=this,b=[];let e=[];e=this.viewModel._flags.filter(d=>"starting-point"===d.type);e.forEach(d=>{d.displayValue&&b.push(this._renderFlagRow(d,"start"))});let f=null;this._symbolStartFlag&&(f=this._getSymbolIcon(this._symbolStartFlag));return c.tsx("calcite-block",{collapsible:!0,heading:a.inputsStrings.headerStartingPoint+" ("+e.length+")",open:!0,overlayPositioning:"fixed"},c.tsx("div",{slot:"icon"},f||
c.tsx("calcite-icon",{icon:"pin",scale:"s"})),c.tsx("div",null,a.inputsStrings.startingPointHint),c.tsx("div",{class:"esri-utility-trace-network__list-container"},b),this._warningNoStartAssetFound?this._renderWarningMessage("noStartAsset",!0):null,c.tsx("div",{class:"esri-utility-trace-network__add-button-container"},c.tsx("calcite-button",{alignment:"center",appearance:"outline",href:"",iconStart:"plus",label:a.inputsStrings.addPointOption,onclick:()=>{this._changeCursor("crosshair");this._flagViewType=
"starting-point";this._selectToolActive=!0;this._warningNoStartAssetFound=!1;this.viewModel.addFlagByHit("starting-point",this._symbolStartFlag).then(d=>{this._changeCursor("default");d?this._warningNoFlag=!1:this._warningNoStartAssetFound=!0;this._selectToolActive=!1})},round:!0})))}_renderBarriersFlagsContainer(){const {messages:a}=this,b=[];let e=[];e=this.viewModel._flags.filter(d=>"barrier"===d.type);e.forEach(d=>{d.displayValue&&b.push(this._renderFlagRow(d,"barrier"))});let f=null;this._symbolBarrier&&
(f=this._getSymbolIcon(this._symbolBarrier));return c.tsx("calcite-block",{collapsible:!0,heading:a.inputsStrings.headerBarrier+" ("+e.length+")",open:!1,overlayPositioning:"fixed"},c.tsx("div",{slot:"icon"},f||c.tsx("calcite-icon",{icon:"x-circle-f",scale:"s"})),c.tsx("div",null,a.inputsStrings.barrierPointHint),c.tsx("div",{class:"esri-utility-trace-network__list-container"},b),this._warningNoBarrierAssetFound?this._renderWarningMessage("noBarrierAsset",!0):null,c.tsx("div",{class:"esri-utility-trace-network__add-button-container"},
c.tsx("calcite-button",{alignment:"center",appearance:"outline",href:"",iconStart:"plus",kind:"brand",label:a.inputsStrings.addPointOption,onclick:()=>{this._changeCursor("crosshair");this._flagViewType="barrier";this._selectToolActive=!0;this._warningNoBarrierAssetFound=!1;this.viewModel.addFlagByHit("barrier",this._symbolBarrier).then(d=>{this._changeCursor("default");d||(this._warningNoBarrierAssetFound=!0);this._selectToolActive=!1})},round:!0})))}_renderFlagRow(a,b){const {messages:e,messagesCommon:f}=
this,d=[];let g=!1;null!=a.allTerminals&&0<a.allTerminals.terminals.length&&(g=!0,a.allTerminals.terminals.forEach(n=>{let q=!1;a?.selectedTerminals?.includes(n.id)&&(q=!0);d.push(c.tsx("calcite-combobox-item",{key:n.name,selected:q,textLabel:n.name,value:n.id}))}));return c.tsx("calcite-block",{collapsible:null!==a.allTerminals||"barrier"===a.type,heading:a.displayValue?.value??"",key:"pop"+a.globalId+a.type+a.id+b,overlayPositioning:"fixed"},c.tsx("calcite-action",{icon:"trash",label:f.remove,onclick:()=>
{this.viewModel.removeFlag(a)},scale:"s",slot:"header-menu-actions",text:f.remove,textEnabled:!0}),c.tsx("calcite-action",{icon:"zoom-to-object",label:e.globalStrings.zoomToFeature,onclick:()=>{this.viewModel.zoomToAsset(a.details.geometry)},scale:"s",slot:"header-menu-actions",text:e.globalStrings.zoomToFeature,textEnabled:!0}),"barrier"===a.type?c.tsx("calcite-label",{layout:"inline",scale:"s"},c.tsx("calcite-checkbox",{checked:a.isFilterBarrier,onclick:()=>{this.viewModel.manageFilterBarrier(!a.isFilterBarrier,
a)},scale:"s"}),e.inputsStrings.barrierFilter):null,g?c.tsx("calcite-combobox",{label:e.globalStrings.selectTerminalPlaceholder,maxItems:0,placeholder:e.globalStrings.selectTerminalPlaceholder,scale:"s",selectionMode:"multiple",onCalciteComboboxChange:n=>{0<n.target.selectedItems.length?(a.selectedTerminals=[],n.target.selectedItems.forEach(q=>{this.viewModel.addTerminal(q.value,a)})):a.selectedTerminals=[]},onCalciteComboboxChipClose:n=>{n.preventDefault();this.viewModel.removeTerminal(n.target.value,
a)}},d):null)}_renderActiveTool(){const {messages:a}=this;let b=null;"starting-point"===this._flagViewType?this._symbolStartFlag&&(b=this._getSymbolIcon(this._symbolStartFlag)):this._symbolBarrier&&(b=this._getSymbolIcon(this._symbolBarrier));return c.tsx("calcite-flow-item",{heading:a.inputsStrings.addPointOption,onCalciteFlowItemBack:()=>{this.viewModel.removeClickHandler();this.view?.popup&&(this.view.popupEnabled=!0);this._changeCursor("default");this._selectToolActive=!1}},c.tsx("calcite-block",
{collapsible:!1,heading:"",open:!0,overlayPositioning:"fixed"},c.tsx("div",{styles:A()},b||c.tsx("calcite-icon",{icon:"starting-point"===this._flagViewType?"pin-plus":"x-circle-f"})),c.tsx("div",{styles:A()},a.inputsStrings.addPointHint)))}_renderTraceSelectorContainer(){const {messages:a}=this,b=[];let e=a.tracingStrings.traceOperation,f=0;0<this.viewModel.traces.length&&this.viewModel.traces.forEach(d=>{b.push(c.tsx("calcite-combobox-item",{key:d.globalId,selected:d.selected,textLabel:d.title,value:d.globalId,
onCalciteComboboxItemChange:g=>{g=g.target;this.viewModel.selectTraces(g.selected,g.value);0<this.viewModel.traces.length&&(this._warningNoTraceSelected=!1)}}));d.selected&&f++});return c.tsx("calcite-block",{collapsible:!0,heading:e+` (${f})`,open:!0,overlayPositioning:"fixed"},c.tsx("calcite-icon",{icon:"utility-network-trace",scale:"s",slot:"icon"}),c.tsx("calcite-combobox",{label:a.inputsStrings.selectTraces,maxItems:0,overlayPositioning:"fixed",placeholder:a.inputsStrings.selectTraces,scale:"s",
selectionMode:"multiple"},b))}_renderStartOverContainer(){const {messages:a}=this;return c.tsx("calcite-button",{kind:"brand",onclick:()=>{this.confirmReset()},slot:"footer",width:"full"},a.resultsStrings.startOverButton)}_renderWarningMessage(a,b,e){const {messages:f}=this;let d=f.alertsStrings.NoRunAlertHeader,g=f.alertsStrings.noResultsInfo;switch(a){case "flag":d=f.alertsStrings.startingPointAlertHeader;g=f.alertsStrings.startingPointAlert;break;case "noTerminal":d=f.alertsStrings.noTerminalDefinedHeader;
g=f.alertsStrings.noTerminalDefined;break;case "trace":d=f.alertsStrings.selectTraceAlertHeader;g=f.alertsStrings.selectTraceAlert;break;case "noTraceExecuted":d=f.alertsStrings.NoRunAlertHeader;g=f.alertsStrings.noResultsInfo;break;case "noBarrierAsset":case "noStartAsset":d=f.alertsStrings.noAssetsFoundHeader;g=f.alertsStrings.noAssetFound;break;case "noTraceConfig":d="";g=f.alertsStrings.noTraceSupported;break;default:d=f.alertsStrings.genericErrorHeader,g=e||""}return c.tsx("div",{class:"esri-utility-trace-network__notice-container",
key:a},c.tsx("calcite-notice",{closable:b,icon:!0,key:a,kind:"danger",open:!0,scale:"s",width:"auto",onCalciteNoticeClose:()=>{switch(a){case "flag":this._warningNoFlag=!1;break;case "noTerminal":this._warningNoTerminal=!1;break;case "trace":this._warningNoTraceSelected=!1;break;case "noStartAsset":this._warningNoStartAssetFound=!1;break;case "noBarrierAsset":this._warningNoBarrierAssetFound=!1}}},c.tsx("div",{slot:"title"},d),c.tsx("div",{slot:"message"},g)))}_renderRemoveTraceContainer(a){const {messages:b}=
this;return c.tsx("calcite-action",{icon:"trash",label:b.globalStrings.clearResults,onclick:()=>{this._alertRemoveModal=!0;this._activeTrace=a.trace},scale:"s",slot:"header-menu-actions",text:b.globalStrings.clearResults,textEnabled:!0})}_renderHighlightColorPicker(a,b,e){const {messages:f}=this,{graphicHandler:d}=this.viewModel,g=[];a=new RegExp(`^${a.hex}$`,"i");const n=d.highlightColor.length>J.defaultSwatchColors.length?5:4;for(const q of d.highlightColor)g.push(c.tsx("calcite-action",{active:a.test(q.hex),
key:q.hex,label:f.resultsStrings.graphicColor,onclick:()=>{"aggregate"===e?this.viewModel.changeResultGraphicColor(q,b):this.viewModel.changeResultAreaColor(b,q)},scale:"s",text:f.resultsStrings.graphicColor},c.tsx("calcite-color-picker-swatch",{active:a.test(q.hex),color:q.hex,scale:"s"})));return c.tsx("calcite-action-pad",{expandDisabled:!0,layout:"grid",position:"start"},c.tsx("calcite-action-group",{columns:n,layout:"grid"},g))}_renderTraceResults(){const {messages:a,messagesCommon:b}=this,{selectFeatures:e}=
a.resultsStrings,f=[];this.viewModel.traceResults.forEach((d,g)=>{let n=[],q=[],t=!1,u=!1,B=!1,C="";if(null!==d.results)if(d.results.hasOwnProperty("elements")){null!==d.results.aggregatedGeometry&&(u=!0);null!==d.results.globalFunctionResults&&0<d.results.globalFunctionResults.length&&(q=d.results.globalFunctionResults,0<q.length&&(B=!0));d.results.elements&&0<d.results.elements.length&&(n=d.results.elements,0<n.length&&(t=!0));if(u||t)C=this.messagesUnits.units[d.resultArea?.unit]?.abbr;f.push(c.tsx("calcite-block",
{collapsible:!0,description:d.trace.description??"",heading:d.trace.title,key:`${d.trace.title}${g}`,open:!0,overlayPositioning:"fixed"},this._renderRemoveTraceContainer(d),c.tsx("calcite-list",null,B?c.tsx("calcite-list-item",{label:a.resultsStrings.functionHeader+" ("+q.length+")",onCalciteListItemSelect:()=>{this.switchToFunctions(q,!0)}},c.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})):null,t&&this.viewModel.showSelectionAttributes?c.tsx("calcite-list-item",{key:this.id,
label:a.resultsStrings.viewFeatures+" ("+n.length+")",onCalciteListItemSelect:()=>{this.switchToAssetGroup(this._groupResultsByAssetGroup(d),d.trace.title+" ("+n.length+")",!0)}},c.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"})):this.viewModel.showSelectionAttributes?c.tsx("calcite-label",{layout:"inline",scale:"s"},a.resultsStrings.noSelectionResults):null),t?c.tsx("div",{class:"esri-utility-trace-network__padTop"},c.tsx("calcite-label",{layout:"inline",onclick:p=>{p.preventDefault();
p.stopPropagation();this.viewModel.mergeSelection(!d.selectionEnabled,d.trace)},scale:"s"},c.tsx("calcite-checkbox",{checked:d.selectionEnabled,onclick:p=>{p.preventDefault();p.stopPropagation();this.viewModel.mergeSelection(!d.selectionEnabled,d.trace)}}),this.viewModel.showSelectionAttributes?e:`${e} (${n.length})`)):null,u?c.tsx("calcite-block-section",{key:`aggregate-${d.trace.title}-${g}`,open:d.graphicEnabled,text:a.resultsStrings.highlightTrace,toggleDisplay:"switch",onCalciteBlockSectionToggle:p=>
{p.target.open?this.viewModel.changeResultGraphicColor(d.graphicColor,d):this.viewModel.removeResultGraphicFromView(d)}},c.tsx("calcite-list",{selectionMode:"none"},c.tsx("calcite-list-item",{label:a.resultsStrings.graphicColor,onclick:p=>{this._swatchNode=p.target;this._activeSwatch="aggGeom_"+g}},c.tsx("calcite-color-picker-swatch",{color:d.graphicColor.hex,scale:"s",slot:"actions-end"})))):null,this.enableResultArea&&(u||t)?c.tsx("calcite-block-section",{key:`area-${d.trace.title}-${g}`,open:d.resultArea?.show,
text:a.resultsStrings.resultAreaHeader,toggleDisplay:"switch",onCalciteBlockSectionToggle:p=>{p.target.open?d.resultAreaGraphic?this.viewModel.addResultAreaToMap(d,d.resultAreaGraphic):this.viewModel.addResultAreaToMap(d):this.viewModel.removeResultAreaFromMap(d)}},c.tsx("calcite-list",{selectionMode:"none"},c.tsx("calcite-list-item",{label:a.resultsStrings.graphicColor,onclick:p=>{this._swatchNode=p.target;this._activeSwatch="resultArea_"+g}},c.tsx("calcite-color-picker-swatch",{color:d.resultArea?.color.hex,
scale:"s",slot:"actions-end"}))),c.tsx("calcite-list",{selectionMode:"none"},c.tsx("calcite-list-item",{label:a.resultsStrings.resultAreaBuffer},c.tsx("calcite-input-number",{afterCreate:this._afterComponentCreate,class:"esri-utility-trace-network__number-input",max:999999,maxLength:999999,min:0,scale:"s",slot:"actions-end",suffixText:C,value:d.resultArea?.distance.toString(),onCalciteInputNumberChange:p=>{this.view?.popup&&(this.view.popup.visible&&this.view.closePopup(),p=p.target,d.resultArea.distance=
0<=d.resultArea.distance?parseInt(p.value,10):0,this.viewModel.removeResultAreaFromMap(d),this.viewModel.addResultAreaToMap(d))}})))):null,c.tsx("calcite-popover",{autoClose:!0,closable:!0,label:a.resultsStrings.graphicColor,offsetDistance:0,offsetSkidding:0,open:this._activeSwatch==="aggGeom_"+g||this._activeSwatch==="resultArea_"+g,placement:"auto-start",referenceElement:this._swatchNode,scale:"s",onCalcitePopoverClose:()=>{this._activeSwatch=this._swatchNode=null}},this._renderHighlightColorPicker(this._activeSwatch===
"resultArea_"+g?d.resultArea?.color:d.graphicColor,d,this._activeSwatch==="resultArea_"+g?"resultArea":"aggregate"))))}else f.push(c.tsx("calcite-block",{collapsible:!1,heading:d.trace.title,key:"error-"+g,open:!0,overlayPositioning:"fixed"},this._renderRemoveTraceContainer(d),this._renderWarningMessage("noController",!1,d.status)));else f.push(c.tsx("calcite-block",{collapsible:!1,heading:d.trace.title,key:"error-"+g,open:!0,overlayPositioning:"fixed"},this._renderRemoveTraceContainer(d),this._renderWarningMessage("noController",
!1,d.status)))});return c.tsx("calcite-flow-item",{key:"traceResults",styles:{height:"100%"}},f,this._renderStartOverContainer(),this._alertRemoveModal?c.tsx("calcite-scrim",{key:"prompt"},c.tsx("div",{class:"esri-utility-trace-network__reset-prompt"},c.tsx("h3",{slot:"header"},a.globalStrings.clearResults),c.tsx("div",{slot:"content"},a.alertsStrings.clearResultsAlert),c.tsx("div",{class:"esri-utility-trace-network__divider"}),c.tsx("div",{styles:{display:"flex",flexDirection:"row"}},c.tsx("calcite-button",
{appearance:"outline",onclick:()=>{this._alertRemoveModal=!1},slot:"secondary",width:"full"},b.cancel),c.tsx("calcite-button",{onclick:()=>{this._activeTrace&&this.viewModel.clearResult(this._activeTrace);this._alertRemoveModal=!1;0===this.viewModel.traceResults.length?this.switchTab("input"):(this._activeTrace=this.viewModel.traceResults[0].trace,this._showIndividualRecords=this._showTraceResultAssetType=this._showTraceResultAssetGroup=this._showTraceResultFunctions=!1)},slot:"primary",width:"full"},
b.form.ok)))):null)}_renderTraceResultFunctions(){const {messages:a}=this,b=[];this._traceResultsFunctions.forEach(e=>{b.push(this._renderResultRowFunctions(e))});return c.tsx("calcite-flow-item",{heading:a.resultsStrings.functionHeader,key:"functionResultMultiple",onCalciteFlowItemBack:()=>{this.switchToFunctions([],!1)}},b,this._renderStartOverContainer())}_renderTraceResultByAssetGroup(){const a=this._traceResultsAssetGroup,b=[];for(const e in a){const f=a[e];for(const d in f)b.push(this._renderResultRowAssetGroup(f[d]))}return c.tsx("calcite-flow-item",
{heading:this._traceHeaderForFlow,key:"assetGroupResultMultiple",onCalciteFlowItemBack:()=>{this.switchToAssetGroup([],"",!1)}},c.tsx("calcite-list",null,b),this._renderStartOverContainer())}_renderTraceResultByAssetType(){const a=this._traceResultsAssetType,b=[];for(const e in a)0<a[e].length&&b.push(this._renderResultRowAssetType(a[e]));return c.tsx("calcite-flow-item",{heading:this._assetGroupHeader,key:"assetTypeResult",onCalciteFlowItemBack:()=>{this.switchToAssetType([],"",!1)}},c.tsx("calcite-list",
{selectionMode:"none"},b),this._renderStartOverContainer())}_renderTraceResultIndividual(){const {messages:a}=this,b=this._traceResultsIndividual;b.sort(this._compare(this._resultSortField,this._resultSortOrder));const e=[];0<b.length&&((b[0].details?.fields.some(({name:f})=>f.toLowerCase()===this._resultDisplayField.toLocaleLowerCase())??!1)||(this._resultSortField=this._resultDisplayField=this._resultObjectIdField),b.forEach(f=>{f?.details&&e.push(this._renderResultRowIndividual(f))}),0===e.length&&
e.push(c.tsx("calcite-list-item",{label:a.resultsStrings.noFeaturesInMap})));return c.tsx("calcite-flow-item",{heading:this._assetTypeHeader,key:"individualResult",onCalciteFlowItemBack:()=>{this._showResultOptions=!1;this.switchToIndividualRecords([],"",!1)}},c.tsx("calcite-action",{afterCreate:H.storeNode,bind:this,"data-node-ref":"_individualResultNode",icon:"gear",id:"field_options"+this.id,label:a.resultsStrings.displayAttribute,onclick:()=>{this._showResultOptions=!0},slot:"header-actions-end",
text:a.resultsStrings.displayAttribute}),c.tsx("calcite-list",{selectionMode:"none"},e),this._renderStartOverContainer())}_renderTraceResultIndividualPopover(){const {messages:a}=this,b=this._traceResultsIndividual,e=[],f=[];0<b.length&&(b[0].details?b[0].details.fields.forEach(({name:d,alias:g})=>{e.push(c.tsx("calcite-option",{key:`display-${d}`,label:g??d,selected:d===this._resultDisplayField,value:d}));f.push(c.tsx("calcite-option",{key:`sort-${d}`,label:g??d,selected:d===this._resultSortField,
value:d}))}):(e.push(c.tsx("calcite-option",{key:`display-${this._resultDisplayField}`,label:this._resultDisplayField,value:this._resultDisplayField})),f.push(c.tsx("calcite-option",{key:`sort-${this._resultDisplayField}`,label:this._resultDisplayField,value:this._resultDisplayField}))));return c.tsx("calcite-popover",{autoClose:!0,label:a.resultsStrings.displayAttribute,offsetDistance:0,offsetSkidding:0,open:this._showResultOptions,overlayPositioning:"fixed",placement:"left-start",referenceElement:this._individualResultNode,
styles:null!==this.domNode?{width:.75*this.domNode.clientWidth+"px"}:{width:"75%"}},c.tsx("calcite-block",{heading:"",open:!0,overlayPositioning:"fixed"},c.tsx("calcite-label",{scale:"s"},a.resultsStrings.displayAttribute,c.tsx("calcite-select",{label:a.resultsStrings.displayAttribute,scale:"s",onCalciteSelectChange:d=>{this._resultDisplayField=d.target.selectedOption.value;this._showResultOptions=!1}},e)),c.tsx("calcite-label",{scale:"s"},a.resultsStrings.sortBy,c.tsx("calcite-select",{label:a.resultsStrings.sortBy,
scale:"s",onCalciteSelectChange:d=>{this._resultSortField=d.target.selectedOption.value;b.sort(this._compare(this._resultSortField,this._resultSortOrder));this._traceResultsIndividual=b;this._showResultOptions=!1}},f))))}_renderResultRowFunctions(a){return c.tsx("calcite-block",{collapsible:!1,heading:a.networkAttributeName+" "+a.functionType+" \x3d "+a.result,overlayPositioning:"fixed"})}_renderResultRowAssetGroup(a){const b=this._getAssetGroupName(a[0]);return c.tsx("calcite-list-item",{label:b+
" ("+a.length+")",onCalciteListItemSelect:()=>{this.switchToAssetType(this._groupResultsByAssetType(a),b+" ("+a.length+")",!0)}},c.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"}))}_renderResultRowAssetType(a){const b=this._getAssetTypeName(a[0]);return c.tsx("calcite-list-item",{label:b+" ("+a.length+")",onCalciteListItemSelect:()=>{this.viewModel.queryFeaturesById(a).then(e=>{e?.length?(this._resultObjectIdField=e[0].layer.objectIdField,"objectid"===this._resultDisplayField&&
(this._resultDisplayField=e[0].layer.objectIdField),"objectid"===this._resultSortField&&(this._resultSortField=e[0].layer.objectIdField),e=this._appendAttributes(a,e,"objectId"),this.switchToIndividualRecords(e,b+" ("+a.length+")",!0)):this.switchToIndividualRecords(a,b+" ("+a.length+")",!0)})}},c.tsx("calcite-icon",{icon:"chevron-right",scale:"s",slot:"content-end"}))}_renderResultRowIndividual(a){const {messages:b}=this,e=`display-${a.objectId}-nso`,{nonSpatialObject:f,zoomToFeature:d}=b.globalStrings;
var g="";g=null;g=a?.details?.fields.find(({name:n})=>n===this._resultDisplayField);g="date"===g?.type?(new Date(a.details.attributes[this._resultDisplayField])).toDateString():"assetgroup"===this._resultDisplayField.toLowerCase()?this._getAssetGroupName(a):"assettype"===this._resultDisplayField.toLowerCase()?this._getAssetTypeName(a):g?.domain&&g.domain instanceof E?g.domain.codedValues.find(({code:n})=>n===a.details.attributes[this._resultDisplayField])?.name:a.details?.attributes[this._resultDisplayField]??
a.objectId;g&&""!==g&&null!==g?"string"!==typeof g||g.trim()||(g=b.resultsStrings.noValue):g=b.resultsStrings.noValue;return null!==a?.details?.geometry?c.tsx("calcite-list-item",{label:g,onCalciteListItemSelect:()=>{this.viewModel.zoomToAsset(a.details.geometry)}},c.tsx("calcite-icon",{icon:"zoom-to-object",scale:"s",slot:"content-end",textLabel:d})):c.tsx("calcite-list-item",{label:g},c.tsx("calcite-icon",{icon:"table",id:e,scale:"s",slot:"content-end",textLabel:f}),c.tsx("calcite-tooltip",{label:f,
referenceElement:e},c.tsx("span",null,f)))}_afterComponentCreate(a){"value"in a&&null!=a.value&&"setNumberValue"in a&&a.setNumberValue({committing:!1,value:a.value,origin:"direct"})}_mixCustomStrings(){const {messages:a}=this;0<this.inputSettings.length&&this.inputSettings.forEach(b=>{"starting-point"===b.type&&(a.inputsStrings.headerStartingPoint=b.label,a.inputsStrings.startingPointHint=b.description);"barrier"===b.type&&(a.inputsStrings.headerBarrier=b.label,a.inputsStrings.barrierPointHint=b.description)})}_overrideFlagSymbol(){0<
this.inputSettings.length&&this.inputSettings.forEach(a=>{"starting-point"===a.type?this._symbolStartFlag=a.symbol:this._symbolBarrier=a.symbol;this.viewModel.changeFlagSymbol(a.type,a.symbol)})}_utilityNetworkTraceInitialized(){return this.viewModel.loadUtilityNetwork().then(a=>{if(a)return this.viewModel.selectTracesOnLoad(),this._registerWatchers(),0<this.viewModel.flags.length&&this._processFlagOnLoad(),this.view?.when().then(()=>{this._watchViewState()});this.disabled=!1}).catch(a=>{const {messages:b}=
this;this._loadUNError=!1;this._errorMessage="utility-network:no-user-type-extension"===a.name||-2147208474===a.details.raw.extendedCode?b.alertsStrings.noUserExtension:a.message;this.disabled=!1})}_processFlagOnLoad(){return this.view?.when().then(()=>{this._watchHandler=r.when(()=>!this.view?.updating,async()=>{this._warningNoStartAssetFound=this._warningNoBarrierAssetFound=this._warningNoFlag=!1;const a=await this.viewModel.addFlagsOnLoad();this.viewModel.removeFlagsOnLoadWatcher();a.includes("barrier")&&
(this._warningNoBarrierAssetFound=!0);a.includes("starting-point")&&(this._warningNoStartAssetFound=!0);this.disabled=!1;null!==this._watchHandler&&this._watchHandler.remove()})})}_registerWatchers(){this.addHandles([r.watch(()=>this.selectedTraces,()=>{this.viewModel.selectTracesOnLoad();this.scheduleRender()}),r.watch(()=>this.defaultGraphicColor,()=>{0<this.viewModel.traceResults.length&&this.viewModel.traceResults.forEach(a=>{this.viewModel.changeResultGraphicColor(this.viewModel.defaultGraphicColor,
a)});this.scheduleRender()})])}_groupResultsByAssetGroup(a){const b=[];a=this._groupBy(a.results?.elements??[],"networkSourceId");for(const e in a)b.push(this._groupBy(a[e],"assetGroupCode"));return b}_groupResultsByAssetType(a){return this._groupBy(a,"assetTypeCode")}_appendAttributes(a,b,e){const f=[];a.forEach(d=>{b.forEach(g=>{g.featureSet.features.forEach(n=>{d[e]===n.attributes[this._resultObjectIdField]&&(d.details=n,d.details.fields=g.featureSet.fields,f.push(d))})})});return f}_getAssetGroupName(a){let b=
a.assetGroupCode.toString();const e=a.assetGroupCode;var f=this.viewModel.getValidSources().find(d=>d.sourceId===a.networkSourceId);f&&(f=f.assetGroups.find(d=>d.assetGroupCode===e))&&(b=f.assetGroupName);return b}_getAssetTypeName(a){let b=a.assetTypeCode.toString();const e=a.assetGroupCode;var f=this.viewModel.getValidSources().find(d=>d.sourceId===a.networkSourceId);f&&(f=f.assetGroups.find(d=>d.assetGroupCode===e))&&(f=f.assetTypes.find(d=>d.assetTypeCode===a.assetTypeCode))&&(b=f.assetTypeName);
return b}_compare(a,b){return(e,f)=>{let d=0;e=e.details?.attributes[a]??e.objectId;f=f.details?.attributes[a]??f.objectId;isNaN(e)&&(e=e.toLowerCase());isNaN(f)&&(f=f.toLowerCase());"desc"===b?e>f?d=1:e<f&&(d=-1):e<f?d=1:e>f&&(d=-1);return d}}_groupBy(a,b){return a.reduce((e,f)=>{(e[f[b]]=e[f[b]]||[]).push(f);return e},{})}_getSymbolIcon(a){return"picture-marker"===a.type?c.tsx("img",{height:a.height,src:a.url??void 0,width:a.width}):null}_watchViewState(){this._watchHandler=r.when(()=>!this.view?.updating,
()=>{this.disabled=!1;null!==this._watchHandler&&this._watchHandler.remove()},{initial:!0})}_changeCursor(a="default"){const b=this.view?.container?.style;b&&(b.cursor=a)}};k.__decorate([l.property()],h.prototype,"_selectToolActive",void 0);k.__decorate([l.property()],h.prototype,"_activeTrace",void 0);k.__decorate([l.property()],h.prototype,"_activeSwatch",void 0);k.__decorate([l.property()],h.prototype,"_traceHeaderForFlow",void 0);k.__decorate([l.property()],h.prototype,"_assetGroupHeader",void 0);
k.__decorate([l.property()],h.prototype,"_assetTypeHeader",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsFunctions",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsAssetGroup",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsAssetType",void 0);k.__decorate([l.property()],h.prototype,"_traceResultsIndividual",void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultFunctions",void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultAssetGroup",
void 0);k.__decorate([l.property()],h.prototype,"_showTraceResultAssetType",void 0);k.__decorate([l.property()],h.prototype,"_showIndividualRecords",void 0);k.__decorate([l.property()],h.prototype,"_activeTab",void 0);k.__decorate([l.property()],h.prototype,"_alertRemoveModal",void 0);k.__decorate([l.property()],h.prototype,"_warningNoFlag",void 0);k.__decorate([l.property()],h.prototype,"_warningNoTraceSelected",void 0);k.__decorate([l.property()],h.prototype,"_confirmReset",void 0);k.__decorate([l.property()],
h.prototype,"_swatchNode",void 0);k.__decorate([l.property()],h.prototype,"_errorMessage",void 0);k.__decorate([l.property()],h.prototype,"defaultGraphicColor",null);k.__decorate([l.property()],h.prototype,"disabled",void 0);k.__decorate([l.property()],h.prototype,"flags",null);k.__decorate([l.property()],h.prototype,"gdbVersion",null);k.__decorate([l.property()],h.prototype,"icon",null);k.__decorate([l.property()],h.prototype,"inputSettings",void 0);k.__decorate([l.property()],h.prototype,"label",
null);k.__decorate([l.property(),w.messageBundle("esri/widgets/UtilityNetworkTrace/t9n/UtilityNetworkTrace")],h.prototype,"messages",void 0);k.__decorate([l.property(),w.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0);k.__decorate([l.property(),w.messageBundle("esri/core/t9n/Units")],h.prototype,"messagesUnits",void 0);k.__decorate([l.property()],h.prototype,"resultAreaProperties",null);k.__decorate([l.property()],h.prototype,"selectedTraces",null);k.__decorate([l.property()],
h.prototype,"selectOnComplete",null);k.__decorate([l.property()],h.prototype,"showGraphicsOnComplete",null);k.__decorate([l.property()],h.prototype,"enableResultArea",null);k.__decorate([l.property()],h.prototype,"showSelectionAttributes",null);k.__decorate([l.property()],h.prototype,"utilityNetwork",null);k.__decorate([l.property()],h.prototype,"view",null);k.__decorate([I.vmEvent("add-flag add-flag-complete add-flag-error select-features clear-selection add-result-area remove-result-area create-result-area reset".split(" ")),
l.property({type:z})],h.prototype,"viewModel",void 0);return h=k.__decorate([D.subclass("esri.widgets.UtilityNetworkTrace")],h)});