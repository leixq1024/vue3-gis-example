<!-- arcgis示例页面 -->
<template>
  <div class="arcgis">
    <!-- 菜单 -->
    <leftMenu />
    <!-- 显示页面 -->
    <div class="arcgis-container" id="sceneView"></div>
    <button class="btn" @click="loadThree">渲染</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import leftMenu from './components/leftMenu.vue'
import { initApi, getModules } from '@/utils/esri/arcgisApi.ts'
import { create3dView } from '@/utils/esri/arcgisUtils.ts'
import config from '@/utils/esri/appConfig'
import ExternalRendererLayer from '@/utils/esri/ExternalRendererLayer.js'
onMounted(async () => {
  await initApi()
  create3dView('sceneView')
})
const loadThree = async () => {
  const [externalRenderers] = await getModules([
    'esri/views/3d/externalRenderers' // 外部渲染器（用于集成Three.js）
  ])
  const view = config.scenView
  const threeRenderer = new ExternalRendererLayer({
    externalRenderers,
    view
  })
  externalRenderers.add(view, threeRenderer)
}
</script>

<style lang="scss" scoped>
.arcgis {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.arcgis-container {
  position: relative;
  flex: 1;
}
.btn {
  position: absolute;
  top: 48px;
  right: 48px;
  width: 160px;
  height: 32px;
}
</style>
