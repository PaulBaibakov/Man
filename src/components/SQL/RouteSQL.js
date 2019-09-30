var fs = require('fs');
var ini = require('ini');
var sql = require('mssql');
var url = require('url');


//var st = fs.readFileSync(__dirname+'/TuneSQL.ini', 'utf-8');
var config = ini.parse(fs.readFileSync(__dirname+'/TuneSQL.ini', 'utf-8'));
const tuneSQL = {
	user: String(config.SERVER.username),
	password: String(config.SERVER.password),
	server: String(config.SERVER.server),
	database: String(config.SERVER.database),
	options: {
		encrypt: false // Use this if you're on Windows Azure
	}
};
var RouteSQL = function (req, res) {
	//res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
	let s = [];
	let ss = '';
	sql.close();
	sql.connect(tuneSQL, function (err) {
		if (err !== null) {
			console.log(err);
			return;
		};
		var urlParse = url.parse(req.url, true);

		let SQLrequest = new sql.Request();
		
		let sql_string = '';
		/*
		if (urlParse.reqValue = 'GetWorkstations') {
			sql_string = 'select * from sp_workstations order by 1';
		};
		*/
		sql_string = 'select top 1 * from sp_workstations order by 1';

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
			ss = row['WORKSTATION_NAME'];
			console.log('dfg' + ss);
			urlParse.reqValue;
		});

		SQLrequest.on('error', function (err) {
			// May be emitted multiple times
			res.write('Ошибка при выпонении запроса ' + err);
		});

		SQLrequest.on('done', function (result) {
			// Always emitted as the last one
			res.write(JSON.stringify(s));
			//res.write(ss);
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

module.exports = RouteSQL;