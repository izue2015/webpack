module.exports = {
  context: __dirname +'/js',
  entry: ["./app"],
  output: {
    path: __dirname + "/build/js/",
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },

  devServer: {
    contentBase: 'public'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],
    loaders: [{
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: "style!css"
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)$/,
      loader : 'url-loader?limit=10000'
    }
  ]
},

resolve: {
  extensions: ['', '.js', '.es6']
}
}
