// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../renderers/support/authoringInfoUtils ../../renderers/visualVariables/support/SizeStop ../../symbols/support/cimSymbolUtils ./SmartMappingSliderBase ./BinaryColorSizeSlider/BinaryColorSizeSliderViewModel ./support/utils ../support/globalCss ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(g,d,k,y,F,G,z,u,v,A,B,C,p,q,D,E,l){function w(a){if(1>=a.length)return{};const b=c=>"cim"===c.type?A.getCIMSymbolColor(c):c.symbolLayers?(c.symbolLayers?.at(0)).material?.color:c.color;return{trackBelowFillColor:b(a[0].symbol)??void 0,trackAboveFillColor:b(a[1].symbol)??void 0}}var r;const x={trackBackgroundColor:new d([224,224,224]),trackAboveFillColor:new d([149,149,149]),trackBelowFillColor:new d([149,149,149])};d=r=class extends B.SmartMappingSliderBase{constructor(a,b){super(a,b);this._minRampFillWidth=
.2;this.messages=this._rampNode=null;this.style={...x};this.viewModel=new C;this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(a){this.viewModel.persistSizeRangeEnabled=
a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}castStyle(a){return{...x,...a}}static fromRendererResult(a,b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:h}=e,m=c[0].stops,[n,t]=u.authoringInfoFirstVariableSliderMinMax(a.renderer.authoringInfo);a=w(a.renderer.classBreakInfos);return new r({max:t,min:n,stops:m??void 0,histogramConfig:{average:f??void 0,standardDeviation:h??void 0,bins:b?b.bins:[]},style:a,handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateFromRendererResult(a,
b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:h}=e,m=c[0].stops,[n,t]=u.authoringInfoFirstVariableSliderMinMax(a.renderer.authoringInfo);a=w(a.renderer.classBreakInfos);this.set({max:t,min:n,stops:m,histogramConfig:{average:f,standardDeviation:h,bins:b?b.bins:[]},style:a,handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateRenderer(a){if("univariate-color-size"!==a.authoringInfo?.type||"above-and-below"!==a.authoringInfo?.univariateTheme)return console.error("Input renderer must be a univariate renderer with an above-and-below theme."),
null;a=a.clone();var b=a.visualVariables?.find(f=>"size"===f.type&&"outline"!==f.target&&f.stops);const {stops:c}=this;if(!a.visualVariables||!b||!c)return console.error("No size stops available."),null;const e=a.visualVariables.indexOf(b);a.visualVariables.splice(e,1);b.stops=c;a.visualVariables.push(b);b=c[5===c.length?2:1].value;a.classBreakInfos[0].maxValue=b;a.classBreakInfos[1].minValue=b;return a}updateFromVisualVariable(a){if(a){var {maxDataValue:b,minDataValue:c,stops:e}=a;if(e)this.stops=
e;else{const [f,h]=p.getSizesFromVariable(a);this.stops=[new v({value:c??void 0,size:h}),new v({value:b??void 0,size:f})]}}}render(){const {label:a,state:b,viewModel:{primaryHandleEnabled:c},visibleElements:e}=this,f="disabled"===b,h=this.classes("esri-binary-color-size-slider",q.globalCss.widget,q.globalCss.panel,{[q.globalCss.disabled]:f,["esri-binary-color-size-slider--primary-handle"]:c,["esri-binary-color-size-slider--interactive-track"]:!!e.interactiveTrack});return l.tsx("div",{"aria-label":a,
class:h},f?null:this.renderContent(this._renderRamp(),"esri-binary-color-size-slider__slider-container","esri-binary-color-size-slider__histogram-container"))}_renderRamp(){const {style:{trackBackgroundColor:a},zoomOptions:b}=this;return l.tsx("div",{afterCreate:D.storeNode,bind:this,class:"esri-binary-color-size-slider__ramp","data-node-ref":"_rampNode"},l.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},l.tsx("rect",{fill:p.getFillFromColor(a),height:"100%",width:"100%",x:"0",y:"0"}),
this._renderPrimaryRamp(),this._renderPath()),b?this.renderZoomCaps():null)}_renderPrimaryRamp(){const {_rampFillId:a,style:{trackAboveFillColor:b,trackBelowFillColor:c},viewModel:e}=this;return[l.tsx("defs",null,this.renderRampFillDefinition(a,e.getGradientStopInfo(b,c)))]}_renderPath(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(null!=a&&null!=b){var {stops:c,viewModel:{max:e,min:f},_rampFillId:h,_minRampFillWidth:m}=this,n=p.getDynamicPathForSizeStops({max:e,min:f,
pathHeight:a,pathWidth:b,stops:c,padding:m});return l.tsx("path",{d:n,fill:`url(#${h})`})}}}};g.__decorate([k.property()],d.prototype,"handlesSyncedToPrimary",null);g.__decorate([k.property()],d.prototype,"label",null);g.__decorate([k.property(),E.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],d.prototype,"messages",void 0);g.__decorate([k.property()],d.prototype,"persistSizeRangeEnabled",null);g.__decorate([k.property()],d.prototype,"stops",null);g.__decorate([k.property()],
d.prototype,"style",void 0);g.__decorate([y.cast("style")],d.prototype,"castStyle",null);g.__decorate([k.property()],d.prototype,"viewModel",void 0);return d=r=g.__decorate([z.subclass("esri.widgets.smartMapping.BinaryColorSizeSlider")],d)});