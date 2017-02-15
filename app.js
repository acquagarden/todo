'use strict'

const
	express = require('express'),
	app = express(),
	fs = require('fs'),
	parser = require('body-parser');

const
	port = 3001;

app.use(express.static('app'));
app.use('/public', express.static(__dirname + '/public'));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', function(req, res){
	res.send('success');
});

const server = app.listen(process.env.PORT || port, function(){
	console.log(`server running at port : ${ server.address().port}`);
});
