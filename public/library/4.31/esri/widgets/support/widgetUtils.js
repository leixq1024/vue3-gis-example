// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/ArrayPool ../../core/handleUtils ../../core/has ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/scheduling ./vnodeCache".split(" "),function(r,P,M,A,t,ia,Q,ja,ka){function R(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,
"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,
"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,
"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,
"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,"float":!1,"float-offset":!1,"flood-color":!1,
"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,
"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,
"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,
"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,
"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,
"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,
"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,
"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}function N(a){a=a||{};var b={},c;for(c in a)b[c]=a[c];a=b;a.whiteList=a.whiteList||H.whiteList;a.onAttr=a.onAttr||H.onAttr;a.onIgnoreAttr=a.onIgnoreAttr||H.onIgnoreAttr;a.safeAttrValue=a.safeAttrValue||H.safeAttrValue;this.options=a}function S(){return{a:["target",
"href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:"autoplay controls crossorigin loop muted preload src".split(" "),b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],
h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls crossorigin loop muted playsinline poster preload src height width".split(" ")}}
function T(a){return a.replace(la,"\x26lt;").replace(ma,"\x26gt;")}function U(a){return a.replace(na,"\x26quot;")}function V(a){return a.replace(oa,'"')}function W(a){return a.replace(pa,function(b,c){return"x"===c[0]||"X"===c[0]?String.fromCharCode(parseInt(c.substr(1),16)):String.fromCharCode(parseInt(c,10))})}function X(a){return a.replace(qa,":").replace(ra," ")}function Y(a){for(var b="",c=0,d=a.length;c<d;c++)b+=32>a.charCodeAt(c)?" ":a.charAt(c);return I.trim(b)}function Z(a){a=V(a);a=W(a);
a=X(a);return a=Y(a)}function aa(a){a=U(a);return a=T(a)}function sa(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}function ta(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c)return"'"===c||'"'===c?b:-1}}function ua(a,b){for(;0<b;b--){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}function ba(a){var b='"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1]?!0:!1;return b?a.substr(1,a.length-2):a}function va(a){var b=J.spaceIndex(a);if(-1===b)return{html:"",closing:"/"===
a[a.length-2]};a=J.trim(a.slice(b+1,-1));(b="/"===a[a.length-1])&&(a=J.trim(a.slice(0,-1)));return{html:a,closing:b}}function wa(a){var b={},c;for(c in a)Array.isArray(a[c])?b[c.toLowerCase()]=a[c].map(function(d){return d.toLowerCase()}):b[c.toLowerCase()]=a[c];return b}function ca(a){a=a||{};var b={},c;for(c in a)b[c]=a[c];a=b;a.stripIgnoreTag&&(a.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),a.onIgnoreTag=u.onIgnoreTagStripAll);
a.whiteList=a.whiteList||a.allowList?wa(a.whiteList||a.allowList):u.whiteList;a.onTag=a.onTag||u.onTag;a.onTagAttr=a.onTagAttr||u.onTagAttr;a.onIgnoreTag=a.onIgnoreTag||u.onIgnoreTag;a.onIgnoreTagAttr=a.onIgnoreTagAttr||u.onIgnoreTagAttr;a.safeAttrValue=a.safeAttrValue||u.safeAttrValue;a.escapeHtml=a.escapeHtml||u.escapeHtml;this.options=a;!1===a.css?this.cssFilter=!1:(a.css=a.css||{},this.cssFilter=new xa(a.css))}var K=function(){K=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=
arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};return K.apply(this,arguments)};A={exports:{}};var q={};t={exports:{}};var x={},ya=/javascript\s*:/gim;x.whiteList=R();x.getDefaultWhiteList=R;x.onAttr=function(a,b,c){};x.onIgnoreAttr=function(a,b,c){};x.safeAttrValue=function(a,b){return ya.test(b)?"":b};var E={indexOf:function(a,b){var c;if(Array.prototype.indexOf)return a.indexOf(b);var d=0;for(c=a.length;d<c;d++)if(a[d]===b)return d;return-1},forEach:function(a,
b,c){var d;if(Array.prototype.forEach)return a.forEach(b,c);var e=0;for(d=a.length;e<d;e++)b.call(c,a[e],e,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(a){return String.prototype.trimRight?a.trimRight():a.replace(/(\s*$)/g,"")}},H=x,za=function(a,b){function c(){if(!e){var l=E.trim(a.slice(g,f)),m=l.indexOf(":");if(-1!==m){var p=E.trim(l.slice(0,m));m=E.trim(l.slice(m+1));p&&(l=b(g,k.length,p,m,l))&&(k+=l+"; ")}}g=f+1}a=E.trimRight(a);
";"!==a[a.length-1]&&(a+=";");for(var d=a.length,e=!1,g=0,f=0,k="";f<d;f++){var h=a[f];if("/"===h&&"*"===a[f+1]){h=a.indexOf("*/",f+2);if(-1===h)break;f=h+1;g=f+1;e=!1}else"("===h?e=!0:")"===h?e=!1:";"===h?e||c():"\n"===h&&c()}return E.trim(k)};N.prototype.process=function(a){a=(a||"").toString();if(!a)return"";var b=this.options,c=b.whiteList,d=b.onAttr,e=b.onIgnoreAttr,g=b.safeAttrValue;return za(a,function(f,k,h,l,m){var p=c[h],n=!1;!0===p?n=p:"function"===typeof p?n=p(l):p instanceof RegExp&&
(n=p.test(l));!0!==n&&(n=!1);if(l=g(h,l)){f={position:k,sourcePosition:f,source:m,isWhite:n};if(n)return n=d(h,l,f),void 0===n||null===n?h+":"+l:n;n=e(h,l,f);if(void 0!==n&&null!==n)return n}})};(function(a,b){b=a.exports=function(d,e){return(new N(e)).process(d)};b.FilterCSS=N;for(var c in x)b[c]=x[c]})(t,t.exports);t=t.exports;var v={indexOf:function(a,b){var c;if(Array.prototype.indexOf)return a.indexOf(b);var d=0;for(c=a.length;d<c;d++)if(a[d]===b)return d;return-1},forEach:function(a,b,c){var d;
if(Array.prototype.forEach)return a.forEach(b,c);var e=0;for(d=a.length;e<d;e++)b.call(c,a[e],e,a)},trim:function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(a){return(a=/\s|\n|\t/.exec(a))?a.index:-1}},F=t.getDefaultWhiteList,I=v,da=new t.FilterCSS,la=/</g,ma=/>/g,na=/"/g,oa=/&quot;/g,pa=/&#([a-zA-Z0-9]*);?/gim,qa=/&colon;?/gim,ra=/&newline;?/gim,L=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,ea=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
fa=/u\s*r\s*l\s*\(.*/gi;q.whiteList=S();q.getDefaultWhiteList=S;q.onTag=function(a,b,c){};q.onIgnoreTag=function(a,b,c){};q.onTagAttr=function(a,b,c){};q.onIgnoreTagAttr=function(a,b,c){};q.safeAttrValue=function(a,b,c,d){c=Z(c);if("href"===b||"src"===b){c=I.trim(c);if("#"===c)return"#";if("http://"!==c.substr(0,7)&&"https://"!==c.substr(0,8)&&"mailto:"!==c.substr(0,7)&&"tel:"!==c.substr(0,4)&&"data:image/"!==c.substr(0,11)&&"ftp://"!==c.substr(0,6)&&"./"!==c.substr(0,2)&&"../"!==c.substr(0,3)&&"#"!==
c[0]&&"/"!==c[0])return""}else if("background"===b){if(L.lastIndex=0,L.test(c))return""}else if("style"===b){ea.lastIndex=0;if(ea.test(c))return"";fa.lastIndex=0;if(fa.test(c)&&(L.lastIndex=0,L.test(c)))return"";!1!==d&&(d=d||da,c=d.process(c))}return c=aa(c)};q.escapeHtml=T;q.escapeQuote=U;q.unescapeQuote=V;q.escapeHtmlEntities=W;q.escapeDangerHtml5Entities=X;q.clearNonPrintableCharacter=Y;q.friendlyAttrValue=Z;q.escapeAttrValue=aa;q.onIgnoreTagStripAll=function(){return""};q.StripTagBody=function(a,
b){"function"!==typeof b&&(b=function(){});var c=!Array.isArray(a),d=[],e=!1;return{onIgnoreTag:function(g,f,k){var h=c?!0:-1!==I.indexOf(a,g);if(h){if(k.isClosing)return d.push([!1!==e?e:k.position,k.position+10]),e=!1,"[/removed]";e||(e=k.position);return"[removed]"}return b(g,f,k)},remove:function(g){var f="",k=0;I.forEach(d,function(h){f+=g.slice(k,h[0]);k=h[1]});return f+=g.slice(k)}}};q.stripCommentTag=function(a){for(var b="",c=0;c<a.length;){var d=a.indexOf("\x3c!--",c);if(-1===d){b+=a.slice(c);
break}b+=a.slice(c,d);c=a.indexOf("--\x3e",d);if(-1===c)break;c+=3}return b};q.stripBlankChar=function(a){a=a.split("");a=a.filter(function(b){b=b.charCodeAt(0);return 127===b?!1:31>=b?10===b||13===b?!0:!1:!0});return a.join("")};q.cssFilter=da;q.getDefaultCSSWhiteList=F;var B={},Aa=/[^a-zA-Z0-9\\_:.-]/gim;B.parseTag=function(a,b,c){var d="",e=0,g=!1,f=!1,k=0,h=a.length,l="",m="";k=0;a:for(;k<h;k++)if(m=a.charAt(k),!1===g)"\x3c"===m&&(g=k);else if(!1===f)if("\x3c"===m)d+=c(a.slice(e,k)),e=g=k;else if("\x3e"===
m)d+=c(a.slice(e,g)),m=a.slice(g,k+1),e=void 0,e=m,l=v.spaceIndex(e),e=-1===l?e.slice(1,-1):e.slice(1,l+1),e=v.trim(e).toLowerCase(),"/"===e.slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),l=e,d+=b(g,d.length,l,m,"\x3c/"===m.slice(0,2)),e=k+1,g=!1;else{if('"'===m||"'"===m){l=1;for(var p=a.charAt(k-l);""===p.trim()||"\x3d"===p;){if("\x3d"===p){f=m;continue a}p=a.charAt(k-++l)}}}else m===f&&(f=!1);e<a.length&&(d+=c(a.substr(e)));return d};B.parseAttr=function(a,b){function c(m,p){m=
v.trim(m);m=m.replace(Aa,"").toLowerCase();1>m.length||(m=b(m,p||""))&&g.push(m)}for(var d=0,e=0,g=[],f=!1,k=a.length,h=0;h<k;h++){var l=a.charAt(h);if(!1===f&&"\x3d"===l)f=a.slice(d,h),d=h+1,e='"'===a.charAt(d)||"'"===a.charAt(d)?d:ta(a,h+1);else{if(!1!==f&&h===e)if(l=a.indexOf(l,h+1),-1===l)break;else{d=v.trim(a.slice(e+1,l));c(f,d);f=!1;h=l;d=h+1;continue}/\s|\n|\t/.test(l)&&(a=a.replace(/\s|\n|\t/g," "),!1===f?(l=sa(a,h),-1===l?(d=v.trim(a.slice(d,h)),c(d),f=!1,d=h+1):h=l-1):(l=ua(a,h-1),-1===
l&&(d=v.trim(a.slice(d,h)),d=ba(d),c(f,d),f=!1,d=h+1)))}}d<a.length&&(!1===f?c(a.slice(d)):c(f,ba(v.trim(a.slice(d)))));return v.trim(g.join(" "))};var xa=t.FilterCSS,u=q,Ba=B.parseTag,Ca=B.parseAttr,J=v;ca.prototype.process=function(a){a=(a||"").toString();if(!a)return"";var b=this.options,c=b.whiteList,d=b.onTag,e=b.onIgnoreTag,g=b.onTagAttr,f=b.onIgnoreTagAttr,k=b.safeAttrValue,h=b.escapeHtml,l=this.cssFilter;b.stripBlankChar&&(a=u.stripBlankChar(a));b.allowCommentTag||(a=u.stripCommentTag(a));
var m=!1;b.stripIgnoreTagBody&&(m=u.StripTagBody(b.stripIgnoreTagBody,e),e=m.onIgnoreTag);a=Ba(a,function(p,n,w,y,Da){p={sourcePosition:p,position:n,isClosing:Da,isWhite:Object.prototype.hasOwnProperty.call(c,w)};n=d(w,y,p);if(void 0!==n&&null!==n)return n;if(p.isWhite){if(p.isClosing)return"\x3c/"+w+"\x3e";p=va(y);var Ea=c[w];n=Ca(p.html,function(C,G){var O=-1!==J.indexOf(Ea,C),z=g(w,C,G,O);if(void 0!==z&&null!==z)return z;if(O)return(G=k(w,C,G,l))?C+'\x3d"'+G+'"':C;z=f(w,C,G,O);if(void 0!==z&&null!==
z)return z});y="\x3c"+w;n&&(y+=" "+n);p.closing&&(y+=" /");return y+"\x3e"}n=e(w,y,p);return void 0!==n&&null!==n?n:h(y)},h);m&&(a=m.remove(a));return a};(function(a,b){function c(e,g){return(new d(g)).process(e)}var d=ca;b=a.exports=c;b.filterXSS=c;b.FilterXSS=d;(function(){for(var e in q)b[e]=q[e];for(var g in B)b[g]=B[g]})();"undefined"!==typeof self&&"undefined"!==typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=a.exports)})(A,A.exports);var D=A.exports,
Fa=function(a){if("object"!==typeof a||null===a||"[object Object]"!==Object.prototype.toString.call(a))return!1;var b=Object.getPrototypeOf(a);if(null===b)return!0;for(;null!==Object.getPrototypeOf(b);)b=Object.getPrototypeOf(b);return Object.getPrototypeOf(a)===b};F=function(){function a(b,c){var d=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],article:["style"],aside:["style"],audio:["autoplay","controls","loop","muted","preload"],b:[],blockquote:["style"],br:[],code:["style"],
dd:["style"],del:["style"],details:["open","style"],div:["align","aria-hidden","aria-label","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],footer:["style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],header:["style"],hr:[],i:[],img:"alt border height src style width".split(" "),li:[],main:["style"],mark:["style"],nav:["style"],ol:[],p:["style"],pre:["style"],section:["style"],source:["media","src",
"type"],span:["aria-hidden","aria-label","style"],strong:[],sub:["style"],summary:["style"],sup:["style"],table:"border cellpadding cellspacing height style width".split(" "),tbody:[],tr:["align","height","style","valign"],td:"align colspan height nowrap rowspan style valign width".split(" "),th:"align colspan height nowrap rowspan style valign width".split(" "),time:["style"],u:[],ul:[],video:"autoplay controls height loop muted poster preload width".split(" ")};this.arcgisCSSWhiteList=K(K({},D.getDefaultCSSWhiteList()),
{"align-items":!0,"align-self":!0,flex:!0,"flex-basis":!0,"flex-direction":!0,"flex-flow":!0,"flex-grow":!0,"flex-shrink":!0,"flex-wrap":!0,float:!0,gap:!0,grid:!0,"grid-area":!0,"grid-auto-columns":!0,"grid-auto-flow":!0,"grid-auto-rows":!0,"grid-column":!0,"grid-column-end":!0,"grid-column-start":!0,"grid-row":!0,"grid-row-end":!0,"grid-row-start":!0,"grid-template":!0,"grid-template-areas":!0,"grid-template-columns":!0,"grid-template-rows":!0,"justify-content":!0,"justify-items":!0,"justify-self":!0,
"line-height":!0,overflow:!0});this.allowedProtocols="http https mailto iform tel flow lfmobile arcgis-navigator arcgis-appstudio-player arcgis-survey123 arcgis-collector arcgis-workforce arcgis-explorer arcgis-trek2there arcgis-quickcapture mspbi comgooglemaps pdfefile pdfehttp pdfehttps boxapp boxemm awb awbs gropen radarscope".split(" ");this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(g,f,k,h){return"a"===g&&"href"===f||("img"===g||"source"===g)&&"src"===f?d.sanitizeUrl(k):
D.safeAttrValue(g,f,k,h)}};this._entityMap={"\x26":"\x26#x38;","\x3c":"\x26#x3C;","\x3e":"\x26#x3E;",'"':"\x26#x22;","'":"\x26#x27;","/":"\x26#x2F;"};if(b&&!c)var e=b;else b&&c?(e=Object.create(this.arcgisFilterOptions),e.css={whiteList:this.arcgisCSSWhiteList},Object.keys(b).forEach(function(g){if("whiteList"===g)e.whiteList=d._extendObjectOfArrays([d.arcgisWhiteList,b.whiteList||{}]);else if("css"===g){var f=b.css.whiteList;null!=f&&b.css instanceof Object&&Object.keys(f).forEach(function(k){return e.css.whiteList[k]=
f[k]})}else e[g]=b[g]})):(e=Object.create(this.arcgisFilterOptions),e.whiteList=this.arcgisWhiteList,e.css={whiteList:this.arcgisCSSWhiteList});this.xssFilterOptions=e;this._xssFilter=new D.FilterXSS(e)}a.prototype.sanitize=function(b,c){void 0===c&&(c={});switch(typeof b){case "number":return isNaN(b)||!isFinite(b)?null:b;case "boolean":return b;case "string":return this._xssFilter.process(b);case "object":return this._iterateOverObject(b,c);default:if(!c.allowUndefined||"undefined"!==typeof b)return null}};
a.prototype.sanitizeUrl=function(b,c){c=(null!==c&&void 0!==c?c:{}).isProtocolRequired;c=void 0===c?!0:c;var d=this._trim(b.substring(0,b.indexOf(":"))),e="/"===b,g=/^#/.test(b),f=d&&-1<this.allowedProtocols.indexOf(d.toLowerCase());return e||g||f?D.escapeAttrValue(b):d||c?"":D.escapeAttrValue("https://".concat(b))};a.prototype.sanitizeHTMLAttribute=function(b,c,d,e){return"function"===typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(b,c,d,e):D.safeAttrValue(b,c,d,e)};
a.prototype.validate=function(b,c){void 0===c&&(c={});c=this.sanitize(b,c);return{isValid:b===c,sanitized:c}};a.prototype.encodeHTML=function(b){var c=this;return String(b).replace(/[&<>"'\/]/g,function(d){return c._entityMap[d]})};a.prototype.encodeAttrValue=function(b){var c=/^[a-zA-Z0-9]$/;return String(b).replace(/[\x00-\xFF]/g,function(d,e){return c.test(d)?d:"\x26#x".concat(Number(b.charCodeAt(e)).toString(16),";")})};a.prototype._extendObjectOfArrays=function(b){var c={};b.forEach(function(d){Object.keys(d).forEach(function(e){Array.isArray(d[e])&&
Array.isArray(c[e])?c[e]=c[e].concat(d[e]):c[e]=d[e]})});return c};a.prototype._iterateOverObject=function(b,c){var d=this;void 0===c&&(c={});try{var e=!1,g=void 0;if(Array.isArray(b))g=b.reduce(function(f,k){var h=d.validate(k,c);if(h.isValid)return f.concat([k]);e=!0;return f.concat([h.sanitized])},[]);else if(Fa(b))g=Object.keys(b).reduce(function(f,k){var h=b[k],l=d.validate(h,c);l.isValid?f[k]=h:(e=!0,f[k]=l.sanitized);return f},{});else return c.allowUndefined&&"undefined"===typeof b?void 0:
null;return e?g:b}catch(f){return null}};a.prototype._trim=function(b){return String.prototype.trim?b.trim():b.replace(/(^\s*)|(\s*$)/g,"")};return a}();A=(()=>{const a=new Map,b=new ResizeObserver(d=>{ka.clearVNodeCache();for(const e of d)a.get(e.target)?.(e)}),c=(d,e,g)=>{a.set(d,e);b.observe(d,g);return M.makeHandle(()=>{b.unobserve(d);a.delete(d)})};return(d,e,g)=>{let f=null;return M.handlesGroup([Q.watch(()=>"function"===typeof d?d():d,k=>{f?.remove();k&&(f=c(k,e,g))},Q.syncAndInitial),M.makeHandle(()=>
f?.remove())])}})();t="dd dl dt h1 h2 h3 h4 h5 h6 sub sup animate animatetransform circle clippath defs ellipse g image line lineargradient marker mask path pattern polygon polyline radialgradient rect stop svg switch symbol text textpath tspan use".split(" ");const Ga=t.reduce((a,b)=>{a[b]=[];return a},{}),ha="align alink alt bgcolor border cellpadding cellspacing class color cols colspan coords d dir face height hspace ismap lang marginheight marginwidth multiple nohref noresize noshade nowrap ref rel rev rows rowspan scrolling shape span summary tabindex title usemap valign value vlink vspace width".split(" ");
F=new F({whiteList:Ga,onTagAttr:(a,b,c)=>{a=`${b}="${c}"`;if(ha.includes(b))return a},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);r.additionalAllowedTags=t;r.classes=function(...a){const b=P.acquire();for(let c=0;c<a.length;c++){const d=a[c],e=typeof d;if("string"===e)b.push(d);else if(Array.isArray(d))b.push.apply(b,d);else if("object"===e)for(const g in d)d[g]&&b.push(g)}a=b.join(" ");P.release(b);return a};r.discardNode=function(a){this[a.getAttribute("data-node-ref")]=null};r.isActivationKey=
function(a){return"Enter"===a||" "===a};r.isRTL=function(a){a=a?.closest("[dir]");return null!==a&&a instanceof HTMLElement&&"rtl"===a.dir||"rtl"===document.dir};r.onResize=A;r.renderingSanitizer=F;r.safeAttrs=ha;r.setFocus=async function(a,b){await ja.waitAnimationFrame(ia.signalFromSignalOrOptions(b));(a="function"===typeof a?a():a)&&("setFocus"in a&&"function"===typeof a.setFocus?await a.setFocus():a instanceof HTMLElement&&a.focus())};r.storeNode=function(a){this[a.getAttribute("data-node-ref")]=
a};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});