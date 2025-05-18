<!-- cesium-点线面操作 -->
<template>
  <article class="panel">
    <section class="row">
      <div class="label">点:</div>
      <a-button @click="showPoint">坐标点位</a-button>
      <a-button @click="showTextPoint">文字点</a-button>
      <a-button @click="showImgPoint">图片点</a-button>
    </section>
    <section class="row">
      <div class="label">线:</div>
      <a-button @click="showLine">坐标画线</a-button>
    </section>
    <section class="row">
      <div class="label">面:</div>
      <a-button @click="showPolygon">坐标画面</a-button>
      <a-button @click="showHollowPolygon">镂空面</a-button>
    </section>
    <section class="row">
      <div class="label">鼠标绘制:</div>
      <a-button @click="drawPoint">点</a-button>
      <a-button @click="drawLine">线</a-button>
      <a-button @click="drawPolygon">面</a-button>
      <a-button @click="drawCircle">圆</a-button>
      <a-button @click="drawRect">矩形</a-button>
    </section>
    <section class="row">
      <div class="label">清除:</div>
      <a-button @click="removeAllEntity">清除所有实体</a-button>
    </section>
  </article>
</template>

<script setup lang="ts">
import {
  addPoint,
  addTextPoint,
  addImgPoint,
  addPolygon,
  addHollowPolygon,
  addLine,
  draw
} from '@/utils/cesium/pointLineAndSurface'
import { getMap } from '@/utils/cesium/map'

import { ref, onBeforeUnmount } from 'vue'
const entity = ref<any>([])

// 显示普通点
const showPoint = () => {
  const point: any = addPoint()
  entity.value.push(point)
}

// 显示文字点
const showTextPoint = () => {
  const point: any = addTextPoint()
  entity.value.push(point)
}
// 显示图片点
const showImgPoint = () => {
  const point: any = addImgPoint()
  entity.value.push(point)
}
// 显示面实体
const showPolygon = () => {
  const polygon: any = addPolygon()
  entity.value.push(polygon)
}
// 显示镂空面
const showHollowPolygon = () => {
  const polygon: any = addHollowPolygon()
  entity.value.push(polygon)
}
// 坐标画线
const showLine = () => {
  const polygon: any = addLine()
  entity.value.push(polygon)
}
// 绘制点
const drawPoint = () => {
  const view: any = getMap()
  draw(view, 'Point', { removeLast: true }, (entity: any) => {
    console.log('👉 ~ 点实体:', entity)
  })
}
// 绘制线
const drawLine = () => {
  const view: any = getMap()
  draw(view, 'Polyline', { removeLast: false }, (entity: any) => {
    console.log('👉 ~ 线实体:', entity)
  })
}
// 绘制面
const drawPolygon = () => {
  const view: any = getMap()
  draw(view, 'Polygon', { removeLast: true }, (entity: any) => {
    console.log('👉 ~ 面实体:', entity)
  })
}
// 绘制圆
const drawCircle = () => {
  const view: any = getMap()
  draw(view, 'Circle', { removeLast: true }, (entity: any) => {
    console.log('👉 ~ 圆实体:', entity)
  })
}
// 绘制矩形
const drawRect = () => {
  const view: any = getMap()
  draw(view, 'Rectangle', { removeLast: true }, (entity: any) => {
    console.log('👉 ~ 矩形实体:', entity)
  })
}
const removeAllEntity = () => {
  const view: any = getMap()
  view.entities.removeAll()
}
onBeforeUnmount(() => {
  removeAllEntity()
})
</script>

<style lang="scss" scoped>
@import '@/styles/panel.scss';
</style>
