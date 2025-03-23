// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/Logger ../../core/MapUtils ../../intl/date ../../layers/support/fieldUtils ./numberUtils ../visualVariables/support/ColorStop ../../smartMapping/support/utils ../../symbols/support/utils ../../widgets/Legend/support/colorRampUtils ../../widgets/Legend/support/heatmapRampUtils".split(" "),function(l,v,C,x,y,D,r,E,z,m,A,F){async function k(a,c,f){x.getOrCreateMapValue(a,c,()=>[]).push(...f)}async function t(a,c,f){a=x.getOrCreateMapValue(a,c,()=>new Map);
for(const d of f)a.set(d.value,d.color)}function w(a){let c=a.minValue,f=a.maxValue;const d=a.isFirstBreak?"":u.gt+" ";a="percent-of-total"===a.normalizationType?u.pct:"";c=null==c?"":r.format(c);f=null==f?"":r.format(f);return d+c+a+" "+u.ld+" "+f+a}function p(a,c){return"normalizationField"in a&&a.normalizationField?{type:"normalized-field",field:a.field,normalizationField:a.normalizationField}:"field"in a&&a.field?{type:"field",field:a.field}:"valueExpression"in a&&a.valueExpression?{type:"expression",
expression:a.valueExpression,title:a.valueExpressionTitle,returnType:c}:null}const u={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},G={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},H=y.convertDateFormatToIntlOptions("short-date");l.calculateDateFormatInterval=function(a){a=a.map(e=>new Date(e));const c=a.length;let f=Infinity,d=null;for(let e=0;e<c-1;e++){const g=a[e];let h=Infinity,n=null;for(let q=e+1;q<c;q++){var b=a[q];b=g.getFullYear()!==b.getFullYear()&&
"year"||g.getMonth()!==b.getMonth()&&"month"||g.getDate()!==b.getDate()&&"day"||g.getHours()!==b.getHours()&&"hour"||g.getMinutes()!==b.getMinutes()&&"minute"||g.getSeconds()!==b.getSeconds()&&"second"||"millisecond";const B=G[b];B<h&&(h=B,n=b)}h<f&&(f=h,d=n)}return d};l.createClassBreakLabel=w;l.createColorStops=function(a){const {values:c,colors:f,labelIndexes:d,isDate:b}=a;return c.map((e,g)=>{var h=null;if(!d||d.includes(g)){const n=b?y.formatDate(e):r.format(e);n&&(h="",0===g?h=u.lt+" ":g===
c.length-1&&(h=u.gt+" "),h+=n)}return new E({value:e,color:f[g],label:h})})};l.createUniqueValueLabel=function(a){const {value:c,domain:f,fieldInfo:d,dateFormatOptions:b}=a;a=String(c);const e=f&&"codedValues"in f&&f.codedValues?f.getName(c):null;e?a=e:null!=c&&d&&(z.isAnyDateField(d)||D.isTimeOnlyField(d))?a=z.formatAnyDate(c,b??{fieldType:d.type}):"number"===typeof c&&(a=r.format(c));return a};l.dateFormatIntervalOptions={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",
minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};l.getAttribute=p;l.getAttributes=function(a,c){const f=[];if("class-breaks"===a.type||"heatmap"===a.type)f.push(p(a,"number"));else if("unique-value"===a.type){var d=a.authoringInfo;if(d&&"relationship"===d.type){if(d.field1&&d.field2){var b=d.field2.field;const e=d.field2.normalizationField;f.push(p({field:d.field1.field,normalizationField:d.field1.normalizationField}));
f.push(p({field:b,normalizationField:e}))}}else b=a.uniqueValueInfos?.[0],d=null,b?.value&&(b=typeof b.value,"string"===b||"number"===b)&&(d=b),f.push(p(a,d)),[a.field2,a.field3].forEach(e=>e&&f.push({type:"field",field:e}))}else"attributes"in a&&a.attributes?.forEach(e=>f.push(p(e,"number")));(a=c?c(a):"visualVariables"in a?a.visualVariables:null)&&a.forEach(e=>f.push(p(e,"number")));return v.unique(f.filter(v.isSome),(e,g)=>"field"===e.type&&"field"===g.type?e.field===g.field:"normalized-field"===
e.type&&"normalized-field"===g.type?e.field===g.field&&e.normalizationField===g.normalizationField:"expression"===e.type&&"expression"===g.type?e.expression===g.expression:!1)};l.getColorsForRendererValues=async function(a){const c=new Map;if(!a)return c;if("unique-value"!==a.type||a.authoringInfo?.type)if("class-breaks"===a.type){var f=a.classBreakInfos.map(e=>({value:e.minValue,color:m.getColorFromSymbol(e.symbol,null)})).reverse();const {field:d,valueExpression:b}=a;await t(c,d??b,f)}else"simple"===
a.type&&await t(c,"default",[{value:"default",color:m.getColorFromSymbol(a.symbol,null)}]);else{f=(a.uniqueValueInfos??[]).map(q=>({value:q.value,color:m.getColorFromSymbol(q.symbol,null)}));const {field:d,field2:b,field3:e,valueExpression:g,fieldDelimiter:h}=a,n=[d,b,e].filter(Boolean).join(h||"");(n||g)&&await t(c,n||g,f)}"defaultSymbol"in a&&a.defaultSymbol&&await t(c,"default",[{value:"default",color:m.getColorFromSymbol(a.defaultSymbol,null)}]);if("visualVariables"in a&&a.visualVariables){a=
a.visualVariables.filter(d=>"color"===d.type);for(const d of a)a=await A.getRampStops(d)??[],await t(c,d.field||d.valueExpression,a)}return c};l.getColorsFromRenderer=async function(a){const c=new Map;if(!a)return c;if("visualVariables"in a&&a.visualVariables){var f=a.visualVariables.filter(b=>"color"===b.type);for(var d of f)f=(await A.getRampStops(d)??[]).map(b=>b.color),await k(c,d.field||d.valueExpression,f)}if("heatmap"===a.type)d=F.getHeatmapRampStops(a).map(b=>b.color),await k(c,a.field||a.valueExpression,
d);else if("pie-chart"===a.type){for(const b of a.attributes)await k(c,b.field||b.valueExpression,[b.color]);await k(c,"default",[a?.othersCategory?.color,m.getColorFromSymbol(a.backgroundFillSymbol,null)])}else if("dot-density"===a.type){for(const b of a.attributes)await k(c,b.field||b.valueExpression,[b.color]);await k(c,"default",[a.backgroundColor])}else if("unique-value"===a.type)if("predominance"===a.authoringInfo?.type)for(const b of a.uniqueValueInfos??[])await k(c,b.value.toString(),[m.getColorFromSymbol(b.symbol,
null)]);else{d=(a.uniqueValueInfos??[]).map(n=>m.getColorFromSymbol(n.symbol,null));const {field:b,field2:e,field3:g,valueExpression:h}=a;(b||h)&&await k(c,b||h,d);e&&await k(c,e,d);g&&await k(c,g,d)}else if("class-breaks"===a.type){d=a.classBreakInfos.map(g=>m.getColorFromSymbol(g.symbol,null));const {field:b,valueExpression:e}=a;await k(c,b??e,d)}else"simple"===a.type&&await k(c,"default",[m.getColorFromSymbol(a.symbol,null)]);"defaultSymbol"in a&&a.defaultSymbol&&await k(c,"default",[m.getColorFromSymbol(a.defaultSymbol,
null)]);c.forEach((b,e)=>{b=v.unique(b.filter(Boolean),(g,h)=>JSON.stringify(g)===JSON.stringify(h));c.set(e,b)});return c};l.setLabelsForClassBreaks=function(a){const c=a.classBreakInfos,f=a.normalizationType;let d=[];if(c?.length)if("standard-deviation"===a.classificationMethod)C.getLogger("esri.renderers.support.utils").warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");else if(a.round){d.push(c[0].minValue);for(const b of c)d.push(b.maxValue);
d=r.round(d);c.forEach((b,e)=>{b.label=w({minValue:0===e?d[0]:d[e],maxValue:d[e+1],isFirstBreak:0===e,normalizationType:f})})}else c.forEach((b,e)=>{b.label=w({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===e,normalizationType:f})})};l.timelineDateFormatOptions=H;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});