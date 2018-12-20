const path = require('path')
const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]'
        }
      }
    })

    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@tools': path.resolve(__dirname, 'src/tools'),
      '@api': path.resolve(__dirname, 'api/'),
      '@static': path.resolve(__dirname, 'static/'),
    }

    return config
  }
})
