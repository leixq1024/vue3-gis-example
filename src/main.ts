import { createApp } from 'vue'
import '@/styles/common.scss'
import 'ant-design-vue/dist/reset.css'
import 'normalize.css'
import Antd from 'ant-design-vue'
import router from './router'
import App from './App.vue'

createApp(App).use(Antd).use(router).mount('#app')
