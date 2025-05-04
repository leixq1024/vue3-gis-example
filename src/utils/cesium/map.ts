// 地图相关操作
import { Viewer } from 'cesium'
let map: any = null
/**
 * @function 初始化场景
 * @param id 地图id
 * @param options 地图配置
 */
export const createMap = (id: string, options: any) => {
  map = new Viewer(id, options)
}
// 返回地图对象
export const getMap = () => {
  return map
}


