const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
    },
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: "[name][contenthash].js",
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },

        open:true,
        port: 3001,
        compress:true,
        hot:true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "dictionary | Exsemen",
            template: "./src/indexTemp.html",
            filename: 'index.html',
            chunks: ['main']
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
      },
}