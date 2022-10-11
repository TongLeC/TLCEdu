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
import base from './service/base';
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
    experienceCourses: "体验课程",
    freeBook: "30+ 免费电子书与教材",
    bottom: "同于自性，颐养天真。有教无类，乐学致远。",
    bottomAddress1: "版权所有©同乐文化科技有限公司",
    bottomAddress2: "地址: 14200 SE 13th Pl, Bellevue, WA 98007",
    bottomAddress3: "欢迎关注同乐公众号",
    slogan: [
      "十数载理论探索,多年第一线教学实践,最领先、高效的语言学习方法。",
      "放眼生命全程 立足中国文化 融贯文史哲科",
      "教育是一门实践的艺术，实践创造出科学高效的中文学习理念。这里有教学经验、育儿经验的分享，也有孩子们学习成长的点点滴滴。",
      "中国文化历经千年，典籍浩如烟海，其根本则是经典。同乐中文寻根系列书籍，收录了诸子百家锦言，旨在回归民族的根基，传播永恒的智慧，关怀无价的生命。",
      "读经机是经典教育的好帮手，可以用来跟读，也可以熏听。小孩子耳根灵敏，随时随地与经典之声相伴，不知不觉圣贤智慧浸润心田。",
      "秉持着“文以载道”的原则，通过趣味解说汉字，传递中国古代的文化和智慧。"
    ],
    SeoContent: {
      home: {
        title: "同乐中文(TongLe Chinese)-值得您信赖的海外高端中文教育品牌！",
        description: "同乐中文学校（TongLe Chinese School）位于美国西雅图（Seattle）,致力于提供最优质的中文教育资源,开发了一套系统的中文学习方法。提供线上与线下中文课，包括AP、HSK备考；内容有拼音（Pinyin）、汉字（Chinese character）、阅读（reading）、写作（writing）、中国文化（Chinese culture）、国学经典（Chinese classics）、演讲（speech）等。",
        keywords: "西雅图,同乐中文,优质,online, on-site,中文班,中文课,AP,HSK,拼音（Pinyin）,汉字（Chinese character）,阅读（reading）,写作（writing）,中国文化（Chinese culture）,国学经典（Chinese classics）,演讲（speech）"
      },
      method: {
        title: "同乐中文-海外华人孩子学习中文最高效的方法是什么？",
        description: "同乐中文基于多年一线教学经验,首创“先语言文化后识字（Chinese character）,感知式学习,整体吸收,螺旋式上升”等崭新的、自然高效的学习理念和方法（The Most Effective Language Learning Method）。从引导孩子对中国文化（Chinese culture）的兴趣入手,遵循孩子智力发育和语言学习规律,精心创作学习材料,安排学习次序,达到三年一小成、五年一大成、十年精且纯的教学目标。",
        keywords: "西雅图,同乐中文,一线教学经验,语言文化,识字,感知学习,整体吸收,崭新,自然高效,理念,方法,中国文化,兴趣,学习材料,学习次序,三年小成,五年大成,十年精纯,教学目标",
      },
      theory: {
        title: "同乐中文(TongLe Chinese)-革新式教育理念，乐学致远！",
        description: "同乐中文教育放眼个体生命全程,以整体提升孩子的生命、身心状态为最终目标。立足中国经典与文化（Chinese classics and culture）,教学知识面广,覆盖文学（literature）、历史（history）、哲学（philosophy）、科学（science）,教育理念科学创新,不仅致力于语言学习（Language learning）,更将良好的价值观传递给下一代。",
        keywords: "西雅图,同乐中文,生命全程,整体提升,经典与文化,教学知识面广,文学（literature）,历史（history）,哲学（philosophy）,科学（science）,教育理念,语言学习,价值观",
      },
      speech: {
        title: "同乐中文-办学6年，培养了一大批热爱中国文化的优秀学生！",
        description: "教育是一门实践的艺术,实践创造出科学高效的中文学习理念（Chinese Learning Concept）。同乐开办教育讲座、教育践谈,分享5-15岁海外华裔孩子的中文教育（Chinese language education）经验、育儿经验、孩子成长经验,用优秀的中国语言文化（Chinese language and culture）帮助孩子们少走弯路,高效学中文。",
        keywords: "西雅图,同乐中文,教育实践,中文学习理念,教育讲座,教育践谈,教学经验,育儿经验,成长趣事,中国语言文化,少走弯路,高效学习",
      },
      resources: {
        title: "同乐中文-中文爱好者福利，为海外孩子提供最优质的中文教育资源",
        description: "海外华人孩子学习中文的时间有限,所以要选取最有价值的内容给他们。免费下载同乐“中文寻根系列”的电子书、读经机,包含《道德经》（Dao De Jing）、《论语》（The Analects of Confucius）、《大学》、《中庸》、《孟子》等经典。音乐资源选择最经典的曲目,可用于胎教、音乐熏陶。随时随地与经典之声相伴,不知不觉圣贤智慧浸润心田。",
        keywords: "西雅图,同乐中文,最有价值的,中文寻根,经典,《道德经》（Dao De Jing）,《论语》（The Analects of Confucius）,《大学》,《中庸》,《孟子》,音乐资源,胎教,熏陶,圣贤智慧",
      },
      article: {
        title: "同乐中文带你了解汉字的背后的秘密，意想不到的有趣！",
        description: "学习汉字（Chinese character）,不只是记忆、书写、朗读,更要明白其背后的文化内涵（cultural connotation）。文与武、朋与友、仙与俗,一个个简单的汉字背后,都蕴含着深刻的文化与智慧。",
        keywords: "西雅图,同乐中文,汉字,文化内涵,智慧",
      },
      tongleBook: {
        title: "同乐中文精选教学材料，自主研发教材,让中文学习变得轻松！",
        description: "同乐中文根据多年一线教育经验,自主研发教材（Chinese textbooks）,中文寻根经典教材,深入中华文明的根基；文化教材丰富多彩,包罗万象：成语、俗语、谚语、歇后语,人文、自然地理,历史,节日节气,民俗……每个年级还有相应的阅读理解、字里藏意、古诗词、语文常识、朗诵作品精选等教材。",
        keywords: "西雅图,同乐中文,自主研发教材,中文寻根经典教材,文化教材,阅读理解,字里藏意,古诗词,语文常识,朗诵作品精选",
      }
    }
  }
}
// 语言
const locales = [{
  code: 'zh-hans',
  name: '中文简体',
  iso: 'zh-Hans'
},
{
  code: 'zh-hant',
  name: '中文繁體',
  iso: 'zh-Hant'
}
];
const url = ['/404'];
const url2 = [];
[...LanguageLearning.languageLearning, ...EducationalTheory.educationalTheory, ...CreatedArticle.someArticles].forEach(element => {
  const url3 = [];
  locales.forEach(locale => {
    url.push(`/${locale.code}/detail/${base.getTitleFormat(element.title)}/`)
    url3.push({ lang: locale.iso, url: `/${locale.code}/detail/${base.getTitleFormat(element.title)}/` })
  })
  url3.forEach(e => {
    url2.push({
      url: e.url,
      links: url3
    }
    )
  })
});
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: url
    }
  },
  css: ['~/assets/scss/global.scss'],
  modules: [
    '@nuxtjs/i18n', '@funken-studio/sitemap-nuxt-3'
  ],
  buildModules: [
    ['@nuxt-modules/compression', {
      algorithm: 'gzip',
    }]
  ],
  target: 'static',
  i18n: {
    baseUrl: 'https://www.tonglec.org',
    strategy: 'prefix',
    defaultLocale: 'zh-hans',
    locales: locales,
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
      script: [
        { src: '/jquery-3.5.1/jquery-3.5.1.min.js' }
      ]
    }
  },
  build: {
    transpile: ['swiper'],
  }, sitemap: {
    // options
    hostname: 'https://www.tonglec.org',
    sitemaps: [
      {
        path: '/sitemap-detail.xml',
        routes: async () => {
          return url2;
        },
        exclude: ['/**'],
        i18n: true,
        defaults: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        },
      },
      {
        path: '/sitemap-main.xml',
        exclude: [
          '/TongLe-Articles', '/TongLe-Language-Learning-Method', '/Free-Resources', '/Practice-and-Sharing', '/Tongle-Holistic-Education-Theory', '/TongLe-Books', '/',
        ],
        i18n: true,
        defaults: {
          changefreq: 'weekly',
          priority: 1,
          lastmod: new Date().toISOString(),
        },
      }
    ],
    i18n: true,
  },
})
