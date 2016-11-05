module.exports = {
  entry: ["./utils","./app.js"],
  output: {
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.es6$/,
      esxlude: /node_modules/,
      loader: "babel-loader"
    }
  ]
},

resolve: {
  extensions: ['', '.js', '.es6']
}
}
