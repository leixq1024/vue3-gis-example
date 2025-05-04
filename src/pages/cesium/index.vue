<!-- cesium示例页面 -->
<template>
  <div class="cesium">
    <!-- 菜单 -->
    <leftMenu />
    <!-- 显示页面 -->
    <div class="cesium-container" id="cesiumMap"></div>
    <!--  点线面面板 -->
    <pointLineAndSurface />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { createMap } from '@/utils/cesium/map.ts'
import leftMenu from '@/components/cesiumLeftMenu.vue'
import pointLineAndSurface from './components/pointLineAndSurface.vue'

onMounted(() => {
  const optons: { [x: string]: boolean } = {
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
  createMap('cesiumMap', optons)
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
