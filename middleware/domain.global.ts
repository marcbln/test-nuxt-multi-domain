export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) {
    const headers = useRequestHeaders();
    const host = headers.host?.replace(/:\d+$/, "");

    if (host) {
        const { domainConfigs } = useRuntimeConfig().public;
        const domainConfig = domainConfigs.find((config) =>
          config.domains.includes(host)
        );

        if (domainConfig) {
          to.meta.layout = domainConfig.layout;
        }
    }
  }
});
