import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import arcgisRoute from './modules/arcgis'
const routes: RouteRecordRaw[] = [{ path: '/', name: 'home', redirect: '/arcgis', children: [arcgisRoute] }]

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes
})
export default router
