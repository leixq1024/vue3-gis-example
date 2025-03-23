// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./index","./node","./asset","./scene"],function(a,e,f,g,h){a.toBinaryGLTF=async function(b,k){const c=new g.Asset,d=new h.Scene;c.addScene(d);d.addNode(new f.Node(b));return await e.exportGLB(c,{origin:b.origin,...k})};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});