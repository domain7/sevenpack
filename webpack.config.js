const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: { // Compile into js/build.js
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
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
            ['es2015', {
              modules: false
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
              loader: 'csso-loader',
              query: {
                comments: false
              }
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


      // Images
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            query: {
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      }
    ]
  },
  plugins: [
    // Extracting css into a file
    new ExtractTextPlugin({
      filename: 'styles.css',
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
};
