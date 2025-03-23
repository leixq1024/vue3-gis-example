// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.isAttachmentsColumn=function(a){return!!(a&&"onShowAttachments"in a)};b.isFieldColumn=function(a){return!!(a&&"field"in a)};b.isGroupColumn=function(a){return!!(a&&"columns"in a)};b.isRelationshipColumn=function(a){return!!(a&&"relationshipId"in a)};b.isTemplateObjectWithType=function(a){return null!=a&&"object"===typeof a&&"type"in a&&null!==a.type&&("column"===a.type||"field"===a.type||"group"===a.type||"attachment"===a.type||"relationship"===a.type)};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});