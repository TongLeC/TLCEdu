// import Vue from 'vue'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import '../public/css/global.scss'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
