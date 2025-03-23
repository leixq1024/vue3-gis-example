// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(function(){class e{constructor(b,a){this.userId=this.token=this.stateUID=this.ssl=this.refreshToken=this.expires=this.codeVerifier=this.appId=this.storage=this.oAuthInfo=null;this.oAuthInfo=b;this.storage=a;this._init()}isValid(){let b=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)b=!0;else if(this.expires){const a=Date.now();this.expires>a&&(this.expires-a)/1E3>60*this.oAuthInfo.minTimeUntilExpiration&&(b=!0)}return b}save(){if(!this.storage)return!1;
const b=this._load(),a=this.oAuthInfo;if(a?.authNamespace&&a.portalUrl){let d=b[a.authNamespace];d||=b[a.authNamespace]={};this.appId||(this.appId=a.appId);d[a.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(c){return console.warn(c),!1}return!0}return!1}destroy(){const b=this._load(),a=this.oAuthInfo;
if(a?.appId&&a?.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){var d=a.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken";const c=new FormData;c.append("f","json");c.append("auth_token",this.refreshToken||this.token);c.append("client_id",a.appId);c.append("token_type_hint",this.refreshToken?"refresh_token":"access_token");if("function"===typeof navigator.sendBeacon)navigator.sendBeacon(d,c);else{const f=new XMLHttpRequest;f.open("POST",
d);f.send(c)}}if(a?.authNamespace&&a.portalUrl&&this.storage&&(d=b[a.authNamespace])){delete d[a.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(b))}catch(c){console.log(c)}}a&&(this.oAuthInfo=a._oAuthCred=null)}_init(){var b=this._load();const a=this.oAuthInfo;a?.authNamespace&&a.portalUrl&&(b=b[a.authNamespace])&&(b=b[a.portalUrl])&&(this.appId=b.appId,this.codeVerifier=b.codeVerifier,this.expires=b.expires,this.refreshToken=b.refreshToken,this.ssl=b.ssl,this.stateUID=b.stateUID,
this.token=b.token,this.userId=b.userId)}_load(){let b={};if(this.storage){const a=this.storage.getItem("esriJSAPIOAuth");if(a)try{b=JSON.parse(a)}catch(d){console.warn(d)}}return b}}e.prototype.declaredClass="esri.identity.OAuthCredential";return e});