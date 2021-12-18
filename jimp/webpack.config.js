const { resolve } = require('path');

module.exports = {
  target: 'webworker',
  mode: 'production',
  entry: resolve(__dirname, 'index.js'),
  output: {
    filename: 'jimp4worker.js',
    library: 'Jimp',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  performance: {
    hints: false,
  },
};
