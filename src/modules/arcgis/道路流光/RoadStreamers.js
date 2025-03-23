import { geoJSON } from './roadData.js'
// 定义外部渲染器类，用于在ArcGIS地图中集成Three.js三维渲染
export default class RoadStreamers {
  constructor(options) {
    this.opts = {
      externalRenderers: null
    }
    this.opts.externalRenderers = options.externalRenderers
    this.view = options.view
    this.mesh = null
    this.textures = []
  }

  // 初始化Three.js渲染环境
  async setup(context) {
    const THREE = window.THREE
    this.horseMixer = THREE.AnimationMixer // 动画混合器类引用
    this.clock = new THREE.Clock() // 通用时钟
    this.horseClock = new THREE.Clock() // 专用动画时钟
    this.mixer = THREE.AnimationMixer // 动画混合器类引用

    // 创建Three.js WebGL渲染器
    this.renderer = new THREE.WebGLRenderer({
      context: context.gl, // 共享ArcGIS的WebGL上下文
      premultipliedAlpha: false // 禁用预乘透明度通道
    })
    // 配置渲染器参数
    this.renderer.setPixelRatio(window.devicePixelRatio) // 设置设备像素比
    this.renderer.setViewport(0, 0, this.view.width, this.view.height) // 视口尺寸匹配地图视图

    // 配置自动清除策略
    this.renderer.autoClear = false // 禁用自动清除缓冲区
    this.renderer.autoClearDepth = false // 禁用自动清除深度缓冲
    this.renderer.autoClearColor = false // 禁用自动清除颜色缓冲
    const originalSetRenderTarget = this.renderer.setRenderTarget.bind(this.renderer)
    this.renderer.setRenderTarget = function (target) {
      originalSetRenderTarget(target)
      if (target == null) {
        context.bindRenderTarget() // 当目标为空时重新绑定ArcGIS渲染目标
      }
    }
    // 初始化Three.js场景
    this.scene = new THREE.Scene()
    // 配置Three.js相机参数匹配ArcGIS相机
    const cam = context.camera
    this.camera = new THREE.PerspectiveCamera(
      cam.fovY, // 垂直视野
      cam.aspect, // 宽高比
      cam.near, // 近裁剪面
      cam.far // 远裁剪面
    )
    // 创建空几何体
    geoJSON['features'].forEach(item => {
      const points = []
      item['geometry']['coordinates'].forEach(element => {
        const cenP = []
        this.opts.externalRenderers.toRenderCoordinates(
          this.view,
          [element[0], element[1], 1000],
          0,
          this.view.spatialReference,
          cenP,
          0,
          1
        )
        points.push(new THREE.Vector3(cenP[0], cenP[1], cenP[2]))
      })
      let lineTexture = new THREE.TextureLoader().load('/img/line.png')
      lineTexture.wrapS = lineTexture.wrapT = THREE.RepeatWrapping //每个都重复
      lineTexture.repeat.set(1, 1)
      lineTexture.needsUpdate = true

      let material = new THREE.MeshBasicMaterial({
        map: lineTexture,
        side: THREE.DoubleSide,
        transparent: true
      })
      const curvePath = new THREE.CatmullRomCurve3(points)
      let geometry = new THREE.TubeGeometry(curvePath, 64, 300, 8, true)
      let mesh = new THREE.Mesh(geometry, material)
      this.scene.add(mesh)
      this.textures.push(lineTexture)
    })

    context.resetWebGLState()
  }
  /**
   * 每帧渲染方法
   * @param {Object} context - ArcGIS提供的渲染上下文
   */
  render(context) {
    const THREE = window.THREE
    const cam = context.camera
    if (this.camera) {
      // 同步ArcGIS相机参数到Three.js相机
      this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]) // 相机位置
      this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]) // 相机上方向
      this.camera.lookAt(new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2])) // 相机注视点
      this.camera.projectionMatrix.fromArray(cam.projectionMatrix) // 投影矩阵
    }
    if (this.textures.length > 0) {
      this.textures.forEach(texture => {
        if (texture) texture.offset.x -= 0.005
      })
      this.opts.externalRenderers.requestRender(this.view)
    }
    // 请求下一帧渲染
    if (this.renderer) {
      context.resetWebGLState()
      this.renderer.state.reset()
      context.bindRenderTarget()
      this.renderer.render(this.scene, this.camera)
    }
  }
  destroy() {
    this.stopAnimationLoop()
  }
}
