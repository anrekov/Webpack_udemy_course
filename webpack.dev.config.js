const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',
    // add caching for pages that haven't changed
    filename: 'bundle.js',
    // create an absolute path depends on current dirname and relative path
    path: path.resolve(__dirname, './dist'),
    // path for static files (for example, images)
    // publicPath: 'dist/',
    publicPath: '',
  },
  // mode: 'none',
  mode: 'development',
  // mode: 'production',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      // convert svg to base64 (file size will be too big if we will use it for jpg or png)
      {
        test: /\.(svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        // auto choose (if size < 8 kB - inline else resource)
        // type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 3 * 1024  // change 8kB to 3kB
        //   }
        // }
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        // loaders are read from right to left
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },

  plugins: [
    // new TerserPlugin(),  // we don't need to minify code during development
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        // default - remove all subfolders and files inside dist
        '**/*',
        // custom - remove all subfolders and files inside build
        path.join(process.cwd(), 'build**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Hello world!',
      // filename: 'subfolder/custom_filename.html',
      // meta: {
      //   description: 'Some description'
      // },
      template: 'src/index.hbs',
      description: 'Somebody once told me...',
    }),
  ],
}
