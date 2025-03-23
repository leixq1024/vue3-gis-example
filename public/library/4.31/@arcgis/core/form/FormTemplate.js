/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{clone as s}from"../core/lang.js";import{e as r,f as o}from"../core/Accessor.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import{cast as n}from"../core/accessorSupport/decorators/cast.js";import{r as p}from"../chunks/reader.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{w as l}from"../chunks/writer.js";import u from"./ExpressionInfo.js";import a from"./elements/GroupElement.js";import{ensureType as c,fromJSON as j,toJSON as h,buildTypeMaps as d}from"./support/elements.js";import{i as f,a as k,b as y}from"../chunks/formUtils.js";import{collectArcadeFieldNames as I,collectField as g,collectFields as x,extractSubstitutionTemplatesFromString as E}from"../layers/support/fieldUtils.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../config.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"./elements/Element.js";import"./elements/AttachmentElement.js";import"./elements/inputs/attachments/AttachmentInput.js";import"../chunks/Input.js";import"../core/Clonable.js";import"./elements/inputs/attachments/support/inputs.js";import"./elements/inputs/attachments/AudioInput.js";import"../chunks/utils8.js";import"./elements/inputs/attachments/DocumentInput.js";import"./elements/inputs/attachments/ImageInput.js";import"./elements/inputs/attachments/SignatureInput.js";import"./elements/inputs/attachments/VideoInput.js";import"./elements/FieldElement.js";import"./elements/support/inputs.js";import"./elements/inputs/BarcodeScannerInput.js";import"./elements/inputs/TextInput.js";import"./elements/inputs/Input.js";import"./elements/inputs/ComboBoxInput.js";import"./elements/inputs/DatePickerInput.js";import"./elements/inputs/DateTimeOffsetPickerInput.js";import"./elements/inputs/DateTimePickerInput.js";import"./elements/inputs/RadioButtonsInput.js";import"./elements/inputs/SwitchInput.js";import"./elements/inputs/TextAreaInput.js";import"./elements/inputs/TextBoxInput.js";import"./elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./elements/RelationshipElement.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"./elements/TextElement.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";var b;const w=d(a);let U=b=class extends t{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return c(e,w)}readElements(e,t){return j(t.formElements,w)}writeElements(e,t){t.formElements=h(e,w)}clone(){return new b({description:this.description,expressionInfos:s(this.expressionInfos),elements:s(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(e,t){const s=new Set,{description:r,elements:o,expressionInfos:i,title:n}=this;if(F(s,e,r),F(s,e,n),!o)return[];const p=function(e,t){if(!t||0===t.length)return[];const s=S(e),r=[];for(const e of t)s.has(e.name)&&r.push(e.expression);return r}(o,i).map((t=>I(s,e,t)));await Promise.all(p);for(const r of o)v(s,{fieldsIndex:e,relationships:t},r);return Array.from(s).sort()}};function v(e,t,s){const{fieldsIndex:r}=t;if(!r||r.fields.length!==e.size)switch(F(e,r,s.label),F(e,r,s.description),s.type){case"field":g(e,r,s.fieldName);break;case"group":s.elements.forEach((s=>v(e,t,s)));break;case"relationship":if(t.relationships){const o=t.relationships.find((e=>e.id===s.relationshipId));o&&g(e,r,o.keyField)}x(e,r,s.orderByFields?.map((e=>e.field)));break;case"text":F(e,r,s.text)}}function S(e){const t=new Set;for(const s of e)if(r(t,s.visibilityExpression),!f(s))if(k(s))o(t,S(s.elements));else if(r(t,s.editableExpression),y(s)){const{requiredExpression:e,valueExpression:r}=s;o(t,[e,r])}return t}function F(e,t,s){x(e,t,E(s))}e([i({type:String,json:{write:!0}})],U.prototype,"description",void 0),e([i({json:{write:!0}})],U.prototype,"elements",void 0),e([n("elements")],U.prototype,"castElements",null),e([p("elements",["formElements"])],U.prototype,"readElements",null),e([l("elements")],U.prototype,"writeElements",null),e([i({type:[u],json:{write:!0}})],U.prototype,"expressionInfos",void 0),e([i({type:Boolean,json:{default:!1,write:!0}})],U.prototype,"preserveFieldValuesWhenHidden",void 0),e([i({type:String,json:{write:!0}})],U.prototype,"title",void 0),U=b=e([m("esri.form.FormTemplate")],U);const T=U;export{T as default};
