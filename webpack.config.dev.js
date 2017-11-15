const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'fetch-polyfill',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main/index',
        ],
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js', // cannot be [chunkhash] when using HMR
        // cannot use [hash] because webpack-dev-middleware does not report re-bundling
        // chunkFilename: '[name].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'window.DEV_TOOLS_ENABLED': JSON.stringify(true),
            'process.env': {
                NODE_ENV: JSON.stringify('develop'),
            },
        }),
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/main/index.html',
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(), // instead of HashedModuleIdsPlugin in dist
        new ExtractTextPlugin('[name].css'),
    ],
    module: {
        rules: [{
            test: /\.js$/,
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
        extensions: ['.js', '.css', '.scss', '.json'],
    },
    devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
