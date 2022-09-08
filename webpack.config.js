const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




let mode = 'development'
if (process.env.NODE_ENV === 'production' ) {
    mode = 'production'
}
console.log(mode + ' mode')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    devServer: {
        static: './dist',
        hot: false,
    },
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: 'index.html',
    })],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: [
			    MiniCssExtractPlugin.loader,
				'css-loader',
            ]
        },
        {
            test: /\.s[ac]ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
              'css-loader',
              'sass-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
      ],
    },
    optimization: {

    }
}