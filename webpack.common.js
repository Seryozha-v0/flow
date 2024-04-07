const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const genHTMLPlugin = (dir) => {
  const pages = fs.readdirSync(path.resolve(__dirname, dir));
  const pagesJSPath = path.resolve(__dirname, 'src/pages/pages.js');
  fs.writeFileSync(pagesJSPath, '');

  return pages
    .map((page) => {
      const fullPath = path.resolve(__dirname, dir, page);
      const isDirectory = fs.statSync(fullPath).isDirectory();

      if (isDirectory || path.extname(page) !== '.html') return

      fs.appendFileSync(pagesJSPath, `import './${page}';\n`);

      return new HtmlWebpackPlugin({
        template: fullPath,
        filename: page,
        inject: true,
      })
    })
    .filter((page) => !!page)
}

module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(avif|webp|png|svg|jpg|jpeg|gif|ttf|woff|woff2|eot|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => pathData.filename.replace('src/', ''),
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/pages'),
        use: [{ loader: 'html-loader' }]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[id].css'
    }),
    ...genHTMLPlugin('./src/pages'),
  ]
}