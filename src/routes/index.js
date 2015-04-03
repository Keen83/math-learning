var log = require('../libs/log')(module);

exports.index = function(req, res) {
	log.debug("Request for Index at " + new Date());
	res.render('index', {
		title: "Math Learning"
	});
};