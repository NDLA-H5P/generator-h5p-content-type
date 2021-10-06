/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  const config = {
    entry: {
      bundle: ["react-hot-loader/patch", "./src/index.tsx"],
      semantics: "./src/semantics.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.module.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: isProduction || {
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          exclude: /\.module\.scss$/,
        },
        {
          test: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".scss"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    devServer: {
      static: true,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
    ],
    mode: isProduction ? "production" : "development",
  };

  if (!isProduction) {
    const compiler = webpack(config);

    middleware(compiler, {
      writeToDisk: true,
    });
  }

  return config;
};
