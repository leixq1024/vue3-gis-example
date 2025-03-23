// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../symbols/cim/enums","./definitions"],function(ea,t,ia){function fa(d,c){return d.x===c.x&&d.y===c.y}function L(d,c){d.x=c.y;d.y=-c.x;return d}function I(d,c){d.x=-c.y;d.y=c.x;return d}function ha(d,c){d.x=c.x;d.y=c.y;return d}function ba(d,c){d.x=-c.x;d.y=-c.y;return d}function ca(d){return Math.sqrt(d.x*d.x+d.y*d.y)}function U(d,c,l,D){d.x=c.x*l+c.y*D;d.y=c.x*D-c.y*l;return d}class ja{constructor(d,c,l){this._writeVertex=d;this._writeTriangle=c;this._canUseThinTessellation=
l;this._prevNormal={x:void 0,y:void 0};this._nextNormal={x:void 0,y:void 0};this._textureNormalLeft={x:0,y:1};this._textureNormalRight={x:0,y:-1};this._textureNormal={x:void 0,y:void 0};this._joinNormal={x:void 0,y:void 0};this._inner={x:void 0,y:void 0};this._outer={x:void 0,y:void 0};this._roundStart={x:void 0,y:void 0};this._roundEnd={x:void 0,y:void 0};this._startBreak={x:void 0,y:void 0};this._endBreak={x:void 0,y:void 0};this._innerPrev={x:void 0,y:void 0};this._innerNext={x:void 0,y:void 0};
this._bevelStart={x:void 0,y:void 0};this._bevelEnd={x:void 0,y:void 0};this._bevelMiddle={x:void 0,y:void 0}}tessellate(d,c,l=this._canUseThinTessellation){if(d){var D=d.length;if(!(1>=D)){var A=0;for(let p=1;p<D;p++)fa(d[p],d[A])||++A===p||(d[A]=d[p]);d.length=A+1}}l&&c.halfWidth<ia.thinLineHalfWidthThreshold&&!c.offset?this._tessellateThin(d,c):this._tessellate(d,c)}_tessellateThin(d,c){if(!(2>d.length)){var l=c.wrapDistance||65535;c=c.initialDistance||0;var D=!1,A=d[0].x,p=d[0].y,Y=d.length;for(let J=
1;J<Y;++J){D&&(D=!1,c=0);let e=d[J].x,b=d[J].y;var B=e-A;let a=b-p;var M=Math.sqrt(B*B+a*a);B/=M;a/=M;if(c+M>l){D=!0;var Q=(l-c)/M;M=l-c;e=(1-Q)*A+Q*e;b=(1-Q)*p+Q*b;--J}Q=this._writeVertex(A,p,0,0,B,a,a,-B,0,-1,c);A=this._writeVertex(A,p,0,0,B,a,-a,B,0,1,c);c+=M;M=this._writeVertex(e,b,0,0,B,a,a,-B,0,-1,c);B=this._writeVertex(e,b,0,0,B,a,-a,B,0,1,c);this._writeTriangle(Q,A,M);this._writeTriangle(A,M,B);A=e;p=b}}}_tessellate(d,c){var l=d[d.length-1];const D=fa(d[0],l);if(!(d.length<(D?3:2))){var A=
c.pixelCoordRatio,p=null!=c.capType?c.capType:t.CapType.BUTT,Y=null!=c.joinType?c.joinType:t.JoinType.MITER,B=null!=c.miterLimit?Math.min(c.miterLimit,4):2,M=null!=c.roundLimit?Math.min(c.roundLimit,1.05):1.05,Q=null!=c.halfWidth?c.halfWidth:2,J=!!c.textured,e=null,b=this._prevNormal,a=this._nextNormal,V=-1,R=-1,g=this._joinNormal,Z=this._textureNormalLeft,aa=this._textureNormalRight,x=this._textureNormal,q=-1,r=-1,da=c.wrapDistance||65535,m=c.initialDistance||0,ka=this._writeVertex,la=this._writeTriangle;
c=(C,N,O,W,S,T)=>{C=ka(y,z,u,v,O,W,C,N,S,T,m);0<=q&&0<=r&&0<=C&&la(q,r,C);q=r;return r=C};if(D){var P=d[d.length-2];a.x=l.x-P.x;a.y=l.y-P.y;R=ca(a);a.x/=R;a.y/=R}l=!1;for(let C=0;C<d.length;++C){l&&(l=!1,m=0);P&&(b.x=-a.x,b.y=-a.y,V=R,m+V>da&&(l=!0));l?(e=(da-m)/V,V=da-m,P={x:(1-e)*P.x+e*d[C].x,y:(1-e)*P.y+e*d[C].y},--C):P=d[C];var y=P.x;var z=P.y;var f=0>=C&&!l,n=C===d.length-1;f||(m+=V);(e=n?D?d[1]:null:d[C+1])?(a.x=e.x-y,a.y=e.y-z,R=ca(a),a.x/=R,a.y/=R):(a.x=void 0,a.y=void 0);if(!D){if(f){I(g,
a);var u=g.x;var v=g.y;p===t.CapType.SQUARE&&(c(-a.y-a.x,a.x-a.y,a.x,a.y,0,-1),c(a.y-a.x,-a.x-a.y,a.x,a.y,0,1));p===t.CapType.ROUND&&(c(-a.y-a.x,a.x-a.y,a.x,a.y,-1,-1),c(a.y-a.x,-a.x-a.y,a.x,a.y,-1,1));if(p===t.CapType.ROUND||p===t.CapType.BUTT)c(-a.y,a.x,a.x,a.y,0,-1),c(a.y,-a.x,a.x,a.y,0,1);continue}if(n){L(g,b);u=g.x;v=g.y;if(p===t.CapType.ROUND||p===t.CapType.BUTT)c(b.y,-b.x,-b.x,-b.y,0,-1),c(-b.y,b.x,-b.x,-b.y,0,1);p===t.CapType.SQUARE&&(c(b.y-b.x,-b.x-b.y,-b.x,-b.y,0,-1),c(-b.y-b.x,b.x-b.y,
-b.x,-b.y,0,1));p===t.CapType.ROUND&&(c(b.y-b.x,-b.x-b.y,-b.x,-b.y,1,-1),c(-b.y-b.x,b.x-b.y,-b.x,-b.y,1,1));continue}}var k=void 0;f=-(b.x*a.y-b.y*a.x);.01>Math.abs(f)?0<b.x*a.x+b.y*a.y?(g.x=b.x,g.y=b.y,f=1,k=Number.MAX_VALUE,e=!0):(I(g,a),k=f=1,e=!1):(g.x=(b.x+a.x)/f,g.y=(b.y+a.y)/f,k=ca(g),e=(k-1)*Q*A,e=4<k||e>V&&e>R);u=g.x;v=g.y;var h=Y;switch(Y){case t.JoinType.BEVEL:1.05>k&&(h=t.JoinType.MITER);break;case t.JoinType.ROUND:k<M&&(h=t.JoinType.MITER);break;case t.JoinType.MITER:k>B&&(h=t.JoinType.BEVEL)}switch(h){case t.JoinType.MITER:c(g.x,
g.y,-b.x,-b.y,0,-1);c(-g.x,-g.y,-b.x,-b.y,0,1);if(n)break;J&&(e=l?0:m,q=this._writeVertex(y,z,u,v,a.x,a.y,g.x,g.y,0,-1,e),r=this._writeVertex(y,z,u,v,a.x,a.y,-g.x,-g.y,0,1,e));break;case t.JoinType.BEVEL:f=0>f;var E=void 0;f?(h=q,q=r,r=h,E=Z,h=aa):(E=aa,h=Z);var F=void 0,K=void 0;e?(F=f?I(this._innerPrev,b):L(this._innerPrev,b),K=f?L(this._innerNext,a):I(this._innerNext,a)):F=K=f?ba(this._inner,g):ha(this._inner,g);k=f?L(this._bevelStart,b):I(this._bevelStart,b);c(F.x,F.y,-b.x,-b.y,E.x,E.y);F=c(k.x,
k.y,-b.x,-b.y,h.x,h.y);if(n)break;n=f?I(this._bevelEnd,a):L(this._bevelEnd,a);e?(e=this._writeVertex(y,z,u,v,-b.x,-b.y,0,0,0,0,m),q=this._writeVertex(y,z,u,v,a.x,a.y,K.x,K.y,E.x,E.y,m),r=this._writeVertex(y,z,u,v,a.x,a.y,n.x,n.y,h.x,h.y,m),this._writeTriangle(F,e,r)):(J?(e=this._bevelMiddle,e.x=(k.x+n.x)/2,e.y=(k.y+n.y)/2,U(x,e,-b.x,-b.y),c(e.x,e.y,-b.x,-b.y,x.x,x.y),U(x,e,a.x,a.y),q=this._writeVertex(y,z,u,v,a.x,a.y,e.x,e.y,x.x,x.y,m),r=this._writeVertex(y,z,u,v,a.x,a.y,K.x,K.y,E.x,E.y,m)):(e=q,
q=r,r=e),c(n.x,n.y,a.x,a.y,h.x,h.y));f&&(e=q,q=r,r=e);break;case t.JoinType.ROUND:f=0>f;var H=void 0;f?(h=q,q=r,r=h,h=Z,H=aa):(h=aa,H=Z);var w=f?ba(this._inner,g):ha(this._inner,g);e?(K=f?I(this._innerPrev,b):L(this._innerPrev,b),E=f?L(this._innerNext,a):I(this._innerNext,a)):E=K=w;F=f?L(this._roundStart,b):I(this._roundStart,b);var X=f?I(this._roundEnd,a):L(this._roundEnd,a);K=c(K.x,K.y,-b.x,-b.y,h.x,h.y);F=c(F.x,F.y,-b.x,-b.y,H.x,H.y);if(n)break;n=this._writeVertex(y,z,u,v,-b.x,-b.y,0,0,0,0,m);
e||this._writeTriangle(q,r,n);w=ba(this._outer,w);H=this._writeVertex(y,z,u,v,a.x,a.y,X.x,X.y,H.x,H.y,m);let N,O;if(X=2<k){var G=void 0;k!==Number.MAX_VALUE?(w.x/=k,w.y/=k,G=b.x*w.x+b.y*w.y,G=(k*(G*G-1)+1)/G):G=-1;N=f?L(this._startBreak,b):I(this._startBreak,b);N.x+=b.x*G;N.y+=b.y*G;O=f?I(this._endBreak,a):L(this._endBreak,a);O.x+=a.x*G;O.y+=a.y*G}U(x,w,-b.x,-b.y);k=this._writeVertex(y,z,u,v,-b.x,-b.y,w.x,w.y,x.x,x.y,m);U(x,w,a.x,a.y);w=J?this._writeVertex(y,z,u,v,a.x,a.y,w.x,w.y,x.x,x.y,m):k;G=n;
const W=J?this._writeVertex(y,z,u,v,a.x,a.y,0,0,0,0,m):n;let S=-1,T=-1;X&&(U(x,N,-b.x,-b.y),S=this._writeVertex(y,z,u,v,-b.x,-b.y,N.x,N.y,x.x,x.y,m),U(x,O,a.x,a.y),T=this._writeVertex(y,z,u,v,a.x,a.y,O.x,O.y,x.x,x.y,m));J?X?(this._writeTriangle(G,F,S),this._writeTriangle(G,S,k),this._writeTriangle(W,w,T),this._writeTriangle(W,T,H)):(this._writeTriangle(G,F,k),this._writeTriangle(W,w,H)):X?(this._writeTriangle(n,F,S),this._writeTriangle(n,S,T),this._writeTriangle(n,T,H)):(this._writeTriangle(n,F,k),
this._writeTriangle(n,w,H));e?q=this._writeVertex(y,z,u,v,a.x,a.y,E.x,E.y,h.x,h.y,m):(q=J?this._writeVertex(y,z,u,v,a.x,a.y,E.x,E.y,h.x,h.y,m):K,this._writeTriangle(q,W,H));r=H;f&&(e=q,q=r,r=e)}}}}}ea.LineTessellation=ja;Object.defineProperty(ea,Symbol.toStringTag,{value:"Module"})});