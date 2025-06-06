// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../../views/3d/environment/CloudyWeather ../../views/3d/environment/FoggyWeather ../../views/3d/environment/RainyWeather ../../views/3d/environment/SnowyWeather ../../views/3d/environment/SunnyWeather ../../views/3d/environment/weather ./enums".split(" "),function(c,b,h,g,f,k,l,m,n,p,q,r,d){b=class extends b{constructor(a){super(a);
this.view=null;this._weatherByType={sunny:new q,cloudy:new l,rainy:new n,snowy:new p,foggy:new m};this._settingWeather=!1}initialize(){this.addHandles([g.watch(()=>this.current,a=>{this._settingWeather||null==a||(this._weatherByType={...this._weatherByType,[a.type]:a})},g.syncAndInitial)])}get state(){const a=this.view;if(null==a||!a.ready)return d.WeatherState.Disabled;if(null!=this.error)switch(this.error){case d.WeatherError.NotVisible:break;default:return d.WeatherState.Error}return d.WeatherState.Ready}get weatherByType(){return this._weatherByType}get error(){const a=
this.view;return null!=a&&a.ready?"3d"!==a.type?d.WeatherError.UnsupportedView:"local"===a.viewingMode?d.WeatherError.LocalScene:a.environment.atmosphereEnabled?a.environmentManager.weatherVisible?null:d.WeatherError.NotVisible:d.WeatherError.NoAtmosphere:null}get current(){return this._environment?.weather??this._weatherByType.sunny}set current(a){const e=this._environment;e&&(e.weather=a)}get _environment(){const a=this.view;return null!=a&&"3d"===a.type?a.environment:null}setWeatherByType(a){if(r.validateWeatherType(a,
h.getLogger(this))){var e=this._environment;null!=e&&(this._settingWeather=!0,e.weather=this._weatherByType[a],this._settingWeather=!1)}}setSnowCoverEnabled(a){const e=this.current;"snowCover"in e&&(e.snowCover=a?"enabled":"disabled")}};c.__decorate([f.property()],b.prototype,"view",void 0);c.__decorate([f.property()],b.prototype,"state",null);c.__decorate([f.property()],b.prototype,"_weatherByType",void 0);c.__decorate([f.property()],b.prototype,"weatherByType",null);c.__decorate([f.property()],
b.prototype,"error",null);c.__decorate([f.property()],b.prototype,"current",null);c.__decorate([f.property()],b.prototype,"_environment",null);return b=c.__decorate([k.subclass("esri.widgets.Weather.WeatherViewModel")],b)});