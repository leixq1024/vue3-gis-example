// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../number","../../../../../../webgl/enums"],function(k,h,g){k.packDataView=function(f,b,a,d){const c=a.packPrecisionFactor??1;switch(a.type){case g.DataType.BYTE:if(1===a.count)f.setInt8(d+a.offset,b*c);else for(var e=0;e<a.count;e++)f.setInt8(d+a.offset+e*Int8Array.BYTES_PER_ELEMENT,b[e]*c);break;case g.DataType.UNSIGNED_BYTE:if(1===a.count)f.setUint8(d+a.offset,b*c);else for(e=0;e<a.count;e++)f.setUint8(d+a.offset+e*Uint8Array.BYTES_PER_ELEMENT,b[e]*c);break;case g.DataType.SHORT:if(1===
a.count)f.setInt16(d+a.offset,b*c,!0);else for(e=0;e<a.count;e++)f.setInt16(d+a.offset+e*Int16Array.BYTES_PER_ELEMENT,b[e]*c,!0);break;case g.DataType.UNSIGNED_SHORT:if(1===a.count)f.setUint16(d+a.offset,b*c,!0);else for(e=0;e<a.count;e++)f.setUint16(d+a.offset+e*Uint16Array.BYTES_PER_ELEMENT,b[e]*c,!0);break;case g.DataType.INT:if(1===a.count)f.setInt32(d+a.offset,b*c,!0);else for(e=0;e<a.count;e++)f.setInt32(d+a.offset+e*Int32Array.BYTES_PER_ELEMENT,b[e]*c,!0);break;case g.DataType.UNSIGNED_INT:if(1===
a.count)f.setUint32(d+a.offset,b*c,!0);else for(e=0;e<a.count;e++)f.setUint32(d+a.offset+e*Uint32Array.BYTES_PER_ELEMENT,b[e]*c,!0);break;case g.DataType.FLOAT:if(1===a.count)f.setFloat32(d+a.offset,b*c,!0);else for(e=0;e<a.count;e++)f.setFloat32(d+a.offset+e*Float32Array.BYTES_PER_ELEMENT,b[e]*c,!0);break;case g.DataType.HALF_FLOAT:if(1===a.count)f.setUint16(d+a.offset,h.toUint16(b*c),!0);else for(e=0;e<a.count;e++)f.setUint16(d+a.offset+e*Uint16Array.BYTES_PER_ELEMENT,h.toUint16(b[e]*c),!0)}};k.unpackDataView=
function(f,b,a){switch(b.type){case g.DataType.BYTE:if(1===b.count)return f.getInt8(a+b.offset);var d=[];for(var c=0;c<b.count;c++)d.push(f.getInt8(a+b.offset+c*Int8Array.BYTES_PER_ELEMENT));return d;case g.DataType.UNSIGNED_BYTE:if(1===b.count)return f.getUint8(a+b.offset);d=[];for(c=0;c<b.count;c++)d.push(f.getUint8(a+b.offset+c*Uint8Array.BYTES_PER_ELEMENT));return d;case g.DataType.SHORT:if(1===b.count)return f.getInt16(a+b.offset,!0);d=[];for(c=0;c<b.count;c++)d.push(f.getInt16(a+b.offset+c*
Int16Array.BYTES_PER_ELEMENT,!0));return d;case g.DataType.UNSIGNED_SHORT:if(1===b.count)return f.getUint16(a+b.offset,!0);d=[];for(c=0;c<b.count;c++)d.push(f.getUint16(a+b.offset+c*Uint16Array.BYTES_PER_ELEMENT,!0));return d;case g.DataType.INT:if(1===b.count)return f.getInt32(a+b.offset,!0);d=[];for(c=0;c<b.count;c++)d.push(f.getInt32(a+b.offset+c*Int32Array.BYTES_PER_ELEMENT,!0));return d;case g.DataType.UNSIGNED_INT:if(1===b.count)return f.getUint32(a+b.offset,!0);d=[];for(c=0;c<b.count;c++)d.push(f.getUint32(a+
b.offset+c*Uint32Array.BYTES_PER_ELEMENT,!0));return d;case g.DataType.FLOAT:if(1===b.count)return f.getFloat32(a+b.offset,!0);d=[];for(c=0;c<b.count;c++)d.push(f.getFloat32(a+b.offset+c*Float32Array.BYTES_PER_ELEMENT,!0));return d;case g.DataType.HALF_FLOAT:if(1===b.count)return h.fromUint16(f.getUint16(a+b.offset,!0));d=[];for(c=0;c<b.count;c++)d.push(h.fromUint16(f.getUint16(a+b.offset+c*Uint16Array.BYTES_PER_ELEMENT,!0)));return d}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});