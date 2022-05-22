const { defineConfig } = require('@vue/cli-service');

let toExport = defineConfig({
  transpileDependencies: true,
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
        args[0].title = '同乐教育';
        return args;
    })
  }
})

toExport.publicPath = process.env.NODE_ENV === 'production'
  ? '/TLCEdu/'
  : '/';

module.exports = toExport;