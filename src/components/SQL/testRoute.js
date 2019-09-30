var fs = require('fs');
var url = require('url');


var testRoute = function (req, res) {
	let st = 5 + 2 + 1;
	//let urlParsed = req.body(req.body);
	//console.log(urlParsed);
	console.log(req.body.name);
	return 'ff' + req.body.name + st;
};

module.exports = testRoute;