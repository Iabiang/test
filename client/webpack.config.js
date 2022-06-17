const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
   entry: "./src/index.js",
   mode: "development",
   devServer: {
      port: 3000,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
                  options: {
                     presets: [
                        "@babel/preset-env",
                        [
                           "@babel/preset-react",
                           {
                              runtime: "automatic"
                           }
                        ]
                     ]
                  }
               }
            ]
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
         }
      ]
   },
   resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".jsx", ".js"]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html"
      })
   ],
   output: {
      filename: "client.js",
      path: path.resolve(__dirname, "../server/public/js")
   }
}
