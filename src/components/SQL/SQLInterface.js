var http = require('http');
var fs = require('fs');
var ini = require('ini');
var sql = require('mssql');
var url = require('url');

/*
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
*/

var SQLInterface = function (req, res) {
	
	//let pool = sql.connect(tuneSQL)
	/*
	let result = pool.request()
		//.input('input_parametr', sql.int, 10)
		//.output('output_parametr', sql.NVarChar(255), '')
		.query(req.body.commandSQL)
	*/
	//console.log('pool ok');
	//req.body = url.parse(req.body);
	//let str = url.parse(req.body, true);
	console.log('ПППППППППППППП');
	return JSON.stringify({ 'mess': req });
};

module.exports = SQLInterface;