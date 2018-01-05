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
        // This excludes all node_modules from your babel-loader but includes dom7 and swiper
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        query: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      },

      // SCSS
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          //{ loader: 'kss-loader', options: { config: './kss-config.json' } }
        ]
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
      },

      // KSS Node Library
//      {
//         test: /\.(scss)$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'kss-loader',
//           options: {
//             // title: 'KSS Example',
//             // mask: '*.scss|*.css',
//             // placeholder: '[modifier class]',
//             // source: './scss/',
//             // destination: './docs/',
//             // homepage: './../README.md'
//             config: './kss-config.json'
//           }
//         }
//       }
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
