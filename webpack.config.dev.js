const path = require('path');

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'app.js'
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: './www',
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
