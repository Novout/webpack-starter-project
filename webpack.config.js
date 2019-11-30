const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Pt = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[id].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html", inject: "body" }),
    new Webpack.ProvidePlugin({
      "window.jQuery": "jquery"
    })
  ],
  resolve: {
    extensions: [".js", ".styl", ".sass", "scss"],
    alias: {
      "~": Pt.resolve(__dirname, "../src")
    }
  }
};