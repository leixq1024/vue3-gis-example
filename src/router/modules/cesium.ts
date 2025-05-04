import type { RouteRecordRaw } from 'vue-router'

const cesiumarcgisRouter: RouteRecordRaw = {
  path: '/cesium',
  component: () => import('@/pages/cesium/index.vue'),
  children: []
}
export default cesiumarcgisRouter
