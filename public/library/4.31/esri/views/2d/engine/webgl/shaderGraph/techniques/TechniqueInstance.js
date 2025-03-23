// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./mesh/instanceIdUtils"],function(b,c){class d{constructor(a,e,f){this._instanceId=a;this.techniqueRef=e;this._input=f}get instanceId(){return c.castStrictInstanceId(this._instanceId)}createMeshInfo(a){return{id:c.castStrictInstanceId(this._instanceId),techniqueType:this.techniqueRef.type,inputParams:a,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(a){this._input=a}}b.FeatureTechniqueInstance=d;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});