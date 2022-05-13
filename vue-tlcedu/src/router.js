import { createRouter, createWebHistory } from 'vue-router'
//组件模块
import HomePage from './components/content/HomePage'
import LanguageLearning from './components/content/LanguageLearning'
import EducationalTheory from './components/content/EducationalTheory'
import EducationalPractice from './components/content/EducationalPractice'
import PublicResources from './components/content/PublicResources'
import CreatedArticle from './components/content/CreatedArticle'
import LanguageLearningDetail from './components/content/LanguageLearningDetail'
import EducationalTheoryDetail from './components/content/EducationalTheoryDetail'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    /*
     *   在这里和vue2一样写路由配置
    */
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
            path: '/languageLearningDetail',
            name: 'languageLearningDetail',
            component: LanguageLearningDetail,
        },
        {
            path: '/educationalTheoryDetail',
            name: 'educationalTheoryDetail',
            component: EducationalTheoryDetail,
        }
    ]
})

export default router

// export default new Router({
//   routes: [
//     { path: '/', name: 'home', component: HomePage }
//   ]
// })