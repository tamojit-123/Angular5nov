const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const source = path.resolve(__dirname, 'src');
const buildDirectory = path.resolve(__dirname, 'dist')
const destination = path.resolve(buildDirectory, 'first-application');
const appDirectory = path.resolve(source, 'app');

module.exports = {
    context: source,
    entry: {
        main: ['./main.ts', './style.css'],
        polyfills: './polyfills.ts'

    },
    output: {
        filename: '[name].js',
        path: destination
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-template-loader'
            ]
        },
            {
                test: /\.ts$/,
                loader: 'webpack-replace',
                query: {
                    search: 'moduleId: module.id,',
                    replace: ''
                }
            },
            {
                test: /\.css$/,
                exclude: appDirectory,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.(css|html)$/,
                include: appDirectory,
                loader: 'raw-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};