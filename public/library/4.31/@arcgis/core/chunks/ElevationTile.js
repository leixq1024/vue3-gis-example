/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{E as a}from"./ElevationSamplerData.js";class t{constructor(t,l=null){if(this.tile=t,null!=l&&null!=t){const s=t.extent;this._samplerData=new a(l,s)}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(a,t){if(null==this._samplerData)return;const{safeWidth:s,data:e,dx:r,dy:n,y1:i,x0:u}=this._samplerData,{width:o,values:m,noDataValue:h}=e,p=l(n*(i-t),0,s),D=l(r*(a-u),0,s),d=Math.floor(p),f=Math.floor(D),_=d*o+f,c=_+o,x=m[_],V=m[c],g=m[_+1],E=m[c+1];if(x!==h&&V!==h&&g!==h&&E!==h){const a=D-f,t=x+(g-x)*a;return t+(V+(E-V)*a-t)*(p-d)}}}function l(a,t,l){return a<t?t:a>l?l:a}export{t as E};
