var log = require('../libs/log')(module);

exports.warn = function(req, res) {
	log.warn("New request at " + new Date() +
		" for req" + req.path +
		". Host: " + req.host +
		". Message: " + req.body.msg);
	res.send('Ok');
};