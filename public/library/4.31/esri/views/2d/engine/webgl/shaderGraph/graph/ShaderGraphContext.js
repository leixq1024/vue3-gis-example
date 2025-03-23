// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./ShaderGraphNode"],function(n,r){class k{constructor(a,b,c){this.variableName=a;this.variableInputType=b;this.node=c;this.type="shader-input";this.isUsed=!1}clone(){return new k(this.variableName,this.variableInputType,r.cloneShaderNode(this.node))}}class l{constructor(a,b,c){this.outVariableName=a;this.outVariableType=b;this.node=c;this.type="shader-output"}clone(){const a=new l(this.outVariableName,this.outVariableType,r.cloneShaderNode(this.node));a.variableName=this.variableName;
return a}}class p{static createVertex(a,b,c,g,f,q){const h=[];for(const d in a){const m=a[d],e=c.get(d);e?h.push(new k(e,"builtin",m)):h.push(new k("a_"+d,"in",m))}for(const d of g)h.push(new k(d.uniformName,"uniform",d.uniformHydrated));a=[];for(const d in b)c=b[d],"glPosition"===d?a.push(new l("gl_Position","builtin",c)):"glPointSize"===d?a.push(new l("gl_PointSize","builtin",c)):a.push(new l("v_"+d,"out",c));return new p(h,a,f,q)}static createFragment(a,b,c,g,f,q){const h=[];f=Array.from(f.rootOutputNodes());
for(var d in a){const e=a[d];var m=c.get(d);m?h.push(new k(m,"builtin",e)):(m=f.find(t=>t.node===e))&&h.push(new k(m.outVariableName,"in",e))}for(const e of g)h.push(new k(e.uniformName,"uniform",e.uniformHydrated));a=[];for(const e in b)g=b[e],d=c.get(e),"discard"===e?a.push(new l(null,"discard",g)):d?a.push(new l(d,"builtin",g)):a.push(new l(e,"out",g));return new p(h,a,q)}constructor(a,b,c,g){this.type="shader-graph-context";this.indent=0;this.body="";this.varCount=0;this._inputShaderTypesByNodeUid=
new Map;this._nodeEmitMap=new Map;for(const f of a)this._inputShaderTypesByNodeUid.set(f.node.uid,f);this._outputShaderTypes=b;this._transformFeedbackBindings=c;this._transformFeedbackNames=new Set(c.map(f=>"v_"+f.propertyKey));this._usedInFragmentShader=g}shouldPruneOutputNode(a){return!this._usedInFragmentShader||"builtin"===a.outVariableType||this._transformFeedbackNames.has(a.outVariableName)?!1:!this._usedInFragmentShader.has(a.node.uid)}setEmit(a,b){this._nodeEmitMap.set(a.uid,b)}getEmit(a){return this._nodeEmitMap.get(a.uid)}inputs(){return this._inputShaderTypesByNodeUid.values()}getInput(a){return this._inputShaderTypesByNodeUid.get(a.uid)}*rootOutputNodes(){for(const a of this._outputShaderTypes)yield a}*nodes(){const a=
[];for(var b of this._outputShaderTypes.values())a.push(b.node);for(;a.length;)b=a.pop(),"number"!==typeof b&&"boolean"!==typeof b&&a.push(...b.children.filter(Boolean)),yield b}*nodesOfTypeOrFunction(){for(const a of this.nodes())"number"!==typeof a&&"boolean"!==typeof a&&(yield a)}createSubgraphContext(){const a=this.clone();a.body="";a.indent=this.indent+2;a._nodeEmitMap=new Map(this._nodeEmitMap);return a}clone(){const a=new p([],this._outputShaderTypes,this._transformFeedbackBindings,this._usedInFragmentShader);
a._inputShaderTypesByNodeUid=this._inputShaderTypesByNodeUid;a.indent=this.indent;a.body=this.body;a.varCount=this.varCount;a._nodeEmitMap=this._nodeEmitMap;return a}insertVertexShader(a){a.vertex.code.add("");this._insertInputs(a,"vertex");a.vertex.code.add("");a.vertex.code.add("// OUTPUTS: ");a.vertex.code.add("// --------------------------------------------------------- ");for(const b of this.rootOutputNodes()){const c="builtin"===b.outVariableType;this.shouldPruneOutputNode(b)||(c?a.vertex.code.add(`// ${b.outVariableType.padEnd(7)} ${b.node.type.padEnd(9)} ${b.outVariableName};`):
a.vertex.code.add(`${b.outVariableType.padEnd(10)} ${b.node.type.padEnd(9)} ${b.outVariableName};`))}a.vertex.code.add("");a.vertex.code.add("void main() {");a.vertex.code.add("  "+this.body.split("\n").join("\n  "));for(const b of this.rootOutputNodes())this.shouldPruneOutputNode(b)||a.vertex.code.add("  "+`${b.outVariableName} = ${b.variableName};`);a.vertex.code.add("}")}insertFragmentShader(a){this._insertInputs(a,"fragment");a.fragment.code.add("");a.fragment.code.add("// OUTPUTS: ");a.fragment.code.add("// --------------------------------------------------------- ");
for(const b of this.rootOutputNodes())"builtin"===b.outVariableType?a.fragment.code.add(`// ${b.outVariableType.padEnd(7)} ${b.node.type.padEnd(9)} ${b.outVariableName};`):a.fragment.code.add(`${b.outVariableType.padEnd(10)} ${b.node.type.padEnd(9)} ${b.outVariableName};`);a.fragment.code.add("");a.fragment.code.add("void main() {");a.fragment.code.add("  "+this.body.split("\n").join("\n  "));for(const b of this.rootOutputNodes())"discard"===b.outVariableType?(a.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"),
a.fragment.code.add("  "+`if (${b.variableName}) {`),a.fragment.code.add("    discard;"),a.fragment.code.add("  }"),a.fragment.code.add("  ")):a.fragment.code.add("  "+`${b.outVariableName} = ${b.variableName};`);a.fragment.code.add("}")}_insertInputs(a,b){a[b].code.add("// INPUTS: ");a[b].code.add("// --------------------------------------------------------- ");for(const c of this.inputs())c.isUsed&&"builtin"!==c.variableInputType&&("array"===c.node.type?a[b].code.add(`${c.variableInputType.padEnd(10)} ${c.node.elementType.type.padEnd(9)} ${c.variableName}[${c.node.size}];`):
a[b].code.add(`${c.variableInputType.padEnd(10)} ${c.node.type.padEnd(9)} ${c.variableName};`))}}n.ShaderGraphContext=p;n.ShaderInput=k;n.ShaderOutput=l;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});