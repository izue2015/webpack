var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname +'/js',
  entry: ["./app"],
  output: {
    path: __dirname + "/build",
    publicPath: '/public/assets',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public'
  },

  module: {
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
      loader: ExtractTextPlugin.extract("style", "css!autoprefixer-loader")
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract("style", "css!autoprefixer-loader!sass")
    },
    {
      test   : /\.(ttf|eot|svg|woff(2)?)$/,
      loader : 'url-loader?limit=10000'
    }
  ]
},
plugins: [
  new ExtractTextPlugin("styles.css")
],
resolve: {
  extensions: ['', '.js', '.es6']
}
}
