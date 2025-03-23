/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{J as e}from"./jsonMap.js";import{property as r}from"../core/accessorSupport/decorators/property.js";function a(a,n={}){const t=a instanceof e?a:new e(a,n),{alwaysWriteDefaults:o,default:s,ignoreUnknown:l=!0,name:i,nonNullable:p,readOnly:u=!1}=n;return r({type:l?t.apiValues:String,json:{type:t.jsonValues,default:s,name:i,read:!u&&{reader:t.read},write:{writer:t.write,alwaysWriteDefaults:o}},nonNullable:p,readOnly:u})}export{a as e};
