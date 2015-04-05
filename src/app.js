var express = require('express');
var routes = require('./routes');
var loves = require('./routes/love');
var path = require('path');
var logs = require('./routes/log');

// Constants
var PORT = 3000;

// App
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/love', loves.index);
app.post('/log', logs.warn);

app.get('/', routes.index);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);