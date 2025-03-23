// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/output/Emissions.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/util/AlphaCutoff ../core/shaderLibrary/util/ColorConversion.glsl ../core/shaderModules/interfaces ../lib/OITPass".split(" "),function(h,d,n,p,q,r,a,k){h.outputColorHighlightOID=function(c,b){c.include(p.OutputHighlight,b);c.include(n.Emissions,b);c.fragment.include(r.ColorConversion);const l=b.output===d.ShaderOutput.ObjectAndLayerIdColor,
e=d.isColorEmission(b.output),f=d.isColorOrColorEmission(b.output)&&b.oitPass===k.OITPass.ColorAlpha,m=d.isColorOrColorEmission(b.output)&&b.oitPass!==k.OITPass.ColorAlpha;b=b.discardInvisibleFragments;let g=0;(m||e||f)&&c.outputs.add("fragColor","vec4",g++);e&&c.outputs.add("fragEmission","vec4",g++);f&&c.outputs.add("fragAlpha","float",g++);c.fragment.code.add(a.glsl`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${a.If(l,a.glsl`finalColor.a = 1.0;`)}

      ${a.If(b,a.glsl`if (finalColor.a < ${a.glsl.float(q.alphaCutoff)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${a.If(f,a.glsl`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${a.If(m,"fragColor \x3d finalColor;")}
      ${a.If(e,"fragEmission \x3d getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${a.If(l,"outputObjectAndLayerIdColor();")}
    }
  `)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});