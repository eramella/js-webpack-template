const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader?precision=10' }
                ]
            }
        ]
    },
    plugins: [
        //Addting the following plugin to define the local variable 'process.env.NODE_ENV'
        //It will be use to import index.html in development but not in production. Remember to define this variable based on the actual enviroment.
        //This is used to have page refresh on html changes, which it can be done only on required files.
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
    ]

});