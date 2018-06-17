
module.exports = {
  mode: "production",
  entry: './src/js/login',
  output: {
    filename: './src/game.js',
    library: 'home'
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "sourse-map",

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
