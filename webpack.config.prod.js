const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './vendor/babel-polyfill.min',
            './src/main/index',
        ],
    },
    output: {
        path: resolve(__dirname, 'dist', 'www'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.DefinePlugin({
            'window.DEV_TOOLS_ENABLED': JSON.stringify(true),
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CleanWebpackPlugin(['dist/www'], {
            root: __dirname,
        }),
        new SpriteLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: true,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([{
            from: resolve(__dirname, 'index.html'),
            to: resolve(__dirname, 'dist', 'www', 'index.html'),
        }]),
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
            use: ExtractTextPlugin.extract({
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
            }),
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
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },
    devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
