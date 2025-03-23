// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/Logger ../Entity ../GraphObject ../GraphQueryResultHeader ../ObjectValue ../Path ../Relationship ./KnowledgeWasmInterface ./WasmQueryWrapperInterfaces ./wasmToGeometryFactories ../../../geometry/SpatialReference".split(" "),function(f,G,y,z,A,B,C,D,E,h,k,m,F){function u(a,c,b){const e=[],l=a.count();for(let d=0;d<l;d++){const g=a.get_value_at(d);e.push(q(g,c,b))}return e}function q(a,c,b){return v.decodedWasmObjToQueryResponseObj(a,c,b)}function r(a,
c,b){const e=a.type_name;c=n(a,c,b);a=a.get_id();return new z(Object.assign({typeName:e,id:a},c))}function n(a,c,b){const e={},l=a.key_count();for(let d=0;d<l;d++)e[a.get_key_at(d)]=q(a.get_value_at(d),c,b);return{properties:e}}function w(a,c,b){return new C(n(a,c,b))}function x(a,c,b){const e=a.entity_count(),l=a.relationship_count(),d=[];for(let g=0;g<e;g++)d.push(r(a.get_entity_at(g),c,b)),g<l&&d.push(t(a.get_relationship_at(g),c,b));return new D({path:d})}function t(a,c,b){const e=a.type_name;
c=n(a,c,b);return new E(Object.assign({typeName:e,id:a.get_id(),originId:a.get_origin_entity_id(),destinationId:a.get_destination_entity_id()},c))}const p=()=>y.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),v={decodedWasmObjToQueryResponseObj:(a,c,b)=>{if(null==a)return null;if("object"!==typeof a||"getDate"in a)return a;if("geometry_type"in a)switch(a.geometry_type.value){case null:return null;case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_POINT:return m.wasmToPointGeometry(a,
b);case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTIPOINT:return m.wasmToMultipointGeometry(a,b);case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE:return m.wasmToPolylineGeometry(a,b);case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON:return m.wasmToPolygonGeometry(a,b);case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_ENVELOPE:case h.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTI_PATCH:return p().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),
null;default:return p().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else if("object_value_type"in a)switch(a.object_value_type.value){case k.WasmGraphQueryResponseTypeCodes.OBJECT:return w(a,c,b);case k.WasmGraphQueryResponseTypeCodes.ENTITY:return r(a,c,b);case k.WasmGraphQueryResponseTypeCodes.RELATIONSHIP:return t(a,c,b);case k.WasmGraphQueryResponseTypeCodes.PATH:return x(a,c,b);case k.WasmGraphQueryResponseTypeCodes.ARRAY:return u(a,c,b);default:return p().warnOnce("Unknown graph object type detected!  Result interpreted as null"),
null}else return p().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null}};f.decodeWasmObjectTest=v;f.decodedWasmObjToQueryResponseObj=q;f.wasmArrayToArray=u;f.wasmToEntity=r;f.wasmToGraphObject=function(a,c,b){return new A(n(a,c,b))};f.wasmToGraphQueryResponseHeader=function(a){const c=[];for(var b=0;b<a.get_header_keys().size();b++)c.push(a.get_header_keys().get(b));b=new F(a.get_out_sr());return new B({headerKeys:c,outSpatialReference:b,exceededTransferLimit:a.exceeded_transfer_limit()})};
f.wasmToObjectValue=w;f.wasmToPath=x;f.wasmToRelationship=t;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});