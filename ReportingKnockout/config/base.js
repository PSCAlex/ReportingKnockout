var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'vendor': "./Client/ts/Vendor.ts",
            'reporting': "./Client/ts/Reporting.ts"
        },
        output: {
            path: path.resolve(__dirname, "../wwwroot/dist"),
            filename: "[name].js"
        },
        plugins: [
            //chunk vendor code into own bundle
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            //chunk webpack runtime code co vendor code can be cached
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            new ExtractTextPlugin('styles.css'),
            //protect against old libraries that reference jquery symbols
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.ts$/,
                    use: "ts-loader"
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                }
            ]
        }
    }
};