var log = require('../libs/log')(module);

exports.index = function(req, res) {
	log.debug("Request for Love at " + new Date());
	res.render('love', {
		title: "Love You"
	});
};