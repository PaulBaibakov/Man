var http = require('http');
var fs = require('fs');
var ini = require('ini');
var sql = require('mssql');
var url = require('url');


var config = ini.parse(fs.readFileSync(__dirname + '/TuneSQL.ini', 'utf-8'));
const tuneSQL = {
	user: String(config.SERVER.username),
	password: String(config.SERVER.password),
	server: String(config.SERVER.server),
	database: String(config.SERVER.database),
	options: {
		encrypt: false // Use this if you're on Windows Azure
	}
};

//req.body.SQLcommand
var SQLInterface = function (req, res) {
	//console.log(req.body.SQLcommand + 'rrrrrrrrrr');
	console.log('!!!!rrrrrrrrrr');

	//res.write(JSON.stringify({ val:'wwwwwwww'}));
	res.write('ok333');

};

module.exports = SQLInterface;