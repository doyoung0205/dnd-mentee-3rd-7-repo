// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require("cheerio");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PrerenderSPAPlugin = require("prerender-spa-plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const routes = require("./src/router/routes");

/** @type {Options} */
const config = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") {
      return {};
    }

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ["/", "/tip", "tip/:id"],
          renderAfterDocumentEvent: "prerender-event",
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({}),
          postProcess(context) {
            if (context.route === "/404") {
              context.outputPath = path.join(config.output.path, "/404.html");
            }
            // Remove google analytics script (will be readded by client)
            // Add data-server-rendered="true" to #app (dynamically add here rather than hard code in index.html)
            const $ = cheerio.load(context.html);
            $("head")
              .children('script[src*="google-analytics"]')
              .remove();
            $("#app").attr("data-server-rendered", "true");
            context.html = $.html();
            return context;
          }
        })
      ]
    };
  },
  devServer: {
    overlay: false
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/init.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixin.scss";
          @import "@/assets/styles/common.scss";
        `
      }
    }
  },
  pluginOptions: {
    sitemap: {
      outputDir: "public",
      pretty: true,
      // baseURL: "https://greene.netlify.app",
      routes
    }
  },
  // https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {
    name: "Greene",
    themeColor: "#fff",
    msTileColor: "#fff",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      cacheId: "VueSeoSpa",
      importWorkboxFrom: "local",
      navigateFallback: "/index.html",
      navigateFallbackWhitelist: [/^((?!\/404).)*$/]
    }
  }
};
//productionSourceMap: false

module.exports = config;
