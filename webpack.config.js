const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const RouteSQL = require("./src/components/SQL/RouteSQL.js");
//const testRoute = require("./src/components/SQL/testRoute.js");
const SQLInterface = require("./src/components/SQL/SQLInterface.js");


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	devServer: {
		//https: false,
		historyApiFallback: true,
		//contentBase: path.join(__dirname, 'dist'),
		hot: true,
		compress: true,
		host: '127.0.0.1',
		port: 80,
		proxy: {
			historyApiFallback: true,
			'/api/getSQL': {
				bypass: (req, res) => res.send({
					mssg: SQLInterface(req, res)//testRoute(req, res)
				}),
				changeOrigin: true,
				secure: false
			},
		},

	}
};