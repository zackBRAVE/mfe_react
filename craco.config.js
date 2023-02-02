const packageName = require('./package.json').name

const publicPath = 'http://localhost:3002'

module.exports = {
  webpack: {
    configure: config => {
      config.output.library = `${packageName}-[name]`
      config.output.libraryTarget = 'umd'
      config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`

      return config
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              publicPath: publicPath
            },
          },
        ],
      },
      // {
      //   test: /\.svg/,
      //   use: {
      //     loader: 'svg-url-loader',
      //     options: {
      //       // make all svg images to work in IE
      //       iesafe: true,
      //     },
      //   },
      // },
    ],
  },
  devServer: devServerConfig => {
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
    }

    devServerConfig.port = 3002

    devServerConfig.historyApiFallback = true
    devServerConfig.hot = false
    devServerConfig.liveReload = false

    return devServerConfig
  },
}
