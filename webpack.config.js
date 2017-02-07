const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ["es2015", {
              "modules": false
            }]
          ]
        }
      },

      // SCSS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'csso-loader'
            }, {
              loader: 'postcss-loader'
            }, {
              loader: 'sass-loader',
              query: {
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    // Extracting css into a file
    new ExtractTextPlugin({
      filename: 'dist/styles.css',
      allChunks: true,
    }),

    // Uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
  ],
}
