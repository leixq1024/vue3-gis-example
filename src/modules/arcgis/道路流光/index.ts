import { getModules } from '@/utils/esri/arcgisApi'
import config from '@/utils/esri/appConfig'
import RoadStreamers from './RoadStreamers.js'
let threeRendererStatus: RoadStreamers | null = null
// 加载道路流光
export const loadRoadStreamers = async () => {
  const [externalRenderers] = await getModules([
    'esri/views/3d/externalRenderers' // 外部渲染器（用于集成Three.js）
  ])
  const sceneView = config.sceneView
  // 如果已经加载了道路流光就将其关闭
  if (threeRendererStatus) {
    externalRenderers.remove(sceneView, threeRendererStatus)
    threeRendererStatus = null
    return
  }

  //  加载第三方渲染器
  const threeRenderer = new RoadStreamers({
    externalRenderers,
    view: sceneView
  })
  externalRenderers.add(sceneView, threeRenderer)
  threeRendererStatus = threeRenderer
  // 定位到路线位置
  sceneView.goTo({
    target: [113.2024691, 22.92555768],
    zoom: 9
  })
}
