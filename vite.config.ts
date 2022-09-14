import { defineConfig } from 'vite'
export default defineConfig({
    define: {
        'process.env': true,
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    }
})