import { getModules } from './arcgisApi'
import config from './appConfig'
import ExternalRendererLayer from '@/utils/esri/ExternalRendererLayer.js'
/**
 * @function 创建带流光道路的三维场景
 * @param contentId 挂载的DOM元素ID（默认'#sceneView'）
 * @return void
 */
export const create3dView = async (contentId: string = '#sceneView') => {
  // 异步加载ArcGIS API所需模块
  const [Map, SceneView, externalRenderers] = await getModules([
    'esri/Map', // 地图模块
    'esri/views/SceneView', // 3D场景视图模块
    'esri/views/3d/externalRenderers' // 外部渲染器（用于集成Three.js）
  ])

  // 场景视图配置参数
  const mapConfig: any = {
    container: contentId, // 挂载DOM元素的ID
    spatialReference: {
      // 坐标系配置
      wkid: 4490, // 中国2000地理坐标系
      latestWkid: 4490 // 最新坐标系代码
    },
    constraints: {
      rotationEnabled: false // 禁用视图旋转
    },
    scale: 1000, // 初始比例尺（1:5千万）
    center: [113.2024691, 22.92555768] // 初始中心点坐标（经度, 纬度）
  }

  // 创建地图实例
  const map = new Map({
    basemap: 'satellite', // 使用矢量地形底图
    ground: 'world-elevation' // 启用全球高程地形
  })

  // 初始化3D场景视图
  const sceneView = new SceneView({
    ...mapConfig, // 展开配置参数
    map: map // 关联地图实例
  })
  // 将场景视图存入全局配置
  config.scenView = sceneView
  const threeRenderer = new ExternalRendererLayer({
    externalRenderers,
    view: sceneView
  })
  externalRenderers.add(sceneView, threeRenderer)
  sceneView.when(function () {
    sceneView.goTo({
      fov: 55,
      heading: 55.99495193816657,
      position: {
        x: 113.2024691,
        y: 22.92555768,
        z: 8574.5211164545,
        spatialReference: {
          wkid: 4490
        }
      },
      tilt: 69.0179407311609
    })
  })
}
