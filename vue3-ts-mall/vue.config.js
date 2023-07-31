const { defineConfig } = require('@vue/cli-service')

// 配置按需引入ElementPlus所需
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 按需引入ElementPlus所需AutoImport+Components
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
})
