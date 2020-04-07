const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            filename: "css/[name].[chunkHash:6].css",
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }, {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },

        ]
    },
    devServer: {
        port: 8080,
        open: true
    }
}