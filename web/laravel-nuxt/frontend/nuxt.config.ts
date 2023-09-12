const environment = process.env.APP_ENV || "local";
const env = require(`./env.${environment}.js`);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: `${env.public.APP_ENV}-Bref Nuxt Test`,
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Nuxt.js project",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
            ],
        },
    },

    runtimeConfig: {
        ...env,
        public: env.public,
    },

    // https://nitro.unjs.io/config
    nitro: {
        // preset: "node-server",
        preset: "aws-lambda",
        serveStatic: true,
        // compressPublicAssets: true,
    },

    vite: {
        vue: {
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        },
    },
});
