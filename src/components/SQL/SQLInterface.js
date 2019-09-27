var domain = require('domain');
var d = domain.create();
d.on('error', function (err) {
	console.error("Доменная ошибка перехвачена %s", err);
});
var http = require('http');
var fs = require('fs');
var ini = require('ini');
var Route = require('./RouteSQL');
var url = require('url');

d.run(function () {
	console.log('domain is run');
	new http.Server(function (req, res) {
		console.log(req.url);
		var urlParse = url.parse(req, true);
		if ((urlParse.pathname === '/sql') && (req.method === 'PUT')) {
			Route(req, res);
		};
	}
	).addListener(listen(tuneSQLServer, '127.0.0.1');
});