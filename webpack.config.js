const path = require('path');
const TersePlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index-client.tsx',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'bundle-client.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      oneOf: [{
        test: /\.tsx?$/,
        use: [{
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
            compilerOptions: {
              target: 'es6'
            },
          },
        }],
      }]
    }],
  },
  plugins: [],
  devtool: 'source-map',
};
