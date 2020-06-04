/**
 * config配置文件
 */
var path = require('path');

var config = {
	debug: true,
	port: 3005,
	mysql: {
		host: '127.0.0.1',
		username: 'root',
		password: 'root1234',
		database: 'mexmio'
	}
}

module.exports = config