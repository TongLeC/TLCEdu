import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n";
import deepClone from './index'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/fonts.css'
import '../public/css/global.scss'

const app = createApp(App)
app.config.globalProperties.$deepClone = deepClone;
app.use(router).use(i18n).use(ElementUI).mount('#app')

var orignalSetItem = localStorage.setItem;
localStorage.setItem = function (key, newValue) {
    // 要监听的key为styleList
    if (key === "language") {
        var setItemEvent = new Event("setItemEvent");
        setItemEvent.newValue = newValue;
        window.dispatchEvent(setItemEvent);
        orignalSetItem.apply(this, arguments);
    }
}

router.beforeEach((to, from, next) => {
    document.documentElement.scrollTop = 0
    next()
})