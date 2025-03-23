// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(e,g,a,h,d){function f(){const b=new h.ShaderBuilder;b.include(g.ScreenSpacePass);b.fragment.uniforms.add(new d.Texture2DPassUniform("edgesTexture",c=>c.inputTexture),new d.Texture2DPassUniform("areaTexture",c=>c.areaTexture),
new d.Texture2DPassUniform("searchTexture",c=>c.searchTexture));b.fragment.code.add(a.glsl`
    #define SMAA_AREATEX_PIXEL_SIZE (1.0 / vec2(160.0, 560.0))
    #define SMAA_AREATEX_SUBTEX_SIZE (1.0 / 7.0)

    vec4 sampleLevelZeroOffset(vec2 coord, vec2 offset, vec2 resolution) {
      return texture(edgesTexture, coord + offset.x * resolution);
    }

    float searchLength(vec2 e, float bias, float scale) {
      e.r = bias + e.r * scale;
      return 255.0 * texture(searchTexture, e).r;
    }

    float searchLeft(vec2 texcoord, float end, vec2 resolution) {
      vec2 e = vec2(0.0, 1.0);
      for (int i = 0; i < ${a.glsl.int(8)}; ++i) {
        e = texture(edgesTexture, texcoord).rg;
        texcoord -= vec2(2.0, 0.0) * resolution;
        if (! (texcoord.x > end && e.g > 0.8281 && e.r == 0.0)) break;
      }
      texcoord.x += 0.25 * resolution.x;
      texcoord.x += resolution.x;
      texcoord.x += 2.0 * resolution.x;
      texcoord.x -= resolution.x * searchLength(e, 0.0, 0.5);
      return texcoord.x;
    }

    float searchRight(vec2 texcoord, float end, vec2 resolution) {
      vec2 e = vec2(0.0, 1.0);
      for (int i = 0; i < ${a.glsl.int(8)}; ++i) {
        e = texture(edgesTexture, texcoord).rg;
        texcoord += vec2(2.0, 0.0) * resolution;
        if (! (texcoord.x < end && e.g > 0.8281 && e.r == 0.0)) break;
      }
      texcoord.x -= 0.25 * resolution.x;
      texcoord.x -= resolution.x;
      texcoord.x -= 2.0 * resolution.x;
      texcoord.x += resolution.x * searchLength(e, 0.5, 0.5);
      return texcoord.x;
    }

    float searchUp(vec2 texcoord, float end, vec2 resolution) {
      vec2 e = vec2(1.0, 0.0);
      for (int i = 0; i < ${a.glsl.int(8)}; ++i) {
        e = texture(edgesTexture, texcoord).rg;
        texcoord += vec2(0.0, 2.0) * resolution;
        if (! (texcoord.y > end && e.r > 0.8281 && e.g == 0.0)) break;
      }
      texcoord.y -= 0.25 * resolution.y;
      texcoord.y -= resolution.y;
      texcoord.y -= 2.0 * resolution.y;
      texcoord.y += resolution.y * searchLength(e.gr, 0.0, 0.5);
      return texcoord.y;
    }

    float searchDown(vec2 texcoord, float end, vec2 resolution) {
      vec2 e = vec2(1.0, 0.0);
      for (int i = 0; i < ${a.glsl.int(8)}; ++i) {
        e = texture(edgesTexture, texcoord).rg;
        texcoord -= vec2(0.0, 2.0) * resolution;
        if (! (texcoord.y < end && e.r > 0.8281 && e.g == 0.0)) break;
      }
      texcoord.y += 0.25 * resolution.y;
      texcoord.y += resolution.y;
      texcoord.y += 2.0 * resolution.y;
      texcoord.y -= resolution.y * searchLength(e.gr, 0.5, 0.5);
      return texcoord.y;
    }

    vec2 getArea(sampler2D areaTex, vec2 dist, float e1, float e2, float offset) {
      vec2 texcoord = float(${a.glsl.int(16)}) * round(4.0 * vec2(e1, e2)) + dist;
      texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + (0.5 * SMAA_AREATEX_PIXEL_SIZE);
      texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;
      return texture(areaTex, texcoord).rg;
    }`);b.fragment.main.add(a.glsl`
    vec2 size = vec2(textureSize(edgesTexture, 0));
    vec2 resolution = 1.0 / size;
    vec2 pixelCoord = uv * size;
    vec4 offsets[2];
    offsets[0] = uv.xyxy + resolution.xyxy * vec4(-0.25, 0.125, 1.25, 0.125);
    offsets[1] = uv.xyxy + resolution.xyxy * vec4(-0.125, 0.25, -0.125, -1.25);
    vec4 maxOffset = vec4(offsets[0].xz, offsets[1].yw) + vec4(-2.0, 2.0, -2.0, 2.0) * resolution.xxyy * float(${a.glsl.int(8)});
    ivec4 subsampleIndices = ivec4(0.0);
    vec4 weights = vec4(0.0);
    vec2 e = texture(edgesTexture, uv).rg;
    if (e.r > 0.0) {
      vec2 d;
      vec2 coords;
      coords.y = searchUp(offsets[1].xy, maxOffset.z, resolution);
      coords.x = offsets[0].x;
      d.x = coords.y;
      float e1 = texture(edgesTexture, coords).g;
      coords.y = searchDown(offsets[1].zw, maxOffset.w, resolution);
      d.y = coords.y;
      d = d * size.y - pixelCoord.y;
      vec2 sqrt_d = sqrt(abs(d));
      coords.y -= 1.0 * resolution.y;
      float e2 = sampleLevelZeroOffset(coords, vec2(0.0, 1.0), resolution).g;
      weights.ba = getArea(areaTexture, sqrt_d, e1, e2, float(subsampleIndices.x));
      // for some reason the following lines are necessary to prevent
      // texture lookup precision issues on some Intel integrated graphics chips
      vec4 dbg = (offsets[0] + offsets[1] + maxOffset + coords.xyyx);
      weights.r += 0.00000001 * dot(vec4(0, 1, 0, 1), dbg);
    }
    if (e.g > 0.0) {
      vec2 d;
      vec2 coords;
      coords.x = searchLeft(offsets[0].xy, maxOffset.x, resolution);
      coords.y = offsets[1].y;
      d.x = coords.x;
      float e1 = texture(edgesTexture, coords).r;
      coords.x = searchRight(offsets[0].zw, maxOffset.y, resolution);
      d.y = coords.x;
      d = d * size.x - pixelCoord.x;
      vec2 sqrt_d = sqrt(abs(d));
      coords.y -= 1.0 * resolution.y;
      float e2 = sampleLevelZeroOffset(coords, vec2(1.0, 0.0), resolution).r;
      weights.rg = getArea(areaTexture, sqrt_d, e1, e2, float(subsampleIndices.y));
    }
    fragColor = weights;
  `);return b}const k=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.BlendWeights=k;e.build=f});