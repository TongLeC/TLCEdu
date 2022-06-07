import { createStore } from 'vuex'
/**
 * 创建仓库和导出
 */
export default createStore({
    state: {
        language: ''
    },
    mutations: {
        /**
         * mutations修改数据源
         * @param state 数据原
         * @param payload 外部调用时 传入的参数
         */
        setLanguage: (state, language) => {
            localStorage.setItem('language', language);
            state.language = language;
        }
    },
    getters: {
        /**
         * state 获取state中的数据
         * getters 使用getters中其他的方法
         */
        getLanguage: (state) => {
            state.language = localStorage.getItem('language');
            return state.language;
        }
    }
})