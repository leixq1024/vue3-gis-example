/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as t,d as e,V as i}from"./LineSeries.js";export{A as AxisRendererXAm5,a as AxisRendererYAm5,L as LineSeriesAm5,X as XYChartAm5,b as XYCursorAm5}from"./LineSeries.js";import{e as s,v as o,P as n,q as r,k as l,m as h,h as g,s as d,t as m,u as c}from"./Theme.js";import{d as p}from"./tslib.es6.js";import{R as u}from"./Button2.js";import"./ColorSet.js";import"./DefaultTheme.js";import"./Tick.js";class x extends t{constructor(){super(...arguments),Object.defineProperty(this,"_ph",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_pw",{enumerable:!0,configurable:!0,writable:!0,value:0})}_makeGraphics(t,e){return this.makeColumn(e,t)}_makeFieldNames(){super._makeFieldNames();const t=this.get("xAxis"),e=this.get("yAxis"),i="CategoryAxis",s="ValueAxis";t.isType(i)&&(this.get("openCategoryXField")||(this._xOpenField=this._xField)),t.isType(s)&&(this.get("openValueXField")||(this._xOpenField=this._xField)),e.isType(i)&&(this.get("openCategoryYField")||(this._yOpenField=this._yField)),e.isType(s)&&(this.get("openValueYField")||(this._yOpenField=this._yField))}_prepareChildren(){super._prepareChildren();const t=this.get("xAxis"),e=this.get("yAxis"),i=this.dataItems.length,s=Math.max(0,this.startIndex()-2),a=Math.min(this.endIndex()+2,i-1);if(t.inited&&e.inited)for(let t=s;t<=a;t++){let e=this.dataItems[t];this._createGraphics(e)}}_updateChildren(){const t=this.chart;t&&(this._ph=t.plotContainer.height(),this._pw=t.plotContainer.width());const e=this.get("xAxis"),i=this.get("yAxis"),a=this.get("baseAxis"),o=this.columns.template;this.isDirty("fill")&&null==o.get("fill")&&o.set("fill",this.get("fill")),this.isDirty("fillPattern")&&null==o.get("fillPattern")&&o.set("fillPattern",this.get("fillPattern")),this.isDirty("stroke")&&null==o.get("stroke")&&o.set("stroke",this.get("stroke"));let n=0,r=0,l=0;s(a.series,(t=>{if(t instanceof x){const e=t.get("stacked");e&&0==l&&r++,!e&&t.get("clustered")&&r++}t===this&&(n=r-1),l++})),this.get("clustered")||(n=0,r=1),0===r&&(r=1,n=0);const h=e.get("renderer"),g=i.get("renderer"),d="cellStartLocation",m="cellEndLocation",c=h.get(d,0),p=h.get(m,1),u=g.get(d,0),_=g.get(m,1);if(this._aLocationX0=c+n/r*(p-c),this._aLocationX1=c+(n+1)/r*(p-c),this._aLocationY0=u+n/r*(_-u),this._aLocationY1=u+(n+1)/r*(_-u),e.inited&&i.inited){if(this._axesDirty||this._valuesDirty||this._stackDirty||this.isDirty("vcx")||this.isDirty("vcy")||this._sizeDirty){const t=this.dataItems.length;let e=Math.max(0,this.startIndex()-2),i=Math.min(this.endIndex()+2,t-1);for(let t=0;t<e;t++)this._toggleColumn(this.dataItems[t],!1);let s=this.dataItems[e];for(let t=e;t<=i;t++){let i=this.dataItems[t];if(null!=i.get("valueX")&&null!=i.get("valueY")){if(s=i,t>0&&e>0)for(let e=t-1;e>=0;e--){let t=this.dataItems[e];if(null!=t.get("valueX")&&null!=t.get("valueY")){s=t;break}}break}this._toggleColumn(i,!1)}for(let t=e;t<=i;t++){let e=this.dataItems[t];this._updateGraphics(e,s),null!=e.get("valueX")&&null!=e.get("valueY")&&(s=e)}for(let e=i+1;e<t;e++)this._toggleColumn(this.dataItems[e],!1)}}else this._skipped=!0;this.updateLegendMarker(this.get("tooltipDataItem")),super._updateChildren()}_createGraphics(t){let e=t.get("graphics");if(!e){e=this._makeGraphics(this.columns,t),t.set("graphics",e),e._setDataItem(t);const i=t.get("legendDataItem");if(i){const t=i.get("markerRectangle");if(t){const i=t.states.lookup("default");s(o,(s=>{const a=e.get(s,this.get(s));t.set(s,a),i.set(s,a)}))}}let a=t.get("rangeGraphics");a&&s(a,(t=>{t.dispose()})),a=[],t.setRaw("rangeGraphics",a),this.axisRanges.each((e=>{const i=e.container,s=this._makeGraphics(e.columns,t);a&&a.push(s),s.setPrivate("list",e.columns),i.children.push(s)}))}}createAxisRange(t){return s(this.dataItems,(t=>{const e=t.get("graphics");e&&(e.dispose(),t.set("graphics",void 0))})),super.createAxisRange(t)}_updateGraphics(t,e){let i=t.get("graphics");const a=this._xField,o=this._yField,l=t.get(a),h=t.get(o);if(null!=l&&null!=h){const l=this._xOpenField,h=this._yOpenField,g=this.get("locationX",t.get("locationX",.5)),d=this.get("locationY",t.get("locationY",.5)),m=this.get("openLocationX",t.get("openLocationX",g)),c=this.get("openLocationY",t.get("openLocationY",d)),p=i.get("width"),u=i.get("height"),x=this.get("stacked"),_=this.get("xAxis"),I=this.get("yAxis"),f=this.get("baseAxis"),y=_.get("start"),P=_.get("end"),b=I.get("start"),v=I.get("end");let D,T,C,w,A=this.get("vcy",1),k=this.get("vcx",1),F=!1,M=!1;if(I.isType("CategoryAxis")&&_.isType("CategoryAxis")){let e=this._aLocationX0+m-.5,i=this._aLocationX1+g-.5;if(p instanceof n){let t=(i-e)*(1-p.value)/2;e+=t,i-=t}if(D=_.getDataItemPositionX(t,l,e,k),T=_.getDataItemPositionX(t,a,i,k),e=this._aLocationY0+c-.5,i=this._aLocationY1+d-.5,u instanceof n){let t=(i-e)*(1-u.value)/2;e+=t,i-=t}C=I.getDataItemPositionY(t,h,e,A),w=I.getDataItemPositionY(t,o,i,A),t.setRaw("point",{x:D+(T-D)/2,y:C+(w-C)/2})}else if(_===f){let e=this._aLocationX0+m-.5,i=this._aLocationX1+g-.5;if(p instanceof n){let t=(i-e)*(1-p.value)/2;e+=t,i-=t}if(D=_.getDataItemPositionX(t,l,e,k),T=_.getDataItemPositionX(t,a,i,k),C=I.getDataItemPositionY(t,o,d,A),this._yOpenField!==this._yField)w=I.getDataItemPositionY(t,h,c,A);else if(x){let e=t.get("stackToItemY");w=e?I.getDataItemPositionY(e,o,c,e.component.get("vcy")):I.basePosition()}else w=I.basePosition();t.setRaw("point",{x:D+(T-D)/2,y:C}),M=!0}else if(I===f){let e=this._aLocationY0+c-.5,i=this._aLocationY1+d-.5;if(u instanceof n){let t=(i-e)*(1-u.value)/2;e+=t,i-=t}if(C=I.getDataItemPositionY(t,h,e,A),w=I.getDataItemPositionY(t,o,i,A),T=_.getDataItemPositionX(t,a,g,k),this._xOpenField!==this._xField)D=_.getDataItemPositionX(t,l,m,k);else if(x){let e=t.get("stackToItemX");D=e?_.getDataItemPositionX(e,a,m,e.component.get("vcx")):_.basePosition()}else D=_.basePosition();F=!0,t.setRaw("point",{x:T,y:C+(w-C)/2})}this._updateSeriesGraphics(t,i,D,T,C,w,F,M),D<y&&T<y||D>P&&T>P||C<b&&w<=b||C>=v&&w>v||r(D)||r(C)?this._toggleColumn(t,!1):this._toggleColumn(t,!0);let X=t.get("rangeGraphics");X&&s(X,(e=>{this._updateSeriesGraphics(t,e,D,T,C,w,F,M)})),this._applyGraphicsStates(t,e)}}_updateSeriesGraphics(t,e,i,s,a,o,n,r){const h=e.get("width"),g=e.get("height"),d=e.get("maxWidth"),m=e.get("maxHeight"),c=this.getPoint(i,a),p=this.getPoint(s,o),u=t.get("point");if(u){const t=this.getPoint(u.x,u.y);u.x=t.x+this._x,u.y=t.y+this._y}if(i=c.x,s=p.x,a=c.y,o=p.y,l(h)){const t=(s-i-h)/2;i+=t,s-=t}if(l(d)&&d<Math.abs(s-i)){const t=(s-i-d)/2;i+=t,s-=t}if(l(g)){const t=(o-a-g)/2;a+=t,o-=t}if(l(m)&&m<Math.abs(o-a)){const t=(o-a-m)/2;a+=t,o-=t}this.get("adjustBulletPosition")&&(n&&(s=Math.min(Math.max(0,s),this._pw),i=Math.min(Math.max(0,i),this._pw)),r&&(a=Math.min(Math.max(0,a),this._ph),o=Math.min(Math.max(0,o),this._ph))),t.setRaw("left",i),t.setRaw("right",s),t.setRaw("top",a),t.setRaw("bottom",o),e.setPrivate("width",s-i),e.setPrivate("height",o-a),e.set("x",i),e.set("y",o-(o-a))}_handleDataSetChange(){super._handleDataSetChange(),s(this._dataItems,(t=>{this._toggleColumn(t,!1)}))}_applyGraphicsStates(t,e){const i=t.get("graphics"),s=i.states.lookup("dropFromOpen"),a=i.states.lookup("riseFromOpen"),o=i.states.lookup("dropFromPrevious"),n=i.states.lookup("riseFromPrevious");if(s||o||a||n){const i=this.get("xAxis"),r=this.get("yAxis"),h=this.get("baseAxis");let g,d,m;h===i&&r.isType("ValueAxis")?(g=t.get(this._yOpenField),d=t.get(this._yField),m=e.get(this._yField)):h===r&&i.isType("ValueAxis")&&(g=t.get(this._xOpenField),d=t.get(this._xField),m=e.get(this._xField)),l(g)&&l(d)&&(d<g?s&&s.apply():a&&a.apply(),l(m)&&(d<m?o&&o.apply():n&&n.apply()))}}disposeDataItem(t){super.disposeDataItem(t);const e=t.get("graphics");e&&(this.columns.removeValue(e),e.dispose());const i=t.get("rangeGraphics");i&&s(i,(t=>{const e=t.getPrivate("list");e&&e.removeValue(t),t.dispose()}))}hideDataItem(t,e){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return p(this,void 0,void 0,(function*(){const a=[i.hideDataItem.call(this,t,e)],o=t.get("graphics");o&&a.push(o.hide(e));const n=t.get("rangeGraphics");n&&s(n,(t=>{a.push(t.hide(e))})),yield Promise.all(a)}))}_toggleColumn(t,e){const i=t.get("graphics");i&&i.setPrivate("visible",e);const a=t.get("rangeGraphics");a&&s(a,(t=>{t.setPrivate("visible",e)}));const o=t.bullets;o&&s(o,(t=>{t.setPrivate("hidden",!e)}))}showDataItem(t,e){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return p(this,void 0,void 0,(function*(){const a=[i.showDataItem.call(this,t,e)],o=t.get("graphics");o&&a.push(o.show(e));const n=t.get("rangeGraphics");n&&s(n,(t=>{a.push(t.show(e))})),yield Promise.all(a)}))}updateLegendMarker(t){let e=this.get("legendDataItem");if(this.get("useLastColorForLegendMarker")&&!t){const e=this.dataItems[this.endIndex()-1];e&&(t=e)}if(e){let i=this.columns.template;if(t){let e=t.get("graphics");e&&(i=e)}const a=e.get("markerRectangle");if(a&&!e.get("itemContainer").get("disabled")){const t=a.states.lookup("default");s(o,(e=>{const s=i.get(e,this.get(e));a.set(e,s),t.set(e,s)}))}}}_getTooltipTarget(t){return"bullet"==this.get("seriesTooltipTarget")?super._getTooltipTarget(t):t.get("graphics")||this}}Object.defineProperty(x,"className",{enumerable:!0,configurable:!0,writable:!0,value:"BaseColumnSeries"}),Object.defineProperty(x,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:t.classNames.concat([x.className])});class _ extends e{constructor(){super(...arguments),Object.defineProperty(this,"_frequency",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_itemMap",{enumerable:!0,configurable:!0,writable:!0,value:{}})}_afterNew(){this._settings.themeTags=h(this._settings.themeTags,["axis"]),this.fields.push("category"),this.setPrivateRaw("name","category"),this.addTag("category"),super._afterNew()}_prepareChildren(){super._prepareChildren();const t=this.dataItems.length;let e=0;this._valuesDirty&&(this._itemMap={},s(this.dataItems,(t=>{t.setRaw("index",e),this._itemMap[t.get("category")]=t,e++})),this.setPrivateRaw("maxZoomFactor",t)),this.setPrivateRaw("startIndex",Math.max(Math.round(this.get("start",0)*t),0)),this.setPrivateRaw("endIndex",Math.min(Math.round(this.get("end",1)*t),t)),(this._sizeDirty||this._valuesDirty||this.isDirty("start")||this.isDirty("end")||this.isPrivateDirty("endIndex")||this.isPrivateDirty("startIndex")||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&this.dataItems.length>0&&(this._handleRangeChange(),this._prepareAxisItems(),this._updateAxisRanges())}_handleRangeChange(){s(this.series,(t=>{let e=this.dataItems[this.startIndex()].get("category"),a=this.dataItems[this.endIndex()-1].get("category"),o=t.get("baseAxis"),n=t.get("xAxis"),r=t.get("yAxis");if(n instanceof _&&r instanceof _)t._markDirtyAxes();else if(o===this){let l,h,g=r;if(n===o?(t.get("categoryXField")&&(l="categoryX"),t.get("openCategoryXField")&&(h="openCategoryX")):r===o&&(t.get("categoryYField")&&(l="categoryY"),t.get("openCategoryYField")&&(h="openCategoryY"),g=n),g instanceof i&&(l||h)){let i,o;for(let s=0,a=t.dataItems.length;s<a;s++){let a=t.dataItems[s];if(l&&a.get(l)===e){i=a;break}if(h&&a.get(h)===e){i=a;break}}for(let e=t.dataItems.length-1;e>=0;e--){let i=t.dataItems[e];if(l&&i.get(l)===a){o=i;break}if(h&&i.get(h)===a){o=i;break}}let n=0,r=t.dataItems.length;i&&(n=t.dataItems.indexOf(i)),o&&(r=t.dataItems.indexOf(o)+1),t.setPrivate("startIndex",n),t.setPrivate("endIndex",r);let g=!1;for(let e=n;e<r;e++){const i=t.dataItems[e];if(s(t.__valueXShowFields,(t=>{null!=i.get(t)&&(g=!0)})),s(t.__valueYShowFields,(t=>{null!=i.get(t)&&(g=!0)})),g)break}t.setPrivate("outOfSelection",!g)}t._markDirtyAxes()}}))}_prepareAxisItems(){var t;const e=this.get("renderer"),i=this.dataItems.length;let s=this.startIndex();s>0&&s--;let a=this.endIndex();a<i&&a++;const o=e.get("minorLabelsEnabled"),n=e.get("minorGridEnabled",o);let r=e.axisLength()/Math.max(e.get("minGridDistance"),1),l=Math.max(1,Math.min(i,Math.ceil((a-s)/r)));s=Math.floor(s/l)*l,this._frequency=l;for(let t=0;t<i;t++)this._toggleDataItem(this.dataItems[t],!1);let h=this.dataItems[s].get("index",0);for(let t=s;t<a;t+=l){let e=this.dataItems[t];this._createAssets(e,[]),this._toggleDataItem(e,!0);let i=l;n&&(i=1),this._prepareDataItem(e,h,i),h++}if(e.get("minorGridEnabled"))for(let e=s;e<a;e++){let i=this.dataItems[e];e%l!=0&&(this._createAssets(i,["minor"],!0),this._toggleDataItem(i,!0),this._prepareDataItem(i,0,1),o||null===(t=i.get("label"))||void 0===t||t.setPrivate("visible",!1))}this._updateGhost()}_prepareDataItem(t,e,i){let s=this.get("renderer"),a=t.get("categoryLocation",0),o=t.get("endCategoryLocation",1),n=t.get("index");l(n)||(n=this.categoryToIndex(t.get("category")));let r,h=this.indexToPosition(n,a),g=t.get("endCategory");g?(r=this.categoryToIndex(g),l(r)||(r=n)):r=n;let d,m,c=this.indexToPosition(r,o);d=t.get("isRange")?r:n+this._frequency-1,m=this.indexToPosition(d,o),s.updateLabel(t.get("label"),h,c,i),s.updateGrid(t.get("grid"),h,c),s.updateTick(t.get("tick"),h,c,i),s.updateFill(t.get("axisFill"),h,m),this._processBullet(t),s.updateBullet(t.get("bullet"),h,c);const p=this.get("fillRule");p&&p(t,e)}startIndex(){let t=this.dataItems.length;return Math.min(Math.max(this.getPrivate("startIndex",0),0),t-1)}endIndex(){let t=this.dataItems.length;return Math.max(1,Math.min(this.getPrivate("endIndex",t),t))}baseValue(){}basePosition(){return 0}getX(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getY(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getDataItemPositionX(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateX(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t,e,i,s))}getDataItemPositionY(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateY(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t,e,i,s))}indexToPosition(t,e){l(e)||(e=.5);let i=this.dataItems.length,s=this.get("startLocation",0);i-=s,i-=1-this.get("endLocation",1);let a=(t+e-s)/i,o=this.dataItems[t];return o&&(a+=o.get("deltaPosition",0)),a}categoryToIndex(t){let e=this._itemMap[t];return e?e.get("index"):NaN}dataItemToPosition(t){return this.indexToPosition(t.get("index"))}roundAxisPosition(t,e){return t+=(.5-e)/this.dataItems.length,this.indexToPosition(this.axisPositionToIndex(t),e)}axisPositionToIndex(t){let e=this.dataItems.length;return g(Math.floor(t*e),0,e-1)}getTooltipText(t,e){const i=this.dataItems[this.axisPositionToIndex(t)];if(i){const t=i.get("label");if(t)return d(t,this.get("tooltipText",""))}}_updateTooltipText(t,e){t._setDataItem(this.dataItems[this.axisPositionToIndex(e)]),t.label.text.markDirtyText()}getSeriesItem(t,e){if(this.dataItems.length>0){let i=this.getPrivate("name")+this.get("renderer").getPrivate("letter"),s=this.axisPositionToIndex(e),a=t.dataItems[s],o=this.dataItems[s],n=o.get("category");if(a&&o&&a.get(i)===n)return a;for(let e=0,s=t.dataItems.length;e<s;e++){let s=t.dataItems[e];if(s.get(i)===n)return s}}}zoomToIndexes(t,e,i){let s=this.dataItems.length;this.zoom(t/s,e/s,i)}zoomToCategories(t,e,i){this.zoomToIndexes(this.categoryToIndex(t),this.categoryToIndex(e)+1,i)}getCellWidthPosition(){return this._frequency/this.dataItems.length/(this.get("end",1)-this.get("start",0))}nextPosition(t){null==t&&(t=1),"Y"==this.get("renderer").getPrivate("letter")&&(t*=-1);const e=this.getPrivate("tooltipPosition",0),i=g(this.axisPositionToIndex(e)+t,0,this.dataItems.length-1);return this.toGlobalPosition(this.indexToPosition(i))}}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"CategoryAxis"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:e.classNames.concat([_.className])});class I extends x{constructor(){super(...arguments),Object.defineProperty(this,"columns",{enumerable:!0,configurable:!0,writable:!0,value:this.addDisposer(new m(c.new({}),(()=>u._new(this._root,{position:"absolute",themeTags:h(this.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template]))))})}makeColumn(t,e){const i=this.mainContainer.children.push(e.make());return i._setDataItem(t),e.push(i),i}_processAxisRange(t){super._processAxisRange(t),t.columns=new m(c.new({}),(()=>u._new(this._root,{position:"absolute",themeTags:h(t.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template,t.columns.template])))}}Object.defineProperty(I,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColumnSeries"}),Object.defineProperty(I,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.classNames.concat([I.className])});export{_ as CategoryAxisAm5,I as ColumnSeriesAm5,i as ValueAxisAm5};
