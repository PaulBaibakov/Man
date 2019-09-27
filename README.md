# Man

#npm init -y
#npm install webpack webpack-cli --save-dev
#npm install react react-dom --save
#npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
#npm install css-loader style-loader --save-dev
#npm install webpack-dev-server --save-dev
#npm install html-webpack-plugin --save-dev

webpack.config.js
const RouteSQL = require("./src/components/SQL/RouteSQL.js");
...
...
...
,
	devServer: {
		https: false,
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		compress: true,
		host: '127.0.0.1',
		port: 80,
		proxy: {
			'/api/bypass-example': {
				bypass: (req, res) => res.send({
					mssg: 'response from proxy!!!!!!!!!!!!'
				}),
			},
			'/api/getSQL': {
				bypass: function (req, res) { RouteSQL(req, res) }
			},
		},
	}

