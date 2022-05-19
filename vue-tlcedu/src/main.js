import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n";
import '../public/css/global.scss'

createApp(App).use(router).use(i18n).mount('#app')
