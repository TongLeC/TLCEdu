import { createRouter, createWebHistory } from 'vue-router'
//组件模块
import HomePage from './components/content/HomePage'
import LanguageLearning from './components/content/LanguageLearning'
import EducationalTheory from './components/content/EducationalTheory'
import EducationalPractice from './components/content/EducationalPractice'
import PublicResources from './components/content/PublicResources'
import CreatedArticle from './components/content/CreatedArticle'
import LanguageLearningDetail from './components/content/LanguageLearningDetail'

const routerHistory = createWebHistory()

// Change this line when deploying to custom domain
const publicPath = '/TLCEdu';

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: publicPath + '/',
            name: 'home',
            component: HomePage,
            children: [

            ]
        },
        {
            path: publicPath + '/languageLearning',
            name: 'languageLearning',
            component: LanguageLearning,
        },
        {
            path: publicPath + '/educationalTheory',
            name: 'educationalTheory',
            component: EducationalTheory,
        },
        {
            path: publicPath + '/educationalPractice',
            name: 'educationalPractice',
            component: EducationalPractice,
        },
        {
            path: publicPath + '/publicResources',
            name: 'publicResources',
            component: PublicResources,
        },
        {
            path: publicPath + '/createdArticle',
            name: 'createdArticle',
            component: CreatedArticle,
        },
        {
            path: publicPath + '/languageLearningDetail',
            name: 'languageLearningDetail',
            component: LanguageLearningDetail,
        }
    ]
})

export default router