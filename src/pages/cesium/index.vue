<!-- cesium示例页面 -->
<template>
  <div class="cesium">
    <!-- 菜单 -->
    <leftMenu />
    <!-- 显示页面 -->
    <div class="cesium-container" id="cesiumMap"></div>
    <component :is="componentName"></component>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { createMap } from '@/utils/cesium/map.ts'
import { usePanelStore } from '@/store/panel'
import leftMenu from '@/components/cesiumLeftMenu.vue'
import pointLineAndSurface from './components/pointLineAndSurface.vue'
import flyingLineDiagrams from './components/flyingLineDiagrams.vue'
import loadAnimatedImage from './components/loadAnimatedImage.vue'
import heatmap from './components/heatmap.vue'

defineOptions({
  components: {
    pointLineAndSurface,
    flyingLineDiagrams,
    loadAnimatedImage,
    heatmap
  }
})
const panelStore: any = usePanelStore()
const componentName = ref<string>('')
watch(
  () => panelStore.componentsName,
  (name: string) => {
    componentName.value = name
  },
  { immediate: true, deep: true }
)
onMounted(() => {
  createMap('cesiumMap')
})
</script>

<style lang="scss" scoped>
.cesium {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
.cesium-container {
  position: relative;
  height: calc(100vh - 64px);
  width: 100%;
  :deep(.cesium-viewer-bottom) {
    display: none;
  }
}

</style>
