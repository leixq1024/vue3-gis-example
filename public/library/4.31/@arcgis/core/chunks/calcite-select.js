/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as s,a}from"./componentsUtils.js";import{d as o,t as n}from"./dom.js";import{c,d as l,a as r,H as d}from"./form.js";import{u as p,I as h}from"./interactive.js";import{c as m,d as u,g as v}from"./label.js";import{s as f,a as g,c as b}from"./loadable.js";import{c as E}from"./observers.js";import{g as O}from"./component.js";import{V as w}from"./Validation.js";import{d as y}from"./icon.js";import{d as x}from"./input-message.js";import"./assets.js";import"../config.js";import"../core/lang.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const j="selectValidationMessage";function N(e){return"CALCITE-OPTION"===e.tagName}const C=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSelectChange=i(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=E("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>this.selectEl?.append(this.toNativeElement(e))))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.updateItemsFromValue(e)}selectedOptionHandler(e){this.value=e?.value}connectedCallback(){const{el:e}=this;this.mutationObserver?.observe(e,{subtree:!0,childList:!0}),m(this),c(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),u(this),l(this)}componentWillLoad(){f(this),"string"==typeof this.value&&this.updateItemsFromValue(this.value)}componentDidLoad(){g(this),r(this,this.selectedOption?.value??"")}componentDidRender(){p(this)}async setFocus(){await b(this),o(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,i=this.componentToNativeEl.get(t);i&&(this.updateNativeElement(t,i),N(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateItemsFromValue(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,N(e)){const i=t;i.selected=e.selected,i.value=e.value,i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((i,s)=>{N(s)&&i===e&&(s.selected=!0,t=s,this.deselectAllExcept(s))})),t&&(this.selectedOption=t)}toNativeElement(e){if(N(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((i=>{const s=this.toNativeElement(i);t.append(s),this.componentToNativeEl.set(e,s)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return s("div",{class:"icon-container"},s("calcite-icon",{class:"icon",icon:"chevron-down",scale:O(this.scale)}))}render(){const{disabled:e}=this;return s(a,{key:"d2e0ad4197079513f4e9e0070fb397c4f8331597"},s(h,{key:"5eee0d42742248209469fb7a5e3541cdbe373d30",disabled:e},s("div",{key:"e12c66d415dfe7c24e63731f2a83a081687fba8a",class:"wrapper"},s("select",{key:"22685962db75d2527740d288f016665ec5e6053e","aria-errormessage":j,"aria-invalid":n("invalid"===this.status),"aria-label":v(this),class:"select",disabled:e,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},s("slot",{key:"1b105206faa1f0765add18140b0f99f3d273c11f"})),this.renderChevron(),s(d,{key:"5767128465128a9fb5f69c9241bef0da56b9432e",component:this})),this.validationMessage&&"invalid"===this.status?s(w,{icon:this.validationIcon,id:j,message:this.validationMessage,scale:this.scale,status:this.status}):null))}get el(){return this}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}static get style(){return":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.wrapper{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}.wrapper:focus-within .icon,.wrapper:active .icon,.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .wrapper{block-size:1.5rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .wrapper{block-size:2rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .wrapper{block-size:44px}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:inherit;color:var(--calcite-color-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}select:disabled{border-color:var(--calcite-color-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:transparent;color:var(--calcite-color-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.icon-container .icon{color:var(--calcite-color-text-3)}:host([status=invalid]) select,:host([status=invalid]) .icon-container{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) select:focus,:host([status=invalid]) .icon-container:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.select:focus~.icon-container{border-color:transparent}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-select",{disabled:[516],form:[513],label:[1],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],required:[516],scale:[513],status:[513],value:[1025],selectedOption:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalOptionChange","handleOptionOrGroupChange"],[0,"calciteInternalOptionGroupChange","handleOptionOrGroupChange"]],{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}]);function I(){"undefined"!=typeof customElements&&["calcite-select","calcite-icon","calcite-input-message"].forEach((e=>{switch(e){case"calcite-select":customElements.get(e)||customElements.define(e,C);break;case"calcite-icon":customElements.get(e)||y();break;case"calcite-input-message":customElements.get(e)||x()}}))}I();const k=C,S=I;export{k as CalciteSelect,S as defineCustomElement};
