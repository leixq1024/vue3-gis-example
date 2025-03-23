// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../geometry/SpatialReference ../DataModel ../EntityType ../FieldIndex ../GraphObjectType ../GraphProperty ../RelationshipType ../SearchIndex ../SourceTypeValueBehavior ./WasmDataModelWrapperInterfaces".split(" "),function(n,G,H,I,J,K,L,M,N,O,P,g){function x(a){a.deleteLater();return new J(u(a))}function y(a){a.deleteLater();var c=a.name,d=a.unique,h=a.ascending,p=a.description;a=a.fields;const e=[];for(let q=0;q<a.size();q++)e.push(a.get(q));a.delete();return new K({name:c,
unique:d,ascending:h,description:p,fieldNames:e})}function u(a){var c=a.name,d=a.alias,h=g.NamedObjectTypes[a.role.value]?g.NamedObjectTypes[a.role.value]:null,p=a.strict,e=a.properties;const q=[];for(var k=0;k<e.size();k++){const r=z(e.get(k));"esriFieldTypeBigInteger"===r.fieldType&&(v=!0);q.push(r)}e.delete();a=a.field_indexes;e=[];for(k=0;k<a.size();k++)e.push(y(a.get(k)));a.delete();return{name:c,alias:d,role:h,strict:p,properties:q,fieldIndexes:e}}function z(a){a.deleteLater();return new M({alias:a.alias,
name:a.name,fieldType:g.EsriFieldTypes[a.field_type.value]?g.EsriFieldTypes[a.field_type.value]:null,geometryType:g.EsriGeometryTypes[a.geometry_type.value]?g.EsriGeometryTypes[a.geometry_type.value]:null,hasM:a.has_m,hasZ:a.has_z,nullable:a.nullable,editable:a.editable,required:a.required,defaultVisibility:a.default_visibility,systemMaintained:a.system_maintained,role:g.EsriGraphPropertyRole[a.role.value],defaultValue:a.default_value})}function A(a){a.deleteLater();const c=u(a),d=[];for(let h=0;h<
a.end_points.size();h++){const p=a.end_points.get(h);d.push({originEntityType:p.origin_entity_type,destinationEntityType:p.dest_entity_type})}a.end_points.delete();return new N(Object.assign({endPoints:d},c))}function B(a){return new P({behavior:a.behavior,value:a.value})}function C(a){const c=[];for(let d=0;d<a.size();d++)c.push(x(a.get(d)));a.delete();return c}let v=!1;n.wasmToDataModel=function(a){a.deleteLater();v=!1;var c=a.timestamp,d=new H(a.spatial_reference),h=a.strict,p=a.objectid_property,
e=a.globalid_property,q=a.arcgis_managed,k={identifierMappingInfo:{identifierInfoType:g.EsriIdentifierInfoType[a.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:a.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:a.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:g.EsriUuidMethodHintTypes[a.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},
r=a.search_indexes;const D=[];for(var t=0;t<r.size();t++){var f=new O,b=r.get(0);f.name=b.name;f.supportedCategory=g.EsriNamedTypeCategory[b.supported_category.value];var l=b.analyzers.size();for(var m=0;m<l;m++)f.analyzers.push({name:b.analyzers.get(m).name});b.analyzers.delete();for(l=0;l<b.search_properties.keys().size();l++){m=b.search_properties.keys().get(l);const E=b.search_properties.get(m),F=[];for(let w=0;w<E.property_names.size();w++)F.push(E.property_names.get(w));f.searchProperties.set(m,
{propertyNames:F})}D.push(f)}r.delete();r=C(a.entity_types);f=a.relationship_types;t=[];for(b=0;b<f.size();b++)t.push(A(f.get(b)));f.delete();f=C(a.meta_entity_types);a=a.provenance_source_type_values.value_behavior_array;b=[];for(l=0;l<a.size();l++)m=a.get(l),m.deleteLater(),b.push(B(m));a.delete();c=new I({timestamp:c,spatialReference:d,strict:h,objectIdField:p,globalIdField:e,arcgisManaged:q,identifierInfo:k,searchIndexes:D,entityTypes:r,relationshipTypes:t,metaEntityTypes:f,provenanceSourceTypeValues:b});
v&&G.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("A big integer field was detected in the retrieved data model.  The `big-integer` field type is not fully supported in web clients.  Please see https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type");return c};n.wasmToEntityType=x;n.wasmToFieldIndex=y;n.wasmToGraphObjectType=function(a){a.deleteLater();return new L(u(a))};n.wasmToGraphProperty=z;n.wasmToRelationshipType=A;n.wasmToSourceTypeValueBehavior=
B;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});