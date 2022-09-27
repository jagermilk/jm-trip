import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/asset/common.css'


import router from '@/router'
import pinia from '@/store/index.js'
createApp(App).use(router).use(pinia).mount('#app')
