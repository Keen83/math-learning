var winston = require('winston');

function getLogger(module) {
	var path = module.filename.split('/').slice(-2).join('/');

	var logger = new winston.Logger({
		transports: [
			new winston.transports.Console({
				level: 'debug',
				timestamp: true,
				colorize: true,
				label: path
			})
		]
	});

	return logger;
}

module.exports = getLogger;