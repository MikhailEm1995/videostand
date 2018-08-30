const webpack = require('webpack');
const path = require('path');

const parentDir = path.resolve(__dirname, '../');

const postCssPlugin = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer')({
        browsers: [
            'last 3 versions',
            'android 4.2'
        ]
    })
];

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../index.js')
  ],
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 2000,
    ignored: /node_modules/
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    compress: true,
    hot: true,
    progress: true,
    port: 8080,
    watchOptions: {
      aggregateTimeout: 2000,
      ignored: /node_modules/
    }
  },
  devtool: 'cheap-eval-source-map',
  optimization: {
    noEmitOnErrors: true,
    namedModules: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.p?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: postCssPlugin
            }
          }
        ]
      }
    ]
  }
};
