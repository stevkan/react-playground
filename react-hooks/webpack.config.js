const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]_[local]_[hash:base64]',
                context: path.resolve(__dirname, 'src')
              },
              importLoaders: 1,
              localsConvention: 'camelCaseOnly',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
}