import { createRouter, createWebHistory } from 'vue-router'
//组件模块
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

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [

      ]
    },
    {
      path: '/languageLearning',
      name: 'languageLearning',
      component: LanguageLearning,
    },
    {
      path: '/educationalTheory',
      name: 'educationalTheory',
      component: EducationalTheory,
    },
    {
      path: '/educationalPractice',
      name: 'educationalPractice',
      component: EducationalPractice,
    },
    {
      path: '/publicResources',
      name: 'publicResources',
      component: PublicResources,
    },
    {
      path: '/createdArticle',
      name: 'createdArticle',
      component: CreatedArticle,
    },
    {
      path: '/tongleBook',
      name: 'tongleBook',
      component: TongleBook,
    },
    {
      path: '/languageLearningDetail',
      name: 'languageLearningDetail',
      component: LanguageLearningDetail,
    },
    {
      path: '/LanguageLearningDetailTwo',
      name: 'LanguageLearningDetailTwo',
      component: LanguageLearningDetailTwo,
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
      hidden: true
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
      hidden: true
    }
  ]
})

export default router