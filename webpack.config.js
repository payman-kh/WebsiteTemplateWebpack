const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //mode: 'development',    // production | development | none

    entry: ['@babel/polyfill', './src/JS/index.js'],   // string | object | array

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'JS/bundle.js',
        //publicPath: '/dist'    // didn't get this :((
    },

    devServer: {
        contentBase: './dist'  // the folder where webpack devserver should make the development server
    },

    module: {
        rules: [     // an array of all of the loaders that we want to pass in. each loader is defined as an object      
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
                
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',   //this means keep the original name and the extension of the image
                                                    // if we don't do this the loader will give other names to it

                            outputPath: 'images/',     // the directory to save the images in the dist folder. when not given, 
                                                    // the images will be added to dist root directory but here we can give it a subdirectory
                            
                            publicPath: 'images/'      // tell the html file where the images are (??)
                        }
                    }
                ],  
            },

            {
                test: /\.(m4v|mp4|webm)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'videos/',
                        publicPath: 'videos/'
                    }  
                  }
                ] 
            },

            {
               test: /\.(eot|ttf|woff|svg)$/,
               loader: "file-loader"
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({          // this plugin tells webpack to take the html file from the src folder and inject the 
            filename: 'index.html',      // generated bundle.js into it. so we do not need to copy the html file inside the dist
            template: './src/index.html' //folder
        }),

        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]

}

