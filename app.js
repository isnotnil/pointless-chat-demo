var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.send('Hello, World!');
});

var server = app.listen(4000, function() {
    console.log('Server listening on port %d', server.address().port);
});
