'use strict';
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

const config = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc : true
                    }
                }
            },
        ]
    },
    entry: './src/index.js',
    plugins: [
        new webpack.BannerPlugin({
            banner: 'react-twitter-button.js v' + pkg.version + ' | (c) yschen25',
            raw: false,
            entryOnly: true
        })
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
            root: 'PropTypes'
        }
    },
    output: {
        filename: `react-twitter-button${
            process.env.NODE_ENV === 'production' ? '.min' : ''
            }.js`,
        library: 'ReactTwitterButton',
        libraryTarget: 'umd',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js']
    }
};

if (process.env.NODE_ENV === 'production') {
    config.optimization = {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
}

module.exports = config;
