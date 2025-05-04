import { getModules } from './arcgisApi'
import config from './appConfig'
// import { tdtToken } from '@/config/onlineMapConfig'
/**
 * @function 创建三维场景
 * @param contentId 挂载的DOM元素ID（默认'#sceneView'）
 * @return void
 */
export const create3dView = async (contentId: string = '#sceneView') => {
  // 异步加载ArcGIS API所需模块
  const [Map, SceneView] = await getModules([
    'esri/Map', // 地图模块
    'esri/views/SceneView' // 3D场景视图模块
  ])

  // 场景视图配置参数
  const mapConfig: any = {
    container: contentId, // 挂载DOM元素的ID
    spatialReference: {
      // 坐标系配置
      wkid: 4490, // 中国2000地理坐标系
      latestWkid: 4490 // 最新坐标系代码
    }
    // scale: 1000, // 初始比例尺（1:5千万）
    // center: [113.2024691, 22.92555768] // 初始中心点坐标（经度, 纬度）
  }
  const map = new Map({
    showLabels: false,
    logo: false,
    autoResize: true,
    isPinchZoom: true,
    operator: 1,
    ground: {
      surfaceColor: '#868b7e',
      opacity: 1
    },
    layers: [],
    basemap: []
  })
  // 初始化3D场景视图
  const sceneView = new SceneView({
    ...mapConfig, // 展开配置参数
    map: map // 关联地图实例
  })
  // 将场景视图存入全局配置
  config.sceneView = sceneView
}
