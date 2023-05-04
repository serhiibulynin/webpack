const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.config.js');

module.export = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 7777,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
