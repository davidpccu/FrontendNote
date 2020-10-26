var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
	extended : true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
	res.render('index.html',{message:false});
});

app.post('/login', function (req, res){
	var loginClass = require('./bin/login.js');
	var login = new loginClass();
	login.check(req.body.account, req.body.password, function(returnMessage, returnerror){
		res.render('index.html', {message:returnMessage, error:returnerror});
	});
});

console.log('server id runing');

app.listen(3000);