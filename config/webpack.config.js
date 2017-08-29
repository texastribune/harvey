const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');

const NODE_ENV = process.env.NODE_ENV;

const config = {
  devtool: 'cheap-module-source-map',
  context: path.join(paths.appSrc, 'scripts'),
  entry: {
    // if you are building an embed, swap out these two lines
    main: ['./utils/polyfills.js', './main.js'],
    // main: ['./utils/polyfills.js', './main-embed.js']
  },
  output: {
    path: path.join(paths.appDist, 'scripts'),
    pathinfo: true,
    publicPath: '/scripts/',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(paths.appSrc, 'scripts'),
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }]],
          plugins: [
            'syntax-dynamic-import',
            [
              'transform-es2015-classes',
              {
                loose: true,
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    setImmediate: false,
  },
};

if (NODE_ENV === 'development') {
  config.plugins.push(new webpack.NamedModulesPlugin());
}

module.exports = config;
