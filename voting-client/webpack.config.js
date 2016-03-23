var webpack =  require('webpack');
var os = require('os');

console.log(os.hostname());

module.exports = {
    entry: [
        'webpack-dev-server/client?https://tutorial-full-stack-redux-javascriptsandbox.c9users.io:8081/',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']  
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer : {
        host: '0.0.0.0',
        port: 8081,
        contentBase: './dist',
        hot: true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
};