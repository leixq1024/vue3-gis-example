/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../../../chunks/tslib.es6.js";import{property as s}from"../../../../core/accessorSupport/decorators/property.js";import{cast as r}from"../../../../core/accessorSupport/decorators/cast.js";import"../../../../core/lang.js";import{r as o}from"../../../../chunks/reader.js";import{subclass as p}from"../../../../core/accessorSupport/decorators/subclass.js";import{w as e}from"../../../../chunks/writer.js";import{I as i}from"../../../../chunks/Input.js";import{ensureType as n,fromJSON as c,toJSON as u,buildTypeMaps as m}from"./support/inputs.js";import"../../../../chunks/Logger.js";import"../../../../config.js";import"../../../../chunks/ensureType.js";import"../../../../chunks/utils.js";import"../../../../chunks/handleUtils.js";import"../../../../chunks/metadata.js";import"../../../../core/Error.js";import"../../../../chunks/tracking.js";import"../../../../core/Clonable.js";import"../../../../core/Accessor.js";import"../../../../core/Handles.js";import"../../../../chunks/maybe.js";import"../../../../chunks/ObservableBase.js";import"../../../../core/scheduling.js";import"../../../../core/promiseUtils.js";import"../../../../core/JSONSupport.js";import"./AudioInput.js";import"../../../../chunks/utils8.js";import"./DocumentInput.js";import"./ImageInput.js";import"./SignatureInput.js";import"./VideoInput.js";let a=class extends i{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return n(t,j,!0)}readInputs(t,s){return c(s.inputTypes,j,!0)}writeInputs(t,s){s.inputTypes=u(t,j,!0)}};t([s({type:["attachment"],readOnly:!0,json:{write:!0}})],a.prototype,"type",void 0),t([s({type:["any","exact","exactOrNone"],json:{write:!0}})],a.prototype,"attachmentAssociationType",void 0),t([s({json:{write:{isRequired:!0}}})],a.prototype,"inputTypes",void 0),t([r("inputTypes")],a.prototype,"castInputs",null),t([o("inputTypes")],a.prototype,"readInputs",null),t([e("inputTypes")],a.prototype,"writeInputs",null),a=t([p("esri.form.elements.inputs.attachments.AttachmentInput")],a);const j=m(a),l=a;export{l as default};
