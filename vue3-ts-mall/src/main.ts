import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/mock/index"
// 完整引入ElementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// createApp(App).use(router).use(ElementPlus).mount('#app')
createApp(App).use(router).mount('#app')

if (process.env.NODE_ENV === 'development') {
  require('./mock/index.ts')
}