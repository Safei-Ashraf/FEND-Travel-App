const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
//const WorkboxPlugin = require('workbox-webpack-plugin');
const RemoveServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin')




module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    devtool: 'source-map',
    output:{
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new RemoveServiceWorkerPlugin({ filename: 'service-worker.js' })
    ]
}
