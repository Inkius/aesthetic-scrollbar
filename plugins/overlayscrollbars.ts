import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(OverlayScrollbarsComponent)
})
