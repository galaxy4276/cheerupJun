const path = require("path");
const ExtractCSS = require("mini-css-extract-plugin");

const MODE = "development";
const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "main.js");
const OUTPUT_DIR = path.resolve(__dirname, "src", "public");

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
        // 형식이 png,jpg인 파일을 파일명 뒤에 해쉬 명을 붙여  publicPath에 로드시킵니다.
        test: /\.(png|jpg)$/,
        loader: "file-loader",
        options: {
          publicPath: "OUTPUT_DIR",
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            publicPath: "OUTPUT_DIR",
            name: "[name].[ext]?[hash]",
            limit: 5000, // 5kb 미만 파일만 data url로 처리. 5kb 이상이면 fallback 되어 fallback 기본값인 file-loader로 처리합니다.
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractCSS({
      filename: "styles.css",
    }),
  ],
};
