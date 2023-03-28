const head = require("../config/head");
const nav = require("../config/nav");
const sidebar = require("../config/sidebar");
const path = require("path");

module.exports = {
  base: "/",
  host: "0.0.0.0",
  port: "3000",
  title: "Wild-Dog",
  description: "A Tool Library for vue2",
  head,
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav,
    sidebar,
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@vuepress": path.join(__dirname, "../images/vuepress"),
        "@WildDog": path.join(__dirname, "../../package/"),
        WildDog: path.join(__dirname, "../../package/wild-dog/"),
      },
    },
  },
};
