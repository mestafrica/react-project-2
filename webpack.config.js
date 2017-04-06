//var path = require('path');

module.exports = {
    entry: './app.jsx',
    output: {
        filename: './public/bundle.js',
        path: __dirname
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};