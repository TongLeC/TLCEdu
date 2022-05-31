import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n";

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/fonts.css'
import '../public/css/global.scss'

createApp(App).use(router).use(i18n).use(ElementUI).mount('#app')

router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    next()
})