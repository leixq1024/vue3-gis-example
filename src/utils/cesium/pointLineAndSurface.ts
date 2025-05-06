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
      pixelSize: 10, // 点的大小（像素）
      color: Cesium.Color.RED, // 填充颜色
      outlineColor: Cesium.Color.WHITE, // 描边颜色
      outlineWidth: 2, // 描边宽度
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 贴地模式
    }
  })
  return point
}
// 文字点
export const addTextPoint = () => {
  const Viewer: any = getMap()
  const point = Viewer.entities.add({
    // 实体位置（WGS84坐标系）
    position: Cesium.Cartesian3.fromDegrees(
      118.107358, // 经度（东经）
      24.47745, // 纬度（北纬）
      50 // 高程（米，相对于椭球体高度）
    ),
    // 点样式配置
    point: {
      pixelSize: 12, // 点直径（像素单位，建议8-20）
      color: Cesium.Color.fromCssColorString('#ff3d3d'), // 点填充色（支持CSS颜色）
      outlineColor: Cesium.Color.WHITE, // 点描边颜色
      outlineWidth: 2, // 点描边宽度（像素）
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND // 高度参考模式（贴地）
    },

    // 文字标签配置
    label: {
      text: '气象观测站\n（在线）', // 显示文本（支持换行符）
      font: 'bold 14px "Microsoft YaHei", sans-serif', // 字体设置（必须指定中文字体）
      fillColor: Cesium.Color.BLACK, // 文字颜色
      backgroundColor: Cesium.Color.AQUA.withAlpha(0.7), // 背景色（带透明度）
      showBackground: true, // 显示文字背景
      style: Cesium.LabelStyle.FILL_AND_OUTLINE, // 文字渲染样式（填充+描边）
      outlineColor: Cesium.Color.WHITE, // 文字描边颜色
      outlineWidth: 2, // 文字描边宽度（像素）
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // 水平定位基准点（左侧对齐）
      verticalOrigin: Cesium.VerticalOrigin.CENTER, // 垂直定位基准点（中心对齐）
      pixelOffset: new Cesium.Cartesian2(25, 0), // 屏幕像素偏移（X右/Y下为正方向）
      eyeOffset: new Cesium.Cartesian3(0, 0, -100) // 视角偏移（防止被地形遮挡）
    }
  })
  return point
}
// 图片点
export const addImgPoint = () => {
  const Viewer: any = getMap()
  const point = Viewer.entities.add({
    // 实体位置（使用WGS84经纬度坐标）
    position: Cesium.Cartesian3.fromDegrees(
      118.107358, // 经度 (东经)
      24.47745, // 纬度 (北纬)
      10 // 高度（米，相对于椭球面）
    ),
    // 广告牌配置（用于显示2D图像标记）
    billboard: {
      image: '/img/poi.png', // 图像路径（支持URI、Canvas或资源对象）
      // 推荐使用绝对路径，注意跨域问题
      // 尺寸配置
      width: 50, // 宽度（像素，当sizeInMeters=false时）
      height: 50, // 高度（像素，当sizeInMeters=false时）
      // 高级显示配置
      rotation: Cesium.Math.toRadians(0), // 旋转角度（弧度制，顺时针方向）
      // 建议使用Cesium.Math.toRadians()进行角度转换
      sizeInMeters: false, // true时尺寸单位为米（适合精确测量场景）
      // false时使用像素单位（适合UI标记）
      // 对齐方式配置
      verticalOrigin: Cesium.VerticalOrigin.CENTER, // 垂直对齐（CENTER|TOP|BOTTOM）
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // 水平对齐（CENTER|LEFT|RIGHT）
      // 像素偏移（用于微调显示位置）
      pixelOffset: new Cesium.Cartesian2(10, 0), // X向右为正，Y向上为正
      // 可选性能优化参数
      disableDepthTestDistance: Number.POSITIVE_INFINITY // 始终显示在最前（避免被地形遮挡）
    }
  })

  return point
}

// 面
export const addPolygon = () => {
  const Viewer: any = getMap()
  const polygon: any = Viewer.entities.add({
    polygon: {
      height: 1,
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
      fill: true
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
      positions: Cesium.Cartesian3.fromDegreesArray([
        120.9677706, 30.7985748, 110.2, 34.55, 100.2, 34.55, 90.2, 34.55, 100.2, 34.55
      ]),
      // 线的颜色
      material: Cesium.Color.WHITE,
      // 线的宽度
      width: 5,
      // 恒定高度
      height: 5000
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
