// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/Evented ../../../../../../core/handleUtils ../../../../../../core/has ../../../../../../core/maybe ../../../../../../layers/graphics/data/StreamFeatureManager ../../../../../../layers/graphics/sources/connections/createConnection ../StreamConnectionState ../StreamFeatureStore ./ALoadStrategy ./chunks/StreamSourceChunk".split(" "),function(k,l,m,x,n,p,q,r,t,u,v){class w extends u.ALoadStrategy{constructor(a,b,d,e,f){super(d);this._service=a;this._dataFilter=b;
this._streamOptions=e;this._metadata=f;this._connectionState=new r.StreamConnectionState;this._forceRefresh=!1;this.events=new l;const {objectIdField:g,timeInfo:h}=this._metadata;({purgeOptions:a}=b);this._stagingStore=new t.StreamFeatureStore(this._metadata,c=>this.events.emit("features-updated",c));this._manager=new p.StreamFeatureManager(this._stagingStore,g,h,a);this.connect()}destroy(){super.destroy();this.disconnect()}get about(){return{willQueryAllFeatures:!1,willQueryFullResolutionGeometry:!1}}get connectionStatus(){return this._connectionState.connectionStatus}get errorString(){return this._connectionState?.errorString}async refresh(){const a=
null!=this._chunk;if(this._manager.checkForUpdates()||!a||this._forceRefresh)this._chunk&&this._store.remove(this._chunk),this._forceRefresh=!1,this._chunk=new v.StreamSourceChunk(this._stagingStore.reader),this._store.insert(this._chunk);this.events.emit("tick")}async updateFields(a){throw Error("Updating available fields not supported for StreamLayer");}async load(a){}unload(a){}disconnect(){this._connection=n.destroyMaybe(this._connection);this._connectionState.connection=null;this._handlesGroup?.remove()}connect(){if(null==
this._connection){var {geometryType:a,spatialReference:b}=this._metadata,{maxReconnectionAttempts:d,maxReconnectionInterval:e,geometryDefinition:f,definitionExpression:g,customParameters:h}=this._dataFilter;this._connection=q.createConnection(this._service.source,b,this._streamOptions.outSR,a,g,f,d,e,h);this._handlesGroup=m.handlesGroup([this._connection.on("data-received",c=>this._onFeature(c)),this._connection.on("message-received",c=>this._onWebSocketMessage(c))]);this._connectionState.connection=
this._connection}}clear(){this._manager.checkForUpdates();this._stagingStore.clear();this._forceRefresh=!0}updateCustomParameters(a){this._connection?.updateCustomParameters(a)}sendMessageToSocket(a){this._connection?.sendMessageToSocket(a)}sendMessageToClient(a){this._connection?.sendMessageToClient(a)}_onWebSocketMessage(a){if("type"in a)switch(a.type){case "delete":if(a.objectIds)for(const b of a.objectIds)this._manager.removeById(b);if(a.trackIds)for(const b of a.trackIds)this._manager.removeByTrackId(b);
break;case "clear":this.clear()}this.events.emit("message-received",a)}_onFeature(a){try{this._manager.add(a),this.events.emit("data-received",a)}catch(b){}}}k.StreamLoadStrategy=w;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});