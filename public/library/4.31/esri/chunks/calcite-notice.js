// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./dom ./loadable ./locale ./t9n ./resources2 ./openCloseComponent ./component ./icon".split(" "),function(d,a,g,e,f,h,c,k,l,m,q){function n(){"undefined"!==typeof customElements&&["calcite-notice","calcite-icon"].forEach(b=>{switch(b){case "calcite-notice":customElements.get(b)||customElements.define(b,p);break;case "calcite-icon":customElements.get(b)||q.defineCustomElement()}})}const p=a.proxyCustomElement(class extends a.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteNoticeBeforeClose=a.createEvent(this,"calciteNoticeBeforeClose",6);this.calciteNoticeBeforeOpen=a.createEvent(this,"calciteNoticeBeforeOpen",6);this.calciteNoticeClose=a.createEvent(this,"calciteNoticeClose",6);this.calciteNoticeOpen=a.createEvent(this,"calciteNoticeOpen",6);this.setTransitionEl=b=>{this.transitionEl=b};this.close=()=>{this.open=!1};this.openTransitionProp="opacity";this.open=!1;this.kind="brand";this.closable=!1;this.icon=void 0;
this.iconFlipRtl=!1;this.scale="m";this.width="auto";this.defaultMessages=this.effectiveLocale=this.messageOverrides=this.messages=void 0}openHandler(){l.onToggleOpenCloseComponent(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=e.setRequestedIcon(k.KindIcons,this.icon,this.kind)}connectedCallback(){g.connectConditionalSlotComponent(this);h.connectLocalized(this);c.connectMessages(this)}disconnectedCallback(){g.disconnectConditionalSlotComponent(this);h.disconnectLocalized(this);
c.disconnectMessages(this)}async componentWillLoad(){f.setUpLoadableComponent(this);this.requestedIcon=e.setRequestedIcon(k.KindIcons,this.icon,this.kind);await c.setUpMessages(this);if(this.open)l.onToggleOpenCloseComponent(this)}componentDidLoad(){f.setComponentLoaded(this)}render(){var {el:b}=this;const t=a.h("button",{key:"52f9306ebe945398929f68fe66615359836ba2d8","aria-label":this.messages.close,class:"notice-close",onClick:this.close,ref:r=>this.closeButton=r},a.h("calcite-icon",{key:"f3601ac9547c73219661eebc7e7470db5dee7b52",
icon:"x",scale:m.getIconScale(this.scale)}));b=e.getSlotted(b,"actions-end");return a.h("div",{key:"3f8117ff7cdd08c92ce804ef4ac8af83003156a4",class:"container",ref:this.setTransitionEl},this.requestedIcon?a.h("div",{class:"notice-icon"},a.h("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:m.getIconScale(this.scale)})):null,a.h("div",{key:"1b614ee86618bd5ce6e8834b466baf7d2564b5a1",class:"notice-content"},a.h("slot",{key:"19467ed9718a78c7530c2a08c727028d565dee7b",name:"title"}),
a.h("slot",{key:"191e71caf2f2147c62fd6b73602e41d95dc27558",name:"message"}),a.h("slot",{key:"d4fbf2b8aaa980cd24c5be89c6c8a36d091658f3",name:"link"})),b?a.h("div",{class:"actions-end"},a.h("slot",{name:"actions-end"})):null,this.closable?t:null)}async setFocus(){await f.componentFocusable(this);const b=this.el.querySelector("calcite-link");if(this.closeButton||b){if(b)return b.setFocus();this.closeButton&&this.closeButton.focus()}}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){c.updateMessages(this,
this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale\x3ds]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale\x3ds]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3ds]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3ds]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale\x3ds]) .notice-close{padding:0.5rem}:host([scale\x3dm]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale\x3dm]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dm]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dm]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dm]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale\x3dl]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale\x3dl]) .container slot[name\x3dtitle]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dtitle]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale\x3dl]) .container slot[name\x3dmessage]::slotted(*),:host([scale\x3dl]) .container *::slotted([slot\x3dmessage]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale\x3dl]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width\x3dauto]){--calcite-notice-width:auto}:host([width\x3dhalf]){--calcite-notice-width:50%}:host([width\x3dfull]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;max-block-size:0;transition-property:opacity, max-block-size;transition-duration:var(--calcite-animation-timing);text-align:start;border-inline-start:var(--calcite-border-width-md) solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;max-block-size:100%;align-items:center;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name\x3dtitle]::slotted(*),.container *::slotted([slot\x3dtitle]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name\x3dmessage]::slotted(*),.container *::slotted([slot\x3dmessage]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind\x3dbrand]) .container{border-color:var(--calcite-color-brand)}:host([kind\x3dbrand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind\x3dinfo]) .container{border-color:var(--calcite-color-status-info)}:host([kind\x3dinfo]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind\x3ddanger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind\x3ddanger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind\x3dsuccess]) .container{border-color:var(--calcite-color-status-success)}:host([kind\x3dsuccess]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind\x3dwarning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind\x3dwarning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);n();d.CalciteNotice=p;d.defineCustomElement=n;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});