const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    addScssSupport(config);
    return config;
  },
};

function addScssSupport(config) {
  config.plugins.push(new MiniCssExtractPlugin());

  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    exclude: /\.module\.scss$/,
  });
}
