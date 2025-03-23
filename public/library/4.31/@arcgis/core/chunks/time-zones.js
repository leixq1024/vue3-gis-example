/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{g as e,a as r}from"./index-p4VH55K1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const s={CET:"Europe/Brussels",CST6CDT:"America/Chicago",EET:"Europe/Athens",EST:"America/Panama",EST5EDT:"America/New_York",HST:"Pacific/Honolulu",MET:"Europe/Brussels",MST:"America/Phoenix",MST7MDT:"America/Denver",PST8PDT:"America/Los_Angeles",WET:"Europe/Lisbon"},o=(()=>{const r=Object.keys(s);return Object.keys(e()).filter((e=>!r.includes(e)))})();function i(e){const o=s[e];if(o)return o;const i=r(e);return i?.aliasOf??e}export{i as normalize,o as timeZones};
