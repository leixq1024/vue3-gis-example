// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ./ArrayPool ./Evented ./handleUtils ./lang ./ObjectPool ./ObservableChangesType ./scheduling ./accessorSupport/ensureType ./accessorSupport/tracking ./accessorSupport/decorators/property ./accessorSupport/decorators/shared ./accessorSupport/decorators/subclass ./accessorSupport/tracking/SimpleObservable".split(" "),function(x,y,J,D,K,L,h,M,E,d,z,N,F,O){function G(a){a&&"object"===typeof a&&"destroy"in a&&"function"===typeof a.destroy&&a.destroy()}function A(a){return a?
a instanceof t?a.toArray():a.length?Array.prototype.slice.apply(a):[]:[]}function B(a){if(a?.length)return a[0]}function H(a,b,c,e){b&&b.forEach((k,m,l)=>{a.push(k);H(a,c.call(e,k,m,l),c,e)})}var r;class P{constructor(){this.target=null;this.defaultPrevented=this.cancellable=!1;this.type=this.item=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(a){this.defaultPrevented=!1;this.item=a}}class Q{constructor(a,b,c,e,k){this.target=a;this.added=b;this.removed=c;this.start=e;
this.deleteCount=k}}const q=new L(P,void 0,a=>{a.item=null;a.target=null;a.defaultPrevented=!1;a.cancellable=!1}),u=new Set,v=new Set,w=new Set,C=new Map;let R=0,t=r=class extends J.EventedAccessor{static isCollection(a){return null!=a&&a instanceof r}constructor(a){super(a);this._chgListeners=[];this._notifications=null;this._updating=!1;this._timer=null;this._observable=new O.SimpleObservable;this.length=0;this._items=[];Object.defineProperty(this,"uid",{value:R++})}normalizeCtorArgs(a){return a?
Array.isArray(a)||a instanceof r?{items:a}:a:{}}destroy(){this._removeAllRaw();this._timer&&this._timer.remove();this._emitter.destroy();this._notifications=null}*[Symbol.iterator](){yield*this.items}get items(){d.trackAccess(this._observable);return this._items}set items(a){this._emitBeforeChanges(h.ObservableChangesType.ADD)||(this._splice(0,this.length,A(a)),this._emitAfterChanges(h.ObservableChangesType.ADD))}hasEventListener(a){return this.destroyed?!1:"change"===a?0<this._chgListeners.length:
this._emitter.hasEventListener(a)}on(a,b){if(this.destroyed)return D.makeHandle();if("change"===a){const c=this._chgListeners,e={removed:!1,callback:b};c.push(e);this._notifications&&this._notifications.push({listeners:c.slice(),items:this._items.slice(),changes:[]});return D.makeHandle(()=>{e.removed=!0;c.splice(c.indexOf(e),1)})}return this._emitter.on(a,b)}once(a,b){const c="deref"in b?()=>b.deref():()=>b,e=this.on(a,k=>{c()?.call(null,k);e.remove()});return e}add(a,b){d.trackAccess(this._observable);
if(this._emitBeforeChanges(h.ObservableChangesType.ADD))return this;b=this.getNextIndex(b??null);this._splice(b,0,[a]);this._emitAfterChanges(h.ObservableChangesType.ADD);return this}addMany(a,b=this._items.length){d.trackAccess(this._observable);if(!a?.length||this._emitBeforeChanges(h.ObservableChangesType.ADD))return this;b=this.getNextIndex(b);this._splice(b,0,A(a));this._emitAfterChanges(h.ObservableChangesType.ADD);return this}at(a){d.trackAccess(this._observable);a=Math.trunc(a)||0;0>a&&(a+=
this.length);if(!(0>a||a>=this.length))return this._items[a]}removeAll(){d.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE))return[];const a=this._removeAllRaw();this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a}_removeAllRaw(){return 0===this.length?[]:this._splice(0,this.length)||[]}clone(){d.trackAccess(this._observable);return this._createNewInstance({items:this._items.map(K.clone)})}concat(...a){d.trackAccess(this._observable);
a=a.map(A);return this._createNewInstance({items:this._items.concat(...a)})}drain(a,b){d.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var c=this._splice(0,this.length),e=c.length;for(let k=0;k<e;k++)a.call(b,c[k],k,c);this._emitAfterChanges(h.ObservableChangesType.REMOVE)}}destroyAll(){this.drain(G)}destroyMany(a){a=this.removeMany(a);a.forEach(G);return a}every(a,b){d.trackAccess(this._observable);return this._items.every(a,b)}filter(a,b){d.trackAccess(this._observable);
let c;c=2===arguments.length?this._items.filter(a,b):this._items.filter(a);return this._createNewInstance({items:c})}find(a,b){d.trackAccess(this._observable);return this._items.find(a,b)}findIndex(a,b){d.trackAccess(this._observable);return this._items.findIndex(a,b)}flatten(a,b){d.trackAccess(this._observable);const c=[];H(c,this,a,b);return new r(c)}forEach(a,b){d.trackAccess(this._observable);return this._items.forEach(a,b)}getItemAt(a){d.trackAccess(this._observable);return this._items[a]}getNextIndex(a){d.trackAccess(this._observable);
const b=this.length;a=null==a?b:a;0>a?a=0:a>b&&(a=b);return a}includes(a,b=0){d.trackAccess(this._observable);return this._items.includes(a,b)}indexOf(a,b=0){d.trackAccess(this._observable);return this._items.indexOf(a,b)}join(a=","){d.trackAccess(this._observable);return this._items.join(a)}lastIndexOf(a,b=this.length-1){d.trackAccess(this._observable);return this._items.lastIndexOf(a,b)}map(a,b){d.trackAccess(this._observable);a=this._items.map(a,b);return new r({items:a})}reorder(a,b=this.length-
1){d.trackAccess(this._observable);const c=this.indexOf(a);if(-1!==c){0>b?b=0:b>=this.length&&(b=this.length-1);if(c!==b){if(this._emitBeforeChanges(h.ObservableChangesType.MOVE))return a;this._splice(c,1);this._splice(b,0,[a]);this._emitAfterChanges(h.ObservableChangesType.MOVE)}return a}}pop(){d.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var a=B(this._splice(this.length-1,1));this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a}}push(...a){d.trackAccess(this._observable);
if(this._emitBeforeChanges(h.ObservableChangesType.ADD))return this.length;this._splice(this.length,0,a);this._emitAfterChanges(h.ObservableChangesType.ADD);return this.length}reduce(a,b){d.trackAccess(this._observable);const c=this._items;return 2===arguments.length?c.reduce(a,b):c.reduce(a)}reduceRight(a,b){d.trackAccess(this._observable);const c=this._items;return 2===arguments.length?c.reduceRight(a,b):c.reduceRight(a)}remove(a){d.trackAccess(this._observable);return this.removeAt(this.indexOf(a))}removeAt(a){d.trackAccess(this._observable);
if(!(0>a||a>=this.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE)))return a=B(this._splice(a,1)),this._emitAfterChanges(h.ObservableChangesType.REMOVE),a}removeMany(a){d.trackAccess(this._observable);if(!a?.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE))return[];a=a instanceof r?a.toArray():a;const b=this._items,c=[],e=a.length;for(let f=0;f<e;f++){var k=b.indexOf(a[f]);if(-1<k){var m=f+1,l=k+1;const p=Math.min(a.length-m,b.length-l);let g=0;for(;g<p&&a[m+g]===b[l+
g];)g++;m=1+g;(k=this._splice(k,m))&&0<k.length&&c.push.apply(c,k);f+=m-1}}this._emitAfterChanges(h.ObservableChangesType.REMOVE);return c}reverse(){d.trackAccess(this._observable);if(this._emitBeforeChanges(h.ObservableChangesType.MOVE))return this;const a=this._splice(0,this.length);a&&(a.reverse(),this._splice(0,0,a));this._emitAfterChanges(h.ObservableChangesType.MOVE);return this}shift(){d.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var a=
B(this._splice(0,1));this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a}}slice(a=0,b=this.length){d.trackAccess(this._observable);return this._createNewInstance({items:this._items.slice(a,b)})}some(a,b){d.trackAccess(this._observable);return this._items.some(a,b)}sort(a){d.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(h.ObservableChangesType.MOVE))return this;const b=this._splice(0,this.length);arguments.length?b.sort(a):b.sort();this._splice(0,0,b);this._emitAfterChanges(h.ObservableChangesType.MOVE);
return this}splice(a,b,...c){d.trackAccess(this._observable);const e=(b?h.ObservableChangesType.REMOVE:0)|(c.length?h.ObservableChangesType.ADD:0);if(this._emitBeforeChanges(e))return[];a=this._splice(a,b,c)||[];this._emitAfterChanges(e);return a}toArray(){d.trackAccess(this._observable);return this._items.slice()}toJSON(){d.trackAccess(this._observable);return this.toArray()}toLocaleString(){d.trackAccess(this._observable);return this._items.toLocaleString()}toString(){d.trackAccess(this._observable);
return this._items.toString()}unshift(...a){d.trackAccess(this._observable);if(!a.length||this._emitBeforeChanges(h.ObservableChangesType.ADD))return this.length;this._splice(0,0,a);this._emitAfterChanges(h.ObservableChangesType.ADD);return this.length}_createNewInstance(a){return new this.constructor(a)}_splice(a,b,c){const e=this._items;var k=this.itemType;let m=void 0;!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),
changes:[]}],this._timer&&this._timer.remove(),this._updating=!0,this._timer=M.schedule(()=>this._dispatchChange()));0>a&&(a+=this.length);if(b){m=e.splice(a,b);if(this.hasEventListener("before-remove")){var l=q.acquire();l.target=this;l.cancellable=!0;for(let n=0,I=m.length;n<I;n++){var f=m[n];l.reset(f);this.emit("before-remove",l);l.defaultPrevented&&(m.splice(n,1),e.splice(a,0,f),a+=1,--n,--I)}q.release(l)}this.length=this._items.length;if(this.hasEventListener("after-remove")){f=q.acquire();
f.target=this;f.cancellable=!1;l=m.length;for(let n=0;n<l;n++)f.reset(m[n]),this.emit("after-remove",f);q.release(f)}}if(c?.length){if(k){f=[];for(var p of c)c=k.ensureType(p),null==c&&null!=p||f.push(c);c=f}k=this.hasEventListener("before-add");p=this.hasEventListener("after-add");f=a===this.length;if(k||p){var g=q.acquire();g.target=this;g.cancellable=!0;l=q.acquire();l.target=this;l.cancellable=!1;for(const n of c)k?(g.reset(n),this.emit("before-add",g),g.defaultPrevented||(f?e.push(n):e.splice(a++,
0,n),this._set("length",e.length),p&&(l.reset(n),this.emit("after-add",l)))):(f?e.push(n):e.splice(a++,0,n),this._set("length",e.length),l.reset(n),this.emit("after-add",l));q.release(l);q.release(g)}else{if(f)for(g of c)e.push(g);else e.splice(a,0,...c);this._set("length",e.length)}}(c?.length||m?.length)&&this._notifyChangeEvent(c,m);this.hasEventListener("after-splice")&&(a=new Q(this,c,m,a,b),this.emit("after-splice",a));return m}_emitBeforeChanges(a){let b=!1;if(this.hasEventListener("before-changes")){const c=
q.acquire();c.target=this;c.cancellable=!0;c.type=a;this.emit("before-changes",c);b=c.defaultPrevented;q.release(c)}return b}_emitAfterChanges(a){if(this.hasEventListener("after-changes")){const b=q.acquire();b.target=this;b.cancellable=!1;b.type=a;this.emit("after-changes",b);q.release(b)}this._observable.notify()}_notifyChangeEvent(a,b){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:a,removed:b})}get updating(){return this._updating}_dispatchChange(){this._timer&&
(this._timer.remove(),this._timer=null);this._updating=!1;if(this._notifications){var a=this._notifications;this._notifications=null;for(const b of a){a=b.changes;u.clear();v.clear();w.clear();for(const {added:f,removed:p}of a){if(f)if(0===w.size&&0===v.size)for(const g of f)u.add(g);else for(const g of f)v.has(g)?(w.add(g),v.delete(g)):w.has(g)||u.add(g);if(p)if(0===w.size&&0===u.size)for(const g of p)v.add(g);else for(const g of p)u.has(g)?u.delete(g):(w.delete(g),v.add(g))}const c=y.acquire();
u.forEach(f=>{c.push(f)});const e=y.acquire();v.forEach(f=>{e.push(f)});const k=this._items,m=b.items,l=y.acquire();w.forEach(f=>{m.indexOf(f)!==k.indexOf(f)&&l.push(f)});if(b.listeners&&(c.length||e.length||l.length)){a={target:this,added:c,removed:e,moved:l};const f=b.listeners.length;for(let p=0;p<f;p++){const g=b.listeners[p];g.removed||g.callback.call(this,a)}}y.release(c);y.release(e);y.release(l)}u.clear();v.clear();w.clear()}}};t.ofType=a=>{if(!a)return r;if(C.has(a))return C.get(a);let b=
null;if("function"===typeof a)b=a.prototype.declaredClass;else if(a.base)b=a.base.prototype.declaredClass;else for(var c in a.typeMap){const e=a.typeMap[c].prototype.declaredClass;b=b?b+` | ${e}`:e}c=class extends r{};x.__decorate([N.shared({Type:a,ensureType:"function"===typeof a?E.ensureType(a):E.ensureOneOfType(a)})],c.prototype,"itemType",void 0);c=x.__decorate([F.subclass(`esri.core.Collection<${b}>`)],c);C.set(a,c);return c};x.__decorate([z.property()],t.prototype,"_updating",void 0);x.__decorate([z.property()],
t.prototype,"length",void 0);x.__decorate([z.property()],t.prototype,"items",null);x.__decorate([z.property({readOnly:!0})],t.prototype,"updating",null);return t=r=x.__decorate([F.subclass("esri.core.Collection")],t)});