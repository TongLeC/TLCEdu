export default defineNuxtRouteMiddleware((to, from) => {
    if (to.name != from.name) {
        window.scrollTo(0, 0)
    }
})