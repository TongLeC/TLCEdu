const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '同乐中文';
      return args;
    })
  },
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/style.scss";`
      }
    }
  }
})