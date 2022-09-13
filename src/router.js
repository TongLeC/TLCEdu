import { createRouter, createWebHistory } from 'vue-router'
//组件模块
import LangRouter from './components/LangRouter'
import HomePage from './components/content/HomePage'
import LanguageLearning from './components/content/LanguageLearning'
import EducationalTheory from './components/content/EducationalTheory'
import EducationalPractice from './components/content/EducationalPractice'
import PublicResources from './components/content/PublicResources'
import CreatedArticle from './components/content/CreatedArticle'
import TongleBook from './components/content/TongleBook'
import LanguageLearningDetail from './components/content/LanguageLearningDetail'
import LanguageLearningDetailTwo from './components/content/LanguageLearningDetailTwo'
import NotFound from './components/NotFound'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { path: '/zh-hans' }
    },
    {
      path: '/:lang(zh-hans|zh-hant)',
      component: LangRouter,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
          meta: { title: '同乐中文' },
        },
        {
          path: 'language-learning',
          name: 'languageLearning',
          component: LanguageLearning,
          meta: { title: '同乐语言学习法' },
        },
        {
          path: 'educational-theory',
          name: 'educationalTheory',
          component: EducationalTheory,
          meta: { title: '同乐整体教育理论' },
        },
        {
          path: 'educational-practice',
          name: 'educationalPractice',
          component: EducationalPractice,
          meta: { title: '教育践谈' },
        },
        {
          path: 'public-resources',
          name: 'publicResources',
          component: PublicResources,
          meta: { title: '公益资源' },
        },
        {
          path: 'created-article',
          name: 'createdArticle',
          component: CreatedArticle,
          meta: { title: '原创文章' },
        },
        {
          path: 'tongle-book',
          name: 'tongleBook',
          component: TongleBook,
          meta: { title: '同乐书籍' },
        },
        {
          path: 'language-learning-detail',
          name: 'languageLearningDetail',
          component: LanguageLearningDetail,
        },
        {
          path: 'Language-learning-detail-two',
          name: 'LanguageLearningDetailTwo',
          component: LanguageLearningDetailTwo,
          meta: { title: '文章详情' },
        },
        {
          path: '404',
          name: 'NotFound',
          component: NotFound,
          hidden: true,
          redirect: { path: '/' }
        },
        {
          path: ':pathMatch(.*)',
          redirect: '/',
          hidden: true,
        }
      ]
    }
  ],
})

export default router