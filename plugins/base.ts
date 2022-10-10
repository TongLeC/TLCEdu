export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('baseUtils', {
        getTitleFormat: (str) => {
            let pageTitle = "";
            pageTitle = str.replace(/[,，]/g, "-");
            pageTitle = pageTitle.replace(/-*$/g, "");
            pageTitle = pageTitle.replace(/[^\u4e00-\u9fa5\-A-Za-z0-9]/g, "");
            return pageTitle;
        }
    })
})