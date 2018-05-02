const { VueLoaderPlugin } = require('vue-loader')

module.exports = {

  mode: 'production',

  plugins: [
    new VueLoaderPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {'modules': false}]
          ]
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};
