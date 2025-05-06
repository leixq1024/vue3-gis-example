<!-- cesium 功能菜单 -->
<template>
  <div class="menu">
    <a-menu :selectedKeys="curMenu" :items="cesiumMenu" @click="onMenuClick"></a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cesiumMenu } from '@/config/menu/cesiumMenu.ts'
import { usePanelStore } from '@/store/panel'
const curMenu = ref<string[]>([])
const panelStore: any = usePanelStore()
/**
 * @function 菜单点击事件
 * @param item 选中的菜单对象
 */
const onMenuClick = (item: { key: string }) => {
  if (curMenu.value[0] === item['key']) return (curMenu.value = [])
  else {
    panelStore.updatePanelName(item['key'])
    curMenu.value = [item['key']]
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/menu.scss';
.menu {
  width: 240px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: #1e1f2b;
}
</style>
