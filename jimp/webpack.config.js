module.exports = {
  target: 'webworker',
  mode: 'production',
  output: {
    filename: 'jimp.js',
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
