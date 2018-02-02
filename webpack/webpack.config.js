const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 80;
const host = 'localhost';
const entryPoiny = './index.js';
const PROD_BUNDLE_DIR_NAME = 'bundle';
const DEV_BUNDLE_DIR_NAME = 'dev';
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;
const dist = IS_DEV ? DEV_BUNDLE_DIR_NAME : PROD_BUNDLE_DIR_NAME;
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
    entry: IS_DEV
        ? [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://' + host + ':' + port,
            'webpack/hot/only-dev-server',
            entryPoiny,
        ]
        : [
            entryPoiny,
        ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(dist),
        publicPath,
    },

    resolve: {
        modules: ['node_modules', './'],
    },

    devtool: IS_DEV ? 'inline-source-map' : false,

    plugins: IS_DEV
        ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                IS_DEV: JSON.stringify(IS_DEV),
                IS_PROD: JSON.stringify(IS_PROD)
            }),
        ]
        : [
            new CleanWebpackPlugin(PROD_BUNDLE_DIR_NAME, { dry: false, root: path.join(__dirname, '..') }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                IS_DEV: JSON.stringify(IS_DEV)
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
    historyApiFallback: true,
    proxy: {
        ['/' + PROD_BUNDLE_DIR_NAME]: {
            target: 'http://' + host + ':' + port,
            pathRewrite: { ['^/' + PROD_BUNDLE_DIR_NAME + '/']: '/' + DEV_BUNDLE_DIR_NAME + '/' },
            bypass: function (req, res, proxyOptions) {
                if (req.url === '/' + DEV_BUNDLE_DIR_NAME + '/bundle.css') {
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