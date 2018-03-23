const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './vendor/babel-polyfill.min',
            'fetch-polyfill',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main/index',
        ],
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.js', // cannot be [chunkhash] when using HMR
        // cannot use [hash] because webpack-dev-middleware does not report re-bundling
        // chunkFilename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.DefinePlugin({
            'window.DEV_TOOLS_ENABLED': JSON.stringify(true),
            'process.env': {
                NODE_ENV: JSON.stringify('develop'),
            },
        }),
        new SpriteLoaderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(), // instead of HashedModuleIdsPlugin in dist
        new ExtractTextPlugin('[name].css'),
        new FaviconsWebpackPlugin('./invest-logotyp.png'),
    ],
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: resolve(__dirname),
            exclude: /node_modules/,
        }, {
            test: /\.*css$/,
            exclude: /node_modules/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer],
                    },
                }, {
                    loader: 'sass-loader',
                }],
            })),
        }, {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: [{
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                },
            }, {
                loader: 'svgo-loader',
                options: {
                    plugins: [
                        { removeTitle: true },
                        { convertColors: { shorthex: false } },
                        { convertPathData: false },
                    ],
                },
            }],
        }, {
            test: /\.icons\.(js|json)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader', 'webfonts-loader'],
            }),
        }, {
            test: /\.(png|jpg|eot|woff|woff2|ttf)$/,
            use: 'file-loader?',
        }, {
            test: /\.(txt)$/,
            use: 'raw-loader',
        }, {
            test: /\.html$/,
            use: 'raw-loader',
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },
};
