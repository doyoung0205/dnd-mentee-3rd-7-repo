// /**
//  * @typedef { import("@vue/cli-service").ProjectOptions } Options
//  */

// const path = require("path");
// const PrerenderSpaPlugin = require("prerender-spa-plugin");

// const productionPlugins = [
//   new PrerenderSpaPlugin({
//     staticDir: path.join(__dirname, "dist"),
//     routes: ["/", "/test", "/result/d", "/result/i", "/result/s", "/result/c"],
//     renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
//       renderAfterElementExists: "#app"
//     })
//   })
// ];

/** @type {Options} */
const config = {
  lintOnSave: false,
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.plugins.push(...productionPlugins);
  //   }
  // },
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
  }
};
//productionSourceMap: false

module.exports = config;
