/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var t;!function(t){t.Text="text",t.Number="number",t.Date="date",t.Unsupported="unsupported"}(t||(t={}));const e=(t,e)=>{if(!t)return!0;const{operations:r}=t;switch(e){case"INSERT":return r.supportsAdd;case"UPDATE":case"DELETE":return r.supportsUpdate;default:return!0}};export{t as F,e as c};
