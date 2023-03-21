// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        public: {
            wordpressUrl: 'http://localhost:8080/?myweb=true'
        }
    },
    routeRules: {
        '/**': {
            swr: true
        }
    }
})

