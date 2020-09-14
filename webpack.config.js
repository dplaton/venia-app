const path = require('path');

module.exports = {
    entry: {
        main: './src/App.js',
    },
    output: {
        filename: 'dist.js',
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['babel-loader']},
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        compress: true,
        port: 9000,
    },
};
