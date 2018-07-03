const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'vue-muuri-grid.js',
    libraryTarget: 'umd',
    library: 'vue-muuri-grid',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      comments: false,
      compress: {
        warnings: false
      }
    })
  ])
}


