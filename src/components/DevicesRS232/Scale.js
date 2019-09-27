var domain = require('domain');
var d = domain.create();
d.on('error', function (err) {
	console.error("Доменная ошибка перехвачена %s", err);
});

d.run(function () {
	console.log('domain is run');
	//подключим работу с RS-232
	var SerialPort = require('serialport');
	var fs = require('fs')
		, ini = require('ini');

	var config = ini.parse(fs.readFileSync('Tune.ini', 'utf-8'));
	var options = {
		autoOpen: config.SCALE.autoOpen,
		baudRate: parseInt(config.SCALE.baundRate, 10),
		dataBits: parseInt(config.SCALE.dataBits, 10),
		parity: String(config.SCALE.parity),
		stopBits: parseInt(config.SCALE.stopBits, 10)
	};
	var WebPort = parseInt(config.SCALE.webSocketPort, 10);
	console.log(WebPort);
	var port = new SerialPort(config.SCALE.COMPORT, options);

	port.open(function (err) {
		if (err) {
			return console.error('Error opening port: ', err.message);
			//process.exit(-1);
		}

		// Because there's no callback to write, write errors will be emitted on the port:
		port.write('main screen turn on');
	});

	// The open event is always emitted
	port.on('open', function () {
		// open logic
	});
	// Switches the port into "flowing mode"
	port.on('data', function (data) {
		//console.log('Data:', data.toString('utf-8'));
		/*
			Data: S
			Data: T
			Data: ,
			Data: +
			Data: 0
			Data: 0
			Data: 0
			Data: 1
			Data: .
			Data: 8
			Data: 7
			Data: 2
			Data:  
			Data: k
			Data: g
			Data: 
			Data: 
	
			0001.872 
		 */
		//webSocketServer.data = data.toString('utf-8');
		//WS_Send_Text(data.toString('utf-8'));
		WS_Send_Text(data);
	});

	// Read data that is available but keep the stream from entering "flowing mode"
	port.on('readable', function () {
		console.log('Data:', port.read());
	});

	var WebSocketServer = new require('ws');

	// подключенные клиенты
	var clients = {};

	// WebSocket-сервер на порту 8081
	var webSocketServer = new WebSocketServer.Server({
		port: WebPort
	});
	function getUserHome() {
		return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
	}
	var path = require('path');
	webSocketServer.on('connection', function (ws) {

		let id = Math.random();
		clients[id] = ws;
		console.log(" - новое соединение " + id + " - ");


		ws.on('message', function (message) {
			console.log('получено сообщение ' + message);

			for (let key in clients) {
				//if (clients[key]==ws){
				clients[key].send(message);
				//}
				//break;
				/*
				var d1 = Date.now();
				var d2 = Date.now();
				d2.setSeconds(d1.getSeconds()+10);
				while (d1<d2) {
					d1 = Date.now();
				}
				*/


			}
		});

		ws.on('close', function () {
			console.log('соединение закрыто ' + id);
			delete clients[id];
		});

	});
	const LengthScaleBuffer = 17;
	let ScaleBuff = {};//Array(LengthScaleBuffer);
	let PrevByte = null;
	let CurrPositionInBuff = 0;
	let hexToDec = require('hex-to-dec');
	function WS_Send_Text(txt) {
		if ((PrevByte === '0d'.toString('hex')) &&
			(txt.toString('hex') === '0a'.toString('hex'))/*&&
			(ScaleBuff[0].toString('hex')==='53'.toString('hex') && ScaleBuff[1].toString('hex')==='54'.toString('hex'))*/
		) {
			//запишем последний байт в буфер
			ScaleBuff[LengthScaleBuffer - 1] = txt.toString('hex');
			//Распечатать буфер и зачистить его
			let ss = '';
			//ss = ScaleBuff.toString('utf-8');
			for (let j = 4; j < 13/*LengthScaleBuffer*/; j++) {
				//for(let j = 0; j<LengthScaleBuffer/*LengthScaleBuffer*/; j++){
				ss = ss + String.fromCharCode(hexToDec(ScaleBuff[j]));
			};

			function GetMultiplierInt() {
				let st = '';
				st = '1';

				for (let j = 0; j < parseInt(config.SCALE.Multiplier, 10); j++) {
					st = st + '0';
				}
				return parseInt(st);
			}
			//ss = parseInt(config.SCALE.stopBits, 10)
			function roundPlus(x, n) { //x - число, n - количество знаков
				if (isNaN(x) || isNaN(n)) return false;
				let m = Math.pow(10, n);
				return Math.round(x*m)/m;
			};
			//Рассылаем только стабильный вес
			if ((ScaleBuff[0].toString('hex') === '53'.toString('hex') &&
				ScaleBuff[1].toString('hex') === '54'.toString('hex'))) {
				//console.log('----------------------');
				ss = roundPlus(
						(parseFloat(ss) * GetMultiplierInt()),
						parseInt(config.SCALE.RoundParam, 10));
				//console.log('ss='+ss);
				//console.log('----------------------');
				

				for (let key in clients) {
					clients[key].send(ss);
				}
				//console.log(ss);
			} else {
				for (let key in clients) {
					clients[key].send('');
				}
			}

			//чистим буфер
			ScaleBuff = [];
			CurrPositionInBuff = 0;
			PrevByte = txt.toString('hex');
			return;
		};
		PrevByte = txt.toString('hex');
		ScaleBuff[CurrPositionInBuff] = txt.toString('hex');
		CurrPositionInBuff++;
		//let str = txt.toString('hex');
		//if (str !== '6b'.toString('hex')) {return};

		return;
	}
	d.exit();
})

