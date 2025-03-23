// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./SimpleGeometryCursor","./OperatorGeodeticDensifyByLength","./Geometry"],function(g,h,k,l){class m{getOperatorType(){return 10317}supportsCurves(){return!0}accelerateGeometry(a,b,c){return!1}canAccelerateGeometry(a){return!1}executeMany(a,b,c,d,e,f){return new k.OperatorGeodeticDensifyCursor(a,b,4,c,d,e,f)}execute(a,b,c,d,e,f){a=new h.SimpleGeometryCursor([a]);(b=this.executeMany(a,b,c,d,e,f).next())||l.throwInternalErrorException("null output");return b}}g.OperatorShapePreservingDensify=
m});