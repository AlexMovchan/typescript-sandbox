const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const failPlugin = require('webpack-fail-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  mode: 'development',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  plugins: [
    failPlugin,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      title: 'Custom template',
      template: join(__dirname, 'public', 'index.html'),
    }),
    new ManifestPlugin({
      publicPath: resolve(__dirname, 'public'),
    }),
  ],
};
