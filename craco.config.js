const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const cracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: cracoEsbuildPlugin }],
  webpack: smp.wrap({
    configure: webpackConfig => {
      webpackConfig.module.rules.push({
        test: /\.(js|mjs|jsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-react'],
        },
      });

      return webpackConfig;
    },
  }),
};
