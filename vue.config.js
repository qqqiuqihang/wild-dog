const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave: false,

  chainWebpack: (config) => {
    //   config.resolve.alias.set("@/", resolve("./src")).set("@WildDog/", resolve("./package")).set("WildDog/", resolve("./package/wild-dog"));
    //   //set第一个参数：设置的别名，第二个参数：设置的路径
    // config.module
    //   .rule("js")
    //   .include.add("/package")
    //   .end()
    //   .use("babel")
    //   .loader("babel-loader");
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@WildDog": resolve("package"),
        WildDog: resolve("package/wild-dog"),
      },
    },
    output: {
      // 配置打包输出的格式
      libraryExport: "default",
      libraryTarget: "umd",
      library: "MyLibrary",
      // 配置打包时的文件名
      filename: "WildDog.js",
      chunkFilename: "WildDog.[name].js",
    },
  },
};
