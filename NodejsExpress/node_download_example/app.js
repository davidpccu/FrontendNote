var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var options = {
        root : __dirname + '/public/',
        dotfiles : 'deny',
        headers : {
            'x-timestamp' : Date.now(),
            'x-sent' : true
        }
    };

    //res.sendFile('as.html', options, function(err) {
    res.sendFile('index.html', options, function(err) {
        if (err) {
            res.status(err.status).end();
        } else {
            console.log('Sent:index.html');
        }
    });
});

app.get('/download/:name', function(req, res) {
    var downloadClass = require('./bin/download.js');
    var dl = new downloadClass();
    var pathString = './download/' + req.params.name;
    
    dl.checkFile(pathString, function(isFile) {
        if (isFile) {
            res.download(pathString);
        } else {
            res.send('error');
        }
    });
});

console.log('server is running');

app.listen(3000);