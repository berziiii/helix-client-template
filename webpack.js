'use strict';

const webpack = require('webpack');
const path    = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    options: {
        entry: {
            bundle: './assets/index.js',
        },

        output: {
            filename: 'bundle.min.js',
            path: path.join(__dirname, './public'),
            publicPath: 'public/'
        },

        plugins: [
            new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
            }),
            new UglifyJsPlugin(),
        ],
        resolve: {
            modulesDirectories: [
                "node_modules",
                "assets/scripts"
                ]
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(hbs|handlebars)$/,
                    loader: 'handlebars-loader',
                    query: {
                        helperDirs: [
                        path.join(__dirname, '/../assets/scripts/templates/helpers')
                        ]
                    }
                }
        ]},
        stats: {
            colors: true,
            modules: true,
            reasons: true,
        },
    },
    build: {
        failOnError: true,
        watch: false,
        keepalive: false,
    },
    devtool: "#inline-source-map",
    externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
};