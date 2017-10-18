/**
 * Created by JoeLiu on 2017-9-15.
 */

var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');
function resolve(relPath) {
    return path.resolve(__dirname, relPath);
}

module.exports = {
    entry: {
        index: './src/bootstrap.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: "js/[name].[chunkhash].js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('../src'),
            '~': resolve('../src/assets'),
            "jquery":resolve('../src/jslibrary/jquery/jquery.min.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve('../src')]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: utils.vueLoaderOptions()
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 1000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    }
}
