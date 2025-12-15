// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ["domain1.test", "domain2.test"],
    },
  },
  runtimeConfig: {
    public: {
      domainConfigs: [
        {
          layout: "domain-one",
          domains: ["domain1.test", "domain1.christenfeldt-edv.de"],
        },
        {
          layout: "domain-two",
          domains: ["domain2.test", "domain2.christenfeldt-edv.de"],
        },
      ],
    },
  },
});
