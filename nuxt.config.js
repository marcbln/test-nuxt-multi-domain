export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'test-multi-domain',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // SCSS file in the project
        '~/assets/css/main.scss'
    ],



    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/global-mixins'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',

        // ---- mcx
        [
            '@nuxtjs/router',
            {
                path: 'router',
                fileName: 'index.js',
                keepDefaultRouter: true, // The keepDefaultRouter property disables or enables automatic generation of router configuration based on your file tree.
            },
        ]
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // router: {
    //     middleware: 'myMiddleware',
    // },
}
