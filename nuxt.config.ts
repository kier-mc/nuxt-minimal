// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "./assets/meta/favicon.svg",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css?family=FONTS+TO+LOAD&display=swap",
        // },
      ],
    },
  },
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
  },
});
