// 地图相关操作
import { Viewer } from 'cesium'
let map: any = null
/**
 * @function 初始化场景
 * @param id 地图id
 */
export const createMap = (id: string) => {
  const options: { [x: string]: boolean } = {
    geocoder: false, // 地理编码控件不显示
    homeButton: false, // 默认相机位置控件不显示
    sceneModePicker: false, // 场景模式控件不显示
    baseLayerPicker: false, // 基础图层控件不显示
    navigationHelpButton: false, // 导航帮助控件不显示
    animation: false, // 动画控件不显示
    timeline: false, // 时间线控件不显示
    fullscreenButton: false, // 全屏控件不显示
    vrButton: false, // vr控件不显示
    infoBox: false, // 信息框控件不显示，点击要素后不弹出信息栏
    selectionIndicator: false // 选择跟踪控件不显示，点击要素后不弹出锁定框
  }

  map = new Viewer(id, options)
}
// 返回地图对象
export const getMap = () => {
  return map
}
