const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

  module: {

    rules: [

      {

        test: /\.(sass|css|scss)$/,

        use: [

          {

            loader: MiniCssExtractPlugin.loader,

            options: {

              publicPath: '../'

            }

          },

          "css-loader",

          "sass-loader",

        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: "images",
      //     }
      //   },],
      // },
      // {
      //   test: /\.(svg|eot|woff|woff2|ttf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: "fonts",
      //       }
      //     },
      //   ],
      // },

      // {

      //   test: /\.html$/i,

      //   loader: 'html-loader',

      // },


      // {
      //   test: require.resolve("jquery"),
      //   loader: "expose-loader",
      //   options: {
      //     exposes: ["$", "jQuery"],
      //   },
      // },
    ],
  },
  devServer: {

    static: {

      directory: path.join(__dirname, ' build'),

    },

    compress: true,

    port: 9000,
    hot: false,
    open: true,

    devMiddleware: {

      writeToDisk: true,

    },

  },
  entry: "./src/js/index.js",


  output: {
    publicPath: '/',
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({

      filename: "css/style.css"
    })
  ],



}