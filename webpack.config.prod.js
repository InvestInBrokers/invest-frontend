const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            './src/main/index',
        ],
    },
    output: {
        path: resolve(__dirname, 'dist', 'www'),
        filename: '[name].js',
    },
    plugins: [
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
        new HtmlWebpackPlugin({
            template: './src/main/index.html',
        }),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([{
            from: join(__dirname, 'src/main/index.html'),
            to: join(__dirname, 'dist', 'www', 'index.html'),
        }]),
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
        extensions: ['.js', '.css', '.scss', '.json'],
    },
    devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
