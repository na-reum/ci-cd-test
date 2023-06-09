const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const cracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: cracoEsbuildPlugin }],
  webpack: smp.wrap({}),
};
