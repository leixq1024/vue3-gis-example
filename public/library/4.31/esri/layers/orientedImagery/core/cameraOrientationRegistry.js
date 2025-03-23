// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./CameraOrientationHPR","./CameraOrientationLTP","./CameraOrientationOPK","./CameraOrientationYPR","../enums/CameraOrientationType"],function(c,d,e,f,b){const a=new Map;a.set(`${b.CameraOrientationType.OPK}`,{desc:"Using Omega Phi Kappa",constructor:e});a.set(`${b.CameraOrientationType.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:c});a.set(`${b.CameraOrientationType.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:f});a.set(`${b.CameraOrientationType.LTP}`,{desc:"Using Local Tangent Plane",
constructor:d});return a});