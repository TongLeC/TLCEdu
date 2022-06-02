import { createRouter, createWebHistory } from 'vue-router'
//组件模块
import HomePage from './components/content/HomePage'
import LanguageLearning from './components/content/LanguageLearning'
import EducationalTheory from './components/content/EducationalTheory'
import EducationalPractice from './components/content/EducationalPractice'
import PublicResources from './components/content/PublicResources'
import CreatedArticle from './components/content/CreatedArticle'
import LanguageLearningDetailTwo from './components/content/LanguageLearningDetailTwo'

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
            path: '/LanguageLearningDetailTwo',
            name: 'LanguageLearningDetailTwo',
            component: LanguageLearningDetailTwo,
        }
    ]
})

export default router