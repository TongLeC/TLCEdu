export default defineNuxtRouteMiddleware((to, from) => {
    if (to.name.toString().indexOf('___') > -1 && from.name.toString().indexOf('___') > -1) {
        if (to.name.toString().split('___')[0] != from.name.toString().split('___')[0]) {
            console.log(to.name, from.name)
            window.scrollTo(0, 0)
        }
    }
})