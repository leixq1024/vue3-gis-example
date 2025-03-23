// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../has ../../Logger ../beforeDestroy ../interfaces ../metadata ../tracking ../extensions/serializableProperty".split(" "),function(k,A,t,u,v,p,w,x){function y(d,e){return null==e.get?function(){var b=this.__accessor__;const a=b.propertiesByName.get(d);if(void 0!==a)return b.mutable&&w.trackAccess(a),b=b.store,b.has(d)?b.get(d):a.metadata.value}:function(){const b=this.__accessor__,a=b.propertiesByName.get(d);if(void 0!==a)return a.getComputed(b)}}function q(d){const e=p.getPropertiesMetadata(d.prototype),
b={};for(const a of Object.getOwnPropertyNames(e)){const c=e[a];x.processPrototypePropertyMetadata(c);b[a]={enumerable:!0,configurable:!0,get:y(a,c),set(f){const g=this.__accessor__;if(void 0===g)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:f});else if(g.mutable){if(g.initialized&&c.readOnly)return r("read-only",a);if(g.lifecycle===v.Lifecycle.CONSTRUCTED&&c.constructOnly)return r("construct-only",a);g.set(a,f)}}}}Object.defineProperties(d.prototype,b)}const l=new Set,
m=new Set,r=(d,e)=>{t.getLogger("esri.core.Accessor").error(`cannot assign to ${d} property '${e}'`)};k.finalizeClass=q;k.subclass=function(d){return e=>{d??="esri.core.Accessor";e.prototype.declaredClass=d;q(e);const b=[],a=[];let c=e.prototype;for(;c;)c.hasOwnProperty("initialize")&&!l.has(c.initialize)&&(l.add(c.initialize),b.push(c.initialize)),c.hasOwnProperty("destroy")&&!m.has(c.destroy)&&(m.add(c.destroy),a.push(c.destroy)),c=Object.getPrototypeOf(c);l.clear();m.clear();const f=class extends e{constructor(...g){super(...g);
if(this.constructor===f&&"function"===typeof this.postscript){b.length&&Object.defineProperty(this,"initialize",{enumerable:!1,configurable:!0,value(){for(let h=b.length-1;0<=h;h--)b[h].call(this)}});if(a.length){let h=!1;const z=this[u.beforeDestroySymbol];Object.defineProperty(this,"destroy",{enumerable:!1,configurable:!0,value(){if(!h){h=!0;z.call(this);for(let n=0;n<a.length;n++)a[n].call(this)}}})}Object.defineProperty(this,Symbol.dispose,{enumerable:!1,configurable:!0,value(){this.destroy()}});
this.postscript()}}};f.__accessorMetadata__=p.getPropertiesMetadata(e.prototype);f.prototype.declaredClass=d;e=(d||"AccessorSubclass").split(".").slice(-1)[0];Object.defineProperty(f,"name",{value:e,configurable:!0});return f}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});