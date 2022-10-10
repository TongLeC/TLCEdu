import base from "~~/service/base"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('baseUtils', base)
})