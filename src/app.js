var express = require('express');

// Constants
var PORT = 3000;

// App
var app = express();

app.get('/', function (req, res) {
	console.log("New request at " + new Date());
	res.send('Hello, world\n');
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);