module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js',
    publicPath: '/',
  },
  // node: { fs: 'empty' },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
};
