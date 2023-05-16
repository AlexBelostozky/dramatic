const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // eslint-disable-next-line quotes
        // prependData: `import "@/assets/globalStyles/styles.less";`
      }
    }
  }
})
