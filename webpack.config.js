const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      bundle: './src/main.js',
    },
    output: {
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }),
          
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('./[name].css'),
        new BrowserSyncPlugin({
          host: '127.0.0.1',
          port: 3000,
          files: ['./index.html'],
          server: { baseDir: ['./'] },
        })
    ]
};