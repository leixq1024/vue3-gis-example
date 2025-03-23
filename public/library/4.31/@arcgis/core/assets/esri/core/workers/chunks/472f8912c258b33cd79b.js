"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5760],{54616:(e,o,t)=>{t.d(o,{a:()=>m,b:()=>c,c:()=>a,d:()=>y}),t(32773);var n=t(54512),l=t(29447),r=t(53103),s=t(19648),i=t(25018);const a=r.A.fromJSON(i.d),c=l.A.fromJSON(i.a),m=n.A.fromJSON(i.b),y=s.A.fromJSON(i.c);r.A.fromJSON(i.e),l.A.fromJSON(i.f),n.A.fromJSON(i.g)},25018:(e,o,t)=>{t.d(o,{a:()=>s,b:()=>i,c:()=>a,d:()=>r,e:()=>c,f:()=>m,g:()=>y,h:()=>n,i:()=>l});const n=[252,146,31,255],l=[153,153,153,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},i={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},m={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},57669:(e,o,t)=>{function n(e){return e=e||globalThis.location.hostname,c.some((o=>null!=e?.match(o)))}function l(e,o){return e?(o=o||globalThis.location.hostname)?null!=o.match(r)||null!=o.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=o.match(s)||null!=o.match(a)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}t.d(o,{a:()=>l,i:()=>n});const r=/^devext\.arcgis\.com$/,s=/^qaext\.arcgis\.com$/,i=/^[\w-]*\.mapsdevext\.arcgis\.com$/,a=/^[\w-]*\.mapsqa\.arcgis\.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,r,s,/^jsapps\.esri\.com$/,i,a]},55884:(e,o,t)=>{t.d(o,{S:()=>S,f:()=>y,m:()=>u,r:()=>b,s:()=>f});var n=t(64604),l=t(6407),r=t(32773),s=t(80959),i=t(99063),a=t(82408),c=t(70580);const m=new Map;function y(e,o,t){return null!=e?.styleUrl?async function(e,o){try{return{data:(await b(e,o)).data,baseUrl:(0,i.nM)(e),styleUrl:e}}catch(e){return(0,s.QP)(e),null}}(e.styleUrl,t):null!=e?.styleName?function(e,o,t){const n=null!=o.portal?o.portal:a.A.getDefault();let r;const s=`${n.url} - ${n.user?.username} - ${e}`,i=m.get(s);if(i)return i;const y=function(e,o,t){return o.load(t).then((()=>{const n=new c.A({disableExtraQuery:!0,query:`owner:${p} AND type:${d} AND typekeywords:"${e}"`});return o.queryItems(n,t)})).then((({results:o})=>{let n=null;const r=e.toLowerCase();if(o&&Array.isArray(o))for(const e of o){const o=e.typeKeywords?.some((e=>e.toLowerCase()===r));if(o&&e.type===d&&e.owner===p){n=e;break}}if(!n)throw new l.A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return n.load(t)}))}(e,n,t).then((e=>(r=e,e.fetchData()))).then((o=>({data:o,baseUrl:r.itemUrl??"",styleName:e})));return m.set(s,y),y}(e.styleName,o,t):Promise.reject(new l.A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function u(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function f(e,o,t=["gltf"]){if("cimRef"===o)return encodeURI(e.cimRef);if(e.formatInfos&&!(0,r.h)("enable-feature:force-wosr"))for(const o of t){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return encodeURI(e.webRef)}function b(e,o){const t={responseType:"json",query:{f:"json"},...o};return(0,n.A)((0,i.S8)(e),t)}const p="esri_en",d="Style",S="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},35760:(e,o,t)=>{t.d(o,{resolveWebStyleSymbol:()=>f});var n=t(4048),l=t(57669),r=t(6407),s=t(99063),i=t(82408),a=t(1178),c=t(78328),m=t(3816),y=t(55884),u=t(71992);function f(e,o,t,f){const b=e.name;return null==b?Promise.reject(new r.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===e.styleName?function(e,o,t){const n=y.S.replaceAll(/\{SymbolName\}/gi,e),l=null!=o.portal?o.portal:i.A.getDefault();return(0,y.r)(n,t).then((e=>{const o=(0,y.m)(e.data);return(0,c.rS)(o,{portal:l,url:(0,s.An)((0,s.nM)(n)),origin:"portal-item"})}))}(b,o,f):(0,y.f)(e,o,f).then((e=>function(e,o,t,f,b,p){const d=null!=t?.portal?t.portal:i.A.getDefault(),S={portal:d,url:(0,s.An)(e.baseUrl),origin:"portal-item"},w=function(e,o){return o.items.find((o=>o.name===e))}(o,e.data);if(!w){const e=`The symbol name '${o}' could not be found`;return Promise.reject(new r.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:o}))}let g=(0,a.f)(b(w,f),S),A=w.thumbnail?.href??null;const h=w.thumbnail?.imageData;(0,l.i)()&&(g=(0,l.a)(g)??"",A=(0,l.a)(A));const C={portal:d,url:(0,s.An)((0,s.nM)(g)),origin:"portal-item"};return(0,y.r)(g,p).then((l=>{const r="cimRef"===f?(0,y.m)(l.data):l.data,s=(0,c.rS)(r,C);if(s&&(0,n.wk)(s)){if(A){const e=(0,a.f)(A,S);s.thumbnail=new u.T({url:e})}else h&&(s.thumbnail=new u.T({url:`data:image/png;base64,${h}`}));e.styleUrl?s.styleOrigin=new m.A({portal:t.portal,styleUrl:e.styleUrl,name:o}):e.styleName&&(s.styleOrigin=new m.A({portal:t.portal,styleName:e.styleName,name:o}))}return s}))}(e,b,o,t,y.s,f)))}t(36544),t(32773),t(20266),t(90740),t(69421),t(40499),t(93181),t(13671),t(91047),t(85232),t(32816),t(29298),t(88663),t(93804),t(49877),t(56273),t(30011),t(41390),t(58498),t(45371),t(80959),t(55270),t(50214),t(59192),t(54483),t(95779),t(13262),t(346),t(64604),t(29512),t(18683),t(16699),t(94345),t(44600),t(2160),t(99924),t(7969),t(69763),t(64752),t(48844),t(29208),t(36533),t(84200),t(97827),t(91695),t(18169),t(20762),t(48402),t(67504),t(92517),t(77037),t(93471),t(35902),t(13226),t(53252),t(34039),t(70061),t(3495),t(97906),t(64524),t(65023),t(31424),t(74676),t(2589),t(53610),t(29447),t(78273),t(49475),t(32368),t(7391),t(22529),t(43534),t(38094),t(67723),t(47239),t(59858),t(63728),t(7182),t(17745),t(81272),t(44945),t(47788),t(19297),t(4157),t(62401),t(52731),t(89322),t(20138),t(53370),t(46946),t(73509),t(28276),t(69277),t(70580),t(75191),t(24319),t(62092),t(80167),t(4478),t(91808),t(7161),t(55586),t(35121),t(92229),t(18344),t(64884),t(23351),t(51222),t(42870),t(67321),t(73067),t(54512),t(53103),t(19648),t(42948),t(23916),t(54616),t(25018)},78328:(e,o,t)=>{t.d(o,{M9:()=>v,oO:()=>x,rS:()=>F});var n=t(4048),l=t(6407),r=t(23916),s=t(47788),i=t(35902),a=t(17745),c=(t(32773),t(87985)),m=t(32368),y=t(55586),u=t(92229),f=t(51222),b=t(42870),p=t(31424),d=t(54616),S=t(25018),w=t(4157),g=t(42948),A=t(29447),h=t(53103),C=t(23351),M=t(54512),L=t(19648),k=t(7182);t(36544),t(20266),t(90740),t(69421),t(40499),t(93181),t(13671),t(91047),t(85232),t(32816),t(29298),t(88663),t(93804),t(49877),t(56273),t(30011),t(41390),t(58498),t(45371),t(80959),t(55270),t(50214),t(59192),t(54483),t(95779),t(13262),t(346),t(64604),t(29512),t(99063),t(99924),t(18683),t(16699),t(94345),t(44600),t(2160),t(7969),t(69763),t(64752),t(48844),t(29208),t(36533),t(84200),t(97827),t(91695),t(18169),t(20762),t(48402),t(67504),t(92517),t(77037),t(93471),t(13226),t(53252),t(34039),t(70061),t(3495),t(97906),t(64524),t(65023),t(74676),t(2589),t(53610),t(78273),t(49475),t(59858),t(63728),t(38094),t(1178),t(35121),t(89322),t(20138),t(67723),t(47239),t(18344),t(64884),t(53370),t(52731),t(46946),t(91808),t(4478),t(7391),t(22529),t(43534),t(81272),t(44945),t(80167),t(7161),t(62401),t(67321),t(73067),t(19297),t(82408),t(73509),t(28276),t(69277),t(70580),t(75191),t(24319),t(62092),t(3816),t(71992),f.A.fromSimpleMarkerSymbol(d.c),y.A.fromSimpleLineSymbol(d.b),b.A.fromSimpleFillSymbol(d.a),new u.A({symbolLayers:new a.A([new m.A({material:{color:S.h},edges:new p.A({size:(0,c.p)(1),color:new i.A(S.i)})})])});const I=new y.A({symbolLayers:new a.A([new w.A({material:{color:new i.A([0,0,0])},size:(0,c.p)(1)})])}),N=new b.A({symbolLayers:new a.A([new m.A({outline:{color:new i.A([0,0,0]),size:(0,c.p)(1)}})])}),$="#useCIMFallbackSymbology()",D={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function v(e,o,t,n){const l=T(e,{},{context:n,isLabelSymbol:!1});null!=l&&(o[t]=l)}function x(e,o,t,n){const l=T(e,{},{context:n,isLabelSymbol:!0});null!=l&&(o[t]=l)}function U(e){return e instanceof s.A||e instanceof g.A}function T(e,o,t){if(null==e)return null;const{context:i,isLabelSymbol:a}=t,c=i?.origin,m=i?.messages;if("web-scene"===c&&!U(e)){const t=function(e,o=D){if(!e)return{symbol:null};const{retainId:t=D.retainId,ignoreDrivers:r=D.ignoreDrivers,hasLabelingContext:s=D.hasLabelingContext,retainCIM:i=D.retainCIM,cimFallbackEnabled:a=D.cimFallbackEnabled}=o;let c=null;if((0,n.wk)(e)||e instanceof g.A)c=e.clone();else if("cim"===e.type){const t=e.data?.symbol?.type;switch(t){case"CIMPointSymbol":c=i?e.clone():f.A.fromCIMSymbol(e);break;case"CIMLineSymbol":a&&(c=I.clone(),o?.logWarning?.($,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":a&&(c=N.clone(),o?.logWarning?.($,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!c)return{error:new l.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})}}else if(e instanceof A.A)c=y.A.fromSimpleLineSymbol(e);else if(e instanceof h.A)c=f.A.fromSimpleMarkerSymbol(e);else if(e instanceof C.A)c=f.A.fromPictureMarkerSymbol(e);else if(e instanceof M.A)c=o.geometryType&&"mesh"===o.geometryType?u.A.fromSimpleFillSymbol(e):b.A.fromSimpleFillSymbol(e);else{if(!(e instanceof L.A))return{error:new l.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};c=s?k.A.fromTextSymbol(e):f.A.fromTextSymbol(e)}return t&&c&&"cim"!==c.type&&(c.id=e.id),r&&(0,n.wk)(c)&&c.symbolLayers.forEach((e=>e.ignoreDrivers=!0)),{symbol:c}}(e,{retainCIM:!0,hasLabelingContext:a});return null!=t.symbol?t.symbol.write(o,i):(m?.push(new l.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:i,error:t.error})),null)}return(0,r.n)(i?.layer)&&function(e){return e instanceof s.A&&("polygon-3d"===e.type||"line-3d"===e.type)}(e)?(m?.push(new l.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported on layers of type '${i?.layer?.declaredClass}'.`,{symbol:e,context:i})),null):("web-map"===c||"portal-item"===c&&!(0,r.n)(i?.layer))&&U(e)?(m?.push(new l.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:i})),null):e.write(o,i)}function F(e,o){return(0,n.Bu)(e,null,o)}}}]);