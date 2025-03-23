/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{S as e}from"./converterAPI.js";import{OperatorGeodeticDensifyCursor as r}from"./OperatorGeodeticDensifyByLength.js";import{e as t}from"./Transformation2D.js";class n{getOperatorType(){return 10317}supportsCurves(){return!0}accelerateGeometry(e,r,t){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,n,o,s,a){return new r(e,t,4,n,o,s,a)}execute(r,n,o,s,a,u){const c=new e([r]),p=this.executeMany(c,n,o,s,a,u).next();return p||t("null output"),p}}export{n as O};
