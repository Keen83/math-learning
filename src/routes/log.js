var log = require('../libs/log')(module);

exports.warn = function(req, res) {
	if (req.host == 'keen.ddns.ukrtel.net') {
		log.warn("New request at " + new Date() +
			". Host: " + req.host +
			". Message: " + req.body.msg);
		res.send('Ok');
	}
};