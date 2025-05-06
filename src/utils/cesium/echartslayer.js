import * as Cesium from 'cesium'
import * as echarts from 'echarts'
const mockClickChart = (event, chart) => {
  const evmousedown = new MouseEvent('mousedown', { bubbles: true, cancelable: true })
  const evmouseup = new MouseEvent('mouseup', { bubbles: true, cancelable: true })
  const evmouseclick = new MouseEvent('click', { bubbles: true, cancelable: true })
  for (const key in event) {
    try {
      Object.defineProperty(evmousedown, key, { value: event[key] })
      Object.defineProperty(evmouseup, key, { value: event[key] })
      Object.defineProperty(evmouseclick, key, { value: event[key] })
    } catch (err) {
      /* event 对象中部分属性是只读，忽略即可 */
    }
  }
  // 事件触发的容器，即不是 #app 也不是 canvas，而是中间这个 div
  const container = chart._dom.firstElementChild
  container.dispatchEvent(evmousedown)
  container.dispatchEvent(evmouseup)
  container.dispatchEvent(evmouseclick)
}

class RegisterCoordinateSystem {
  static dimensions = ['lng', 'lat']
  constructor(glMap) {
    this._GLMap = glMap
    this._mapOffset = [0, 0]
    this.dimensions = ['lng', 'lat']
  }
  setMapOffset(mapOffset) {
    this._mapOffset = mapOffset
  }
  getBMap() {
    return this._GLMap
  }
  fixLat(lat) {
    return lat >= 90 ? 89.99999999999999 : lat <= -90 ? -89.99999999999999 : lat
  }
  dataToPoint(coords) {
    let lonlat = [99999, 99999]
    coords[1] = this.fixLat(coords[1])
    let position = Cesium.Cartesian3.fromDegrees(coords[0], coords[1])
    if (!position) return lonlat
    let coordinates = this._GLMap.cartesianToCanvasCoordinates(position)
    if (!coordinates) return lonlat
    if (this._GLMap.mode === Cesium.SceneMode.SCENE3D) {
      if (Cesium.Cartesian3.angleBetween(this._GLMap.camera.position, position) > Cesium.Math.toRadians(75)) return !1
    }
    return [coordinates.x - this._mapOffset[0], coordinates.y - this._mapOffset[1]]
  }
  pointToData(pt) {
    var mapOffset = this._mapOffset
    pt = this._bmap.project([pt[0] + mapOffset[0], pt[1] + mapOffset[1]])
    return [pt.lng, pt.lat]
  }
  getViewRect() {
    let api = this._api
    return new echarts.graphic.BoundingRect(0, 0, api.getWidth(), api.getHeight())
  }
  getRoamTransform() {
    return echarts.matrix.create()
  }
  static create(echartModel, api) {
    this._api = api
    let registerCoordinateSystem
    echartModel.eachComponent('GLMap', function (seriesModel) {
      let painter = api.getZr().painter
      if (painter) {
        let glMap = echarts.glMap
        registerCoordinateSystem = new RegisterCoordinateSystem(glMap, api)
        registerCoordinateSystem.setMapOffset(seriesModel.__mapOffset || [0, 0])
        seriesModel.coordinateSystem = registerCoordinateSystem
      }
    })
    echartModel.eachSeries(function (series) {
      'GLMap' === series.get('coordinateSystem') && (series.coordinateSystem = registerCoordinateSystem)
    })
  }
}
export class EchartsLayer {
  constructor(map, options) {
    this._map = map
    this._overlay = this._createChartOverlay()
    if (options) this._registerMap()
    this._overlay.setOption(options || {})
  }
  _registerMap() {
    if (!this._isRegistered) {
      echarts.registerCoordinateSystem('GLMap', RegisterCoordinateSystem)
      echarts.registerAction({ type: 'GLMapRoam', event: 'GLMapRoam', update: 'updateLayout' }, function (t, e) {})
      echarts.extendComponentModel({
        type: 'GLMap',
        getBMap() {
          return this.__GLMap
        },
        defaultOption: { roam: false }
      })
      echarts.extendComponentView({
        type: 'GLMap',
        init(t, e) {
          this.api = e
          echarts.glMap.postRender.addEventListener(this.moveHandler, this)
        },
        moveHandler(t, e) {
          this.api.dispatchAction({ type: 'GLMapRoam' })
        },
        render(t, e, i) {},
        dispose(t) {
          echarts.glMap.postRender.removeEventListener(this.moveHandler, this)
        }
      })
      this._isRegistered = true
    }
  }
  _createChartOverlay() {
    var scene = this._map.scene
    scene.canvas.setAttribute('tabIndex', 0)
    const ele = document.createElement('div')
    ele.style.position = 'absolute'
    ele.style.top = '0px'
    ele.style.left = '0px'
    ele.style.width = scene.canvas.width + 'px'
    ele.style.height = scene.canvas.height + 'px'
    ele.style.pointerEvents = 'none'
    ele.setAttribute('id', 'echarts')
    ele.setAttribute('class', 'echartMap')
    this._map.container.appendChild(ele)
    this._echartsContainer = ele
    echarts.glMap = scene
    this._chart = echarts.init(ele)
    const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
    handler.setInputAction(click => mockClickChart(event, this._chart), Cesium.ScreenSpaceEventType.LEFT_CLICK)
    return this._chart
  }
  dispose() {
    if (this._echartsContainer) {
      this._map.container.removeChild(this._echartsContainer)
      this._echartsContainer = null
    }
    if (this._overlay) {
      this._overlay.dispose()
      this._overlay = null
    }
  }
  updateOverlay(t) {
    if (this._overlay) {
      this._overlay.setOption(t)
    }
  }
  getMap() {
    return this._map
  }
  getOverlay() {
    return this._overlay
  }
  show() {
    if (this._echartsContainer) {
      this._echartsContainer.style.visibility = 'visible'
    }
  }
  hide() {
    if (this._echartsContainer) {
      this._echartsContainer.style.visibility = 'hidden'
    }
  }
  remove() {
    this._chart.clear()
    if (this._echartsContainer.parentNode) {
      this._echartsContainer.parentNode.removeChild(this._echartsContainer)
    }
    this._map = undefined
  }
  resize() {
    const me = this
    const container = me._map.container
    me._echartsContainer.style.width = container.clientWidth + 'px'
    me._echartsContainer.style.height = container.clientHeight + 'px'
    me._chart.resize()
  }
}
