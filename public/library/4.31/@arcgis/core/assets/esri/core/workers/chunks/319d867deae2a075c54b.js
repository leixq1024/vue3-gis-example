"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9755],{68849:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(32816),n=r(99924),s=r(29298),o=(r(32773),r(20266),r(69421));let l=class extends n.oY{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,s.MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,i._)([(0,o.$)("esri.layers.support.FeatureReduction")],l)},76636:(e,t,r)=>{r.d(t,{c:()=>p,o:()=>i});const i={Base64:0,Hex:1,String:2,Raw:3};function n(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function s(e,t,r,i,s,o){return n((l=n(n(t,e),n(i,o)))<<(a=s)|l>>>32-a,r);var l,a}function o(e,t,r,i,n,o,l){return s(t&r|~t&i,e,t,n,o,l)}function l(e,t,r,i,n,o,l){return s(t&i|r&~i,e,t,n,o,l)}function a(e,t,r,i,n,o,l){return s(t^r^i,e,t,n,o,l)}function u(e,t,r,i,n,o,l){return s(r^(t|~i),e,t,n,o,l)}function p(e,t=i.Hex){const r=t||i.Base64,s=function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,s=-1732584194,p=271733878;for(let t=0;t<e.length;t+=16){const d=r,c=i,f=s,y=p;r=o(r,i,s,p,e[t],7,-680876936),p=o(p,r,i,s,e[t+1],12,-389564586),s=o(s,p,r,i,e[t+2],17,606105819),i=o(i,s,p,r,e[t+3],22,-1044525330),r=o(r,i,s,p,e[t+4],7,-176418897),p=o(p,r,i,s,e[t+5],12,1200080426),s=o(s,p,r,i,e[t+6],17,-1473231341),i=o(i,s,p,r,e[t+7],22,-45705983),r=o(r,i,s,p,e[t+8],7,1770035416),p=o(p,r,i,s,e[t+9],12,-1958414417),s=o(s,p,r,i,e[t+10],17,-42063),i=o(i,s,p,r,e[t+11],22,-1990404162),r=o(r,i,s,p,e[t+12],7,1804603682),p=o(p,r,i,s,e[t+13],12,-40341101),s=o(s,p,r,i,e[t+14],17,-1502002290),i=o(i,s,p,r,e[t+15],22,1236535329),r=l(r,i,s,p,e[t+1],5,-165796510),p=l(p,r,i,s,e[t+6],9,-1069501632),s=l(s,p,r,i,e[t+11],14,643717713),i=l(i,s,p,r,e[t],20,-373897302),r=l(r,i,s,p,e[t+5],5,-701558691),p=l(p,r,i,s,e[t+10],9,38016083),s=l(s,p,r,i,e[t+15],14,-660478335),i=l(i,s,p,r,e[t+4],20,-405537848),r=l(r,i,s,p,e[t+9],5,568446438),p=l(p,r,i,s,e[t+14],9,-1019803690),s=l(s,p,r,i,e[t+3],14,-187363961),i=l(i,s,p,r,e[t+8],20,1163531501),r=l(r,i,s,p,e[t+13],5,-1444681467),p=l(p,r,i,s,e[t+2],9,-51403784),s=l(s,p,r,i,e[t+7],14,1735328473),i=l(i,s,p,r,e[t+12],20,-1926607734),r=a(r,i,s,p,e[t+5],4,-378558),p=a(p,r,i,s,e[t+8],11,-2022574463),s=a(s,p,r,i,e[t+11],16,1839030562),i=a(i,s,p,r,e[t+14],23,-35309556),r=a(r,i,s,p,e[t+1],4,-1530992060),p=a(p,r,i,s,e[t+4],11,1272893353),s=a(s,p,r,i,e[t+7],16,-155497632),i=a(i,s,p,r,e[t+10],23,-1094730640),r=a(r,i,s,p,e[t+13],4,681279174),p=a(p,r,i,s,e[t],11,-358537222),s=a(s,p,r,i,e[t+3],16,-722521979),i=a(i,s,p,r,e[t+6],23,76029189),r=a(r,i,s,p,e[t+9],4,-640364487),p=a(p,r,i,s,e[t+12],11,-421815835),s=a(s,p,r,i,e[t+15],16,530742520),i=a(i,s,p,r,e[t+2],23,-995338651),r=u(r,i,s,p,e[t],6,-198630844),p=u(p,r,i,s,e[t+7],10,1126891415),s=u(s,p,r,i,e[t+14],15,-1416354905),i=u(i,s,p,r,e[t+5],21,-57434055),r=u(r,i,s,p,e[t+12],6,1700485571),p=u(p,r,i,s,e[t+3],10,-1894986606),s=u(s,p,r,i,e[t+10],15,-1051523),i=u(i,s,p,r,e[t+1],21,-2054922799),r=u(r,i,s,p,e[t+8],6,1873313359),p=u(p,r,i,s,e[t+15],10,-30611744),s=u(s,p,r,i,e[t+6],15,-1560198380),i=u(i,s,p,r,e[t+13],21,1309151649),r=u(r,i,s,p,e[t+4],6,-145523070),p=u(p,r,i,s,e[t+11],10,-1120210379),s=u(s,p,r,i,e[t+2],15,718787259),i=u(i,s,p,r,e[t+9],21,-343485551),r=n(r,d),i=n(i,c),s=n(s,f),p=n(p,y)}return[r,i,s,p]}(function(e){const t=[];for(let r=0,i=8*e.length;r<i;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}(e),8*e.length);switch(r){case i.Raw:return s;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,n=4*e.length;i<n;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(s);case i.String:return function(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=8)t.push(String.fromCharCode(e[r>>5]>>>r%32&255));return t.join("")}(s);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let n=0;n<4;n++)8*r+6*n>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-n)&63))}return t.join("")}(s)}}},90197:(e,t,r)=>{r.d(t,{c:()=>y}),r(91381),r(49011),r(43682),r(54481),r(89253),r(60027);var i=r(16677),n=(r(17813),r(32397),r(20266)),s=(r(4048),r(6407)),o=r(32773),l=r(76636),a=r(97511),u=r(32264),p=r(57111),d=r(53103);o.h.add("esri-cluster-arcade-enabled",!0);const c=(0,o.h)("esri-cluster-arcade-enabled"),f=new Set(["simple-line","simple-fill","picture-fill"]);function y(e,t){let r=t.clone();if(!h(r))return r;if(t.getSymbols().some((e=>f.has(e.type)))&&(r=new i.A({symbol:new d.A})),r.authoringInfo||(r.authoringInfo=new p.h),r.authoringInfo.isAutoGenerated=!0,"visualVariables"in r){const t=(r.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));t.forEach((t=>{"rotation"===t.type?t.field?t.field=v(e,t.field,"avg_angle","number"):t.valueExpression&&(t.field=b(e,t.valueExpression,"avg_angle","number"),t.valueExpression=null):t.normalizationField?(t.field=v(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=v(e,t.field,"avg","number"):t.valueExpression&&(t.field=b(e,t.valueExpression,"avg","number"),t.valueExpression=null)})),r.visualVariables=t}switch(r.type){case"simple":break;case"pie-chart":for(const t of r.attributes)t.field?t.field=v(e,t.field,"sum","number"):t.valueExpression&&(t.field=b(e,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":r.field?r.field=v(e,r.field,"mode","string"):r.valueExpression&&(r.field=b(e,r.valueExpression,"mode","string"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=v(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=v(e,r.field,"avg","number"):r.valueExpression&&(r.field=b(e,r.valueExpression,"avg","number"),r.valueExpression=null)}return r}const h=e=>{const t=t=>n.L.getLogger("esri.views.2d.layers.support.clusterUtils").error(new s.A("Unsupported-renderer",t,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const r=e.normalizationType;if("field"!==r)return t(`FeatureReductionCluster does not support a normalizationType of ${r}`),!1}break;case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!c){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function b(e,t,r,i){const n=(0,l.c)(t),s="mode"===r?`cluster_type_${n}`:"sum"===r?`cluster_sum_${n}`:`cluster_avg_${n}`;return e.some((e=>e.name===s))||e.push(new a.A({name:s,isAutoGenerated:!0,onStatisticExpression:new u.A({expression:t,returnType:i}),statisticType:r})),s}function v(e,t,r,i,n){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const s=function(e,t,r){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const e=r,i="field",n=t.toLowerCase()+",norm:"+i+","+e.toLowerCase();return"cluster_avg_"+(0,l.c)(n)}}}(r,t,n);return e.some((e=>e.name===s))||("avg_norm"===r?e.push(new a.A({name:s,isAutoGenerated:!0,onStatisticExpression:new u.A({expression:`$feature.${t} / $feature.${n}`,returnType:i}),statisticType:"avg"})):e.push(new a.A({name:s,isAutoGenerated:!0,onStatisticField:t,statisticType:r}))),s}},29755:(e,t,r)=>{r.d(t,{J:()=>g,f:()=>m});var i=r(32816),n=(r(91381),r(49011),r(43682),r(54481),r(89253),r(60027),r(16677)),s=(r(17813),r(32397),r(20266),r(67321)),o=r(29298),l=(r(32773),r(69421)),a=r(97511),u=r(82530),p=r(68849),d=r(82842),c=r(62959),f=r(74159),y=r(84539),h=r(65299),b=r(90197);r(4048),r(36544),r(85232),r(88663),r(93804),r(90740),r(49877),r(56273),r(30011),r(6407),r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(55270),r(50214),r(59192),r(54483),r(95779),r(13262),r(346),r(64604),r(29512),r(99063),r(99924),r(18683),r(16699),r(94345),r(44600),r(2160),r(7969),r(69763),r(64752),r(48844),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(93471),r(35902),r(13226),r(53252),r(34039),r(70061),r(3495),r(97906),r(64524),r(65023),r(31424),r(74676),r(2589),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(1178),r(7182),r(17745),r(81272),r(44945),r(47788),r(19297),r(82408),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(4157),r(62401),r(52731),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(73067),r(54512),r(53103),r(19648),r(42948),r(56487),r(6399),r(9498),r(24079),r(38149),r(19681),r(40328),r(3827),r(65174),r(78328),r(23916),r(54616),r(25018),r(41740),r(57111),r(75651),r(88614),r(1030),r(15319),r(60785),r(6510),r(38641),r(27281),r(72393),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(17857),r(82537),r(14896),r(95611),r(98089),r(91366),r(80473),r(43435),r(73435),r(73502),r(19869),r(23787),r(22151),r(54912),r(79875),r(133),r(83002),r(24330),r(91276),r(18527),r(62482),r(45476),r(4718),r(69310),r(85351),r(1535),r(9943),r(3112),r(46626),r(45560),r(56303),r(85890),r(55884),r(32264),r(98238),r(49755),r(54131),r(53065),r(20804),r(87357),r(25946),r(63834),r(19969),r(9207),r(58196),r(93049),r(59930),r(45862),r(86941),r(73600),r(81284),r(44864),r(95637),r(72762),r(71613),r(17872),r(78860),r(26805),r(13983),r(58194),r(4734),r(1739),r(81618),r(10224),r(36309),r(76636);const v={key:"type",base:p.F,typeMap:{cluster:c.A,binning:d.A}},m={types:{key:"type",base:p.F,typeMap:{selection:f.A,cluster:c.A,binning:d.A}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:v},"portal-item":{types:v},"web-scene":{types:{key:"type",base:p.F,typeMap:{selection:f.A}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:u.e}}}}},g=e=>{let t=class extends e{constructor(...e){super(...e),this.addHandles((0,s.wB)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),s.OH))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,r){const i=e.clone();return"visualVariables"in i&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.some((e=>"size"===e.type))||i.visualVariables.push(new y.A({field:"cluster_count",stops:[new h.A({value:1}),new h.A({useMinValue:!0,size:t}),new h.A({useMaxValue:!0,size:r})]}))),i}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),r=[new a.A({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(t.fields??[]).filter((e=>!e.isAutoGenerated)),s=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:o,clusterMaxSize:l}=t;if(s){t.fields=[...r,...i];const e=this._withClusterVariable(t.renderer,o,l);return t.effectiveFeatureRenderer=e,t.effectiveClusterRenderer=e,t}if(e.symbol){if(t.fields=[...r,...i],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const s=(0,b.c)(r,this.renderer),a=this._withClusterVariable(s,o,l),u="visualVariables"in a&&a.visualVariables?a.visualVariables:[],p=new n.A({symbol:e.symbol,visualVariables:u});return t.fields=[...r,...i],t.effectiveFeatureRenderer=a,t.effectiveClusterRenderer=p,t}if(!this.renderer)return e;const u=(0,b.c)(r,this.renderer);t.fields=[...r,...i],t.renderer=u;const p=this._withClusterVariable(u,o,l);return t.effectiveFeatureRenderer=p,t.effectiveClusterRenderer=p,t}};return(0,i._)([(0,o.MZ)(m)],t.prototype,"featureReduction",null),t=(0,i._)([(0,l.$)("esri.layers.mixins.FeatureReductionLayer")],t),t}},97511:(e,t,r)=>{r.d(t,{A:()=>d});var i,n=r(32816),s=r(99924),o=r(32773),l=r(29298),a=(r(20266),r(69421)),u=r(32264);r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544),r(52731);let p=i=class extends s.oY{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new i({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,o.o8)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,n._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"alias",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,n._)([(0,l.MZ)({type:u.A,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=i=(0,n._)([(0,a.$)("esri.layers.support.AggregateField")],p);const d=p},32264:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(32816),n=r(52731),s=r(99924),o=r(29298),l=(r(32773),r(20266),r(69421));r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544);let a=class extends((0,n.O)(s.oY)){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};(0,i._)([(0,o.MZ)({type:String,json:{write:!0}})],a.prototype,"expression",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,i._)([(0,o.MZ)({type:String,json:{write:!0}})],a.prototype,"returnType",void 0),a=(0,i._)([(0,l.$)("esri.layers.support.ExpressionInfo")],a);const u=a},82842:(e,t,r)=>{r.d(t,{A:()=>x});var i,n=r(32816),s=r(72393),o=(r(91381),r(49011),r(43682),r(54481),r(89253),r(60027),r(16677),r(17813),r(32397)),l=r(32773),a=r(90740),u=r(87985),p=r(29298),d=r(36544),c=r(88663),f=r(49877),y=r(69421),h=r(56273),b=r(97511),v=r(98238),m=r(58196),g=r(68849),w=r(10224);r(52731),r(41390),r(20266),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(17745),r(81272),r(44945),r(99924),r(48844),r(30011),r(55270),r(50214),r(93804),r(59192),r(54483),r(95779),r(13262),r(346),r(64604),r(29512),r(99063),r(18683),r(16699),r(94345),r(44600),r(2160),r(7969),r(69763),r(64752),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(35902),r(13226),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(17857),r(82537),r(14896),r(95611),r(98089),r(91366),r(80473),r(43435),r(73435),r(4048),r(85232),r(93471),r(53252),r(34039),r(70061),r(3495),r(97906),r(64524),r(65023),r(31424),r(74676),r(2589),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(1178),r(7182),r(47788),r(19297),r(82408),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(4157),r(62401),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(67321),r(73067),r(54512),r(53103),r(19648),r(42948),r(56487),r(6399),r(9498),r(24079),r(38149),r(19681),r(40328),r(84539),r(65299),r(6510),r(38641),r(27281),r(73502),r(19869),r(3827),r(65174),r(78328),r(23916),r(54616),r(25018),r(41740),r(57111),r(75651),r(88614),r(1030),r(15319),r(60785),r(23787),r(22151),r(54912),r(79875),r(133),r(83002),r(24330),r(91276),r(18527),r(62482),r(45476),r(4718),r(69310),r(85351),r(1535),r(9943),r(3112),r(46626),r(45560),r(56303),r(85890),r(55884),r(32264),r(49755),r(54131),r(53065),r(20804),r(87357),r(25946),r(63834),r(19969),r(9207),r(93049),r(59930),r(45862),r(86941),r(73600),r(81284),r(44864),r(95637),r(72762),r(71613),r(17872),r(78860),r(26805),r(13983),r(58194),r(4734),r(1739),r(81618),r(36309);let _=i=class extends g.F{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=(0,u.t)("12px"),this.fields=[],this.renderer=null}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,a.s)(r,i,t)}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?(0,o.L)(i,t,r)??void 0:(0,m.c)(t,r)}clone(){return new i({fields:(0,l.o8)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,l.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,l.o8)(this.popupTemplate),renderer:(0,l.o8)(this.renderer),binType:(0,l.o8)(this.binType),size:this.size})}};(0,n._)([(0,c.e)({binning:"binning"})],_.prototype,"type",void 0),(0,n._)([(0,c.e)({geohash:"geohash",square:"square"}),(0,p.MZ)({type:["geohash","square"]})],_.prototype,"binType",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{write:!0}})],_.prototype,"fixedBinLevel",void 0),(0,n._)([(0,p.MZ)({type:[w.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],_.prototype,"labelingInfo",void 0),(0,n._)([(0,p.MZ)(v.l)],_.prototype,"labelsVisible",void 0),(0,n._)([(0,p.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],_.prototype,"maxScale",void 0),(0,n._)([(0,p.MZ)(v.p)],_.prototype,"popupEnabled",void 0),(0,n._)([(0,p.MZ)({type:s.A,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),(0,n._)([(0,p.MZ)({cast:e=>"auto"===e?e:(0,d.c)((0,u.t)(e))})],_.prototype,"size",void 0),(0,n._)([(0,p.MZ)({type:[b.A],json:{write:!0}})],_.prototype,"fields",void 0),(0,n._)([(0,h.w)("fields")],_.prototype,"writeFields",null),(0,n._)([(0,p.MZ)({types:o.r,json:{write:{target:"drawingInfo.renderer"}}})],_.prototype,"renderer",void 0),(0,n._)([(0,f.r)("renderer",["drawingInfo.renderer"])],_.prototype,"readRenderer",null),_=i=(0,n._)([(0,y.$)("esri.layers.support.FeatureReductionBinning")],_);const x=_},62959:(e,t,r)=>{r.d(t,{A:()=>S});var i,n=r(32816),s=r(72393),o=(r(91381),r(49011),r(43682),r(54481),r(89253),r(60027),r(16677)),l=(r(17813),r(32397)),a=r(4048),u=r(99924),p=r(32773),d=r(90740),c=r(87985),f=r(29298),y=r(36544),h=r(49877),b=r(69421),v=r(56273),m=r(97511),g=r(98238),w=r(58196),_=r(10224);function x(e){return"simple"===e.type&&!e.visualVariables?.length}r(52731),r(41390),r(20266),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(17745),r(81272),r(44945),r(48844),r(30011),r(55270),r(50214),r(93804),r(59192),r(54483),r(95779),r(13262),r(346),r(64604),r(29512),r(99063),r(18683),r(16699),r(94345),r(44600),r(2160),r(7969),r(69763),r(64752),r(29208),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(88663),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(35902),r(13226),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(17857),r(82537),r(14896),r(95611),r(98089),r(91366),r(80473),r(43435),r(73435),r(56487),r(6399),r(9498),r(24079),r(38149),r(19681),r(64524),r(40328),r(84539),r(65299),r(6510),r(38641),r(27281),r(67321),r(73067),r(85232),r(93471),r(53252),r(34039),r(70061),r(3495),r(97906),r(65023),r(31424),r(74676),r(2589),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(1178),r(7182),r(47788),r(19297),r(82408),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(4157),r(62401),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(54512),r(53103),r(19648),r(42948),r(73502),r(19869),r(3827),r(65174),r(78328),r(23916),r(54616),r(25018),r(41740),r(57111),r(75651),r(88614),r(1030),r(15319),r(60785),r(23787),r(22151),r(54912),r(79875),r(133),r(83002),r(24330),r(91276),r(18527),r(62482),r(45476),r(4718),r(69310),r(85351),r(1535),r(9943),r(3112),r(46626),r(45560),r(56303),r(85890),r(55884),r(32264),r(49755),r(54131),r(53065),r(20804),r(87357),r(25946),r(63834),r(19969),r(9207),r(93049),r(59930),r(45862),r(86941),r(73600),r(81284),r(44864),r(95637),r(72762),r(71613),r(17872),r(78860),r(26805),r(13983),r(58194),r(4734),r(1739),r(81618),r(36309);let A=i=class extends u.oY{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,c.t)("80px"),this.clusterMinSize=(0,c.t)("12px"),this.clusterMaxSize=(0,c.t)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?.authoringInfo?.isAutoGenerated?null:i?x(i)?null:(0,l.L)(i,t,r)??void 0:(0,w.c)(t,r)}readSymbol(e,t,r){const i=t.drawingInfo?.renderer;if(i?.authoringInfo?.isAutoGenerated)return null;if(i&&x(i)){const e=(0,l.L)(i,t,r);return e?.symbol}return null}writeSymbol(e,t,r,i){const n=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||n){const r=new o.A({symbol:e});t.drawingInfo={renderer:r.write({},i)}}}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,d.s)(r,i,t)}readFields(e,t,r){return e.filter((e=>!e.isAutoGenerated)).map((e=>m.A.fromJSON(e)))}clone(){return new i({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,p.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,p.o8)(this.fields),maxScale:this.maxScale,renderer:(0,p.o8)(this.renderer),symbol:(0,p.o8)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,p.o8)(this.popupTemplate)})}};(0,n._)([(0,f.MZ)({type:["cluster"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),(0,n._)([(0,f.MZ)({cast:e=>"auto"===e?e:(0,y.c)((0,c.t)(e)),json:{write:!0}})],A.prototype,"clusterRadius",void 0),(0,n._)([(0,f.MZ)({type:Number,cast:c.t,json:{write:!0}})],A.prototype,"clusterMinSize",void 0),(0,n._)([(0,f.MZ)({type:Number,cast:c.t,json:{write:!0}})],A.prototype,"clusterMaxSize",void 0),(0,n._)([(0,f.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],A.prototype,"maxScale",void 0),(0,n._)([(0,f.MZ)(g.p)],A.prototype,"popupEnabled",void 0),(0,n._)([(0,f.MZ)({type:s.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],A.prototype,"popupTemplate",void 0),(0,n._)([(0,f.MZ)({types:l.r,json:{write:{target:"drawingInfo.renderer"}}})],A.prototype,"renderer",void 0),(0,n._)([(0,h.r)("renderer",["drawingInfo.renderer"])],A.prototype,"readRenderer",null),(0,n._)([(0,f.MZ)({types:a.q8})],A.prototype,"symbol",void 0),(0,n._)([(0,h.r)("symbol",["drawingInfo.renderer"])],A.prototype,"readSymbol",null),(0,n._)([(0,v.w)("symbol")],A.prototype,"writeSymbol",null),(0,n._)([(0,f.MZ)({type:[_.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],A.prototype,"labelingInfo",void 0),(0,n._)([(0,f.MZ)(g.l)],A.prototype,"labelsVisible",void 0),(0,n._)([(0,f.MZ)({type:[m.A],json:{write:!0}})],A.prototype,"fields",void 0),(0,n._)([(0,v.w)("fields")],A.prototype,"writeFields",null),(0,n._)([(0,h.r)("fields")],A.prototype,"readFields",null),A=i=(0,n._)([(0,b.$)("esri.layers.support.FeatureReductionCluster")],A);const S=A},74159:(e,t,r)=>{r.d(t,{A:()=>u});var i,n=r(32816),s=r(29298),o=(r(32773),r(20266),r(69421)),l=r(68849);r(36544),r(93181),r(13671),r(40499),r(6407),r(90740),r(91047),r(99924),r(41390),r(58498),r(45371),r(80959);let a=i=class extends l.F{constructor(e){super(e),this.type="selection"}clone(){return new i}};(0,n._)([(0,s.MZ)({type:["selection"]})],a.prototype,"type",void 0),a=i=(0,n._)([(0,o.$)("esri.layers.support.FeatureReductionSelection")],a);const u=a}}]);