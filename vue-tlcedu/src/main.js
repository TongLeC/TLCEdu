import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/global.scss'

createApp(App).mount('#app')
new Vue({
    router
})
