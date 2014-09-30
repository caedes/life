var express = require('express');
var compress = require('compression');
var app = express();

var one_week = 7 * 24 * 3600;

app.use(compress());
app.use(express.static(__dirname + '/public', { maxAge: one_week }));

app.listen(process.env.PORT || 5000);
