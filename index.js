var express = require('express');
var compress = require('compression');
var app = express();

var auth = require('http-auth');
var basic = auth.basic({
    realm: 'Veuillez vous authentifier.',
    file: __dirname + '/users.htpasswd',
    algorithm: 'MD5'
});

app.use(compress());
app.use(auth.connect(basic));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);
