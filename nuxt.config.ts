import { defineNuxtConfig } from 'nuxt'
const OpenCC = require("opencc-js");
import CreatedArticle from './assets/json/CreatedArticle.json'
import EducationalPractice from './assets/json/EducationalPractice.json'
import EducationalTheory from './assets/json/EducationalTheory.json'
import HomePage from './assets/json/HomePage.json'
import LanguageLearning from './assets/json/LanguageLearning.json'
import NavHeader from './assets/json/NavHeader.json'
import PublicResources from './assets/json/PublicResources.json'
import TongleBook from './assets/json/TongleBook.json'
const restore = OpenCC.Converter({ from: "cn", to: "hk" });
function deepClone(target) {
  if (typeof target === "object" && target) {
    let cloneObj = {};
    for (const key in target) {
      const val = target[key];
      if (typeof val === "object" && val) {
        cloneObj[key] = deepClone(val);
      } else {
        cloneObj[key] = restore(val);
      }
    }
    return cloneObj;
  } else {
    return target;
  }
}
const zh_hans = {
  ...CreatedArticle,
  ...EducationalPractice,
  ...EducationalTheory,
  ...HomePage,
  ...LanguageLearning,
  ...NavHeader,
  ...PublicResources,
  ...TongleBook,
  msg: {
    homePage: "首页",
    languageLearning: "同乐语言学习法",
    holisticEducationTheory: "同乐整体教育理论",
    tongleCourse: "同乐课程",
    educationalPractice: "教育践谈",
    publicWelfareResources: "公益资源",
    originalArticle: "原创文章",
    language: "语言",
    english: "英语",
    simplifiedChinese: "中文（简体）",
    traditionalChinese: "中文（繁体）",
    tongleVideo: "同乐视频",
    seeMore: "阅读更多",
    tongleBooks: "同乐书籍",
    tongleLecture: "同乐讲座",
    freeBooks: "免费下载的书籍",
    classicAudio: "网上读经机-免费",
    classicMusic: "音乐资源",
    chineseClassicStories: "中华经典故事",
    publicTitle: "不忘初心·方得始终",
    publicTitleTwo: "公益分享",
    slogan: [
      "十数载理论探索,多年第一线教学实践,最领先、高效的语言学习方法。",
      "放眼生命全程 立足中国文化 融贯文史哲科",
      "教育是一门实践的艺术，实践创造出科学高效的中文学习理念。这里有教学经验、育儿经验的分享，也有孩子们学习成长的点点滴滴。",
      "中国文化历经千年，典籍浩如烟海，其根本则是经典。同乐中文寻根系列书籍，收录了诸子百家锦言，旨在回归民族的根基，传播永恒的智慧，关怀无价的生命。",
      "读经机是经典教育的好帮手，可以用来跟读，也可以熏听。小孩子耳根灵敏，随时随地与经典之声相伴，不知不觉圣贤智慧浸润心田。",
      "秉持着“文以载道”的原则，通过趣味解说汉字，传递中国古代的文化和智慧。"
    ],
  }
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: []
    }
  },
  css: ['~/assets/scss/global.scss'],
  modules: [
    '@nuxtjs/i18n'
  ],
  target: 'static',
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'zh-hans',
    locales: [{
      code: 'zh-hans',
      name: '中文简体'
    },
    {
      code: 'zh-hant',
      name: '中文繁體'
    }
    ],
    vueI18n: {
      fallbackLocale: 'zh-hans',
      legacy: false,
      globalInjection: true,
      locale: 'zh-hans',
      messages: {
        'zh-hans': zh_hans,
        'zh-hant': deepClone(zh_hans)
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/style.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: '首页',
      meta: [
        {
          name: "description",
          content: "111111111111",
        },
      ],
      script: [
        { src: '/jquery-3.5.1/jquery-3.5.1.min.js' }
      ]
    }
  },
  build: {
    transpile: ['swiper'],
  },
})
