/**
 * Created by bradcantor on 2/21/17.
 */
var webpack = require('webpack'); // Requiring the webpack lib
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
        'webpack/hot/only-dev-server', // Reload only the dev server
        './src/index.js'
    ],
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css!'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
    ]
};