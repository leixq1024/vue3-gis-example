declare module '*.js' {
  // 定义 GeoJSON 数据结构
  interface GeoJSONFeature {
    geometry: {
      coordinates: [number, number, number][][]
    }
    [key: string]: any
  }

  interface GeoJSONData {
    features: GeoJSONFeature[]
  }

  // 声明导入的 roadData.js 模块
  declare module './roadData.js' {
    const geoJSON: GeoJSONData
    export { geoJSON }
  }

  // 渲染上下文接口
  interface RenderContext {
    gl: WebGLRenderingContext
    camera: {
      fovY: number
      aspect: number
      near: number
      far: number
      eye: [number, number, number]
      up: [number, number, number]
      center: [number, number, number]
      projectionMatrix: number[]
    }
    resetWebGLState: () => void
    bindRenderTarget: () => void
  }

  // 类选项接口
  interface RoadStreamersOptions {
    externalRenderers: {
      requestRender: (view: SceneView) => void
      toRenderCoordinates: (
        view: SceneView,
        input: [number, number, number],
        srcSpatialReference: number,
        destSpatialReference: number,
        output: number[],
        offset: number,
        count: number
      ) => void
    }
    view: SceneView
  }

  // 主类声明
  declare class RoadStreamers {
    constructor(options: RoadStreamersOptions)

    opts: {
      externalRenderers: RoadStreamersOptions['externalRenderers']
    }
    view: SceneView
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    textures: THREE.Texture[]
    mesh: THREE.Mesh | null
    clock: THREE.Clock
    horseClock: THREE.Clock
    mixer: typeof THREE.AnimationMixer
    horseMixer: typeof THREE.AnimationMixer

    setup(context: RenderContext): Promise<void>
    render(context: RenderContext): void
    destroy(): void
  }

  export default RoadStreamers
}
