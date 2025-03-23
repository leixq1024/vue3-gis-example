/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{a as t,f as e}from"./maybe.js";import{throwIfNotAbortError as s,throwIfAbortError as i,isAbortError as r,eachAlways as a}from"../core/promiseUtils.js";import{addQueryParameters as n}from"../core/urlUtils.js";import{open as h}from"../core/workers/workers.js";import{a as o,B as l}from"./enums3.js";import{R as c}from"./Rect.js";import{d as u,T as d,U as p}from"./enums.js";import{a as f,T as g}from"./Texture.js";import _ from"../request.js";import{P as y}from"./pbf.js";import{p as m}from"../core/lang.js";import{r as w}from"./rasterizingUtils.js";import{T as b}from"./TileKey2.js";import{e as I,g as x,r as S,d as D}from"./mat3.js";import{c as A}from"./mat3f32.js";import{T as M}from"./TileStrategy.js";import{d as P}from"./RenderableTile.js";import{B as R}from"./BufferObject.js";import{V as v}from"./VertexArrayObject.js";import{f as O}from"./config.js";import{T as L}from"./TiledDisplayObject.js";import T from"../layers/support/TileInfo.js";class C{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new c(0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new c;let s=null,i=-1;for(let r=0;r<this._free.length;++r){const a=this._free[r];t<=a.width&&e<=a.height&&(null===s||a.y<=s.y&&a.x<=s.x)&&(s=a,i=r)}return null===s?new c:(this._free.splice(i,1),s.width<s.height?(s.width>t&&this._free.push(new c(s.x+t,s.y,s.width-t,e)),s.height>e&&this._free.push(new c(s.x,s.y+e,s.width,s.height-e))):(s.width>t&&this._free.push(new c(s.x+t,s.y,s.width-t,s.height)),s.height>e&&this._free.push(new c(s.x,s.y+e,t,s.height-e))),new c(s.x,s.y,t,e))}release(t){for(let e=0;e<this._free.length;++e){const s=this._free[e];if(s.y===t.y&&s.height===t.height&&s.x+s.width===t.x)s.width+=t.width;else if(s.x===t.x&&s.width===t.width&&s.y+s.height===t.y)s.height+=t.height;else if(t.y===s.y&&t.height===s.height&&t.x+t.width===s.x)s.x=t.x,s.width+=t.width;else{if(t.x!==s.x||t.width!==s.width||t.y+t.height!==s.y)continue;s.y=t.y,s.height+=t.height}this._free.splice(e,1),this.release(t)}this._free.push(t)}}class k{constructor(t,e,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=e,this._glyphSource=s,this._binPack=new C(t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(t,e){const s=[],i=this._glyphSource,r=new Set,a=1/256;for(const t of e){const e=Math.floor(t*a);r.add(e)}const n=[];return r.forEach((e=>{const s=t+e;if(this._rangePromises.has(s))n.push(this._rangePromises.get(s));else{const r=i.getRange(t,e).then((()=>{this._rangePromises.delete(s)}),(()=>{this._rangePromises.delete(s)}));this._rangePromises.set(s,r),n.push(r)}})),Promise.all(n).then((()=>{let r=this._glyphIndex[t];r||(r={},this._glyphIndex[t]=r);for(const a of e){const e=r[a];if(e){s[a]={sdf:!0,rect:e.rect,metrics:e.metrics,page:e.page,code:a};continue}const n=i.getGlyph(t,a);if(!n?.metrics)continue;const h=n.metrics;let o;if(0===h.width)o=new c(0,0,0,0);else{const t=3,e=h.width+2*t,s=h.height+2*t;let i=e%4?4-e%4:4,r=s%4?4-s%4:4;1===i&&(i=5),1===r&&(r=5),o=this._binPack.allocate(e+i,s+r),o.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new C(this.width-4,this.height-4),o=this._binPack.allocate(e+i,s+r));const a=this._glyphData[this._currentPage],l=n.bitmap;let c,u;if(l)for(let t=0;t<s;t++){c=e*t,u=this.width*(o.y+t+1)+o.x;for(let t=0;t<e;t++)a[u+t+1]=l.at(c+t)}}r[a]={rect:o,metrics:h,tileIDs:null,page:this._currentPage},s[a]={sdf:!0,rect:o,metrics:h,page:this._currentPage,code:a},this._dirties[this._currentPage]=!0}return s}))}removeGlyphs(t){for(const e in this._glyphIndex){const s=this._glyphIndex[e];if(!s)continue;let i;for(const e in s)if(i=s[e],i.tileIDs.delete(t),0===i.tileIDs.size){const t=this._glyphData[i.page],r=i.rect;let a,n;for(let e=0;e<r.height;e++)for(a=this.width*(r.y+e)+r.x,n=0;n<r.width;n++)t[a+n]=0;delete s[e],this._dirties[i.page]=!0}}}bind(t,e,s,i=0){if(!this._textures[s]){const e=new f;e.pixelFormat=u.ALPHA,e.wrapMode=d.CLAMP_TO_EDGE,e.width=this.width,e.height=this.height,this._textures[s]=new g(t,e,new Uint8Array(this.width*this.height))}const r=this._textures[s];r.setSamplingMode(e),this._dirties[s]&&r.setData(this._glyphData[s]),t.bindTexture(r,i),this._dirties[s]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0}}class U{constructor(t){if(this._metrics=[],!t)return void(this._allBitmaps=null);const e=new Map;let s=0;for(;t.next();)switch(t.tag()){case 1:{const i=t.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let r,a,n,h,o,l,c;for(;t.next();)switch(t.tag()){case 1:r=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:n=t.getUInt32();break;case 4:h=t.getUInt32();break;case 5:o=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:c=t.getUInt32();break;default:t.skip()}if(t.release(),r){const t=a?.length??0;this._metrics[r]={width:n,height:h,left:o,top:l,advance:c,startOffset:s,length:t},e.set(r,a),s+=t}break}default:i.skip()}i.release();break}default:t.skip()}const i=new Uint8Array(s),r=this._metrics;for(const[t,s]of e){const{startOffset:e,length:a}=r[t];if(s)for(let t=0;t<a;++t)i[e+t]=s[t]}this._allBitmaps=i}getMetrics(t){return this._metrics[t]}getBitmap(t){if(!this._allBitmaps)return;const e=this._metrics[t];if(void 0===e)return;const{startOffset:s,length:i}=e;return 0!==i?new E(this._allBitmaps,s,i):void 0}}class B{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class z{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(t,e){const s=this._getFontStack(t);if(s.getRange(e))return Promise.resolve();const i=256*e,r=i+255;if(this._baseURL){const a=this._baseURL.replace("{fontstack}",t).replace("{range}",i+"-"+r);return _(a,{responseType:"array-buffer"}).then((t=>{s.addRange(e,new U(new y(new Uint8Array(t.data),new DataView(t.data))))})).catch((()=>{s.addRange(e,new U)}))}return s.addRange(e,new U),Promise.resolve()}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const i=Math.floor(e/256),r=s.getRange(i);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new B),e}}class E{constructor(t,e,s){this._array=t,this._start=e,this.length=s}at(t){return 0<=t&&t<this.length?this._array[this._start+t]:void 0}}class V{constructor(t,e,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,e<=0&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=e,s>0&&(this._maxItemSize=s),this._binPack=new C(t-4,e-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(const t of this._textures)t&&t.dispose();this._textures.length=0}getWidth(t){return t>=this._size.length?-1:this._size[t][0]}getHeight(t){return t>=this._size.length?-1:this._size[t][1]}getPageSize(t){return t>=this._size.length?null:this._size[t]}setSpriteSource(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new C(this._pageWidth-4,this._pageHeight-4);const t=Math.floor(this._pageWidth),e=Math.floor(this._pageHeight),s=new Uint32Array(t*e);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t}getSpriteItem(t,e=!1){let s,i,r=this._mosaicRects[t];if(r)return r;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(t&&t.startsWith("dasharray-")?([s,i]=this._rasterizeDash(t),e=!0):s=this._sprites.getSpriteInfo(t),!s?.width||!s.height||s.width<0||s.height<0)return null;const a=s.width,n=s.height,[h,o,l]=this._allocateImage(a,n);return h.width<=0?null:(this._copy(h,s,o,l,e,i),r={type:"sprite",rect:h,width:a,height:n,sdf:s.sdf,simplePattern:!1,rasterizationScale:s.pixelRatio,page:o},this._mosaicRects[t]=r,r)}getSpriteItems(t){const e={};for(const s of t)e[s.name]=this.getSpriteItem(s.name,s.repeat);return e}getMosaicItemPosition(t,e){const s=this.getSpriteItem(t,e),i=s?.rect;if(!i)return null;i.width=s.width,i.height=s.height;const r=s.width,a=s.height;return{tl:[i.x+2,i.y+2],br:[i.x+2+r,i.y+2+a],page:s.page}}bind(t,e,s=0,i=0){if(s>=this._size.length||s>=this._mosaicsData.length)return;if(!this._textures[s]){const e=new f;e.wrapMode=d.CLAMP_TO_EDGE,e.width=this._size[s][0],e.height=this._size[s][1],this._textures[s]=new g(t,e,new Uint8Array(this._mosaicsData[s].buffer))}const r=this._textures[s];r.setSamplingMode(e),this._dirties[s]&&r.setData(new Uint8Array(this._mosaicsData[s].buffer)),t.bindTexture(r,i),this._dirties[s]=!1}static _copyBits(t,e,s,i,r,a,n,h,o,l,c){let u=i*e+s,d=h*a+n;if(c){d-=a;for(let n=-1;n<=l;n++,u=((n+l)%l+i)*e+s,d+=a)for(let e=-1;e<=o;e++)r[d+e]=t[u+(e+o)%o]}else for(let s=0;s<l;s++){for(let e=0;e<o;e++)r[d+e]=t[u+e];u+=e,d+=a}}_copy(t,e,s,i,r,a){if(!this._sprites||"loaded"!==this._sprites.loadStatus||s>=this._mosaicsData.length)return;const n=new Uint32Array(a?a.buffer:this._sprites.image.buffer),h=this._mosaicsData[s],o=a?e.width:this._sprites.width;V._copyBits(n,o,e.x,e.y,h,i[0],t.x+2,t.y+2,e.width,e.height,r),this._dirties[s]=!0}_allocateImage(t,e){t+=2,e+=2;const s=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<s){const s=new c(0,0,t,e);return this._mosaicsData.push(new Uint32Array(t*e)),this._dirties.push(!0),this._size.push([t,e]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[t,e]]}let i=t%4?4-t%4:4,r=e%4?4-e%4:4;1===i&&(i=5),1===r&&(r=5);const a=this._binPack.allocate(t+i,e+r);return a.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new C(this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,e)):[a,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(t){const e=t.match(/\[(.*?)\]/);if(!e)return null;const s=e[1].split(",").map(Number),i=t.slice(t.lastIndexOf("-")+1),[r,a,n]=w(s,i);return[{x:0,y:0,width:a,height:n,sdf:!0,pixelRatio:1},new Uint8Array(r.buffer)]}}class j{constructor(t,e,s,i){this._layer=t,this._styleRepository=e,this.devicePixelRatio=s,this._sourceDataMaxLOD=i,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic?.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=t(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then((()=>this._spriteMosaic))}get glyphMosaic(){return this._glyphMosaic}async start(t){this._requestSprite(t);const e=this._layer.currentStyleInfo.glyphsUrl,i=new z(e?n(e,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new k(1024,1024,i),this._broadcastPromise=h("WorkerTileHandler",{client:this,schedule:t.schedule,signal:t.signal}).then((e=>{if(this._layer&&(this._connection?.close(),this._connection=e,this._layer&&!this._connection.closed)){const i=e.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},t);Promise.all(i).catch((t=>s(t)))}}))}_requestSprite(t){this._spriteSourceAbortController?.abort();const e=new AbortController;this._spriteSourceAbortController=e;const s=t?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,s&&(this._inputSignalEventListener=function(t){return()=>t.abort()}(e),s.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:r}=e,a={...t,signal:r};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,a),this._spriteSourcePromise.then((t=>{i(r),this._spriteMosaic=new V(1024,1024,250),this._spriteMosaic.setSpriteSource(t)}))}async updateStyle(t){const e=[];for(const s of t)s.type===o.SPRITES_CHANGED?e.push({type:o.SPRITES_CHANGED,data:{spriteSource:null}}):e.push(s);return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(t){const e=new V(1024,1024,250);return e.setSpriteSource(t),this._spriteMosaic=e,this._spriteSourcePromise=Promise.resolve(t),this._spriteSourceAbortController=null,e}async setStyle(t,e,s){await this._broadcastPromise,this._styleRepository=t,this._sourceDataMaxLOD=s,this._requestSprite();const i=new z(this._layer.currentStyleInfo.glyphsUrl?n(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new k(1024,1024,i),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:e,sourceDataMaxLOD:this._sourceDataMaxLOD})),this._broadcastPromise}async fetchTileData(t,e){const s=await this._getRefKeys(t,e);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),s,e)}async fetchTilePBFs(t){const e=Object.keys(this._layer.sourceNameToSource),s={},i=await this._getRefKeys(t,s),r=[],a=[];for(let t=0;t<i.length;t++)if(null==i[t].value||null==e[t])a.push(null);else{const n=i[t].value,h=this._getTilePayload(n,e[t],s);h.then((t=>{r.push({...t,key:n})})),a.push(h)}return Promise.all(a).then((()=>r))}async parseTileData(t,e){const s=t&&t.data;if(!s)return null;const{sourceName2DataAndRefKey:i,transferList:r}=s;return 0===Object.keys(i).length?null:this._broadcastPromise.then((()=>this._connection.invoke("createTileAndParse",{key:t.key.id,sourceName2DataAndRefKey:i,styleLayerUIDs:t.styleLayerUIDs},{...e,transferList:r})))}async getSprites(t){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(t)}getGlyphs(t){return this._glyphMosaic.getGlyphItems(t.font,t.codePoints)}async _getTilePayload(t,e,s){const i=b.pool.acquire(t.id),a=this._layer.sourceNameToSource[e],{level:n,row:h,col:o}=i;b.pool.release(i);try{return{protobuff:await a.requestTile(n,h,o,s),sourceName:e}}catch(t){if(r(t))throw t;return{protobuff:null,sourceName:e}}}async _getRefKeys(t,e){const s=this._layer.sourceNameToSource,i=new Array;for(const r in s){const a=s[r].getRefKey(t,e);i.push(a)}return a(i)}_getSourcesData(t,e,s){const i=[];for(let r=0;r<e.length;r++)if(null==e[r].value||null==t[r])i.push(null);else{const a=e[r].value,n=this._getTilePayload(a,t[r],s);i.push(n)}return a(i).then((t=>{const s={},i=[];for(let r=0;r<t.length;r++){const a=t[r].value;if(a&&a.protobuff&&a.protobuff.byteLength>0){const t=e[r].value.id;s[a.sourceName]={refKey:t,protobuff:a.protobuff},i.push(a.protobuff)}}return{sourceName2DataAndRefKey:s,transferList:i}}))}}class W{constructor(t,e){this.layerUIDs=[],this.isDestroyed=!1,this._data=t;let s=1;const i=new Uint32Array(t);this.layerUIDs=[];const r=i[s++];for(let t=0;t<r;t++)this.layerUIDs[t]=i[s++];this.bufferDataOffset=s,e&&(this.layer=e.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return null==this._data}get offset(){return this.bufferDataOffset}get data(){return this._data}destroy(){this.isDestroyed||(this.doDestroy(),this._data=null,this.isDestroyed=!0)}prepareForRendering(t){null!=this._data&&(this.doPrepareForRendering(t,this._data,this.bufferDataOffset),this._data=null)}}class F extends W{constructor(t,e){super(t,e),this.type=l.LINE,this.lineIndexStart=0,this.lineIndexCount=0;const s=new Uint32Array(t);let i=this.bufferDataOffset;this.lineIndexStart=s[i++],this.lineIndexCount=s[i++];const r=s[i++];if(r>0){this.patternMap=new Map;for(let t=0;t<r;t++){const t=s[i++],e=s[i++],r=s[i++];this.patternMap.set(t,[e,r])}}this.bufferDataOffset=i}get usedMemory(){return(this.data?.byteLength??0)+(this.vao?.usedMemory??0)}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){this.vao=e(this.vao)}doPrepareForRendering(t,e,s){const i=new Uint32Array(e),r=new Int32Array(i.buffer),a=i[s++],n=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,a));s+=a;const h=i[s++],o=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,h));s+=h;const l=this.layer.lineMaterial;this.vao=new v(t,l.getAttributeLocations(),l.getLayoutInfo(),new Map([["geometry",n]]),o)}}class H extends W{constructor(t,e){super(t,e),this.type=l.FILL,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const s=new Uint32Array(t);let i=this.bufferDataOffset;this.fillIndexStart=s[i++],this.fillIndexCount=s[i++],this.outlineIndexStart=s[i++],this.outlineIndexCount=s[i++];const r=s[i++];if(r>0){this.patternMap=new Map;for(let t=0;t<r;t++){const t=s[i++],e=s[i++],r=s[i++];this.patternMap.set(t,[e,r])}}this.bufferDataOffset=i}get usedMemory(){return(this.data?.byteLength??0)+(this.fillVAO?.usedMemory??0)+(this.outlineVAO?.usedMemory??0)}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return(this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){this.fillVAO=e(this.fillVAO),this.outlineVAO=e(this.outlineVAO)}doPrepareForRendering(t,e,s){const i=new Uint32Array(e),r=new Int32Array(i.buffer),a=i[s++],n=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,a));s+=a;const h=i[s++],o=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,h));s+=h;const l=i[s++],c=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,l));s+=l;const u=i[s++],d=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,u));s+=u;const f=this.layer,g=f.fillMaterial,_=f.outlineMaterial;this.fillVAO=new v(t,g.getAttributeLocations(),g.getLayoutInfo(),new Map([["geometry",n]]),o),this.outlineVAO=new v(t,_.getAttributeLocations(),_.getLayoutInfo(),new Map([["geometry",c]]),d)}}class N extends W{constructor(t,e,s){super(t,e),this.type=l.SYMBOL,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const i=new Uint32Array(t),r=new Int32Array(t),a=new Float32Array(t);let n=this.bufferDataOffset;this.isIconSDF=!!i[n++];const h=i[n++],o=i[n++],c=i[n++],u=new b(h,o,c,0),d=i[n++];for(let t=0;t<d;t++){const t=i[n++],e=i[n++],s=i[n++];this.iconPerPageElementsMap.set(t,[e,s])}const p=i[n++];for(let t=0;t<p;t++){const t=i[n++],e=i[n++],s=i[n++];this.glyphPerPageElementsMap.set(t,[e,s])}const f=i[n++],g=i[n++];this.iconOpacity=new Int32Array(f),this.textOpacity=new Int32Array(g),n=P(i,r,a,n,this.symbols,s,u),this.bufferDataOffset=n}get usedMemory(){return(this.data?.byteLength??0)+(this.iconVAO?.usedMemory??0)+(this.textVAO?.usedMemory??0)+m(this.iconOpacity)+m(this.textOpacity)}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let t=0;for(const e of this.iconPerPageElementsMap.values())t+=e[1];for(const e of this.glyphPerPageElementsMap.values())t+=e[1];return t/3}doDestroy(){this.iconVAO=e(this.iconVAO),this.textVAO=e(this.textVAO)}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const t=this.iconOpacity,e=this.iconVAO.vertexBuffers.get("opacity");t.length>0&&t.byteLength===e.usedMemory&&e.setSubData(t,0,0,t.length);const s=this.textOpacity,i=this.textVAO.vertexBuffers.get("opacity");s.length>0&&s.byteLength===i.usedMemory&&i.setSubData(s,0,0,s.length)}doPrepareForRendering(t,e,s){const i=new Uint32Array(e),r=new Int32Array(i.buffer),a=i[s++],n=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,a));s+=a;const h=i[s++],o=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,h));s+=h;const l=i[s++],c=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,l));s+=l;const u=i[s++],d=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,u));s+=u;const f=R.createVertex(t,p.STATIC_DRAW,this.iconOpacity.buffer),g=R.createVertex(t,p.STATIC_DRAW,this.textOpacity.buffer),_=this.layer,y=_.iconMaterial,m=_.textMaterial;this.iconVAO=new v(t,y.getAttributeLocations(),y.getLayoutInfo(),new Map([["geometry",n],["opacity",f]]),o),this.textVAO=new v(t,m.getAttributeLocations(),m.getLayoutInfo(),new Map([["geometry",c],["opacity",g]]),d)}}class K extends W{constructor(t,e){super(t,e),this.type=l.CIRCLE,this.circleIndexStart=0,this.circleIndexCount=0;const s=new Uint32Array(t);let i=this.bufferDataOffset;this.circleIndexStart=s[i++],this.circleIndexCount=s[i++],this.bufferDataOffset=i}get usedMemory(){return(this.data?.byteLength??0)+(this.vao?.usedMemory??0)}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){this.vao=e(this.vao)}doPrepareForRendering(t,e,s){const i=new Uint32Array(e),r=new Int32Array(i.buffer),a=i[s++],n=R.createVertex(t,p.STATIC_DRAW,new Int32Array(r.buffer,4*s,a));s+=a;const h=i[s++],o=R.createIndex(t,p.STATIC_DRAW,new Uint32Array(i.buffer,4*s,h));s+=h;const l=this.layer.circleMaterial;this.vao=new v(t,l.getAttributeLocations(),l.getLayoutInfo(),new Map([["geometry",n]]),o)}}class q extends L{constructor(t,e,s,i,r,a,n,h=null){super(t,e,s,i,r,a,4096,4096),this.styleRepository=n,this._memCache=h,this.type="vector-tile",this._referenced=1,this._hasSymbolBuckets=!1,this._usedMemory=256,this.layerData=new Map,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.parentTile=null,this.childrenTiles=new Set,this.featureIndex=null,this.triangleCount=0,this._processed=!1,this.id=t.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<O}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<O)}get wasRequested(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(t){this.changeDataImpl(t),this.requestRender(),this.ready(),this._processed=!0}deleteLayerData(t){let e=!1;for(const s of t){const t=this.layerData.get(s);t&&(this._usedMemory-=t.usedMemory,t.type===l.SYMBOL&&this.symbols.delete(s)&&(e=!0),t.destroy(),this.layerData.delete(s))}this._memCache?.updateSize(this.key.id,this,this._usedMemory),e&&(this.featureIndex?.clear(),this.emit("symbols-changed")),this.requestRender()}processed(){return this._processed}hasData(){return this.layerData.size>0}hasFeatures(){const t=this.layerData.values();for(const e of t)if(e.hasData())return!0;return!1}dispose(){"unloaded"!==this.status&&(q._destroyRenderBuckets(this.layerData),this.layerData.clear(),this.featureIndex=null,this._usedMemory=0,this.destroy(),this.status="unloaded")}release(){0==--this._referenced&&(this.dispose(),this.stage=null)}retain(){++this._referenced}get usedMemory(){return this._usedMemory}get usedMemoryPerReference(){return this._usedMemory/(this._referenced||1)}changeDataImpl(t){this.featureIndex?.clear();let e=!1;if(t){const{bucketsWithData:s,emptyBuckets:i}=t,r=this._createRenderBuckets(s);if(i&&i.byteLength>0){const t=new Uint32Array(i);for(const e of t)this._deleteLayerData(e)}for(const[t,s]of r)this._deleteLayerData(t),s.type===l.SYMBOL&&(this.symbols.set(t,s.symbols),e=!0),this._usedMemory+=s.usedMemory,this.layerData.set(t,s);this._memCache?.updateSize(this.key.id,this,this.usedMemory)}this._hasSymbolBuckets=!1;for(const t of this.layerData.values())t.type===l.SYMBOL&&(this._hasSymbolBuckets=!0);e&&this.emit("symbols-changed")}attachWithContext(t){this.stage={context:t,trashDisplayObject(t){t.processDetach()},untrashDisplayObject:()=>!1}}setTransform(t){super.setTransform(t);const e=this.resolution/(t.resolution*t.pixelRatio),s=this.width/this.rangeX*e,i=this.height/this.rangeY*e,r=[0,0];t.toScreen(r,[this.x,this.y]);const a=this.transforms.tileUnitsToPixels;I(a),x(a,a,r),S(a,a,Math.PI*t.rotation/180),D(a,a,[s,i,1])}_createTransforms(){return{displayViewScreenMat3:A(),tileMat3:A(),tileUnitsToPixels:A()}}static _destroyRenderBuckets(t){if(!t)return;const e=new Set;for(const s of t.values())e.has(s)||(s.destroy(),e.add(s));t.clear()}_createRenderBuckets(t){const e=new Map,s=new Map;for(const i of t){const t=this._deserializeBucket(i,s);for(const s of t.layerUIDs)e.set(s,t)}return e}_deserializeBucket(t,e){let s=e.get(t);if(s)return s;switch(new Uint32Array(t)[0]){case l.FILL:s=new H(t,this.styleRepository);break;case l.LINE:s=new F(t,this.styleRepository);break;case l.SYMBOL:s=new N(t,this.styleRepository,this);break;case l.CIRCLE:s=new K(t,this.styleRepository)}return e.set(t,s),s}_deleteLayerData(t){if(!this.layerData.has(t))return;const e=this.layerData.get(t);this._usedMemory-=e.usedMemory,e.destroy(),this.layerData.delete(t)}}class G extends M{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(t){const e=b.pool.acquire(t),s=0===e.level?null:b.getId(e.level-1,e.row>>1,e.col>>1,e.world);return b.pool.release(e),s}getTileCoverage(t,e,s=!0,i){const r=super.getTileCoverage(t,e,s,i);if(!r)return r;const a=1<<r.lodInfo.level;return r.spans=r.spans.filter((t=>t.row>=0&&t.row<a)),r}scaleToLevel(t){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[t])return this._levelByScale[t];{const e=this._fullCacheLodInfos;if(t>e[0].scale)return e[0].level;let s,i;for(let r=0;r<e.length-1;r++)if(i=e[r+1],t>i.scale)return s=e[r],s.level+(s.scale-t)/(s.scale-i.scale);return e[e.length-1].level}}_initializeFullCacheLODs(t){let e;if(0===t[0].level)e=t.map((t=>({level:t.level,resolution:t.resolution,scale:t.scale})));else{const t=this.tileInfo.size[0],s=this.tileInfo.spatialReference;e=T.create({size:t,spatialReference:s}).lods.map((t=>({level:t.level,resolution:t.resolution,scale:t.scale})))}for(let t=0;t<e.length;t++)this._levelByScale[e[t].scale]=e[t].level;this._fullCacheLodInfos=e}}export{G as T,q as V,j as a};
