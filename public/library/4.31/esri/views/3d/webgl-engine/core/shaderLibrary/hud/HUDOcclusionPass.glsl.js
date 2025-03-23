// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./AlignPixel.glsl","../shading/TerrainDepthTest.glsl","../../shaderModules/interfaces"],function(d,f,g,a){d.HUDOcclusionPass=function(b,c){const {vertex:e,fragment:h}=b;b.include(g.terrainDepthTest,c);e.include(f.AlignPixel);c.terrainDepthTest&&b.varyings.add("depth","float");e.main.add(a.glsl`
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${c.terrainDepthTest?a.glsl`depth = projectAux.posView.z;`:""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  `);h.main.add(a.glsl`fragColor = vec4(1);
if(terrainDepthTest(depth)) {
fragColor.g = 0.5;
}`)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});