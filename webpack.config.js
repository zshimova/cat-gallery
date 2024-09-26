const path = require('path');

module.exports = {
  entry: './src/index.js',  // Входной файл
  output: {
    filename: 'bundle.js',  // Выходной файл
    path: path.resolve(__dirname, 'dist'),  // Папка для выходного файла
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },
  mode: 'development',  // Режим разработки
  module: {
    rules: [
      {
        test: /\.scss$/,  // Для файлов с расширением .scss
        use: [
          'style-loader',  // Вставляет CSS в DOM
          'css-loader',    // Преобразует CSS в CommonJS
          'sass-loader',   // Компилирует SCSS в CSS
        ],
      },
    ],
  },
};
