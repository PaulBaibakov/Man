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

var SQLInterface = function (req, res) {
	sql.close();
	sql.on('error', err => {
		console.log('error');
	})
	
	sql.connect(tuneSQL).then(pool => {
	
}
module.exports = SQLInterface;