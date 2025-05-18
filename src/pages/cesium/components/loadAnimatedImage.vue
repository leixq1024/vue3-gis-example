<!-- cesium-加载动图 -->
<template>
  <article class="panel">
    <section class="row">
      <div class="label">加载动图:</div>
      <a-button @click="loadGifImg">gif动图点位</a-button>
      <a-button @click="loadApngImg">apng动图点位</a-button>
    </section>
    <section class="row">
      <a-button @click="removeAllEntites">清除所有实体</a-button>
    </section>
  </article>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
import { getMap } from '@/utils/cesium/map'
import parseAPNG from 'apng-js'
// 加载gif动图
const loadGifImg = () => {
  const map = getMap()
  let gifImg = document.createElement('img')
  gifImg.setAttribute('rel:animated_src', '/img/sum.gif')
  gifImg.setAttribute('rel:auto_play', '1')
  const imgDiv = document.createElement('div')
  imgDiv.appendChild(gifImg)
  const superGif = new SuperGif({ gif: gifImg })
  superGif.load(function () {
    map.entities.add({
      position: Cesium.Cartesian3.fromDegrees(120.9677706, 30.7985748),
      billboard: {
        image: new Cesium.CallbackProperty(() => {
          return superGif.get_canvas().toDataURL()
        }, false),
        scale: 0.25
      }
    })
  })
}

// 加载apng动图
const loadApngImg = async () => {
  const map = getMap()
  let blob = await fetch('/img/wind.png').then(res => res.blob())
  const reader = new FileReader()
  let canvas = document.createElement('canvas')
  let ctx = canvas.getContext('2d')
  reader.readAsArrayBuffer(blob)
  reader.onload = async () => {
    let apng = parseAPNG(reader.result)
    let player = await apng.getPlayer(ctx)
    player.play()
    map.entities.add({
      position: Cesium.Cartesian3.fromDegrees(120.9677706, 30.7985748),
      billboard: {
        image: new Cesium.CallbackProperty(() => {
          return player.currentFrame.imageElement
        }, false)
      }
    })
  }
}
const removeAllEntites = () => {
  const map = getMap()
  map.entities.removeAll()
}
</script>

<style lang="scss" scoped>
@import '@/styles/panel.scss';
</style>
<style>
.jsgif {
  display: none;
}
</style>
