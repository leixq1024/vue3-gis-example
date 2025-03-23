// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./index-p4VH55K1"],function(c,d){const e={CET:"Europe/Brussels",CST6CDT:"America/Chicago",EET:"Europe/Athens",EST:"America/Panama",EST5EDT:"America/New_York",HST:"Pacific/Honolulu",MET:"Europe/Brussels",MST:"America/Phoenix",MST7MDT:"America/Denver",PST8PDT:"America/Los_Angeles",WET:"Europe/Lisbon"},f=(()=>{const a=Object.keys(e);return Object.keys(d.getAllTimezones()).filter(b=>!a.includes(b))})();c.normalize=function(a){const b=e[a];return b?b:d.getTimezone(a)?.aliasOf??a};c.timeZones=
f;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});