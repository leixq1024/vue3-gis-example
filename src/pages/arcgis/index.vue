<!-- arcgis示例页面 -->
<template>
  <div class="arcgis">
    <!-- 菜单 -->
    <leftMenu />
    <!-- 显示页面 -->
    <div class="arcgis-container" id="sceneView"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import leftMenu from '@/components/arcgisLeftMenu.vue'
import { initApi } from '@/utils/esri/arcgisApi.ts'
import { create3dView } from '@/utils/esri/arcgisUtils.ts'
onMounted(async () => {
  await initApi()
  create3dView('sceneView')
})
</script>

<style lang="scss" scoped>
.arcgis {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}
::v-deep .arcgis-container {
  position: relative;
  flex: 1;
  .esri-attribution {
    display: none;
  }
  .esri-view-surface {
    &::after {
      display: none;
    }
  }
}
.btn {
  position: absolute;
  top: 48px;
  right: 48px;
  width: 160px;
  height: 32px;
}
</style>
