const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 3000;
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;
const dist = IS_DEV ? 'dev' : 'bundle';
const publicPath = '/' + dist;

const loaders = [
  {
    loader: 'css-loader',
    options: { minimize: IS_PROD },
  },
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.join('style', '_constants.scss'),
    },
  },
];

const config = {
  context: path.resolve(__dirname, '..'),

  entry: IS_DEV
  ? [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server',
    './index.js'
  ]
  : [
    './index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(dist),
    publicPath
  },

  resolve: {
    modules: ['node_modules', './']
  },

  devtool: IS_DEV ? 'inline-source-map' : false,

  plugins: IS_DEV
  ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
  : [
    new CleanWebpackPlugin('build', { dry: false, root: path.join(__dirname, '..') }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: IS_PROD
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: loaders,
          })
          : ['style-loader'].concat(loaders),
      },
    ],
  },
};

const devServer = {
  hot: true,
  port,
  publicPath,
  proxy: {
    "/bundle": {
      target: "http://localhost:3000",
      pathRewrite: { "^/bundle/": "/dev/" },
      bypass: function (req, res, proxyOptions) {
        if (req.url === '/dev/bundle.css') {
          return res.sendStatus(200);
        }
      }
    },
  },
};

if (IS_DEV) {
  config.devServer = devServer;
}

module.exports = config;