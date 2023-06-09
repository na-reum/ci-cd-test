const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const cracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: cracoEsbuildPlugin }],
  webpack: smp.wrap({
    configure: webpackConfig => {
      const oneOfRule = webpackConfig.module.rules.find(rule => Array.isArray(rule.oneOf));

      if (oneOfRule) {
        oneOfRule.oneOf.unshift({
          test: /\.(js|mjs|jsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-react'],
          },
        });
      }

      return webpackConfig;
    },
  }),
};
