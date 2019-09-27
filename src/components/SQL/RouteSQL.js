var fs = require('fs');
var ini = require('ini');
var sql = require('mssql');
var url = require('url');

//var config = ini.parse(fs.readFileSync('TuneSQL.ini', 'utf-8'));
const tuneSQL = {
	user: 'sa',/*String(config.SERVER.user),*/
	password: 'sa',/*String(config.SERVER.password),*/
	server: 'soft-70\sql2012',/*String(config.SERVER.server),*/
	database: 'TAURAS',/*String(config.SERVER.database),*/
	options: {
		encrypt: false // Use this if you're on Windows Azure
	}
};
var Route = function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
	let s = [];
	sql.connect(tuneSQL, function (err) {
		if (err !== null) {
			console.log(err);
			return;
		};
		var urlParse = url.parse(req.url, true);

		let SQLrequest = new sql.Request();
		let sql_string = '';
		if (urlParse.reqValue = 'GetWorkstations') {
			sql_string = 'select * from sp_workstations order by 1';
		};

		SQLrequest.stream = true; // You can set streaming differently for each request
		SQLrequest.query(sql_string); // or request.execute(procedure)

		SQLrequest.on('recordset', function (columns) {
			// Emitted once for each recordset in a query
			//console.log('recordset '+columns['SOST_NAME']);
			s.length = 0;
			return;
		});


		SQLrequest.on('row', function (row) {
			// Emitted for each row in a recordset
			s[s.length] = {
				WORKSTATION_ID: row['WORKSTATION_ID'],
				WORKSTATION_NAME: row['WORKSTATION_NAME']
			};
		});

		SQLrequest.on('error', function (err) {
			// May be emitted multiple times
			res.write('������ ��� ��������� ������� ' + err);
		});

		SQLrequest.on('done', function (result) {
			// Always emitted as the last one
			res.write(JSON.stringify(s));
			/*
			for (let i=0; i<s.length; i++){
				res.write(s[i].RN+'<br>');
				res.write(s[i].SOST_NAME+'<br>');
			};
			*/
			res.end();
			//console.log(result.toString('utf-8'));
			sql.close();
			//console.log(req);
		});
	});

	sql.on('error', function (err) {
		console.log('on errrrrrrrrrror ' + err);
	});
	//res.end();
};

module.exports = Route;