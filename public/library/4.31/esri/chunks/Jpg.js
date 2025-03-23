// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(aa,S){var T={exports:{}},W,ea=function(){if(W)return T.exports;W=1;(function(ba){(function(H){H=H();void 0!==H&&(ba.exports=H)})(function(){var H=function(){function L(U){this.message="JPEG error: "+U}L.prototype=Error();L.prototype.name="JpegError";return L.constructor=L}();return function(){function L(){this.decodeTransform=null;this.colorTransform=-1}function U(b,d){for(var l=0,k=[],a,t,e=16;0<e&&!b[e-1];)e--;k.push({children:[],index:0});var f=
k[0],x;for(a=0;a<e;a++){for(t=0;t<b[a];t++){f=k.pop();for(f.children[f.index]=d[l];0<f.index;)f=k.pop();f.index++;for(k.push(f);k.length<=a;)k.push(x={children:[],index:0}),f.children[f.index]=x.children,f=x;l++}a+1<e&&(k.push(x={children:[],index:0}),f.children[f.index]=x.children,f=x)}return k[0].children}function ca(b,d,l,k,a,t,e,f,x){function q(){if(0<u)return u--,h>>u&1;h=b[d++];if(255===h){var m=b[d++];if(m)throw new H("unexpected marker "+(h<<8|m).toString(16));}u=7;return h>>>7}function g(m){for(;;){m=
m[q()];if("number"===typeof m)return m;if("object"!==typeof m)throw new H("invalid huffman sequence");}}function c(m){for(var B=0;0<m;)B=B<<1|q(),m--;return B}function v(m){if(1===m)return 1===q()?1:-1;var B=c(m);return B>=1<<m-1?B:B+(-1<<m)+1}function w(m,B){var E=g(m.huffmanTableDC);E=0===E?0:v(E);m.blockData[B]=m.pred+=E;for(E=1;64>E;){var F=g(m.huffmanTableAC),G=F&15;F>>=4;if(0===G){if(15>F)break;E+=16}else E+=F,m.blockData[B+O[E]]=v(G),E++}}function y(m,B){var E=g(m.huffmanTableDC);E=0===E?0:
v(E)<<x;m.blockData[B]=m.pred+=E}function n(m,B){m.blockData[B]|=q()<<x}function z(m,B){if(0<r)r--;else for(var E=t;E<=e;){var F=g(m.huffmanTableAC),G=F&15;F>>=4;if(0===G){if(15>F){r=c(F)+(1<<F)-1;break}E+=16}else E+=F,m.blockData[B+O[E]]=v(G)*(1<<x),E++}}function C(m,B){for(var E=t,F=0,G;E<=e;){G=O[E];switch(I){case 0:F=g(m.huffmanTableAC);G=F&15;F>>=4;if(0===G)15>F?(r=c(F)+(1<<F),I=4):(F=16,I=1);else{if(1!==G)throw new H("invalid ACn encoding");P=v(G);I=F?2:3}continue;case 1:case 2:m.blockData[B+
G]?m.blockData[B+G]+=q()<<x:(F--,0===F&&(I=2===I?3:0));break;case 3:m.blockData[B+G]?m.blockData[B+G]+=q()<<x:(m.blockData[B+G]=P<<x,I=0);break;case 4:m.blockData[B+G]&&(m.blockData[B+G]+=q()<<x)}E++}4===I&&(r--,0===r&&(I=0))}var A=l.mcusPerLine,p=d,h=0,u=0,r=0,I=0,P,M=k.length,J,Q,R,N;f=l.progressive?0===t?0===f?y:n:0===f?z:C:w;var K=0;l=1===M?k[0].blocksPerLine*k[0].blocksPerColumn:A*l.mcusPerColumn;for(var X,Y;K<l;){var Z=a?Math.min(l-K,a):l;for(J=0;J<M;J++)k[J].pred=0;r=0;if(1===M){var D=k[0];
for(N=0;N<Z;N++)f(D,64*((D.blocksPerLine+1)*(K/D.blocksPerLine|0)+K%D.blocksPerLine)),K++}else for(N=0;N<Z;N++){for(J=0;J<M;J++)for(D=k[J],X=D.h,Y=D.v,Q=0;Q<Y;Q++)for(R=0;R<X;R++)f(D,64*((D.blocksPerLine+1)*((K/A|0)*D.v+Q)+(K%A*D.h+R)));K++}u=0;(D=V(b,d))&&D.invalid&&(console.log("decodeScan - unexpected MCU data, next marker is: "+D.invalid),d=D.offset);D=D&&D.marker;if(!D||65280>=D)throw new H("marker was not found");if(65488<=D&&65495>=D)d+=2;else break}(D=V(b,d))&&D.invalid&&(console.log("decodeScan - unexpected Scan data, next marker is: "+
D.invalid),d=D.offset);return d-p}function da(b,d){b=d.blocksPerLine;for(var l=d.blocksPerColumn,k=new Int16Array(64),a=0;a<l;a++)for(var t=0;t<b;t++){var e=void 0,f=void 0,x=void 0,q=void 0,g=void 0,c=void 0,v=void 0,w=void 0,y=g=c=q=f=e=void 0,n=void 0,z=void 0,C=void 0,A=64*((d.blocksPerLine+1)*a+t),p=k,h=d.quantizationTable,u=d.blockData;if(!h)throw new H("missing required Quantization Table.");for(var r=0;64>r;r+=8)e=u[A+r],w=u[A+r+1],v=u[A+r+2],c=u[A+r+3],g=u[A+r+4],q=u[A+r+5],x=u[A+r+6],f=
u[A+r+7],e*=h[r],0===(w|v|c|g|q|x|f)?(e=5793*e+512>>10,p[r]=e,p[r+1]=e,p[r+2]=e,p[r+3]=e,p[r+4]=e,p[r+5]=e,p[r+6]=e,p[r+7]=e):(w*=h[r+1],v*=h[r+2],c*=h[r+3],g*=h[r+4],q*=h[r+5],x*=h[r+6],f*=h[r+7],C=5793*e+128>>8,z=5793*g+128>>8,n=v,y=x,g=2896*(w-f)+128>>8,f=2896*(w+f)+128>>8,c<<=4,q<<=4,C=C+z+1>>1,z=C-z,e=3784*n+1567*y+128>>8,n=1567*n-3784*y+128>>8,y=e,g=g+q+1>>1,q=g-q,f=f+c+1>>1,c=f-c,C=C+y+1>>1,y=C-y,z=z+n+1>>1,n=z-n,e=2276*g+3406*f+2048>>12,g=3406*g-2276*f+2048>>12,f=e,e=799*c+4017*q+2048>>12,
c=4017*c-799*q+2048>>12,q=e,p[r]=C+f,p[r+7]=C-f,p[r+1]=z+q,p[r+6]=z-q,p[r+2]=n+c,p[r+5]=n-c,p[r+3]=y+g,p[r+4]=y-g);for(h=0;8>h;++h)e=p[h],w=p[h+8],v=p[h+16],c=p[h+24],g=p[h+32],q=p[h+40],x=p[h+48],f=p[h+56],0===(w|v|c|g|q|x|f)?(e=5793*e+8192>>14,e=-2040>e?0:2024<=e?255:e+2056>>4,u[A+h]=e,u[A+h+8]=e,u[A+h+16]=e,u[A+h+24]=e,u[A+h+32]=e,u[A+h+40]=e,u[A+h+48]=e,u[A+h+56]=e):(C=5793*e+2048>>12,z=5793*g+2048>>12,n=v,y=x,g=2896*(w-f)+2048>>12,f=2896*(w+f)+2048>>12,C=(C+z+1>>1)+4112,z=C-z,e=3784*n+1567*y+
2048>>12,n=1567*n-3784*y+2048>>12,y=e,g=g+q+1>>1,q=g-q,f=f+c+1>>1,c=f-c,C=C+y+1>>1,y=C-y,z=z+n+1>>1,n=z-n,e=2276*g+3406*f+2048>>12,g=3406*g-2276*f+2048>>12,f=e,e=799*c+4017*q+2048>>12,c=4017*c-799*q+2048>>12,q=e,e=C+f,f=C-f,w=z+q,x=z-q,v=n+c,q=n-c,c=y+g,g=y-g,e=16>e?0:4080<=e?255:e>>4,w=16>w?0:4080<=w?255:w>>4,v=16>v?0:4080<=v?255:v>>4,c=16>c?0:4080<=c?255:c>>4,g=16>g?0:4080<=g?255:g>>4,q=16>q?0:4080<=q?255:q>>4,x=16>x?0:4080<=x?255:x>>4,f=16>f?0:4080<=f?255:f>>4,u[A+h]=e,u[A+h+8]=w,u[A+h+16]=v,u[A+
h+24]=c,u[A+h+32]=g,u[A+h+40]=q,u[A+h+48]=x,u[A+h+56]=f)}return d.blockData}function V(b,d,l){var k=b.length-1;l=l<d?l:d;if(d>=k)return null;var a=b[d]<<8|b[d+1];if(65472<=a&&65534>=a)return{invalid:null,marker:a,offset:d};for(d=b[l]<<8|b[l+1];!(65472<=d&&65534>=d);){if(++l>=k)return null;d=b[l]<<8|b[l+1]}return{invalid:a.toString(16),marker:d,offset:l}}if(!self||!self.Uint8ClampedArray)return null;var O=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,
14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);L.prototype={parse:function(b){function d(){var h=b[a]<<8|b[a+1];a+=2;return h}function l(){var h=d();h=a+h-2;var u=V(b,h,a);u&&u.invalid&&(console.log("readDataBlock - incorrect length, next marker is: "+u.invalid),h=u.offset);h=b.subarray(a,h);a+=h.length;return h}function k(h){for(var u=Math.ceil(h.samplesPerLine/8/h.maxH),r=Math.ceil(h.scanLines/8/h.maxV),I=0;I<h.components.length;I++){p=
h.components[I];var P=Math.ceil(Math.ceil(h.samplesPerLine/8)*p.h/h.maxH),M=Math.ceil(Math.ceil(h.scanLines/8)*p.v/h.maxV);p.blockData=new Int16Array(64*r*p.v*(u*p.h+1));p.blocksPerLine=P;p.blocksPerColumn=M}h.mcusPerLine=u;h.mcusPerColumn=r}var a=0,t=null,e=null,f=[],x=[],q=[],g=d();if(65496!==g)throw new H("SOI not found");for(g=d();65497!==g;){switch(g){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var c=
l();65504===g&&74===c[0]&&70===c[1]&&73===c[2]&&70===c[3]&&0===c[4]&&(t={version:{major:c[5],minor:c[6]},densityUnits:c[7],xDensity:c[8]<<8|c[9],yDensity:c[10]<<8|c[11],thumbWidth:c[12],thumbHeight:c[13],thumbData:c.subarray(14,14+3*c[12]*c[13])});65518===g&&65===c[0]&&100===c[1]&&111===c[2]&&98===c[3]&&101===c[4]&&(e={version:c[5]<<8|c[6],flags0:c[7]<<8|c[8],flags1:c[9]<<8|c[10],transformCode:c[11]});break;case 65499:g=d()+a-2;for(var v;a<g;){var w=b[a++],y=new Uint16Array(64);if(0===w>>4)for(c=
0;64>c;c++)v=O[c],y[v]=b[a++];else if(1===w>>4)for(c=0;64>c;c++)v=O[c],y[v]=d();else throw new H("DQT - invalid table spec");f[w&15]=y}break;case 65472:case 65473:case 65474:if(n)throw new H("Only single frame JPEGs supported");d();var n={};n.extended=65473===g;n.progressive=65474===g;n.precision=b[a++];n.scanLines=d();n.samplesPerLine=d();n.components=[];n.componentIds={};c=b[a++];for(g=y=w=0;g<c;g++){v=b[a];var z=b[a+1]>>4;var C=b[a+1]&15;w<z&&(w=z);y<C&&(y=C);z=n.components.push({h:z,v:C,quantizationId:b[a+
2],quantizationTable:null});n.componentIds[v]=z-1;a+=3}n.maxH=w;n.maxV=y;k(n);break;case 65476:v=d();for(g=2;g<v;){w=b[a++];y=new Uint8Array(16);for(c=z=0;16>c;c++,a++)z+=y[c]=b[a];C=new Uint8Array(z);for(c=0;c<z;c++,a++)C[c]=b[a];g+=17+z;(0===w>>4?q:x)[w&15]=U(y,C)}break;case 65501:d();var A=d();break;case 65498:d();v=b[a++];c=[];for(g=0;g<v;g++){w=n.componentIds[b[a++]];var p=n.components[w];w=b[a++];p.huffmanTableDC=q[w>>4];p.huffmanTableAC=x[w&15];c.push(p)}g=b[a++];v=b[a++];w=b[a++];g=ca(b,a,
n,c,A,g,v,w>>4,w&15);a+=g;break;case 65535:255!==b[a]&&a--;break;default:if(255===b[a-3]&&192<=b[a-2]&&254>=b[a-2])a-=3;else throw new H("unknown marker "+g.toString(16));}g=d()}this.width=n.samplesPerLine;this.height=n.scanLines;this.jfif=t;this.eof=a;this.adobe=e;this.components=[];for(g=0;g<n.components.length;g++){p=n.components[g];if(t=f[p.quantizationId])p.quantizationTable=t;this.components.push({output:da(n,p),scaleX:p.h/n.maxH,scaleY:p.v/n.maxV,blocksPerLine:p.blocksPerLine,blocksPerColumn:p.blocksPerColumn})}this.numComponents=
this.components.length},_getLinearizedBlockData:function(b,d){var l=this.width/b,k=this.height/d,a,t,e=0,f=this.components.length,x=b*d*f,q=new Uint8ClampedArray(x),g=new Uint32Array(b);for(t=0;t<f;t++){var c=this.components[t];var v=c.scaleX*l;var w=c.scaleY*k;e=t;var y=c.output;var n=c.blocksPerLine+1<<3;for(a=0;a<b;a++)c=0|a*v,g[a]=(c&4294967288)<<3|c&7;for(v=0;v<d;v++)for(c=0|v*w,c=n*(c&4294967288)|(c&7)<<3,a=0;a<b;a++)q[e]=y[c+g[a]],e+=f}if(d=this.decodeTransform)for(t=0;t<x;)for(b=c=0;c<f;c++,
t++,b+=2)q[t]=(q[t]*d[b]>>8)+d[b+1];return q},_isColorConversionNeeded:function(){return this.adobe?!!this.adobe.transformCode:3===this.numComponents?0===this.colorTransform?!1:!0:1===this.colorTransform?!0:!1},_convertYccToRgb:function(b){for(var d,l,k,a=0,t=b.length;a<t;a+=3)d=b[a],l=b[a+1],k=b[a+2],b[a]=d-179.456+1.402*k,b[a+1]=d+135.459-.344*l-.714*k,b[a+2]=d-226.816+1.772*l;return b},_convertYcckToRgb:function(b){for(var d,l,k,a,t=0,e=0,f=b.length;e<f;e+=4)d=b[e],l=b[e+1],k=b[e+2],a=b[e+3],b[t++]=
-122.67195406894+l*(-6.60635669420364E-5*l+4.37130475926232E-4*k-5.4080610064599E-5*d+4.8449797120281E-4*a-.154362151871126)+k*(-9.57964378445773E-4*k+8.17076911346625E-4*d-.00477271405408747*a+1.53380253221734)+d*(9.61250184130688E-4*d-.00266257332283933*a+.48357088451265)+a*(-3.36197177618394E-4*a+.484791561490776),b[t++]=107.268039397724+l*(2.19927104525741E-5*l-6.40992018297945E-4*k+6.59397001245577E-4*d+4.26105652938837E-4*a-.176491792462875)+k*(-7.78269941513683E-4*k+.00130872261408275*d+7.70482631801132E-4*
a-.151051492775562)+d*(.00126935368114843*d-.00265090189010898*a+.25802910206845)+a*(-3.18913117588328E-4*a-.213742400323665),b[t++]=-20.810012546947+l*(-5.70115196973677E-4*l-2.63409051004589E-5*k+.0020741088115012*d-.00288260236853442*a+.814272968359295)+k*(-1.53496057440975E-5*k-1.32689043961446E-4*d+5.60833691242812E-4*a-.195152027534049)+d*(.00174418132927582*d-.00255243321439347*a+.116935020465145)+a*(-3.43531996510555E-4*a+.24165260232407);return b},_convertYcckToCmyk:function(b){for(var d,
l,k,a=0,t=b.length;a<t;a+=4)d=b[a],l=b[a+1],k=b[a+2],b[a]=434.456-d-1.402*k,b[a+1]=119.541-d+.344*l+.714*k,b[a+2]=481.816-d-1.772*l;return b},_convertCmykToRgb:function(b){for(var d,l,k,a,t=0,e=1/255,f=0,x=b.length;f<x;f+=4)d=b[f]*e,l=b[f+1]*e,k=b[f+2]*e,a=b[f+3]*e,b[t++]=255+d*(-4.387332384609988*d+54.48615194189176*l+18.82290502165302*k+212.25662451639585*a-285.2331026137004)+l*(1.7149763477362134*l-5.6096736904047315*k-17.873870861415444*a-5.497006427196366)+k*(-2.5217340131683033*k-21.248923337353073*
a+17.5119270841813)-a*(21.86122147463605*a+189.48180835922747),b[t++]=255+d*(8.841041422036149*d+60.118027045597366*l+6.871425592049007*k+31.159100130055922*a-79.2970844816548)+l*(-15.310361306967817*l+17.575251261109482*k+131.35250912493976*a-190.9453302588951)+k*(4.444339102852739*k+9.8632861493405*a-24.86741582555878)-a*(20.737325471181034*a+187.80453709719578),b[t++]=255+d*(.8842522430003296*d+8.078677503112928*l+30.89978309703729*k-.23883238689178934*a-14.183576799673286)+l*(10.49593273432072*
l+63.02378494754052*k+50.606957656360734*a-112.23884253719248)+k*(.03296041114873217*k+115.60384449646641*a-193.58209356861505)-a*(22.33816807309886*a+180.12613974708367);return b},getData:function(b,d,l){if(4<this.numComponents)throw new H("Unsupported color mode");b=this._getLinearizedBlockData(b,d);if(1===this.numComponents&&l){l=b.length;d=new Uint8ClampedArray(3*l);for(var k=0,a=0;a<l;a++){var t=b[a];d[k++]=t;d[k++]=t;d[k++]=t}return d}if(3===this.numComponents&&this._isColorConversionNeeded())return this._convertYccToRgb(b);
if(4===this.numComponents){if(this._isColorConversionNeeded())return l?this._convertYcckToRgb(b):this._convertYcckToCmyk(b);if(l)return this._convertCmykToRgb(b)}return b}};return L}()})})(T);return T.exports}();S=S.getDefaultExportFromCjs(ea);aa.JpegImage=S});