import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import arcgisRouter from './modules/arcgis'
import cesiumarcgisRouter from './modules/cesium'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', redirect: '/cesium', children: [arcgisRouter, cesiumarcgisRouter] }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
