const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "babel-polyfill",
    "./src/js/index.js",
    "./src/css/styles.scss",
    "./src/css/tailwind.css",
  ],
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "extract-loader",
          {
            loader: "file-loader",
            options: {
              name: "styles.css",
              outputPath: "css",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer"), require("tailwindcss")],
            },
          },
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "extract-loader",
          {
            loader: "file-loader",
            options: {
              name: "tailwind.css",
              outputPath: "css",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer"), require("tailwindcss")],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
