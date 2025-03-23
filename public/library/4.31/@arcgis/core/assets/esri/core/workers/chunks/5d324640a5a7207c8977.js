"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[739],{8368:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(32816),s=r(20266),o=r(29298),a=(r(32773),r(69421)),n=r(1985);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.p)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.s)(e,s.L.getLogger(this)))}};return(0,i._)([(0,o.MZ)()],t.prototype,"title",null),(0,i._)([(0,o.MZ)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.$)("esri.layers.mixins.ArcGISService")],t),t}},71361:(e,t,r)=>{r.d(t,{g:()=>o,i:()=>a});var i=r(16699),s=r(69763);function o(e,t){const r=t||e.extent,i=e.width,o=(0,s.g)(r?.spatialReference);return r&&i?r.width/i*o*s.a3*96:0}function a(e,t,r){return function(e,t){return 0===t||(0,i.f)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,i.f)(e,t)||e>t}(e,r)}},59955:(e,t,r)=>{r.d(t,{s:()=>o});var i=r(1985);const s=[];function o(e,t){if((0,i.i)(e.url??""))return!0;const{wkid:r}=t;for(const t of s){if((e.version??0)>=t[0])return!0;if("function"==typeof t[1]&&(t[1]=t[1]()),t[1].has(r))return!1}return!0}s.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=23301;t<=23333;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102934;t<=102955;t++)e.add(t);return e}]),s.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),s.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),s.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),s.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=22619;t<=22621;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);return e}])},90739:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var i=r(32816),s=r(64604),o=r(6407),a=r(65283),n=r(2810),l=r(80959),u=r(29298),d=r(36544),p=(r(32773),r(49877)),y=r(69421),m=r(56273),h=r(41390),c=r(44600),f=r(71361),v=r(69763),g=r(73597),b=r(67315),_=r(78479),x=r(8368),w=r(31315),I=r(4335),S=r(88730),M=r(38424),T=r(46935),O=r(96807),Z=r(44440),E=r(69448),L=r(98238),A=r(23381);function F(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?function(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}(e,t.floorInfo.floorField):null}r(20266);var N=r(35276);const U={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let P=class extends h.T{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=F(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,N.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(U[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=F(this.floors,t),i=(0,A.m)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,i=t=>{t.visible&&(0===r||(0,f.i)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"dynamicLayers",null),(0,i._)([(0,u.MZ)()],P.prototype,"floors",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"hasDynamicLayers",null),(0,i._)([(0,u.MZ)()],P.prototype,"layer",null),(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"layers",null),(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"layerDefs",null),(0,i._)([(0,u.MZ)({type:Number})],P.prototype,"scale",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"version",null),(0,i._)([(0,u.MZ)({readOnly:!0})],P.prototype,"visibleSublayers",null),P=(0,i._)([(0,y.$)("esri.layers.support.ExportImageParameters")],P);var j=r(18385),D=r(86477),J=r(59955),R=r(58194),k=r(50214);r(90740),r(29512),r(99063),r(99924),r(93181),r(13671),r(73067),r(17745),r(81272),r(40499),r(58498),r(91047),r(45371),r(44945),r(73509),r(28276),r(2160),r(7969),r(93804),r(18683),r(64752),r(48844),r(29208),r(16699),r(94345),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(80473),r(54912),r(1985),r(1178),r(82454),r(78281),r(2589),r(47387),r(46728),r(64102),r(12119),r(13201),r(13226),r(47215),r(47812),r(18527),r(23916),r(82408),r(59192),r(69277),r(70580),r(75191),r(24319),r(62092),r(43059),r(89935),r(49813),r(67321),r(24877),r(30011),r(55270),r(95779),r(13262),r(346),r(54483),r(35619),r(52731),r(31175),r(4734),r(88663),r(49755),r(54131),r(19869),r(53065),r(20804),r(87357),r(25946),r(63834),r(19969),r(9207),r(64524),r(72393),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(35902),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(17857),r(82537),r(14896),r(95611),r(98089),r(91366),r(43435),r(73435),r(91381),r(4048),r(85232),r(93471),r(53252),r(34039),r(70061),r(3495),r(97906),r(65023),r(31424),r(74676),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(7182),r(47788),r(19297),r(4157),r(62401),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(54512),r(53103),r(19648),r(42948),r(60027),r(57111),r(75651),r(88614),r(1030),r(15319),r(60785),r(56487),r(6399),r(9498),r(24079),r(38149),r(19681),r(40328),r(84539),r(65299),r(6510),r(38641),r(27281),r(73502),r(3827),r(65174),r(78328),r(54616),r(25018),r(41740),r(49011),r(23787),r(22151),r(79875),r(133),r(83002),r(24330),r(91276),r(62482),r(45476),r(4718),r(69310),r(43682),r(85351),r(54481),r(1535),r(9943),r(89253),r(16677),r(17813),r(3112),r(46626),r(45560),r(56303),r(85890),r(55884),r(32397),r(73609),r(81284),r(44864),r(95637),r(59930),r(45862),r(72762),r(71613),r(17872),r(13978),r(71492),r(68140),r(3952),r(339),r(79281),r(47368),r(48689),r(53564),r(71868),r(73600),r(78860),r(26805),r(13983),r(58296),r(12109),r(8824),r(38343),r(83637),r(58196),r(93049),r(86941),r(1739),r(81618),r(66322),r(78644),r(10224),r(36309),r(60408),r(71895),r(27084),r(61904),r(20978);let V=class extends((0,w.dM)((0,E.e)((0,O.j)((0,Z.I)((0,_.V)((0,x.A)((0,S.q)((0,M.A)((0,n.M)((0,T.J)((0,b.p)((0,I.d)(g.A))))))))))))){constructor(...e){super(...e),this._exportImageParameters=new P({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(l.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;const a=(0,h.n)(i.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers)if(a===h.O.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,N.s)(s,e,h.O.SERVICE)}else if(a>h.O.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,N.s)(s,e.sublayers,(0,h.n)(e.origin))}const n=[],l={writeSublayerStructure:o,...i};let u=o||this.hasVisibleLayersForOrigin(a);s.forEach((e=>{const t=e.write({},l);n.push(t),u=u||"user"===e.originOf("visible")})),n.some((e=>Object.keys(e).length>1))&&(t.layers=n),u&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=i?.floors??null,this._exportImageParameters.scale=(0,f.g)({extent:e,width:t})*s;const o=this._exportImageParameters.toJSON(),a=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},n=e?.spatialReference,l=(0,v._)(n);o.dpi*=s;const u={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:l,imageSR:l,size:t+","+r,...o,...a,...u}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:o}=await this._fetchImage("blob",e,t,r,i);return(0,j.a)(s,o,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.A)(this.url,t),{extent:i,fullExtent:o,timeExtent:a}=r,n=i||o;return{fullExtent:n&&c.A.fromJSON(n),timeExtent:a&&R.A.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,a.l)(this,(e=>{e(this.allSublayers),e(this.subtables)}))}serviceSupportsSpatialReference(e){return(0,J.s)(this,e)}async _fetchImage(e,t,r,i,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},u=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.A("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.A)(u,n);return{data:e,url:u}}catch(e){if((0,l.zf)(e))throw e;throw new o.A("mapimagelayer:image-fetch-error",`Unable to load image: ${u}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(null==e||!this.sublayersSourceJSON[e]?.visibleLayers)}};(0,i._)([(0,u.MZ)((0,k.t)("dateFieldsTimeReference"))],V.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,u.MZ)({type:Boolean})],V.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,u.MZ)()],V.prototype,"dpi",void 0),(0,i._)([(0,u.MZ)()],V.prototype,"gdbVersion",void 0),(0,i._)([(0,u.MZ)()],V.prototype,"imageFormat",void 0),(0,i._)([(0,p.r)("imageFormat",["supportedImageFormatTypes"])],V.prototype,"readImageFormat",null),(0,i._)([(0,u.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],V.prototype,"imageMaxHeight",void 0),(0,i._)([(0,u.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],V.prototype,"imageMaxWidth",void 0),(0,i._)([(0,u.MZ)()],V.prototype,"imageTransparency",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,i._)([(0,u.MZ)({json:{read:!1,write:!1}})],V.prototype,"labelsVisible",void 0),(0,i._)([(0,u.MZ)({type:["ArcGISMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)((0,k.t)("preferredTimeReference"))],V.prototype,"preferredTimeZone",void 0),(0,i._)([(0,u.MZ)()],V.prototype,"sourceJSON",void 0),(0,i._)([(0,u.MZ)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),(0,i._)([(0,m.w)("sublayers",{layers:{type:[D.A]},visibleLayers:{type:[d.I]}})],V.prototype,"writeSublayers",null),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],V.prototype,"type",void 0),(0,i._)([(0,u.MZ)(L.u)],V.prototype,"url",void 0),V=(0,i._)([(0,y.$)("esri.layers.MapImageLayer")],V);const $=V},69448:(e,t,r)=>{r.d(t,{B:()=>y,e:()=>m});var i=r(32816),s=r(29298),o=(r(32773),r(20266),r(49877)),a=r(69421),n=r(82530),l=r(30011),u=r(35619),d=r(31175),p=r(58194);r(36544),r(93181),r(13671),r(40499),r(6407),r(90740),r(91047),r(41390),r(58498),r(45371),r(80959),r(55270),r(50214),r(93804),r(59192),r(54483),r(95779),r(13262),r(346),r(64604),r(29512),r(99063),r(99924),r(18683),r(16699),r(94345),r(44600),r(2160),r(7969),r(69763),r(56273),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(52731),r(4734),r(88663);const y={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:n.e}}},m=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=d.t.fromJSON(r.timeOffsetUnits);return i&&s?new d.A({value:i,unit:s}):null}set timeInfo(e){(0,l.sv)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,s.MZ)({type:p.A,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,s.MZ)({type:d.A})],t.prototype,"timeOffset",void 0),(0,i._)([(0,o.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,s.MZ)({value:null,type:u.A,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,s.MZ)(y)],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,a.$)("esri.layers.mixins.TemporalLayer")],t),t}},35619:(e,t,r)=>{r.d(t,{A:()=>c});var i=r(32816),s=r(52731),o=r(99924),a=r(29298),n=(r(32773),r(20266),r(49877)),l=r(69421),u=r(56273),d=r(58194),p=r(31175),y=r(50214);function m(e,t){return p.A.fromJSON({value:e,unit:t})}r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544),r(4734),r(54483),r(93804),r(59192),r(88663);let h=class extends((0,s.O)(o.oY)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(e,t){return t.timeExtent&&Array.isArray(t.timeExtent)&&2===t.timeExtent.length?d.A.fromArray(t.timeExtent):null}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=e.toArray():t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?m(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?m(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,i._)([(0,a.MZ)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],h.prototype,"cumulative",void 0),(0,i._)([(0,a.MZ)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],h.prototype,"endField",void 0),(0,i._)([(0,a.MZ)({type:d.A,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"fullTimeExtent",void 0),(0,i._)([(0,n.r)("fullTimeExtent",["timeExtent"])],h.prototype,"readFullTimeExtent",null),(0,i._)([(0,u.w)("fullTimeExtent")],h.prototype,"writeFullTimeExtent",null),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],h.prototype,"hasLiveData",void 0),(0,i._)([(0,a.MZ)({type:p.A,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"interval",void 0),(0,i._)([(0,n.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],h.prototype,"readInterval",null),(0,i._)([(0,u.w)("interval")],h.prototype,"writeInterval",null),(0,i._)([(0,a.MZ)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],h.prototype,"startField",void 0),(0,i._)([(0,a.MZ)((0,y.t)("timeReference",!0))],h.prototype,"timeZone",void 0),(0,i._)([(0,a.MZ)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"trackIdField",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],h.prototype,"useTime",void 0),(0,i._)([(0,a.MZ)({type:[Date],json:{read:!1}})],h.prototype,"stops",void 0),h=(0,i._)([(0,l.$)("esri.layers.support.TimeInfo")],h);const c=h},31175:(e,t,r)=>{r.d(t,{A:()=>m,t:()=>p});var i=r(32816),s=r(52731),o=r(99924),a=r(4734),n=r(29298),l=(r(32773),r(20266),r(88663)),u=r(69421),d=r(93804);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544),r(50214),r(59192),r(54483);const p=(0,d.s)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let y=class extends((0,s.O)(o.oY)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,a.c)(this.value,this.unit,"milliseconds")}};(0,i._)([(0,l.e)(p,{nonNullable:!0})],y.prototype,"unit",void 0),(0,i._)([(0,n.MZ)({type:Number,json:{write:!0},nonNullable:!0})],y.prototype,"value",void 0),y=(0,i._)([(0,u.$)("esri.time.TimeInterval")],y);const m=y}}]);