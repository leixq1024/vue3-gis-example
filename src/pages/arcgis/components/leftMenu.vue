<!-- arcgis 功能菜单 -->
<template>
  <div class="menu">
    <a-menu :selectedKeys="curMenu" :items="arcgisMenu" @click="onMenuClick"></a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { arcgisMenu } from '@/config/menu/arcgisMenu.ts'
import { loadRoadStreamers } from '@/modules/arcgis/道路流光/index'
const curMenu = ref<string[]>([])
/**
 * @function 菜单点击事件
 * @param item 选中的菜单对象
 */
const onMenuClick = (item: { key: string }) => {
  const functionDict: {
    [x: string]: () => {}
  } = {
    'roadStreamers': loadRoadStreamers
  }
  functionDict[item['key']]()
  if (curMenu.value[0] === item['key']) return (curMenu.value = [])
  else curMenu.value = [item['key']]
}
</script>

<style lang="scss" scoped>
.menu {
  width: 240px;
  height: 100%;
  .ant-menu {
    height: 100%;
  }
}
</style>
