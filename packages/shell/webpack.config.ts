import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { Configuration as WebpackConfiguration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: DevServerConfiguration;
}

const config : Configuration=  {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: true, // veya false yaparak test edebilirsin
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
       {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
         use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
    ],
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        userCard: "userCard@http://localhost:3001/remoteEntry.js",
        contentBar: "contentBar@http://localhost:3002/remoteEntry.js",
        shell: "shell@http://localhost:3000/remoteEntry.js"
      },
      exposes: {
        "./userStore": "./src/store/user/userStore",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        zustand: { singleton: true ,eager : true},
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

export default config
