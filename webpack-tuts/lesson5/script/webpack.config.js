const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "js/[name].[chunkHash:6].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[chunkHash:6].css",
        }),
        new CopyPlugin([{
            from: path.resolve(process.cwd(), 'src/static'),
            to: path.resolve(process.cwd(), 'dist/static')
        }])
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'static/images/[name].[ext]',
                        publicPath: '/',
                    },
                }, ],
            }

        ],
    },
    devServer: {
        port: 8080,
        open: true,
    },
};