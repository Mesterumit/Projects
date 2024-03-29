const path = require('path');

module.exports ={
    mode:"development",
    entry: path.resolve(__dirname,"src", "app.js"),
    output:{
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename :'[name][text]',

    },
    devtoll : 'source-map',

    module :{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    }
}