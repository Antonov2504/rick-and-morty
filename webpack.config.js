// @ts-nocheck
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPlugins = (isProd = false) => {
  const plugins = [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, './src/assets/images/favicon.ico'),
      buildTime: new Date().toISOString(),
      template: path.resolve(__dirname, './public/index.html'),
      title: 'Rick and Morty',
      filename: 'index.html',
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css',
      })
    );
  }
  return plugins;
};

const modulesOptions = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
        },
      ],
      exclude: /node_modules/,
    },
  ],
};

const resolveOptions = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
  alias: {
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@src': path.resolve(__dirname, './src'),
    '@utils': path.resolve(__dirname, './src/utils'),
  },
};


const developmentConfig = () => {
  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: "/",
      clean: true,
    },
    module: modulesOptions,
    plugins: getPlugins(),
    resolve: resolveOptions,
  };
};

const productionConfig = () => {
  return {
    devtool: false,
    mode: 'production',
    output: {
      filename: 'main-[hash:8].js',
      publicPath: '',
    },
    module: modulesOptions,
    plugins: getPlugins(true),
    resolve: resolveOptions,
  };
};

module.exports.developmentConfig = developmentConfig;
module.exports.productionConfig = productionConfig;
