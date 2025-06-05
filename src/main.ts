import { createApp } from 'vue'
import '@/styles/common.scss'
import 'ant-design-vue/dist/reset.css'
import 'normalize.css'
import Antd from 'ant-design-vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as Cesium from 'cesium'
const pinia = createPinia()
;(window as any).Cesium = Cesium
createApp(App).use(pinia).use(Antd).use(router).mount('#app')
