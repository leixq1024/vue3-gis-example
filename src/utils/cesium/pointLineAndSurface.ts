// cesium 点线面操作
import * as Cesium from 'cesium'
import { getMap } from './map'
// 定义绘制模式类型
type DrawingMode = 'Point' | 'Polyline' | 'Polygon' | 'Circle' | 'Rectangle'

// 扩展 Entity 类型以支持自定义属性
interface CustomEntity extends Cesium.Entity {
  positionData?: Cesium.Cartesian3 | Cesium.Cartesian3[]
  radius?: number
}

// 绘制配置参数接口
interface DrawOptions {
  continueDraw?: boolean // 是否连续绘制，默认 true
  removeLast?: boolean // 是否移除上一次绘制的图形，默认 true
}

// 全局变量声明
let drawHandler: Cesium.ScreenSpaceEventHandler | null = null
let activeShapePoints: Cesium.Cartesian3[] = []
let floatingPoint: CustomEntity | undefined | any
let activeShape: CustomEntity | undefined | any
let lastFeature: CustomEntity | undefined | any
const drawLayers: CustomEntity[] = []
// 地图打点
export const addPoint = () => {
  const Viewer: any = getMap()
  const point = Viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(118.107358, 24.47745, 10),
    point: {
      // 点的大小（像素）
      pixelSize: 5,
      // 点位颜色，fromCssColorString 可以直接使用CSS颜色
      color: Cesium.Color.fromCssColorString('#ee0000'),
      // 边框颜色
      outlineColor: Cesium.Color.fromCssColorString('#fff'),
      // 边框宽度(像素)
      outlineWidth: 2,
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(0, 1500),
      // 是否显示
      show: true
    }
  })
  return point
}
// 文字点
export const addTextPoint = () => {
  const Viewer: any = getMap()
  const point = Viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(118.107358, 24.47745, 10),
    // 点
    point: {
      color: Cesium.Color.RED, // 点位颜色
      pixelSize: 10 // 像素点大小
    },
    // 文字
    label: {
      // 文本。支持显式换行符“ \ n”
      text: '文字点',
      // 字体样式，以CSS语法指定字体
      font: '14pt Source Han Sans CN',
      // 字体颜色
      fillColor: Cesium.Color.BLACK,
      // 背景颜色
      backgroundColor: Cesium.Color.AQUA,
      // 是否显示背景颜色
      showBackground: true,
      // 字体边框
      outline: true,
      // 字体边框颜色
      outlineColor: Cesium.Color.WHITE,
      // 字体边框尺寸
      outlineWidth: 10,
      // 应用于图像的统一比例。比例大于会1.0放大标签，而比例小于会1.0缩小标签。
      scale: 1.0,
      // 设置样式：FILL：填写标签的文本，但不要勾勒轮廓；OUTLINE：概述标签的文本，但不要填写；FILL_AND_OUTLINE：填写并概述标签文本。
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      // 相对于坐标的水平位置
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
      // 相对于坐标的水平位置
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      // 该属性指定标签在屏幕空间中距此标签原点的像素偏移量
      pixelOffset: new Cesium.Cartesian2(10, 0),
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(0, 1500),
      // 是否显示
      show: true
    }
  })
  return point
}
// 图片点
export const addImgPoint = () => {
  const Viewer: any = getMap()
  const point = Viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(118.107358, 24.47745, 10),
    billboard: {
      // 图像地址，URI或Canvas的属性
      image: '/img/poi.png',
      // 高度（以像素为单位）
      height: 50,
      // 宽度（以像素为单位）
      width: 50,
      // 逆时针旋转
      rotation: 0,
      // 大小是否以米为单位
      sizeInMeters: false,
      // 相对于坐标的垂直位置
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
      // 相对于坐标的水平位置
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      // 该属性指定标签在屏幕空间中距此标签原点的像素偏移量
      pixelOffset: new Cesium.Cartesian2(10, 0),
      // 应用于图像的统一比例。比例大于会1.0放大标签，而比例小于会1.0缩小标签。
      scale: 1.0,
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(0, 30000),
      // 是否显示
      show: true
    }
  })
  return point
}

// 面
export const addPolygon = () => {
  const Viewer: any = getMap()
  const polygon: any = Viewer.entities.add({
    polygon: {
      hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([120.9677706, 30.7985748, 110.2, 34.55, 120.2, 50.55])
      },
      // 边框
      outline: true,
      // 边框颜色
      outlineColor: Cesium.Color.WHITE,
      // 边框尺寸
      outlineWidth: 2,
      // 填充的颜色，withAlpha透明度
      material: Cesium.Color.GREEN.withAlpha(0.5),
      // 是否被提供的材质填充
      fill: true,
      // 恒定高度
      height: 5000,
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(1000, 10000000),
      // 是否显示
      show: true,
      // 顺序,仅当`clampToGround`为true并且支持地形上的折线时才有效。
      zIndex: 10
    }
  })
  return polygon
}
// 镂空面
export const addHollowPolygon = () => {
  const Viewer: any = getMap()
  const polygon: any = Viewer.entities.add({
    polygon: {
      hierarchy: {
        positions: Cesium.Cartesian3.fromDegreesArray([120.9677706, 30.7985748, 110.2, 34.55, 120.2, 50.55])
      },
      // 边框
      outline: true,
      // 边框颜色
      outlineColor: Cesium.Color.WHITE,
      // 边框尺寸
      outlineWidth: 2,
      // 填充的颜色，withAlpha透明度
      material: Cesium.Color.GREEN.withAlpha(0),
      // 是否被提供的材质填充
      fill: true,
      // 恒定高度
      height: 5000,
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(1000, 10000000),
      // 是否显示
      show: true,
      // 顺序,仅当`clampToGround`为true并且支持地形上的折线时才有效。
      zIndex: 10
    }
  })
  return polygon
}

// 坐标画线
export const addLine = () => {
  const Viewer: any = getMap()
  const line = Viewer.entities.add({
    polyline: {
      // 线的坐标
      positions: Cesium.Cartesian3.fromDegreesArray([120.9677706, 30.7985748, 110.2, 34.55, 120.2, 50.55]),
      // 线的颜色
      material: Cesium.Color.RED,
      // 线的宽度
      width: 5,
      // 恒定高度
      height: 5000,
      // 显示在距相机的距离处的属性，多少区间内是可以显示的
      // distanceDisplayCondition: new DistanceDisplayCondition(1000, 10000000),
      // 是否显示
      show: true,
      // 顺序,仅当`clampToGround`为true并且支持地形上的折线时才有效。
      zIndex: 10
    }
  })
  return line
}
/**
 * 手动绘制几何图形
 * @param viewer - Cesium 地图视图对象
 * @param drawingMode - 绘制模式：点/线/面/圆/矩形
 * @param options.continueDraw  - 是否连续绘制,默认true
 * @param options.removeLast - 是否清除上一个绘制
 * @param callback - 绘制完成回调函数
 * @returns 屏幕空间事件处理器
 */
export const draw = (
  viewer: any,
  drawingMode: DrawingMode,
  options: DrawOptions = { continueDraw: true, removeLast: true },
  callback?: (entity: CustomEntity) => void
): Cesium.ScreenSpaceEventHandler | undefined => {
  if (!viewer) return

  const { continueDraw = true, removeLast = true } = options

  // 配置场景参数
  viewer.scene.globe.depthTestAgainstTerrain = false
  viewer.enableCursorStyle = false
  viewer._element.style.cursor = 'crosshair'

  // 清理现有处理器
  if (drawHandler && !drawHandler.isDestroyed()) {
    drawHandler.destroy()
  }

  terminateShape()

  // 初始化事件处理器
  drawHandler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)

  // 处理左键点击事件
  drawHandler.setInputAction((event: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
    const earthPosition = viewer.scene.pickPosition(event.position)

    if (Cesium.defined(earthPosition)) {
      if (drawingMode === 'Point') {
        // 点要素处理逻辑
        const finalPoint = createPoint(earthPosition)
        drawLayers.push(finalPoint)

        if (!continueDraw) {
          cleanupHandler()
        }
        callback?.(finalPoint)
        return
      }

      if (!activeShapePoints.length) {
        // 初始化动态图形
        floatingPoint = createPoint(earthPosition, false)
        activeShapePoints.push(earthPosition)

        const dynamicPositions = new Cesium.CallbackProperty(() => {
          return drawingMode === 'Polygon' ? new Cesium.PolygonHierarchy(activeShapePoints) : activeShapePoints
        }, false)

        activeShape = drawShape(dynamicPositions)
      } else if (['Rectangle', 'Circle'].includes(drawingMode)) {
        // 矩形和圆特殊处理
        if (!continueDraw) cleanupHandler()
        terminateShape(removeLast)
        return
      }

      activeShapePoints.push(earthPosition)
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  // 处理鼠标移动事件
  drawHandler.setInputAction((event: Cesium.ScreenSpaceEventHandler.MotionEvent) => {
    if (floatingPoint) {
      const newPosition: any = viewer.scene.pickPosition(event.endPosition)
      if (Cesium.defined(newPosition)) {
        floatingPoint.position?.setValue(newPosition)
        activeShapePoints.pop()
        activeShapePoints.push(newPosition)
      }
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

  // 处理双击事件
  drawHandler.setInputAction(() => {
    if (!continueDraw) cleanupHandler()
    activeShapePoints = activeShapePoints.slice(0, -2)
    terminateShape(removeLast)
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

  /** 清理事件处理器 */
  const cleanupHandler = () => {
    drawHandler?.destroy()
    viewer._element.style.cursor = 'default'
  }

  /** 终止当前图形绘制 */
  function terminateShape(removeLast?: boolean): void {
    removeLast && viewer.entities.remove(lastFeature!)

    if (activeShapePoints.length) {
      const finalShape = drawShape(activeShapePoints, true)
      drawLayers.push(finalShape)
      callback?.(finalShape)
    }

    viewer.entities.remove(floatingPoint!)
    viewer.entities.remove(activeShape!)
    floatingPoint = undefined
    activeShape = undefined
    activeShapePoints = []
  }

  /** 创建点要素 */
  function createPoint(worldPosition: Cesium.Cartesian3, isPoint = true): CustomEntity {
    const point = viewer.entities.add({
      position: worldPosition,
      point: {
        outlineWidth: isPoint ? 2 : 0,
        outlineColor: Cesium.Color.fromBytes(51, 153, 204),
        color: isPoint ? Cesium.Color.WHITE.withAlpha(0.5) : Cesium.Color.TRANSPARENT,
        pixelSize: 10
      }
    }) as CustomEntity

    point.positionData = worldPosition
    return point
  }

  /** 计算两点间距离（平面坐标系） */
  function calcRadius(point1: Cesium.Cartesian3, point2: Cesium.Cartesian3): number {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
  }

  /** 绘制几何图形 */
  function drawShape(positionData: Cesium.Cartesian3[] | Cesium.CallbackProperty, final = false): CustomEntity {
    let shape: any

    switch (drawingMode) {
      case 'Polyline':
        shape = viewer.entities.add({
          polyline: {
            positions: positionData as Cesium.Property,
            material: Cesium.Color.fromBytes(51, 153, 204)
          }
        }) as CustomEntity
        shape.positionData = positionData
        break

      case 'Polygon':
        shape = viewer.entities.add({
          polygon: {
            hierarchy: positionData as Cesium.Property,
            perPositionHeight: true,
            material: Cesium.Color.WHITE.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.fromBytes(51, 153, 204)
          }
        }) as CustomEntity
        shape.positionData = positionData
        break

      case 'Circle': {
        const positions =
          positionData instanceof Cesium.CallbackProperty
            ? positionData.getValue(Cesium.JulianDate.now())
            : positionData

        const radius = calcRadius(positions[0], positions[positions.length - 1])
        const callbackRadius = new Cesium.CallbackProperty(
          () => calcRadius(positions[0], positions[positions.length - 1]),
          false
        )

        const cartographic = Cesium.Cartographic.fromCartesian(positions[0])!

        shape = viewer.entities.add({
          position: activeShapePoints[0],
          name: 'Circle',
          ellipse: {
            semiMinorAxis: callbackRadius,
            semiMajorAxis: callbackRadius,
            height: cartographic.height,
            material: Cesium.Color.WHITE.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.fromBytes(51, 153, 204),
            outlineWidth: 1
          }
        }) as CustomEntity

        Object.assign(shape, { positionData: [positions[0]], radius })
        break
      }

      case 'Rectangle': {
        const positions =
          positionData instanceof Cesium.CallbackProperty
            ? positionData.getValue(Cesium.JulianDate.now())
            : positionData

        const cartographic = Cesium.Cartographic.fromCartesian(positions[0])!

        shape = viewer.entities.add({
          name: 'Rectangle',
          rectangle: {
            coordinates: new Cesium.CallbackProperty(() => Cesium.Rectangle.fromCartesianArray(positions), false),
            height: cartographic.height,
            material: Cesium.Color.WHITE.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.fromBytes(51, 153, 204),
            outlineWidth: 1
          }
        }) as CustomEntity

        shape.positionData = positions
        break
      }
    }

    if (final) lastFeature = shape!
    return shape!
  }

  return drawHandler
}
