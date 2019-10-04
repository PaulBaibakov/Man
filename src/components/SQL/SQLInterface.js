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
	sql.close();
	sql.connect(tuneSQL).then(() => {
		return sql.query(req.body.SQLcommand)
	}).then(result => {
		console.dir(result)
		}).catch(err => {
			console.dir('err - 'err);
	})

};

module.exports = SQLInterface;