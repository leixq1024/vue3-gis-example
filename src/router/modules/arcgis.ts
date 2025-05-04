import type { RouteRecordRaw } from 'vue-router'

const arcgisRouter: RouteRecordRaw = {
  path: '/arcgis',
  component: () => import('@/pages/arcgis/index.vue'),
  children: []
}
export default arcgisRouter
