const packageName = require('./package.json').name

module.exports = {
  webpack: {
    configure: config => {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      config.output.library = `${packageName}-[name]`
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      config.output.libraryTarget = 'umd'
      // 按需加载相关，设置为 webpackJsonp_微应用名称 即可
      config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`

      return config
    },
  },
  devServer: devServerConfig => {
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
    }

    devServerConfig.port = 3002

    devServerConfig.historyApiFallback = true
    devServerConfig.hot = true
    devServerConfig.liveReload = false

    return devServerConfig
  },
}
