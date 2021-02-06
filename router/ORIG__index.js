/**
 * 02/2021 created
 * see https://nubisoft.io/blog/how-to-multiple-subdomains-nuxt-js/
 */

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    const options = routerOptions || createDefaultRouter(ssrContext).options;
    console.log(options.routes);
    return new Router({
        ...options,
        routes: options.routes,
    });
}
