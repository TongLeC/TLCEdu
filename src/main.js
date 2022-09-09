import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n";
import deepClone from './index'
import store from './store/index.js'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/fonts.css'
import '../public/css/global.scss'
import languageLearningJson from "../public/json/LanguageLearning.json";
import educationalTheoryJson from "../public/json/EducationalTheory.json";

router.beforeEach(async (to, from) => {
  if (from.fullPath == '/') {
    i18n.locale = to.params.lang || 'zh-hans';
    store.commit("setLanguage", i18n.locale);
  }

  if (!to.matched.length) {
    const url = 'zh-hans' + to.fullPath;
    router.push({ path: url })
  }
  document.documentElement.scrollTop = 0;
  if (to.query.file == 'LanguageLearning') {
    localStorage.setItem(
      "detail",
      JSON.stringify(languageLearningJson.languageLearning)
    );
  } else if (to.query.file == 'EducationalTheory') {
    localStorage.setItem(
      "detail",
      JSON.stringify(educationalTheoryJson.educationalTheory)
    );
  }
})
const app = createApp(App)
app.config.globalProperties.$deepClone = deepClone;
app.use(router).use(i18n).use(ElementUI).use(store).mount('#app')
