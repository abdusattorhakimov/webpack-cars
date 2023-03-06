const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
        about: path.resolve(__dirname, './src/js/about.js')

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
            title: "Car Racing",
            template: "./src/indexTemp.html",
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: "about | page",
            template: "./src/page/aboutTemp.html",
            filename: 'about.html',
            chunks: ['about']
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