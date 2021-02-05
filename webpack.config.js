const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'dist',
    hot: true,
    inline: true,
    open: true,
    port: 3000,
  },
  module: {
    rules:
    [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '',
          },
        },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|mp4|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: './',
        },
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public/assets'),
          to: path.resolve(__dirname, './dist/assets'),
        },
      ],
    }),
  ],
};
