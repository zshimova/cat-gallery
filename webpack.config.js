// const path = require('path');

// module.exports = {
//   entry: './src/index.js',  // Входной файл
//   output: {
//     filename: 'bundle.js',  // Выходной файл
//     path: path.resolve(__dirname, 'dist'),  // Папка для выходного файла
//     clean: true, 
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'), 
//     },
//     open: true,  
//     port: 3000,  
//   },
//   mode: 'development',  // Режим разработки
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,  
//         use: [
//           'style-loader',  
//           'css-loader',    
//           'sass-loader',   
//         ],
//       },
//     ],
//   },
// };



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Входной файл
  output: {
    filename: 'bundle.js',  // Имя сгенерированного файла
    path: path.resolve(__dirname, 'dist'),  // Директория для файлов сборки
    publicPath: '/',  // Убедитесь, что publicPath указывает на корень
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    open: true,  
    port: 3000,  
  },
  mode: 'development',  
  module: {
    rules: [
      {
        test: /\.scss$/,  
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',  
      filename: 'index.html',       
    }),
  ],
};
