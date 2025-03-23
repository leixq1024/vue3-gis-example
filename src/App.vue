<template>
  <main class="container">
    <!-- 顶部菜单 -->
    <header class="header">
      <a-menu :selectedKeys="curMenu" mode="horizontal" :items="headerMenu" />
    </header>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { headerMenu } from '@/config/menu/header.ts'
const curMenu = ref<string>('')
onMounted(() => {
  curMenu.value = [headerMenu[0]['key']]
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 64px;
  display: flex;
  justify-content: end;
  padding: 0 150px;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02);
  ::v-deep .ant-menu-item {
    line-height: 64px;
  }
}
.container {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;
}
</style>
