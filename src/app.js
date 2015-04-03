var express = require('express');
var routes = require('./routes');
var path = require('path');

// Constants
var PORT = 3000;

// App
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'client_app')));

app.get('/love', function (req, res) {
	console.log("New request to love at " + new Date());
	res.send("Love you!");
});

app.get('/', routes.index);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);