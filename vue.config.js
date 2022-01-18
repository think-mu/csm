module.exports = {
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/' ,
  // outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        utils: '@/utils',
        components: '@/components',
        service: '@/service',
        views: '@/views',
        router: '@/router',
        'base-ui': '@/base-ui'
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://rcjg.gzfda.gov.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
}
