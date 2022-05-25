const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
        args[0].title = '同乐教育';
        return args;
    })
  },
  // Change this line when deploying to custom domain
  /*publicPath: process.env.NODE_ENV === 'production'
    ? '/TLCEdu/'
    : '/'*/
    publicPath: '/TLCEdu/'
})
