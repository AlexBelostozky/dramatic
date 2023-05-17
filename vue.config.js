const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/dramatic/' : '/',
  css: {
    loaderOptions: {
      less: {
        // eslint-disable-next-line quotes
        // prependData: `import "@/assets/globalStyles/styles.less";`
      }
    }
  }
})
