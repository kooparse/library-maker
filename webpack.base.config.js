import webpack from 'webpack'

export default {
  entry: {
    '~': ['babel-polyfill', './src']
  },
  output: {
    path: 'lib',
    library: '~',
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-class-properties']
        }
      }
    ],
  },
  plugins: []
}
