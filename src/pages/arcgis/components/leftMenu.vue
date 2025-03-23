<!-- arcgis 功能菜单 -->
<template>
  <div class="menu">
    <a-menu :selectedKeys="curMenu" :items="arcgisMenu"></a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { arcgisMenu } from '@/config/menu/arcgisMenu.ts'
const curMenu = ref<string>('')
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
