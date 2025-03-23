/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as e,H as i,h as t}from"./componentsUtils.js";import{g as o}from"./dom.js";import{f as c,j as a}from"./utils26.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const l="list",s="label",n=e(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.guid=o(),this.afterEmptyGroup=!1,this.ancestors=void 0,this.label=void 0,this.scale="m"}connectedCallback(){this.ancestors=c(this.el)}render(){const{el:e,scale:i}=this,o=a(e);return t("ul",{key:"32cc4bb7e8e551213c7b3aea1ee6c9907a93dc8b","aria-labelledby":this.guid,class:{[l]:!0,[`scale--${i}`]:!0},role:"group"},t("li",{key:"7bad1e784bd918befdeccba34625d9404f610a91",class:{[s]:!0},id:this.guid,role:"presentation",style:{"--calcite-combobox-item-spacing-indent-multiplier":`${o}`}},t("span",{key:"9cfc56d414a465bb5d5e5beec561f5149779b31c",class:"title"},this.label)),t("slot",{key:"ec83330096f7031828f4b58cf2ee94611a9fddfe"}))}get el(){return this}static get style(){return".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-color-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-color-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-combobox-item-group",{afterEmptyGroup:[516,"after-empty-group"],ancestors:[1040],label:[1],scale:[1]}]);function r(){"undefined"!=typeof customElements&&["calcite-combobox-item-group"].forEach((e=>{"calcite-combobox-item-group"===e&&(customElements.get(e)||customElements.define(e,n))}))}r();export{n as C,r as d};
