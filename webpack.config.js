const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const RouteSQL = require("./src/components/SQL/RouteSQL.js");
//const testRoute = require("./src/components/SQL/testRoute.js");
const SQLInterface = require("./src/components/SQL/SQLInterface.js");



var bodyParser = require('body-parser');



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
		before: function (app) {
			app.use(bodyParser.json());
			app.use(
				bodyParser.urlencoded({
					extended: true,
				})
			);

			/*
			app.post('/public-api/auth/cognito', async function (req, res, next) {
				const sNewUrl = 'http://127.0.0.1' + req.url;
				const oOptions = {
					method: 'post',
					url: sNewUrl,
					data: req.body,
				};
				const oProxiedResponse = await axios.request(oOptions);
				res.json(oProxiedResponse.data);
			});
			*/
		},
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		compress: true,
		host: '127.0.0.1',
		port: 80,
		liveReload: true,
		//http2: true,
		proxy: {
			'/api/getSQL': {
				bypass: function (req, res, proxyOptions) { SQLInterface(req, res);}
			},
			changeOrigin: true
		},
	}
};
/*
 * 
 * 
		proxy: {
			'/api/getSQL': {
				bypass: (req, res) => res.send({
					mssg: 'ssssssssss'
				}),
			},
		},
 * 
 * 
 */