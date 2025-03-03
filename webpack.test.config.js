const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'none',
    entry: './test/models.spec.ts',
    output: {
        path: __dirname + "/tmp",
        filename: 'models.spec.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.map$/, loader: 'ignore-loader' },
            { test: /\.d.ts$/, loader: 'ignore-loader' },
            { test: /\.ts$/, exclude: /\.d.ts$/, loader: 'ts-loader' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            ts: {
                configFileName: "webpack.test.tsconfig.json"
            }
        })
    ],
}