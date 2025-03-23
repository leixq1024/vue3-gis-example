/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{u as t,g as e}from"./converterAPI.js";function i(i,n,r=!1){const o=t(i.m_coordinate,e(n)),s=i.m_distance,d=i.isEmpty(),m=i.m_bRightSide;return{coordinate:o,distance:s,isEmpty:d,...r&&{isRightSide:m},vertexIndex:i.m_vertexIndex}}export{i as t};
