const path = require("path");
const ExtractCSS = require("mini-css-extract-plugin");
const FileLoader = require('file-loader');

const MODE = "development";
const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "src", "public");
const IMG_OUTPUT_DIR = path.resolve(__dirname, "src", "public", "img");

module.exports = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    filename: "[name].js",
    path: OUTPUT_DIR,
  },
  module: {
    rules: [
        {
          test: /\.s[ac]ss$/i,  
          use: [
            {
              loader: ExtractCSS.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '[name].[ext]',
              outputPath: '/img',
            },
          },
        ],
        }
      ],
    },
  plugins: [
    new ExtractCSS({
      filename: "styles.css",
    }),
  ],
};





// {
  //   test: /\.(png|jpg)$/,
  //   use: {
    //     loader: "url-loader",
//     options: {
  //       publicPath: "OUTPUT_DIR",
  //       name: "[name].[ext]?[hash]",
  //       limit: 5000, // 5kb �̸� ���ϸ� data url�� ó��. 5kb �̻��̸� fallback �Ǿ� fallback �⺻���� file-loader�� ó���մϴ�.
  //     },
  //   },
  // },
// ������ png,jpg�� ������ ���ϸ� �ڿ� �ؽ� ���� �ٿ�  publicPath�� �ε��ŵ�ϴ�.