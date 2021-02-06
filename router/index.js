

/**
 * implement fixRoutes() function which will change paths in subdomain routes
 *
 */


import Vue from 'vue';
import Router from 'vue-router';
import _ from 'lodash';

Vue.use(Router);

// --- eg for imprint
const PATH_ALL_DOMAINS = '/all-domains';

const domainConfigs = [
    {
        'path': '/domain-one',
        'layout': 'domain-one',
        'domains': ['domain1.test', 'domain1.christenfeldt-edv.de'/*, ...*/]
    },
    {
        'path': '/domain-two',
        'layout': 'domain-two',
        'domains': ['domain2.test', 'domain2.christenfeldt-edv.de'/*, ...*/]
    },
];



/**
 *
 * @param {Array} routes
 * @param {String} path
 * @param {string} layout
 * @return {Array}
 * @private
 */
function _filterAndRectifyPaths(routes, path, layout) {

    const routesFiltered = _.filter(routes, x => x.path.startsWith(path));

    return _.map(routesFiltered, route => {
        route.path = route.path.replace(new RegExp('^' + path), '');
        // ---- special case index.vue (path === '/')
        if(route.path.length === 0) {
            route.path = '/'
        }
        route.meta = {
            'layout': layout,
        }
        return route;
    })
}


export function createRouter(ssrContext, createDefaultRouter, routerOptions) {

    const options = routerOptions || createDefaultRouter(ssrContext).options;
    let currentHostname = ssrContext ? ssrContext.req.headers.host : location.host;

    // ---- strip port from currentHostname
    currentHostname = currentHostname.replace( /:\d+$/, '' );

    // ---- find domainConfig
    const domainConfigCurrentDomain = _.find(domainConfigs, conf => conf.domains.includes(currentHostname));
    const routesFilteredCurrentDomain = _filterAndRectifyPaths(options.routes, domainConfigCurrentDomain.path, domainConfigCurrentDomain.layout);

    // ---- all domains
    const routesFilteredAllDomains = _filterAndRectifyPaths(options.routes, PATH_ALL_DOMAINS, domainConfigCurrentDomain.layout);
    const routesFiltered = routesFilteredCurrentDomain.concat(routesFilteredAllDomains);
    console.log({routesFiltered});

    // -----
    // console.log({currentHostname});
    return new Router({
        ...options,
        routes: routesFiltered,
    });
}
