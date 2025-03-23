import type { RouteRecordRaw } from 'vue-router'

const openlayerRouter: RouteRecordRaw = {
  path: '/arcgis',
  component: () => import('@/pages/arcgis/index.vue'),
  children: []
}
export default openlayerRouter
